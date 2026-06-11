import { NextRequest, NextResponse } from "next/server";
import { kv_get, kv_set, kv_exists, kv_smembers, kv_sadd } from "@/lib/redis";

export async function POST(req: NextRequest) {
  try {
    const { actie, data } = await req.json();

    if (actie === "registreer") {
      const { gebruikersnaam, klasCode } = data;
      const naamKey = `leerling:naam:${gebruikersnaam.toLowerCase()}`;
      const klasKey = `klas:${klasCode.toUpperCase()}`;

      const bestaand = await kv_exists(naamKey);
      if (bestaand) return NextResponse.json({ succes: false, fout: "Deze gebruikersnaam is al bezet." });

      const klas = await kv_get(klasKey);
      if (!klas) return NextResponse.json({ succes: false, fout: "Ongeldige klascode. Vraag je docent om de juiste code." });

      const id = `ll_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      const leerling = {
        id, gebruikersnaam,
        klasCode: klasCode.toUpperCase(),
        aangemeldOp: new Date().toISOString(),
        startniveau: null,
        diagnostischGedaan: false,
        huidigNiveau: "beginner",
      };

      await kv_set(`leerling:${id}`, leerling);
      await kv_set(naamKey, id);
      await kv_sadd(`klas:leerlingen:${klasCode.toUpperCase()}`, id);

      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "login") {
      const { gebruikersnaam } = data;
      const id = await kv_get(`leerling:naam:${gebruikersnaam.toLowerCase()}`);
      if (!id) return NextResponse.json({ succes: false, fout: "Gebruikersnaam niet gevonden." });
      const leerling = await kv_get(`leerling:${id}`);
      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "updateNiveau") {
      const { leerlingId, nieuwNiveau, diagnostisch } = data;
      const leerling = await kv_get(`leerling:${leerlingId}`) as Record<string, unknown>;
      if (!leerling) return NextResponse.json({ succes: false, fout: "Leerling niet gevonden." });

      leerling.huidigNiveau = nieuwNiveau;
      if (diagnostisch && !leerling.diagnostischGedaan) {
        leerling.startniveau = nieuwNiveau;
        leerling.diagnostischGedaan = true;
      }
      await kv_set(`leerling:${leerlingId}`, leerling);
      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "slaVoortgangOp") {
      const { leerlingId, moduleSlug, score, totaal, niveau, tijdBesteed, foutieveVragen } = data;
      const key = `voortgang:${leerlingId}:${moduleSlug}`;
      const bestaand = (await kv_get(key) as { pogingen: unknown[] }) || { pogingen: [] };
      bestaand.pogingen.push({
        score, totaal, niveau, tijdBesteed, foutieveVragen,
        tijdstip: new Date().toISOString(),
      });
      await kv_set(key, bestaand);
      await kv_sadd(`leerling:modules:${leerlingId}`, moduleSlug);
      return NextResponse.json({ succes: true });
    }

    return NextResponse.json({ succes: false, fout: "Onbekende actie." });
  } catch (err) {
    return NextResponse.json({ succes: false, fout: String(err) });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const actie = searchParams.get("actie");

  if (actie === "voortgang") {
    const leerlingId = searchParams.get("leerlingId");
    const moduleSlugs = await kv_smembers(`leerling:modules:${leerlingId}`);
    const resultaten = await Promise.all(
      moduleSlugs.map(async (slug) => {
        const data = await kv_get(`voortgang:${leerlingId}:${slug}`);
        return data ? { moduleSlug: slug, ...(data as object) } : null;
      })
    );
    return NextResponse.json({ succes: true, voortgang: resultaten.filter(Boolean) });
  }

  return NextResponse.json({ succes: false, fout: "Onbekende actie." });
}

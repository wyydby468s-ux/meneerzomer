import { NextRequest, NextResponse } from "next/server";

// Tijdelijke in-memory store (wordt vervangen door Vercel KV)
// Voor productie: gebruik VERCEL_KV_REST_API_URL en VERCEL_KV_REST_API_TOKEN
const store = new Map<string, unknown>();

export async function POST(req: NextRequest) {
  try {
    const { actie, data } = await req.json();

    if (actie === "registreer") {
      const { gebruikersnaam, klasCode } = data;
      
      // Controleer of gebruikersnaam al bestaat
      const bestaand = store.get(`leerling:naam:${gebruikersnaam.toLowerCase()}`);
      if (bestaand) {
        return NextResponse.json({ succes: false, fout: "Deze gebruikersnaam is al bezet." });
      }

      // Controleer of klas bestaat
      const klas = store.get(`klas:${klasCode.toUpperCase()}`);
      if (!klas) {
        return NextResponse.json({ succes: false, fout: "Ongeldige klascode. Vraag je docent om de juiste code." });
      }

      const id = `ll_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      const leerling = {
        id,
        gebruikersnaam,
        klasCode: klasCode.toUpperCase(),
        aangemeldOp: new Date().toISOString(),
        startniveau: null,
        diagnostischGedaan: false,
        huidigNiveau: "beginner",
      };

      store.set(`leerling:${id}`, leerling);
      store.set(`leerling:naam:${gebruikersnaam.toLowerCase()}`, id);

      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "login") {
      const { gebruikersnaam } = data;
      const id = store.get(`leerling:naam:${gebruikersnaam.toLowerCase()}`);
      if (!id) {
        return NextResponse.json({ succes: false, fout: "Gebruikersnaam niet gevonden." });
      }
      const leerling = store.get(`leerling:${id}`);
      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "updateNiveau") {
      const { leerlingId, nieuwNiveau, diagnostisch } = data;
      const leerling = store.get(`leerling:${leerlingId}`) as Record<string, unknown>;
      if (!leerling) return NextResponse.json({ succes: false, fout: "Leerling niet gevonden." });
      
      leerling.huidigNiveau = nieuwNiveau;
      if (diagnostisch && !leerling.diagnostischGedaan) {
        leerling.startniveau = nieuwNiveau;
        leerling.diagnostischGedaan = true;
      }
      store.set(`leerling:${leerlingId}`, leerling);
      return NextResponse.json({ succes: true, leerling });
    }

    if (actie === "slaVoortgangOp") {
      const { leerlingId, moduleSlug, score, totaal, niveau, tijdBesteed, foutieveVragen } = data;
      const key = `voortgang:${leerlingId}:${moduleSlug}`;
      const bestaand = (store.get(key) as { pogingen: unknown[] }) || { pogingen: [] };
      bestaand.pogingen.push({
        score, totaal, niveau, tijdBesteed, foutieveVragen,
        tijdstip: new Date().toISOString(),
      });
      store.set(key, bestaand);
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
    const resultaten: Record<string, unknown>[] = [];
    store.forEach((waarde, sleutel) => {
      if (sleutel.startsWith(`voortgang:${leerlingId}:`)) {
        const moduleSlug = sleutel.split(":")[2];
        resultaten.push({ moduleSlug, ...(waarde as object) });
      }
    });
    return NextResponse.json({ succes: true, voortgang: resultaten });
  }

  return NextResponse.json({ succes: false, fout: "Onbekende actie." });
}

import { NextRequest, NextResponse } from "next/server";
import { kv_get, kv_set, kv_exists, kv_smembers, kv_sadd } from "@/lib/redis";

// Initialiseer standaard docent en klassen als ze niet bestaan
async function initData() {
  const docentKey = "docent:doc_mz";
  const bestaat = await kv_exists(docentKey);
  if (!bestaat) {
    await kv_set(docentKey, {
      id: "doc_mz",
      gebruikersnaam: "meneerzomer",
      wachtwoord: "docent2025",
    });
    await kv_set("docent:naam:meneerzomer", "doc_mz");
  }
}

export async function POST(req: NextRequest) {
  try {
    await initData();
    const { actie, data } = await req.json();

    if (actie === "docentLogin") {
      const { gebruikersnaam, wachtwoord } = data;
      const docentId = await kv_get(`docent:naam:${gebruikersnaam.toLowerCase()}`);
      if (!docentId) return NextResponse.json({ succes: false, fout: "Gebruikersnaam niet gevonden." });
      const docent = await kv_get(`docent:${docentId}`) as Record<string, unknown>;
      if (!docent || docent.wachtwoord !== wachtwoord) return NextResponse.json({ succes: false, fout: "Onjuist wachtwoord." });
      return NextResponse.json({ succes: true, docent: { ...docent, wachtwoord: undefined } });
    }

    if (actie === "maakKlas") {
      const { docentId, naam } = data;
      const code = "MZ" + naam.toUpperCase().replace(/\s/g, "").slice(0, 6);
      const id = `klas_${Date.now()}`;
      const klas = { id, naam, code, docentId, aangemeldOp: new Date().toISOString() };
      await kv_set(`klas:${code}`, klas);
      await kv_sadd(`docent:klassen:${docentId}`, code);
      return NextResponse.json({ succes: true, klas });
    }

    if (actie === "voegTekstToe") {
      const { docentId, klasCode, moduleSlug, titel, inhoud } = data;
      const id = `tekst_${Date.now()}`;
      const tekst = { id, docentId, klasCode, moduleSlug, titel, inhoud, aangemeldOp: new Date().toISOString(), actief: true };
      await kv_set(`tekst:${id}`, tekst);
      await kv_sadd(`klasseTeksten:${klasCode}:${moduleSlug}`, id);
      return NextResponse.json({ succes: true, tekst });
    }

    return NextResponse.json({ succes: false, fout: "Onbekende actie." });
  } catch (err) {
    return NextResponse.json({ succes: false, fout: String(err) });
  }
}

export async function GET(req: NextRequest) {
  try {
    await initData();
    const { searchParams } = new URL(req.url);
    const actie = searchParams.get("actie");

    if (actie === "klasOverzicht") {
      const docentId = searchParams.get("docentId");
      const klasCodes = await kv_smembers(`docent:klassen:${docentId}`);

      const klassen = await Promise.all(klasCodes.map(async (code) => {
        const klas = await kv_get(`klas:${code}`) as Record<string, unknown>;
        if (!klas) return null;

        const leerlingIds = await kv_smembers(`klas:leerlingen:${code}`);
        const leerlingen = await Promise.all(leerlingIds.map(async (lid) => {
          const leerling = await kv_get(`leerling:${lid}`) as Record<string, unknown>;
          if (!leerling) return null;
          const moduleSlugs = await kv_smembers(`leerling:modules:${lid}`);
          const voortgang = await Promise.all(moduleSlugs.map(async (slug) => {
            const v = await kv_get(`voortgang:${lid}:${slug}`);
            return v ? { moduleSlug: slug, ...(v as object) } : null;
          }));
          return { ...leerling, voortgang: voortgang.filter(Boolean) };
        }));

        return { ...klas, leerlingen: leerlingen.filter(Boolean) };
      }));

      return NextResponse.json({ succes: true, klassen: klassen.filter(Boolean) });
    }

    if (actie === "getTeksten") {
      const klasCode = searchParams.get("klasCode");
      const moduleSlug = searchParams.get("moduleSlug");
      const ids = await kv_smembers(`klasseTeksten:${klasCode}:${moduleSlug}`);
      const teksten = await Promise.all(ids.map(id => kv_get(`tekst:${id}`)));
      return NextResponse.json({ succes: true, teksten: teksten.filter(Boolean) });
    }

    return NextResponse.json({ succes: false, fout: "Onbekende actie." });
  } catch (err) {
    return NextResponse.json({ succes: false, fout: String(err) });
  }
}

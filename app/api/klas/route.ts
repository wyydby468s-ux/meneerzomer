import { NextRequest, NextResponse } from "next/server";

// Gedeelde store (in productie: Vercel KV)
const store = new Map<string, unknown>();

// Initialiseer met een testdocent en testklas
store.set("docent:doc_test", {
  id: "doc_test",
  gebruikersnaam: "meneerzomer",
  wachtwoord: "docent2025",
  klassen: ["MZ6V", "MZ5H"],
});
store.set("klas:MZ6V", { id: "klas_1", naam: "6V", code: "MZ6V", docentId: "doc_test" });
store.set("klas:MZ5H", { id: "klas_2", naam: "5H", code: "MZ5H", docentId: "doc_test" });
store.set("docent:naam:meneerzomer", "doc_test");

export async function POST(req: NextRequest) {
  try {
    const { actie, data } = await req.json();

    if (actie === "docentLogin") {
      const { gebruikersnaam, wachtwoord } = data;
      const docentId = store.get(`docent:naam:${gebruikersnaam.toLowerCase()}`);
      if (!docentId) return NextResponse.json({ succes: false, fout: "Gebruikersnaam niet gevonden." });
      const docent = store.get(`docent:${docentId}`) as Record<string, unknown>;
      if (docent.wachtwoord !== wachtwoord) return NextResponse.json({ succes: false, fout: "Onjuist wachtwoord." });
      return NextResponse.json({ succes: true, docent: { ...docent, wachtwoord: undefined } });
    }

    if (actie === "maakKlas") {
      const { docentId, naam } = data;
      const code = "MZ" + naam.toUpperCase().replace(/\s/g, "").slice(0, 6);
      const id = `klas_${Date.now()}`;
      const klas = { id, naam, code, docentId, aangemeldOp: new Date().toISOString() };
      store.set(`klas:${code}`, klas);
      const docent = store.get(`docent:${docentId}`) as Record<string, unknown>;
      if (docent) {
        const klassen = (docent.klassen as string[]) || [];
        klassen.push(code);
        docent.klassen = klassen;
        store.set(`docent:${docentId}`, docent);
      }
      return NextResponse.json({ succes: true, klas });
    }

    if (actie === "voegTekstToe") {
      const { docentId, klasCode, moduleSlug, titel, inhoud } = data;
      const id = `tekst_${Date.now()}`;
      const tekst = { id, docentId, klasCode, moduleSlug, titel, inhoud, aangemeldOp: new Date().toISOString(), actief: true };
      store.set(`tekst:${id}`, tekst);
      const klasTeksten = (store.get(`klasseTeksten:${klasCode}:${moduleSlug}`) as string[]) || [];
      klasTeksten.push(id);
      store.set(`klasseTeksten:${klasCode}:${moduleSlug}`, klasTeksten);
      return NextResponse.json({ succes: true, tekst });
    }

    return NextResponse.json({ succes: false, fout: "Onbekende actie." });
  } catch (err) {
    return NextResponse.json({ succes: false, fout: String(err) });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const actie = searchParams.get("actie");

  if (actie === "klasOverzicht") {
    const docentId = searchParams.get("docentId");
    const docent = store.get(`docent:${docentId}`) as Record<string, unknown>;
    if (!docent) return NextResponse.json({ succes: false, fout: "Docent niet gevonden." });

    const klassen = [];
    for (const code of (docent.klassen as string[]) || []) {
      const klas = store.get(`klas:${code}`) as Record<string, unknown>;
      if (!klas) continue;

      const leerlingen: unknown[] = [];
      store.forEach((waarde, sleutel) => {
        if (sleutel.startsWith("leerling:") && !sleutel.includes("naam:")) {
          const ll = waarde as Record<string, unknown>;
          if (ll.klasCode === code) leerlingen.push(ll);
        }
      });

      const leerlingenMet = await Promise.all(
        leerlingen.map(async (ll) => {
          const leerling = ll as Record<string, unknown>;
          const voortgang: unknown[] = [];
          store.forEach((waarde, sleutel) => {
            if (sleutel.startsWith(`voortgang:${leerling.id}:`)) {
              const moduleSlug = sleutel.split(":")[2];
              voortgang.push({ moduleSlug, ...(waarde as object) });
            }
          });
          return { ...leerling, voortgang };
        })
      );

      klassen.push({ ...klas, leerlingen: leerlingenMet });
    }
    return NextResponse.json({ succes: true, klassen });
  }

  if (actie === "getTeksten") {
    const klasCode = searchParams.get("klasCode");
    const moduleSlug = searchParams.get("moduleSlug");
    const ids = (store.get(`klasseTeksten:${klasCode}:${moduleSlug}`) as string[]) || [];
    const teksten = ids.map(id => store.get(`tekst:${id}`)).filter(Boolean);
    return NextResponse.json({ succes: true, teksten });
  }

  return NextResponse.json({ succes: false, fout: "Onbekende actie." });
}

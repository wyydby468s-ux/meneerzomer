// Client-side storage via localStorage voor voortgang
// Server-side via Vercel KV API routes

export function slaLeerlingOp(leerling: {
  id: string;
  gebruikersnaam: string;
  klasCode: string;
  huidigNiveau: string;
  startniveau: string | null;
  diagnostischGedaan: boolean;
}) {
  if (typeof window === "undefined") return;
  localStorage.setItem("mz_leerling", JSON.stringify(leerling));
}

export function getLeerling() {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("mz_leerling");
  return data ? JSON.parse(data) : null;
}

export function verwijderLeerling() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("mz_leerling");
}

export function slaVoortgangOp(moduleSlug: string, data: {
  score: number;
  totaal: number;
  niveau: string;
  tijdBesteed: number;
  foutieveVragen: string[];
}) {
  if (typeof window === "undefined") return;
  const key = `mz_voortgang_${moduleSlug}`;
  const bestaand = getVoortgang(moduleSlug) || { pogingen: [] };
  bestaand.pogingen.push({
    ...data,
    tijdstip: new Date().toISOString(),
  });
  localStorage.setItem(key, JSON.stringify(bestaand));
}

export function getVoortgang(moduleSlug: string) {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(`mz_voortgang_${moduleSlug}`);
  return data ? JSON.parse(data) : null;
}

export function getAlleVoortgang() {
  if (typeof window === "undefined") return [];
  const resultaten = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("mz_voortgang_")) {
      const slug = key.replace("mz_voortgang_", "");
      const data = getVoortgang(slug);
      if (data) resultaten.push({ moduleSlug: slug, ...data });
    }
  }
  return resultaten;
}

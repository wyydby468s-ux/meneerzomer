// Eenvoudige database via Vercel KV (key-value store)
// Alle data wordt opgeslagen als JSON in key-value pairs

export interface Leerling {
  id: string;
  gebruikersnaam: string;
  klasCode: string;
  aangemeldOp: string;
  startniveau: "beginner" | "gevorderd" | "expert" | null;
  diagnostischGedaan: boolean;
  huidigNiveau: "beginner" | "gevorderd" | "expert";
}

export interface ModuleVoortgang {
  leerlingId: string;
  moduleSlug: string;
  gestart: string;
  voltooid: string | null;
  tijdBesteed: number; // seconden
  scores: {
    vraagId: string;
    goed: boolean;
    niveau: string;
    tijdstip: string;
  }[];
  huidigNiveau: "beginner" | "gevorderd" | "expert";
  voltooiScore: number | null; // percentage
}

export interface Klas {
  id: string;
  naam: string;
  code: string;
  docentId: string;
  aangemeldOp: string;
}

export interface Docent {
  id: string;
  gebruikersnaam: string;
  wachtwoordHash: string;
  aangemeldOp: string;
}

export interface DocentTekst {
  id: string;
  docentId: string;
  klasCode: string;
  moduleSlug: string;
  titel: string;
  inhoud: string;
  aangemeldOp: string;
  actief: boolean;
}

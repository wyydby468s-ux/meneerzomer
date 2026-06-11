"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getLeerling, slaLeerlingOp } from "@/lib/storage";

const diagnostischeVragen = [
  {
    id: "d1", moeilijkheid: "makkelijk",
    vraag: "Welk tekstdoel heeft een tekst die de lezer wil aanzetten tot actie, zoals doneren of stemmen?",
    opties: ["Informeren", "Instrueren", "Activeren", "Beschrijven"],
    antwoord: 2,
    uitleg: "Een activerende tekst wil de lezer aanzetten tot een concrete actie.",
  },
  {
    id: "d2", moeilijkheid: "makkelijk",
    vraag: "Wat is een signaalwoord dat een tegenstelling aangeeft?",
    opties: ["Bovendien", "Echter", "Dus", "Omdat"],
    antwoord: 1,
    uitleg: "'Echter' geeft een tegenstelling aan. 'Bovendien' is opsomming, 'dus' is conclusie, 'omdat' is oorzaak.",
  },
  {
    id: "d3", moeilijkheid: "gemiddeld",
    vraag: "Een schrijver gebruikt feiten en statistieken om zijn standpunt te onderbouwen. Welk soort argument is dit?",
    opties: ["Deskundigenargument", "Voorbeeldargument", "Feitargument", "Analogieargument"],
    antwoord: 2,
    uitleg: "Feiten en statistieken zijn de basis van een feitargument.",
  },
  {
    id: "d4", moeilijkheid: "gemiddeld",
    vraag: "Alinea 2 begint met: 'Dit leidde ertoe dat de economie instortte.' Welk verband heeft alinea 2 met alinea 1?",
    opties: ["Opsomming", "Tegenstelling", "Oorzaak-gevolg", "Conclusie"],
    antwoord: 2,
    uitleg: "'Dit leidde ertoe' geeft een gevolg aan van wat in alinea 1 stond. Dat is een oorzaak-gevolgverband.",
  },
  {
    id: "d5", moeilijkheid: "moeilijk",
    vraag: "Iemand zegt: 'Jij wilt minder vlees eten? Dus jij wilt dat iedereen alleen nog maar gras eet!' Welke drogreden is dit?",
    opties: ["Ad hominem", "Stroman", "Ad populum", "Valse dichotomie"],
    antwoord: 1,
    uitleg: "Het argument van de tegenstander wordt verdraaid naar een absurde extreme versie. Dat is een stroman.",
  },
];

function bepaalNiveau(score: number): "beginner" | "gevorderd" | "expert" {
  if (score <= 1) return "beginner";
  if (score <= 3) return "gevorderd";
  return "expert";
}

export default function NiveautestClient() {
  const router = useRouter();
  const [leerling, setLeerling] = useState<Record<string, unknown> | null>(null);
  const [fase, setFase] = useState<"intro" | "vragen" | "resultaat">("intro");
  const [vraagIndex, setVraagIndex] = useState(0);
  const [gekozen, setGekozen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [antwoorden, setAntwoorden] = useState<boolean[]>([]);

  useEffect(() => {
    const l = getLeerling();
    if (!l) { router.push("/leerling"); return; }
    setLeerling(l);
  }, [router]);

  const huidigeVraag = diagnostischeVragen[vraagIndex];

  function kiesAntwoord(index: number) {
    if (gekozen !== null) return;
    setGekozen(index);
    const goed = index === huidigeVraag.antwoord;
    if (goed) setScore(s => s + 1);
    setAntwoorden(prev => [...prev, goed]);
  }

  async function volgende() {
    if (vraagIndex + 1 >= diagnostischeVragen.length) {
      const nieuwNiveau = bepaalNiveau(score + (gekozen === huidigeVraag.antwoord ? 0 : 0));
      const definitiefNiveau = bepaalNiveau(antwoorden.filter(Boolean).length + (gekozen === huidigeVraag.antwoord ? 1 : 0));

      // Update in API
      if (leerling) {
        await fetch("/api/leerling", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            actie: "updateNiveau",
            data: { leerlingId: leerling.id, nieuwNiveau: definitiefNiveau, diagnostisch: true }
          }),
        });
        const bijgewerkt = { ...leerling, huidigNiveau: definitiefNiveau, startniveau: definitiefNiveau, diagnostischGedaan: true };
        slaLeerlingOp(bijgewerkt as Parameters<typeof slaLeerlingOp>[0]);
      }
      setFase("resultaat");
    } else {
      setVraagIndex(i => i + 1);
      setGekozen(null);
    }
  }

  const niveauInfo: Record<string, { label: string; kleur: string; uitleg: string; tip: string }> = {
    beginner: {
      label: "Beginner",
      kleur: "text-green-600",
      uitleg: "Je beheerst de basisconcepten nog niet volledig. Dat is geen probleem, we beginnen met heldere uitleg en eenvoudige vragen.",
      tip: "Begin bij de uitlegsecties en werk de oefenvragen rustig door.",
    },
    gevorderd: {
      label: "Gevorderd",
      kleur: "text-yellow-600",
      uitleg: "Je hebt al een goede basis. Je krijgt vragen die toepassing van de theorie vereisen.",
      tip: "Focus op de toepassingsvragen en gebruik de AI-tutor voor lastige onderdelen.",
    },
    expert: {
      label: "Expert",
      kleur: "text-purple-600",
      uitleg: "Je beheerst de stof goed. Je krijgt verdiepende vragen die kritisch denken vereisen.",
      tip: "Ga direct aan de slag met de inzichtvragen en de tekst-oefenfunctie.",
    },
  };

  const eindScore = antwoorden.filter(Boolean).length;
  const eindNiveau = bepaalNiveau(eindScore);
  const info = niveauInfo[eindNiveau];

  if (fase === "intro") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg w-full text-center">
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="logo" width={48} height={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Niveautest</h1>
          <p className="text-gray-600 mb-6">
            Je maakt 5 korte vragen over Nederlandse taal. Op basis van je antwoorden bepalen we op welk niveau je begint.
            Dit duurt ongeveer 3 minuten.
          </p>
          <div className="bg-[#e8f0fb] rounded-xl p-4 mb-6 text-left text-sm text-[#1a56a0]">
            <strong>Let op:</strong> Wees eerlijk. Het systeem past zich aan op jouw niveau, dus een hogere of lagere score leidt allebei tot materiaal dat bij je past.
          </div>
          <button onClick={() => setFase("vragen")}
            className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition">
            Niveautest starten →
          </button>
        </div>
      </div>
    );
  }

  if (fase === "resultaat") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg w-full text-center">
          <div className="text-5xl mb-4">{eindScore >= 4 ? "🎉" : eindScore >= 2 ? "👍" : "💪"}</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Jouw niveau: <span className={info.kleur}>{info.label}</span></h1>
          <p className="text-gray-600 mb-4">{eindScore} van de 5 vragen goed</p>
          <p className="text-gray-600 mb-6">{info.uitleg}</p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left text-sm text-gray-600">
            <strong>Tip:</strong> {info.tip}
          </div>
          <button onClick={() => router.push("/leerling")}
            className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition">
            Naar mijn dashboard →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg w-full">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-400">Vraag {vraagIndex + 1} van {diagnostischeVragen.length}</span>
          <div className="flex gap-1">
            {diagnostischeVragen.map((_, i) => (
              <div key={i} className={`w-6 h-1.5 rounded-full ${i < vraagIndex ? "bg-[#1a56a0]" : i === vraagIndex ? "bg-[#1a56a0]/50" : "bg-gray-200"}`} />
            ))}
          </div>
        </div>

        <p className="text-gray-800 font-medium text-base leading-relaxed mb-6">{huidigeVraag.vraag}</p>

        <div className="space-y-3 mb-6">
          {huidigeVraag.opties.map((optie, i) => {
            let klasse = "border-gray-200 bg-white hover:border-[#1a56a0]";
            if (gekozen !== null) {
              if (i === huidigeVraag.antwoord) klasse = "border-green-400 bg-green-50";
              else if (i === gekozen) klasse = "border-red-400 bg-red-50";
            }
            return (
              <button key={i} onClick={() => kiesAntwoord(i)}
                className={`w-full text-left p-4 rounded-lg border-2 transition text-sm ${klasse}`}>
                <span className="font-medium text-gray-400 mr-2">{["A", "B", "C", "D"][i]}.</span>
                {optie}
              </button>
            );
          })}
        </div>

        {gekozen !== null && (
          <div className={`mb-4 p-4 rounded-lg text-sm ${gekozen === huidigeVraag.antwoord ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            <strong>{gekozen === huidigeVraag.antwoord ? "Goed! " : "Helaas. "}</strong>
            {huidigeVraag.uitleg}
          </div>
        )}

        <button onClick={volgende} disabled={gekozen === null}
          className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition disabled:opacity-30">
          {vraagIndex + 1 >= diagnostischeVragen.length ? "Resultaat bekijken →" : "Volgende vraag →"}
        </button>
      </div>
    </div>
  );
}

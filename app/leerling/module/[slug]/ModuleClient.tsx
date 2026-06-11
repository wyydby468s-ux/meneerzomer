"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Les } from "@/data/lessen";
import { getLeerling, slaVoortgangOp } from "@/lib/storage";

interface Props { les: Les; }

type Tab = "uitleg" | "oefenen" | "tekst" | "chat";
type Fase = "tekstInvoer" | "vragen" | "resultaat";

interface GegenereerdeVraag {
  id: string;
  vraag: string;
  opties: string[];
  antwoord: number;
  uitleg: string;
}

export default function ModuleClient({ les }: Props) {
  const [tab, setTab] = useState<Tab>("uitleg");
  const [leerling, setLeerling] = useState<Record<string, unknown> | null>(null);
  const startTijd = useRef(Date.now());

  // Oefenvragen state
  const [gekozenNiveau, setGekozenNiveau] = useState<string | null>(null);
  const [vraagIndex, setVraagIndex] = useState(0);
  const [gekozenAntwoord, setGekozenAntwoord] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [klaar, setKlaar] = useState(false);
  const [foutieveVragen, setFoutieveVragen] = useState<string[]>([]);

  // Tekst-oefenen state
  const [tekst, setTekst] = useState("");
  const [tekstBron, setTekstBron] = useState<"eigen" | "docent">("eigen");
  const [docentTeksten, setDocentTeksten] = useState<{ id: string; titel: string; inhoud: string }[]>([]);
  const [fase, setFase] = useState<Fase>("tekstInvoer");
  const [gegenereerdeVragen, setGegenereerdeVragen] = useState<GegenereerdeVraag[]>([]);
  const [tekstVraagIndex, setTekstVraagIndex] = useState(0);
  const [tekstGekozen, setTekstGekozen] = useState<number | null>(null);
  const [tekstScore, setTekstScore] = useState(0);
  const [tekstFout, setTekstFout] = useState<string[]>([]);
  const [genereerLaden, setGenereerLaden] = useState(false);
  const [genereerFout, setGenereerFout] = useState("");

  // Chat state
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: `Hoi! Ik ben je AI-tutor voor **${les.titel}**. Stel me gerust een vraag!` }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const l = getLeerling();
    setLeerling(l);
    if (l?.klasCode) {
      fetch(`/api/klas?actie=getTeksten&klasCode=${l.klasCode}&moduleSlug=${les.slug}`)
        .then(r => r.json())
        .then(d => { if (d.succes && d.teksten?.length > 0) setDocentTeksten(d.teksten); });
    }
  }, [les.slug]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const niveau = (leerling?.huidigNiveau as string) || "beginner";

  // Adaptieve vragen: filter op niveau
  const niveauMap: Record<string, string[]> = {
    beginner: ["reproductie"],
    gevorderd: ["reproductie", "toepassing"],
    expert: ["reproductie", "toepassing", "inzicht"],
  };

  const beschikbareNiveaus = niveauMap[niveau] || ["reproductie"];
  const filteredVragen = gekozenNiveau
    ? les.vragen.filter(v => v.niveau === gekozenNiveau)
    : les.vragen.filter(v => beschikbareNiveaus.includes(v.niveau));

  const huidigeVraag = filteredVragen[vraagIndex];

  function kiesAntwoord(index: number) {
    if (gekozenAntwoord !== null || !huidigeVraag) return;
    setGekozenAntwoord(index);
    if (index === huidigeVraag.antwoord) {
      setScore(s => s + 1);
    } else {
      setFoutieveVragen(prev => [...prev, huidigeVraag.id]);
    }
  }

  function volgende() {
    if (vraagIndex + 1 >= filteredVragen.length) {
      const tijdBesteed = Math.round((Date.now() - startTijd.current) / 1000);
      const eindScore = score + (gekozenAntwoord === huidigeVraag?.antwoord ? 1 : 0);
      const scorePercent = Math.round((eindScore / filteredVragen.length) * 100);

      slaVoortgangOp(les.slug, {
        score: eindScore,
        totaal: filteredVragen.length,
        niveau,
        tijdBesteed,
        foutieveVragen,
      });

      // Adaptief: pas niveau aan
      if (leerling && scorePercent >= 80 && niveau !== "expert") {
        const niveauVolgorde = ["beginner", "gevorderd", "expert"];
        const huidigIndex = niveauVolgorde.indexOf(niveau);
        const nieuwNiveau = niveauVolgorde[huidigIndex + 1];
        fetch("/api/leerling", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ actie: "updateNiveau", data: { leerlingId: leerling.id, nieuwNiveau, diagnostisch: false } }),
        });
      } else if (leerling && scorePercent < 40 && niveau !== "beginner") {
        const niveauVolgorde = ["beginner", "gevorderd", "expert"];
        const huidigIndex = niveauVolgorde.indexOf(niveau);
        const nieuwNiveau = niveauVolgorde[huidigIndex - 1];
        fetch("/api/leerling", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ actie: "updateNiveau", data: { leerlingId: leerling.id, nieuwNiveau, diagnostisch: false } }),
        });
      }

      setKlaar(true);
    } else {
      setVraagIndex(i => i + 1);
      setGekozenAntwoord(null);
    }
  }

  async function genereerVragen() {
    if (tekst.trim().length < 100) {
      setGenereerFout("Voer een tekst in van minimaal 100 tekens.");
      return;
    }
    setGenereerLaden(true);
    setGenereerFout("");
    try {
      const res = await fetch("/api/tekstvragen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tekst,
          moduleSlug: les.slug,
          lesTitel: les.titel,
          lesUitleg: les.uitleg,
          niveau,
          type: "gesloten",
        }),
      });
      const data = await res.json();
      if (data.fout) { setGenereerFout(data.fout); return; }
      if (!data.vragen?.length) { setGenereerFout("Geen vragen gegenereerd. Probeer een langere tekst."); return; }
      setGegenereerdeVragen(data.vragen);
      setFase("vragen");
      setTekstVraagIndex(0);
      setTekstGekozen(null);
      setTekstScore(0);
      setTekstFout([]);
    } catch { setGenereerFout("Verbindingsfout. Probeer opnieuw."); }
    setGenereerLaden(false);
  }

  function kiesTekstAntwoord(index: number) {
    if (tekstGekozen !== null) return;
    setTekstGekozen(index);
    const vraag = gegenereerdeVragen[tekstVraagIndex];
    if (index === vraag.antwoord) {
      setTekstScore(s => s + 1);
    } else {
      setTekstFout(prev => [...prev, vraag.id]);
    }
  }

  function volgendeVraag() {
    if (tekstVraagIndex + 1 >= gegenereerdeVragen.length) {
      setFase("resultaat");
    } else {
      setTekstVraagIndex(i => i + 1);
      setTekstGekozen(null);
    }
  }

  async function stuurChat(bericht?: string) {
    const msg = bericht || chatInput.trim();
    if (!msg) return;
    setChatInput("");
    setChatLoading(true);
    const nieuw = [...chatMessages, { role: "user", content: msg }];
    setChatMessages(nieuw);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nieuw, lesTitel: les.titel, lesUitleg: les.uitleg }),
      });
      const data = await res.json();
      setChatMessages([...nieuw, { role: "assistant", content: data.antwoord }]);
    } catch {
      setChatMessages([...nieuw, { role: "assistant", content: "Er ging iets mis." }]);
    }
    setChatLoading(false);
  }

  const niveauKleur: Record<string, string> = {
    beginner: "bg-green-100 text-green-800",
    gevorderd: "bg-yellow-100 text-yellow-800",
    expert: "bg-purple-100 text-purple-800",
  };

  const huidigeTekstVraag = gegenereerdeVragen[tekstVraagIndex];
  const tekstScorePercent = gegenereerdeVragen.length > 0
    ? Math.round((tekstScore / gegenereerdeVragen.length) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/leerling" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="font-bold text-[#1a56a0] hidden sm:block">Meneer Zomer</span>
        </Link>
        <div className="flex items-center gap-3">
          {leerling && (
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${niveauKleur[niveau]}`}>
              {niveau.charAt(0).toUpperCase() + niveau.slice(1)}
            </span>
          )}
          <Link href="/leerling" className="text-sm text-gray-500 hover:text-[#1a56a0]">← Dashboard</Link>
        </div>
      </header>

      <div className="bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] text-white px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-blue-200 mb-1">{les.vaardigheid}</div>
          <h1 className="text-2xl font-bold mb-2">{les.emoji} {les.titel}</h1>
          <p className="text-blue-100 text-sm">{les.ondertitel}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-3xl mx-auto flex gap-0 overflow-x-auto">
          {(["uitleg", "oefenen", "tekst", "chat"] as Tab[]).map((t) => {
            const labels: Record<Tab, string> = { uitleg: "📖 Uitleg", oefenen: "📊 Oefenvragen", tekst: "📄 Tekst oefenen", chat: "🤖 AI-tutor" };
            return (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${tab === t ? "border-[#1a56a0] text-[#1a56a0]" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
                {labels[t]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* UITLEG */}
        {tab === "uitleg" && (
          <div>
            {les.youtubeId && (
              <div className="mb-6 aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe src={`https://www.youtube.com/embed/${les.youtubeId}`} className="w-full h-full" allowFullScreen title={les.titel} />
              </div>
            )}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 prose max-w-none">
              <ReactMarkdown>{les.uitleg}</ReactMarkdown>
            </div>
            <div className="mt-6 flex gap-4">
              <button onClick={() => setTab("oefenen")} className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition">
                Ga oefenen →
              </button>
              <button onClick={() => setTab("tekst")} className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1a56a0] transition">
                Oefen met een tekst 📄
              </button>
            </div>
          </div>
        )}

        {/* OEFENVRAGEN */}
        {tab === "oefenen" && (
          <div>
            {!gekozenNiveau && !klaar ? (
              <div>
                <div className="bg-[#e8f0fb] rounded-xl p-4 mb-6 text-sm text-[#1a56a0]">
                  Op basis van je niveau (<strong>{niveau}</strong>) krijg je vragen op het juiste niveau. Haal je 80%+ dan ga je omhoog, onder de 40% ga je een niveau terug.
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Kies hoe je wilt oefenen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <button onClick={() => { setGekozenNiveau("adaptief"); setVraagIndex(0); setScore(0); setKlaar(false); setGekozenAntwoord(null); setFoutieveVragen([]); }}
                    className="bg-[#1a56a0] text-white rounded-xl p-5 text-left hover:bg-[#154480] transition">
                    <div className="font-bold mb-1">🎯 Adaptief oefenen</div>
                    <div className="text-blue-100 text-sm">{filteredVragen.length} vragen op jouw niveau ({niveau})</div>
                  </button>
                  {["reproductie", "toepassing", "inzicht"].map((n) => {
                    const aantal = les.vragen.filter(v => v.niveau === n).length;
                    if (aantal === 0) return null;
                    const labels: Record<string, string> = { reproductie: "★ Reproductie", toepassing: "★★ Toepassing", inzicht: "★★★ Inzicht" };
                    const kleuren: Record<string, string> = { reproductie: "border-green-200 hover:border-green-400", toepassing: "border-yellow-200 hover:border-yellow-400", inzicht: "border-red-200 hover:border-red-400" };
                    return (
                      <button key={n} onClick={() => { setGekozenNiveau(n); setVraagIndex(0); setScore(0); setKlaar(false); setGekozenAntwoord(null); setFoutieveVragen([]); }}
                        className={`bg-white rounded-xl p-5 text-left border-2 ${kleuren[n]} transition`}>
                        <div className="font-semibold text-gray-800 mb-1">{labels[n]}</div>
                        <div className="text-gray-500 text-sm">{aantal} vragen</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : klaar ? (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-5xl mb-4">{score >= filteredVragen.length * 0.8 ? "🎉" : score >= filteredVragen.length * 0.4 ? "👍" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Klaar!</h2>
                <p className="text-gray-600 mb-2">Je had <strong>{score} van de {filteredVragen.length}</strong> vragen goed.</p>
                {score >= filteredVragen.length * 0.8 && niveau !== "expert" && (
                  <p className="text-green-600 text-sm font-medium mb-4">🎯 Uitstekend! Je gaat omhoog naar het volgende niveau.</p>
                )}
                {score < filteredVragen.length * 0.4 && niveau !== "beginner" && (
                  <p className="text-orange-500 text-sm font-medium mb-4">💪 Nog even oefenen. Je gaat terug naar het vorige niveau.</p>
                )}
                <div className="flex gap-4 justify-center mt-4">
                  <button onClick={() => { setKlaar(false); setVraagIndex(0); setScore(0); setGekozenAntwoord(null); setFoutieveVragen([]); }}
                    className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition">Opnieuw</button>
                  <button onClick={() => { setGekozenNiveau(null); setKlaar(false); }}
                    className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1a56a0] transition">Andere keuze</button>
                </div>
              </div>
            ) : huidigeVraag ? (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    huidigeVraag.niveau === "reproductie" ? "bg-green-100 text-green-800" :
                    huidigeVraag.niveau === "toepassing" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                  }`}>{huidigeVraag.niveau}</span>
                  <span className="text-sm text-gray-400">{vraagIndex + 1} / {filteredVragen.length}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
                  <div className="bg-[#1a56a0] h-1.5 rounded-full transition-all" style={{ width: `${(vraagIndex / filteredVragen.length) * 100}%` }} />
                </div>
                <p className="text-gray-800 font-medium mb-5 leading-relaxed">{huidigeVraag.vraag}</p>
                <div className="space-y-3">
                  {huidigeVraag.opties.map((optie, i) => {
                    let klasse = "border-gray-200 bg-white hover:border-[#1a56a0]";
                    if (gekozenAntwoord !== null) {
                      if (i === huidigeVraag.antwoord) klasse = "border-green-400 bg-green-50";
                      else if (i === gekozenAntwoord) klasse = "border-red-400 bg-red-50";
                    }
                    return (
                      <button key={i} onClick={() => kiesAntwoord(i)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition text-sm ${klasse}`}>
                        <span className="font-medium text-gray-400 mr-2">{["A", "B", "C", "D"][i]}.</span>{optie}
                      </button>
                    );
                  })}
                </div>
                {gekozenAntwoord !== null && (
                  <div className={`mt-4 p-4 rounded-lg text-sm ${gekozenAntwoord === huidigeVraag.antwoord ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                    <strong>{gekozenAntwoord === huidigeVraag.antwoord ? "Goed! " : "Helaas. "}</strong>{huidigeVraag.uitleg}
                    <button onClick={volgende} className="block mt-3 bg-[#1a56a0] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#154480] transition">
                      {vraagIndex + 1 >= filteredVragen.length ? "Bekijk resultaat" : "Volgende vraag →"}
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}

        {/* TEKST OEFENEN */}
        {tab === "tekst" && (
          <div>
            {fase === "tekstInvoer" && (
              <div>
                <div className="bg-[#e8f0fb] rounded-xl p-4 mb-6 text-sm text-[#1a56a0]">
                  Voer een tekst in en het systeem genereert 10 vragen op <strong>{niveau}</strong>-niveau over {les.titel}.
                </div>

                {docentTeksten.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Teksten van je docent</h3>
                    <div className="space-y-2">
                      {docentTeksten.map((dt) => (
                        <button key={dt.id} onClick={() => { setTekst(dt.inhoud); setTekstBron("docent"); }}
                          className={`w-full text-left p-4 rounded-lg border-2 transition ${tekst === dt.inhoud ? "border-[#1a56a0] bg-[#e8f0fb]" : "border-gray-200 bg-white hover:border-[#1a56a0]"}`}>
                          <div className="font-medium text-gray-800 text-sm">{dt.titel}</div>
                          <div className="text-xs text-gray-400 mt-1">{dt.inhoud.slice(0, 80)}...</div>
                        </button>
                      ))}
                    </div>
                    <div className="text-center text-gray-400 text-sm my-4">of</div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block font-semibold text-gray-800 mb-2">Voer zelf een tekst in</label>
                  <textarea value={tekst} onChange={(e) => { setTekst(e.target.value); setTekstBron("eigen"); }}
                    placeholder="Plak hier een tekst van minimaal 100 tekens. Dit kan een krantenartikel, een column, een tekst uit je methode of een andere tekst zijn."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0] min-h-48 resize-y" />
                  <div className="text-xs text-gray-400 mt-1 text-right">{tekst.length} tekens</div>
                </div>

                {genereerFout && <p className="text-red-500 text-sm mb-4">{genereerFout}</p>}

                <button onClick={genereerVragen} disabled={genereerLaden || tekst.trim().length < 100}
                  className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition disabled:opacity-50">
                  {genereerLaden ? "Vragen worden gegenereerd... (even geduld)" : "Genereer 10 vragen bij deze tekst →"}
                </button>
              </div>
            )}

            {fase === "vragen" && huidigeTekstVraag && (
              <div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4 text-sm text-gray-600 max-h-40 overflow-y-auto">
                  <p className="font-medium text-gray-400 text-xs mb-2">TEKST</p>
                  {tekst}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">Vraag {tekstVraagIndex + 1} van {gegenereerdeVragen.length}</span>
                    <span className="text-sm text-gray-400">{tekstScore} goed</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
                    <div className="bg-[#1a56a0] h-1.5 rounded-full transition-all" style={{ width: `${(tekstVraagIndex / gegenereerdeVragen.length) * 100}%` }} />
                  </div>
                  <p className="text-gray-800 font-medium mb-5 leading-relaxed">{huidigeTekstVraag.vraag}</p>
                  <div className="space-y-3">
                    {huidigeTekstVraag.opties.map((optie, i) => {
                      let klasse = "border-gray-200 bg-white hover:border-[#1a56a0]";
                      if (tekstGekozen !== null) {
                        if (i === huidigeTekstVraag.antwoord) klasse = "border-green-400 bg-green-50";
                        else if (i === tekstGekozen) klasse = "border-red-400 bg-red-50";
                      }
                      return (
                        <button key={i} onClick={() => kiesTekstAntwoord(i)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition text-sm ${klasse}`}>
                          <span className="font-medium text-gray-400 mr-2">{["A", "B", "C", "D"][i]}.</span>{optie}
                        </button>
                      );
                    })}
                  </div>
                  {tekstGekozen !== null && (
                    <div className={`mt-4 p-4 rounded-lg text-sm ${tekstGekozen === huidigeTekstVraag.antwoord ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                      <strong>{tekstGekozen === huidigeTekstVraag.antwoord ? "Goed! " : "Helaas. "}</strong>{huidigeTekstVraag.uitleg}
                      <button onClick={volgendeVraag} className="block mt-3 bg-[#1a56a0] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#154480] transition">
                        {tekstVraagIndex + 1 >= gegenereerdeVragen.length ? "Bekijk resultaat" : "Volgende →"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {fase === "resultaat" && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-5xl mb-4">{tekstScorePercent >= 60 ? "🎉" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Klaar!</h2>
                <p className="text-gray-600 mb-2">{tekstScore} van de {gegenereerdeVragen.length} vragen goed ({tekstScorePercent}%)</p>
                <p className={`text-sm font-medium mb-6 ${tekstScorePercent >= 60 ? "text-green-600" : "text-orange-500"}`}>
                  {tekstScorePercent >= 60 ? "Je hebt de minimale score gehaald!" : "Je hebt de minimale score (60%) nog niet gehaald. Probeer het opnieuw."}
                </p>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setFase("tekstInvoer"); setTekst(""); setGegenereerdeVragen([]); }}
                    className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition">
                    Nieuwe tekst
                  </button>
                  <button onClick={() => { setFase("vragen"); setTekstVraagIndex(0); setTekstGekozen(null); setTekstScore(0); setTekstFout([]); }}
                    className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1a56a0] transition">
                    Opnieuw proberen
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CHAT */}
        {tab === "chat" && (
          <div className="flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto space-y-4 pb-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-[#1a56a0] text-white text-sm flex items-center justify-center mr-2 flex-shrink-0 mt-1">🤖</div>
                  )}
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed prose prose-sm ${
                    msg.role === "user" ? "bg-[#1a56a0] text-white rounded-br-sm" : "bg-white border border-gray-100 shadow-sm rounded-bl-sm"
                  }`}>
                    {msg.role === "assistant" ? <ReactMarkdown>{msg.content}</ReactMarkdown> : msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#1a56a0] text-white flex items-center justify-center mr-2">🤖</div>
                  <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      {[0, 0.1, 0.2].map((d, i) => <div key={i} className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />)}
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="flex gap-2 flex-wrap mb-3">
              {["Geef een samenvatting", "Geef een voorbeeld", "Tip voor het examen", "Leg het nog eens uit"].map((knop) => (
                <button key={knop} onClick={() => stuurChat(knop)}
                  className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full hover:border-[#1a56a0] hover:text-[#1a56a0] transition">
                  {knop}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && stuurChat()}
                placeholder="Stel een vraag..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]" />
              <button onClick={() => stuurChat()} disabled={chatLoading || !chatInput.trim()}
                className="bg-[#1a56a0] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#154480] transition disabled:opacity-50">→</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

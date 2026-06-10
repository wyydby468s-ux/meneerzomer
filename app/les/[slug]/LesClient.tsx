"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Les, Vraag, Niveau } from "@/data/lessen";
import ReactMarkdown from "react-markdown";

interface Props { les: Les; }

const niveauKleur: Record<Niveau, string> = {
  reproductie: "bg-green-100 text-green-800",
  toepassing: "bg-yellow-100 text-yellow-800",
  inzicht: "bg-red-100 text-red-800",
};

const niveauLabel: Record<Niveau, string> = {
  reproductie: "★ Reproductie",
  toepassing: "★★ Toepassing",
  inzicht: "★★★ Inzicht",
};

export default function LesClient({ les }: Props) {
  const [tab, setTab] = useState<"uitleg" | "oefenen" | "chat">("uitleg");
  const [gekozenNiveau, setGekozenNiveau] = useState<Niveau | null>(null);
  const [vraagIndex, setVraagIndex] = useState(0);
  const [gekozenAntwoord, setGekozenAntwoord] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [klaar, setKlaar] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: `Hoi! Ik ben je AI-tutor voor **${les.titel}**. Stel me gerust een vraag over de lesstof, of kies een van de onderwerpen hieronder.` }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const filteredVragen = gekozenNiveau ? les.vragen.filter(v => v.niveau === gekozenNiveau) : les.vragen;
  const huidigeVraag: Vraag | undefined = filteredVragen[vraagIndex];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  function kiesAntwoord(index: number) {
    if (gekozenAntwoord !== null || !huidigeVraag) return;
    setGekozenAntwoord(index);
    if (index === huidigeVraag.antwoord) setScore(s => s + 1);
  }

  function volgende() {
    if (vraagIndex + 1 >= filteredVragen.length) {
      setKlaar(true);
    } else {
      setVraagIndex(i => i + 1);
      setGekozenAntwoord(null);
    }
  }

  function herstart() {
    setVraagIndex(0);
    setGekozenAntwoord(null);
    setScore(0);
    setKlaar(false);
  }

  async function stuurChat(tekst?: string) {
    const bericht = tekst || chatInput.trim();
    if (!bericht) return;
    setChatInput("");
    setChatLoading(true);
    const nieuw = [...chatMessages, { role: "user", content: bericht }];
    setChatMessages(nieuw);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nieuw,
          lesTitel: les.titel,
          lesUitleg: les.uitleg,
        }),
      });
      const data = await res.json();
      setChatMessages([...nieuw, { role: "assistant", content: data.antwoord }]);
    } catch {
      setChatMessages([...nieuw, { role: "assistant", content: "Er ging iets mis. Probeer het opnieuw." }]);
    }
    setChatLoading(false);
  }

  const niveaus: Niveau[] = ["reproductie", "toepassing", "inzicht"];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-[#1a56a0]">Meneer Zomer</Link>
        <Link href={les.niveau === "vwo" ? "/vwo" : "/havo"}
          className="text-sm text-gray-500 hover:text-[#1a56a0]">
          ← Terug naar {les.niveau === "vwo" ? "VWO" : "HAVO"}
        </Link>
      </header>

      {/* Les header */}
      <div className="bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] text-white px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-blue-200 mb-1">{les.vaardigheid}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
            <span>{les.emoji}</span> {les.titel}
          </h1>
          <p className="text-blue-100 text-sm mb-4">{les.ondertitel}</p>
          <div className="flex flex-wrap gap-2">
            {les.leerdoelen.map((doel, i) => (
              <span key={i} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">✓ {doel}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-3xl mx-auto flex gap-0">
          {(["uitleg", "oefenen", "chat"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition capitalize ${
                tab === t ? "border-[#1a56a0] text-[#1a56a0]" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}>
              {t === "uitleg" ? "📖 Uitleg" : t === "oefenen" ? "📊 Oefenvragen" : "🤖 AI-tutor"}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* UITLEG TAB */}
        {tab === "uitleg" && (
          <div>
            {les.youtubeId && (
              <div className="mb-6">
                <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={`https://www.youtube.com/embed/${les.youtubeId}`}
                    className="w-full h-full"
                    allowFullScreen
                    title={les.titel}
                  />
                </div>
              </div>
            )}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 prose max-w-none">
              <ReactMarkdown>{les.uitleg}</ReactMarkdown>
            </div>
            <div className="mt-6 flex gap-4">
              <button onClick={() => setTab("oefenen")}
                className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition">
                Ga oefenen →
              </button>
              <button onClick={() => setTab("chat")}
                className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1a56a0] transition">
                Stel een vraag 🤖
              </button>
            </div>
          </div>
        )}

        {/* OEFENVRAGEN TAB */}
        {tab === "oefenen" && (
          <div>
            {!gekozenNiveau ? (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Kies een niveau</h2>
                <p className="text-gray-500 text-sm mb-6">Of oefen alle vragen door te beginnen zonder niveau.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {niveaus.map((n) => {
                    const aantalVragen = les.vragen.filter(v => v.niveau === n).length;
                    if (aantalVragen === 0) return null;
                    return (
                      <button key={n} onClick={() => { setGekozenNiveau(n); setVraagIndex(0); setScore(0); setKlaar(false); setGekozenAntwoord(null); }}
                        className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-[#1a56a0] hover:shadow-md transition">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${niveauKleur[n]}`}>{niveauLabel[n]}</span>
                        <div className="mt-3 font-medium text-gray-800">{aantalVragen} {aantalVragen === 1 ? "vraag" : "vragen"}</div>
                      </button>
                    );
                  })}
                </div>
                <button onClick={() => { setGekozenNiveau(null); setVraagIndex(0); setScore(0); setKlaar(false); setGekozenAntwoord(null); setGekozenNiveau("reproductie"); setTimeout(() => setGekozenNiveau(null), 0); }}
                  className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition">
                  Alle {les.vragen.length} vragen oefenen
                </button>
              </div>
            ) : klaar ? (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-5xl mb-4">{score === filteredVragen.length ? "🎉" : score >= filteredVragen.length / 2 ? "👍" : "💪"}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Klaar!</h2>
                <p className="text-gray-600 mb-6">Je had <strong>{score} van de {filteredVragen.length}</strong> vragen goed.</p>
                <div className="flex gap-4 justify-center">
                  <button onClick={herstart} className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition">
                    Opnieuw
                  </button>
                  <button onClick={() => setGekozenNiveau(null)} className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#1a56a0] transition">
                    Ander niveau
                  </button>
                </div>
              </div>
            ) : huidigeVraag ? (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${niveauKleur[huidigeVraag.niveau]}`}>
                    {niveauLabel[huidigeVraag.niveau]}
                  </span>
                  <span className="text-sm text-gray-400">{vraagIndex + 1} / {filteredVragen.length}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
                  <div className="bg-[#1a56a0] h-1.5 rounded-full transition-all" style={{ width: `${((vraagIndex) / filteredVragen.length) * 100}%` }} />
                </div>
                <p className="text-gray-800 font-medium mb-5 text-base leading-relaxed">{huidigeVraag.vraag}</p>
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
                        <span className="font-medium text-gray-500 mr-2">{["A", "B", "C", "D"][i]}.</span>
                        {optie}
                      </button>
                    );
                  })}
                </div>
                {gekozenAntwoord !== null && (
                  <div className={`mt-4 p-4 rounded-lg text-sm ${gekozenAntwoord === huidigeVraag.antwoord ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                    <strong>{gekozenAntwoord === huidigeVraag.antwoord ? "Goed! " : "Helaas. "}</strong>
                    {huidigeVraag.uitleg}
                    <button onClick={volgende} className="block mt-3 bg-[#1a56a0] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#154480] transition">
                      {vraagIndex + 1 >= filteredVragen.length ? "Bekijk resultaat" : "Volgende vraag →"}
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}

        {/* CHAT TAB */}
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
                  <div className="w-8 h-8 rounded-full bg-[#1a56a0] text-white text-sm flex items-center justify-center mr-2">🤖</div>
                  <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Snelknoppen */}
            <div className="flex gap-2 flex-wrap mb-3">
              {["📋 Geef een samenvatting", "🧠 Oefen begrippen met me", "💡 Geef een voorbeeld", "🎓 Tip voor het examen"].map((knop) => (
                <button key={knop} onClick={() => stuurChat(knop.slice(3))}
                  className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full hover:border-[#1a56a0] hover:text-[#1a56a0] transition">
                  {knop}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && stuurChat()}
                placeholder="Stel een vraag over de lesstof..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]"
              />
              <button onClick={() => stuurChat()}
                disabled={chatLoading || !chatInput.trim()}
                className="bg-[#1a56a0] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#154480] transition disabled:opacity-50">
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

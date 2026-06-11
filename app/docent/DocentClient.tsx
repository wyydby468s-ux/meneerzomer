"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { lessen } from "@/data/lessen";

type Scherm = "login" | "dashboard" | "klas" | "leerling" | "tekst";

interface Leerling {
  id: string;
  gebruikersnaam: string;
  klasCode: string;
  huidigNiveau: string;
  startniveau: string;
  diagnostischGedaan: boolean;
  voortgang: {
    moduleSlug: string;
    pogingen: { score: number; totaal: number; niveau: string; tijdBesteed: number; foutieveVragen: string[]; tijdstip: string }[];
  }[];
}

interface Klas {
  id: string;
  naam: string;
  code: string;
  leerlingen: Leerling[];
}

export default function DocentClient() {
  const [scherm, setScherm] = useState<Scherm>("login");
  const [docent, setDocent] = useState<Record<string, unknown> | null>(null);
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [fout, setFout] = useState("");
  const [laden, setLaden] = useState(false);
  const [klassen, setKlassen] = useState<Klas[]>([]);
  const [geselecteerdeKlas, setGeselecteerdeKlas] = useState<Klas | null>(null);
  const [geselecteerdeLeerling, setGeselecteerdeLeerling] = useState<Leerling | null>(null);
  const [nieuweKlasNaam, setNieuweKlasNaam] = useState("");
  const [tekstTitel, setTekstTitel] = useState("");
  const [tekstInhoud, setTekstInhoud] = useState("");
  const [tekstModule, setTekstModule] = useState("");
  const [tekstKlas, setTekstKlas] = useState("");
  const [tekstSucces, setTekstSucces] = useState(false);

  async function login() {
    if (!gebruikersnaam || !wachtwoord) { setFout("Vul beide velden in."); return; }
    setLaden(true); setFout("");
    try {
      const res = await fetch("/api/klas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actie: "docentLogin", data: { gebruikersnaam, wachtwoord } }),
      });
      const data = await res.json();
      if (!data.succes) { setFout(data.fout); setLaden(false); return; }
      setDocent(data.docent);
      await laadKlassen(data.docent.id);
      setScherm("dashboard");
    } catch { setFout("Verbindingsfout."); }
    setLaden(false);
  }

  async function laadKlassen(docentId: string) {
    const res = await fetch(`/api/klas?actie=klasOverzicht&docentId=${docentId}`);
    const data = await res.json();
    if (data.succes) setKlassen(data.klassen);
  }

  async function maakKlas() {
    if (!nieuweKlasNaam.trim()) return;
    const res = await fetch("/api/klas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ actie: "maakKlas", data: { docentId: docent?.id, naam: nieuweKlasNaam } }),
    });
    const data = await res.json();
    if (data.succes) {
      setNieuweKlasNaam("");
      await laadKlassen(docent?.id as string);
    }
  }

  async function voegTekstToe() {
    if (!tekstTitel || !tekstInhoud || !tekstModule || !tekstKlas) return;
    const res = await fetch("/api/klas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        actie: "voegTekstToe",
        data: { docentId: docent?.id, klasCode: tekstKlas, moduleSlug: tekstModule, titel: tekstTitel, inhoud: tekstInhoud }
      }),
    });
    const data = await res.json();
    if (data.succes) {
      setTekstSucces(true);
      setTekstTitel(""); setTekstInhoud(""); setTekstModule(""); setTekstKlas("");
      setTimeout(() => setTekstSucces(false), 3000);
    }
  }

  function berekenPrognose(leerling: Leerling): string {
    const pogingen = leerling.voortgang.flatMap(v => v.pogingen);
    if (pogingen.length < 2) return "Onvoldoende data";
    const scores = pogingen.map(p => Math.round((p.score / p.totaal) * 100));
    const gemiddelde = scores.reduce((a, b) => a + b, 0) / scores.length;
    const groei = scores.length > 1 ? scores[scores.length - 1] - scores[0] : 0;
    if (gemiddelde >= 75 && groei >= 0) return "Op schema voor expert";
    if (gemiddelde >= 55) return "Op schema voor gevorderd";
    return "Extra oefening aanbevolen";
  }

  const niveauKleur: Record<string, string> = {
    beginner: "bg-green-100 text-green-800",
    gevorderd: "bg-yellow-100 text-yellow-800",
    expert: "bg-purple-100 text-purple-800",
  };

  if (scherm === "login") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Meneer Zomer" width={56} height={56} />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-1">Docentenpaneel</h1>
          <p className="text-center text-gray-500 text-sm mb-6">Meneer Zomer</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gebruikersnaam</label>
              <input value={gebruikersnaam} onChange={(e) => setGebruikersnaam(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
              <input type="password" value={wachtwoord} onChange={(e) => setWachtwoord(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]" />
            </div>
            {fout && <p className="text-red-500 text-sm">{fout}</p>}
            <button onClick={login} disabled={laden}
              className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition disabled:opacity-50">
              {laden ? "Inloggen..." : "Inloggen"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">← Terug naar de site</Link>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-500 text-center">
            Testaccount: gebruikersnaam <strong>meneerzomer</strong>, wachtwoord <strong>docent2025</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="font-bold text-[#1a56a0]">Docentenpaneel</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setScherm("tekst")} className={`text-sm ${scherm === "tekst" ? "text-[#1a56a0] font-semibold" : "text-gray-500 hover:text-[#1a56a0]"}`}>Teksten</button>
          <button onClick={() => setScherm("dashboard")} className={`text-sm ${scherm === "dashboard" ? "text-[#1a56a0] font-semibold" : "text-gray-500 hover:text-[#1a56a0]"}`}>Klassen</button>
          <button onClick={() => { setDocent(null); setScherm("login"); }} className="text-xs text-gray-400 hover:text-gray-600">Uitloggen</button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* DASHBOARD: Klasoverzicht */}
        {scherm === "dashboard" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Mijn klassen</h1>
            </div>

            {/* Nieuwe klas aanmaken */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Nieuwe klas aanmaken</h3>
              <div className="flex gap-3">
                <input value={nieuweKlasNaam} onChange={(e) => setNieuweKlasNaam(e.target.value)}
                  placeholder="bijv. 6V of 5H"
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1a56a0]" />
                <button onClick={maakKlas}
                  className="bg-[#1a56a0] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#154480] transition">
                  Aanmaken
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">De klascode wordt automatisch gegenereerd (bijv. MZ6V). Deel deze code met je leerlingen.</p>
            </div>

            {/* Klassen */}
            {klassen.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="text-5xl mb-4">📚</div>
                <p>Nog geen klassen. Maak je eerste klas aan.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {klassen.map((klas) => (
                  <button key={klas.id} onClick={() => { setGeselecteerdeKlas(klas); setScherm("klas"); }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a56a0] hover:shadow-md transition text-left">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-800 text-lg">{klas.naam}</h3>
                      <span className="bg-[#e8f0fb] text-[#1a56a0] text-xs font-bold px-3 py-1 rounded-full">{klas.code}</span>
                    </div>
                    <div className="text-sm text-gray-500">{klas.leerlingen?.length || 0} leerlingen</div>
                    <div className="mt-3 flex gap-2">
                      {["beginner", "gevorderd", "expert"].map((n) => {
                        const aantal = klas.leerlingen?.filter(l => l.huidigNiveau === n).length || 0;
                        if (aantal === 0) return null;
                        return <span key={n} className={`text-xs px-2 py-0.5 rounded-full ${niveauKleur[n]}`}>{aantal} {n}</span>;
                      })}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* KLAS DETAIL */}
        {scherm === "klas" && geselecteerdeKlas && (
          <div>
            <button onClick={() => setScherm("dashboard")} className="text-sm text-gray-500 hover:text-[#1a56a0] mb-4 flex items-center gap-1">
              ← Terug naar klassen
            </button>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{geselecteerdeKlas.naam}</h1>
                <p className="text-gray-500 text-sm">Klascode: <strong>{geselecteerdeKlas.code}</strong></p>
              </div>
            </div>

            {geselecteerdeKlas.leerlingen?.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="text-5xl mb-4">👤</div>
                <p>Nog geen leerlingen in deze klas.</p>
                <p className="text-sm mt-2">Deel de klascode <strong>{geselecteerdeKlas.code}</strong> met je leerlingen.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Leerling</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Niveau</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Modules</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Prognose</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {geselecteerdeKlas.leerlingen.map((ll) => {
                      const gedaaneModules = ll.voortgang?.length || 0;
                      const prognose = berekenPrognose(ll);
                      return (
                        <tr key={ll.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-800">{ll.gebruikersnaam}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${niveauKleur[ll.huidigNiveau] || "bg-gray-100 text-gray-600"}`}>
                              {ll.huidigNiveau || "onbekend"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600">{gedaaneModules} gedaan</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{prognose}</td>
                          <td className="px-4 py-3">
                            <button onClick={() => { setGeselecteerdeLeerling(ll); setScherm("leerling"); }}
                              className="text-[#1a56a0] hover:underline text-xs font-medium">Details</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* LEERLING DETAIL */}
        {scherm === "leerling" && geselecteerdeLeerling && (
          <div>
            <button onClick={() => setScherm("klas")} className="text-sm text-gray-500 hover:text-[#1a56a0] mb-4">
              ← Terug naar klas
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#e8f0fb] rounded-full flex items-center justify-center text-[#1a56a0] font-bold text-lg">
                {geselecteerdeLeerling.gebruikersnaam[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{geselecteerdeLeerling.gebruikersnaam}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${niveauKleur[geselecteerdeLeerling.huidigNiveau]}`}>
                    Huidig: {geselecteerdeLeerling.huidigNiveau}
                  </span>
                  {geselecteerdeLeerling.startniveau && (
                    <span className="text-xs text-gray-400">Start: {geselecteerdeLeerling.startniveau}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#1a56a0]">{geselecteerdeLeerling.voortgang?.length || 0}</div>
                <div className="text-xs text-gray-500 mt-1">Modules gedaan</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl font-bold text-[#1a56a0]">
                  {geselecteerdeLeerling.voortgang?.flatMap(v => v.pogingen).length || 0}
                </div>
                <div className="text-xs text-gray-500 mt-1">Totaal pogingen</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-sm font-bold text-[#1a56a0]">{berekenPrognose(geselecteerdeLeerling)}</div>
                <div className="text-xs text-gray-500 mt-1">Niveauprognose</div>
              </div>
            </div>

            {geselecteerdeLeerling.voortgang?.length > 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 font-semibold text-gray-800">Voortgang per module</div>
                {geselecteerdeLeerling.voortgang.map((v) => {
                  const les = lessen.find(l => l.slug === v.moduleSlug);
                  const pogingen = v.pogingen || [];
                  const laatste = pogingen[pogingen.length - 1];
                  const scorePercent = laatste ? Math.round((laatste.score / laatste.totaal) * 100) : 0;
                  const totaalTijd = pogingen.reduce((a, p) => a + (p.tijdBesteed || 0), 0);
                  const foutieveIds = laatste?.foutieveVragen || [];
                  const foutieveVragen = les?.vragen.filter(q => foutieveIds.includes(q.id)) || [];
                  return (
                    <div key={v.moduleSlug} className="px-4 py-4 border-b border-gray-50 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-gray-800">{les?.titel || v.moduleSlug}</div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">{Math.round(totaalTijd / 60)} min</span>
                          <span className={`text-sm font-bold ${scorePercent >= 60 ? "text-green-600" : "text-orange-500"}`}>{scorePercent}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                        <div className={`h-1.5 rounded-full ${scorePercent >= 60 ? "bg-green-400" : "bg-orange-400"}`} style={{ width: `${scorePercent}%` }} />
                      </div>
                      {foutieveVragen.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 mb-1">Foutieve vragen:</p>
                          <div className="space-y-1">
                            {foutieveVragen.slice(0, 3).map(q => (
                              <p key={q.id} className="text-xs text-gray-600 bg-red-50 px-3 py-2 rounded-lg">{q.vraag}</p>
                            ))}
                            {foutieveVragen.length > 3 && <p className="text-xs text-gray-400">+{foutieveVragen.length - 3} meer</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p>Deze leerling heeft nog geen modules gedaan.</p>
              </div>
            )}
          </div>
        )}

        {/* TEKSTEN BEHEREN */}
        {scherm === "tekst" && (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Teksten voor leerlingen</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Nieuwe tekst toevoegen</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Klas</label>
                    <select value={tekstKlas} onChange={(e) => setTekstKlas(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1a56a0]">
                      <option value="">Selecteer klas</option>
                      {klassen.map(k => <option key={k.code} value={k.code}>{k.naam} ({k.code})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Module</label>
                    <select value={tekstModule} onChange={(e) => setTekstModule(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1a56a0]">
                      <option value="">Selecteer module</option>
                      {lessen.map(l => <option key={l.slug} value={l.slug}>{l.titel}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titel van de tekst</label>
                  <input value={tekstTitel} onChange={(e) => setTekstTitel(e.target.value)}
                    placeholder="bijv. 'Krantenartikel klimaat NRC 2024'"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1a56a0]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tekst</label>
                  <textarea value={tekstInhoud} onChange={(e) => setTekstInhoud(e.target.value)}
                    placeholder="Plak hier de volledige tekst..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0] min-h-48 resize-y" />
                </div>
                {tekstSucces && <p className="text-green-600 text-sm font-medium">Tekst succesvol toegevoegd!</p>}
                <button onClick={voegTekstToe}
                  disabled={!tekstTitel || !tekstInhoud || !tekstModule || !tekstKlas}
                  className="bg-[#1a56a0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#154480] transition disabled:opacity-50">
                  Tekst toevoegen voor leerlingen
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

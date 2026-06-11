"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { slaLeerlingOp, getLeerling, verwijderLeerling, getAlleVoortgang } from "@/lib/storage";
import { lessen, vaardigheden } from "@/data/lessen";

type Scherm = "laden" | "login" | "registreer" | "dashboard";

export default function LeerlingPortaalClient() {
  const [scherm, setScherm] = useState<Scherm>("laden");
  const [leerling, setLeerling] = useState<Record<string, unknown> | null>(null);
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const [klasCode, setKlasCode] = useState("");
  const [fout, setFout] = useState("");
  const [laden, setLaden] = useState(false);
  const [voortgang, setVoortgang] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    const opgeslagen = getLeerling();
    if (opgeslagen) {
      setLeerling(opgeslagen);
      setScherm("dashboard");
      setVoortgang(getAlleVoortgang());
    } else {
      setScherm("login");
    }
  }, []);

  async function registreer() {
    if (!gebruikersnaam.trim() || !klasCode.trim()) {
      setFout("Vul een gebruikersnaam en klascode in.");
      return;
    }
    setLaden(true);
    setFout("");
    try {
      const res = await fetch("/api/leerling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actie: "registreer", data: { gebruikersnaam: gebruikersnaam.trim(), klasCode: klasCode.trim() } }),
      });
      const data = await res.json();
      if (!data.succes) { setFout(data.fout); return; }
      slaLeerlingOp(data.leerling);
      setLeerling(data.leerling);
      setScherm("dashboard");
      setVoortgang(getAlleVoortgang());
    } catch { setFout("Verbindingsfout. Probeer opnieuw."); }
    setLaden(false);
  }

  async function login() {
    if (!gebruikersnaam.trim()) { setFout("Vul je gebruikersnaam in."); return; }
    setLaden(true);
    setFout("");
    try {
      const res = await fetch("/api/leerling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ actie: "login", data: { gebruikersnaam: gebruikersnaam.trim() } }),
      });
      const data = await res.json();
      if (!data.succes) { setFout(data.fout); return; }
      slaLeerlingOp(data.leerling);
      setLeerling(data.leerling);
      setScherm("dashboard");
      setVoortgang(getAlleVoortgang());
    } catch { setFout("Verbindingsfout. Probeer opnieuw."); }
    setLaden(false);
  }

  function uitloggen() {
    verwijderLeerling();
    setLeerling(null);
    setScherm("login");
    setGebruikersnaam("");
    setKlasCode("");
  }

  const niveauKleur: Record<string, string> = {
    beginner: "bg-green-100 text-green-800",
    gevorderd: "bg-yellow-100 text-yellow-800",
    expert: "bg-purple-100 text-purple-800",
  };

  if (scherm === "laden") {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Laden...</div></div>;
  }

  if (scherm === "login" || scherm === "registreer") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Meneer Zomer" width={56} height={56} />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-1">Meneer Zomer</h1>
          <p className="text-center text-gray-500 text-sm mb-6">Jouw leeromgeving Nederlands</p>

          <div className="flex gap-2 mb-6">
            <button onClick={() => { setScherm("login"); setFout(""); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${scherm === "login" ? "bg-[#1a56a0] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              Inloggen
            </button>
            <button onClick={() => { setScherm("registreer"); setFout(""); }}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${scherm === "registreer" ? "bg-[#1a56a0] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              Registreren
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gebruikersnaam</label>
              <input value={gebruikersnaam} onChange={(e) => setGebruikersnaam(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (scherm === "login" ? login() : registreer())}
                placeholder="bijv. emma-6v"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]" />
            </div>
            {scherm === "registreer" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Klascode</label>
                <input value={klasCode} onChange={(e) => setKlasCode(e.target.value.toUpperCase())}
                  placeholder="bijv. MZ6V"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a56a0]" />
                <p className="text-xs text-gray-400 mt-1">Vraag de klascode aan je docent.</p>
              </div>
            )}
            {fout && <p className="text-red-500 text-sm">{fout}</p>}
            <button onClick={scherm === "login" ? login : registreer} disabled={laden}
              className="w-full bg-[#1a56a0] text-white py-3 rounded-lg font-medium hover:bg-[#154480] transition disabled:opacity-50">
              {laden ? "Even geduld..." : scherm === "login" ? "Inloggen" : "Account aanmaken"}
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">← Terug naar de site</Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  const gedaaneModules = voortgang.map(v => v.moduleSlug as string);
  const niveau = (leerling?.huidigNiveau as string) || "beginner";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Meneer Zomer" width={32} height={32} />
          <span className="font-bold text-[#1a56a0]">Meneer Zomer</span>
        </div>
        <div className="flex items-center gap-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${niveauKleur[niveau]}`}>
            {niveau.charAt(0).toUpperCase() + niveau.slice(1)}
          </span>
          <span className="text-sm text-gray-600 hidden sm:block">{leerling?.gebruikersnaam as string}</span>
          <button onClick={uitloggen} className="text-xs text-gray-400 hover:text-gray-600">Uitloggen</button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Hoi, {leerling?.gebruikersnaam as string}!
          </h1>
          <p className="text-gray-500 text-sm">
            Klas: {leerling?.klasCode as string} · Niveau: <strong>{niveau}</strong>
            {!(leerling?.diagnostischGedaan) && (
              <span className="ml-2 text-[#1a56a0] font-medium">→ Doe eerst de niveautest</span>
            )}
          </p>
        </div>

        {/* Niveautest banner */}
        {!(leerling?.diagnostischGedaan) && (
          <div className="bg-[#1a56a0] text-white rounded-xl p-5 mb-8 flex items-center justify-between">
            <div>
              <div className="font-bold mb-1">Bepaal eerst je startniveau</div>
              <div className="text-blue-100 text-sm">5 korte vragen, daarna krijg je materiaal op jouw niveau.</div>
            </div>
            <Link href="/leerling/niveautest"
              className="bg-white text-[#1a56a0] font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition text-sm whitespace-nowrap ml-4">
              Niveautest starten →
            </Link>
          </div>
        )}

        {/* Voortgang overzicht */}
        {voortgang.length > 0 && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <h2 className="font-bold text-gray-800 mb-4">Jouw voortgang</h2>
            <div className="space-y-3">
              {voortgang.map((v) => {
                const les = lessen.find(l => l.slug === v.moduleSlug);
                const pogingen = (v.pogingen as { score: number; totaal: number }[]) || [];
                const laatste = pogingen[pogingen.length - 1];
                const scorePercent = laatste ? Math.round((laatste.score / laatste.totaal) * 100) : 0;
                return (
                  <div key={v.moduleSlug as string} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{les?.titel || v.moduleSlug as string}</div>
                      <div className="text-xs text-gray-400">{pogingen.length} {pogingen.length === 1 ? "poging" : "pogingen"}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${scorePercent >= 60 ? "text-green-600" : "text-orange-500"}`}>
                        {scorePercent}%
                      </div>
                      <div className="text-xs text-gray-400">{scorePercent >= 60 ? "Geslaagd" : "Nog oefenen"}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modules per vaardigheid */}
        {vaardigheden.map((vaardigheid) => {
          const beschikbaar = lessen.filter(l =>
            l.vaardigheid === vaardigheid.naam &&
            (l.niveau === "beide" || (niveau === "expert" ? l.niveau === "vwo" : l.niveau === "havo"))
          );
          if (beschikbaar.length === 0) return null;
          return (
            <div key={vaardigheid.slug} className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                {vaardigheid.emoji} {vaardigheid.naam}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {beschikbaar.map((les) => {
                  const gedaan = gedaaneModules.includes(les.slug);
                  const vortg = voortgang.find(v => v.moduleSlug === les.slug);
                  const pogingen = vortg ? (vortg.pogingen as { score: number; totaal: number }[]) : [];
                  const laatste = pogingen[pogingen.length - 1];
                  const scorePercent = laatste ? Math.round((laatste.score / laatste.totaal) * 100) : null;
                  return (
                    <Link key={les.slug} href={`/leerling/module/${les.slug}`}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#1a56a0] hover:shadow-md transition group flex items-start gap-3">
                      <span className="text-2xl">{les.emoji}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-[#1a56a0] transition text-sm">{les.titel}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{les.ondertitel}</div>
                      </div>
                      {scorePercent !== null && (
                        <div className={`text-xs font-bold px-2 py-1 rounded-full ${scorePercent >= 60 ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                          {scorePercent}%
                        </div>
                      )}
                      {!gedaan && <div className="text-xs text-gray-300 mt-1">Nieuw</div>}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

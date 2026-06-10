import Link from "next/link";
import { lessen, vaardigheden } from "@/data/lessen";

export default function HavoPage() {
  const havoLessen = lessen.filter((l) => l.niveau === "havo" || l.niveau === "beide");

  return (
    <main className="min-h-screen">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-[#1a56a0]">Meneer Zomer</Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link href="/havo" className="text-[#1a56a0] font-semibold">HAVO</Link>
          <Link href="/vwo" className="hover:text-[#1a56a0]">VWO</Link>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-[#1a56a0] to-[#2563eb] text-white px-6 py-12 text-center">
        <div className="text-sm font-medium text-blue-200 mb-2">🎓 HAVO 4 en 5</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Eindexamen Nederlands HAVO</h1>
        <p className="text-blue-100 max-w-lg mx-auto">
          Alle modules afgestemd op de officiële syllabus. Van leesvaardigheid tot literatuur.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-[#e8f0fb] rounded-xl p-4 mb-8 text-sm text-[#1a56a0]">
          <strong>Het eindexamen HAVO Nederlands</strong> bestaat uit een Centraal Examen (CE) met leesvaardigheid
          en een Schoolexamen (SE) met schrijfvaardigheid, literatuur en mondeling.
        </div>

        {vaardigheden.map((vaardigheid) => {
          const modulesVoorVaardigheid = havoLessen.filter((l) => l.vaardigheid === vaardigheid.naam);
          if (modulesVoorVaardigheid.length === 0) return null;
          return (
            <div key={vaardigheid.slug} id={vaardigheid.slug} className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>{vaardigheid.emoji}</span> {vaardigheid.naam}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modulesVoorVaardigheid.map((les) => (
                  <Link key={les.slug} href={`/les/${les.slug}`}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a56a0] hover:shadow-md transition group">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{les.emoji}</span>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover:text-[#1a56a0] transition">{les.titel}</div>
                        <div className="text-xs text-gray-500 mt-1">{les.ondertitel}</div>
                        <div className="text-xs text-gray-400 mt-2">{les.leerdoelen.length} leerdoelen · {les.vragen.length} oefenvragen</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <footer className="text-center text-xs text-gray-400 py-6 border-t">
        © {new Date().getFullYear()} Meneer Zomer · <Link href="/" className="hover:underline">Terug naar home</Link>
      </footer>
    </main>
  );
}

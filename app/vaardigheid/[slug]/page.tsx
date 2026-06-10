import Link from "next/link";
import Header from "@/components/Header";
import { lessen, vaardigheden } from "@/data/lessen";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return vaardigheden.map((v) => ({ slug: v.slug }));
}

export default async function VaardigheidPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vaardigheid = vaardigheden.find((v) => v.slug === slug);
  if (!vaardigheid) notFound();

  const havoModules = lessen.filter(
    (l) => l.vaardigheid === vaardigheid.naam && (l.niveau === "havo" || l.niveau === "beide")
  );
  const vwoModules = lessen.filter(
    (l) => l.vaardigheid === vaardigheid.naam && (l.niveau === "vwo" || l.niveau === "beide")
  );

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] text-white px-6 py-12 text-center">
        <div className="text-5xl mb-3">{vaardigheid.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{vaardigheid.naam}</h1>
        <p className="text-blue-100 max-w-lg mx-auto text-sm">{vaardigheid.beschrijving}</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">

        {havoModules.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-[#e8f0fb] text-[#1a56a0] text-xs font-semibold px-3 py-1 rounded-full">HAVO</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {havoModules.map((les) => (
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
        )}

        {vwoModules.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-[#f3eeff] text-[#6c3fc5] text-xs font-semibold px-3 py-1 rounded-full">VWO</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vwoModules.map((les) => (
                <Link key={les.slug} href={`/les/${les.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#6c3fc5] hover:shadow-md transition group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{les.emoji}</span>
                    <div>
                      <div className="font-semibold text-gray-800 group-hover:text-[#6c3fc5] transition">{les.titel}</div>
                      <div className="text-xs text-gray-500 mt-1">{les.ondertitel}</div>
                      <div className="text-xs text-gray-400 mt-2">{les.leerdoelen.length} leerdoelen · {les.vragen.length} oefenvragen</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {havoModules.length === 0 && vwoModules.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🚧</div>
            <p className="text-lg font-medium">Modules voor {vaardigheid.naam} komen binnenkort.</p>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <Link href="/havo" className="text-sm text-[#1a56a0] hover:underline">← Terug naar HAVO</Link>
          <Link href="/vwo" className="text-sm text-[#6c3fc5] hover:underline">← Terug naar VWO</Link>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-6 border-t">
        © {new Date().getFullYear()} Meneer Zomer
      </footer>
    </main>
  );
}

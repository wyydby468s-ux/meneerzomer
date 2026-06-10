import Link from "next/link";
import Header from "@/components/Header";
import { vaardigheden } from "@/data/lessen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-[#1a56a0] to-[#6c3fc5] text-white px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welkom bij Meneer Zomer</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto mb-8">
          Alles wat je nodig hebt voor Nederlands in de bovenbouw van havo en vwo.
          Heldere uitleg, oefenvragen en een AI-tutor die altijd beschikbaar is.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/havo" className="bg-white text-[#1a56a0] font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Ik doe HAVO
          </Link>
          <Link href="/vwo" className="bg-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/30 transition border border-white/40">
            Ik doe VWO
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "🎯", titel: "Examengericht", tekst: "Alle modules zijn direct gekoppeld aan het examenprogramma. Je weet precies wat je moet kennen." },
            { icon: "🤖", titel: "AI-tutor", tekst: "Stel vragen over de lesstof en krijg direct uitleg op jouw niveau, op elk moment van de dag." },
            { icon: "📊", titel: "Oefenvragen per niveau", tekst: "Van reproductie tot inzicht: oefenvragen met directe feedback zodat je echt leert." },
          ].map((blok) => (
            <div key={blok.titel} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{blok.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{blok.titel}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{blok.tekst}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Waar wil je aan werken?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vaardigheden.map((v) => (
            <Link key={v.slug} href={`/vaardigheid/${v.slug}`}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a56a0] hover:shadow-md transition group">
              <div className="text-3xl mb-2">{v.emoji}</div>
              <div className="font-semibold text-gray-800 group-hover:text-[#1a56a0] transition">{v.naam}</div>
              <div className="text-xs text-gray-500 mt-1">{v.beschrijving}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 px-6 py-12">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/havo" className="block bg-[#e8f0fb] rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-[#1a56a0] mb-2">Eindexamen HAVO</h3>
            <p className="text-gray-700 text-sm mb-4">Alle examenonderdelen voor HAVO 4 en 5, afgestemd op de syllabus.</p>
            <span className="text-[#1a56a0] font-semibold text-sm">Ga naar HAVO →</span>
          </Link>
          <Link href="/vwo" className="block bg-[#f3eeff] rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-[#6c3fc5] mb-2">Eindexamen VWO</h3>
            <p className="text-gray-700 text-sm mb-4">Verdieping voor VWO 4, 5 en 6 met extra nadruk op analyse en abstractie.</p>
            <span className="text-[#6c3fc5] font-semibold text-sm">Ga naar VWO →</span>
          </Link>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Meneer Zomer · meneerzomer.com
      </footer>
    </main>
  );
}

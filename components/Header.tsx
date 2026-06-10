import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  activePage?: "havo" | "vwo" | null;
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <Image src="/logo.png" alt="Meneer Zomer logo" width={36} height={36} />
        <span className="font-bold text-lg text-[#1a56a0] hidden sm:block">Meneer Zomer</span>
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/havo" className={`font-medium transition ${activePage === "havo" ? "text-[#1a56a0]" : "text-gray-500 hover:text-[#1a56a0]"}`}>
          HAVO
        </Link>
        <Link href="/vwo" className={`font-medium transition ${activePage === "vwo" ? "text-[#6c3fc5]" : "text-gray-500 hover:text-[#6c3fc5]"}`}>
          VWO
        </Link>
      </nav>
    </header>
  );
}

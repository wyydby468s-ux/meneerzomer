import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meneer Zomer | Nederlands HAVO & VWO",
  description: "Alles wat je nodig hebt voor Nederlands in de bovenbouw van havo en vwo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, sans-serif" }} className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}

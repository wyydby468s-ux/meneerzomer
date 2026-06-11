import { NextRequest, NextResponse } from "next/server";
import { kv_get, kv_set, kv_sadd } from "@/lib/redis";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const actie = searchParams.get("actie");

  if (actie === "check") {
    const klas = await kv_get("klas:MZ6V");
    const docent = await kv_get("docent:doc_mz");
    return NextResponse.json({ klas, docent });
  }

  if (actie === "fix") {
    // Maak klassen direct aan in Redis
    await kv_set("klas:MZ6V", { id: "klas_6v", naam: "6V", code: "MZ6V", docentId: "doc_mz", aangemeldOp: new Date().toISOString() });
    await kv_set("klas:MZ5H", { id: "klas_5h", naam: "5H", code: "MZ5H", docentId: "doc_mz", aangemeldOp: new Date().toISOString() });
    await kv_sadd("docent:klassen:doc_mz", "MZ6V");
    await kv_sadd("docent:klassen:doc_mz", "MZ5H");
    return NextResponse.json({ succes: true, bericht: "Klassen aangemaakt" });
  }

  return NextResponse.json({ fout: "Gebruik ?actie=check of ?actie=fix" });
}

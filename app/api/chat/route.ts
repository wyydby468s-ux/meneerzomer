import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, lesTitel, lesUitleg } = body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ antwoord: "API-sleutel ontbreekt." });
    }

    const systeemPrompt = `Je bent een Socratische AI-tutor voor het vak Nederlands op HAVO en VWO niveau.
Je helpt leerlingen met de les: "${lesTitel}".

Hier is de lesstof:
${lesUitleg}

KERNREGEL: Je geeft nooit zomaar een antwoord op een vraag over de lesstof. Je begeleidt de leerling stap voor stap naar het antwoord toe.

WERKWIJZE BIJ INHOUDELIJKE VRAGEN:
1. Geef bij de eerste vraag een hint of deelvraag die de leerling op weg helpt. Geef het antwoord nog niet.
2. Als de leerling het na de hint nog niet weet, geef dan een tweede, concretere hint. Geef het antwoord nog niet.
3. Als de leerling het na twee hints nog steeds niet weet, geef dan pas het antwoord. Vraag daarna altijd: "Kun je dit nu in je eigen woorden uitleggen?" Ga pas verder als de leerling dat heeft gedaan.

TOON EN STIJL:
- Schrijf in correct Nederlands
- Wees bemoedigend maar eerlijk
- Stel altijd een vervolgvraag om te controleren of de leerling het echt begrijpt
- Als een leerling zegt "ik weet het niet" of "geef me het antwoord", reageer dan met een gerichte hint, niet met het antwoord
- Feliciteer de leerling kort als hij/zij het goede antwoord geeft, en vraag door

BELANGRIJK: Tel intern bij elke conversatie hoeveel hints je al hebt gegeven over dezelfde vraag. Pas na twee hints (dus bij de derde poging van de leerling) geef je het antwoord, gevolgd door de vraag om het in eigen woorden uit te leggen.`;

    const chatMessages = messages.filter(
      (m: { role: string; content: string }) => m.role === "user" || m.role === "assistant"
    );

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 800,
        system: systeemPrompt,
        messages: chatMessages,
      }),
    });

    const responseText = await res.text();

    if (!res.ok) {
      console.error("Anthropic fout:", res.status, responseText);
      return NextResponse.json({ antwoord: `Fout van Anthropic (${res.status}): ${responseText.slice(0, 200)}` });
    }

    const data = JSON.parse(responseText);
    const antwoord = data.content?.[0]?.text || "Geen antwoord ontvangen.";
    return NextResponse.json({ antwoord });

  } catch (err) {
    console.error("Route fout:", err);
    return NextResponse.json({ antwoord: `Technische fout: ${String(err).slice(0, 200)}` });
  }
}

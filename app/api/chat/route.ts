import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, lesTitel, lesUitleg } = body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ antwoord: "API-sleutel ontbreekt." });
    }

    const systeemPrompt = `Je bent een behulpzame AI-tutor voor het vak Nederlands op HAVO en VWO niveau. 
Je helpt leerlingen met de les: "${lesTitel}".

Hier is de lesstof:
${lesUitleg}

Instructies:
- Geef heldere, beknopte uitleg op het niveau van een middelbare scholier
- Gebruik voorbeelden die aansluiten bij de lesstof
- Schrijf in correct Nederlands
- Wees bemoedigend maar eerlijk`;

    // Alleen user/assistant berichten, geen system in messages array
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

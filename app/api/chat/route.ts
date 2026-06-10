import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages, lesTitel, lesUitleg } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ antwoord: "API-sleutel ontbreekt. Vraag je docent om de API-sleutel in te stellen." });
  }

  const systeemPrompt = `Je bent een behulpzame AI-tutor voor het vak Nederlands op HAVO en VWO niveau. 
Je helpt leerlingen met de les: "${lesTitel}".

Hier is de lesstof:
${lesUitleg}

Instructies:
- Geef heldere, beknopte uitleg op het niveau van een middelbare scholier
- Gebruik voorbeelden die aansluiten bij de lesstof
- Als een leerling een vraag stelt over iets buiten deze les, leg dan vriendelijk uit dat je je focust op "${lesTitel}"
- Schrijf in correct Nederlands
- Wees bemoedigend maar eerlijk
- Gebruik af en toe korte puntsgewijze lijsten voor overzichtelijkheid`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800,
      system: systeemPrompt,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  const data = await res.json();
  const antwoord = data.content?.[0]?.text || "Er ging iets mis. Probeer het opnieuw.";
  return NextResponse.json({ antwoord });
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { tekst, moduleSlug, lesTitel, lesUitleg, niveau, type } = await req.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return NextResponse.json({ fout: "API-sleutel ontbreekt." });

    const niveauInstructies: Record<string, string> = {
      beginner: `De leerling is een beginner. Stel basisvragen die gaan over wat er letterlijk in de tekst staat en eenvoudige toepassingen van de theorie. Gebruik eenvoudige taal.`,
      gevorderd: `De leerling is gevorderd. Stel vragen die toepassing van de theorie vereisen op de tekst. Mix van herkennen en analyseren.`,
      expert: `De leerling is expert. Stel verdiepende vragen die kritisch denken, evalueren en nuanceren vereisen. Verwacht genuanceerde antwoorden.`,
    };

    let systeemPrompt = "";
    let userPrompt = "";

    if (type === "diagnostisch") {
      systeemPrompt = `Je bent een Nederlandse taalexamen-expert. Je stelt diagnostische vragen om het niveau van een leerling te bepalen op het gebied van ${lesTitel}.
Maak 5 meerkeuzevragen van oplopende moeilijkheid: 2 makkelijk, 2 gemiddeld, 1 moeilijk.
Reageer ALLEEN met valide JSON, geen uitleg of markdown.`;

      userPrompt = `Stof: ${lesUitleg.slice(0, 500)}

Maak 5 diagnostische meerkeuzevragen over ${lesTitel}. Elke vraag heeft 4 antwoordopties.

Reageer met dit exacte JSON-formaat:
{
  "vragen": [
    {
      "id": "d1",
      "moeilijkheid": "makkelijk",
      "vraag": "...",
      "opties": ["A", "B", "C", "D"],
      "antwoord": 0,
      "uitleg": "..."
    }
  ]
}`;
    } else if (type === "gesloten") {
      systeemPrompt = `Je bent een Nederlandse taalexamen-expert. Je stelt meerkeuzevragen bij een tekst over ${lesTitel}.
${niveauInstructies[niveau] || niveauInstructies.gevorderd}
Reageer ALLEEN met valide JSON, geen uitleg of markdown.`;

      userPrompt = `Tekst:
${tekst}

Theorie over ${lesTitel}:
${lesUitleg.slice(0, 600)}

Maak 10 meerkeuzevragen bij deze tekst. De vragen moeten direct gaan over de tekst en de theorie van ${lesTitel} toepassen.

Reageer met dit exacte JSON-formaat:
{
  "vragen": [
    {
      "id": "v1",
      "vraag": "...",
      "opties": ["A", "B", "C", "D"],
      "antwoord": 0,
      "uitleg": "..."
    }
  ]
}`;
    } else if (type === "open") {
      systeemPrompt = `Je bent een Nederlandse taalexamen-expert. Je stelt open vragen bij een tekst over ${lesTitel}.
${niveauInstructies[niveau] || niveauInstructies.gevorderd}
Reageer ALLEEN met valide JSON, geen uitleg of markdown.`;

      userPrompt = `Tekst:
${tekst}

Maak 5 open vragen bij deze tekst over ${lesTitel}. Geef ook een modelantwoord en de minimale vereisten voor 60% score.

Reageer met dit exacte JSON-formaat:
{
  "vragen": [
    {
      "id": "o1",
      "vraag": "...",
      "modelantwoord": "...",
      "minimumVereisten": "...",
      "punten": 2
    }
  ]
}`;
    } else if (type === "beoordeelOpen") {
      const { vraag, modelantwoord, minimumVereisten, antwoord } = await req.json().catch(() => ({}));
      systeemPrompt = `Je bent een Nederlandse taalleraar die open antwoorden beoordeelt. Geef gestructureerde feedback.
Reageer ALLEEN met valide JSON.`;

      userPrompt = `Vraag: ${vraag}
Modelantwoord: ${modelantwoord}
Minimumeisen voor 60%: ${minimumVereisten}
Antwoord van de leerling: ${antwoord}

Beoordeel het antwoord en geef een score van 0-100 en feedback.

JSON-formaat:
{
  "score": 75,
  "haaldeMinimum": true,
  "inhoudFeedback": "...",
  "stijlFeedback": "...",
  "spellingFeedback": "..."
}`;
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2000,
        system: systeemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!res.ok) {
      const fout = await res.text();
      return NextResponse.json({ fout: `API-fout: ${fout.slice(0, 200)}` });
    }

    const data = await res.json();
    const tekst_response = data.content?.[0]?.text || "";

    try {
      const clean = tekst_response.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      return NextResponse.json({ succes: true, ...parsed });
    } catch {
      return NextResponse.json({ fout: "Kon de vragen niet verwerken. Probeer opnieuw." });
    }
  } catch (err) {
    return NextResponse.json({ fout: String(err) });
  }
}

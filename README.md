# Meneer Zomer - Nederlands HAVO & VWO

Interactieve leeromgeving voor Nederlands in de bovenbouw.

## Installatie

```bash
npm install
cp .env.local.example .env.local
# Vul je Anthropic API-sleutel in .env.local
npm run dev
```

## Deployen op Vercel

1. Push naar GitHub
2. Importeer repo op vercel.com
3. Voeg ANTHROPIC_API_KEY toe als environment variable
4. Deploy

## Inhoud toevoegen

Alle lesmodules staan in `data/lessen.ts`. Voeg een nieuw object toe aan de `lessen` array.

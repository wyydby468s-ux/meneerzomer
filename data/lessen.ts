export type Niveau = "reproductie" | "toepassing" | "inzicht";

export interface Vraag {
  id: string;
  niveau: Niveau;
  vraag: string;
  opties: string[];
  antwoord: number;
  uitleg: string;
}

export interface Les {
  slug: string;
  titel: string;
  ondertitel: string;
  niveau: "havo" | "vwo" | "beide";
  vaardigheid: string;
  emoji: string;
  leerdoelen: string[];
  uitleg: string;
  youtubeId?: string;
  vragen: Vraag[];
  downloads?: { naam: string; url: string }[];
}

export const lessen: Les[] = [
  // =====================
  // LEESVAARDIGHEID
  // =====================
  {
    slug: "leesvaardigheid-tekstdoelen",
    titel: "Tekstdoelen en tekstsoorten",
    ondertitel: "Leer hoe je het doel van een tekst herkent",
    niveau: "havo",
    vaardigheid: "Leesvaardigheid",
    emoji: "📖",
    leerdoelen: [
      "Je kunt het doel van een tekst benoemen (informeren, overtuigen, instrueren, activeren)",
      "Je kunt tekstsoorten van elkaar onderscheiden",
      "Je kunt het tekstdoel onderbouwen met voorbeelden uit de tekst",
    ],
    uitleg: `## Wat is een tekstdoel?

Elke tekst is geschreven met een bepaald doel. De schrijver wil iets bereiken bij de lezer. Op het eindexamen moet je dat doel kunnen benoemen en onderbouwen.

### De vier tekstdoelen

**Informeren**
De schrijver wil de lezer iets laten weten. Er worden feiten, cijfers of uitleg gegeven zonder dat de schrijver de lezer wil overtuigen of aanzetten tot actie. Voorbeelden: een nieuwsartikel, een encyclopedie-artikel, een informatieve folder.

**Overtuigen**
De schrijver wil de lezer een bepaald standpunt laten overnemen. Er worden argumenten gebruikt. Voorbeelden: een opinieartikel, een betoog, een reclamefolder.

**Instrueren**
De schrijver wil de lezer iets laten doen of uitleggen hoe iets werkt. Voorbeelden: een handleiding, een recept, gebruiksaanwijzing.

**Activeren**
De schrijver wil de lezer aanzetten tot een bepaalde actie, vaak in combinatie met overtuigen. Voorbeelden: een advertentie, een wervingsbrief, een oproep.

### Hoe herken je het tekstdoel?

Let op de volgende signalen:
- **Taalgebruik**: gebruikt de schrijver feiten of meningen?
- **Werkwoordsvorm**: staan er veel gebiedende wijs-vormen? (doe, ga, koop) dan instrueren of activeren
- **Argumenten**: zijn er redenen of bewijzen? dan overtuigen
- **Ondertoon**: is de tekst neutraal of sturend?

### Tip voor het examen

Op het HAVO-examen wordt je gevraagd het tekstdoel te benoemen en te onderbouwen. Noem altijd een concreet voorbeeld uit de tekst als bewijs.`,
    youtubeId: "6gBCD5EuayU",
    vragen: [
      { id: "td-1", niveau: "reproductie", vraag: "Welk tekstdoel heeft een tekst die de lezer wil overtuigen een bepaald standpunt over te nemen?", opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"], antwoord: 1, uitleg: "Een tekst die de lezer een standpunt wil laten overnemen heeft als doel overtuigen. De schrijver gebruikt daarvoor argumenten." },
      { id: "td-2", niveau: "reproductie", vraag: "Een recept in een kookboek heeft als tekstdoel...", opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"], antwoord: 2, uitleg: "Een recept legt uit hoe je iets moet maken. De lezer wordt stap voor stap begeleid. Dat is instrueren." },
      { id: "td-3", niveau: "reproductie", vraag: "Welk tekstdoel heeft een nieuwsartikel dat objectief verslag doet van een gebeurtenis?", opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"], antwoord: 0, uitleg: "Een objectief nieuwsartikel wil de lezer iets laten weten zonder een mening op te dringen. Dat is informeren." },
      { id: "td-4", niveau: "reproductie", vraag: "Wat is het kenmerkende van een activerende tekst?", opties: ["De tekst bevat veel feiten en cijfers", "De tekst zet de lezer aan tot een concrete actie", "De tekst geeft stap-voor-stap instructies", "De tekst presenteert meerdere standpunten"], antwoord: 1, uitleg: "Een activerende tekst wil de lezer aanzetten tot een concrete actie, zoals doneren, tekenen of kopen." },
      { id: "td-5", niveau: "toepassing", vraag: "Een tekst begint met: 'Elk jaar sterven duizenden mensen door verkeersongelukken. Dit moet stoppen. Schrijf vandaag nog uw gemeenteraadslid aan.' Wat is het tekstdoel?", opties: ["Alleen informeren", "Alleen overtuigen", "Activeren (met overtuigen als middel)", "Instrueren"], antwoord: 2, uitleg: "De tekst wil de lezer aanzetten tot een concrete actie (een brief schrijven). Overtuigen is het middel, activeren is het doel." },
      { id: "td-6", niveau: "toepassing", vraag: "Een leerling zegt: 'Deze tekst informeert, want er staan veel feiten in.' Klopt deze redenering altijd?", opties: ["Ja, feiten wijzen altijd op informeren", "Nee, feiten kunnen ook gebruikt worden om te overtuigen", "Ja, zonder feiten kun je niet informeren", "Nee, feiten horen alleen bij instrueren"], antwoord: 1, uitleg: "Feiten kunnen ook als argumenten dienen in een overtuigende tekst. Je moet dus ook letten op de toon en de opbouw van de tekst." },
      { id: "td-7", niveau: "toepassing", vraag: "Een gebruiksaanwijzing van een wasmachine bevat zinnen als 'Doe de deur dicht' en 'Kies het juiste programma'. Welk tekstdoel past hier het best bij?", opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"], antwoord: 2, uitleg: "Gebiedende wijs-vormen (doe, kies) en stap-voor-stap uitleg zijn typisch voor een instructieve tekst." },
      { id: "td-8", niveau: "toepassing", vraag: "Een folder van een zorginstelling beschrijft de voordelen van thuiszorg en eindigt met 'Bel ons vandaag nog voor een vrijblijvend gesprek'. Welke twee doelen zijn gecombineerd?", opties: ["Informeren en instrueren", "Overtuigen en activeren", "Informeren en overtuigen", "Instrueren en activeren"], antwoord: 1, uitleg: "De voordelen beschrijven is overtuigen. De oproep om te bellen is activeren. Dit is een klassieke combinatie in commerciele teksten." },
      { id: "td-9", niveau: "inzicht", vraag: "Een advertentie voor een goed doel toont schrijnende foto's van kinderen en eindigt met 'Doneer nu'. Welke tekstdoelen zijn hier gecombineerd?", opties: ["Informeren en instrueren", "Overtuigen en activeren", "Informeren en overtuigen", "Instrueren en activeren"], antwoord: 1, uitleg: "De foto's en emotionele taal overtuigen de lezer. De oproep 'Doneer nu' activeert tot actie. Dit is een klassieke combinatie van overtuigen en activeren." },
      { id: "td-10", niveau: "inzicht", vraag: "Kan een tekst meerdere tekstdoelen tegelijk hebben? En zo ja, hoe noem je het primaire doel?", opties: ["Nee, een tekst heeft altijd precies een doel", "Ja, maar het primaire doel is wat de schrijver uiteindelijk wil bereiken bij de lezer", "Ja, maar alleen informeren en overtuigen kunnen worden gecombineerd", "Nee, de tekstdoelen sluiten elkaar altijd uit"], antwoord: 1, uitleg: "Teksten kunnen meerdere doelen combineren. Het primaire doel is wat de schrijver uiteindelijk wil bereiken: bij een donatiefolder is dat activeren, ook al wordt er ook overtuigd en geinformeerd." },
    ],
  },
  {
    slug: "leesvaardigheid-signaalwoorden",
    titel: "Signaalwoorden en alineaverbanden",
    ondertitel: "Begrijp hoe alineas met elkaar samenhangen",
    niveau: "havo",
    vaardigheid: "Leesvaardigheid",
    emoji: "🔗",
    leerdoelen: [
      "Je kent de belangrijkste soorten signaalwoorden",
      "Je kunt het verband tussen twee alineas benoemen",
      "Je kunt signaalwoorden gebruiken in je eigen schrijfwerk",
    ],
    uitleg: `## Signaalwoorden en alineaverbanden

Signaalwoorden geven aan hoe zinnen of alineas met elkaar in verband staan. Ze zijn cruciaal voor het begrijpen van een tekst en voor je eigen schrijfwerk.

### De belangrijkste verbanden

**Oorzaak-gevolg**
Signaalwoorden: *omdat, doordat, daardoor, dus, daarom, waardoor, zodat*
Voorbeeld: "Het regende, daarom gingen we naar binnen."

**Tegenstelling**
Signaalwoorden: *maar, echter, toch, hoewel, terwijl, daarentegen, anderzijds*
Voorbeeld: "Hij studeerde hard, toch zakte hij."

**Opsomming**
Signaalwoorden: *ten eerste, ten tweede, bovendien, ook, verder, daarnaast*
Voorbeeld: "Hij was moe. Bovendien had hij honger."

**Conclusie**
Signaalwoorden: *dus, kortom, al met al, concluderend, samenvattend*
Voorbeeld: "Kortom, het plan werkte niet."

**Voorbeeld/uitwerking**
Signaalwoorden: *bijvoorbeeld, zo, zoals, dit blijkt uit, ter illustratie*
Voorbeeld: "Er zijn veel opties, bijvoorbeeld fietsen of lopen."

**Toegeving**
Signaalwoorden: *weliswaar, toegegeven, weliswaar... maar*
Voorbeeld: "Weliswaar kost het geld, maar het is het waard."

**Voorwaarde**
Signaalwoorden: *als, indien, mits, tenzij, op voorwaarde dat*
Voorbeeld: "Mits je hard oefent, haal je het examen."

### Tip voor het examen

Bij de vraag 'welk verband heeft alinea X met alinea Y?' lees je altijd de laatste zin van de eerste alinea en de eerste zin van de tweede alinea. Het signaalwoord staat meestal aan het begin van de tweede alinea.`,
    vragen: [
      { id: "sw-1", niveau: "reproductie", vraag: "Welk signaalwoord hoort bij een oorzaak-gevolgverband?", opties: ["Echter", "Doordat", "Kortom", "Bovendien"], antwoord: 1, uitleg: "'Doordat' geeft een oorzaak aan. 'Echter' is een tegenstelling, 'kortom' een conclusie en 'bovendien' een opsomming." },
      { id: "sw-2", niveau: "reproductie", vraag: "Welk verband heeft het woord 'toch' in de zin: 'Hij had weinig geslapen, toch presteerde hij goed'?", opties: ["Oorzaak-gevolg", "Opsomming", "Tegenstelling", "Conclusie"], antwoord: 2, uitleg: "'Toch' geeft aan dat iets ingaat tegen de verwachting. Dat is een tegenstelling." },
      { id: "sw-3", niveau: "reproductie", vraag: "Welk signaalwoord geeft een conclusie aan?", opties: ["Bovendien", "Hoewel", "Kortom", "Doordat"], antwoord: 2, uitleg: "'Kortom' introduceert een conclusie of samenvatting van wat ervoor stond." },
      { id: "sw-4", niveau: "reproductie", vraag: "Welk signaalwoord past bij een opsommend verband?", opties: ["Daarom", "Ten eerste", "Echter", "Mits"], antwoord: 1, uitleg: "'Ten eerste' is een klassiek opsommingssignaalwoord, vaak gevolgd door 'ten tweede', 'ten derde' enzovoort." },
      { id: "sw-5", niveau: "reproductie", vraag: "Wat voor verband geeft 'bijvoorbeeld' aan?", opties: ["Tegenstelling", "Oorzaak-gevolg", "Voorbeeld/uitwerking", "Voorwaarde"], antwoord: 2, uitleg: "'Bijvoorbeeld' kondigt een concreet voorbeeld aan ter illustratie van wat er net is gezegd." },
      { id: "sw-6", niveau: "toepassing", vraag: "Alinea 1 beschrijft de oorzaken van files. Alinea 2 begint met: 'Dit leidt jaarlijks tot miljardenverliezen.' Welk verband is er?", opties: ["Opsomming", "Tegenstelling", "Oorzaak-gevolg", "Conclusie"], antwoord: 2, uitleg: "'Dit leidt tot' geeft het gevolg aan van wat in alinea 1 werd beschreven. Er is dus een oorzaak-gevolgverband." },
      { id: "sw-7", niveau: "toepassing", vraag: "Vul het juiste signaalwoord in: 'De trein was uitgevallen. ___ namen veel reizigers de bus.'", opties: ["Hoewel", "Bovendien", "Daarom", "Tenzij"], antwoord: 2, uitleg: "'Daarom' geeft aan dat het nemen van de bus het gevolg is van de uitgevallen trein. Oorzaak-gevolgverband." },
      { id: "sw-8", niveau: "toepassing", vraag: "Welk signaalwoord past in de zin: '___ het regent, gaan we toch op pad'?", opties: ["Doordat", "Hoewel", "Bovendien", "Kortom"], antwoord: 1, uitleg: "'Hoewel' geeft een tegenstelling aan: ondanks de regen gaan we toch. Dit is een concessief verband." },
      { id: "sw-9", niveau: "inzicht", vraag: "Een leerling gebruikt 'maar' als signaalwoord. De zin luidt: 'Nederland heeft veel fietsers, maar er zijn goede fietspaden.' Klopt dit gebruik?", opties: ["Ja, want 'maar' geeft altijd een tegenstelling aan", "Nee, want er is geen echte tegenstelling tussen fietsers en fietspaden", "Ja, want beide delen van de zin zijn feiten", "Nee, want 'maar' kan alleen worden gebruikt bij meningen"], antwoord: 1, uitleg: "'Maar' geeft een tegenstelling aan. In deze zin zijn fietspaden echter eerder een logisch gevolg van veel fietsers, geen tegenstelling. Het signaalwoord klopt inhoudelijk niet." },
      { id: "sw-10", niveau: "inzicht", vraag: "Waarom is het belangrijk om signaalwoorden correct te gebruiken in een betoog?", opties: ["Ze maken de tekst langer en dus indrukwekkender", "Ze verduidelijken de logische relaties tussen de argumenten en maken het betoog overtuigender", "Ze zijn verplicht voor een goed cijfer op het examen", "Ze vervangen de noodzaak om goede argumenten te geven"], antwoord: 1, uitleg: "Signaalwoorden maken de logische structuur van een betoog zichtbaar. De lezer begrijpt hierdoor beter hoe de argumenten met elkaar samenhangen en wordt overtuigender begeleid naar de conclusie." },
    ],
  },
  {
    slug: "leesvaardigheid-vraagtypes",
    titel: "Vraagtypes en aanpak",
    ondertitel: "Leer welke vraagtypes er zijn en hoe je ze aanpakt",
    niveau: "havo",
    vaardigheid: "Leesvaardigheid",
    emoji: "❓",
    leerdoelen: [
      "Je kent de vijf belangrijkste vraagtypes op het CE leesvaardigheid",
      "Je weet hoe je elk vraagtype aanpakt",
      "Je kunt een antwoord formuleren dat voldoet aan de correctierichtlijnen",
    ],
    uitleg: `## Vraagtypes op het eindexamen leesvaardigheid

Op het centraal examen leesvaardigheid komen steeds dezelfde soorten vragen terug. Als je die herkent, weet je direct hoe je ze moet aanpakken.

### De vijf hoofdtypen

**1. Betekenisvraag**
Wat wordt bedoeld met woord/uitdrukking X in alinea Y?
Aanpak: Lees de zin in context. Zoek een synoniem of omschrijving die past in de zin.

**2. Verwijsvraag**
Waar verwijst 'dit', 'dat', 'deze', 'die', 'het' naar terug?
Aanpak: Ga terug in de tekst. Het antwoord staat bijna altijd in de vorige zin of alinea.

**3. Structuurvraag**
Welke functie heeft alinea X? / Wat is het verband tussen alinea X en Y?
Aanpak: Lees de eerste en laatste zin van de alinea. Kijk naar signaalwoorden.

**4. Samenvatten/parafraseren**
Geef in eigen woorden weer wat er in alinea X staat.
Aanpak: Gebruik je eigen woorden, kopieer niet letterlijk. Noem de hoofdgedachte.

**5. Beoordelen**
Klopt de bewering? Is het argument sterk? Geef je mening met onderbouwing.
Aanpak: Neem altijd een duidelijk standpunt in en onderbouw met tekstevidentiee.

### Algemene tips

- Lees de vragen eerst, dan de tekst
- Streep aan waar je het antwoord vermoedt
- Formuleer altijd een volledig antwoord, geen losse woorden
- Citeer nooit letterlijk tenzij dat expliciet gevraagd wordt`,
    vragen: [
      { id: "vt-1", niveau: "reproductie", vraag: "Hoe pak je een verwijsvraag aan?", opties: ["Je zoekt het antwoord altijd in de volgende alinea", "Je gaat terug in de tekst, het antwoord staat bijna altijd in de vorige zin of alinea", "Je kijkt in de inleiding van de tekst", "Je zoekt naar signaalwoorden in dezelfde zin"], antwoord: 1, uitleg: "Bij een verwijsvraag zoek je altijd terug in de tekst. Voornaamwoorden zoals 'dit', 'dat' en 'het' verwijzen bijna altijd naar iets wat net voor is gezegd." },
      { id: "vt-2", niveau: "reproductie", vraag: "Wat is het kenmerk van een betekenisvraag?", opties: ["Je moet aangeven wat de hoofdgedachte van de tekst is", "Je moet uitleggen wat een woord of uitdrukking in de tekst betekent", "Je moet het tekstdoel benoemen", "Je moet een samenvatting geven van een alinea"], antwoord: 1, uitleg: "Bij een betekenisvraag wordt gevraagd wat een specifiek woord of uitdrukking in de context van de tekst betekent." },
      { id: "vt-3", niveau: "reproductie", vraag: "Wat is de beste aanpak als je een tekst moet samenvatten of parafraseren?", opties: ["Kopieer de belangrijkste zinnen letterlijk", "Gebruik je eigen woorden en noem de hoofdgedachte", "Schrijf alle details op die je kunt vinden", "Begin altijd met een inleiding over de schrijver"], antwoord: 1, uitleg: "Bij samenvatten en parafraseren gebruik je altijd je eigen woorden. Letterlijk kopiëren wordt niet beloond op het examen." },
      { id: "vt-4", niveau: "toepassing", vraag: "De vraag luidt: 'Leg in eigen woorden uit wat de schrijver bedoelt met de uitdrukking \"het ei van Columbus\" in alinea 3.' Welk vraagtype is dit?", opties: ["Structuurvraag", "Verwijsvraag", "Betekenisvraag", "Beoordelingsvraag"], antwoord: 2, uitleg: "Je wordt gevraagd een uitdrukking uit te leggen in de context van de tekst. Dat is een betekenisvraag." },
      { id: "vt-5", niveau: "toepassing", vraag: "De vraag luidt: 'Welke functie heeft alinea 4 ten opzichte van alinea 3?' Hoe pak je dit aan?", opties: ["Je leest alleen alinea 4 en beschrijft de inhoud", "Je leest de laatste zin van alinea 3 en de eerste zin van alinea 4 en kijkt naar signaalwoorden", "Je zoekt naar het tekstdoel van de hele tekst", "Je beschrijft het verschil in lengte tussen de twee alineas"], antwoord: 1, uitleg: "Bij een structuurvraag over het verband tussen twee alineas kijk je naar de overgang: de laatste zin van de eerste alinea en de eerste zin van de tweede, plus eventuele signaalwoorden." },
      { id: "vt-6", niveau: "toepassing", vraag: "Een vraag vraagt: 'Waar verwijst \"dit probleem\" in regel 24 naar?' Je vindt het antwoord in regel 22-23. Hoe formuleer je je antwoord?", opties: ["Schrijf de regelnummers op: 'regels 22-23'", "Kopieer de zinnen van regels 22-23 letterlijk", "Omschrijf in eigen woorden het probleem dat in regels 22-23 wordt beschreven", "Schrijf op: 'het probleem uit de vorige alinea'"], antwoord: 2, uitleg: "Je omschrijft het antwoord in je eigen woorden. Alleen een regelnummer opgeven of letterlijk kopiëren levert geen punten op." },
      { id: "vt-7", niveau: "inzicht", vraag: "Waarom is het bij een beoordelingsvraag belangrijk dat je een duidelijk standpunt inneemt en onderbouwt?", opties: ["Omdat de examinator je eigen mening altijd interessant vindt", "Omdat een onderbouwd standpunt aantoont dat je de tekst hebt begrepen en er kritisch over kunt nadenken", "Omdat je anders te weinig woorden schrijft", "Omdat het bij een beoordelingsvraag verplicht is om het met de schrijver oneens te zijn"], antwoord: 1, uitleg: "Een beoordelingsvraag toetst of je kritisch kunt denken over een tekst. Een onderbouwd standpunt laat zien dat je de tekst begrijpt en er een gefundeerde mening over kunt vormen." },
    ],
  },

  // =====================
  // SCHRIJFVAARDIGHEID
  // =====================
  {
    slug: "schrijfvaardigheid-betoog",
    titel: "Een betoog schrijven",
    ondertitel: "Leer hoe je een overtuigend betoog opbouwt",
    niveau: "havo",
    vaardigheid: "Schrijfvaardigheid",
    emoji: "✍️",
    leerdoelen: [
      "Je kent de structuur van een betoog",
      "Je kunt een helder standpunt formuleren",
      "Je kunt argumenten en een weerlegging verwerken",
    ],
    uitleg: `## Een betoog schrijven

Een betoog is een tekst waarin je een standpunt verdedigt met argumenten. Op het HAVO-examen schrijf je een betoog van ongeveer 350-500 woorden.

### De structuur van een betoog

**1. Inleiding**
- Trek de aandacht van de lezer
- Introduceer het onderwerp
- Formuleer je standpunt (these) duidelijk aan het einde

**2. Kern**
- Geef minimaal twee argumenten voor je standpunt
- Begin elk argument met een topic sentence
- Onderbouw elk argument met een voorbeeld of bewijs
- Verwerk een weerlegging: erken een tegenargument en weerleg het

**3. Slot**
- Herhaal je standpunt in andere woorden
- Eindig met een krachtige afsluiting (oproep, vooruitblik, prikkelende zin)

### Het standpunt

Een goed standpunt is:
- Duidelijk en eenduidig
- Verdedigbaar (niet iedereen is het er mee eens)
- Concreet geformuleerd

Slecht: "Sociale media heeft voor- en nadelen."
Goed: "Scholen moeten sociale media tijdens lestijd verbieden."

### De weerlegging

Een weerlegging maakt je betoog sterker. Je laat zien dat je de andere kant kent, maar er een antwoord op hebt.

Structuur: *Tegenstanders beweren dat... Dit klopt echter niet, omdat...*

### Beoordelingscriteria

Je wordt beoordeeld op:
- Inhoud: zijn je argumenten relevant en overtuigend?
- Opbouw: is de structuur helder?
- Taalgebruik: schrijf je correct en gevarieerd?
- Woordenschat: gebruik je passend en gevarieerd taalgebruik?`,
    vragen: [
      { id: "bt-1", niveau: "reproductie", vraag: "Wat is een these in een betoog?", opties: ["Een opsomming van argumenten", "Het standpunt dat de schrijver verdedigt", "Een weerlegging van een tegenargument", "De conclusie van het betoog"], antwoord: 1, uitleg: "De these is het standpunt dat de schrijver in het betoog verdedigt. Het staat meestal aan het einde van de inleiding." },
      { id: "bt-2", niveau: "reproductie", vraag: "Uit welke drie onderdelen bestaat de standaardstructuur van een betoog?", opties: ["Inleiding, argumenten, conclusie", "Inleiding, kern, slot", "These, antithese, synthese", "Standpunt, bewijs, herhaling"], antwoord: 1, uitleg: "Een betoog bestaat uit een inleiding (met standpunt), een kern (met argumenten en weerlegging) en een slot (met conclusie)." },
      { id: "bt-3", niveau: "reproductie", vraag: "Wat is de functie van een weerlegging in een betoog?", opties: ["Je geeft je eigen standpunt op", "Je erkent een tegenargument en laat zien waarom het jouw standpunt niet weerlegt", "Je geeft extra argumenten voor je standpunt", "Je vat de hele discussie samen"], antwoord: 1, uitleg: "Met een weerlegging laat je zien dat je de andere kant kent. Je erkent het tegenargument maar legt uit waarom het jouw standpunt niet ondermijnt. Dit maakt je betoog overtuigender." },
      { id: "bt-4", niveau: "reproductie", vraag: "Waarop word je beoordeeld bij het schrijven van een betoog op het examen?", opties: ["Alleen op de lengte van de tekst", "Op inhoud, opbouw, taalgebruik en woordenschat", "Alleen op de kwaliteit van de argumenten", "Op het aantal gebruikte signaalwoorden"], antwoord: 1, uitleg: "Je wordt beoordeeld op vier criteria: inhoud (argumenten), opbouw (structuur), taalgebruik (correctheid) en woordenschat (variatie en passendheid)." },
      { id: "bt-5", niveau: "toepassing", vraag: "Welk standpunt is het meest geschikt voor een betoog?", opties: ["Sociale media heeft zowel voordelen als nadelen voor jongeren.", "In dit betoog ga ik sociale media bespreken.", "Scholen moeten TikTok tijdens schooltijd verbieden.", "Sociale media is een onderdeel van ons dagelijks leven."], antwoord: 2, uitleg: "Een goed standpunt is verdedigbaar en concreet. 'Scholen moeten TikTok verbieden' is een duidelijk standpunt waar mensen het mee oneens kunnen zijn." },
      { id: "bt-6", niveau: "toepassing", vraag: "Een leerling schrijft: 'Tegenstanders zeggen dat huiswerk nuttig is. Dit is echter onjuist.' Wat ontbreekt er aan deze weerlegging?", opties: ["De leerling moet beginnen met een signaalwoord", "De weerlegging mist een onderbouwing waarom het onjuist is", "De leerling mag geen tegenstanders noemen", "De weerlegging staat op de verkeerde plek"], antwoord: 1, uitleg: "Een weerlegging is alleen overtuigend als je uitlegt waarom het tegenargument niet klopt. Alleen zeggen 'dit is onjuist' is niet voldoende." },
      { id: "bt-7", niveau: "toepassing", vraag: "Welke zin is een goede topic sentence voor een argument over de gevaren van fastfood?", opties: ["Fastfood is lekker en goedkoop.", "Ten eerste is fastfood schadelijk voor de gezondheid omdat het veel verzadigd vet bevat.", "Er zijn veel mensen die fastfood eten.", "Fastfood is een probleem in onze samenleving."], antwoord: 1, uitleg: "Een goede topic sentence introduceert het argument direct en concreet. 'Ten eerste is fastfood schadelijk voor de gezondheid omdat het veel verzadigd vet bevat' doet dat: het noemt het argument en geeft meteen een reden." },
      { id: "bt-8", niveau: "toepassing", vraag: "Je schrijft een betoog met de these: 'Reclame gericht op kinderen moet verboden worden.' Welk argument is het sterkst?", opties: ["Kinderen vinden reclame leuk.", "Kinderen kunnen reclame nog niet kritisch beoordelen en worden daardoor gemakkelijk gemanipuleerd.", "Er is veel reclame gericht op kinderen.", "Sommige ouders vinden reclame storend."], antwoord: 1, uitleg: "Het sterkste argument is direct relevant voor de these en bevat een concrete reden. 'Kinderen kunnen reclame niet kritisch beoordelen' onderbouwt waarom het verbod nodig is." },
      { id: "bt-9", niveau: "inzicht", vraag: "Waarom is het slim om je betoog te beginnen met een prikkelende openingszin in plaats van 'In dit betoog ga ik...'?", opties: ["Omdat de examinator dan denkt dat je slim bent", "Omdat een prikkelende opening de aandacht trekt en de lezer meteen betrokken maakt", "Omdat 'In dit betoog ga ik...' grammaticaal onjuist is", "Omdat een inleiding altijd kort moet zijn"], antwoord: 1, uitleg: "Een prikkelende openingszin (een stelling, een vraag, een anekdote) trekt de aandacht van de lezer. 'In dit betoog ga ik...' is saai en zegt inhoudelijk niets. Een goede opening vergroot de kans dat de lezer verder leest." },
      { id: "bt-10", niveau: "inzicht", vraag: "Een leerling heeft een betoog geschreven met drie sterke argumenten maar zonder weerlegging. Is dit een probleem?", opties: ["Nee, drie argumenten zijn genoeg voor een goed betoog", "Ja, zonder weerlegging lijkt het alsof je de andere kant niet kent, wat je betoog minder overtuigend maakt", "Nee, een weerlegging is alleen nodig bij een discussie, niet bij een betoog", "Ja, maar alleen als de tegenargumenten sterker zijn dan jouw argumenten"], antwoord: 1, uitleg: "Een weerlegging laat zien dat je de discussie kent en serieus neemt. Zonder weerlegging lijkt je betoog eenzijdig. Door een tegenargument te erkennen en te weerleggen, versterk je juist je eigen positie." },
    ],
  },
  {
    slug: "schrijfvaardigheid-beschouwing",
    titel: "Een beschouwing schrijven",
    ondertitel: "Meerdere kanten belichten zonder een duidelijk standpunt",
    niveau: "beide",
    vaardigheid: "Schrijfvaardigheid",
    emoji: "🔍",
    leerdoelen: [
      "Je kent het verschil tussen een betoog en een beschouwing",
      "Je kunt een onderwerp van meerdere kanten belichten",
      "Je kunt een beschouwing schrijven met een genuanceerde conclusie",
    ],
    uitleg: `## Een beschouwing schrijven

Een beschouwing is een tekst waarin je een onderwerp van meerdere kanten bekijkt. In tegenstelling tot een betoog verdedig je geen vast standpunt, maar onderzoek je de complexiteit van een kwestie.

### Betoog vs. beschouwing

| Betoog | Beschouwing |
|--------|-------------|
| Verdedigt een standpunt | Belicht meerdere kanten |
| Overtuigt de lezer | Informeert en laat de lezer nadenken |
| Argumenten voor een these | Argumenten voor en tegen |
| Duidelijke conclusie | Genuanceerde conclusie |

### Structuur van een beschouwing

**1. Inleiding**
- Introduceer het onderwerp en leg het belang ervan uit
- Formuleer de centrale vraag die je gaat onderzoeken

**2. Kern**
- Belicht minimaal twee verschillende perspectieven
- Geef bij elk perspectief argumenten en voorbeelden
- Breng nuance aan: wat zijn de sterke en zwakke punten van elk standpunt?

**3. Slot**
- Trek een genuanceerde conclusie
- Geef eventueel je eigen mening, maar erken de complexiteit

### Taalgebruik in een beschouwing

Gebruik distantietaal: *men kan stellen dat, sommigen beweren dat, anderen zijn van mening dat, enerzijds... anderzijds*

### Valkuilen

- Niet: ongewild een betoog schrijven door te veel voor een kant te kiezen
- Niet: geen conclusie trekken (een beschouwing is geen opsomming)
- Wel: een duidelijke centrale vraag formuleren en beantwoorden`,
    vragen: [
      { id: "bsc-1", niveau: "reproductie", vraag: "Wat is het belangrijkste verschil tussen een betoog en een beschouwing?", opties: ["Een betoog is langer dan een beschouwing", "Een betoog verdedigt een standpunt, een beschouwing belicht meerdere kanten", "Een beschouwing bevat meer argumenten dan een betoog", "Een betoog heeft een inleiding, een beschouwing niet"], antwoord: 1, uitleg: "Het kernverschil is de intentie: een betoog wil overtuigen, een beschouwing wil informeren en nuanceren door meerdere perspectieven te belichten." },
      { id: "bsc-2", niveau: "reproductie", vraag: "Welk type conclusie past bij een beschouwing?", opties: ["Een conclusie die duidelijk voor een standpunt kiest", "Een genuanceerde conclusie die de complexiteit erkent", "Een conclusie die de lezer oproept tot actie", "Een conclusie die alle argumenten herhaalt"], antwoord: 1, uitleg: "Bij een beschouwing trek je een genuanceerde conclusie. Je erkent dat het onderwerp complex is en dat er meerdere geldige perspectieven bestaan." },
      { id: "bsc-3", niveau: "toepassing", vraag: "Welke zin past het best in een beschouwing over social media?", opties: ["Social media is slecht voor jongeren en moet worden beperkt.", "Enerzijds biedt social media jongeren kansen voor zelfexpressie, anderzijds kleven er risicos aan overmatig gebruik.", "Ik vind social media gevaarlijk en dat moet iedereen weten.", "Social media heeft alleen maar nadelen."], antwoord: 1, uitleg: "'Enerzijds... anderzijds' is typische beschouwingstaal: je belicht twee kanten zonder voor een van beide te kiezen." },
      { id: "bsc-4", niveau: "toepassing", vraag: "Een leerling schrijft een beschouwing maar neemt in elke alinea het standpunt in dat social media slecht is. Wat gaat er mis?", opties: ["De leerling schrijft te veel alineas", "De leerling schrijft eigenlijk een betoog in plaats van een beschouwing", "De leerling gebruikt te veel signaalwoorden", "Er gaat niets mis, dit is ook toegestaan bij een beschouwing"], antwoord: 1, uitleg: "Als je consequent voor een kant kiest, schrijf je een betoog, geen beschouwing. Een beschouwing vereist dat je meerdere perspectieven eerlijk belicht." },
      { id: "bsc-5", niveau: "inzicht", vraag: "Wanneer is het beter om een beschouwing te schrijven dan een betoog?", opties: ["Als je geen duidelijke mening hebt over het onderwerp", "Als het onderwerp complex is en meerdere legitieme perspectieven kent die het waard zijn om te onderzoeken", "Als je niet weet hoe je een weerlegging moet schrijven", "Als de opdracht vraagt om een korte tekst"], antwoord: 1, uitleg: "Een beschouwing is het meest geschikt als een onderwerp echt complex is: als er meerdere geldige perspectieven zijn die elk serieuze aandacht verdienen. Het is niet een uitwijkoptie als je geen mening hebt." },
    ],
  },

  // =====================
  // ARGUMENTATIE
  // =====================
  {
    slug: "argumentatie-soorten",
    titel: "Soorten argumenten",
    ondertitel: "Herken en gebruik verschillende argumentatietypen",
    niveau: "beide",
    vaardigheid: "Argumentatie",
    emoji: "💬",
    leerdoelen: [
      "Je kent de belangrijkste soorten argumenten",
      "Je kunt een argument classificeren",
      "Je kunt beoordelen hoe sterk een argument is",
    ],
    uitleg: `## Soorten argumenten

Niet elk argument is hetzelfde. Op het examen moet je argumenten kunnen herkennen en beoordelen.

### De vier hoofdtypen

**1. Feitargument**
Gebaseerd op aantoonbare feiten, cijfers of statistieken.
Voorbeeld: "Uit onderzoek blijkt dat 70% van de jongeren dagelijks meer dan drie uur op hun telefoon zit."
Sterk als: de bron betrouwbaar is.

**2. Deskundigenargument**
Een autoriteit of expert wordt aangehaald.
Voorbeeld: "Hoogleraar psychologie Van Dam stelt dat slaaptekort de leerprestaties ernstig schaadt."
Sterk als: de deskundige relevant en onpartijdig is.

**3. Voorbeeldargument**
Een concreet voorbeeld illustreert het standpunt.
Voorbeeld: "In Finland, waar minder huiswerk wordt gegeven, scoren leerlingen juist beter."
Sterk als: het voorbeeld representatief is.

**4. Analogieargument**
Een vergelijking met een vergelijkbare situatie.
Voorbeeld: "Net zoals we roken verbieden op scholen, zouden we ook fastfood moeten weren."
Sterk als: de vergelijking opgaat.

### Sterkte van argumenten

Een sterk argument is:
- Relevant (heeft directe relatie met het standpunt)
- Betrouwbaar (gebaseerd op feiten of gezaghebbende bronnen)
- Voldoende (een voorbeeld is zelden genoeg)`,
    vragen: [
      { id: "sa-1", niveau: "reproductie", vraag: "Welk soort argument is: 'Volgens neuroloog Peters zorgt multitasken voor slechtere concentratie'?", opties: ["Feitargument", "Deskundigenargument", "Voorbeeldargument", "Analogieargument"], antwoord: 1, uitleg: "Een deskundige (neuroloog Peters) wordt aangehaald om het standpunt te onderbouwen. Dat is een deskundigenargument." },
      { id: "sa-2", niveau: "reproductie", vraag: "Welk soort argument is: 'Uit CBS-cijfers blijkt dat het aantal fietsdiefstallen met 30% is gestegen'?", opties: ["Deskundigenargument", "Analogieargument", "Feitargument", "Voorbeeldargument"], antwoord: 2, uitleg: "Cijfers van het CBS zijn aantoonbare feiten. Dit is een feitargument." },
      { id: "sa-3", niveau: "reproductie", vraag: "Welk soort argument is: 'Neem mijn buurman: die is gestopt met roken en voelt zich nu veel beter'?", opties: ["Feitargument", "Deskundigenargument", "Voorbeeldargument", "Analogieargument"], antwoord: 2, uitleg: "Het voorbeeld van de buurman is een concreet geval ter illustratie. Dit is een voorbeeldargument." },
      { id: "sa-4", niveau: "reproductie", vraag: "Wat is een analogieargument?", opties: ["Een argument gebaseerd op statistieken", "Een argument waarbij een vergelijking wordt gemaakt met een vergelijkbare situatie", "Een argument waarbij een deskundige wordt geciteerd", "Een argument gebaseerd op een persoonlijke ervaring"], antwoord: 1, uitleg: "Bij een analogieargument vergelijk je de situatie met een andere, vergelijkbare situatie om je punt te maken." },
      { id: "sa-5", niveau: "toepassing", vraag: "Waarom is een analogieargument niet altijd overtuigend?", opties: ["Omdat analogieen altijd onjuist zijn", "Omdat de vergeleken situaties niet altijd vergelijkbaar zijn", "Omdat analogieen geen feiten bevatten", "Omdat analogieen alleen werken in mondelinge discussies"], antwoord: 1, uitleg: "Een analogie is alleen sterk als de twee situaties echt vergelijkbaar zijn. Zijn er grote verschillen, dan gaat de vergelijking niet op." },
      { id: "sa-6", niveau: "toepassing", vraag: "Een schrijver stelt: 'Veel mensen rijden te hard, dus de maximumsnelheid moet omlaag.' Is dit een sterk argument?", opties: ["Ja, want feiten ondersteunen het standpunt", "Nee, want 'veel mensen' is vaag en er ontbreekt een cijfermatige onderbouwing", "Ja, want de conclusie volgt logisch uit het argument", "Nee, want het is een deskundigenargument zonder bron"], antwoord: 1, uitleg: "'Veel mensen' is een vage uitdrukking zonder concrete onderbouwing. Een sterk feitargument zou specifieke cijfers noemen, zoals 'Uit onderzoek blijkt dat 45% van de automobilisten structureel te hard rijdt.'" },
      { id: "sa-7", niveau: "toepassing", vraag: "Welk argument is het sterkst voor de stelling 'Beweging verbetert schoolprestaties'?", opties: ["Mijn kind beweegt veel en haalt goede cijfers.", "Iedereen weet dat sporten goed is voor je hersenen.", "Uit een grootschalig onderzoek van de Universiteit Utrecht blijkt dat leerlingen die dagelijks 30 minuten bewegen gemiddeld een halve punt hoger scoren.", "Vroeger hadden kinderen ook meer gymles en de cijfers waren beter."], antwoord: 2, uitleg: "Het derde argument is het sterkst: het is specifiek, heeft een betrouwbare bron en bevat concrete cijfers. De andere opties zijn te vaag, anekdotisch of bevatten een onbewezen redenering." },
      { id: "sa-8", niveau: "inzicht", vraag: "Een schrijver gebruikt uitsluitend voorbeeldargumenten. Wat is het nadeel hiervan?", opties: ["Voorbeelden zijn nooit overtuigend", "Afzonderlijke voorbeelden bewijzen geen algemene regel: ze zijn illustratief maar niet afdoende", "Voorbeelden zijn te moeilijk te begrijpen voor de lezer", "Voorbeelden mogen alleen worden gebruikt in combinatie met analogieen"], antwoord: 1, uitleg: "Voorbeelden illustreren een punt maar bewijzen het niet. Voor een overtuigend betoog heb je ook feitargumenten of deskundigenargumenten nodig die de algemeenheid van het punt ondersteunen." },
    ],
  },
  {
    slug: "argumentatie-drogredenen",
    titel: "Drogredenen herkennen",
    ondertitel: "Leer ondeugdelijke argumenten herkennen",
    niveau: "beide",
    vaardigheid: "Argumentatie",
    emoji: "🚫",
    leerdoelen: [
      "Je kent de meest voorkomende drogredenen",
      "Je kunt een drogreden herkennen in een tekst",
      "Je kunt uitleggen waarom een drogreden niet geldig is",
    ],
    uitleg: `## Drogredenen

Een drogreden is een argument dat op het eerste gezicht overtuigend lijkt, maar bij nadere beschouwing niet klopt. Op het examen moet je drogredenen kunnen herkennen en benoemen.

### De meest voorkomende drogredenen

**1. Ad hominem**
Je valt de persoon aan in plaats van het argument.
Voorbeeld: "Wat zou jij van klimaat weten? Je bent geen wetenschapper."
Fout: de persoon aanvallen zegt niets over de geldigheid van het argument.

**2. Stroman**
Je verdraait het argument van de tegenstander en weerleg je de verdraaide versie.
Voorbeeld: "Jij wilt minder auto's? Dus jij wilt dat iedereen lopend naar het werk gaat!"
Fout: dit is niet wat de tegenstander zei.

**3. Ad populum (beroep op de massa)**
Iets is waar of goed omdat veel mensen het denken.
Voorbeeld: "Iedereen koopt dit product, dus het moet wel goed zijn."
Fout: populariteit bewijst geen kwaliteit of waarheid.

**4. Valse dichotomie**
Je stelt ten onrechte dat er maar twee opties zijn.
Voorbeeld: "Je bent voor ons of tegen ons."
Fout: er zijn bijna altijd meer opties.

**5. Cirkelredenering**
De conclusie wordt gebruikt als bewijs voor zichzelf.
Voorbeeld: "De Bijbel is waar omdat er in de Bijbel staat dat het waar is."
Fout: dit bewijst niets.

**6. Post hoc ergo propter hoc**
A komt voor B, dus A veroorzaakt B.
Voorbeeld: "Nadat ik een ketting begon te dragen, won ons team steeds. De ketting brengt geluk."
Fout: volgorde in tijd is geen oorzakelijk verband.

### Tip voor het examen

Als je een drogreden moet benoemen, geef dan altijd aan:
1. Welke drogreden het is
2. Waarom het argument niet klopt`,
    vragen: [
      { id: "dr-1", niveau: "reproductie", vraag: "Welke drogreden is het als iemand zegt: 'Jij wilt het onderwijs verbeteren? Jij bent zelf ook op school gezeten, dus je weet er niets van'?", opties: ["Stroman", "Ad hominem", "Ad populum", "Valse dichotomie"], antwoord: 1, uitleg: "De spreker valt de persoon aan (je bent zelf op school gezeten) in plaats van het argument te weerleggen. Dat is ad hominem." },
      { id: "dr-2", niveau: "reproductie", vraag: "Wat is een stroman-drogreden?", opties: ["Je valt de persoon aan in plaats van het argument", "Je verdraait het argument van de tegenstander en weerleg je de verdraaide versie", "Je stelt dat iets klopt omdat veel mensen het denken", "Je gebruikt de conclusie als bewijs voor zichzelf"], antwoord: 1, uitleg: "Bij een stroman verdraai je het standpunt van de tegenstander naar een extreme of onjuiste versie, en weerleg je die versie. De echte positie van de tegenstander wordt niet aangevochten." },
      { id: "dr-3", niveau: "reproductie", vraag: "Welke drogreden bevat de uitspraak: 'Miljoenen mensen geloven in dit supplement, dus het werkt'?", opties: ["Ad hominem", "Cirkelredenering", "Ad populum", "Post hoc"], antwoord: 2, uitleg: "Beroep op de massa (ad populum): het feit dat veel mensen iets geloven, bewijst niet dat het waar of effectief is." },
      { id: "dr-4", niveau: "reproductie", vraag: "Welke drogreden is dit: 'Nadat ik elke dag ging hardlopen, werd ik ziek. Hardlopen maakt je ziek'?", opties: ["Valse dichotomie", "Stroman", "Post hoc ergo propter hoc", "Ad hominem"], antwoord: 2, uitleg: "Post hoc: omdat hardlopen voor de ziekte kwam, wordt geconcludeerd dat het de oorzaak is. Maar volgorde in tijd bewijst geen oorzakelijk verband." },
      { id: "dr-5", niveau: "toepassing", vraag: "Iemand zegt: 'Je bent voor strenge klimaatmaatregelen? Dan wil je zeker dat we allemaal in grotten gaan wonen!' Welke drogreden is dit?", opties: ["Ad hominem", "Stroman", "Valse dichotomie", "Cirkelredenering"], antwoord: 1, uitleg: "Het argument van de tegenstander (strenge klimaatmaatregelen) wordt verdraaid tot een absurde extreme positie (in grotten wonen). Dat is een stroman." },
      { id: "dr-6", niveau: "toepassing", vraag: "Leg uit waarom 'Je bent voor of tegen ons' een drogreden is.", opties: ["Omdat het een aanval is op de persoon", "Omdat het ten onrechte suggereert dat er maar twee opties zijn, terwijl er meer standpunten mogelijk zijn", "Omdat het een beroep doet op de massa", "Omdat de conclusie zichzelf bewijst"], antwoord: 1, uitleg: "Dit is een valse dichotomie. In werkelijkheid zijn er bijna altijd meerdere standpunten mogelijk: neutraal, gedeeltelijk voor, gedeeltelijk tegen, enzovoort. De twee-opties-redenering is kunstmatig." },
      { id: "dr-7", niveau: "inzicht", vraag: "Waarom zijn drogredenen gevaarlijk in een maatschappelijk debat?", opties: ["Omdat ze te moeilijk te begrijpen zijn voor gewone mensen", "Omdat ze de discussie misleiden: ze lijken overtuigend maar bevatten een logische fout, waardoor slechte conclusies worden getrokken", "Omdat ze altijd opzettelijk worden gebruikt om te liegen", "Omdat ze alleen voorkomen in politieke debatten"], antwoord: 1, uitleg: "Drogredenen zijn gevaarlijk omdat ze op het eerste gezicht overtuigend klinken. Als mensen de fout niet herkennen, kunnen ze op basis van onjuiste redenering tot verkeerde conclusies komen. Kritisch denken is essentieel om dit te doorprikken." },
    ],
  },

  // =====================
  // LITERATUUR
  // =====================
  {
    slug: "literatuur-literaire-analyse",
    titel: "Literaire analyse",
    ondertitel: "Thema, personages en vertelperspectief",
    niveau: "vwo",
    vaardigheid: "Literatuur",
    emoji: "📚",
    leerdoelen: [
      "Je kunt het thema van een roman benoemen en onderbouwen",
      "Je kunt een personage analyseren op karakter en ontwikkeling",
      "Je kunt het vertelperspectief bepalen en de functie ervan uitleggen",
    ],
    uitleg: `## Literaire analyse

Een literaire analyse gaat verder dan navertellen. Je onderzoekt hoe een tekst in elkaar zit en waarom de schrijver bepaalde keuzes heeft gemaakt.

### Thema

Het thema is de centrale gedachte of boodschap van een werk. Het is abstracter dan het onderwerp.

- **Onderwerp**: waar gaat het over? (bijv. de Tweede Wereldoorlog)
- **Thema**: wat wil de auteur zeggen? (bijv. hoe gewone mensen tot gruweldaden komen)

Een thema formuleer je als een uitspraak, niet als een woord.

Niet: "het thema is liefde"
Wel: "het thema is hoe liefde mensen kan verblinden voor de realiteit"

### Personageanalyse

Bij een personage kijk je naar:
- **Karakterisering**: hoe wordt het personage beschreven? (direct door de verteller, indirect via gedrag/dialoog)
- **Ontwikkeling**: verandert het personage in de loop van het verhaal?
- **Functie**: welke rol speelt het personage in het geheel?

### Vertelperspectief

**Ik-perspectief (intern)**: de verteller is een personage in het verhaal.
Functie: creëert betrokkenheid, maar geeft een beperkt en subjectief beeld.

**Hij/zij-perspectief (extern)**:
- *Alwetend*: de verteller weet alles, ook de gedachten van personages.
- *Beperkt*: de verteller volgt één personage maar weet niet alles.

### Literaire begrippen

- **Tijdsperspectief**: hoe verhoudt de verteltime zich tot de verhaaltime?
- **Flashback**: terugblik op eerder gebeurde events
- **Cliffhanger**: spannend einde van een hoofdstuk
- **Symboliek**: objecten of figuren die een diepere betekenis hebben`,
    vragen: [
      { id: "la-1", niveau: "reproductie", vraag: "Wat is het verschil tussen onderwerp en thema?", opties: ["Er is geen verschil, het zijn synoniemen", "Het onderwerp is concreet (waar gaat het over), het thema is de abstracte boodschap", "Het thema is concreet, het onderwerp is abstract", "Het onderwerp gaat over personages, het thema over de plot"], antwoord: 1, uitleg: "Het onderwerp is het concrete gegeven (bijv. een oorlog), het thema is de diepere boodschap die de auteur overbrengt (bijv. over menselijke wreedheid)." },
      { id: "la-2", niveau: "reproductie", vraag: "Wat is het kenmerk van een alwetende verteller?", opties: ["De verteller is zelf een personage in het verhaal", "De verteller weet alles, inclusief de gedachten en gevoelens van alle personages", "De verteller vertelt alleen wat hij zelf heeft meegemaakt", "De verteller is anoniem en heeft geen naam"], antwoord: 1, uitleg: "Een alwetende verteller staat buiten het verhaal en heeft toegang tot de gedachten en gevoelens van alle personages. Dit geeft een breed perspectief." },
      { id: "la-3", niveau: "reproductie", vraag: "Wat is een flashback?", opties: ["Een spannend einde van een hoofdstuk", "Een terugblik op eerder in het verhaal of voor het verhaal gebeurde events", "Een vooruitblik op wat er nog gaat gebeuren", "Een beschrijving van de omgeving"], antwoord: 1, uitleg: "Een flashback (ook wel analepse) is een terugblik: de vertelling springt terug naar een eerder moment in de tijd." },
      { id: "la-4", niveau: "reproductie", vraag: "Hoe formuleer je een thema correct?", opties: ["Als een los woord, zoals 'liefde' of 'dood'", "Als een uitspraak die de centrale boodschap van het werk weergeeft", "Als een samenvatting van de plot", "Als een beschrijving van de hoofdpersoon"], antwoord: 1, uitleg: "Een thema is geen los woord maar een uitspraak. Niet 'liefde' maar 'hoe liefde mensen kan verblinden voor de werkelijkheid'." },
      { id: "la-5", niveau: "toepassing", vraag: "Een roman is geschreven vanuit het perspectief van een moordenaar die zichzelf onschuldig acht. Wat is een mogelijke functie van dit perspectief?", opties: ["De lezer krijgt een objectief beeld van de gebeurtenissen", "De lezer wordt uitgenodigd kritisch na te denken over schuld en zelfbedrog", "De spanning wordt verminderd omdat de lezer alles weet", "Het maakt de roman toegankelijker voor jongere lezers"], antwoord: 1, uitleg: "Door het perspectief van de moordenaar te kiezen, dwingt de auteur de lezer om zelf te oordelen. De onbetrouwbare verteller is een klassiek literair middel om themas als schuld en zelfbedrog te verkennen." },
      { id: "la-6", niveau: "toepassing", vraag: "Een personage verandert in de loop van het verhaal van naief en goedgelovig naar cynisch en wantrouwend. Hoe noem je dit soort personage?", opties: ["Een statisch personage", "Een dynamisch personage", "Een antagonist", "Een archetype"], antwoord: 1, uitleg: "Een dynamisch personage ontwikkelt zich in de loop van het verhaal. Een statisch personage blijft gelijk. De beschreven ontwikkeling (van naief naar cynisch) maakt dit een dynamisch personage." },
      { id: "la-7", niveau: "toepassing", vraag: "In een roman worden steeds witte rozen beschreven op de plekken waar de hoofdpersoon gelukkig is. Hoe noem je dit literaire middel?", opties: ["Metafoor", "Symboliek", "Cliffhanger", "Flashback"], antwoord: 1, uitleg: "De witte rozen staan symbool voor geluk. Dit is een voorbeeld van symboliek: een object of element dat een diepere, abstracte betekenis vertegenwoordigt." },
      { id: "la-8", niveau: "inzicht", vraag: "Waarom kiezen auteurs soms bewust voor een onbetrouwbare verteller?", opties: ["Omdat het makkelijker is om te schrijven", "Om de lezer actief te betrekken bij het interpreteren van de werkelijkheid en themas als bedrog en zelfbedrog te verkennen", "Omdat een onbetrouwbare verteller altijd voor meer spanning zorgt", "Omdat het een teken is van slechte schrijfvaardigheid"], antwoord: 1, uitleg: "Een onbetrouwbare verteller is een bewuste literaire keuze. De lezer kan niet blind vertrouwen op de verteller en moet zelf nadenken over wat er echt is gebeurd. Dit activerende element stelt auteurs in staat themas als waarheid, perceptie en zelfbedrog diepgaand te onderzoeken." },
    ],
  },
  {
    slug: "literatuur-geschiedenis",
    titel: "Literatuurgeschiedenis: hoofdlijnen",
    ondertitel: "Van Middeleeuwen tot de twintigste eeuw",
    niveau: "beide",
    vaardigheid: "Literatuur",
    emoji: "🏛️",
    leerdoelen: [
      "Je kent de belangrijkste literaire perioden en stromingen",
      "Je kunt een tekst plaatsen in een literaire stroming",
      "Je kent kenmerken van de belangrijkste stromingen",
    ],
    uitleg: `## Literatuurgeschiedenis: hoofdlijnen

Voor het eindexamen moet je de grote lijnen van de Nederlandse literatuurgeschiedenis kennen.

### Middeleeuwen (ca. 500-1500)

Literatuur was vooral religieus of ridderlijk van aard. Teksten werden voorgedragen, niet gelezen.
- **Kenmerken**: religiositeit, ridderidealen, moraliserende toon
- **Voorbeelden**: Beatrijs, Karel ende Elegast, Van den vos Reynaerde

### Renaissance en Humanisme (1500-1650)

Hernieuwde interesse in de klassieke oudheid. De mens centraal (humanisme).
- **Kenmerken**: nadruk op ratio, klassieke vormen, optimisme over de mensheid
- **Voorbeeld**: Erasmus, Hooft, Vondel

### Gouden Eeuw (1600-1700)

Bloeiperiode van Nederlandse cultuur en literatuur.
- **Kenmerken**: trots op Nederland, religieuze themas, toneel
- **Voorbeeld**: Joost van den Vondel (Gijsbrecht van Aemstel)

### Verlichting (1700-1800)

Rede en wetenschap boven geloof en traditie.
- **Kenmerken**: rationalisme, kritiek op bijgeloof, optimisme

### Romantiek (1800-1850)

Reactie op de Verlichting. Gevoel boven rede, natuur, het verleden.
- **Kenmerken**: emotie, nationalisme, historische themas, natuur
- **Voorbeeld**: Potgieter, Da Costa

### Realisme en Naturalisme (1850-1900)

Literatuur als spiegel van de werkelijkheid, ook de harde kant.
- **Kenmerken**: objectieve beschrijving, maatschappijkritiek, determinisme
- **Voorbeeld**: Multatuli (Max Havelaar)

### Tachtigers / Beweging van Tachtig (ca. 1880)

Kunst om de kunst. Verzet tegen brave burgerlijkheid.
- **Kenmerken**: individualisme, schoonheid, l'art pour l'art
- **Voorbeeld**: Willem Kloos, Louis Couperus

### Modernisme (1910-1940)

Experiment met vorm en taal. Invloed van Freud en de Eerste Wereldoorlog.
- **Kenmerken**: stream of consciousness, fragmentarisch, subjectief
- **Voorbeeld**: Slauerhoff, Vestdijk`,
    vragen: [
      { id: "lg-1", niveau: "reproductie", vraag: "Welke stroming staat bekend om de leuze 'l'art pour l'art' (kunst om de kunst)?", opties: ["Romantiek", "Realisme", "Tachtigers", "Verlichting"], antwoord: 2, uitleg: "De Beweging van Tachtig (Tachtigers) pleitte voor kunst om de kunst zelf, los van moraal of maatschappij. Willem Kloos was een bekende vertegenwoordiger." },
      { id: "lg-2", niveau: "reproductie", vraag: "Welk kenmerk past het best bij de Romantiek?", opties: ["Nadruk op rede en wetenschap", "Emotie, gevoel en bewondering voor de natuur", "Objectieve beschrijving van de werkelijkheid", "Religiositeit en ridderidealen"], antwoord: 1, uitleg: "De Romantiek was een reactie op de Verlichting. Gevoel, emotie, natuur en het verleden stonden centraal, in plaats van rede en rationalisme." },
      { id: "lg-3", niveau: "reproductie", vraag: "In welke periode past het boek Max Havelaar van Multatuli, met zijn kritiek op het koloniale beleid?", opties: ["Middeleeuwen", "Gouden Eeuw", "Realisme/Naturalisme", "Modernisme"], antwoord: 2, uitleg: "Max Havelaar (1860) past in het Realisme: een eerlijke, kritische blik op de werkelijkheid, inclusief de misstanden van het koloniale systeem." },
      { id: "lg-4", niveau: "toepassing", vraag: "Een gedicht uit 1885 beschrijft de innerlijke gevoelens van de dichter in rijke, muzikale taal en noemt maatschappelijke themas onbelangrijk. In welke stroming past dit?", opties: ["Verlichting", "Realisme", "Tachtigers", "Middeleeuwen"], antwoord: 2, uitleg: "Nadruk op persoonlijk gevoel, muzikale taal en 'kunst om de kunst' zijn typische kenmerken van de Beweging van Tachtig (Tachtigers)." },
      { id: "lg-5", niveau: "toepassing", vraag: "Welke stroming legde de nadruk op rede, wetenschap en kritiek op bijgeloof?", opties: ["Romantiek", "Middeleeuwen", "Verlichting", "Modernisme"], antwoord: 2, uitleg: "De Verlichting (18e eeuw) plaatste rede en wetenschap boven geloof en traditie. Filosoof Voltaire en schrijver Rousseau zijn bekende vertegenwoordigers." },
      { id: "lg-6", niveau: "inzicht", vraag: "Waarom kan het belangrijk zijn om de literaire stroming van een tekst te kennen voor je analyse?", opties: ["Omdat je dan weet hoe oud de tekst is", "Omdat de stroming context biedt: het helpt je begrijpen welke ideeen en waarden de auteur beinvloedden en welke keuzes daardoor logisch zijn", "Omdat je de stroming altijd moet noemen in je analyse om punten te halen", "Omdat elke stroming vaste regels heeft waaraan een tekst moet voldoen"], antwoord: 1, uitleg: "De literaire stroming geeft historische en culturele context. Als je weet dat een tekst uit het Naturalisme komt, begrijp je waarom de auteur determinisme en sociale misstanden benadrukt. Context verdiept je analyse." },
    ],
  },
];

export function getLes(slug: string): Les | undefined {
  return lessen.find((l) => l.slug === slug);
}

export function getLessenVoorNiveau(niveau: "havo" | "vwo"): Les[] {
  return lessen.filter((l) => l.niveau === niveau || l.niveau === "beide");
}

export function getLessenVoorVaardigheid(vaardigheid: string): Les[] {
  return lessen.filter((l) => l.vaardigheid === vaardigheid);
}

export const vaardigheden = [
  { naam: "Leesvaardigheid", emoji: "📖", slug: "leesvaardigheid", beschrijving: "Tekstdoelen, signaalwoorden, vraagtypes" },
  { naam: "Schrijfvaardigheid", emoji: "✍️", slug: "schrijfvaardigheid", beschrijving: "Betoog, beschouwing, uiteenzetting" },
  { naam: "Argumentatie", emoji: "💬", slug: "argumentatie", beschrijving: "Soorten argumenten, drogredenen, Toulmin" },
  { naam: "Literatuur", emoji: "📚", slug: "literatuur", beschrijving: "Literaire analyse, stromingen, leesdossier" },
  { naam: "Mondeling", emoji: "🎤", slug: "mondeling", beschrijving: "Presenteren, debatteren, boekgesprek" },
  { naam: "Werken met AI", emoji: "🤖", slug: "ai", beschrijving: "AI slim inzetten bij Nederlands" },
];

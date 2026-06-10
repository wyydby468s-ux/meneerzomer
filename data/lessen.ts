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
- **Werkwoordsvorm**: staan er veel gebiedende wijs-vormen? (doe, ga, koop) → instrueren of activeren
- **Argumenten**: zijn er redenen of bewijzen? → overtuigen
- **Ondertoon**: is de tekst neutraal of sturend?

### Tip voor het examen

Op het HAVO-examen wordt je gevraagd het tekstdoel te benoemen én te onderbouwen. Noem altijd een concreet voorbeeld uit de tekst als bewijs.`,
    youtubeId: "dQw4w9WgXcQ",
    vragen: [
      {
        id: "td-1",
        niveau: "reproductie",
        vraag: "Welk tekstdoel heeft een tekst die de lezer wil overtuigen een bepaald standpunt over te nemen?",
        opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"],
        antwoord: 1,
        uitleg: "Een tekst die de lezer een standpunt wil laten overnemen heeft als doel overtuigen. De schrijver gebruikt daarvoor argumenten.",
      },
      {
        id: "td-2",
        niveau: "reproductie",
        vraag: "Een recept in een kookboek heeft als tekstdoel...",
        opties: ["Informeren", "Overtuigen", "Instrueren", "Activeren"],
        antwoord: 2,
        uitleg: "Een recept legt uit hoe je iets moet maken. De lezer wordt stap voor stap begeleid. Dat is instrueren.",
      },
      {
        id: "td-3",
        niveau: "toepassing",
        vraag: 'Een tekst begint met: "Elk jaar sterven duizenden mensen door verkeersongelukken. Dit moet stoppen. Schrijf vandaag nog uw gemeenteraadslid aan." Wat is het tekstdoel?',
        opties: ["Alleen informeren", "Alleen overtuigen", "Activeren (met overtuigen als middel)", "Instrueren"],
        antwoord: 2,
        uitleg: "De tekst wil de lezer aanzetten tot een concrete actie (een brief schrijven). Overtuigen is het middel, activeren is het doel.",
      },
      {
        id: "td-4",
        niveau: "toepassing",
        vraag: "Een leerling zegt: 'Deze tekst informeert, want er staan veel feiten in.' Klopt deze redenering altijd?",
        opties: [
          "Ja, feiten wijzen altijd op informeren",
          "Nee, feiten kunnen ook gebruikt worden om te overtuigen",
          "Ja, zonder feiten kun je niet informeren",
          "Nee, feiten horen alleen bij instrueren",
        ],
        antwoord: 1,
        uitleg: "Feiten kunnen ook als argumenten dienen in een overtuigende tekst. Je moet dus ook letten op de toon en de opbouw van de tekst.",
      },
      {
        id: "td-5",
        niveau: "inzicht",
        vraag: "Een advertentie voor een goed doel toont schrijnende foto's van kinderen en eindigt met 'Doneer nu'. Welke tekstdoelen zijn hier gecombineerd?",
        opties: [
          "Informeren en instrueren",
          "Overtuigen en activeren",
          "Informeren en overtuigen",
          "Instrueren en activeren",
        ],
        antwoord: 1,
        uitleg: "De foto's en emotionele taal overtuigen de lezer. De oproep 'Doneer nu' activeert tot actie. Dit is een klassieke combinatie van overtuigen en activeren.",
      },
    ],
  },
  {
    slug: "leesvaardigheid-signaalwoorden",
    titel: "Signaalwoorden en alineaverbanden",
    ondertitel: "Begrijp hoe alinea's met elkaar samenhangen",
    niveau: "havo",
    vaardigheid: "Leesvaardigheid",
    emoji: "🔗",
    leerdoelen: [
      "Je kent de belangrijkste soorten signaalwoorden",
      "Je kunt het verband tussen twee alinea's benoemen",
      "Je kunt signaalwoorden gebruiken in je eigen schrijfwerk",
    ],
    uitleg: `## Signaalwoorden en alineaverbanden

Signaalwoorden geven aan hoe zinnen of alinea's met elkaar in verband staan. Ze zijn cruciaal voor het begrijpen van een tekst én voor je eigen schrijfwerk.

### De belangrijkste verbanden

**Oorzaak-gevolg**
Signaalwoorden: *omdat, doordat, daardoor, dus, daarom, waardoor, zodat*
Voorbeeld: "Het regende, *daarom* gingen we naar binnen."

**Tegenstelling**
Signaalwoorden: *maar, echter, toch, hoewel, terwijl, daarentegen, anderzijds*
Voorbeeld: "Hij studeerde hard, *toch* zakte hij."

**Opsomming**
Signaalwoorden: *ten eerste, ten tweede, bovendien, ook, verder, daarnaast*
Voorbeeld: "Hij was moe. *Bovendien* had hij honger."

**Conclusie**
Signaalwoorden: *dus, kortom, al met al, concluderend, samenvattend*
Voorbeeld: "*Kortom*, het plan werkte niet."

**Voorbeeld/uitwerking**
Signaalwoorden: *bijvoorbeeld, zo, zoals, dit blijkt uit, ter illustratie*
Voorbeeld: "Er zijn veel opties, *bijvoorbeeld* fietsen of lopen."

**Toegeving**
Signaalwoorden: *weliswaar, toegegeven, weliswaar... maar*
Voorbeeld: "*Weliswaar* kost het geld, maar het is het waard."

### Tip voor het examen

Bij de vraag 'welk verband heeft alinea X met alinea Y?' lees je altijd de laatste zin van de eerste alinea en de eerste zin van de tweede alinea. Het signaalwoord staat meestal aan het begin van de tweede alinea.`,
    youtubeId: "dQw4w9WgXcQ",
    vragen: [
      {
        id: "sw-1",
        niveau: "reproductie",
        vraag: "Welk signaalwoord hoort bij een oorzaak-gevolgverband?",
        opties: ["Echter", "Doordat", "Kortom", "Bovendien"],
        antwoord: 1,
        uitleg: "'Doordat' geeft een oorzaak aan. 'Echter' is een tegenstelling, 'kortom' een conclusie en 'bovendien' een opsomming.",
      },
      {
        id: "sw-2",
        niveau: "reproductie",
        vraag: "Welk verband heeft het woord 'toch' in de zin: 'Hij had weinig geslapen, toch presteerde hij goed'?",
        opties: ["Oorzaak-gevolg", "Opsomming", "Tegenstelling", "Conclusie"],
        antwoord: 2,
        uitleg: "'Toch' geeft aan dat iets ingaat tegen de verwachting. Dat is een tegenstelling.",
      },
      {
        id: "sw-3",
        niveau: "toepassing",
        vraag: "Alinea 1 beschrijft de oorzaken van files. Alinea 2 begint met: 'Dit leidt jaarlijks tot miljardenverliezen.' Welk verband is er?",
        opties: ["Opsomming", "Tegenstelling", "Oorzaak-gevolg", "Conclusie"],
        antwoord: 2,
        uitleg: "'Dit leidt tot' geeft het gevolg aan van wat in alinea 1 werd beschreven. Er is dus een oorzaak-gevolgverband.",
      },
    ],
  },
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

### Signaalwoorden voor een betoog

- Standpunt: *ik ben van mening dat, naar mijn idee, ik vind dat*
- Argument: *ten eerste, bovendien, ook, een ander argument is*
- Weerlegging: *weliswaar, toegegeven, tegenstanders stellen dat*
- Conclusie: *kortom, al met al, concluderend*`,
    youtubeId: "dQw4w9WgXcQ",
    vragen: [
      {
        id: "bt-1",
        niveau: "reproductie",
        vraag: "Wat is een these in een betoog?",
        opties: [
          "Een opsomming van argumenten",
          "Het standpunt dat de schrijver verdedigt",
          "Een weerlegging van een tegenargument",
          "De conclusie van het betoog",
        ],
        antwoord: 1,
        uitleg: "De these is het standpunt dat de schrijver in het betoog verdedigt. Het staat meestal aan het einde van de inleiding.",
      },
      {
        id: "bt-2",
        niveau: "toepassing",
        vraag: "Welk standpunt is het meest geschikt voor een betoog?",
        opties: [
          "Sociale media heeft zowel voordelen als nadelen voor jongeren.",
          "In dit betoog ga ik sociale media bespreken.",
          "Scholen moeten TikTok tijdens schooltijd verbieden.",
          "Sociale media is een onderdeel van ons dagelijks leven.",
        ],
        antwoord: 2,
        uitleg: "Een goed standpunt is verdedigbaar en concreet. 'Scholen moeten TikTok verbieden' is een duidelijk standpunt waar mensen het mee oneens kunnen zijn.",
      },
      {
        id: "bt-3",
        niveau: "inzicht",
        vraag: "Een leerling schrijft: 'Tegenstanders zeggen dat huiswerk nuttig is. Dit is echter onjuist.' Wat ontbreekt er aan deze weerlegging?",
        opties: [
          "De leerling moet beginnen met een signaalwoord",
          "De weerlegging mist een onderbouwing waarom het onjuist is",
          "De leerling mag geen tegenstanders noemen",
          "De weerlegging staat op de verkeerde plek",
        ],
        antwoord: 1,
        uitleg: "Een weerlegging is alleen overtuigend als je uitlegt waarom het tegenargument niet klopt. Alleen zeggen 'dit is onjuist' is niet voldoende.",
      },
    ],
  },
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
- Voldoende (één voorbeeld is zelden genoeg)

### Tip voor het examen

Bij de vraag 'welk soort argument is dit?' zoek je naar de basis van het argument: is het een feit, een expert, een voorbeeld of een vergelijking?`,
    youtubeId: "dQw4w9WgXcQ",
    vragen: [
      {
        id: "sa-1",
        niveau: "reproductie",
        vraag: "Welk soort argument is: 'Volgens neuroloog Peters zorgt multitasken voor slechtere concentratie'?",
        opties: ["Feitargument", "Deskundigenargument", "Voorbeeldargument", "Analogieargument"],
        antwoord: 1,
        uitleg: "Een deskundige (neuroloog Peters) wordt aangehaald om het standpunt te onderbouwen. Dat is een deskundigenargument.",
      },
      {
        id: "sa-2",
        niveau: "toepassing",
        vraag: "Waarom is een analogieargument niet altijd overtuigend?",
        opties: [
          "Omdat analogieën altijd onjuist zijn",
          "Omdat de vergeleken situaties niet altijd vergelijkbaar zijn",
          "Omdat analogieën geen feiten bevatten",
          "Omdat analogieën alleen werken in mondelinge discussies",
        ],
        antwoord: 1,
        uitleg: "Een analogie is alleen sterk als de twee situaties écht vergelijkbaar zijn. Zijn er grote verschillen, dan gaat de vergelijking niet op.",
      },
    ],
  },
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

**Ik-perspectief (intern)**: de verteller is een personage in het verhaal. De lezer ziet alles door de ogen van dit personage.
Functie: creëert betrokkenheid, maar geeft een beperkt en subjectief beeld.

**Hij/zij-perspectief (extern)**: de verteller staat buiten het verhaal.
- *Alwetend*: de verteller weet alles, ook de gedachten van personages.
- *Beperkt*: de verteller volgt één personage maar weet niet alles.

**Functie van perspectief**: het perspectief bepaalt wat de lezer weet en hoe sympathiek een personage overkomt.`,
    youtubeId: "dQw4w9WgXcQ",
    vragen: [
      {
        id: "la-1",
        niveau: "reproductie",
        vraag: "Wat is het verschil tussen onderwerp en thema?",
        opties: [
          "Er is geen verschil, het zijn synoniemen",
          "Het onderwerp is concreet (waar gaat het over), het thema is de abstracte boodschap",
          "Het thema is concreet, het onderwerp is abstract",
          "Het onderwerp gaat over personages, het thema over de plot",
        ],
        antwoord: 1,
        uitleg: "Het onderwerp is het concrete gegeven (bijv. een oorlog), het thema is de diepere boodschap die de auteur overbrengt (bijv. over menselijke wreedheid).",
      },
      {
        id: "la-2",
        niveau: "toepassing",
        vraag: "Een roman is geschreven vanuit het perspectief van een moordenaar die zichzelf onschuldig acht. Wat is een mogelijke functie van dit perspectief?",
        opties: [
          "De lezer krijgt een objectief beeld van de gebeurtenissen",
          "De lezer wordt uitgenodigd kritisch na te denken over schuld en zelfbedrog",
          "De spanning wordt verminderd omdat de lezer alles weet",
          "Het maakt de roman toegankelijker voor jongere lezers",
        ],
        antwoord: 1,
        uitleg: "Door het perspectief van de moordenaar te kiezen, dwingt de auteur de lezer om zelf te oordelen. De onbetrouwbare verteller is een klassiek literair middel om thema's als schuld en zelfbedrog te verkennen.",
      },
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

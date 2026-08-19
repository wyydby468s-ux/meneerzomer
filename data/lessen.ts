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

  {
    slug: "leesvaardigheid-vwo-analyse",
    titel: "Tekstanalyse op VWO-niveau",
    ondertitel: "Argumentatiestructuur, impliciete boodschappen en perspectief",
    niveau: "vwo",
    vaardigheid: "Leesvaardigheid",
    emoji: "🔬",
    leerdoelen: [
      "Je kunt de argumentatiestructuur van een complexe tekst in kaart brengen",
      "Je kunt impliciete boodschappen en veronderstellingen herkennen",
      "Je kunt het perspectief van de schrijver bepalen en de invloed ervan op de tekst analyseren",
    ],
    uitleg: `## Tekstanalyse op VWO-niveau

Op VWO moet je ook analyseren hoe de tekst werkt en waarom de schrijver bepaalde keuzes heeft gemaakt.

### Argumentatiestructuur

**Enkelvoudige argumentatie**: een argument ondersteunt de conclusie.
**Nevenschikkende argumentatie**: meerdere argumenten ondersteunen samen de conclusie.
**Onderschikkende argumentatie**: een argument wordt zelf weer onderbouwd door een sub-argument.

### Impliciete veronderstellingen

Schrijvers gaan uit van aannames die ze niet noemen. Voorbeeld: 'Als je slim bent, ga je studeren.' Impliciete veronderstelling: studeren is iets wat slimme mensen doen.

### Perspectief herkennen

Let op woordkeuze (bijv. 'bezettingsleger' vs 'vredesmacht'), selectie van feiten en de toon van de tekst.

### Retorische middelen

Retorische vraag, herhaling, contrast en opsomming zijn middelen om de lezer te beinvloeden.`,
    vragen: [
      { id: "vwo-lv-1", niveau: "reproductie", vraag: "Wat is nevenschikkende argumentatie?", opties: ["Een argument dat de conclusie ondersteunt", "Meerdere argumenten die samen de conclusie ondersteunen", "Een argument onderbouwd door een sub-argument", "Een conclusie die door een voorbeeld wordt geïllustreerd"], antwoord: 1, uitleg: "Bij nevenschikkende argumentatie werken meerdere argumenten samen. Elk argument is op zichzelf onvoldoende." },
      { id: "vwo-lv-2", niveau: "reproductie", vraag: "Wat is een impliciete veronderstelling?", opties: ["Een expliciet uitgesproken conclusie", "Een aanname die de schrijver niet noemt maar wel als vanzelfsprekend beschouwt", "Een deskundigenargument", "Een retorisch middel"], antwoord: 1, uitleg: "Een impliciete veronderstelling is iets wat de schrijver aanneemt zonder het te zeggen. Het ligt verborgen achter het argument en is vaak aanvechtbaar." },
      { id: "vwo-lv-3", niveau: "reproductie", vraag: "Wat is een retorische vraag?", opties: ["Een vraag waarop de lezer moet antwoorden", "Een vraag gesteld zonder dat een antwoord wordt verwacht", "Een vraag aan het begin van een betoog", "Een vraag die de tekststructuur aangeeft"], antwoord: 1, uitleg: "Een retorische vraag verwacht geen antwoord. Het antwoord is al verondersteld of voor de hand liggend." },
      { id: "vwo-lv-4", niveau: "toepassing", vraag: "Een schrijver gebruikt 'bezettingsleger' in plaats van 'vredesmacht'. Wat onthult dit?", opties: ["Niets, beide termen betekenen hetzelfde", "Het perspectief van de schrijver: hij beoordeelt de aanwezigheid van het leger negatief", "De schrijver maakt een feitelijke fout", "De schrijver wil neutraal blijven"], antwoord: 1, uitleg: "Woordkeuze onthult perspectief. 'Bezettingsleger' heeft een negatieve connotatie en suggereert dat de schrijver de aanwezigheid als onrechtmatig beschouwt." },
      { id: "vwo-lv-5", niveau: "toepassing", vraag: "'Jongeren moeten meer bewegen, want sport is goed voor de gezondheid.' Welke impliciete veronderstelling zit hierin?", opties: ["Jongeren bewegen te weinig", "Sport is de enige manier om te bewegen", "Gezondheid is het enige dat telt", "Jongeren willen niet bewegen"], antwoord: 0, uitleg: "Het argument veronderstelt impliciet dat jongeren te weinig bewegen. Zonder deze aanname is er geen reden om hen aan te sporen." },
      { id: "vwo-lv-6", niveau: "toepassing", vraag: "Een tekst heeft de structuur: 'A omdat B, en B omdat C'. Welk type argumentatie is dit?", opties: ["Nevenschikkende argumentatie", "Onderschikkende argumentatie", "Enkelvoudige argumentatie", "Cirkelredenering"], antwoord: 1, uitleg: "Onderschikkende argumentatie: A wordt onderbouwd door B, B wordt onderbouwd door C. Er is een hiërarchie van argumenten." },
      { id: "vwo-lv-7", niveau: "inzicht", vraag: "Waarom is het herkennen van impliciete veronderstellingen belangrijk?", opties: ["Impliciete veronderstellingen zijn altijd onjuist", "Een argument is alleen zo sterk als zijn veronderstellingen: klopt een veronderstelling niet, dan ondermijnt dat het argument", "Je moet bij het examen altijd het aantal veronderstellingen noemen", "Impliciete veronderstellingen bewijzen dat de schrijver iets verbergt"], antwoord: 1, uitleg: "Als de veronderstellingen onder een argument niet kloppen, is het argument zwakker dan het lijkt. Kritisch lezen betekent ook de veronderstellingen onderzoeken." },
      { id: "vwo-lv-8", niveau: "inzicht", vraag: "Een opinietekst noemt alleen studies die het standpunt ondersteunen. Welk probleem heeft deze tekst?", opties: ["De tekst is te lang", "De tekst is eenzijdig: selectief citeren geeft een vertekend beeld", "De tekst gebruikt te veel deskundigenargumenten", "De tekst heeft geen conclusie"], antwoord: 1, uitleg: "Selectief citeren is een vorm van vertekening. De schrijver wekt de indruk dat er consensus bestaat terwijl die er misschien niet is." },
    ],
  },
  {
    slug: "leesvaardigheid-vwo-samenvatten",
    titel: "Samenvatten en parafraseren op VWO-niveau",
    ondertitel: "Hoofd- en bijzaken onderscheiden in complexe teksten",
    niveau: "vwo",
    vaardigheid: "Leesvaardigheid",
    emoji: "📝",
    leerdoelen: [
      "Je kunt de hoofdgedachte van een complexe tekst formuleren",
      "Je kunt hoofd- en bijzaken van elkaar onderscheiden",
      "Je kunt een tekst nauwkeurig parafraseren zonder de betekenis te verliezen",
    ],
    uitleg: `## Samenvatten en parafraseren op VWO-niveau

### Hoofdgedachte formuleren

De hoofdgedachte is de centrale boodschap van de hele tekst, geformuleerd als uitspraak.
- Fout: "De tekst gaat over klimaatverandering"
- Goed: "De schrijver betoogt dat individuele maatregelen onvoldoende zijn om klimaatverandering tegen te gaan"

### Hoofd- en bijzaken

Hoofdzaken dragen direct bij aan de centrale boodschap. Bijzaken zijn voorbeelden, uitwerkingen en illustraties. De hoofdzaak staat vaak in de eerste of laatste zin van een alinea.

### Nauwkeurig parafraseren

Valkuilen:
- Te veel weglaten: de betekenis verandert
- Te dicht bij het origineel blijven: dat is geen parafrase
- Eigen interpretatie toevoegen: dat is meer dan parafraseren

### Stappenplan

1. Lees de tekst globaal
2. Bepaal de hoofdgedachte
3. Noteer de kernzin per alinea
4. Schrijf in eigen woorden
5. Controleer op volledigheid`,
    vragen: [
      { id: "vwo-sv-1", niveau: "reproductie", vraag: "Wat is het verschil tussen een hoofdzaak en een bijzaak?", opties: ["Hoofdzaken staan altijd in de eerste alinea", "Hoofdzaken dragen direct bij aan de centrale boodschap, bijzaken zijn voorbeelden of uitwerkingen", "Hoofdzaken zijn feiten, bijzaken zijn meningen", "Hoofdzaken zijn langer dan bijzaken"], antwoord: 1, uitleg: "Een hoofdzaak is essentieel voor de centrale boodschap. Bijzaken zijn ondersteunend en kun je weglaten zonder de kern te verliezen." },
      { id: "vwo-sv-2", niveau: "reproductie", vraag: "Wat is de hoofdgedachte van een tekst?", opties: ["Het onderwerp van de tekst", "De centrale boodschap geformuleerd als uitspraak", "De eerste zin van de inleiding", "Een opsomming van alle argumenten"], antwoord: 1, uitleg: "De hoofdgedachte is meer dan het onderwerp. Het is een volledige uitspraak die de kern van de tekst weergeeft." },
      { id: "vwo-sv-3", niveau: "toepassing", vraag: "'De minister zei dat het beleid succesvol was' wordt geparafraseerd als 'De minister beweerde dat zijn plannen werkten'. Wat verandert er?", opties: ["Niets, het is een correcte parafrase", "'Beweerde' suggereert twijfel, terwijl 'zei' neutraal is", "'Plannen' is specifieker dan 'beleid'", "De parafrase is te kort"], antwoord: 1, uitleg: "'Zeggen' is neutraal, 'beweren' impliceert dat de spreker iets stelt dat misschien niet waar is. Dit is een subtiele maar belangrijke betekenisverschuiving." },
      { id: "vwo-sv-4", niveau: "toepassing", vraag: "Welke formulering is de beste hoofdgedachte voor een tekst over nadelen van schermtijd bij kinderen?", opties: ["Schermtijd bij kinderen", "Kinderen kijken te veel naar schermen", "Overmatige schermtijd heeft aantoonbare negatieve effecten op de cognitieve en sociale ontwikkeling van jonge kinderen", "In dit artikel worden de nadelen van schermtijd besproken"], antwoord: 2, uitleg: "Een goede hoofdgedachte is concreet en geformuleerd als uitspraak. Optie C doet dit: het is specifiek en bevat de centrale claim." },
      { id: "vwo-sv-5", niveau: "inzicht", vraag: "Waarom mag je bij samenvatten geen eigen interpretatie toevoegen?", opties: ["Eigen interpretaties zijn altijd onjuist", "Een samenvatting geeft de tekst weer zoals de schrijver het bedoelde, niet zoals jij het interpreteert", "Eigen interpretaties zijn te lang", "De examinator denkt dan dat je de tekst niet hebt begrepen"], antwoord: 1, uitleg: "Een samenvatting is een getrouwe weergave van het origineel. Eigen interpretaties toevoegen betekent dat je je eigen versie geeft in plaats van die van de schrijver." },
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
    uitleg: `## Literatuuranalyse: alle begrippen op een rij

Op deze pagina leer je hoe je een literair boek analyseert. Je gaat een boek niet alleen lezen, maar ook begrijpen: hoe zit het in elkaar en wat wil de schrijver eigenlijk zeggen?

Belangrijk om te onthouden: bij literatuur draait alles om **samenhang**. De begrippen staan niet los van elkaar. Het perspectief hangt samen met de personages, de ruimte versterkt het thema, de symboliek wijst je naar de idee. Zie het thema als een kapstok waar je alle andere begrippen aan ophangt.

### Twee lagen in een verhaal

Als je een boek leest voor je plezier, concentreer je je op de eerste laag: het verhaal zelf. Bij analyseren kijk je naar de tweede laag: hoe is het verhaal opgebouwd en wat betekent het?

Een literair boek is iets anders dan lectuur (pulp). Lectuur heeft eenvoudige zinnen, voorspelbare personages en een duidelijke afloop. Literatuur stelt vragen, speelt met tijd en perspectief, en laat je nadenken.

**Mag je internet en AI gebruiken?** Je mag secundaire literatuur gebruiken: literatuur over literatuur, geschreven door experts. Internet is verleidelijk, maar daar staan vooral boekverslagen van andere scholieren. Gebruik je een bron, vermeld die dan altijd.

---

### 1. Nauwkeurige titelbeschrijving

De titelbeschrijving is het visitekaartje van je verslag en moet exact kloppen. Zet de gegevens in deze volgorde: achternaam en voornaam van de schrijver, titel, eventuele ondertitel, plaats van uitgave, jaar van de door jou gelezen druk, en het jaar van de eerste druk tussen haakjes.

---

### 2. Motto

Een motto is een kort citaat dat voorin een boek staat. De schrijver kiest het omdat de gedachte erin past bij het thema en de idee. Neem het motto over in je verslag en verklaar wat het met het boek te maken heeft.

---

### 3. Opdracht

Soms staat voorin een boek een opdracht: het boek is dan gericht aan iemand. Zo'n opdracht zegt pas iets als je weet wie ermee bedoeld wordt. Noteer de opdracht en probeer te achterhalen wie bedoeld wordt.

---

### 4. Korte samenvatting

De samenvatting is een geheugensteuntje. Houd het bij de hoofdlijnen: alleen wat inzicht geeft in het thema en de idee. Schrijf de samenvatting nooit terwijl je nog leest, maar achteraf.

---

### 5. Thema

Het thema is waar het boek in de kern over gaat, algemeen verwoord. Niet: "de belevenissen van een jongetje in de oorlog" maar: "oorlog". Naast het hoofdthema kan een boek subthema's hebben. Leg altijd uit waarom je voor een bepaald thema kiest.

---

### 6. Idee

De idee is wat de schrijver over dat thema te zeggen heeft. In modernere literatuur stelt de schrijver vaak juist vragen, zonder een helder antwoord te geven.

Voorbeeld: thema = "pesten"; idee = "pesten kan desastreuze gevolgen hebben". Het thema is algemeen; de idee is wat de schrijver erover wil overbrengen.

---

### 7. Titelverklaring

De titel zegt vaak iets over het thema. Zoek altijd verder dan de meest voor de hand liggende verklaring: een titel heeft regelmatig meerdere betekenissen.

Voorbeeld: De titel *De val* van Marga Minco verwijst zowel naar een letterlijke val als naar de hinderlaag waarin haar gezin loopt door een verrader. Een woord, meerdere lagen, allemaal verbonden met het thema.

---

### 8. Personages

Personages brengen een verhaal tot leven. De hoofdpersoon is de belangrijkste figuur. Let ook op de relaties tussen personages: wie is familie, vriend, tegenstander of helper?

**Round en flat characters**
- **Round character (karakter):** een uitgewerkt personage dat een ontwikkeling doormaakt. De meeste hoofdpersonen zijn round characters.
- **Flat character (type):** een personage dat je alleen oppervlakkig leert kennen. De meeste bijpersonen zijn flat characters.

Je leert een personage kennen via vier kanalen: het **uiterlijk**, het **innerlijk**, het **gedrag** en de **uitspraken**. Let ook op een eventuele speaking name. Een hoofdpersoon die je niet uitnodigt tot identificatie heet een **antiheld**.

Voorbeeld: In *Wees onzichtbaar* van Murat Isik is Metin een round character die zich ontwikkelt van een bang jongetje tot iemand die zijn eigen weg vindt.

---

### 9. (Tijds)opbouw

**Spanningsopbouw**
- **Vooruitwijzingen:** de schrijver hint naar wat komen gaat.
- **Informatie achterhouden:** de lezer wordt op het verkeerde been gezet.
- **Ab ovo:** het verhaal begint rustig met veel achtergrond.
- **In medias res:** het verhaal begint meteen middenin de actie.

Het einde: bij een **gesloten einde** is het probleem afgerond. Bij een **open einde** blijft onzeker hoe het verdergaat.

**Spelen met de tijd**
- **Chronologisch:** gebeurtenissen in volgorde van tijd.
- **Niet-chronologisch:** de volgorde wordt doorbroken.
- **Flashback:** teruggang naar een eerdere gebeurtenis.
- **Flashforward:** vooruitblik naar iets wat nog gaat gebeuren.
- **Tijdverdichting (versnelling):** veel tijd in weinig tekst samengevat.
- **Dehnung (vertraging):** een korte gebeurtenis zeer uitvoerig beschreven.

---

### 10. Verteltijd en vertelde tijd

- **Verteltijd:** de tijd die je als lezer nodig hebt om het verhaal te lezen, uitgedrukt in pagina's.
- **Vertelde tijd:** de tijd die verstrijkt binnen de wereld van het verhaal (minuten, jaren).

De verhouding tussen beide zegt iets. Een dik boek dat een dag beschrijft zit vol detail. Een dun boek dat een mensenleven omspant maakt veel gebruik van versnelling.

---

### 11. Perspectief

Het perspectief bepaalt vanuit wie je het verhaal binnenkijkt en dus wat je als lezer wel en niet weet.

- **Alwetende (auctoriale) verteller:** staat buiten het verhaal en weet alles, ook de gedachten van alle personages. Komt vooral voor in oudere boeken.
- **Personaal perspectief:** je kruipt in de huid van een personage en ziet alleen wat hij ziet.
- **Ik-perspectief:** een ik-figuur vertelt wat hij meemaakt. Let op het verschil tussen het *belevende ik* en het *vertellende ik*.

Veel moderne schrijvers wisselen van perspectief. Een verteller kan ook **onbetrouwbaar** zijn: hij vertelt iets dat niet klopt, bewust of onbewust.

---

### 12. Ruimte

Een goed verhaal speelt zelden zomaar ergens. Functies van de ruimte:
- **Sfeerscheppend:** de omgeving roept een sfeer op.
- **Symbolisch:** de ruimte staat voor het gevoel van een personage.
- **Overeenkomst of contrast:** past de ruimte bij de handeling of botst hij ermee?

Voorbeeld: In *Nooit meer slapen* van Hermans versterkt het lege, onherbergzame noorden van Noorwegen de eenzaamheid van de hoofdpersoon.

---

### 13. Symboliek en motieven

Een **symbool** is iets uit het verhaal dat een tweede, diepere betekenis heeft. Je herkent het doordat het meerdere keren terugkomt. Let op herhalingen van kleuren, voorwerpen, het weer of een bepaalde plek.

Voorbeeld: In *De aanslag* van Harry Mulisch keren dobbelstenen terug als symbool voor het toeval.

**Motieven:**
- **Leidmotief:** een concreet, tastbaar element dat steeds terugkeert en een symbolische functie heeft.
- **Abstract motief:** een terugkerend, niet-tastbaar gegeven zoals liefde, schuld of toeval.

---

### 14. Eigen mening

Je mening moet altijd onderbouwd zijn met argumenten. Werk vier onderdelen uit:
- **Originaliteit:** laat de schrijver je kennismaken met nieuwe ideeen of een nieuwe leefwereld?
- **Relevantie:** is het thema van belang voor de mens?
- **Stijl:** zinsbouw, woordkeus, beeldspraak, gebruik van dialoog.
- **Eigen oordeel:** je mening over het geheel, onderbouwd met literaire begrippen.

---

### 15. Beoordelingswoorden

Gebruik deze woordparen om je mening preciezer te formuleren: abstract/concreet, makkelijk/moeilijk, persoonlijk/onpersoonlijk, vaag/helder, rationeel/emotioneel, toegankelijk/ontoegankelijk, diepgravend/lichtvoetig, boeiend/saai, realistisch/poetisch, traditioneel/vernieuwend, origineel/onorigineel, ontroerend/afstandelijk.

---

### Samenhang: het geheim van een goede analyse

Een sterke analyse legt verbanden:
- Een ik-perspectief maakt dat je je sterk inleeft in de hoofdpersoon.
- Een sombere ruimte versterkt een thema als eenzaamheid.
- Een niet-chronologische opbouw kan de idee onderstrepen dat het verleden je blijft achtervolgen.

Hoe meer verbanden je ziet en kunt uitleggen, hoe hoger je cijfer.`,
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
  {
    slug: "literatuur-renaissance-wilhelmus",
    titel: "Renaissance en het Wilhelmus",
    ondertitel: "Historische context, mensbeeld en het oudste volkslied ter wereld",
    niveau: "vwo",
    vaardigheid: "Literatuur",
    emoji: "🕰️",
    leerdoelen: [
      "Je kunt uitleggen wat de Renaissance is en hoe het mensbeeld verandert ten opzichte van de Middeleeuwen",
      "Je kent de belangrijkste historische gebeurtenissen van de Nederlandse Renaissance en de vijf grote schrijvers",
      "Je kunt de opbouw en functie van het Wilhelmus uitleggen, inclusief het acrostichon",
      "Je herkent de opbouw van een sonnet aan de hand van een voorbeeld van Huygens",
    ],
    uitleg: `## Van Middeleeuwen naar Renaissance

Voordat je bij de Renaissance uitkomt, is het goed om te weten waar de Nederlandse literatuur vandaan komt. In de Middeleeuwen (500-1500) is Nederlands vooral spreektaal. Verhalen gaan van mond tot mond: dit heet de orale traditie. Dat er op rijm werd verteld, hielp vertellers om de tekst te onthouden.

De oudst bekende bewaarde Nederlandse zin is: "Hebban olla vogala nestas hagunnan hinase hic anda thu, wat unbidan we nu?" Vrij vertaald: "Alle vogels zijn al aan hun nest begonnen, behalve ik en jij, waar wachten we nog op?"

In de late Middeleeuwen ontstaan rederijkerskamers: verenigingen van literatuurliefhebbers die maandelijks bijeenkwamen en met elkaar wedijverden in dichtkunst. Rederijkers speelden ook een rol bij stedelijke feesten en propaganda voor hun stad.

### Een nieuw tijdperk

Rond 1500 begint in Italie een nieuwe periode: de Renaissance, letterlijk "wedergeboorte". De term verwijst naar de herleving van de Griekse en Romeinse oudheid. Klassieke dichters als Homerus, Vergilius, Ovidius en Horatius worden na meer dan vijftien eeuwen opnieuw een inspiratiebron.

Het middeleeuwse mensbeeld, waarin de mens vooral gericht is op God en het leven na de dood, verschuift naar een mensbeeld waarin de mens en het leven op aarde centraal staan. Dit noem je het antropocentrische wereldbeeld. De Renaissance-mens wil de wereld zelf ontdekken en leeft in het hier en nu, zonder zich alleen te laten voorschrijven door de kerk.

Een belangrijk ideaal uit deze tijd is de homo universalis: de gedachte dat een mens een uniek individu is, net als in de klassieke oudheid, en zich op alle gebieden zou moeten kunnen ontwikkelen.

### De Hervorming

Naast de herleving van de klassieke oudheid speelt de Hervorming een grote rol. Deze ontstaat uit onvrede over misstanden in de rooms-katholieke kerk. Burgers willen ruimte voor eigen geloofsinzichten en kerkdiensten in de volkstaal in plaats van het Latijn.

Maarten Luther verzet zich in 1517 met zijn stellingen tegen misstanden zoals de aflaathandel. Johannes Calvijn verdedigt daarna de gedachte van predestinatie: het idee dat het eeuwig heil afhangt van goddelijke uitverkiezing, niet van eigen daden. Het Calvinisme, met waarden als hard werken, ijver en spaarzaamheid, krijgt vanaf 1560 veel invloed in de Nederlanden.

### De Nederlanden tussen 1517 en 1700

Een aantal jaartallen helpt je de periode te plaatsen:

- 1517: Luthers stellingen, het begin van de Hervorming
- 1566: de Beeldenstorm
- 1568-1648: de Tachtigjarige Oorlog
- 1588: de Republiek der Verenigde Nederlanden
- 1637: de Statenbijbel
- rond 1700: het ontstaan van een standaardtaal (ABN)

Filips II van Spanje probeert de zelfstandigheid van de Nederlandse gewesten in te perken en dwingt het katholieke geloof op. Dit leidt tot verzet, de Beeldenstorm en uiteindelijk tot de onafhankelijke Republiek. Binnen die Republiek bestaat een spanningsveld tussen de raadspensionarissen, die de gewestelijke zelfstandigheid verdedigen, en de stadhouders, die een sterker centraal gezag willen.

Schrijvers veranderen in deze tijd van rol. Vanaf 1550 tonen velen zich actief betrokken bij de politiek en versterken ze met propagandaliteratuur de positie van Willem van Oranje. Politiek en literatuur zijn in de zestiende en zeventiende eeuw vaak nauw met elkaar verweven.

### De vijf grote schrijvers

Vijf schrijvers vertegenwoordigen de Nederlandse Renaissance-literatuur: Gerbrand Adriaensz. Bredero, Pieter Cornelisz. Hooft, Constantijn Huygens, Joost van den Vondel en Jacob Cats.

### Het sonnet

Een populaire dichtvorm uit deze periode is het sonnet: een lyrisch gedicht met een vast rijmschema (ABBA ABBA CDD CDC) en een vaste opbouw van veertien regels. Het gedicht bestaat uit twee kwatrijnen (samen het octaaf) en twee terzetten (samen het sextet). Tussen het octaaf en het sextet zit vaak een volta: een wending in het gedicht, waarbij de gedachte of stemming omslaat.

Bekijk als voorbeeld dit sonnet van Constantijn Huygens, geschreven na de dood van zijn vrouw Sterre:

Cupio Dissolvi. Op de dood van Sterre

Of droom ik, en is 't nacht, of is mijn Ster verdwenen? (a)
Ik waak, en 't is hoog dag, en zie mijn Sterre niet. (b)
O hemelen, die mij haar aangezicht verbiedt, (b)
Spreek mensen-taal en zeg, waar is mijn Sterre henen? (a)

De hemel slaat geluid, ik hoor hem door mijn stenen, (a)
En zegt, mijn Sterre staat in 't heilige gebied, (b)
Waar zij de Godheid, waar de Godheid haar beziet, (b)
En, voegt het lachen daar, belacht mijn ijdel wenen. (a)

Nu, dood, nu snik, meteen verschenen en voorbij, (c)
Nu, doorgang van een steen, van een gesteen, ten leven, (d)
Dun schutsel, sta nabij, 'k zal 't u te dank vergeven; (d)

Kom dood, en maak mij korts van deze koortsen vrij. (c)
'k Verlang in 't eeuwig licht te zamen te zien zweven (d)
Mijn heil, mijn lief, mijn lijf, mijn god, mijn Ster en mij. (c)

In de eerste twee kwatrijnen (het octaaf) klaagt de dichter dat hij zijn overleden vrouw niet meer kan bereiken. Bij de terzetten (het sextet) verschuift de toon: de klacht wordt een verlangen naar de dood, zodat hij bij haar kan zijn. Die omslag van klacht naar verlangen is de volta van dit gedicht.

### Het Wilhelmus

Het Wilhelmus ontstaat rond 1570, tijdens de eerste jaren van de opstand tegen Spanje. Het lied is geschreven op de melodie van een Frans lied en bestaat uit vijftien coupletten. De eerste letters van elk couplet vormen samen de naam WILLEM VAN NASSOV: dit heet een acrostichon.

Het lied is geschreven vanuit het perspectief van Willem van Oranje zelf, die zich verantwoordt tegenover het volk en tegelijk trouw blijft zweren aan de koning van Spanje. Deze schijnbare tegenstelling verklaar je vanuit de tijd waarin het lied ontstond: openlijk verzet tegen de vorst was gevaarlijk, dus koos de dichter voor een voorzichtige, gelaagde toon.

Wil je oefenen of heb je een vraag? Gebruik de AI-tutor op deze pagina.`,
    vragen: [
      {
        id: "ren-1",
        niveau: "reproductie",
        vraag: "Wat betekent het woord Renaissance letterlijk?",
        opties: ["Verlichting", "Wedergeboorte", "Vernieuwing", "Hervorming"],
        antwoord: 1,
        uitleg: "Renaissance betekent letterlijk 'wedergeboorte' en verwijst naar de herleving van de Griekse en Romeinse oudheid.",
      },
      {
        id: "ren-2",
        niveau: "reproductie",
        vraag: "Wat is het antropocentrische wereldbeeld?",
        opties: [
          "Een wereldbeeld waarin God en het hiernamaals centraal staan",
          "Een wereldbeeld waarin de mens en het leven op aarde centraal staan",
          "Een wereldbeeld waarin de klassieke oudheid wordt afgewezen",
          "Een wereldbeeld waarin de kerk alle kennis bepaalt",
        ],
        antwoord: 1,
        uitleg: "Antropocentrisme betekent dat de mens en het aardse leven centraal staan, in plaats van God en het leven na de dood zoals in de Middeleeuwen.",
      },
      {
        id: "ren-3",
        niveau: "reproductie",
        vraag: "Wie waren de twee belangrijkste voormannen van de Hervorming die in de les worden genoemd?",
        opties: ["Erasmus en Vondel", "Luther en Calvijn", "Willem van Oranje en Filips II", "Bredero en Hooft"],
        antwoord: 1,
        uitleg: "Maarten Luther verzette zich met zijn stellingen (1517) tegen misstanden in de kerk, Johannes Calvijn verdedigde daarna de gedachte van predestinatie en werd de grondlegger van het Calvinisme.",
      },
      {
        id: "ren-4",
        niveau: "reproductie",
        vraag: "Welke naam vormen de eerste letters van de vijftien coupletten van het Wilhelmus?",
        opties: ["JOOST VAN VONDEL", "PRINS VAN ORANJE", "WILLEM VAN NASSOV", "KONING VAN HISPAENGIEN"],
        antwoord: 2,
        uitleg: "De eerste letters van elk couplet vormen samen de naam WILLEM VAN NASSOV. Dit heet een acrostichon.",
      },
      {
        id: "ren-5",
        niveau: "reproductie",
        vraag: "Uit welke twee delen bestaat een sonnet, en hoeveel regels heeft elk deel?",
        opties: [
          "Een kwatrijn van 8 regels en een terzet van 6 regels",
          "Een octaaf van 8 regels (2 kwatrijnen) en een sextet van 6 regels (2 terzetten)",
          "Twee terzetten van 7 regels elk",
          "Een inleiding van 4 regels en een slot van 10 regels",
        ],
        antwoord: 1,
        uitleg: "Een sonnet bestaat uit een octaaf van 8 regels (opgebouwd uit 2 kwatrijnen) en een sextet van 6 regels (opgebouwd uit 2 terzetten), samen 14 regels.",
      },
      {
        id: "ren-6",
        niveau: "toepassing",
        vraag: "In het Wilhelmus zweert Willem van Oranje trouw aan de koning van Spanje, terwijl hij tegelijk tegen hem strijdt. Hoe verklaar je deze schijnbare tegenstelling?",
        opties: [
          "Willem van Oranje was het echt oneens met zichzelf",
          "Openlijk verzet tegen de vorst was gevaarlijk, dus koos de dichter voor een voorzichtige, gelaagde toon",
          "Het Wilhelmus is per ongeluk verkeerd overgeleverd",
          "De tegenstelling was een grap van de dichter",
        ],
        antwoord: 1,
        uitleg: "In de tijd van het Wilhelmus was openlijk verzet tegen de vorst gevaarlijk. De gelaagde, voorzichtige toon van het lied past bij die politieke context.",
      },
      {
        id: "ren-7",
        niveau: "toepassing",
        vraag: "Wat is het verschil tussen het middeleeuwse mensbeeld en het Renaissance-mensbeeld?",
        opties: [
          "In de Middeleeuwen was de mens gericht op God en het hiernamaals, in de Renaissance op het leven op aarde en het hier en nu",
          "In de Middeleeuwen was er geen religie, in de Renaissance wel",
          "In de Renaissance verdween de belangstelling voor de klassieke oudheid juist",
          "Er is geen verschil, beide perioden hadden hetzelfde mensbeeld",
        ],
        antwoord: 0,
        uitleg: "Het middeleeuwse mensbeeld is theocentrisch (gericht op God), het Renaissance-mensbeeld is antropocentrisch (gericht op de mens en het aardse leven).",
      },
      {
        id: "ren-8",
        niveau: "toepassing",
        vraag: "In het sonnet van Huygens klaagt de dichter in het octaaf dat hij zijn overleden vrouw niet kan bereiken, en verlangt hij in het sextet naar de dood om bij haar te zijn. Hoe noem je deze omslag?",
        opties: ["Een acrostichon", "Een volta", "Een cesuur", "Een rederijkersvers"],
        antwoord: 1,
        uitleg: "De wending in toon of gedachte tussen het octaaf en het sextet van een sonnet heet de volta.",
      },
      {
        id: "ren-9",
        niveau: "inzicht",
        vraag: "Waarom is het passend dat schrijvers vanaf 1550 een politieke rol gaan spelen, in plaats van vooral religieuze of ridderlijke teksten te schrijven zoals in de Middeleeuwen?",
        opties: [
          "Omdat literatuur toen pas werd uitgevonden",
          "Omdat het antropocentrische wereldbeeld en de politieke strijd om de Nederlandse onafhankelijkheid schrijvers uitnodigden om zich met het aardse leven en de actualiteit bezig te houden, in plaats van uitsluitend met het hiernamaals",
          "Omdat de kerk dat verplicht stelde",
          "Omdat er geen andere onderwerpen meer waren",
        ],
        antwoord: 1,
        uitleg: "Het antropocentrische wereldbeeld van de Renaissance past bij een grotere betrokkenheid van schrijvers bij het aardse leven, inclusief de politiek. In combinatie met de strijd om de Nederlandse onafhankelijkheid verklaart dit waarom propagandaliteratuur voor Willem van Oranje in deze periode ontstaat.",
      },
      {
        id: "ren-10",
        niveau: "inzicht",
        vraag: "Waarom kun je het Wilhelmus zien als een typisch voorbeeld van hoe politiek en literatuur in de zestiende eeuw met elkaar verweven waren?",
        opties: [
          "Omdat het lied nergens over de politieke situatie gaat",
          "Omdat het lied een politiek standpunt (de opstand tegen Spanje) verpakt in een literaire vorm (acrostichon, perspectief van Willem van Oranje) om het volk te overtuigen zonder openlijk gevaar te lopen",
          "Omdat het Wilhelmus geen enkele literaire kenmerken heeft",
          "Omdat het lied pas honderd jaar later geschreven werd",
        ],
        antwoord: 1,
        uitleg: "Het Wilhelmus combineert een politieke boodschap (rechtvaardiging van het verzet tegen Filips II) met literaire middelen (het acrostichon, het perspectief van Willem van Oranje). Dit past bij de trend dat schrijvers vanaf 1550 literatuur inzetten voor politieke doeleinden.",
      },
    ],
  },
  {
    slug: "literatuur-gysbrecht-sinnebeelden",
    titel: "Gysbrecht van Aemstel en Sinne- en minnebeelden",
    ondertitel: "Vondels treurspel en het embleem van Jacob Cats",
    niveau: "vwo",
    vaardigheid: "Literatuur",
    emoji: "🎭",
    leerdoelen: [
      "Je kunt de ontstaansgeschiedenis en opbouw van Gysbrecht van Aemstel uitleggen",
      "Je herkent een alexandrijn en kunt de functie van de reien benoemen",
      "Je kunt de opbouw van een embleem (pictura, motto, subscriptio) toelichten",
      "Je weet wie Jacob Cats was en wat Sinne- en minnebeelden inhoudt",
    ],
    uitleg: `## Gysbrecht van Aemstel

Joost van den Vondel schrijft Gysbrecht van Aemstel in opdracht van de nieuwe Amsterdamse Schouwburg, die op 3 januari 1638 met dit stuk wordt geopend. Het treurspel speelt zich af tijdens de kerstnacht van het jaar 1300, wanneer de stad Amsterdam na een jaar belegering alsnog door verraad wordt ingenomen. Gijsbreght van Aemstel probeert zijn stad, zijn familie en de bisschop tevergeefs te redden.

### De versvorm: de alexandrijn

Het stuk is geschreven in alexandrijnen: versregels van twaalf lettergrepen met een vaste cesuur (rustpunt) na de zesde lettergreep. Deze strakke, statige versvorm past bij het plechtige karakter van een treurspel.

### De reien

Vondel gebruikt daarnaast reien: koorzangen die de handeling onderbreken en er commentaar op geven, net als in de klassieke Griekse tragedie. De reien staan los van de handeling zelf en verwoorden vaak het standpunt van het volk.

### Geschiedenis en universeel verhaal

Vondel baseert zijn verhaal los op de middeleeuwse geschiedenis van Amsterdam, maar de nadruk ligt niet op historische precisie. Vondel gebruikt de val van Amsterdam om een universeel verhaal te vertellen over trouw, verraad en vaderlandsliefde, met duidelijke verwijzingen naar de val van Troje.

## Sinne- en minnebeelden

Jacob Cats publiceert in 1618 een bundel liefdesemblemen onder de Latijnse titel Silenus Alcibiadis, sive Proteus. Vanaf 1627 verschijnt de bundel onder de bekendere Nederlandse titel Sinne- en minnebeelden.

### De opbouw van een embleem

Een embleem bestaat uit drie onderdelen die je altijd samen leest:

- Pictura: de afbeelding of prent
- Motto: een kort opschrift, vaak in het Latijn, dat de kern van de boodschap samenvat
- Subscriptio: het bijschrift dat de afbeelding en het motto uitlegt

Bij Cats krijgt elke pictura vaak drie subscriptio's: een amoureuze uitleg voor jonge geliefden, een maatschappelijke uitleg en een religieuze uitleg. Zo spreekt hetzelfde beeld verschillende lezers en levensfasen aan. Het woord "zinnebeeld" voor embleem is bedacht door Roemer Visscher.

Wil je oefenen of heb je een vraag? Gebruik de AI-tutor op deze pagina.`,
    vragen: [
      {
        id: "gys-1",
        niveau: "reproductie",
        vraag: "In welk jaar en bij welke gelegenheid ging Gysbrecht van Aemstel in premiere?",
        opties: [
          "1618, bij de opening van het Klarissenklooster",
          "1638, bij de opening van de nieuwe Amsterdamse Schouwburg",
          "1648, bij het einde van de Tachtigjarige Oorlog",
          "1700, bij de invoering van het ABN",
        ],
        antwoord: 1,
        uitleg: "Gysbrecht van Aemstel ging op 3 januari 1638 in premiere bij de opening van de nieuwe Amsterdamse Schouwburg.",
      },
      {
        id: "gys-2",
        niveau: "reproductie",
        vraag: "In welk jaar speelt het verhaal van de Gysbrecht zich af?",
        opties: ["1300", "1500", "1618", "1638"],
        antwoord: 0,
        uitleg: "Het verhaal speelt zich af in het jaar 1300, tijdens de kerstnacht waarin Amsterdam door verraad wordt ingenomen.",
      },
      {
        id: "gys-3",
        niveau: "reproductie",
        vraag: "Wat is een alexandrijn?",
        opties: [
          "Een versregel van twaalf lettergrepen met een vaste cesuur na de zesde lettergreep",
          "Een koorzang die de handeling onderbreekt",
          "Een gedicht met veertien regels",
          "Een acrostichon waarbij de eerste letters een naam vormen",
        ],
        antwoord: 0,
        uitleg: "Een alexandrijn is een versregel van twaalf lettergrepen met een vast rustpunt (cesuur) na de zesde lettergreep.",
      },
      {
        id: "gys-4",
        niveau: "reproductie",
        vraag: "Wat is de functie van de reien in Gysbrecht van Aemstel?",
        opties: [
          "Ze vertellen het hoofdverhaal vanuit het perspectief van Gijsbreght",
          "Ze onderbreken de handeling en geven er commentaar op, vaak vanuit het standpunt van het volk",
          "Ze vormen de titel van het stuk",
          "Ze bevatten de historische bronnen die Vondel gebruikte",
        ],
        antwoord: 1,
        uitleg: "De reien zijn koorzangen die los van de handeling staan en er commentaar op geven, net als in de klassieke Griekse tragedie.",
      },
      {
        id: "gys-5",
        niveau: "reproductie",
        vraag: "Uit welke drie onderdelen bestaat een embleem?",
        opties: [
          "Titel, inleiding en conclusie",
          "Pictura, motto en subscriptio",
          "Octaaf, sextet en volta",
          "These, argument en weerlegging",
        ],
        antwoord: 1,
        uitleg: "Een embleem bestaat uit de pictura (afbeelding), het motto (kort opschrift) en de subscriptio (verklarend bijschrift).",
      },
      {
        id: "gys-6",
        niveau: "toepassing",
        vraag: "Vondel baseert de Gysbrecht los op de middeleeuwse geschiedenis van Amsterdam, maar wijkt af van historische precisie. Waarom is dat geen probleem voor het stuk?",
        opties: [
          "Omdat Vondel de geschiedenis niet kende",
          "Omdat Vondel de val van Amsterdam gebruikt om een universeel verhaal te vertellen over trouw, verraad en vaderlandsliefde",
          "Omdat het publiek in 1638 geen interesse had in geschiedenis",
          "Omdat het stuk eigenlijk over Troje gaat en niet over Amsterdam",
        ],
        antwoord: 1,
        uitleg: "Vondel gebruikt de historische gebeurtenis als kapstok voor een universeel thema. Historische precisie is daarbij minder belangrijk dan de morele en emotionele lading van het verhaal.",
      },
      {
        id: "gys-7",
        niveau: "toepassing",
        vraag: "Waarom schreef Jacob Cats bij een pictura soms drie verschillende subscriptio's?",
        opties: [
          "Omdat hij niet kon kiezen welke uitleg het beste was",
          "Omdat hij daarmee hetzelfde beeld liet spreken tot verschillende lezers en levensfasen: amoureus, maatschappelijk en religieus",
          "Omdat de drukker per ongeluk drie versies afdrukte",
          "Omdat het motto anders niet paste bij de afbeelding",
        ],
        antwoord: 1,
        uitleg: "Door drie subscriptio's (amoureus, maatschappelijk, religieus) te geven bij dezelfde pictura, spreekt Cats verschillende lezers en levensfasen aan met hetzelfde beeld.",
      },
      {
        id: "gys-8",
        niveau: "toepassing",
        vraag: "De titel van Cats' bundel was oorspronkelijk Latijn (Silenus Alcibiadis, sive Proteus) en werd later vernederlandst tot Sinne- en minnebeelden. Wat zegt dit over de tijd waarin de bundel verscheen?",
        opties: [
          "Dat er in 1618 nog geen Nederlandse taal bestond",
          "Dat geleerde, klassieke titels en volkstalige titels naast elkaar bestonden, passend bij een tijd waarin de klassieke oudheid gewaardeerd werd maar de volkstaal ook aan belang won",
          "Dat het boek in 1627 helemaal herschreven werd",
          "Dat Cats spijt kreeg van zijn eerste titel"
        ],
        antwoord: 1,
        uitleg: "De verschuiving van een Latijnse naar een Nederlandse titel past bij de Renaissance, waarin klassieke geleerdheid gewaardeerd werd, maar waarin de volkstaal (mede door de Hervorming) ook steeds meer terrein won.",
      },
      {
        id: "gys-9",
        niveau: "inzicht",
        vraag: "Zowel de Gysbrecht als het Wilhelmus gebruiken een historische of politieke gebeurtenis als basis voor een literair werk. Wat is het belangrijkste verschil in hun functie?",
        opties: [
          "Er is geen verschil, beide teksten hebben precies dezelfde functie",
          "Het Wilhelmus heeft een directe politieke functie (rechtvaardiging van de opstand), terwijl de Gysbrecht een universeel thema (trouw, verraad, vaderlandsliefde) verkent via een historisch verhaal, geschreven voor een culturele gelegenheid",
          "De Gysbrecht is politiek, het Wilhelmus niet",
          "Beide teksten zijn puur religieus van aard"
        ],
        antwoord: 1,
        uitleg: "Het Wilhelmus is direct politiek: het rechtvaardigt de opstand tegen Spanje. De Gysbrecht is geschreven voor de opening van de Schouwburg en gebruikt geschiedenis als middel om een universeel thema te verkennen, niet om een actuele politieke boodschap te verkondigen.",
      },
      {
        id: "gys-10",
        niveau: "inzicht",
        vraag: "Waarom is het waardevol om bij het lezen van de Gysbrecht en Sinne- en minnebeelden steeds de vorm (alexandrijn, rei, embleemstructuur) te koppelen aan de inhoud?",
        opties: [
          "Omdat vorm en inhoud niets met elkaar te maken hebben",
          "Omdat de vaste vormen (zoals de alexandrijn of de driedeling van het embleem) een bewuste keuze van de auteur zijn die de boodschap versterken of ordenen, en die samenhang zichtbaar maakt hoe doordacht de tekst is opgebouwd",
          "Omdat je anders de toets niet haalt",
          "Omdat alleen de inhoud telt bij literatuuranalyse"
        ],
        antwoord: 1,
        uitleg: "Vorm en inhoud werken in deze teksten nauw samen: de statige alexandrijn past bij het plechtige treurspel, de driedeling van het embleem structureert de les die Cats wil overbrengen. Het herkennen van die samenhang is de kern van een sterke literaire analyse.",
      },
    ],
  },
  {
    slug: "schrijfvaardigheid-betoog-4vwo",
    titel: "Een betoog schrijven",
    ondertitel: "Structuur, argumentatie en formulering voor 4 VWO",
    niveau: "vwo",
    vaardigheid: "Schrijfvaardigheid",
    emoji: "✍️",
    leerdoelen: [
      "Je kent de structuur van een betoog en kunt die toepassen in een tekst van 400-500 woorden",
      "Je kunt drie argumentatietypen herkennen en zelf gebruiken",
      "Je kunt een tegenargument formuleren en effectief weerleggen",
    ],
    uitleg: `## Een betoog schrijven

Een betoog is een tekst waarmee je de lezer probeert te overtuigen van jouw standpunt. Je hebt een duidelijke mening, je onderbouwt die met argumenten en je houdt rekening met wie je publiek is. Het verschil met een beschouwing is dat je in een betoog nadrukkelijk partij kiest: je verdedigt een stelling.

### De structuur van een betoog

Een sterk betoog bestaat altijd uit drie delen: een inleiding, een kern en een slot.

**Inleiding**
Trek de aandacht van de lezer, presenteer je stelling en spreek je publiek aan. Doel: de lezer wil verder lezen en weet direct waar je voor staat.

**Kern: argumenten**
Minimaal drie argumenten, elk in een eigen alinea. Begin elke alinea met het argument, gevolgd door uitleg en een voorbeeld of bewijs. Doel: de lezer overtuigen van jouw standpunt.

**Kern: tegenargument en weerlegging**
Noem een bezwaar dat tegenstanders kunnen aanvoeren en leg uit waarom dat jouw stelling niet onderuithaalt. Doel: laten zien dat je de andere kant kent en toch bij jouw standpunt blijft.

**Slot**
Samenvatting van je argumenten, herhaling van je standpunt en een oproep aan de lezer. Doel: sterke indruk achterlaten en de lezer aanzetten tot nadenken of handelen.

### Drie argumentatietypen

Argumenten zijn de ruggengraat van je betoog. Er zijn drie veelgebruikte typen:

**Feitelijk argument**
Je gebruikt bewijsbare gegevens, cijfers of onderzoeksresultaten.
Voorbeeld: "Uit onderzoek van het CBS blijkt dat 60% van de jongeren dagelijks meer dan drie uur op sociale media zit."
Sterk als: de bron betrouwbaar en actueel is.

**Waardeoordeel**
Je baseert je argument op normen, waarden of morele opvattingen.
Voorbeeld: "Het is onverantwoord om kinderen al vroeg bloot te stellen aan de schadelijke kanten van sociale media."
Sterk als: de waarde die je aanroept breed gedeeld wordt.

**Oorzaak-gevolg**
Je legt een verband tussen een oorzaak en een gevolg.
Voorbeeld: "Doordat jongeren voortdurend hun leven vergelijken met anderen online, neemt het zelfvertrouwen af."
Sterk als: het verband aantoonbaar is en niet te simplistisch.

### De weerlegging

Een weerlegging maakt je betoog sterker, niet zwakker. Je laat zien dat je de discussie serieus neemt.

Structuur: *Tegenstanders stellen dat... Dit klopt echter niet, omdat...*

Zorg dat je de weerlegging echt onderbouwt. Alleen zeggen "dit klopt niet" is niet genoeg.

### Signaalwoorden

Gebruik signaalwoorden om je tekst samenhangend te maken:
- **Opsomming**: Ten eerste, ten tweede, bovendien, daarnaast
- **Oorzaak-gevolg**: doordat, daardoor, waardoor, dit leidt ertoe dat
- **Tegenstelling**: echter, toch, desondanks, hoewel
- **Conclusie**: kortom, al met al, concluderend

### Checklist voor je betoog

Controleer voor het inleveren:
- Heb je een pakkende inleiding met een heldere stelling?
- Zijn er drie argumenten, elk in een eigen alinea met uitleg en voorbeeld?
- Is er een tegenargument met een echte weerlegging?
- Sluit je slot aan bij de stelling en eindigt het met een oproep?
- Heb je signaalwoorden gebruikt?
- Spreek je het publiek consequent aan?
- Zit je tussen de 400 en 500 woorden?`,
    vragen: [
      {
        id: "bt4v-1",
        niveau: "reproductie",
        vraag: "Uit welke vier onderdelen bestaat een volledig betoog?",
        opties: [
          "Inleiding, kern, slot en samenvatting",
          "Inleiding, kern met argumenten, kern met tegenargument en weerlegging, en slot",
          "Stelling, argumenten, tegenargument en conclusie",
          "Opening, standpunt, bewijs en oproep",
        ],
        antwoord: 1,
        uitleg:
          "Een volledig betoog bestaat uit een inleiding (met stelling), een kern met minimaal drie argumenten, een tegenargument met weerlegging, en een slot met oproep.",
      },
      {
        id: "bt4v-2",
        niveau: "reproductie",
        vraag:
          "Welk argumentatietype gebruik je als je schrijft: 'Doordat jongeren hun leven constant vergelijken met anderen op sociale media, neemt hun zelfvertrouwen af'?",
        opties: [
          "Feitelijk argument",
          "Waardeoordeel",
          "Oorzaak-gevolgargument",
          "Analogieargument",
        ],
        antwoord: 2,
        uitleg:
          "Dit is een oorzaak-gevolgargument: de oorzaak (voortdurend vergelijken) leidt tot een gevolg (afname zelfvertrouwen). Er is een direct verband gelegd tussen oorzaak en gevolg.",
      },
      {
        id: "bt4v-3",
        niveau: "reproductie",
        vraag: "Wat is de functie van een weerlegging in een betoog?",
        opties: [
          "Je geeft toe dat de tegenstander gelijk heeft",
          "Je erkent een tegenargument en laat zien waarom het jouw stelling niet ondermijnt",
          "Je geeft een extra argument voor je eigen standpunt",
          "Je vat alle argumenten samen aan het einde",
        ],
        antwoord: 1,
        uitleg:
          "Een weerlegging laat zien dat je de andere kant kent en serieus neemt, maar dat die kant jouw stelling niet onderuithaalt. Dit maakt je betoog overtuigender, niet zwakker.",
      },
      {
        id: "bt4v-4",
        niveau: "reproductie",
        vraag:
          "Welk signaalwoord past bij een tegenstellend verband?",
        opties: ["Bovendien", "Ten eerste", "Echter", "Kortom"],
        antwoord: 2,
        uitleg:
          "'Echter' geeft een tegenstelling aan. 'Bovendien' en 'ten eerste' horen bij opsommingen, 'kortom' bij een conclusie.",
      },
      {
        id: "bt4v-5",
        niveau: "toepassing",
        vraag:
          "Welke stelling is het meest geschikt als basis voor een betoog van 4 VWO?",
        opties: [
          "Sociale media heeft zowel voor- als nadelen voor jongeren.",
          "Jongeren onder de 16 jaar mogen sociale media niet meer gebruiken.",
          "In dit betoog bespreek ik de invloed van sociale media.",
          "Sociale media bestaat al heel lang.",
        ],
        antwoord: 1,
        uitleg:
          "Een goede stelling is concreet en verdedigbaar: er zijn mensen die het ermee eens zijn en mensen die het er niet mee eens zijn. 'Jongeren onder de 16 jaar mogen sociale media niet meer gebruiken' voldoet aan beide eisen. De andere opties zijn te vaag, beschrijvend of geen echte stellingen.",
      },
      {
        id: "bt4v-6",
        niveau: "toepassing",
        vraag:
          "Een leerling schrijft: 'Tegenstanders beweren dat een verbod op sociale media de vrijheid van jongeren beperkt. Dit is echter niet juist.' Wat ontbreekt?",
        opties: [
          "Er ontbreekt een signaalwoord voor de tegenstelling",
          "Er ontbreekt een onderbouwing waarom het niet juist is",
          "Het tegenargument staat op de verkeerde plek in het betoog",
          "Er ontbreekt een opsomming van alle tegenargumenten",
        ],
        antwoord: 1,
        uitleg:
          "Een weerlegging is alleen overtuigend als je uitlegt waarom het tegenargument niet klopt. Alleen 'dit is echter niet juist' schrijven is onvoldoende: je moet beargumenteren waarom de tegenstander ongelijk heeft.",
      },
      {
        id: "bt4v-7",
        niveau: "toepassing",
        vraag:
          "Je schrijft een betoog voor de Tweede Kamer over het consumentenvuurwerkverbod. Welk argument is het sterkst?",
        opties: [
          "Veel mensen vinden vuurwerk leuk.",
          "Vuurwerk is gevaarlijk.",
          "Uit cijfers van de Nederlandse Brandwonden Stichting blijkt dat vuurwerk jaarlijks verantwoordelijk is voor meer dan duizend spoedeisende hulpbezoeken.",
          "In andere landen is vuurwerk ook verboden.",
        ],
        antwoord: 2,
        uitleg:
          "Het sterkste argument bevat een concrete, betrouwbare bron met specifieke cijfers. Dit is een feitelijk argument dat direct relevant is voor de stelling. De andere opties zijn te vaag, te algemeen of niet onderbouwd.",
      },
      {
        id: "bt4v-8",
        niveau: "toepassing",
        vraag:
          "Welke openingszin trekt het meest de aandacht van de lezer?",
        opties: [
          "In dit betoog ga ik schrijven over sociale media.",
          "Sociale media heeft voor- en nadelen.",
          "Elke dag scrollen miljoenen Nederlandse jongeren uren door een eindeloze stroom beelden van perfecte levens die ze zelf nooit zullen leiden.",
          "Sociale media is een onderwerp waar veel over te zeggen valt.",
        ],
        antwoord: 2,
        uitleg:
          "Een goede openingszin schetst direct een concreet beeld of stelt een prikkelende vraag. De derde optie doet dit: hij roept een herkenbaar beeld op en zet de lezer aan het denken. De andere opties zijn saai, vaag of zeggen inhoudelijk niets.",
      },
      {
        id: "bt4v-9",
        niveau: "inzicht",
        vraag:
          "Waarom is het slim om in een betoog een tegenargument te benoemen en te weerleggen, ook al ben je het er niet mee eens?",
        opties: [
          "Omdat de beoordelingscriteria dat vereisen",
          "Omdat je daarmee laat zien dat je de discussie kent en de tegenstander serieus neemt, wat je eigen positie sterker maakt",
          "Omdat het betoog anders te kort is",
          "Omdat de lezer anders niet weet dat je een mening hebt",
        ],
        antwoord: 1,
        uitleg:
          "Een weerlegging vergroot de geloofwaardigheid van de schrijver. Als je de tegenstander serieus neemt en toch laat zien waarom jouw standpunt sterker is, overtuig je de lezer effectiever dan wanneer je alleen je eigen argumenten geeft.",
      },
      {
        id: "bt4v-10",
        niveau: "inzicht",
        vraag:
          "Een leerling schrijft een betoog met drie feitelijke argumenten gebaseerd op statistieken, maar zonder waardeoordeel of oorzaak-gevolgargument. Is dit een probleem?",
        opties: [
          "Nee, feitelijke argumenten zijn altijd het sterkst",
          "Nee, zolang de bronnen betrouwbaar zijn is het prima",
          "Ja, want een betoog is overtuigender als je verschillende argumentatietypen combineert: feiten spreken het hoofd aan, waardeoordelen het gevoel",
          "Ja, want je mag geen statistieken gebruiken in een betoog",
        ],
        antwoord: 2,
        uitleg:
          "Een gevarieerde argumentatiestrategie is overtuigender. Feitelijke argumenten spreken de rede aan, waardeoordelen het gevoel en oorzaak-gevolgargumenten de logica. Door ze te combineren bereik je meer lezers en maak je een volledigere indruk.",
      },
    ],
  },
  {
    slug: "schrijfvaardigheid-essay-5vwo",
    titel: "Een essay schrijven",
    ondertitel: "Schrijvend denken: van ervaring naar grotere gedachte (5 VWO)",
    niveau: "vwo",
    vaardigheid: "Schrijfvaardigheid",
    emoji: "🪶",
    leerdoelen: [
      "Je weet wat een essay is en hoe het verschilt van een betoog en een verslag",
      "Je kunt vanuit een eigen ervaring of twijfel naar een grotere gedachte werken",
      "Je kunt een zichtbare gedachtegang opbouwen waarin twijfel een plek heeft",
    ],
    uitleg: `## Het essay: schrijvend denken

Op deze pagina leer je wat een essay is en wat het anders maakt dan een betoog of een verslag. Je ontdekt hoe je van een eigen ervaring naar een grotere gedachte komt, en waarom twijfel juist welkom is. Gebruik deze pagina om de theorie op te frissen; het uitgebreide stappenplan vind je in je reader.

## Wat is een essay?

Het woord *essay* komt van het Franse werkwoord *essayer*: proberen. En dat is precies wat je doet. Je probeert iets uit te denken zonder dat je vooraf al weet waar je uitkomt.

De Fransman Michel de Montaigne bedacht het genre in de zestiende eeuw. Hij wilde onderzoeken of hij al schrijvend en denkend zelf tot inzicht kon komen. Dat is nog steeds de kern: een essay is schrijvend denken.

In een essay laat je je gedachtegang zien. Je neemt de lezer mee van je vertrekpunt naar een grotere gedachte. De lezer denkt met je mee, stap voor stap.

## Van ervaring naar grotere gedachte

Een sterk essay begint klein en concreet: bij iets wat je hebt meegemaakt of opgemerkt. Daarna zoom je uit naar de vraag die eronder zit.

Een voorbeeld. De ene buurman is altijd vrolijk, de andere nooit. Dat is de ervaring. De grotere gedachte: waar komt vrolijkheid eigenlijk vandaan, en kun je die leren? Zo wordt jouw kleine observatie het beginpunt van een gedachte die iedereen aangaat.

Die beweging ziet er zo uit:

- **Kijken:** wat heb je meegemaakt, gezien of opgemerkt?
- **Nadenken:** welke grotere vraag of gedachte zit daaronder?
- **Onderzoeken:** wat zeggen anderen, en hoe verandert dat jouw gedachte?
- **Oordelen:** tot welk (voorlopig) inzicht kom je?

## Twijfel mag

Dit is het grote verschil met een betoog. In een betoog wil je de lezer overtuigen van één standpunt en stop je twijfel juist weg. In een essay laat je je denken zien, inclusief de momenten waarop je het zelf nog niet zeker weet.

Je hoeft aan het eind dus geen hard, sluitend antwoord te geven. Sterker nog: een essay dat te snel gelijk wil krijgen, wordt vaak een saai betoog. Durf onderweg te aarzelen, een zijpad in te slaan of van gedachten te veranderen. Dat is geen zwakte, dat is het genre.

## De opbouw: vrij, maar niet vormloos

De vorm ligt losser dan bij een verslag, maar een goed essay heeft wel een duidelijke lijn. Meestal herken je drie delen, die soepel in elkaar overlopen.

- **Inleiding:** je opent pakkend, vaak met je concrete ervaring. Je maakt nieuwsgierig en hint naar de vraag die je gaat onderzoeken.
- **Kern:** je onderzoekt je vraag. Je laat je gedachtegang zien, brengt een bron of ander perspectief in en durft te twijfelen.
- **Slot:** je komt terug bij je begin en laat zien tot welk inzicht je bent gekomen. Dat mag ook een afweging of een open einde zijn. Eindig krachtig.

## Waar let je op?

- Begin bij iets concreets: een ervaring, beeld of observatie van jou.
- Zorg dat er een grotere gedachte of vraag onder ligt die de lezer aangaat.
- Maak je gedachtegang zichtbaar: laat de lezer met je meedenken, ook in je twijfel.
- Onderbouw met minstens één bron of perspectief van buiten jezelf, en verwijs daarnaar.
- Schrijf in je eigen stem: persoonlijk, maar niet vrijblijvend.
- Houd het bondig: 600 tot 750 woorden. Kill your darlings.

Wil je oefenen of heb je een vraag? Gebruik de AI-tutor op deze pagina.

---

## Twee voorbeelden om te vergelijken

Hieronder staan twee korte essays over hetzelfde onderwerp: altijd op je telefoon kijken. De één is sterker dan de ander. Lees ze allebei en bedenk zelf wat goed is en wat beter kan. Het antwoord staat er niet bij; dat bespreek je in de les of leg je voor aan de AI-tutor.

### Voorbeeld 1: Weg met die schermen

Laatst zat ik in de trein en toen keek ik om me heen. Iedereen zat op zijn telefoon. Echt iedereen. Een man van een jaar of vijftig, twee meisjes van mijn leeftijd, zelfs een oude mevrouw. Niemand keek naar buiten, terwijl het buiten juist mooi weer was. Ik vond het een treurig gezicht.

Mensen zijn tegenwoordig verslaafd aan hun telefoon. Dat is gewoon een feit. Vroeger praatten mensen in de trein met elkaar en nu doet niemand dat meer. We zijn het contact met elkaar kwijtgeraakt door die schermen. Sociale media zijn daar de schuld van, want die zijn expres zo gemaakt dat je er niet meer vanaf kunt blijven.

Iedereen zou veel minder op zijn telefoon moeten kijken. Als je in de trein zit, kun je beter een boek lezen of uit het raam kijken. Dat is veel gezonder voor je hersenen. Ook zou het goed zijn als mensen weer gewoon met elkaar praten, want daar word je gelukkiger van. De telefoon moet gewoon af en toe uit.

Ik snap ook wel dat een telefoon soms handig is, bijvoorbeeld om de weg te vinden. Maar toch vind ik dat het te ver is doorgeslagen. We moeten met zijn allen weer leren om zonder telefoon te leven. Alleen dan wordt de wereld weer een beetje normaal. Dus: weg met die schermen.

**Denk na:** Waar begint deze tekst goed, en op welk moment wordt het meer een betoog dan een essay? Zie je de schrijver ergens twijfelen of nadenken? Wordt de gedachte groter dan de anekdote?

### Voorbeeld 2: Iets om vast te houden

In de trein liet ik laatst mijn telefoon thuis. Niet expres; ik was hem vergeten. De eerste minuten voelde ik iets vreemds: mijn hand ging steeds naar mijn jaszak, ook al wist ik dat daar niets zat. Alsof mijn hand zelf al wist wat ze wilde nog voordat ik iets besloot.

Ik dacht eerst dat ik me verveelde. Maar toen ik er langer over nadacht, was het iets anders. Het was geen verveling, het was onrust. Ik wist niet goed wat ik met mijn handen en mijn ogen aan moest. Waarom eigenlijk? Wat zoek ik precies als ik naar dat schermpje grijp?

Ik dacht altijd dat ik mijn telefoon pakte omdat ik iets wilde weten of iemand wilde spreken. Maar die keer in de trein had ik niets te checken en niemand te bereiken, en toch wilde mijn hand dat toestel. Misschien pak ik mijn telefoon dus helemaal niet om iets te doen, maar gewoon om iets vast te houden. Iets wat de leegte opvult.

De hoogleraar die het boek *Digitale detox* schreef, noemt de telefoon niet voor niets een 'volwassenenspeen'. Eerst vond ik dat woord overdreven. Maar in die trein begreep ik het opeens. Een speen stopt geen honger; hij stopt onrust. Misschien is dat wat mijn telefoon ook doet.

Ik weet nog steeds niet of dat erg is. Een kind met een speen is niet ongelukkig. Maar toen ik na een half uur uit het raam had zitten kijken, was de onrust weg, zonder dat er iets voor in de plaats was gekomen. Sindsdien vraag ik me af of ik mijn telefoon af en toe vergeet, of dat ik hem stiekem expres thuislaat.

**Denk na:** Hoe komt deze schrijver van een klein moment naar een grotere gedachte? Waar zie je de gedachtegang bewegen of veranderen? Wat doet de bron met het denken, en waarom werkt het open slot hier?

---

Klaar om zelf te beginnen? Pak je reader erbij voor het stappenplan, of vraag de AI-tutor op deze pagina om je op weg te helpen met een eerste ervaring.`,
    vragen: [
      { id: "es-1", niveau: "reproductie", vraag: "Van welk Frans werkwoord komt het woord 'essay', en wat betekent het?", opties: ["Van 'essayer': proberen", "Van 'essence': kern", "Van 'écrire': schrijven", "Van 'penser': denken"], antwoord: 0, uitleg: "'Essay' komt van 'essayer', wat proberen betekent. In een essay probeer je al schrijvend tot inzicht te komen zonder dat je het antwoord vooraf kent." },
      { id: "es-2", niveau: "reproductie", vraag: "Wat is het belangrijkste verschil tussen een essay en een betoog?", opties: ["Een essay is altijd langer dan een betoog", "In een essay laat je je gedachtegang en twijfel zien, in een betoog verdedig je één standpunt en stop je twijfel weg", "Een essay bevat geen bronnen, een betoog wel", "Een essay heeft geen inleiding en slot"], antwoord: 1, uitleg: "In een betoog wil je overtuigen en verberg je twijfel. In een essay laat je juist je denken zien, inclusief de momenten waarop je het nog niet zeker weet." },
      { id: "es-3", niveau: "reproductie", vraag: "Welke lengte hoort bij het essay dat je in deze lessenserie schrijft?", opties: ["300 tot 400 woorden", "600 tot 750 woorden", "1000 tot 1200 woorden", "Zo lang als nodig, er is geen richtlijn"], antwoord: 1, uitleg: "Het essay is 600 tot 750 woorden. Bondigheid hoort bij het genre: kill your darlings." },
      { id: "es-4", niveau: "reproductie", vraag: "Welke drie delen herken je meestal in een goed opgebouwd essay?", opties: ["Stelling, argumenten, weerlegging", "Inleiding, kern, slot", "Aanleiding, methode, conclusie", "Vraag, antwoord, samenvatting"], antwoord: 1, uitleg: "Een essay heeft een inleiding (pakkend, met je ervaring), een kern (waarin je je vraag onderzoekt) en een slot (waar je terugkomt bij je begin). De delen lopen soepel in elkaar over." },
      { id: "es-5", niveau: "toepassing", vraag: "Je hebt de ervaring: 'Ik werd zenuwachtig voor een wedstrijd waar ik niet eens naartoe wilde.' Welke formulering maakt hier de sterkste grotere gedachte van?", opties: ["Waarom was ik zo zenuwachtig voor die wedstrijd?", "Waarom doen mensen mee aan dingen die hen ongelukkig maken?", "Hoe kun je minder zenuwachtig worden voor een wedstrijd?", "Waarom hou ik niet van die sport?"], antwoord: 1, uitleg: "Een essay stijgt uit boven de anekdote. 'Waarom doen mensen mee aan dingen die hen ongelukkig maken?' is een algemene vraag die de lezer aangaat, terwijl de andere opties bij de persoonlijke situatie blijven steken." },
      { id: "es-6", niveau: "toepassing", vraag: "Een leerling schrijft een essay dat eindigt met: 'Kortom, iedereen zou minder op zijn telefoon moeten kijken. Punt.' Waarom past dit slot niet goed bij een essay?", opties: ["Het is te kort", "Het is te stellig en sluit alle twijfel af, terwijl een essay ruimte voor twijfel en een open einde mag houden", "Het bevat geen signaalwoord", "Het verwijst niet naar een bron"], antwoord: 1, uitleg: "Dit slot kiest de toon van een betoog: stellig en sluitend. Een essay mag eindigen met een afweging of een open einde. Te snel gelijk willen krijgen maakt het essay een betoog." },
      { id: "es-7", niveau: "toepassing", vraag: "Waarom is het waardevol om in je essay minstens één bron of ander perspectief te verwerken?", opties: ["Omdat je essay dan langer wordt", "Omdat een bron je gedachtegang kan aanscherpen of tegenspreken en je denken zo rijker en geloofwaardiger maakt", "Omdat het verplicht is om een bron letterlijk te citeren", "Omdat de lezer anders denkt dat je de tekst hebt overgeschreven"], antwoord: 1, uitleg: "Een essay is meer dan je eigen gedachten opschrijven. Een bron of tegenstem dwingt je scherper na te denken en maakt je gedachtegang geloofwaardiger." },
      { id: "es-8", niveau: "inzicht", vraag: "Waarom werkt het bij een essay vaak goed om aan het slot terug te keren naar de concrete ervaring uit je inleiding?", opties: ["Omdat de lezer dan ziet dat je niets nieuws hebt bedacht", "Omdat je zo je gedachtegang rondmaakt en laat zien hoe je denken over dat beginpunt is veranderd", "Omdat een essay altijd cirkelvormig moet zijn", "Omdat je anders te weinig woorden hebt"], antwoord: 1, uitleg: "Door terug te keren naar je beginpunt maak je de gedachtegang rond en laat je zien wat het nadenken heeft opgeleverd. De lezer ziet hoe je blik op diezelfde ervaring is verschoven, wat het essay samenhang en zeggingskracht geeft." },
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
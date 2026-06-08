import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'kwarts-batterij-gezondheidscheck',
  title: 'Kwarts Batterij Gezondheidschecker',
  description: 'Bereken de theoretische batterijduur van een kwartsuurwerk door de celcapaciteit (mAh) en het kaliber stroomverbruik (µA) in te voeren. Stel optioneel de installatiedatum in om de vervangingsdatum te schatten.',
  ui: {
    title: 'Kwarts Batterij Gezondheidschecker',
    batteryLabel: 'Batterijcel',
    selectBattery: 'Selecteer batterij',
    customBattery: 'Aangepast',
    capacityLabel: 'Capaciteit',
    capacityUnit: 'mAh',
    consumptionLabel: 'Verbruik',
    consumptionUnit: 'µA',
    installDateLabel: 'Geïnstalleerd op',
    installDateHint: 'Optioneel',
    monthLabel: 'Maand',
    yearLabel: 'Jaar',
    calculate: 'Berekenen',
    resultLabel: 'Geschatte Levensduur',
    theoreticalLife: 'Theoretische levensduur',
    yearsLabel: 'jaar',
    monthsLabel: 'maanden',
    daysLabel: 'dagen',
    changeDateLabel: 'Vervangen voor',
    noDateHint: 'Voer installatiedatum in voor vervangingsdatum',
    healthLabel: 'Status',
    healthGood: 'Goed',
    healthModerate: 'Matig',
    healthCritical: 'Kritiek',
    step1: 'Kies een gangbare batterij of selecteer Aangepast om de capaciteit in te voeren.',
    step2: 'Voer het stroomverbruik van het kaliber in microampère (µA) in.',
    step3: 'Voeg optioneel de installatiedatum toe en druk op Berekenen.',
    tipTitle: 'Tip',
    tipContent: 'Gebruik altijd de verbruikswaarde uit het officiële kaliber gegevensblad. De werkelijke levensduur kan 10-20% korter zijn door temperatuur- en belastingsvariaties.',
  },
  seo: [
    { type: 'title', text: 'Kwarts Batterij Gezondheidschecker Hoe Lang Gaat Uw Horlogebatterij Mee', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Typisch stroomverbruik 3 wijzer' },
        { value: '18-55 mAh', label: 'Gangbare celcapaciteit' },
        { value: '2.5-4.5 yr', label: 'Gebruikelijke batterijduur' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Bent u benieuwd wanneer uw kwarts horloge stopt met tikken? De <strong>Kwarts Batterij Gezondheidschecker</strong> helpt u de resterende levensduur van elke kwartsuurwerk batterij te schatten door de celcapaciteit (gemeten in mAh) te vergelijken met het gemiddelde stroomverbruik van het uurwerk (gemeten in microampère, µA). Of u nu een Zwitsers ETA, een Japanse Miyota, een Seiko, een Ronda of een Chinees DG uurwerk bezit, deze tool berekent de theoretische levensduur in jaren, maanden en dagen en kan zelfs de exacte vervangingsdatum voorspellen als u de installatiemaand en het jaar invoert.' },
    { type: 'title', text: 'Hoe de Levensduur van een Kwartsbatterij Wordt Berekend de Wiskunde achter de Schatting', level: 3 },
    { type: 'paragraph', html: 'De batterijduur volgt een eenvoudige elektrische formule: <strong>Levensduur (uren) = (Celcapaciteit in mAh × 1000) ÷ Stroomverbruik in µA</strong>. Dat resultaat gedeeld door 24 geeft dagen en door 365,25 geeft jaren. Een standaard <strong>SR920SW (371) cel met 40 mAh</strong> die een uurwerk aandrijft dat <strong>1,5 µA</strong> verbruikt gaat theoretisch ongeveer <strong>3 jaar</strong> mee. Verlaag het verbruik naar 1,0 µA en dezelfde cel rekt uit tot meer dan 4,5 jaar. Verhoog het naar 2,5 µA en de batterijduur daalt tot onder 2 jaar. Elke fractie van een microampère telt wanneer u uw onderhoudsintervallen plant.' },
    { type: 'title', text: 'De Meest Gangbare Kwarts Horlogebatterij Types en Hun Capaciteiten', level: 3 },
    {
      type: 'table',
      headers: ['Celreferentie', 'Gangbare Code', 'Capaciteit', 'Typisch Gebruik'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Dunne nette horloges'],
        ['SR626SW', '377', '27 mAh', 'Middelgrote kwarts modellen'],
        ['SR920SW', '371', '40 mAh', 'Chronografen en multifunctioneel'],
        ['SR936SW', '394', '55 mAh', 'Grote analoog digitale hybrides'],
        ['CR2025', '-', '165 mAh', 'Hoog vermogen LED modules'],
      ],
    },
    { type: 'tip', title: 'Voldoe aan de originele specificatie', html: 'Het selecteren van het verkeerde celtype kan de batterijduur met wel <strong>40%</strong> verkorten. Raadpleeg altijd het originele batterijreferentienummer voordat u een vervanging installeert. De numerieke code geeft de afmetingen weer bijvoorbeeld <strong>SR936SW</strong> is 9.5 mm in diameter en 3.6 mm dik.' },
    { type: 'title', text: 'Waarom U Altijd Officiële Kaliber Verbruikswaarden Moet Gebruiken', level: 3 },
    { type: 'paragraph', html: 'Uurwerkfabrikanten zoals <strong>ETA, Ronda, Miyota, Seiko en ISA</strong> publiceren officiële technische gegevensbladen voor elk kaliber dat ze produceren. Deze gegevensbladen vermelden het <strong>gemiddelde stroomverbruik</strong> onder gecontroleerde temperatuur (meestal 22 °C) en met een standaard wijzerbelasting. Het gebruik van een geschatte waarde van 1,0 µA terwijl uw uurwerk daadwerkelijk 2,5 µA verbruikt kan de batterijduur met meer dan 100% overschatten. Download altijd de officiële PDF van de website van de fabrikant of raadpleeg de kaliberreferentie op gespecialiseerde databases om de werkelijke verbruikswaarde te verkrijgen.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Batterijlekkage kan uw horloge uurwerk vernietigen',
      html: 'Een lege zilveroxide batterij kan <strong>kaliumhydroxide lekken</strong> wat de contactveren de printbaan en zelfs de stappenmotorspoel aantast. Als de tool minder dan <strong>6 maanden resterende levensduur</strong> schat plan dan een batterijvervanging tijdens uw volgende routinecontrole. Besteed speciale aandacht aan <strong>vintage kwarts horloges uit de jaren 1970 en 1980</strong> hun originele batterijen zijn na tientallen jaren in de kast veel vatbaarder voor lekkage.',
    },
    { type: 'title', text: 'Factoren Die de Werkelijke Batterijduur Verkorten Versus de Theoretische Schatting', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperatuurextremen</strong> een horloge op een zonnig dashboard kan 30% hoger stroomverbruik hebben',
        '<strong>Einde levensduur detectiecircuits</strong> de twee seconden tikindicator verbruikt extra stroom zodra geactiveerd',
        '<strong>Chronograaf of alarmgebruik</strong> tijdelijke stroompieken die oplopen na verloop van tijd',
        '<strong>Mechanische wrijving</strong> verouderde of vuile tandwielen verhogen het koppel dat de stappenmotor nodig heeft',
        '<strong>Magnetische velden</strong> blootstelling verhoogt de motor koppelvereisten waardoor de cel sneller leegraakt',
      ],
    },
    { type: 'paragraph', html: 'In de praktijk kunt u <strong>10 tot 20% kortere levensduur</strong> verwachten dan de theoretische berekening. Voor zeer nauwkeurige thermogecompenseerde kwartsuurwerken varieert het verbruik minder maar standaard kwarts is merkbaar gevoelig voor deze omgevingsfactoren.' },
    { type: 'title', text: 'Hoe Vindt U de Juiste Batterijvervanging voor Uw Kwarts Horloge', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Zilveroxide)', definition: 'Cellen gestempeld met SR (bijv. SR920SW) leveren een stabiele 1.55 V uitgang gedurende hun hele levensduur waardoor de kwarts oscillator nauwkeurig blijft. Dit is de standaard voor kwalitatieve kwarts horloges.' },
        { term: 'LR (Alkaline)', definition: 'Cellen gestempeld met LR (bijv. LR41) hebben een geleidelijk dalende spanning waardoor het horloge langzaam kan gaan lopen of voortijdig kan stoppen. Niet aanbevolen als vervanging voor SR cellen.' },
        { term: 'CR (Lithium)', definition: 'Cellen gestempeld met CR (bijv. CR2025) leveren 3.0 V en worden gebruikt in hoog vermogen modules met LED achtergrondverlichting grote LCD schermen of meerdere complicaties.' },
        { term: 'Numerieke Code', definition: 'De vier cijfers coderen de fysieke afmetingen de eerste twee cijfers zijn de diameter in millimeters en de laatste twee zijn de dikte in tienden van een millimeter. SR936SW = Ø9.5 mm × 3.6 mm.' },
      ],
    },
    { type: 'title', text: 'Standaard Kwarts versus Zonne versus Kinetisch Hoe de Technologie de Vergelijking Verandert', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standaard Kwarts',
          description: 'Gebruikt een vervangbare zilveroxide of lithium primaire cel. De batterijduur hangt puur af van capaciteit versus verbruik. Dit is waar deze calculator voor is ontworpen.',
          highlight: true,
          points: [
            'Vervangbare primaire cel',
            'Levensduur = capaciteit ÷ verbruik',
            'Voorspelbaar vervangingsschema',
            'Betaalbare batterijvervangingen',
          ],
        },
        {
          title: 'Zonne en Kinetisch',
          description: 'Zonne horloges gebruiken fotovoltaïsche cellen om een lithium ion accumulator op te laden. Kinetische horloges gebruiken een rotor aangedreven micro generator om een condensator op te laden.',
          points: [
            'Oplaadbare energieopslag',
            'Levensduur hangt af van laadcycli',
            'Condensator degradatie na verloop van tijd',
            'Niet compatibel met deze calculator',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Fabrikantclaims van <strong>10 jaar batterijduur</strong> zijn meestal gebaseerd op zeer laag verbruikende uurwerken (rond 0.5 tot 0.8 µA) gekoppeld aan cellen met grote capaciteit (165 mAh CR2025 of groter). In een standaard analoog kwarts horloge met een kleine zilveroxide cel zoals de <strong>SR626SW (27 mAh)</strong> en een typisch 1.5 µA uurwerk is de werkelijke levensduur dichter bij <strong>2.5 tot 3 jaar</strong>. Controleer altijd met deze calculator in plaats van marketinglabels te vertrouwen.' },
    {
      type: 'tip',
      title: 'Vervang proactief niet reactief',
      html: 'Wanneer u de secondewijzer ziet springen in <strong>2 seconden of 4 seconden intervallen</strong> is het uurwerk in energiebesparende modus gegaan vanwege lage spanning. De batterij heeft nog ongeveer <strong>2 tot 4 weken</strong> resterende levensduur. Vervang deze onmiddellijk om lekkageschade te voorkomen.',
    },
    {
      type: 'summary',
      title: 'Belangrijkste Punten voor de Gezondheid van Kwarts Horlogebatterijen',
      items: [
        'Gebruik de officiële kaliber verbruikswaarde uit het gegevensblad van de fabrikant een geschatte waarde kan de levensduur met meer dan 100% overschatten',
        'Vervang exact hetzelfde celtype SR LR en CR chemie zijn niet uitwisselbaar',
        'Vervang de batterij wanneer de tool minder dan 6 maanden resterende levensduur aangeeft om lekkage te voorkomen',
        'De werkelijke batterijduur is meestal 10-20% korter dan het theoretische ideaal door temperatuur wrijving en gebruik',
        'Deze calculator is ontworpen voor standaard kwarts uurwerken met vervangbare primaire cellen niet voor zonne of kinetische horloges',
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe nauwkeurig is de theoretische batterijduur schatting?',
      answer: 'De berekening is een elektrisch ideaal gebaseerd op capaciteit gedeeld door verbruik. In de praktijk kunt u 10 tot 20% kortere levensduur verwachten door temperatuurvariaties einde levensduur detectiecircuits mechanische weerstand van verouderde smeermiddelen en de extra belasting van chronograaf of alarmfuncties. De schatting is een betrouwbare bovengrens geen exacte voorspelling.',
    },
    {
      question: 'Waar vind ik de exacte stroomverbruikswaarde voor mijn kwarts kaliber?',
      answer: 'Officiële technische gegevensbladen van ETA Ronda Miyota Seiko ISA en andere uurwerkfabrikanten vermelden het gemiddelde stroomverbruik in microampère (µA). Zoek naar het kaliberreferentienummer gevolgd door gegevensblad of technische specificatie. Gespecialiseerde databases zoals Ranfft 17jewels en Watch-Wiki publiceren ook verbruikscijfers bijgedragen door de horlogegemeenschap.',
    },
    {
      question: 'Wat betekent µA en waarom is het belangrijk?',
      answer: 'µA staat voor microampère of een miljoenste van een ampère. Het meet de elektrische stroom die het uurwerk uit de batterij trekt. Een typisch analoog kwarts drie wijzer uurwerk trekt tussen 1.0 en 2.5 µA. Chronografen en multifunctionele modules kunnen 3.0 tot 6.0 µA trekken. Hoe hoger de stroom hoe korter de batterijduur voor een gegeven celcapaciteit.',
    },
    {
      question: 'Kan ik deze tool gebruiken voor zonne of kinetische horloges?',
      answer: 'Nee. Zonne horloges (Eco-Drive Solar Light-Powered) gebruiken fotovoltaïsche cellen om een oplaadbare batterij op te laden. Kinetische en Auto-Quartz horloges gebruiken een rotor en micro generator om een condensator op te laden. Geen van beide technologieën vertrouwt op een primaire wegwerpcel dus het capaciteit versus verbruik model is niet van toepassing. Gebruik deze calculator alleen voor standaard kwarts uurwerken met vervangbare zilveroxide alkaline of lithium cellen.',
    },
    {
      question: 'Moet ik de batterij vervangen voordat deze volledig leeg is?',
      answer: 'Ja. Zilveroxide en alkaline batterijen kunnen kaliumhydroxide lekken wanneer ze volledig leeg zijn waardoor de contactveren printbaansporen en de stappenmotorspoel beschadigd raken. Vervanging voor volledige ontlading wordt sterk aanbevolen. Als de tool minder dan 6 maanden geschatte levensduur aangeeft plan dan een batterijvervanging zo snel als praktisch mogelijk.',
    },
    {
      question: 'Wat gebeurt er als ik een batterij met hogere of lagere capaciteit dan de originele gebruik?',
      answer: 'Het gebruik van een cel met hogere capaciteit (bijv. SR936SW 55 mAh in plaats van SR920SW 40 mAh) verlengt de batterijduur maar past mogelijk niet fysiek de cel moet exact overeenkomen met de originele diameter en dikte om de juiste contactveerdruk te behouden. Het gebruik van een cel met lagere capaciteit verkort de batterijduur en kan intermitterend contact veroorzaken als de cel te klein is. Vervang altijd met exact hetzelfde referentienummer of een gedocumenteerd equivalent uit dezelfde maatfamilie.',
    },
    {
      question: 'Hoe weet ik of de batterij in mijn horloge zilveroxide of alkaline is?',
      answer: 'Zilveroxide cellen zijn gestempeld met SR (bijv. SR920SW) en leveren een stabiele 1.55 V uitgang gedurende hun hele levensduur wat de kwarts oscillator nauwkeurig houdt. Alkaline cellen zijn gestempeld met LR (bijv. LR41) en hebben een geleidelijk dalende spanning waardoor het horloge langzaam kan gaan lopen of voortijdig kan stoppen. De meeste kwalitatieve horlogemerken specificeren zilveroxide. Als uw horloge origineel SR gebruikte vervang dan altijd met SR niet LR.',
    },
    {
      question: 'Betekent de secondewijzer die elke twee seconden springt dat de batterij leeg is?',
      answer: 'Ja. Wanneer het kwarts uurwerk detecteert dat de batterijspanning te laag is om de stappenmotor betrouwbaar aan te drijven gaat het over in een energiebesparende modus waarbij de secondewijzer in intervallen van 2 seconden of 4 seconden springt. Dit is de einde levensduur indicator. Wanneer u dit gedrag ziet heeft de batterij nog ongeveer 2 tot 4 weken resterende levensduur en moet deze onmiddellijk worden vervangen om lekkage te voorkomen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer of pas de batterijcel aan',
      text: 'Kies een gangbare zilveroxide cel uit de dropdown lijst SR621SW SR626SW SR920SW SR936SW en andere zijn vooraf geladen met hun officiële capaciteiten. Als uw cel niet in de lijst staat selecteer dan Aangepast en typ de exacte capaciteit in mAh zoals vermeld op het batterijlabel of in het gegevensblad van de fabrikant.',
    },
    {
      name: 'Voer het stroomverbruik van het uurwerk in',
      text: 'Zoek het gemiddelde stroomverbruik voor uw kaliber op in de officiële technische documentatie. Typ de waarde in microampère (µA) in het verbruiksveld. De meeste drie wijzer uurwerken gebruiken 1.0 tot 2.5 µA. Chronografen en multifunctionele modules kunnen tot 6.0 µA gaan.',
    },
    {
      name: 'Voeg de installatiemaand en het jaar toe (optioneel)',
      text: 'Als u zich herinnert of heeft genoteerd wanneer de batterij voor het laatst is geïnstalleerd selecteer dan de maand en voer het jaar in. De tool gebruikt deze datum om de geschatte vervangingsdatum te berekenen en de resterende batterijgezondheid als percentage weer te geven.',
    },
    {
      name: 'Lees de theoretische levensduur',
      text: 'De resultaatkaart toont de totale geschatte batterijduur in jaren maanden en resterende dagen. Dit is de maximale levensduur onder ideale omstandigheden ervan uitgaande dat er geen externe factoren de batterijcapaciteit verminderen.',
    },
    {
      name: 'Controleer de gezondheidsstatus en vervangingsdatum',
      text: 'Wanneer een installatiedatum is opgegeven vult de meter zich proportioneel met de resterende batterijduur. Een groen Goed label betekent meer dan 50% levensduur over. Geel Matig betekent tussen 20 en 50%. Rood Kritiek betekent minder dan 20%. De exacte aanbevolen vervangingsdatum wordt onder de meter weergegeven.',
    },
    {
      name: 'Pas invoer aan en herbereken',
      text: 'Wijzig elke invoer batterijmodel verbruikswaarde of installatiedatum en het resultaat wordt automatisch bijgewerkt. Gebruik dit om verschillende batterijtypes te vergelijken of om vervangingsschema te plannen voor meerdere horloges in uw collectie.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe nauwkeurig is de theoretische batterijduur schatting?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De berekening is een elektrisch ideaal gebaseerd op capaciteit gedeeld door verbruik. In de praktijk kunt u 10 tot 20% kortere levensduur verwachten door temperatuurvariaties einde levensduur detectiecircuits mechanische weerstand van verouderde smeermiddelen en de extra belasting van chronograaf of alarmfuncties. De schatting is een betrouwbare bovengrens geen exacte voorspelling.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Waar vind ik de exacte stroomverbruikswaarde voor mijn kwarts kaliber?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Officiële technische gegevensbladen van ETA Ronda Miyota Seiko ISA en andere uurwerkfabrikanten vermelden het gemiddelde stroomverbruik in microampère (µA). Zoek naar het kaliberreferentienummer gevolgd door gegevensblad of technische specificatie. Gespecialiseerde databases zoals Ranfft en 17jewels publiceren ook door de gemeenschap bijgedragen verbruikscijfers.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat betekent µA en waarom is het belangrijk?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA staat voor microampère of een miljoenste van een ampère. Het meet de elektrische stroom die het uurwerk uit de batterij trekt. Een typisch analoog kwarts drie wijzer uurwerk trekt tussen 1.0 en 2.5 µA. Chronografen en multifunctionele modules kunnen 3.0 tot 6.0 µA trekken. Hoe hoger de stroom hoe korter de batterijduur voor een gegeven celcapaciteit.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik deze tool gebruiken voor zonne of kinetische horloges?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nee. Zonne horloges gebruiken fotovoltaïsche cellen om een oplaadbare batterij op te laden. Kinetische horloges gebruiken een rotor en micro generator om een condensator op te laden. Geen van beide technologieën vertrouwt op een primaire wegwerpcel dus het capaciteit versus verbruik model is niet van toepassing. Gebruik deze calculator alleen voor standaard kwarts uurwerken met vervangbare zilveroxide alkaline of lithium cellen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Moet ik de batterij vervangen voordat deze volledig leeg is?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Zilveroxide en alkaline batterijen kunnen kaliumhydroxide lekken wanneer ze volledig leeg zijn waardoor de contactveren printbaansporen en de stappenmotorspoel beschadigd raken. Vervanging voor volledige ontlading wordt sterk aanbevolen. Als de tool minder dan 6 maanden geschatte levensduur aangeeft plan dan een batterijvervanging zo snel als praktisch mogelijk.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe weet ik of de batterij in mijn horloge zilveroxide of alkaline is?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zilveroxide cellen zijn gestempeld met SR (bijv. SR920SW) en leveren een stabiele 1.55 V uitgang gedurende hun hele levensduur. Alkaline cellen zijn gestempeld met LR (bijv. LR41) en hebben een geleidelijk dalende spanning. De meeste kwalitatieve horlogemerken specificeren zilveroxide. Vervang SR altijd met SR niet LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Betekent de secondewijzer die elke twee seconden springt dat de batterij leeg is?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Wanneer het kwarts uurwerk een lage batterijspanning detecteert gaat het over in energiebesparende modus waarbij de secondewijzer in intervallen van 2 seconden of 4 seconden springt. Dit is de einde levensduur indicator. Wanneer u dit gedrag ziet heeft de batterij nog ongeveer 2 tot 4 weken resterende levensduur en moet deze onmiddellijk worden vervangen om lekkage te voorkomen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kwarts Batterij Gezondheidschecker',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Horloge Batterijduur Calculator',
      'description': 'Bereken de theoretische batterijduur van elk kwarts horloge uurwerk door celcapaciteit (mAh) en kaliber stroomverbruik (µA) in te voeren. Schat de vervangingsdatum wanneer installatiemaand en jaar worden opgegeven.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Kwarts horloge batterijduur berekening capaciteit versus verbruik uitgelegd',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Leer hoe u de batterijduur van een kwarts horloge uurwerk kunt schatten met behulp van de celcapaciteit in mAh en het stroomverbruik in µA. Begrijp de formule het effect van temperatuur en belasting en wanneer u een vervanging moet plannen.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe de batterijduur van een kwarts horloge te schatten',
      'description': 'Een stapsgewijze handleiding voor het gebruik van de Kwarts Batterij Gezondheidschecker om de resterende levensduur van elke kwarts horloge batterij te bepalen en de vervangingsdatum te plannen.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer of pas de batterijcel aan',
          'text': 'Kies een gangbare zilveroxide cel uit de dropdown lijst SR621SW SR626SW SR920SW SR936SW en andere zijn vooraf geladen met hun officiële capaciteiten. Als uw cel niet in de lijst staat selecteer dan Aangepast en typ de exacte capaciteit in mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Voer het stroomverbruik van het uurwerk in',
          'text': 'Zoek het gemiddelde stroomverbruik voor uw kaliber uit de officiële technische documentatie. Typ de waarde in microampère (µA) in het verbruiksveld.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Voeg de installatiemaand en het jaar toe',
          'text': 'Als u weet wanneer de batterij is geïnstalleerd selecteer dan de maand en voer het jaar in. De tool berekent de geschatte vervangingsdatum en geeft de resterende batterijgezondheid als percentage weer.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees de theoretische levensduur',
          'text': 'De resultaatkaart toont de totale geschatte batterijduur in jaren maanden en resterende dagen. Dit is de maximale levensduur onder ideale omstandigheden.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controleer gezondheidsstatus en vervangingsdatum',
          'text': 'Wanneer een installatiedatum is opgegeven toont de meter de resterende levensduur. Groen betekent meer dan 50% resterend. Geel betekent 20 tot 50%. Rood betekent minder dan 20%. De aanbevolen vervangingsdatum wordt onder weergegeven.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Kwarts Batterij Gezondheidschecker',
      'description': 'Een online tool voor het schatten van de batterijduur van kwarts horloges op basis van celcapaciteit en stroomverbruik.',
      'category': 'Horloge Batterij Calculator',
      'audience': { '@type': 'Audience', 'audienceType': 'Horlogeliefhebbers en reparatietechnici' },
    },
  ],
};

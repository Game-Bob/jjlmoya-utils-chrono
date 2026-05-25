import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'referensguide-for-krona',
  title: 'Referensguide för Kronan på Klockan',
  description: 'Interaktiv guide för kronans positioner, uppvridningsriktningar och inställningsfunktioner för populära urverk.',
  ui: {
    title: 'Kroninställningar',
    movementLabel: 'Urverk',
    selectMovement: 'Välj urverk',
    customMovement: 'Anpassat',
    positionLabel: 'Position',
    unscrewFirst: 'Skruva först upp kronan',
    windingLabel: 'Uppvridning',
    hackLabel: 'Hack',
    dangerZoneLabel: 'Undvik 21:00\u20133:00',
    directionCW: 'Medsols',
    directionCCW: 'Motsols',
    directionBoth: 'Dubbelriktad',
    pullHint: 'Dra i kronan',
    clickPosition: 'Klicka på en position',
    position0Title: 'Vila',
    position0Desc: 'Kronan är intryckt. Klockan går normalt.',
    position0Detail: 'Inga uppvridnings- eller inställningsfunktioner är aktiva.',
    position1Title: 'Manuell uppvridning',
    position1Desc: 'Vrid kronan medsols för att dra upp fjädern. Du känner motstånd när fjädern spänns.',
    position1Detail: 'Cirka 30\u201340 fulla varv från stillastående. Automatiska rotorer drar också upp klockan när den bärs.',
    position2Title: 'Snabbinställning av datum',
    position2Desc: 'Vrid kronan medsols för att ställa fram datumet. Timvisaren förblir synkroniserad med de löpande sekunderna.',
    position2Detail: 'UNDVIK att snabbställa datumet mellan 21:00 och 3:00 medan datumväxlingsmekanismen är aktiverad.',
    position3Title: 'Tidsinställning',
    position3Desc: 'Vrid kronan i valfri riktning för att flytta visarna. Sekundvisaren stannar (hackar) för exakt synkronisering.',
    position3Detail: 'Dra till position 3, vänta tills sekunderna når 12, dra sedan hela vägen. Rotera för att ställa in tiden och tryck tillbaka.',
    screwDownHint: 'Kom ihåg att skruva tillbaka kronan för vattentäthet.',
    noQuickSet: 'Ingen snabbinställning',
    noHack: 'Nej',
    hasHack: 'Ja',
    crownPositions: 'Kronpositioner',
    noteTitle: 'Notera',
  },
  seo: [
    { type: 'title', text: 'Guide för Kronans Positioner-Så Vindar Du, Ställer Datum & Tid Korrekt', level: 2 },
    { type: 'paragraph', html: 'Kronan är det enda fysiska gränssnittet mellan dig och ditt urverk. Att använda den fel-vinda baklänges, ställa datum vid midnatt eller dra för hårt-kan skada mekanismen. Den här guiden bryter ner varje kronposition för <strong>ETA, Sellita, Miyota, Seiko och Unitas</strong>-kalibrar så att du aldrig behöver gissa.' },
    { type: 'title', text: 'Kronans Positioner i Ett Ögonkast', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Position 0 (Vila)', definition: 'Kronan intryckt eller nedskruvad. Klockan går normalt. Inga funktioner aktiva. Återvänd alltid hit efter inställning.' },
        { term: 'Position 1 (Uppvridning)', definition: 'Första utdraget eller uppskruvat läge. Vrid medsols för att dra upp fjädern. De flesta automatiska verk drar också upp via rotorn.' },
        { term: 'Position 2 (Snabbinställning av datum)', definition: 'Andra utdraget. Vrid medsols för att ställa fram datumet. Undvik användning mellan 21:00\u20133:00 när datummekanismen är aktiverad.' },
        { term: 'Position 3 (Tidsinställning)', definition: 'Tredje utdraget. Hackande sekundstopp för exakt justering. Rotera fritt för att ställa in tiden. Finns på de flesta moderna automatiska verk.' },
      ]
    },

    { type: 'title', text: 'Urverksjämförelse: Kronans Funktioner', level: 3 },
    {
      type: 'table', headers: ['Urverk', 'Positioner', 'Hack', 'Snabbinst.', 'Vindriktn.'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['Miyota 8215', '2 (0,1,3)', 'Nej', 'Ingen', 'M'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Ja', 'Datum (M)', 'M'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'Nej', 'Ingen', 'M'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Vanliga Kronmisstag', icon: 'mdi:alert', badge: 'GÖR INTE', html: 'Snabbställ aldrig datumet mellan <strong>21:00 och 3:00</strong> medan datumhjulet är aktiverat. Detta kan skada kuggar och kräva en fullständig service av urverket. Om du måste ändra datum under detta fönster, först då fram tiden förbi 3:00, ställ in datumet och justera sedan tillbaka till rätt tid.' },

    { type: 'tip', title: 'Nedskruvade Kronor', html: 'Dyk- och sportklockor har ofta nedskruvade kronor för vattentäthet. <strong>Skruva alltid upp före utdragning</strong>. Vrid motsols tills kronan poppar ut, dra sedan till önskad position. Efter inställning, tryck in och vrid sedan medsols med lätt tryck tills den sitter fast. <strong>Dra inte åt för hårt.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Standardkrona', icon: 'mdi:crown', description: 'Tryck-drag-krona som finns på de flesta klänningsklockor och vardagsautomater. 2\u20134 positioner. Vattentäthet vanligtvis 30\u2013100 m.', points: ['Omedelbar åtkomst, ingen uppskruvning', 'Begränsad vattentäthet', 'Vanlig på ETA, Miyota, Seiko'] },
        { title: 'Nedskruvad Krona', icon: 'mdi:lock', description: 'Gängad krona som skruvas in i boettens rör. Standard på dyk- och verktygsklockor. Vattentäthet 200 m+.', points: ['Överlägsen vattentäthet', 'Måste skruvas upp före användning', 'Vanlig på Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Snabbreferens', items: [
        'Vind alltid medsols-baklängesvridning aktiverar glidkopplingen men vindar inte.',
        'Om din klocka har en nedskruvad krona, skruva upp den innan du drar till någon position.',
        'Undvik snabbinställning av datum mellan 21:00 och 3:00. Ställ fram tiden förbi 3:00 först om det behövs.',
        'Handuppdragna urverk (t.ex. Unitas 6498) har färre positioner. Vind fullt innan du ställer in tiden.',
        'Icke-hackande urverk (t.ex. Miyota 8215) kräver en annan teknik: vrid förbi måltiden och sedan långsamt tillbaka.',
      ]
    },
  ],
  faq: [
    {
      question: 'Hur många kronpositioner har min klocka?',
      answer: 'De flesta automatiska urverk har 3 funktionella positioner utöver vila: position 1 för manuell uppvridning, position 2 för snabbinställning av datum och position 3 för tidsinställning med hackning. Handuppdragna urverk som Unitas 6498 har endast 1 funktionell position (uppvridning, med tidsinställning vid ytterligare utdragning). Nedskruvade kronor lägger till ett extra steg: skruva upp före utdragning.',
    },
    {
      question: 'Kan jag skada min klocka genom att vinda baklänges?',
      answer: 'Nej, men det gör inget. Moderna urverk använder en glidkoppling som kopplas ur vid baklängesvridning, så baklängesvridning orsakar ingen skada men vindar inte heller fjädern. Vind alltid medsols för manuell uppvridning. Det enda undantaget är vissa vintage fickur och tidiga automatiska urverk.',
    },
    {
      question: 'Vad är datumändringens riskzon och hur undviker jag den?',
      answer: 'Riskzonen är vanligtvis 21:00 till 3:00, när datumväxlingsmekanismen är fysiskt i ingrepp med datumhjulet. Snabbinställning under detta fönster kan skada kuggar. För att säkert ställa datumet: ställ fram tiden förbi 3:00, ställ datumet till föregående dag och ställ sedan fram tiden till rätt datum och tid.',
    },
    {
      question: 'Varför stannar inte min sekundvisare när jag drar i kronan?',
      answer: 'Vissa urverk saknar hackmekanism. Vanliga icke-hackande kalibrar inkluderar Miyota 8215, Unitas 6497/6498 och många vintageurverk. För att ställa in tiden exakt på ett icke-hackande urverk: vrid kronan 5\u201310 minuter förbi din måltid och vrid sedan långsamt tillbaka tills minutvisaren landar exakt på önskat märke.',
    },
    {
      question: 'Hur vet jag hur många varv som krävs för att dra upp min klocka helt?',
      answer: 'De flesta automatiska urverk kräver 30\u201340 fulla kronvarv från stillastående. Handuppdragna urverk varierar: Unitas 6498 behöver cirka 30\u201335 varv, medan Seiko 6R35 med sin 70-timmarsreserv behöver 50\u201360 varv. Stanna när du känner fast motstånd-att tvinga förbi det kan skada fjädern.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Hitta ditt urverkskaliber',
      text: 'Titta på boettens baksida (ofta graverad) eller på själva urverket genom en displayboett. Vanliga nummer: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Välj det i guiden',
      text: 'Välj ditt urverk från rullgardinsmenyn. Kronans visualisering och panelen uppdateras för att visa dina exakta positioner, vindriktning och funktioner.',
    },
    {
      name: 'Dra igenom varje position',
      text: 'Klicka på positionsknapparna (0\u20133) eller använd dra-knappen. Läs beskrivningen och notera riskzonsvarningen för datuminställning.',
    },
    {
      name: 'Tillämpa på din klocka',
      text: 'Ha guiden öppen bredvid dig och öva på din egen klocka. Vind i rätt riktning, undvik riskzonen och skruva tillbaka kronan efteråt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur många kronpositioner har min klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta automatiska urverk har 3 funktionella positioner utöver vila: position 1 för manuell uppvridning, position 2 för snabbinställning av datum och position 3 för tidsinställning med hackning.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag skada min klocka genom att vinda baklänges?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nej. Moderna urverk använder en glidkoppling som kopplas ur vid baklängesvridning, så baklängesvridning orsakar ingen skada men vindar inte heller fjädern.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad är datumändringens riskzon?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Riskzonen är vanligtvis 21:00 till 3:00. För att säkert ställa datumet: ställ fram tiden förbi 3:00, ställ datumet till föregående dag och ställ sedan framåt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Varför stannar inte min sekundvisare när jag drar i kronan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vissa urverk saknar hackmekanism. Vanliga icke-hackande kalibrar inkluderar Miyota 8215 och Unitas 6497/6498. För att ställa in tid: vrid förbi målet och sedan långsamt tillbaka.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur många varv krävs för att dra upp min klocka helt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta automatiska urverk kräver 30-40 fulla kronvarv. Handuppdragna urverk varierar. Stanna när du känner fast motstånd.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Referensguide för Kronan på Klockan',
      'operatingSystem': 'Alla',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så här använder du referensguiden för kronan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Hitta ditt urverkskaliber',
          'text': 'Titta på boettens baksida (ofta graverad) eller på själva urverket genom en displayboett. Vanliga nummer: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Välj det i guiden',
          'text': 'Välj ditt urverk från rullgardinsmenyn. Kronans visualisering och panelen uppdateras för att visa dina exakta positioner, vindriktning och funktioner.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Dra igenom varje position',
          'text': 'Klicka på positionsknapparna (0\u20133) eller använd dra-knappen. Läs beskrivningen och notera riskzonsvarningen för datuminställning.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tillämpa på din klocka',
          'text': 'Ha guiden öppen bredvid dig och öva på din egen klocka. Vind i rätt riktning, undvik riskzonen och skruva tillbaka kronan efteråt.',
        },
      ],
    },
  ],
};

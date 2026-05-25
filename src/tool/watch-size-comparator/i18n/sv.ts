import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'klockstorleksjamforare',
  title: 'Klockstorleksjämförare – se hur en klocka sitter på handleden',
  description: 'Jämför boettstorlekar visuellt. Ange diameter, lug-to-lug och handledsmått för att se hur en klocka passar innan du köper.',
  ui: {
    title: 'Klockstorleksjämförare',
    addWatch: 'Lägg till klocka',
    watchName: 'Klockans namn',
    watchNamePlaceholder: 't.ex. Rolex Submariner',
    caseDiameter: 'Boettdiameter',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Tjocklek',
    wristSize: 'Handledsstorlek',
    wristSizePlaceholder: 't.ex. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'TUM',
    remove: 'Ta bort',
    yourWatches: 'Dina klockor',
    fitLegend: 'Passformsförklaring',
    excellentFit: 'Utmärkt',
    goodFit: 'Bra',
    borderlineFit: 'På gränsen',
    largeFit: 'För stor',
    wristCurve: 'handled',
    nameRequired: 'Ange ett klocknamn',
    watchTooLarge: 'Klockan går utanför handleden',
    l2lExceedsWrist: 'Lug-to-lug överstiger handledsbredden',
    excellentDesc: 'Proportionerlig – lug-to-lug håller sig väl inom handleden.',
    goodDesc: 'Bra passform – överlappar något men fortfarande bekväm.',
    borderlineDesc: 'På gränsen – klackarna närmar sig handledens kant.',
    largeDesc: 'För stor – klackarna hänger sannolikt över handleden.',
    fitsWell: 'Passar bra',
    slightlyLarge: 'Något stor',
    tooLarge: 'För stor',
    source: 'Storleksguide',
    estimateNote: 'Ange mått och lägg till en klocka för att se hur den passar på din handled.',
  },
  seo: [
    { type: 'title', text: 'Klockstorleksjämförare – se hur en klocka sitter på handleden', level: 2 },
    { type: 'paragraph', html: 'Undrar du om en <strong>42 mm-klocka</strong> passar på din <strong>17 cm-handled</strong>? Eller om 48 mm lug-to-lug kommer att sticka ut? Klockstorleksjämföraren ger dig ett visuellt svar. Ange boettdiameter, lug-to-lug, tjocklek och handledsmått – verktyget ritar upp klockan i skala och färgar passformen från <span style="color:#22c55e">grön (utmärkt)</span> till <span style="color:#ef4444">röd (för stor)</span>. Fungerar med både <strong>metriska och imperiska enheter</strong>.' },
    { type: 'title', text: 'Ordlista – klockstorlekar', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Boettdiameter', definition: 'Klockboettens bredd mätt över urtavlan, exklusive kronan. Typiskt intervall: 34–46 mm. Det vanligast angivna måttet, men inte den enda faktorn för passform.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'Avståndet mellan de övre och nedre klackarna där bandet fästs. Detta avgör om klockan går utanför handleden. En 40 mm-klocka med 50 mm L2L upplevs som större än en 42 mm-klocka med 46 mm L2L.' },
        { term: 'Flat handledsbredd', definition: 'Bredden på handledens ovansida, till skillnad från omkretsen. Ungefär handledsomkrets / π minus 2–4 cm. Detta är det mått klockan faktiskt vilar på.' },
        { term: 'Kvot boett/handled', definition: 'Boettdiameter dividerat med handledsbredd. En kvot på 0,6–0,75 (60–75 %) anses vara den klassiska proportionella passformen.' },
      ]
    },

    { type: 'title', text: 'Vilken klockstorlek passar min handled?', level: 3 },
    {
      type: 'table', headers: ['Handledsomkrets', 'Flat bredd (cirka)', 'Ideal boettdiameter', 'Max Lug-to-Lug', 'Bäst för'], rows: [
        ['14–15 cm (5,5–5,9 tum)', '38–42 mm', '30–34 mm', '38–42 mm', 'Vintage- & dressklockor'],
        ['15–16 cm (5,9–6,3 tum)', '40–44 mm', '34–36 mm', '40–44 mm', 'Små klassiska klockor'],
        ['16–17 cm (6,3–6,7 tum)', '42–46 mm', '36–39 mm', '42–46 mm', 'Vardaglig mångsidig storlek'],
        ['17–18 cm (6,7–7,1 tum)', '44–48 mm', '38–42 mm', '44–48 mm', 'Sötpunkt för de flesta märken'],
        ['18–19 cm (7,1–7,5 tum)', '46–50 mm', '40–44 mm', '46–50 mm', 'Dykarklockor & GMT'],
        ['19–20 cm (7,5–7,9 tum)', '48–52 mm', '42–46 mm', '48–52 mm', 'Verktygs- & pilotklockor'],
        ['20–21 cm (7,9–8,3 tum)', '50–54 mm', '44–48 mm', '50–54 mm', 'Överdimensionerade & fliegerklockor'],
      ]
    },

    { type: 'title', text: 'Så mäter du din handled för en klocka', level: 3 },
    {
      type: 'list', items: [
        'Linda ett måttband runt handleden precis bakom handledsbenet (ulna). Det ska sitta åt men inte klämma.',
        'Har du inget måttband – använd ett snöre eller en kabel, markera överlappet och mät mot en linjal.',
        'Anteckna måttet i centimeter eller tum. Genomsnittliga manshandledar är 17–19 cm (6,7–7,5 tum); kvinnohandledar 14–16 cm (5,5–6,3 tum).',
        'För att uppskatta din flata handledsbredd, dra ifrån 2–4 cm från omkretsen eller använd verktygets automatiska uppskattning.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug–to–Lug är den verkliga passformsbegränsningen', icon: 'mdi:ruler', html: 'De flesta fokuserar på <strong>boettdiametern</strong>, men <strong>lug-to-lug</strong> avgör om en klocka passar din handled. En klocka med 48 mm L2L på en 55 mm flat handled (17 cm omkrets) upptar 87 % av handledsbredden. Över 65 % börjar klackarna närma sig handledens kant. <strong>Kolla alltid L2L först.</strong>' },

    { type: 'tip', title: 'Centimeter eller tum? Använd det du kan', html: 'Verktyget stöder både metriska och imperiska enheter. Mät din handled i det system du använder till vardags. Klockors boettmått anges <strong>alltid i millimeter</strong> (även i USA), så diametrar och L2L förblir i mm – endast handledsmåttet växlar. Detta speglar hur klockindustrin fungerar.' },

    {
      type: 'summary', title: 'Snabb checklista inför köp', items: [
        'Mät din handledsomkrets och ange den i verktyget.',
        'Slå upp klockans lug-to-lug – inte bara boettdiametern.',
        'Klockan bör uppta 60–75 % av din flata handledsbredd för en klassisk passform.',
        'Om klackarna går utanför handledskanterna kommer klockan att kännas för stor oavsett diameter.',
        'Använd verktyget för att jämföra flera klockor sida vid sida innan du bestämmer dig.',
      ]
    },
  ],
  faq: [
    {
      question: 'Hur mäter jag min handled för en klocka?',
      answer: 'Använd ett måttband runt handledsbenet. Alternativt snurra ett snöre, markera överlappet och mät med en linjal. Genomsnittet är 17–19 cm för män, 14–16 cm för kvinnor.',
    },
    {
      question: 'Vad är lug-to-lug och varför spelar det roll?',
      answer: 'Lug-to-lug är avståndet mellan de övre och nedre klackarna. Det avgör om klockan går utanför handleden. En klocka med 48 mm lug-to-lug på en 17 cm-handled (≈55 mm flat bredd) är proportionerlig vid 87 %. Över 65 % börjar den sticka ut.',
    },
    {
      question: 'Vilken klockstorlek passar en 17 cm-handled?',
      answer: 'En 17 cm-handled (≈55 mm flat bredd) rymmer bekvämt klockor med 36–42 mm diameter och 44–50 mm lug-to-lug. Sötpunkten är 38–40 mm med 46–48 mm L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ange handledsstorlek',
      text: 'Skriv in din handledsomkrets i centimeter. Verktyget uppdaterar den visuella handledssilhuetten.',
    },
    {
      name: 'Ange klockans mått',
      text: 'Fyll i boettdiameter, lug-to-lug och tjocklek i millimeter.',
    },
    {
      name: 'Lägg till och jämför',
      text: 'Klicka på "Lägg till klocka" för att spara den. Lägg till flera klockor och växla mellan dem för att jämföra passform.',
    },
    {
      name: 'Läs av färgen',
      text: 'Grön = utmärkt, gul = på gränsen, röd = för stor för din handled.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur mäter jag min handled för en klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Använd ett måttband runt handledsbenet. Genomsnittet är 17–19 cm för män, 14–16 cm för kvinnor.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad är lug-to-lug och varför spelar det roll?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-lug är avståndet mellan de övre och nedre klackarna. Det avgör om klockan går utanför handleden.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vilken klockstorlek passar en 17 cm-handled?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En 17 cm-handled rymmer 36–42 mm diameter med 44–50 mm lug-to-lug. Sötpunkten är 38–40 mm med 46–48 mm L2L.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Klockstorleksjämförare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så jämför du klockstorlekar',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ange handledsstorlek',
          'text': 'Skriv in din handledsomkrets i centimeter.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ange klockans mått',
          'text': 'Fyll i boettdiameter, lug-to-lug och tjocklek.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lägg till och jämför',
          'text': 'Klicka på Lägg till klocka för att spara. Lägg till flera klockor för att jämföra.',
        },
      ],
    },
  ],
};

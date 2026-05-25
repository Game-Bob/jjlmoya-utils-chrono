import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-fargsimulator',
  title: 'Lume–färgsimulator – visualisera klockors självlysande färger',
  description: 'Visualisera olika lume-färger i realtid. Jämför C1, C3, BGW9, LumiNova med mera i olika ljusstyrkor.',
  ui: {
    title: 'Lume–färgsimulator',
    lumeType: 'Lume-typ',
    brightness: 'Omgivande ljusstyrka',
    dark: 'Mörkt',
    light: 'Ljust',
    color: 'Färg',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Typ',
    description: 'Beskrivning',
    c1Name: 'C1',
    c1Desc: 'Grön (klassisk)',
    c3Name: 'C3',
    c3Desc: 'Supergrön',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Isblå',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Varmvit',
    vintageName: 'Vintage',
    vintageDesc: 'Åldrat radium',
    orangeName: 'Orange',
    orangeDesc: 'Dykarorange',
    blueName: 'Blå',
    blueDesc: 'Djupblå',
    greenName: 'Grön',
    greenDesc: 'Neongrön',
    tipTitle: 'Tips',
    tipContent: 'Lume-ljusstyrkan beror på pigmentkvaliteten och hur mycket ljus det absorberat. BGW9 lyser blåvitt och är starkast, medan vintage-lume har ett varmt, svagt sken.',
  },
  seo: [
    { type: 'title', text: 'Klockors lume-färgsimulator – visualisera glöd i realtid', level: 2 },
    { type: 'paragraph', html: 'Lume är ett av de mest personliga valen inom klockintresse. Föredrar du det klassiska gröna skenet från <strong>C1 Super-LumiNova</strong> eller det isblå från <strong>BGW9</strong>? Denna simulator visar hur varje lume-typ ser ut i olika ljusförhållanden – från fullt dagsljus till becksvart – med exakta <strong>HEX- och RGB-värden</strong> för varje nyans.' },
    { type: 'title', text: 'Super-LumiNova-typer jämförda', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Dagsljusfärg', 'Glödfärg', 'Ljusstyrka', 'Bäst för'], rows: [
        ['C1', 'Ljusgrön', 'Grön', 'Medel', 'Dressklockor, originalestetik'],
        ['C3', 'Gulgrön', 'Klart grön', 'Högst', 'Dykarklockor, verktygsklockor'],
        ['BGW9', 'Vitaktig', 'Isblå', 'Hög', 'Moderna sportklockor, ren look'],
        ['LumiNova', 'Varm beige', 'Varmvit', 'Låg–medel', 'Budgetvänlig lume'],
        ['Vintage', 'Creme / solbränd', 'Varmt svag', 'Låg', 'Heritage-inspirerade klockor'],
        ['Orange', 'Orange', 'Orange', 'Medel', 'Dykaraccenter, retro-dykare'],
        ['Blå', 'Ljusblå', 'Blå', 'Medel', 'Designurtavlor, modeklockor'],
        ['Grön', 'Klart grön', 'Grön', 'Hög', 'Militärinspirerade klockor'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 – vilken ska du välja?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Klassisk grön', icon: 'mdi:lightbulb-on', description: 'Den ursprungliga Super-LumiNova-formuleringen. Lyser grönt med medelstark ljusstyrka. Ett säkert, klassiskt val som passar alla klockstilar.', points: ['Medelstark, synlig i 4–6 h', 'Grönt sken, varm ton', 'Mest prisvärd formulering', 'Vanlig i instegsklockor'], highlight: false },
        { title: 'C3 Supergrön', icon: 'mdi:lightning-bolt', description: 'Den starkaste gröna lume som finns. Används i professionella dykarklockor där läsbarhet under vatten är avgörande. Maximalt sken med minimal laddning.', points: ['Högst ljusstyrka, synlig i 8–12 h', 'Gulgrön i dagsljus', 'Föredras av Seiko, Citizen, Omega', 'Bäst för läsbarhet i svagt ljus'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Isblå', icon: 'mdi:snowflake', description: 'Lyser blåvitt istället för grönt. Något svagare än C3 men omtyckt för sin rena, moderna estetik. Populär i lyxiga sportklockor.', points: ['Hög ljusstyrka, synlig i 6–10 h', 'Blåvitt sken, neutral ton', 'Ren, modern look i dagsljus', 'Används av Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage radium–stil', icon: 'mdi:fire', description: 'Varm beige/creme-ton som efterliknar 1960-talets radium-lume. Avsiktligt svagare för autentisk känsla. Glöden är varm, subtil och åldras vackert.', points: ['Låg ljusstyrka, synlig i 2–4 h', 'Varm creme till svagt bärnsten', 'Åldrat utseende utan radioaktivitet', 'Populär i heritage-återutgåvor'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Ljusstyrka är inte allt', icon: 'mdi:palette', html: 'Den starkaste lume (C3) är inte alltid det bästa valet. <strong>BGW9</strong> byter en liten skillnad i ljusstyrka mot en mer neutral, modern look som många samlare föredrar. <strong>Vintage-lume</strong> prioriterar tidsenlig estetik framför prestanda. Välj baserat på vad som betyder mest för dig: <strong>maximalt sken, modern estetik eller historisk autenticitet.</strong>' },
    { type: 'title', text: 'Hur lume fungerar – vetenskapen bakom glöden', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Ett strontiumaluminatbaserat fotoluminescerande pigment. Absorberar UV- och synligt ljus och återutsänder det som ett sken. Icke-radioaktivt och ofarligt. Ursprungligen utvecklat av Nemoto & Co 1993.' },
        { term: 'Laddningstid', definition: 'Den tid ljusexponering behövs för att mätta lumepigmentet. Full laddning tar 10–30 minuter i direkt solljus eller UV. Längre laddning = längre och starkare sken.' },
        { term: 'Glödtid', definition: 'Hur länge lume förblir synlig efter laddning. Kvalitets-Super-LumiNova lyser synligt i 6–12 timmar. Den starkaste perioden är de första 30 minuterna efter laddning.' },
        { term: 'Pigmentkvalitet', definition: 'Kvaliteten på strontiumaluminatkristallerna. Högre kvalitet (C3, BGW9) använder större, mer enhetliga kristaller för starkare och längre sken. Lägre kvalitet (LumiNova) använder mindre kristaller och är svagare.' },
      ]
    },
    {
      type: 'summary', title: 'Snabbguide för lume–val', items: [
        'För maximal läsbarhet i mörker: välj C3 (starkast grön) eller BGW9 (starkast blåvit).',
        'För en modern lyxlook: BGW9 är den nuvarande favoriten bland högklassiga klockmärken.',
        'För vintage- och heritage-byggen: använd Vintage eller Orange för tidsenlig värme.',
        'C1 är allround: bra ljusstyrka, klassiskt grön, prisvärd.',
        'Lumens färg i dagsljus skiljer sig markant från glödfärgen – använd simulatorn för att jämföra båda.',
      ]
    },
  ],
  faq: [
    {
      question: 'Vilken lume är starkast?',
      answer: 'C3 Super-LumiNova är den starkaste gröna formuleringen. BGW9 är den starkaste blåvita. Båda är betydligt starkare än C1 eller standard LumiNova.',
    },
    {
      question: 'Vad är BGW9-lume?',
      answer: 'BGW9 är en Super-LumiNova-variant som lyser blåvitt istället för grönt. Den är något svagare än C3 men föredras av många för sitt rena, moderna utseende.',
    },
    {
      question: 'Glöder vintage-lume?',
      answer: 'Modern vintage-stil lume (beige/varm) glöder, men är avsiktligt svagare för att efterlikna åldrat radium. Avvägningen är estetisk autenticitet framför maximal ljusstyrka.',
    },
    {
      question: 'Hur länge håller lume?',
      answer: 'Efter full laddning under starkt ljus lyser kvalitets-Super-LumiNova synligt i 6–12 timmar. Den starkaste perioden är de första 30 minuterna.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Välj en lume-typ',
      text: 'Välj mellan C1, C3, BGW9, LumiNova, Vintage, Orange, Blå eller Grön.',
    },
    {
      name: 'Justera ljusstyrkan',
      text: 'Dra reglaget för omgivande ljusstyrka från dag (vänster) till natt (höger) för att se hur lume beter sig.',
    },
    {
      name: 'Läs av specifikationerna',
      text: 'Informationskortet visar exakta HEX- och RGB-värden för den aktuella färgen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Vilken lume är starkast?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova är den starkaste gröna. BGW9 är den starkaste blåvita.' },
        },
        {
          '@type': 'Question',
          'name': 'Vad är BGW9-lume?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 är en Super-LumiNova-variant som lyser blåvitt istället för grönt.' },
        },
        {
          '@type': 'Question',
          'name': 'Glöder vintage-lume?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Modern vintage-stil lume glöder men är avsiktligt svagare för att efterlikna åldrat radium.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume-färgsimulator',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så simulerar du lume-färger',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Välj en lume-typ',
          'text': 'Välj mellan C1, C3, BGW9, LumiNova eller andra förinställningar.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Justera ljusstyrkan',
          'text': 'Dra reglaget från dag till natt för att se lume-beteendet.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Läs av specifikationerna',
          'text': 'Informationskortet visar HEX- och RGB-värden för den aktuella färgen.',
        },
      ],
    },
  ],
};

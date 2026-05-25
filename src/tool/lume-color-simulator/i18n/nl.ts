import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-kleuren-simulator',
  title: 'Lume Color Simulator–horloge lume visualisator',
  description: 'Visualiseer verschillende lume-kleuren in realtime. Vergelijk C1, C3, BGW9, LumiNova en meer bij verschillende omgevingshelderheden.',
  ui: {
    title: 'Lume Color Simulator',
    lumeType: 'Lume-type',
    brightness: 'Omgevingshelderheid',
    dark: 'Donker',
    light: 'Licht',
    color: 'Kleur',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Type',
    description: 'Beschrijving',
    c1Name: 'C1',
    c1Desc: 'Groen (klassiek)',
    c3Name: 'C3',
    c3Desc: 'Supergroen',
    bgw9Name: 'BGW9',
    bgw9Desc: 'IJsblauw',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Warm wit',
    vintageName: 'Vintage',
    vintageDesc: 'Verouderd radium',
    orangeName: 'Oranje',
    orangeDesc: 'Duikeroranje',
    blueName: 'Blauw',
    blueDesc: 'Diepblauw',
    greenName: 'Groen',
    greenDesc: 'Neongroen',
    tipTitle: 'Tip',
    tipContent: 'De helderheid van lume hangt af van de pigmentkwaliteit en hoeveel licht het heeft geabsorbeerd. BGW9 gloeit blauwwit en is het helderst, terwijl vintage lume een warme, zwakke gloed heeft.',
  },
  seo: [
    { type: 'title', text: 'Watch Lume Color Simulator-real-time gloed visualisator', level: 2 },
    { type: 'paragraph', html: 'Lume is een van de meest persoonlijke keuzes bij het verzamelen van horloges. Geeft u de voorkeur aan de klassieke groene gloed van <strong>C1 Super-LumiNova</strong> of het ijzige blauw van <strong>BGW9</strong>? Deze simulator laat u zien hoe elk lumetype eruitziet bij verschillende helderheidsniveaus, van vol daglicht tot pikdonker, met exacte <strong>HEX- en RGB-waarden</strong> voor elke tint.' },
    { type: 'title', text: 'Super-LumiNova types vergeleken', level: 3 },
    {
      type: 'table', headers: ['Type', 'Dagkleur', 'Gloeikleur', 'Helderheid', 'Geschikt voor'], rows: [
        ['C1', 'Lichtgroen', 'Groen', 'Medium', 'Dress watches, originele uitstraling'],
        ['C3', 'Geelgroen', 'Heldergroen', 'Hoogste', 'Duikhorloges, gereedschapshorloges'],
        ['BGW9', 'Witachtig', 'IJsblauw', 'Hoog', 'Moderne sporthorloges, strakke look'],
        ['LumiNova', 'Warm beige', 'Warm wit', 'Laag-medium', 'Budgetvriendelijke lume'],
        ['Vintage', 'Creme / bruin', 'Warm gedimd', 'Laag', 'Heritage-stijl horloges'],
        ['Oranje', 'Oranje', 'Oranje', 'Medium', 'Duikeraccenten, retro duikers'],
        ['Blauw', 'Lichtblauw', 'Blauw', 'Medium', 'Designer wijzerplaten, modehorloges'],
        ['Groen', 'Heldergroen', 'Groen', 'Hoog', 'Militaire-stijl horloges'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9—welke moet u kiezen?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Klassiek Groen', icon: 'mdi:lightbulb-on', description: 'De originele Super-LumiNova-formulering. Gloeit groen met gemiddelde helderheid. Een veilige, klassieke keuze die bij elke horlogestijl past.', points: ['Medium helderheid, 4–6u zichtbaar', 'Groene gloed, warme tint', 'Meest betaalbare formulering', 'Gebruikelijk in instapmodellen'], highlight: false },
        { title: 'C3 Supergroen', icon: 'mdi:lightning-bolt', description: 'De helderste groene lume beschikbaar. Gebruikt in professionele duikhorloges waar leesbaarheid onder water cruciaal is. Maximale gloed met minimale lading.', points: ['Hoogste helderheid, 8–12u zichtbaar', 'Geelgroen bij daglicht', 'Verkoren door Seiko, Citizen, Omega', 'Beste voor leesbaarheid bij weinig licht'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 IJsblauw', icon: 'mdi:snowflake', description: 'Gloeit blauwwit in plaats van groen. Iets minder helder dan C3 maar favoriet vanwege de strakke, moderne uitstraling. Populair in luxe sporthorloges.', points: ['Hoge helderheid, 6–10u zichtbaar', 'Blauwwitte gloed, neutrale tint', 'Strakke, moderne look bij daglicht', 'Gebruikt door Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage radiumstijl', icon: 'mdi:fire', description: 'Warme beige/creme tint die de radium lume uit de jaren \'60 nabootst. Opzettelijk gedimd voor esthetische authenticiteit. De gloed is warm, subtiel en veroudert prachtig.', points: ['Lage helderheid, 2–4u zichtbaar', 'Warm creme tot gedimd amber', 'Verouderd uiterlijk zonder radioactiviteit', 'Populair in heritage heruitgaven'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Helderheid is niet alles', icon: 'mdi:palette', html: 'De helderste lume (C3) is niet altijd de beste keuze. <strong>BGW9</strong> ruilt een klein verschil in helderheid in voor een neutralere, modernere look waar veel verzamelaars de voorkeur aan geven. <strong>Vintage lume</strong> geeft prioriteit aan periodegetrouwe esthetiek boven prestaties. Kies op basis van wat voor u het belangrijkst is: <strong>maximale gloed, moderne esthetiek of heritage authenticiteit.</strong>' },
    { type: 'title', text: 'Hoe lume werkt: de wetenschap achter de gloed', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Een fotoluminescent pigment op basis van strontiumaluminaat. Het absorbeert UV- en zichtbaar licht en zendt het opnieuw uit als gloed. Niet-radioactief en veilig. Oorspronkelijk ontwikkeld door Nemoto & Co. in 1993.' },
        { term: 'Laadtijd', definition: 'De duur van blootstelling aan licht die nodig is om het lumepigment te verzadigen. Een volledige lading duurt 10–30 minuten onder direct zonlicht of UV. Langere lading = langere en helderdere gloed.' },
        { term: 'Gloeiduur', definition: 'Hoe lang de lume zichtbaar blijft na het laden. Kwalitatieve Super-LumiNova gloeit zichtbaar gedurende 6–12 uur. De helderste periode is de eerste 30 minuten na het laden.' },
        { term: 'Pigmentkwaliteit', definition: 'De kwaliteit van de strontiumaluminaatkristallen. Hogere kwaliteit pigmenten (C3, BGW9) gebruiken grotere, meer uniforme kristallen voor een helderdere en langere gloed. Lagere kwaliteiten (LumiNova) gebruiken kleinere kristallen en zijn zwakker.' },
      ]
    },
    {
      type: 'summary', title: 'Snelle gids voor lumekeuze', items: [
        'Voor maximale leesbaarheid in het donker: kies C3 (helderste groen) of BGW9 (helderste blauwwit).',
        'Voor een moderne luxe look: BGW9 is momenteel favoriet bij high-end horlogemerken.',
        'Voor vintage/heritage builds: gebruik Vintage of Oranje voor periodegetrouwe warmte.',
        'C1 is de alleskunner: goede helderheid, klassiek groen, betaalbaar.',
        'De lumekleur bij daglicht verschilt aanzienlijk van de gloeikleur—gebruik de simulator om beide te vergelijken.',
      ]
    },
  ],
  faq: [
    {
      question: 'Welke lume is het helderst?',
      answer: 'C3 Super-LumiNova is de helderste groene formulering. BGW9 is de helderste blauwwitte. Beide zijn aanzienlijk helderder dan C1 of standaard LumiNova.',
    },
    {
      question: 'Wat is BGW9 lume?',
      answer: 'BGW9 is een Super-LumiNova variant die blauwwit gloeit in plaats van groen. Het is iets minder helder dan C3 maar wordt door velen verkozen vanwege het strakke, moderne uiterlijk.',
    },
    {
      question: 'Gloeit vintage lume?',
      answer: 'Moderne vintage-stijl lume (beige/warm) gloeit maar is opzettelijk gedimd om verouderd radium na te bootsen. De afweging is esthetische authenticiteit boven maximale helderheid.',
    },
    {
      question: 'Hoe lang blijft lume zichtbaar?',
      answer: 'Na een volledige lading onder helder licht, gloeit kwalitatieve Super-LumiNova zichtbaar gedurende 6–12 uur. De helderste periode is de eerste 30 minuten.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer een lumetype',
      text: 'Kies uit C1, C3, BGW9, LumiNova, Vintage, Oranje, Blauw of Groen voorinstellingen.',
    },
    {
      name: 'Pas helderheid aan',
      text: 'Schuif de omgevingshelderheidsregelaar van dag (links) naar nacht (rechts) om te zien hoe de lume zich gedraagt.',
    },
    {
      name: 'Lees de specificaties',
      text: 'De infokaart toont de exacte HEX- en RGB-waarden van de huidige kleur.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Welke lume is het helderst?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova is het helderste groen. BGW9 is het helderste blauwwit.' },
        },
        {
          '@type': 'Question',
          'name': 'Wat is BGW9 lume?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 is een Super-LumiNova variant die blauwwit gloeit in plaats van groen.' },
        },
        {
          '@type': 'Question',
          'name': 'Gloeit vintage lume?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Moderne vintage-stijl lume gloeit maar is opzettelijk gedimd om verouderd radium na te bootsen.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe lumekleuren simuleren',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer een lumetype',
          'text': 'Kies uit C1, C3, BGW9, LumiNova of andere voorinstellingen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pas helderheid aan',
          'text': 'Schuif helderheid van dag naar nacht om het lume-gedrag te zien.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees de specificaties',
          'text': 'De infokaart toont HEX- en RGB-waarden van de huidige kleur.',
        },
      ],
    },
  ],
};


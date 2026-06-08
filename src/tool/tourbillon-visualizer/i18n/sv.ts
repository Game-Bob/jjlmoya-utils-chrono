import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Vad är en tourbillon?',
    answer: 'En tourbillon är en roterande bur som innehåller gången (balanshjulet, ankaret och gånghjulet) i en mekanisk klocka. Den roterar kontinuerligt - vanligtvis en gång per minut - för att medelvärdesutjämna positionsfel orsakade av gravitationen, vilket förbättrar noggrannheten.',
  },
  {
    question: 'Vad är skillnaden mellan en klassisk och en flygande tourbillon?',
    answer: 'En klassisk tourbillon stöds av både en övre och nedre bro, medan en flygande tourbillon är fribärande underifrån utan synligt övre stöd. Flygande tourbillons erbjuder en fri sikt över den roterande gången och anses vara estetiskt mer krävande att konstruera.',
  },
  {
    question: 'Förbättrar en tourbillon verkligen noggrannheten?',
    answer: 'I moderna armbandsur är noggrannhetsfördelen minimal eftersom positionsfel redan är väl kompenserade. I fickur (för vilka Breguet uppfann tourbillonen 1801) eliminerade den konstanta rotationen dock gångskillnader mellan vertikala positioner. Idag är tourbillons främst en demonstration av högt urmakerihantverk.',
  },
];

const howTo = [
  {
    name: 'Ändra tourbillon-typ',
    text: 'Växla mellan klassisk och flygande tourbillon för att se den strukturella skillnaden. Den flygande tourbillonen har ingen övre bro, vilket avslöjar hela buren.',
  },
  {
    name: 'Justera slagfrekvens',
    text: 'Prova olika slagfrekvenser (18k, 28.8k, 36k VPH) för att se hur balanshjulets hastighet och gånghjulets rotation förändras.',
  },
  {
    name: 'Kontrollera hastighet',
    text: 'Använd hastighetsreglagen för att sakta ner och observera den intrikata dansen av gången, eller snabba upp för att se hela burrotationen.',
  },
];

const title = 'Tourbillon: Konsten av den Roterande Gången';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualiserare',
  title,
  description: 'Upplev den fascinerande konsten av tourbillonen - en roterande bur som rymmer gången. Se balanshjulet oscillera, hårfjädern andas och buren rotera i en elegant mekanisk balett.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Typ',
    typeClassic: 'Klassisk',
    typeFlying: 'Flygande',
    speedLabel: 'Hastighet',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausad',
    beatRateLabel: 'Slagfrekvens',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Bur',
    showLabelsLabel: 'Etiketter',
    step1: 'Växla mellan klassisk och flygande tourbillon för att jämföra deras arkitektur.',
    step2: 'Justera slagfrekvensen för att se hur den påverkar gångens rytm.',
    step3: 'Använd hastighetsreglagen för att observera den precisa mekaniska dansen i valfri takt.',
    tipTitle: 'Tips',
    tipContent: 'Breguet uppfann tourbillonen 1801. Ordet "tourbillon" betyder "virvelvind" på franska och beskriver den roterande burens utseende i rörelse.',
    balanceLabel: 'Balans',
    escapeLabel: 'Gång',
    palletLabel: 'Ankare',
    cageLabel: 'Bur',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Animerad Gångkonst', level: 2 },
    { type: 'paragraph', html: '<strong>Tourbillonen</strong> är en av de mest fängslande komplikationerna inom haute horlogerie. Denna interaktiva visualiserare väcker den roterande gången till liv med en detaljerad animerad återgivning av balanshjulet, hårfjädern, ankaret, gånghjulet och den ikoniska roterande buren. Utforska den mekaniska poesin i Breguets mästerverk.' },
    { type: 'title', text: 'Hur en tourbillon fungerar', level: 3 },
    { type: 'paragraph', html: 'En tourbillon rymmer hela gången - <strong>balanshjul, hårfjäder, ankare och gånghjul</strong> - inuti en roterande bur. Buren fullbordar vanligtvis en rotation per minut och ändrar kontinuerligt gångens position i förhållande till gravitationen. Detta medelvärdesutjämnar positionella tidsfel, ett koncept som var revolutionerande när Abraham-Louis Breguet patenterade det 1801. <strong>Balanshjulet</strong> oscillerar med klockans slagfrekvens (vanligtvis 4 Hz / 28 800 vph), medan <strong>gånghjulet</strong> avancerar en tand per slag och skapar den karakteristiska tickande rörelsen.' },
    { type: 'title', text: 'Klassisk vs Flygande Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Egenskap', 'Klassisk Tourbillon', 'Flygande Tourbillon'], rows: [
        ['Övre stöd', 'Synlig bro', 'Ingen (fribärande)'],
        ['Siktbarhet', 'Delvis (bro i vägen)', 'Full (obstruerad)'],
        ['Svårighet', 'Hög', 'Extremt hög'],
        ['Uppfunnen', '1801 (Breguet)', '1920-talet (Alfred Helwig)'],
        ['Vanlig i', 'Traditionella märken', 'Moderna oberoende'],
      ]
    },
    { type: 'title', text: 'Slagfrekvensjämförelse', level: 3 },
    {
      type: 'table', headers: ['Frekvens (vph)', 'Frekvens', 'Gånghjul varv/min', 'Slag/s', 'Typisk användning'], rows: [
        ['18 000', '2,5 Hz', '20 varv/min', '5', 'Vintage fickur'],
        ['28 800', '4 Hz', '32 varv/min', '8', 'Modern standard (ETA, Rolex)'],
        ['36 000', '5 Hz', '40 varv/min', '10', 'Högfrekvent (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Mekanisk Konst i Rörelse', icon: 'mdi:rotate-orbit', badge: 'URMAKERI', html: 'Denna visualiserare är en konstnärlig tolkning av en tourbillon-gång. Burrotationen, balansoscillationen, hårfjäderns andning, ankarrörelsen och gånghjulets steg är synkroniserade enligt verkliga mekaniska relationer. Använd kontrollerna för att utforska detta mästerverk av mikromekanisk ingenjörskonst.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

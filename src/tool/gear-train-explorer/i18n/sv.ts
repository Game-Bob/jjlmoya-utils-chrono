import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Vad är en kugghjulsväxel i en klocka?',
    answer: 'En kugghjulsväxel är en serie sammankopplade kugghjul som överför kraft från fjäderhuset till gången. Varje kugghjulspar ger ett specifikt reduktionsförhållande, vilket saktar ner den snabba frigöringen av fjäderenergi till kontrollerade, tidsinställda impulser.',
  },
  {
    question: 'Varför har olika urverk olika utväxlingsförhållanden?',
    answer: 'Utväxlingsförhållanden bestäms av antalet tänder på varje hjul och drev. Urverk med olika slagfrekvenser (t.ex. 28 800 vph vs 36 000 vph) har olika gånghjulshastigheter och kugghjulskonfigurationer för att upprätthålla noggrann tidmätning samtidigt som de anpassar sig till balanshjulets frekvens.',
  },
  {
    question: 'Vad är skillnaden mellan ett hjul och ett drev?',
    answer: 'Inom urmakeriet är ett "hjul" det större kugghjulet med många tänder som driver nästa komponent. Ett "drev" är det mindre kugghjulet (vanligtvis 6-12 tänder) som drivs. Tillsammans bildar ett hjul och drev ett kugghjulspar som ändrar rotationshastighet och vridmoment.',
  },
];

const howTo = [
  {
    name: 'Välj ett urverk',
    text: 'Välj mellan standard (28 800 vph), högfrekvent (36 000 vph El Primero) eller vintage (18 000 vph) urverk. Varje har unika utväxlingsförhållanden och slagfrekvenser.',
  },
  {
    name: 'Observera kugghjulsväxeln',
    text: 'Se de animerade kugghjulen snurra i proportionella hastigheter. Fjäderhuset vrider sig långsamt medan gånghjulet snurrar snabbt. Hovra över ett kugghjul eller datakort för detaljerad information.',
  },
  {
    name: 'Justera hastigheten',
    text: 'Använd hastighetsreglagen för att sakta ner, snabba upp eller pausa animationen. Detta hjälper till att visualisera hur varje kugghjul bidrar till kraftöverföringskedjan.',
  },
];

const title = 'Växeltrain Utforskare: Interaktivt Urmakeridiagram';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'vaxeltrain-utforskare',
  title,
  description: 'Utforska det mekaniska hjärtat av en klocka med en animerad visualisering av kugghjulsväxeln. Se fjäderhuset, centrumhjulet, tredje hjulet, fjärde hjulet, gånghjulet, ankaret och balanshjulet i rörelse.',
  ui: {
    title: 'Växeltrain Utforskare',
    barrelLabel: 'Fjäderhus',
    centerWheelLabel: 'Centrumhjul',
    thirdWheelLabel: 'Tredje Hjul',
    fourthWheelLabel: 'Fjärde Hjul',
    escapeWheelLabel: 'Gånghjul',
    palletForkLabel: 'Ankare',
    balanceWheelLabel: 'Balanshjul',
    rpmLabel: 'varv/min',
    teethLabel: 'tänder',
    gearRatioLabel: 'Förhållande',
    powerFlowLabel: 'Kraftflöde',
    movementLabel: 'Urverk',
    speedLabel: 'Hastighet',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausad',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Välj ett urverkskaliber för att se dess unika utväxlingsförhållanden och slagfrekvens.',
    step2: 'Hovra över ett kugghjul eller datakort för att markera dess position i kraftflödet.',
    step3: 'Justera animationshastigheten för att studera hur varje hjul överför kraft genom växeln.',
    tipTitle: 'Tips',
    tipContent: 'Kugghjulsväxeln reducerar fjäderns snabba energiutsläpp till en kontrollerad oscillation. Ett typiskt fjäderhus roterar en gång var 7-8:e timme, medan gånghjulet snurrar i 32 varv/min (vid 28 800 vph) — en reduktion på över 15 000:1.',
  },
  seo: [
    { type: 'title', text: 'Interaktiv Växeltrain Utforskare', level: 2 },
    { type: 'paragraph', html: '<strong>Kugghjulsväxeln</strong> är den mekaniska ryggraden i varje mekanisk klocka. Detta interaktiva verktyg visualiserar hur kraft flödar från fjäderhuset genom centrumhjulet, tredje hjulet, fjärde hjulet och gånghjulet till ankaret och balanshjulet. Se varje kugghjul rotera i sin proportionella hastighet och förstå hur utväxlingsförhållanden bestämmer tidmätningen.' },
    { type: 'title', text: 'Hur en kugghjulsväxel fungerar', level: 3 },
    { type: 'paragraph', html: 'En kugghjulsväxel i en klocka består av en serie <strong>hjul</strong> (stora kugghjul) och <strong>drev</strong> (små kugghjul) som överför kraft samtidigt som de minskar hastigheten. <strong>Fjäderhuset</strong> innehåller drivfjädern och roterar långsamt, vilket driver <strong>centrumhjulet</strong> som roterar en gång i timmen (för minutvisaren). <strong>Tredje hjulet</strong> och <strong>fjärde hjulet</strong> (sekundhjulet) ökar ytterligare rotationshastigheten. Slutligen frigör <strong>gånghjulet</strong> kraft i kontrollerade tick till <strong>ankaret</strong>, som växelvis låser och låser upp gånghjulet och skickar impulser till <strong>balanshjulet</strong>. Balanshjulet oscillerar med en precis frekvens — vanligtvis 4 Hz (28 800 vibrationer per timme) — och reglerar klockans gång.' },
    { type: 'title', text: 'Utväxlingsförhållanden och Kraftöverföring', level: 3 },
    {
      type: 'table', headers: ['Komponent', 'Typiska tänder', 'varv/min (28 800 vph)', 'Förhållande från föregående'], rows: [
        ['Fjäderhus', '72', '0,002 (1 varv / 8 h)', '-'],
        ['Centrumhjul', '60', '0,0167 (1 varv / h)', '~7,2:1'],
        ['Tredje Hjul', '50', '0,125 (1 varv / 8 min)', '~5:1'],
        ['Fjärde Hjul', '60', '1 (1 varv / min)', '6:1'],
        ['Gånghjul', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Urverksjämförelser', level: 3 },
    {
      type: 'table', headers: ['Urverk', 'Slagfrekvens', 'Balansfrekvens', 'Gånghjul varv/min', 'Typisk noggrannhet'], rows: [
        ['Vintage (18 000 vph)', '18 000 sph', '2,5 Hz', '20 varv/min', '±15-30 s/d'],
        ['Standard (28 800 vph)', '28 800 sph', '4 Hz', '32 varv/min', '±5-15 s/d'],
        ['Högfrekvent (36 000 vph)', '36 000 sph', '5 Hz', '40 varv/min', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktivt Lärverktyg', icon: 'mdi:cog-clockwise', badge: 'URMAKERI', html: 'Detta verktyg använder ungefärliga utväxlingsförhållanden representativa för vanliga schweiziska ankargångar. Faktiska förhållanden varierar beroende på kaliber. Använd urverksförinställningarna för att jämföra hur olika slagfrekvenser påverkar kugghjulsväxelns dynamik.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};


import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Wat is een tandwieltrein in een horloge?',
    answer: 'Een tandwieltrein is een reeks in elkaar grijpende tandwielen die kracht overbrengen van het veerhuis naar het echappement. Elk tandwielpaar zorgt voor een specifieke overbrengingsverhouding, waardoor de snelle vrijgave van veerenergie wordt vertraagd tot gecontroleerde, getimede impulsen.',
  },
  {
    question: 'Waarom hebben verschillende uurwerken verschillende overbrengingsverhoudingen?',
    answer: 'Overbrengingsverhoudingen worden bepaald door het aantal tanden op elk wiel en rondsel. Uurwerken met verschillende slagfrequenties (bijv. 28.800 vph vs 36.000 vph) hebben verschillende echappementsnelheden en tandwielconfiguraties om nauwkeurige tijdmeting te behouden terwijl ze de balansfrequentie accommoderen.',
  },
  {
    question: 'Wat is het verschil tussen een wiel en een rondsel?',
    answer: 'In de horlogerie is een "wiel" het grotere tandwiel met veel tanden dat het volgende onderdeel aandrijft. Een "rondsel" is het kleinere tandwiel (meestal 6-12 tanden) dat wordt aangedreven. Samen vormen een wiel en rondsel een tandwielpaar dat de rotatiesnelheid en het koppel verandert.',
  },
];

const howTo = [
  {
    name: 'Selecteer een uurwerk',
    text: 'Kies tussen standaard (28.800 vph), hoogfrequente (36.000 vph El Primero) of vintage (18.000 vph) uurwerken. Elk heeft unieke overbrengingsverhoudingen en slagfrequenties.',
  },
  {
    name: 'Observeer de tandwieltrein',
    text: 'Bekijk de geanimeerde tandwielen draaien op proportionele snelheden. Het veerhuis draait langzaam terwijl het echappement snel ronddraait. Beweeg over een tandwiel of gegevenskaart voor gedetailleerde informatie.',
  },
  {
    name: 'Pas de snelheid aan',
    text: 'Gebruik de snelheidsregelaars om de animatie te vertragen, versnellen of pauzeren. Dit helpt te visualiseren hoe elk tandwiel bijdraagt aan de krachtoverbrengingsketen.',
  },
];

const title = 'Tandwieltrein Verkenner: Interactief Horlogerie Diagram';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'tandwiel-trein-verkenner',
  title,
  description: 'Verken het mechanische hart van een horloge met een geanimeerde tandwieltreinvisualisatie. Zie het veerhuis, het centrale wiel, het derde wiel, het vierde wiel, het echappement, de anker en het balanswiel in beweging.',
  ui: {
    title: 'Tandwieltrein Verkenner',
    barrelLabel: 'Veerhuis',
    centerWheelLabel: 'Centraal Wiel',
    thirdWheelLabel: 'Derde Wiel',
    fourthWheelLabel: 'Vierde Wiel',
    escapeWheelLabel: 'Echappement',
    palletForkLabel: 'Anker',
    balanceWheelLabel: 'Balanswiel',
    rpmLabel: 'tpm',
    teethLabel: 'tanden',
    gearRatioLabel: 'Verhouding',
    powerFlowLabel: 'Krachtstroom',
    movementLabel: 'Uurwerk',
    speedLabel: 'Snelheid',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Gepauzeerd',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Selecteer een uurwerkkaliber om zijn unieke overbrengingsverhoudingen en slagfrequentie te zien.',
    step2: 'Beweeg over een tandwiel of gegevenskaart om zijn positie in de krachtstroom te markeren.',
    step3: 'Pas de animatiesnelheid aan om te bestuderen hoe elk wiel kracht door de trein overbrengt.',
    tipTitle: 'Tip',
    tipContent: 'De tandwieltrein reduceert de snelle energieafgifte van de veer tot een gecontroleerde oscillatie. Een typisch veerhuis draait eenmaal per 7-8 uur, terwijl het echappement draait op 32 tpm (bij 28.800 vph) — een reductie van meer dan 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Interactieve Tandwieltrein Verkenner', level: 2 },
    { type: 'paragraph', html: 'De <strong>tandwieltrein</strong> is de mechanische ruggengraat van elk mechanisch horloge. Deze interactieve tool visualiseert hoe kracht stroomt van het veerhuis via het centrale wiel, derde wiel, vierde wiel en echappement naar de anker en het balanswiel. Zie elk tandwiel draaien op zijn proportionele snelheid en begrijp hoe overbrengingsverhoudingen de tijdmeting bepalen.' },
    { type: 'title', text: 'Hoe een tandwieltrein werkt', level: 3 },
    { type: 'paragraph', html: 'Een tandwieltrein van een horloge bestaat uit een reeks <strong>wielen</strong> (grote tandwielen) en <strong>rondsels</strong> (kleine tandwielen) die kracht overbrengen terwijl ze de snelheid verminderen. Het <strong>veerhuis</strong> bevat de drijfveer en draait langzaam, het <strong>centrale wiel</strong> aandrijvend dat eenmaal per uur draait (voor de minutenwijzer). Het <strong>derde wiel</strong> en <strong>vierde wiel</strong> (secondenwiel) verhogen verder de rotatiesnelheid. Ten slotte geeft het <strong>echappement</strong> kracht vrij in gecontroleerde tikken naar de <strong>ankergaffel</strong>, die afwisselend het echappement blokkeert en ontgrendelt, impulsen sturend naar het <strong>balanswiel</strong>. Het balanswiel oscilleert op een precieze frequentie — typisch 4 Hz (28.800 trillingen per uur) — en reguleert de gang van het horloge.' },
    { type: 'title', text: 'Overbrengingsverhoudingen en Krachtoverbrenging', level: 3 },
    {
      type: 'table', headers: ['Component', 'Typische tanden', 'tpm (28.800 vph)', 'Verhouding vorige'], rows: [
        ['Veerhuis', '72', '0,002 (1 omw / 8 h)', '-'],
        ['Centraal Wiel', '60', '0,0167 (1 omw / h)', '~7,2:1'],
        ['Derde Wiel', '50', '0,125 (1 omw / 8 min)', '~5:1'],
        ['Vierde Wiel', '60', '1 (1 omw / min)', '6:1'],
        ['Echappement', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Uurwerk Vergelijkingen', level: 3 },
    {
      type: 'table', headers: ['Uurwerk', 'Slagfrequentie', 'Balansfrequentie', 'Echappement tpm', 'Typische nauwkeurigheid'], rows: [
        ['Vintage (18.000 vph)', '18.000 sph', '2,5 Hz', '20 tpm', '±15-30 s/d'],
        ['Standaard (28.800 vph)', '28.800 sph', '4 Hz', '32 tpm', '±5-15 s/d'],
        ['Hoogfrequent (36.000 vph)', '36.000 sph', '5 Hz', '40 tpm', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interactief Leerhulpmiddel', icon: 'mdi:cog-clockwise', badge: 'HORLOGERIE', html: 'Deze tool gebruikt geschatte overbrengingsverhoudingen die representatief zijn voor gangbare Zwitserse anker-echappementen. Werkelijke verhoudingen variëren per kaliber. Gebruik de uurwerkpresets om te vergelijken hoe verschillende slagfrequenties de dynamiek van de tandwieltrein beïnvloeden.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};


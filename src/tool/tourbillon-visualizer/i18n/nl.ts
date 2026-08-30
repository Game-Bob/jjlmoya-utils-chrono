import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Wat is een tourbillon?',
    answer: 'Een tourbillon is een roterende kooi die het echappement (balanswiel, anker en echappementwiel) van een mechanisch horloge bevat. Hij draait continu - meestal één keer per minuut - om positiefouten door de zwaartekracht te middelen en de nauwkeurigheid te verbeteren.',
  },
  {
    question: 'Wat is het verschil tussen een klassieke en een vliegende tourbillon?',
    answer: 'Een klassieke tourbillon wordt ondersteund door een boven- en onderbrug, terwijl een vliegende tourbillon van onderen wordt vrijgedragen zonder zichtbare bovensteuning. Vliegende tourbillons bieden een onbelemmerd zicht op het roterende echappement en worden als esthetisch veeleisender beschouwd om te bouwen.',
  },
  {
    question: 'Verbetert een tourbillon daadwerkelijk de nauwkeurigheid?',
    answer: 'In moderne polshorloges is het nauwkeurigheidsvoordeel minimaal omdat positiefouten al goed worden gecompenseerd. In zakhorloges (waarvoor Breguet de tourbillon in 1801 uitvond) elimineerde de constante rotatie echter de gangverschillen tussen verticale posities. Tegenwoordig zijn tourbillons vooral een demonstratie van hoog horlogeervakmanschap.',
  },
];

const howTo = [
  {
    name: 'Verander tourbillon type',
    text: 'Schakel tussen klassieke en vliegende tourbillon om het structurele verschil te zien. De vliegende tourbillon heeft geen bovenbrug en onthult de volledige kooi.',
  },
  {
    name: 'Pas slagfrequentie aan',
    text: 'Probeer verschillende slagfrequenties (18k, 28.8k, 36k VPH) om te zien hoe de balanswielfrequentie en echappementrotatie veranderen.',
  },
  {
    name: 'Bedien snelheid',
    text: 'Gebruik de snelheidsregelaars om te vertragen en de ingewikkelde dans van het echappement te observeren, of versnel om de volledige kooirotatiecyclus te zien.',
  },
];

const title = 'Tourbillon: Kunst van het Roterende Echappement';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-bekijker',
  title,
  description: 'Beleef de betoverende kunst van de tourbillon - een roterende kooi met het echappement. Zie het balanswiel oscilleren, de haarveer ademen en de kooi draaien in een elegant mechanisch ballet.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Type',
    typeClassic: 'Klassiek',
    typeFlying: 'Vliegend',
    speedLabel: 'Snelheid',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Gepauzeerd',
    beatRateLabel: 'Slagfrequentie',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Kooi',
    showLabelsLabel: 'Labels',
    step1: 'Schakel tussen klassieke en vliegende tourbillon om hun architectuur te vergelijken.',
    step2: 'Pas de slagfrequentie aan om te zien hoe deze het echappementritme beïnvloedt.',
    step3: 'Gebruik de snelheidsregelaars om de precieze mechanische dans op elk tempo te observeren.',
    tipTitle: 'Tip',
    tipContent: 'Breguet vond de tourbillon uit in 1801. Het woord "tourbillon" betekent "wervelwind" in het Frans en beschrijft het uiterlijk van de roterende kooi in beweging.',
    balanceLabel: 'Balanswiel',
    escapeLabel: 'Echappement',
    palletLabel: 'Anker',
    cageLabel: 'Kooi',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Geanimeerde Echappementkunst', level: 2 },
    { type: 'paragraph', html: 'De <strong>tourbillon</strong> is een van de meest boeiende complicaties in de haute horlogerie. Deze interactieve visualizer brengt het roterende echappement tot leven met een gedetailleerde geanimeerde weergave van het balanswiel, de haarveer, het anker, het echappementwiel en de iconische roterende kooi. Verken de mechanische poëzie van Breguets meesterwerk.' },
    { type: 'title', text: 'Hoe een tourbillon werkt', level: 3 },
    { type: 'paragraph', html: 'Een tourbillon huisvest het volledige echappement - <strong>balanswiel, haarveer, anker en echappementwiel</strong> - in een roterende kooi. De kooi voltooit meestal één rotatie per minuut, waardoor de positie van het echappement ten opzichte van de zwaartekracht continu verandert. Dit middelt positionele tijdfouten uit, een revolutionair concept toen Abraham-Louis Breguet het in 1801 patenteerde. Het <strong>balanswiel</strong> oscilleert op de slagfrequentie van het horloge (typisch 4 Hz / 28.800 vph), terwijl het <strong>echappementwiel</strong> één tand per slag vooruitgaat, wat de karakteristieke tikkende beweging creëert.' },
    { type: 'title', text: 'Klassiek vs Vliegend Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Kenmerk', 'Klassiek Tourbillon', 'Vliegend Tourbillon'], rows: [
        ['Bovensteuning', 'Zichtbare brug', 'Geen (vrijdragend)'],
        ['Zichtbaarheid', 'Gedeeltelijk (brug zichtbaar)', 'Volledig (onbelemmerd)'],
        ['Moeilijkheid', 'Hoog', 'Extreem hoog'],
        ['Uitgevonden', '1801 (Breguet)', 'Jaren 1920 (Alfred Helwig)'],
        ['Veel in', 'Traditionele merken', 'Moderne independents'],
      ]
    },
    { type: 'title', text: 'Slagfrequentie Vergelijking', level: 3 },
    {
      type: 'table', headers: ['Frequentie (vph)', 'Frequentie', 'Echappementwiel tpm', 'Slagen/s', 'Typisch gebruik'], rows: [
        ['18.000', '2,5 Hz', '20 tpm', '5', 'Vintage zakhorloges'],
        ['28.800', '4 Hz', '32 tpm', '8', 'Moderne standaard (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 tpm', '10', 'Hoogfrequent (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Mechanische Kunst in Beweging', icon: 'mdi:rotate-orbit', badge: 'HORLOGERIE', html: 'Deze visualizer is een artistieke interpretatie van een tourbillon-echappement. De kooirotatie, balansoscillatie, haarveerademhaling, ankerbeweging en echappementwielforuitgang zijn gesynchroniseerd volgens echte mechanische relaties. Gebruik de bedieningselementen om dit meesterwerk van micromechanische techniek te verkennen.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

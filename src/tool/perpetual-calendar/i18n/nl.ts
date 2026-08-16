import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Wat is een eeuwigdurende kalender in een horloge?',
    answer: 'Een eeuwigdurende kalender is een mechanische horlogecomplicatie die automatisch de juiste datum, dag, maand en maanfase weergeeft, rekening houdend met maanden van verschillende lengtes en schrikkeljaren. Hij is geprogrammeerd om nauwkeurig te zijn tot het jaar 2100 (het volgende eeuwjaar dat niet deelbaar is door 400).',
  },
  {
    question: 'Hoe weet een eeuwigdurende kalender welke jaren schrikkeljaren zijn?',
    answer: 'Het mechanische programma gebruikt een 48-maanden tandwiel (4 jaar) met een speciaal ontworpen nok die rekening houdt met 29 februari. Het mechanisme weet dat jaren deelbaar door 100 geen schrikkeljaren zijn, tenzij ze ook deelbaar zijn door 400. De meeste eeuwigdurende kalenders zijn nauwkeurig tot 2100, waarna een correctie van één dag nodig zal zijn.',
  },
  {
    question: 'Wat is het verschil tussen een eeuwigdurende en een jaarkalender?',
    answer: 'Een jaarkalender vereist eenmaal per jaar een handmatige correctie (eind februari), terwijl een eeuwigdurende kalender automatisch schrikkeljaren verwerkt en decennialang correct blijft. Eeuwigdurende kalenders zijn mechanisch aanzienlijk complexer.',
  },
];

const howTo = [
  {
    name: 'Vooruit met de datum',
    text: 'Gebruik de knoppen D (dag), M (maand) en J (jaar) om de kalender vooruit te zetten. Zie de datumwijzer bewegen en het maandvenster veranderen.',
  },
  {
    name: 'Observeren van schrikkeljaarovergangen',
    text: 'Ga door februari van een schrikkeljaar (bijv. 2024) om de sprong van 29 naar 1 maart te zien. Probeer een niet-schrikkeljaar om de sprong van 28 naar 1 maart te zien.',
  },
  {
    name: 'Gebruik automatisch afspelen',
    text: 'Druk op play om de kalender automatisch te laten vooruitgaan. Dit onthult de volledige cyclus van maandlengtes en de voortgang van de maanfase.',
  },
];

const title = 'Eeuwigdurende Kalender Simulator: Interactieve Horlogecomplicatie';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'eeuwigdurendekalender',
  title,
  description: 'Verken het mechanische genie van een eeuwigdurende kalenderhorlogecomplicatie. Visualiseer datum, dag, maand, schrikkeljaarcyclus en maanfase met een geanimeerde wijzerplaat.',
  ui: {
    title: 'Eeuwigdurende Kalender Simulator',
    dateLabel: 'Datum',
    dayLabel: 'Dag',
    monthLabel: 'Maand',
    yearLabel: 'Jaar',
    leapYearLabel: 'Schrikkel',
    moonPhaseLabel: 'Maanfase',
    weekdayLabel: 'Weekdag',
    advanceDay: 'Dag Vooruit',
    advanceMonth: 'Maand Vooruit',
    advanceYear: 'Jaar Vooruit',
    autoPlay: 'Auto',
    resetBtn: 'Vandaag',
    dayNames: 'Zondag,Maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag',
    monthNames: 'Januari,Februari,Maart,April,Mei,Juni,Juli,Augustus,September,Oktober,November,December',
    tipTitle: 'Tip',
    tipContent: 'De meeste eeuwigdurende kalenderhorloges gebruiken een 48-maanden programmawiel met inkepingen van variabele lengte. Februari heeft de kortste inkeping (28 dagen in gewone jaren, 29 in schrikkeljaren), terwijl 30- en 31-daagse maanden progressief langere inkepingen hebben.',
    step1: 'Ga dag voor dag voorbij februari om te zien hoe het mechanisme maandovergangen verwerkt.',
    step2: 'Zie de maanfase-indicator vooruitgaan door zijn 29,5-daagse cyclus.',
    step3: 'Vergelijk de februari-overgangen van schrikkeljaren en gewone jaren om de 4-jaarscyclus te begrijpen.',
  },
  seo: [
    { type: 'title', text: 'Eeuwigdurende Kalender Simulator: Interactieve Complicatie', level: 2 },
    { type: 'paragraph', html: 'De <strong>eeuwigdurende kalender</strong> is een van de meest prestigieuze complicaties in de haute horlogerie. Deze interactieve simulator visualiseert hoe een mechanische eeuwigdurende kalender datum, dag, maand, schrikkeljaar en maanfase bijhoudt - decennialang zonder handmatige correctie. Verken het 48-maanden tandwielprogramma, zie hoe februari-overgangen werken en begrijp de gregoriaanse kalenderlogica die in deze meesterwerken van micromechanica is ingebouwd.' },
    { type: 'title', text: 'Hoe een eeuwigdurende kalender werkt', level: 3 },
    { type: 'paragraph', html: 'Een mechanische eeuwigdurende kalender gebruikt een <strong>programmawiel</strong> met inkepingen van verschillende dieptes die maanden van verschillende lengtes vertegenwoordigen. Een voelhefboom valt in elke inkeping; een diepere inkeping signaleert een korte maand (28-29 dagen), waardoor het mechanisme na het juiste aantal dagen naar de 1e van de volgende maand springt. Een <strong>48-maanden tandwiel</strong> verwerkt de 4-jaarlijkse schrikkeljaarcyclus, met een extra inkeping voor 29 februari. Het programma weet dat eeuwjaren (bijv. 2100) het schrikkeljaar overslaan tenzij ze deelbaar zijn door 400.' },
        { type: 'title', text: 'Referentie kalenderlogica', level: 3 },
    {"type":"table","headers":["Maand","Dagen","Inkeping diepte","Schrikkeljaar actie"],"rows":[["Januari","31","Diep","Normaal"],["Februari","28 / 29","Ondiepst","Extra dag elke 4 jaar"],["Maart","31","Diep","Normaal"],["April","30","Middel","Normaal"],["Mei","31","Diep","Normaal"],["Juni","30","Middel","Normaal"],["Juli","31","Diep","Normaal"],["Augustus","31","Diep","Normaal"],["September","30","Middel","Normaal"],["Oktober","31","Diep","Normaal"],["November","30","Middel","Normaal"],["December","31","Diep","Normaal"]]},
{ type: 'title', text: 'Vergelijking: Eeuwigdurend vs Jaarkalender', level: 3 },
    {
      type: 'table', headers: ['Kenmerk', 'Jaarkalender', 'Eeuwigdurende Kalender'], rows: [
        ['Correctie nodig', 'Eenmaal per jaar (1 Mrt)', 'Eenmaal per eeuw (2100)'],
        ['Schrikkeljaar', 'Handmatig', 'Automatisch (4-jaar nok)'],
        ['Maandherkenning', '30 vs 31 dagen', 'Volledig 28/29/30/31'],
        ['Complexiteit', 'Matig (~50 onderdelen)', 'Zeer hoog (~200+ onderdelen)'],
        ['Prijsindicatie', '€3.000-15.000', '€20.000-500.000+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interactieve Kalender Simulator', icon: 'mdi:calendar-month', badge: 'HORLOGERIE', html: 'Deze tool simuleert het kalendermechanisme van een eeuwigdurend kalenderhorloge. De geanimeerde wijzerplaat toont de datumwijzer, het maandvenster, de dag-subdial, de maanfase en de schrikkeljaarindicator. Gebruik de bediening om door dagen, maanden of jaren te bladeren en de mechanische logica in actie te zien.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

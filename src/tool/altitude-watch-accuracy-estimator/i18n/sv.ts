import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Varför går mekaniska klockor snabbare på hög höjd?',
    answer: 'Mekaniska klockor går snabbare på hög höjd främst på grund av lägre luftdensitet. Tunnare luft skapar mindre aerodynamiskt motstånd på balanshjulet, vilket gör att det kan oscillera med något större amplitud. Denna ökade amplitud gör att klockan går före - vanligtvis 2-6 sekunder per dag per 1.000 m höjdökning.',
  },
  {
    question: 'Påverkar höjden även kvartsur?',
    answer: 'Kvartsur påverkas minimalt av höjd eftersom de saknar oscillerande mekaniskt balanshjul. Extrema höjdförändringar kan dock påverka batteriprestanda. Effekten är försumbar jämfört med mekaniska klockor.',
  },
  {
    question: 'Kan höjdförändringar skada min klocka?',
    answer: 'Höjdförändringar i sig skadar sällan mekaniska klockor. Snabb dekompression (som i ett flygplan) kan dock orsaka problem med vattentäthet. Normala höjdvariationer under resor ligger inom konstruktionstoleransen.',
  },
];

const howTo = [
  {
    name: 'Välj en höjd',
    text: 'Dra höjdreglaget upp eller ner för att simulera olika höjder, från havsnivå till 8.000 m. Se hur balanshjulets oscillation och atmosfäriska data förändras i realtid.',
  },
  {
    name: 'Läs av avvikelsen',
    text: 'Visningen av gångavvikelse visar uppskattade sekunder per dag på den valda höjden. Diagrammet nedan visar trenden över alla höjder.',
  },
  {
    name: 'Ta hänsyn till faktorerna',
    text: 'Observera hur luftdensiteten minskar med höjden medan gångavvikelsen ökar. Temperatur- och tryckdata ger sammanhang för miljöförändringarna.',
  },
];

const title = 'Höjdprecisionsskattare: Hur Höjd Påverkar Din Mekaniska Klocka';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'hojdprecisionsskattare',
  title,
  description: 'Utforska hur höjd påverkar mekaniska klockors precision. Justera höjden från havsnivå till bergstopp och se realtidsförändringar i balanshjulets oscillation, gångavvikelse, luftdensitet, tryck och temperatur.',
  ui: {
    title: 'Höjdprecisionsskattare',
    altitudeLabel: 'Höjd',
    altitudeUnit: 'm',
    seaLevel: 'Havsnivå',
    deviationLabel: 'Gångavvikelse',
    deviationUnit: 's/d',
    pressureLabel: 'Tryck',
    pressureUnit: 'hPa',
    densityLabel: 'Luftdensitet',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatur',
    temperatureUnit: '°C',
    oscillationLabel: 'Balanshjul',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Gång',
    atmDataTitle: 'Atmosfäriska Förhållanden',
    howItWorks: 'Hur Det Fungerar',
    howItWorksDesc: 'Lägre luftdensitet på hög höjd minskar motståndet på balanshjulet, ökar amplituden och får klockan att gå snabbare. Detta verktyg uppskattar gångavvikelsen baserat på standardatmosfärmodeller.',
    negligible: 'Försumbar',
    minor: 'Liten',
    noticeable: 'Märkbar',
    significant: 'Betydande',
    severe: 'Allvarlig',
    step1: 'Dra reglaget för att simulera höjder från havsnivå till 8.000 m.',
    step2: 'Se balanshjulets animation och avvikelsemätaren reagera i realtid.',
    step3: 'Granska de atmosfäriska data för att förstå miljöfaktorerna.',
    tipTitle: 'Tips',
    tipContent: 'Effekten varierar med urverket: högfrekvensurverk (36.000 VPH) påverkas mindre än vintage lågfrekvensurverk (18.000 VPH).',
    deviationChart: 'Avvikelse vs Höjd',
    altitudeM: 'Höjd (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Luftmolekyler',
    airDensity: 'Luftdensitet',
  },
  seo: [
    { type: 'title', text: 'Interaktiv Höjdprecisionsskattare för Mekaniska Klockor', level: 2 },
    { type: 'paragraph', html: '<strong>Höjdprecisionsskattaren</strong> är ett interaktivt verktyg som visualiserar hur höjdförändringar påverkar mekaniska klockors precision. Genom att simulera höjder från havsnivå till 8.000 m kan du se den uppskattade gångavvikelsen orsakad av förändrad luftdensitet, tryck och temperatur.' },
    { type: 'title', text: 'Hur Höjd Påverkar Klockans Precision', level: 3 },
    { type: 'paragraph', html: 'På högre höjd <strong>minskar luftdensiteten</strong>, vilket reducerar aerodynamiskt motstånd på balanshjulet. Detta gör att balanshjulet kan oscillera med större amplitud, vilket får klockan att gå något snabbare. Effekten är vanligtvis <strong>+2 till +6 sekunder per dag</strong> per 1.000 m höjdökning.' },
    { type: 'title', text: 'Gångavvikelse vid Olika Höjder', level: 3 },
    {
      type: 'table', headers: ['Höjd', 'Luftdensitet', 'Tryck', 'Temperatur', 'Uppsk. Avvikelse'], rows: [
        ['Havsnivå (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Baslinje'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Miljöfaktorer', level: 3 },
    { type: 'paragraph', html: 'Förutom luftdensitet kan andra miljöfaktorer på hög höjd påverka prestandan: <strong>temperatur</strong> påverkar smörjmedlets viskositet, <strong>tryckförändringar</strong> kan påverka tätningen. Luftdensitetens effekt på balanshjulet är dock den dominerande faktorn.' },
    { type: 'diagnostic', variant: 'info', title: 'Interaktivt Simuleringsverktyg', icon: 'mdi:axis-arrow', badge: 'URMAKERI', html: 'Detta verktyg ger uppskattade värden baserade på ISA-modellen och empiriska observationer. Verkliga resultat varierar beroende på kaliber, skick och tillverkningstoleranser.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

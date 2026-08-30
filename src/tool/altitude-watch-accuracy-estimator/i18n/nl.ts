import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Waarom lopen mechanische horloges sneller op grote hoogte?',
    answer: 'Mechanische horloges lopen sneller op grote hoogte voornamelijk door de lagere luchtdichtheid. Dunnere lucht zorgt voor minder aerodynamische weerstand op het balanswiel, waardoor het met een iets grotere amplitude kan oscilleren. Deze grotere amplitude zorgt dat het horloge voorloopt - typisch 2-6 seconden per dag per 1.000 m hoogtewinst.',
  },
  {
    question: 'Heeft hoogte ook invloed op quartz horloges?',
    answer: 'Quartz horloges worden minimaal beïnvloed door hoogte omdat ze geen oscillerend mechanisch balanswiel hebben. Extreme hoogteveranderingen kunnen echter de batterijprestaties beïnvloeden. Het effect is verwaarloosbaar vergeleken met mechanische horloges.',
  },
  {
    question: 'Kunnen hoogteveranderingen mijn horloge beschadigen?',
    answer: 'Hoogteveranderingen alleen beschadigen mechanische horloges zelden. Snelle decompressie (zoals in een vliegtuig) kan echter problemen veroorzaken met waterdichtheid. Normale hoogtevariatie tijdens reizen valt binnen de ontwerptolerantie.',
  },
];

const howTo = [
  {
    name: 'Selecteer een hoogte',
    text: 'Sleep de hoogteschuifregelaar omhoog of omlaag om verschillende hoogtes te simuleren, van zeeniveau tot 8.000 m. Zie hoe de balanswiel oscillatie en atmosferische gegevens in realtime veranderen.',
  },
  {
    name: 'Lees de afwijking',
    text: 'De afwijkingsdisplay toont de geschatte seconden per dag op de geselecteerde hoogte. De grafiek toont de trend over alle hoogtes.',
  },
  {
    name: 'Overweeg de factoren',
    text: 'Zie hoe luchtdichtheid afneemt met hoogte terwijl de afwijking toeneemt. Temperatuur- en drukgegevens geven context voor de omgevingsveranderingen.',
  },
];

const title = 'Hoogteprecisieschatter: Hoe Hoogte Uw Mechanische Horloge Beïnvloedt';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'hoogteprecisieschatter',
  title,
  description: 'Ontdek hoe hoogte de precisie van mechanische horloges beïnvloedt. Pas de hoogte aan van zeeniveau tot bergtop en zie realtime veranderingen in balanswiel oscillatie, afwijking, luchtdichtheid, druk en temperatuur.',
  ui: {
    title: 'Hoogteprecisieschatter',
    altitudeLabel: 'Hoogte',
    altitudeUnit: 'm',
    seaLevel: 'Zeeniveau',
    deviationLabel: 'Gangafwijking',
    deviationUnit: 's/d',
    pressureLabel: 'Druk',
    pressureUnit: 'hPa',
    densityLabel: 'Luchtdichtheid',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatuur',
    temperatureUnit: '°C',
    oscillationLabel: 'Balanswiel',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Gang',
    atmDataTitle: 'Atmosferische Omstandigheden',
    howItWorks: 'Hoe Het Werkt',
    howItWorksDesc: 'Lagere luchtdichtheid op grote hoogte vermindert weerstand op het balanswiel, verhoogt de amplitude en laat het horloge sneller lopen. Deze tool schat de afwijking op basis van standaard atmosfeermodellen.',
    negligible: 'Verwaarloosbaar',
    minor: 'Gering',
    noticeable: 'Merkbaar',
    significant: 'Aanzienlijk',
    severe: 'Ernstig',
    step1: 'Sleep de schuifregelaar om hoogtes van zeeniveau tot 8.000 m te simuleren.',
    step2: 'Zie de balanswiel animatie en afwijkingsmeter in realtime reageren.',
    step3: 'Bekijk de atmosferische gegevens om de omgevingsfactoren te begrijpen.',
    tipTitle: 'Tip',
    tipContent: 'Het effect varieert per uurwerk: hoogfrequente uurwerken (36.000 tph) worden minder beïnvloed dan vintage laagfrequente uurwerken (18.000 tph).',
    deviationChart: 'Afwijking vs Hoogte',
    altitudeM: 'Hoogte (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Luchtmoleculen',
    airDensity: 'Luchtdichtheid',
  },
  seo: [
    { type: 'title', text: 'Interactieve Hoogteprecisieschatter voor Mechanische Horloges', level: 2 },
    { type: 'paragraph', html: 'De <strong>Hoogteprecisieschatter</strong> is een interactieve tool die visualiseert hoe hoogteveranderingen de precisie van mechanische horloges beïnvloeden. Door hoogtes van zeeniveau tot 8.000 m te simuleren, ziet u de geschatte gangafwijking door veranderende luchtdichtheid, druk en temperatuur.' },
    { type: 'title', text: 'Hoe Hoogte de Horlogeprecisie Beïnvloedt', level: 3 },
    { type: 'paragraph', html: 'Op grotere hoogte <strong>neemt de luchtdichtheid af</strong>, wat de aerodynamische weerstand op het balanswiel vermindert. Hierdoor kan het balanswiel met grotere amplitude oscilleren, waardoor het horloge iets sneller loopt. Het effect is typisch <strong>+2 tot +6 seconden per dag</strong> per 1.000 m hoogtewinst.' },
    { type: 'title', text: 'Gangafwijking bij Verschillende Hoogtes', level: 3 },
    {
      type: 'table', headers: ['Hoogte', 'Luchtdichtheid', 'Druk', 'Temperatuur', 'Gesch. Afwijking'], rows: [
        ['Zeeniveau (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Basis'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Omgevingsfactoren', level: 3 },
    { type: 'paragraph', html: 'Naast luchtdichtheid kunnen andere omgevingsfactoren op grote hoogte de prestaties beïnvloeden: <strong>temperatuur</strong> beïnvloedt de smeermiddelviscositeit, <strong>drukveranderingen</strong> kunnen de afdichting beïnvloeden. Het effect van luchtdichtheid op het balanswiel is echter de dominante factor.' },
    { type: 'diagnostic', variant: 'info', title: 'Interactieve Simulatietool', icon: 'mdi:axis-arrow', badge: 'HOROLOGIE', html: 'Deze tool biedt geschatte waarden op basis van het ISA-model en empirische observaties. Werkelijke resultaten variëren per kaliber, staat en fabricagetoleranties.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

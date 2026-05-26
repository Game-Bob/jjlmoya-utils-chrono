import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'afstandsmeter-calculator',
  title: 'Afstandsmeter Calculator: Hoe gebruik je een telemeter horloge',
  description: 'Leer hoe je een telemeter horloge gebruikt. Bereken de afstand van bliksem tot donder op basis van de luchttemperatuur.',
  ui: {
    title: 'Afstandsmeter Calculator',
    triggerFlash: 'Start Flits',
    triggerSound: 'Stop Geluid',
    stop: 'Stoppen',
    reset: 'Resetten',
    settings: 'Instellingen',
    unitSystem: 'Eenheden',
    metric: 'Metrisch (km)',
    imperial: 'Imperiaal (mijl)',
    temperature: 'Luchttemperatuur',
    speedOfSound: 'Geluidssnelheid',
    distanceResult: 'Gemeten Afstand',
    elapsedTime: 'Verstreken Tijd',
    historyTitle: 'Meetgeschiedenis',
    noHistory: 'Nog geen metingen. Start hierboven een berekening!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Klik op de knop op 2 uur of "Start Flits" zodra je de bliksemflits ziet.',
    step2: 'Klik er nogmaals op of op "Stop Geluid" wanneer je de donder hoort.',
    step3: 'Lees de afstand af waar de secondewijzer stopt op de telemeter-ring.',
    tipTitle: 'Pro Tip',
    tipContent: 'Warme lucht geleidt geluid sneller dan koude lucht. Het aanpassen van de temperatuur zorgt ervoor dat de berekening klopt met de werkelijkheid.',
  },
  seo: [
    { type: 'title', text: 'Wat is een telemeter op een horloge?', level: 2 },
    { type: 'paragraph', html: 'Een telemeter is een schaalverdeling op de wijzerplaat of ring van een chronograaf horloge. Hiermee kan de drager de geschatte afstand berekenen tot een gebeurtenis die zowel gezien als gehoord kan worden (zoals bliksem, vuurwerk of een explosie).' },
  ],
  faq: [
    {
      question: 'Hoe gebruik je een telemeter horloge?',
      answer: 'Start de chronograaf zodra je de gebeurtenis ziet (zoals een flits). Stop hem wanneer je het geluid hoort (de donder). De secondewijzer wijst de afstand aan op de schaal.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Eenheden en omgeving instellen',
      text: 'Selecteer je voorkeurseenheden en voer de huidige luchttemperatuur van je locatie in.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Afstandsmeter Calculator: Hoe gebruik je een telemeter horloge';
const description = 'Leer hoe je een telemeter horloge gebruikt. Bereken de afstand van bliksem tot donder op basis van de luchttemperatuur.';
const faq = [
  { "question": "Waarvoor dient een telemeterschaal op een horloge?", "answer": "De schaal berekent de afstand tot een gebeurtenis die tegelijk zichtbaar en hoorbaar is, zoals bliksem en donder." },
  { "question": "Hoe bereken je bliksemafstand met een telemeter?", "answer": "Start de chronograaf bij de bliksem, stop hem bij de donder en lees het getal af waar de secondewijzer naar wijst." },
  { "question": "Wat is het verschil tussen een tachymeter en een telemeter?", "answer": "Een tachymeter meet snelheid over een bekende afstand. Een telemeter meet afstand op basis van tijd en geluidssnelheid." },
  { "question": "Hoe nauwkeurig is een telemeterschaal?", "answer": "De schaal is meestal gekalibreerd op 20°C, ongeveer 343 m/s. Temperatuurverschillen veroorzaken kleine afwijkingen." },
  { "question": "Kun je een telemeter onder water gebruiken?", "answer": "Nee. Geluid beweegt in water meer dan vier keer sneller dan in lucht." }
];
const howTo = [
  { "name": "Stel eenheden en temperatuur in", "text": "Kies metrische of imperiale eenheden en voer de omgevingstemperatuur in." },
  { "name": "Start de chrono bij de bliksem", "text": "Klik op Bliksem starten of druk op de knop op twee uur wanneer je de bliksem ziet." },
  { "name": "Stop bij de donder", "text": "Klik op Geluid starten of druk opnieuw op de knop zodra je de donder hoort." },
  { "name": "Lees de afstand af", "text": "Lees de berekende afstand in het resultaat of rechtstreeks op de telemeterbezel." }
];

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
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Avståndsmätare Kalkylator: Hur man använder en telemeterklocka';
const description = 'Lär dig hur du använder en telemeter-klocka. Beräkna avståndet från blixt till dunder baserat på lufttemperatur.';
const faq = [
  { "question": "Vad används en telemeterskala på en klocka till?", "answer": "Den används för att beräkna avståndet till en händelse som både syns och hörs, till exempel blixt och åska." },
  { "question": "Hur beräknar man avståndet till blixten med en telemeter?", "answer": "Starta kronografen när du ser blixten, stoppa den när du hör åskan och läs av siffran som sekundvisaren pekar på." },
  { "question": "Vad är skillnaden mellan tachymeter och telemeter?", "answer": "En tachymeter mäter hastighet över ett känt avstånd. En telemeter mäter avstånd utifrån tid och ljudets hastighet." },
  { "question": "Hur exakt är en telemeterskala?", "answer": "Den är vanligtvis kalibrerad för 20°C och cirka 343 m/s. Temperaturförändringar ger små avvikelser." },
  { "question": "Kan man använda en telemeter under vatten?", "answer": "Nej. Ljud färdas mer än fyra gånger snabbare i vatten än i luft." }
];
const howTo = [
  { "name": "Ställ in enheter och temperatur", "text": "Välj metriska eller brittiska enheter och ange lufttemperaturen." },
  { "name": "Starta kronografen vid blixten", "text": "Klicka på Utlös blixt eller tryck på knappen vid klockan två när du ser blixten." },
  { "name": "Stoppa vid åskan", "text": "Klicka på Utlös ljud eller tryck på knappen igen när du hör åskan." },
  { "name": "Läs av avståndet", "text": "Läs det beräknade avståndet på resultatskärmen eller på telemeterns vridring." }
];

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'avstandsmatare-kalkylator',
  title: 'Avståndsmätare Kalkylator: Hur man använder en telemeterklocka',
  description: 'Lär dig hur du använder en telemeter-klocka. Beräkna avståndet från blixt till dunder baserat på lufttemperatur.',
  ui: {
    title: 'Avståndsmätare Kalkylator',
    triggerFlash: 'Utlös Blixt',
    triggerSound: 'Utlös Ljud',
    stop: 'Stoppa',
    reset: 'Återställ',
    settings: 'Inställningar',
    unitSystem: 'Enhetssystem',
    metric: 'Metrisk (km)',
    imperial: 'Imperisk (mil)',
    temperature: 'Lufttemperatur',
    speedOfSound: 'Ljudhastighet',
    distanceResult: 'Uppmätt Avstånd',
    elapsedTime: 'Förfluten Tid',
    historyTitle: 'Mäthistorik',
    noHistory: 'Inga mätningar än. Starta en beräkning ovan!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Klicka på knappen klockan 2 eller "Utlös Blixt" så fort du ser blixten.',
    step2: 'Klicka igen eller på "Utlös Ljud" när du hör dundret.',
    step3: 'Läs av avståndet där sekundvisaren stannar på telemeter-skalan.',
    tipTitle: 'Proffstips',
    tipContent: 'Varm luft leder ljud snabbare än kall luft. Genom att justera temperaturen säkerställer du att beräkningen stämmer överens med fysiken i din omgivning.',
  },
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

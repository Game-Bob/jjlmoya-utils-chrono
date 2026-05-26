import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

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
  seo: [
    { type: 'title', text: 'Vad är en telemeter på en klocka?', level: 2 },
    { type: 'paragraph', html: 'En telemeter är en skala tryckt på urtavlan eller ringen på en kronografklocka. Den gör det möjligt för bäraren att beräkna avståndet till en händelse som både kan ses och höras (t.ex. blixtnedslag, fyrverkerier eller en explosion).' },
  ],
  faq: [
    {
      question: 'Hur använder man en telemeter-klocka?',
      answer: 'Starta kronografen när du ser händelsen (blixten). Stoppa den så fort du hör ljudet (dundret). Sekundvisaren visar avståndet på skalan.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Konfigurera enheter och miljö',
      text: 'Välj enheter och ställ in aktuell lufttemperatur för din plats.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

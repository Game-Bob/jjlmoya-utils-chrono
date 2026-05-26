import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'calcolatore-telemetro',
  title: 'Calcolatore Telemetro: Come usare il telemetro di un orologio',
  description: 'Scopri come usare la lunetta telemetrica. Calcola la distanza dal fulmine al tuono basandoti sulla temperatura dell\'aria.',
  ui: {
    title: 'Calcolatore Telemetro',
    triggerFlash: 'Attiva Flash',
    triggerSound: 'Attiva Suono',
    stop: 'Ferma',
    reset: 'Ripristina',
    settings: 'Impostazioni',
    unitSystem: 'Sistema di Unità',
    metric: 'Metrico (km)',
    imperial: 'Imperiale (miglia)',
    temperature: 'Temperatura dell\'Aria',
    speedOfSound: 'Velocità del Suono',
    distanceResult: 'Distanza Misurata',
    elapsedTime: 'Tempo Trascorso',
    historyTitle: 'Cronologia delle Misure',
    noHistory: 'Nessuna misura ancora. Avvia un calcolo sopra!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Fai clic sul pulsante a ore 2 o "Attiva Flash" non appena vedi il fulmine.',
    step2: 'Fai clic di nuovo o su "Attiva Suono" quando senti il tuono.',
    step3: 'Leggi la distanza nel punto in cui la lancetta dei secondi si ferma sulla lunetta del telemetro.',
    tipTitle: 'Consiglio da Pro',
    tipContent: 'L\'aria calda conduce il suono più velocemente dell\'aria fredda. La regolazione della temperatura garantisce che il calcolo della distanza rispetti la fisica dell\'ambiente.',
  },
  seo: [
    { type: 'title', text: 'Cos\'è la lunetta telemetrica di un orologio?', level: 2 },
    { type: 'paragraph', html: 'Un telemetro è una scala stampata sul quadrante o sulla lunetta di un cronografo. Consente a chi lo indossa di calcolare la distanza approssimativa da un evento remoto che può essere visto e udito (come fulmini, fuochi d\'artificio o un\'esplosione).' },
  ],
  faq: [
    {
      question: 'Come si usa una scala telemetrica su un orologio?',
      answer: 'Avvia il cronografo quando vedi l\'evento (come il fulmine). Fermalo non appena senti il suono (il tuono). La lancetta dei secondi indicherà la distanza sulla scala della lunetta.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurare unità e ambiente',
      text: 'Seleziona il sistema di unità preferito e imposta la temperatura dell\'aria locale.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

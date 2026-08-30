import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Calcolatore Telemetro: Come usare il telemetro di un orologio';
const description = 'Scopri come usare la lunetta telemetrica. Calcola la distanza dal fulmine al tuono basandoti sulla temperatura dell\'aria.';
const faq = [
  { "question": "A cosa serve una scala telemetrica su un orologio?", "answer": "Serve a calcolare la distanza tra chi indossa l'orologio e un evento visibile e udibile, come un lampo e il tuono." },
  { "question": "Come si calcola la distanza di un fulmine con un telemetro?", "answer": "Avvia il cronografo quando vedi il lampo, fermalo quando senti il tuono e leggi il numero indicato dalla lancetta dei secondi." },
  { "question": "Qual è la differenza tra tachimetro e telemetro?", "answer": "Il tachimetro misura la velocità su una distanza nota. Il telemetro misura la distanza in base al tempo e alla velocità del suono." },
  { "question": "Quanto è precisa una scala telemetrica?", "answer": "È calibrata per la velocità del suono a 20°C, circa 343 m/s. Le variazioni di temperatura causano piccoli errori." },
  { "question": "Si può usare un telemetro sott'acqua?", "answer": "No. Nell'acqua il suono viaggia più di quattro volte più velocemente che nell'aria." }
];
const howTo = [
  { "name": "Configura unità e temperatura", "text": "Scegli le unità metriche o imperiali e imposta la temperatura dell'aria." },
  { "name": "Avvia il crono al lampo", "text": "Fai clic su Attiva Flash o premi il pulsante a ore due quando vedi il fulmine." },
  { "name": "Ferma il crono al tuono", "text": "Fai clic su Attiva Suono o premi di nuovo il pulsante quando senti il tuono." },
  { "name": "Leggi la distanza", "text": "Leggi la distanza sul display dei risultati o sulla posizione della lancetta sulla lunetta." }
];

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
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

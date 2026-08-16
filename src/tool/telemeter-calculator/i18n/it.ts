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
  {
    "type": "title",
    "text": "¿Qué es el bisel de telémetro en un reloj?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un telémetro es una escala impresa en la esfera o bisel de un reloj cronógrafo. Permite calcular la distancia a un evento remoto visible y audible."
  },
  {
    "type": "title",
    "text": "Cómo usar la escala de telémetro",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Paso 1: Iniciar el cronógrafo",
        "definition": "Inicia el cronómetro en el momento de ver el destello visual."
      },
      {
        "term": "Paso 2: Detener el cronógrafo",
        "definition": "Detén el cronómetro al escuchar el sonido del trueno."
      },
      {
        "term": "Paso 3: Leer la escala",
        "definition": "La aguja del segundero señalará la distancia en kilómetros o millas."
      }
    ]
  },
  {
    "type": "title",
    "text": "Física del cálculo de distancia",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La luz viaja a ~300.000 km/s (instantánea). El sonido viaja por el aire a unos 343 m/s a 20°C."
  },
  {
    "type": "title",
    "text": "Telémetro vs Taquímetro",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El <strong>taquímetro</strong> mide velocidad en distancia fija. El <strong>telémetro</strong> mide distancia en tiempo variable."
  },
  {
    "type": "title",
    "text": "Tabla de referencia tiempo vs distancia",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Tiempo transcurrido",
      "Distancia (km)",
      "Distancia (millas)",
      "Velocidad del sonido"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Importancia de la temperatura",
    "icon": "mdi:information",
    "badge": "PRECISIÓN",
    "html": "El sonido viaja más rápido en aire caliente. Ajustar la temperatura corrige la medición."
  }
],
faq: [
  { "question": "A cosa serve una scala telemetrica su un orologio?", "answer": "Serve a calcolare la distanza tra chi indossa l'orologio e un evento visibile e udibile, come un lampo e il tuono." },
  { "question": "Come si calcola la distanza di un fulmine con un telemetro?", "answer": "Avvia il cronografo quando vedi il lampo, fermalo quando senti il tuono e leggi il numero indicato dalla lancetta dei secondi." },
  { "question": "Qual è la differenza tra tachimetro e telemetro?", "answer": "Il tachimetro misura la velocità su una distanza nota. Il telemetro misura la distanza in base al tempo e alla velocità del suono." },
  { "question": "Quanto è precisa una scala telemetrica?", "answer": "È calibrata per la velocità del suono a 20°C, circa 343 m/s. Le variazioni di temperatura causano piccoli errori." },
  { "question": "Si può usare un telemetro sott'acqua?", "answer": "No. Nell'acqua il suono viaggia più di quattro volte più velocemente che nell'aria." }
],
  bibliography,
howTo: [
  { "name": "Configura unità e temperatura", "text": "Scegli le unità metriche o imperiali e imposta la temperatura dell'aria." },
  { "name": "Avvia il crono al lampo", "text": "Fai clic su Attiva Flash o premi il pulsante a ore due quando vedi il fulmine." },
  { "name": "Ferma il crono al tuono", "text": "Fai clic su Attiva Suono o premi di nuovo il pulsante quando senti il tuono." },
  { "name": "Leggi la distanza", "text": "Leggi la distanza sul display dei risultati o sulla posizione della lancetta sulla lunetta." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

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
  { "question": "Vad används en telemeterskala på en klocka till?", "answer": "Den används för att beräkna avståndet till en händelse som både syns och hörs, till exempel blixt och åska." },
  { "question": "Hur beräknar man avståndet till blixten med en telemeter?", "answer": "Starta kronografen när du ser blixten, stoppa den när du hör åskan och läs av siffran som sekundvisaren pekar på." },
  { "question": "Vad är skillnaden mellan tachymeter och telemeter?", "answer": "En tachymeter mäter hastighet över ett känt avstånd. En telemeter mäter avstånd utifrån tid och ljudets hastighet." },
  { "question": "Hur exakt är en telemeterskala?", "answer": "Den är vanligtvis kalibrerad för 20°C och cirka 343 m/s. Temperaturförändringar ger små avvikelser." },
  { "question": "Kan man använda en telemeter under vatten?", "answer": "Nej. Ljud färdas mer än fyra gånger snabbare i vatten än i luft." }
],
  bibliography,
howTo: [
  { "name": "Ställ in enheter och temperatur", "text": "Välj metriska eller brittiska enheter och ange lufttemperaturen." },
  { "name": "Starta kronografen vid blixten", "text": "Klicka på Utlös blixt eller tryck på knappen vid klockan två när du ser blixten." },
  { "name": "Stoppa vid åskan", "text": "Klicka på Utlös ljud eller tryck på knappen igen när du hör åskan." },
  { "name": "Läs av avståndet", "text": "Läs det beräknade avståndet på resultatskärmen eller på telemeterns vridring." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

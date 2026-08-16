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
  { "question": "Waarvoor dient een telemeterschaal op een horloge?", "answer": "De schaal berekent de afstand tot een gebeurtenis die tegelijk zichtbaar en hoorbaar is, zoals bliksem en donder." },
  { "question": "Hoe bereken je bliksemafstand met een telemeter?", "answer": "Start de chronograaf bij de bliksem, stop hem bij de donder en lees het getal af waar de secondewijzer naar wijst." },
  { "question": "Wat is het verschil tussen een tachymeter en een telemeter?", "answer": "Een tachymeter meet snelheid over een bekende afstand. Een telemeter meet afstand op basis van tijd en geluidssnelheid." },
  { "question": "Hoe nauwkeurig is een telemeterschaal?", "answer": "De schaal is meestal gekalibreerd op 20°C, ongeveer 343 m/s. Temperatuurverschillen veroorzaken kleine afwijkingen." },
  { "question": "Kun je een telemeter onder water gebruiken?", "answer": "Nee. Geluid beweegt in water meer dan vier keer sneller dan in lucht." }
],
  bibliography,
howTo: [
  { "name": "Stel eenheden en temperatuur in", "text": "Kies metrische of imperiale eenheden en voer de omgevingstemperatuur in." },
  { "name": "Start de chrono bij de bliksem", "text": "Klik op Bliksem starten of druk op de knop op twee uur wanneer je de bliksem ziet." },
  { "name": "Stop bij de donder", "text": "Klik op Geluid starten of druk opnieuw op de knop zodra je de donder hoort." },
  { "name": "Lees de afstand af", "text": "Lees de berekende afstand in het resultaat of rechtstreeks op de telemeterbezel." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

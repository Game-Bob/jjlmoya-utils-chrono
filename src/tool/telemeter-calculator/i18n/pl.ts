import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'kalkulator-telemetryczny',
  title: 'Kalkulator Telemetryczny: Jak używać telemetru w zegarku',
  description: 'Dowiedz się, jak korzystać z bezela telemetrycznego. Oblicz odległość od błyskawicy do grzmotu w oparciu o temperaturę powietrza.',
  ui: {
    title: 'Kalkulator Telemetryczny',
    triggerFlash: 'Wyzwalaj Błysk',
    triggerSound: 'Wyzwalaj Dźwięk',
    stop: 'Zatrzymaj',
    reset: 'Resetuj',
    settings: 'Ustawienia',
    unitSystem: 'System jednostek',
    metric: 'Metryczny (km)',
    imperial: 'Imperialny (mile)',
    temperature: 'Temperatura powietrza',
    speedOfSound: 'Prędkość dźwięku',
    distanceResult: 'Mierzona odległość',
    elapsedTime: 'Miniony czas',
    historyTitle: 'Historia pomiarów',
    noHistory: 'Brak pomiarów. Uruchom obliczenia powyżej!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mil',
    ft: 'stopy',
    step1: 'Kliknij przycisk na godzinie 2 lub "Wyzwalaj Błysk" w momencie gdy zobaczysz błysk.',
    step2: 'Kliknij ponownie lub na "Wyzwalaj Dźwięk" w momencie gdy usłyszysz grzmot.',
    step3: 'Odczytaj odległość w miejscu, w którym wskazówka sekundnika zatrzyma się na skali telemetru.',
    tipTitle: 'Wskazówka',
    tipContent: 'Ciepłe powietrze przewodzi dźwięk szybciej niż zimne. Dostosowanie temperatury zapewnia zgodność obliczeń z fizyką otoczenia.',
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
  { "question": "Do czego służy skala telemetru w zegarku?", "answer": "Służy do obliczania odległości od zdarzenia, które jednocześnie widać i słychać, na przykład błyskawicy i grzmotu." },
  { "question": "Jak obliczyć odległość błyskawicy za pomocą telemetru?", "answer": "Uruchom chronograf po zobaczeniu błysku, zatrzymaj go po usłyszeniu grzmotu i odczytaj liczbę wskazywaną przez sekundnik." },
  { "question": "Czym różni się tachymetr od telemetru?", "answer": "Tachymetr mierzy prędkość na znanym dystansie. Telemeter mierzy odległość na podstawie czasu i prędkości dźwięku." },
  { "question": "Jak dokładna jest skala telemetru?", "answer": "Zwykle jest skalibrowana dla temperatury 20°C i prędkości dźwięku około 343 m/s. Temperatura powoduje niewielkie odchylenia." },
  { "question": "Czy telemetru można używać pod wodą?", "answer": "Nie. Dźwięk porusza się w wodzie ponad cztery razy szybciej niż w powietrzu." }
],
  bibliography,
howTo: [
  { "name": "Ustaw jednostki i temperaturę", "text": "Wybierz jednostki metryczne lub imperialne i ustaw temperaturę powietrza." },
  { "name": "Uruchom chrono po błysku", "text": "Kliknij Uruchom błysk albo naciśnij przycisk na godzinie drugiej, gdy zobaczysz błyskawicę." },
  { "name": "Zatrzymaj chrono po grzmocie", "text": "Kliknij Uruchom dźwięk albo ponownie naciśnij przycisk, gdy usłyszysz grzmot." },
  { "name": "Odczytaj odległość", "text": "Odczytaj odległość na ekranie wyników lub z położenia wskazówki na lunecie telemetru." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

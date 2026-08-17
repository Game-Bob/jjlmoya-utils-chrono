import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Kalkulator Telemetryczny: Jak używać telemetru w zegarku';
const description = 'Dowiedz się, jak korzystać z bezela telemetrycznego. Oblicz odległość od błyskawicy do grzmotu w oparciu o temperaturę powietrza.';
const faq = [
  { "question": "Do czego służy skala telemetru w zegarku?", "answer": "Służy do obliczania odległości od zdarzenia, które jednocześnie widać i słychać, na przykład błyskawicy i grzmotu." },
  { "question": "Jak obliczyć odległość błyskawicy za pomocą telemetru?", "answer": "Uruchom chronograf po zobaczeniu błysku, zatrzymaj go po usłyszeniu grzmotu i odczytaj liczbę wskazywaną przez sekundnik." },
  { "question": "Czym różni się tachymetr od telemetru?", "answer": "Tachymetr mierzy prędkość na znanym dystansie. Telemeter mierzy odległość na podstawie czasu i prędkości dźwięku." },
  { "question": "Jak dokładna jest skala telemetru?", "answer": "Zwykle jest skalibrowana dla temperatury 20°C i prędkości dźwięku około 343 m/s. Temperatura powoduje niewielkie odchylenia." },
  { "question": "Czy telemetru można używać pod wodą?", "answer": "Nie. Dźwięk porusza się w wodzie ponad cztery razy szybciej niż w powietrzu." }
];
const howTo = [
  { "name": "Ustaw jednostki i temperaturę", "text": "Wybierz jednostki metryczne lub imperialne i ustaw temperaturę powietrza." },
  { "name": "Uruchom chrono po błysku", "text": "Kliknij Uruchom błysk albo naciśnij przycisk na godzinie drugiej, gdy zobaczysz błyskawicę." },
  { "name": "Zatrzymaj chrono po grzmocie", "text": "Kliknij Uruchom dźwięk albo ponownie naciśnij przycisk, gdy usłyszysz grzmot." },
  { "name": "Odczytaj odległość", "text": "Odczytaj odległość na ekranie wyników lub z położenia wskazówki na lunecie telemetru." }
];

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
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

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
    { type: 'title', text: 'Co to jest skala telemetryczna w zegarku?', level: 2 },
    { type: 'paragraph', html: 'Telemetr to skala nadrukowana na tarczy lub bezelu zegarka z chronografem. Umożliwia ona użytkownikowi obliczenie przybliżonej odległości do odległego wydarzenia, które można zarówno zobaczyć, jak i usłyszeć (np. uderzenie pioruna, wybuch fajerwerków lub eksplozja).' },
  ],
  faq: [
    {
      question: 'Jak używać skali telemetrycznej w zegarku?',
      answer: 'Uruchom chronograf w momencie gdy zobaczysz zdarzenie (np. błysk). Zatrzymaj go w momencie gdy usłyszysz dźwięk (grzmot). Sekundnik wskaże odległość na skali.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Skonfiguruj jednostki i otoczenie',
      text: 'Wybierz preferowane jednostki i ustaw aktualną temperaturę powietrza w swojej lokalizacji.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

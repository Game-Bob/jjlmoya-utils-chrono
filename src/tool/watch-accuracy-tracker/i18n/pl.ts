import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'kalkulator-dokladnosci-zegarka',
  title: 'Kalkulator Dokładności i Odchyłki Dobowej Zegarka',
  description: 'Rejestruj i obliczaj dobową odchyłkę chodu swoich zegarków mechanicznych lub kwarcowych, aby analizować ich precyzję i spójność.',
  ui: {
    title: 'Dokładność Zegarka',
    selectWatch: 'Wybierz lub dodaj zegarek',
    watchPlaceholder: 'np. Seiko SKX007',
    addWatch: 'Dodaj zegarek',
    deleteWatch: 'Usuń zegarek',
    addLog: 'Zarejestruj pomiar',
    offsetLabel: 'Odchyłka (sekundy)',
    offsetPlaceholder: '0',
    dateLabel: 'Czas pomiaru',
    saveLog: 'Zapisz rejestr',
    avgRate: 'Średnia odchyłka dobowa',
    consistency: 'Status precyzji',
    totalLogs: 'Suma pomiarów',
    historyTitle: 'Historia pomiarów',
    noLogs: 'Brak pomiarów dla tego zegarka. Dodaj co najmniej dwa pomiary, aby obliczyć dokładność.',
    tableDate: 'Data i godzina',
    tableOffset: 'Odchyłka',
    tableRate: 'Odchyłka dobowa',
    tableActions: 'Akcje',
    deleteLog: 'Usuń',
    coscExcellent: 'Chronometr COSC (+4/-6 s/d)',
    excellent: 'Doskonała (0 do +5 s/d)',
    good: 'Dobra (+/- 10 s/d)',
    needsService: 'Wymaga serwisu (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'sekundy',
    referenceTime: 'Czas referencyjny',
    watchTime: 'Czas zegarka',
    useCurrentTime: 'Użyj aktualnego czasu',
    calculatedRate: 'Obliczona odchyłka',
    driftPredictorTitle: 'Kalkulator i Prognoza Odchyłki',
    driftPredictorDesc: 'Prognozuj skumulowaną odchyłkę zegarka w czasie i porównuj ją ze standardami.',
    dailyRateInput: 'Odchyłka dobowa (sekundy/dobę)',
    dailyRatePlaceholder: 'np. +4.5 lub -3',
    driftHeading: 'Prognozy',
    period: 'Okres',
    accumulatedDrift: 'Prognozowana odchyłka',
    day: '1 Dzień',
    week: '1 Tydzień',
    month: '1 Miesiąc',
    months3: '3 Miesiące',
    months6: '6 Miesięcy',
    year: '1 Rok',
    years5: '5 Lat',
    watchStandardTitle: 'Certyfikacja Standardów',
    trackerHeading: 'Śledzenie Odchyłki Chodu',
    driftCalculatorTab: 'Prognoza Odchyłki',
    trackerTab: 'Rejestr Dokładności',
    stdRolex: 'Superlative Rolex',
    stdCosc: 'Chronometr COSC',
    stdMetas: 'Master METAS',
    stdStdMech: 'Standardowy Mechaniczny',
    stdQuartz: 'Standardowy Kwarcowy',
    stdHaq: 'Kwarcowy o Wysokiej Precyzji',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standard (+15 s/d)',
    presetQuartz: 'Kwarcowy (+0.5 s/d)',
    statusPass: 'Zgodny',
    statusFail: 'Niezgodny',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/rok',
  },
  seo: [
    { type: 'title', text: 'Kompleksowy przewodnik po dokładności i regulacji zegarków mechanicznych', level: 2 },
    { type: 'paragraph', html: 'Zegarki mechaniczne to małe dzieła sztuki inżynieryjnej, jednak w przeciwieństwie do modeli kwarcowych są podatne na działanie czynników fizycznych i środowiskowych. Systematyczne monitorowanie dobowej odchyłki chodu pozwala ocenić stan mechanizmu i określić, kiedy zegarek wymaga profesjonalnego serwisu zegarmistrzowskiego.' },
    { type: 'title', text: 'Dlaczego zegarki mechaniczne spieszą lub spóźniają: Kluczowe czynniki', level: 2 },
    { type: 'paragraph', html: 'Wiele czynników wpływa na dobową dokładność zegarka. Grawitacja oddziałuje na koło balansowe i włos balansu w różny sposób, zależnie od pozycji spoczynkowej zegarka. Zmiany temperatur powodują kurczenie lub rozszerzanie się włosa, co zmienia częstotliwość drgań. Istotny jest również stopień naciągu sprężyny (rezerwa chodu) – w pełni nakręcony zegarek pracuje stabilniej niż ten pod koniec rezerwy.' },
    { type: 'title', text: 'Skumulowana odchyłka chodu: Jak sekundy zmieniają się w minuty', level: 2 },
    { type: 'paragraph', html: 'Dobowy błąd na poziomie zaledwie +5 sekund wydaje się mało znaczący, jednak czas płynie nieprzerwanie. W tydzień odchyłka ta urośnie do 35 sekund, w miesiąc do 2,5 minuty, a po roku zegarek będzie spieszył o ponad 30 minut. Ta skumulowana wartość pokazuje, jak ważne jest regularne mierzenie precyzji chodu.' },
    { type: 'title', text: 'Jak ręcznie mierzyć i obliczać dokładność zegarka', level: 2 },
    { type: 'paragraph', html: 'Możesz oszacować odchyłkę swojego zegarka bez profesjonalnego wibrografu (chronokomparatora). Zsynchronizuj zegarek z dokładnym zegarem atomowym (np. sygnałem czasu UTC). Po 24 lub 48 godzinach sprawdź i zanotuj nową różnicę. Podziel uzyskany wynik przez liczbę dni, aby wyznaczyć średnią dobową odchyłkę.' },
    { type: 'title', text: 'Wykorzystanie pozycji spoczynkowej do samoregulacji zegarka', level: 2 },
    { type: 'paragraph', html: 'Wiele zegarków mechanicznych można delikatnie wyregulować poprzez odpowiednie układanie ich na noc. Na przykład odłożenie zegarka tarczą do góry może powodować nadrabianie sekund, z kolei oparcie go na boku (koronką do dołu) może sprawiać, że będzie późnił. Znając te tendencje, skompensujesz odchyłkę bez otwierania koperty.' },
  ],
  faq: [
    {
      question: 'Jaka jest normalna dobowa odchyłka zegarka mechanicznego?',
      answer: 'Standardowe zegarki mechaniczne wykazują zazwyczaj odchyłkę w granicach +/- 10 do 20 sekund na dobę. Zegarki z oficjalnym certyfikatem chronometru COSC są wyregulowane w przedziale od -4 do +6 sekund na dobę. Wysokiej klasy mechanizmy kwarcowe mogą osiągać dokładność poniżej +/- 0.5 sekundy na dobę.',
    },
    {
      question: 'Dlaczego dokładność mojego zegarka różni się w zależności od pozycji?',
      answer: 'Grawitacja ziemska działa na balans i włos w inny sposób zależnie od tego, czy zegarek leży płasko (tarczą do góry/do dołu), czy stoi pionowo (koronką w dół/w górę). Różnice te wpływają na amplitudę wahań i prędkość chodu mechanizmu.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Zarejestruj stan początkowy',
      text: 'Zsynchronizuj zegarek ze sprawdzonym zegarem atomowym i zapisz początkową odchyłkę w sekundach.',
    },
    {
      name: 'Noś i obserwuj',
      text: 'Noś zegarek normalnie lub pozostaw go w jednej stałej pozycji na co najmniej 12 do 24 godzin.',
    },
    {
      name: 'Zarejestruj stan końcowy',
      text: 'Zapisz ponownie odchyłkę względem czasu referencyjnego. System automatycznie obliczy dobową dokładność chodu.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Dokładności i Odchyłki Dobowej Zegarka',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jaka jest normalna dobowa odchyłka zegarka mechanicznego?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standardowe zegarki mechaniczne wykazują zazwyczaj odchyłkę w granicach +/- 10 do 20 sekund na dobę. Zegarki z oficjalnym certyfikatem chronometru COSC są wyregulowane w przedziale od -4 do +6 sekund na dobę. Wysokiej klasy mechanizmy kwarcowe mogą osiągać dokładność poniżej +/- 0.5 sekundy na dobę.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dlaczego dokładność mojego zegarka różni się w zależności od pozycji?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Grawitacja ziemska działa na balans i włos w inny sposób zależnie od tego, czy zegarek leży płasko (tarczą do góry/do dołu), czy stoi pionowo (koronką w dół/w górę). Różnice te wpływają na amplitudę wahań i prędkość chodu mechanizmu.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak ręcznie mierzyć i obliczać dokładność zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Zarejestruj stan początkowy',
          'text': 'Zsynchronizuj zegarek ze sprawdzonym zegarem atomowym i zapisz początkową odchyłkę w sekundach.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Noś i obserwuj',
          'text': 'Noś zegarek normalnie lub pozostaw go w jednej stałej pozycji na co najmniej 12 do 24 godzin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Zarejestruj stan końcowy',
          'text': 'Zapisz ponownie odchyłkę względem czasu referencyjnego. System automatycznie obliczy dobową dokładność chodu.'
        }
      ]
    }
  ],
};

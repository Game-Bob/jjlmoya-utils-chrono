import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'kalkulator-tachymetru',
  title: 'Kalkulator Tachymetru: Predkosc z czasu pomiaru',
  description: 'Oblicz prędkość z czasu pomiaru za pomocą wzoru tachymetrycznego. Działa z każdym chronografem wyposażonym w skalę tachymetryczną na bezelu.',
  ui: {
    title: 'Kalkulator Tachymetru',
    timeLabel: 'Czas pomiaru (sekundy)',
    timeHelp: 'Czmierzony na dystansie 1 km lub 1 mili',
    speedResult: 'Predkosc',
    bezelReading: 'Odczyt z bezela',
    presetLabel: 'Scenariusz',
    selectPreset: 'Wybierz scenariusz',
    customPreset: 'Niestandardowy',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Uruchom chronograf, gdy obiekt mija punkt startowy.',
    exampleStep2: 'Zatrzymaj po 1 km. Skala tachymetryczna pokazuje predkosc.',
    tipTitle: 'Wskazowka',
    tipContent: 'Przy 36 sekundach bezel wskazuje 100. Krotsze czasy pomiaru oznaczaja wyzsze predkosci na skali tachymetrycznej.',
  },
  seo: [
    { type: 'title', text: 'Kalkulator Tachymetru: Zamien czas pomiaru na predkosc', level: 2 },
    { type: 'paragraph', html: 'Tachymetr to skala na bezelu lub tarczy zegarka, ktora zamienia czas pomiaru na predkosc. Jest zwykle uzywany z chronografem: uruchom stoper, gdy obiekt mija punkt odniesienia, zatrzymaj po 1 km (lub 1 mili) i odczytaj predkosc ze skali. Ten kalkulator robi matematyke za Ciebie.' },
    { type: 'title', text: 'Jak dziala tachymetr', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Wzor', definition: 'Predkosc = 3.600 / czas pomiaru w sekundach. Stala 3.600 oznacza sekundy na godzine.' },
        { term: 'Skala', definition: 'Bezle tachymetryczne sa oznaczone od 60 (na pozycji godziny 3) do 400 lub 500 (blisko godziny 12). Wyzsze predkosci odpowiadaja krotszym czasom pomiaru.' },
        { term: 'Dystans bazowy', definition: 'Standardowe tachymetry sa skalibrowane na 1 km lub 1 mile. Dla innych dystansow podziel odczyt odpowiednio.' },
      ]
    },
    { type: 'title', text: 'Typowe pomiary tachymetryczne', level: 3 },
    {
      type: 'table', headers: ['Czas pomiaru', 'Predkosc', 'Scenariusz'], rows: [
        ['10 s', '360 km/h', 'Pociag ekspresowy / samochod wyscigowy'],
        ['12 s', '300 km/h', 'Start odrzutowca'],
        ['20 s', '180 km/h', 'Samochod sportowy na autostradzie'],
        ['30 s', '120 km/h', 'Samochod na drodze szybkiego ruchu'],
        ['36 s', '100 km/h', 'Samochod na szosie (standardowe odniesienie)'],
        ['45 s', '80 km/h', 'Samochod w miescie'],
        ['60 s', '60 km/h', 'Jazda miejska'],
        ['90 s', '40 km/h', 'Jazda na rowerze'],
        ['120 s', '30 km/h', 'Jogging'],
        ['240 s', '15 km/h', 'Bieganie'],
        ['480 s', '7,5 km/h', 'Chodzenie'],
      ]
    },
    { type: 'title', text: 'Poza standardowa skale', level: 3 },
    { type: 'paragraph', html: 'Jesli Twoj bezel tachymetryczny siega tylko do 400, ale czas pomiaru jest krotszy niz 9 sekund, nadal mozesz go uzyc. Po prostu uzyj dluzszego dystansu bazowego. Na przyklad, jesli przebedziesz 2 km w 18 sekund, podziel odczyt z bezela przez 2. Odwrotnie, dla wolnych predkosci (powyzej 60 sekund), uzyj krotszego dystansu bazowego (np. 0,5 km) i pomnoz przez 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Kompatybilnosc tachymetru', icon: 'mdi:information', badge: 'UWAGA', html: 'Nie wszystkie chronografy maja bezel tachymetryczny. Niektore zegarki umieszczaja skale tachymetryczna na rehaut tarczy lub na zewnetrznym pierscieniu. Zegarki cyfrowe moga miec funkcje tachymetru w trybie chronografu. Wzor zawsze dziala, niezaleznie od fizycznej skali.' },
  ],
  faq: [
    {
      question: 'Jak uzyc bezela tachymetrycznego w moim zegarku?',
      answer: 'Uruchom chronograf w punkcie odniesienia (np. znaku drogowym). Zatrzymaj go po dokladnie 1 km (lub 1 mili). Wskazowka sekundowa wskazuje predkosc na skali bezela. Na przyklad, jesli przejechanie 1 km zajelo 36 sekund, wskazowka wskazuje 100, czyli 100 km/h.',
    },
    {
      question: 'Co jesli moj czas pomiaru jest szybszy niz skala moze odczytac?',
      answer: 'Niektore tachymetry siegaja tylko do 400 lub 500. Jesli przebedziesz 1 km w mniej niz 9 sekund, uzyj dluzszego dystansu bazowego. Przebedz 2 km i podziel odczyt z bezela przez 2, lub przebedz 3 km i podziel przez 3.',
    },
    {
      question: 'Co jesli moj czas pomiaru jest wolniejszy niz skala moze odczytac?',
      answer: 'Uzyj krotszego dystansu bazowego. Na przyklad, jesli przejechanie 1 km zajmuje 90 sekund, przebedz 0,5 km. Odczytaj bezel i pomnoz przez 2. Standardowa skala tachymetryczna obejmuje czasy od okolo 7 do 60 sekund.',
    },
    {
      question: 'Czy moge uzyc tachymetru do czegos innego niz predkosc?',
      answer: 'Tak. Tachymetr mierzy dowolna szybkosc na godzine. Na przyklad, zmierz jak dlugo trwa wykonanie zadania, a skala pokaze, ile mozesz zrobic na godzine. W produkcji, 30-sekundowe zadanie oznacza 120 jednostek na godzine.',
    },
    {
      question: 'Czy wszystkie tachymetry uzywaja tej samej skali?',
      answer: 'Wiekszosc uzywa standardowej skali logarytmicznej opartej na wzorze 3.600 / sekundy. Jednak niektore zabytkowe zegarki lub marki moga miec odchylenia. Fizyczna skala moze byc rowniez ograniczona przez tor minutowy i oznaczenia bezela zegarka.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz scenariusz lub wprowadz niestandardowy czas',
      text: 'Wybierz z gotowych scenariuszy, takich jak Samochod, Jazda na rowerze lub Bieganie, lub wybierz Niestandardowy, aby wprowadzic dowolny czas pomiaru w sekundach.',
    },
    {
      name: 'Odczytaj wynik predkosci',
      text: 'Kalkulator pokazuje predkosc w km/h oraz odpowiadajacy odczyt z bezela tachymetrycznego.',
    },
    {
      name: 'Zastosuj do swojego chronografu',
      text: 'Uzyj czasu pomiaru, aby znalezc odpowiadajaca predkosc na bezelu tachymetrycznym Twojego zegarka.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak uzyc bezela tachymetrycznego w moim zegarku?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uruchom chronograf w punkcie odniesienia. Zatrzymaj po dokladnie 1 km. Wskazowka sekundowa wskazuje predkosc na skali bezela. Przyklad: 36 sekund = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co jesli moj czas pomiaru jest szybszy niz skala moze odczytac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uzyj dluzszego dystansu bazowego. Przebedz 2 km i podziel odczyt z bezela przez 2, lub przebedz 3 km i podziel przez 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co jesli moj czas pomiaru jest wolniejszy niz skala moze odczytac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uzyj krotszego dystansu bazowego. Przebedz 0,5 km. Odczytaj bezel i pomnoz przez 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy moge uzyc tachymetru do czegos innego niz predkosc?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Tachymetr mierzy szybkosc na godzine. Zmierz czas zadania, a skala pokaze ilosc na godzine.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy wszystkie tachymetry uzywaja tej samej skali?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wiekszosc uzywa standardowej skali logarytmicznej opartej na wzorze 3.600 / sekundy. Niektore zabytkowe zegarki moga miec odchylenia.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Tachymetru',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak obliczyc predkosc za pomoca tachymetru',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz scenariusz lub niestandardowy czas',
          'text': 'Wybierz z gotowych scenariuszy, takich jak Samochod, Jazda na rowerze lub Bieganie, lub wybierz Niestandardowy, aby wprowadzic czas pomiaru w sekundach.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Odczytaj wynik predkosci',
          'text': 'Kalkulator pokazuje predkosc w km/h oraz odpowiadajacy odczyt z bezela tachymetrycznego.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Zastosuj do swojego chronografu',
          'text': 'Uzyj czasu pomiaru, aby znalezc odpowiadajaca predkosc na bezelu tachymetrycznym Twojego zegarka.',
        },
      ],
    },
  ],
};

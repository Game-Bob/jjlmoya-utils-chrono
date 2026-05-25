import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'symulator-kolorow-lumy',
  title: 'Symulator kolorów lumy – wizualizacja świecenia zegarka',
  description: 'Wizualizuj różne kolory lumy w czasie rzeczywistym. Porównaj C1, C3, BGW9, LumiNova i inne przy różnych poziomach oświetlenia otoczenia.',
  ui: {
    title: 'Symulator kolorów lumy',
    lumeType: 'Rodzaj lumy',
    brightness: 'Jasność otoczenia',
    dark: 'Ciemno',
    light: 'Jasno',
    color: 'Kolor',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Typ',
    description: 'Opis',
    c1Name: 'C1',
    c1Desc: 'Zielony (klasyczny)',
    c3Name: 'C3',
    c3Desc: 'Super zielony',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Lodowy błękit',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Ciepła biel',
    vintageName: 'Vintage',
    vintageDesc: 'Postarzany rad',
    orangeName: 'Pomarańczowy',
    orangeDesc: 'Nurek pomarańcz',
    blueName: 'Niebieski',
    blueDesc: 'Głęboki błękit',
    greenName: 'Zielony',
    greenDesc: 'Neonowa zieleń',
    tipTitle: 'Wskazówka',
    tipContent: 'Jasność lumy zależy od jakości pigmentu i ilości pochłoniętego światła. BGW9 świeci na niebiesko-biało i jest najjaśniejsza, podczas gdy vintage ma ciepłą, stonowaną poświatę.',
  },
  seo: [
    { type: 'title', text: 'Symulator kolorów lumy zegarka – wizualizacja świecenia w czasie rzeczywistym', level: 2 },
    { type: 'paragraph', html: 'Luma to jeden z najbardziej osobistych wyborów w kolekcjonowaniu zegarków. Wolisz klasyczną zieloną poświatę <strong>C1 Super-LumiNova</strong> czy lodowy błękit <strong>BGW9</strong>? Ten symulator pokazuje, jak każdy rodzaj lumy wygląda przy różnych poziomach oświetlenia – od pełnego słońca po całkowitą ciemność – z dokładnymi wartościami <strong>HEX i RGB</strong> dla każdego odcienia.' },
    { type: 'title', text: 'Porównanie typów Super-LumiNova', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Kolor w świetle dziennym', 'Kolor świecenia', 'Jasność', 'Najlepszy do'], rows: [
        ['C1', 'Jasnozielony', 'Zielony', 'Średnia', 'Zegarków garniturowych, oryginalna estetyka'],
        ['C3', 'Żółto-zielony', 'Jaskrawy zielony', 'Najwyższa', 'Zegarków nurkowych, narzędziowych'],
        ['BGW9', 'Łamana biel', 'Lodowy błękit', 'Wysoka', 'Nowoczesnych sportowych, czysty wygląd'],
        ['LumiNova', 'Ciepły beż', 'Ciepła biel', 'Niska–średnia', 'Lumy w przystępnej cenie'],
        ['Vintage', 'Krem / płowy', 'Ciepła, przyciemniona', 'Niska', 'Zegarków w stylu heritage'],
        ['Pomarańczowy', 'Pomarańczowy', 'Pomarańczowy', 'Średnia', 'Akcentów nurkowych, retro diverów'],
        ['Niebieski', 'Jasnoniebieski', 'Niebieski', 'Średnia', 'Designerskich tarcz, zegarków modowych'],
        ['Zielony', 'Jaskrawy zielony', 'Zielony', 'Wysoka', 'Zegarków w stylu militarnym'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 – który wybrać?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Klasyczna zieleń', icon: 'mdi:lightbulb-on', description: 'Oryginalna formuła Super-LumiNova. Świeci na zielono ze średnią jasnością. Bezpieczny, klasyczny wybór pasujący do każdego stylu zegarka.', points: ['Średnia jasność, widoczna 4–6 h', 'Zielona poświata, ciepły odcień', 'Najtańsza formuła', 'Popularna w zegarkach podstawowych'], highlight: false },
        { title: 'C3 Super zielony', icon: 'mdi:lightning-bolt', description: 'Najjaśniejsza zielona luma dostępna na rynku. Stosowana w profesjonalnych zegarkach nurkowych, gdzie czytelność pod wodą jest kluczowa. Maksymalna poświata przy minimalnym naświetleniu.', points: ['Najwyższa jasność, widoczna 8–12 h', 'Żółto-zielona w świetle dziennym', 'Preferowana przez Seiko, Citizen, Omega', 'Najlepsza do odczytu przy słabym świetle'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Lodowy błękit', icon: 'mdi:snowflake', description: 'Świeci na niebiesko-biało zamiast na zielono. Nieco mniej jasna niż C3, ale preferowana za czysty, nowoczesny wygląd. Popularna w luksusowych zegarkach sportowych.', points: ['Wysoka jasność, widoczna 6–10 h', 'Niebiesko-biała poświata, neutralny odcień', 'Czysty, nowoczesny wygląd w świetle dziennym', 'Używana przez Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage w stylu radowym', icon: 'mdi:fire', description: 'Ciepły beżowo-kremowy odcień imitujący lumę radową z lat 60. Celowo przyciemniona dla autentyczności estetycznej. Poświata jest ciepła, subtelna i pięknie się starzeje.', points: ['Niska jasność, widoczna 2–4 h', 'Ciepły krem do przyciemnionego bursztynu', 'Postarzany wygląd bez radioaktywności', 'Popularna w reedycjach heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Jasność to nie wszystko', icon: 'mdi:palette', html: 'Najjaśniejsza luma (C3) nie zawsze jest najlepszym wyborem. <strong>BGW9</strong> rezygnuje z odrobiny jasności na rzecz bardziej neutralnego, nowoczesnego wyglądu, który wielu kolekcjonerów ceni wyżej. <strong>Vintage</strong> stawia autentyczność stylistyczną nad wydajność. Wybierz to, co dla Ciebie najważniejsze: <strong>maksymalną poświatę, nowoczesną estetykę czy autentyczność stylu heritage.</strong>' },
    { type: 'title', text: 'Jak działa luma? Nauka stojąca za świeceniem', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Fotoluminescencyjny pigment na bazie glinostroncjanu. Pochłania światło UV i widzialne, a następnie emituje je jako poświatę. Nieradioaktywny i bezpieczny. Opracowany przez Nemoto & Co. w 1993 roku.' },
        { term: 'Czas ładowania', definition: 'Czas ekspozycji na światło potrzebny do nasycenia pigmentu lumy. Pełne naładowanie trwa 10–30 minut w bezpośrednim świetle słonecznym lub UV. Dłuższe ładowanie = dłuższa i jaśniejsza poświata.' },
        { term: 'Czas świecenia', definition: 'Jak długo luma pozostaje widoczna po naładowaniu. Wysokiej jakości Super-LumiNova świeci widocznie przez 6–12 godzin. Najjaśniejszy okres to pierwsze 30 minut po naładowaniu.' },
        { term: 'Klasa pigmentu', definition: 'Jakość kryształów glinostroncjanu. Pigmenty wyższej klasy (C3, BGW9) używają większych, bardziej jednolitych kryształów, co daje jaśniejszą i dłuższą poświatę. Niższe klasy (LumiNova) używają mniejszych kryształów i są ciemniejsze.' },
      ]
    },
    {
      type: 'summary', title: 'Szybki przewodnik wyboru lumy', items: [
        'Maksymalna czytelność w ciemności: wybierz C3 (najjaśniejsza zieleń) lub BGW9 (najjaśniejszy błękit).',
        'Nowoczesny, luksusowy wygląd: BGW9 to obecny faworyt wśród elitarnych marek.',
        'Styl vintage/heritage: użyj Vintage lub Pomarańczowego dla ciepłego, retro wyglądu.',
        'C1 to uniwersalista: dobra jasność, klasyczna zieleń, przystępna cena.',
        'Kolor lumy w świetle dziennym znacząco różni się od koloru świecenia – porównaj oba w symulatorze.',
      ]
    },
  ],
  faq: [
    {
      question: 'Która luma jest najjaśniejsza?',
      answer: 'C3 Super-LumiNova to najjaśniejsza zielona formuła. BGW9 to najjaśniejsza niebiesko-biała. Obie są znacznie jaśniejsze od C1 czy standardowej LumiNova.',
    },
    {
      question: 'Czym jest luma BGW9?',
      answer: 'BGW9 to wariant Super-LumiNova, który świeci na niebiesko-biało zamiast na zielono. Jest nieco mniej jasna niż C3, ale preferowana przez wielu za czysty, nowoczesny wygląd.',
    },
    {
      question: 'Czy luma vintage świeci?',
      answer: 'Nowoczesna luma w stylu vintage (beżowa/ciepła) świeci, ale jest celowo przyciemniona, aby imitować postarzany rad. To kompromis między autentycznością estetyczną a maksymalną jasnością.',
    },
    {
      question: 'Jak długo świeci luma?',
      answer: 'Po pełnym naładowaniu w jasnym świetle, wysokiej jakości Super-LumiNova świeci widocznie przez 6–12 godzin. Najjaśniejszy okres to pierwsze 30 minut.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz rodzaj lumy',
      text: 'Wybierz spośród presetów C1, C3, BGW9, LumiNova, Vintage, Pomarańczowy, Niebieski lub Zielony.',
    },
    {
      name: 'Dostosuj jasność otoczenia',
      text: 'Przesuń suwak jasności otoczenia od dnia (lewo) do nocy (prawo), aby zobaczyć, jak zachowuje się luma.',
    },
    {
      name: 'Sprawdź parametry',
      text: 'Karta informacyjna pokazuje dokładne wartości HEX i RGB aktualnego koloru.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Która luma jest najjaśniejsza?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova to najjaśniejsza zieleń. BGW9 to najjaśniejszy błękit.' },
        },
        {
          '@type': 'Question',
          'name': 'Czym jest luma BGW9?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 to wariant Super-LumiNova świecący na niebiesko-biało zamiast na zielono.' },
        },
        {
          '@type': 'Question',
          'name': 'Czy luma vintage świeci?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Nowoczesna luma vintage świeci, ale jest celowo przyciemniona, by imitować postarzany rad.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Symulator kolorów lumy',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak symulować kolory lumy',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz rodzaj lumy',
          'text': 'Wybierz spośród C1, C3, BGW9, LumiNova lub innych presetów.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Dostosuj jasność otoczenia',
          'text': 'Przesuń suwak jasności od dnia do nocy, aby zobaczyć zachowanie lumy.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sprawdź parametry',
          'text': 'Karta informacyjna pokazuje wartości HEX i RGB aktualnego koloru.',
        },
      ],
    },
  ],
};

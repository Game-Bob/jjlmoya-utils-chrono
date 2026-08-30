import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Jaka jest różnica między czasem słonecznym a gwiazdowym?',
    answer: 'Czas słoneczny opiera się na położeniu Słońca względem lokalnego południka (trwa 24 godziny), podczas gdy czas gwiazdowy opiera się na obrocie Ziemi względem odległych gwiazd tła (trwa 23 godziny, 56 minut, 4,09 sekundy).',
  },
  {
    question: 'Dlaczego doba gwiazdowa jest krótsza niż doba słoneczna?',
    answer: 'Podczas gdy Ziemia obraca się wokół własnej osi, porusza się również po orbicie wokół Słońca. Aby ponownie być zwróconą w stronę Słońca, Ziemia musi obrócić się nieco ponad 360 stopni, co dodaje około 3 minut i 56 sekund do doby w porównaniu z prostym obrotem względem gwiazd.',
  },
  {
    question: 'Jak długość geograficzna wpływa na lokalny czas gwiazdowy?',
    answer: 'Lokalny czas gwiazdowy jest obliczany przez dodanie długości geograficznej obserwatora (przeliczonej na godziny: 15 stopni na godzinę) do Greenwich Mean Sidereal Time (GMST). Każdy stopień na wschód dodaje 4 minuty do lokalnego zegara gwiazdowego.',
  },
];

const howTo = [
  {
    name: 'Ustaw swoją długość referencyjną',
    text: 'Dostosuj suwak do swojej lokalnej długości geograficznej. Wyrównuje to 24-godzinną skalę gwiazdową z lokalnym południkiem.',
  },
  {
    name: 'Obserwuj wskazówki słoneczne i gwiazdowe',
    text: 'Spójrz na tarczę: standardowe wskazówki słoneczne pokazują czas UTC na wewnętrznej 12-godzinnej tarczy, podczas gdy złota wskazówka i gwiazdy pokazują czas gwiazdowy na zewnętrznej 24-godzinnej skali.',
  },
  {
    name: 'Przyspiesz tempo niebieskie',
    text: 'Kliknij mnożniki prędkości 200× lub 5000×, aby zobaczyć obrót tła gwiazdowego i akumulację dryftu w czasie rzeczywistym.',
  },
];

const title = 'Astronomiczny śledzik czasu gwiazdowego: zegar lokalnego czasu gwiazdowego';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'sledzik-czasu-gwiazdowego',
  title,
  description: 'Śledź Greenwich Mean Sidereal Time (GMST) i lokalny czas gwiazdowy (LST) dzięki artystycznej astronomicznej tarczy astrolabium i symulatorowi dryfu gwiazd w czasie rzeczywistym.',
  ui: {
    title: 'Śledzik czasu gwiazdowego',
    longitudeLabel: 'Długość geograficzna obserwatora',
    solarTimeLabel: 'Uniwersalny czas koordynowany (UTC)',
    siderealTimeLabel: 'Lokalny czas gwiazdowy (LST)',
    differenceLabel: 'Dryft gwiazdowo-słoneczny',
    utcLabel: 'Data/godzina UTC',
    speedLabel: 'Prędkość niebieska',
    speedNormal: '1× (Czas rzeczywisty)',
    speedFast: '200× (Poklatkowo)',
    speedVeryFast: '5000× (Dryft)',
    audioToggleLabel: 'Kosmiczne dźwięki',
    step1: 'Dostosuj lokalną długość geograficzną, aby zobaczyć przesunięcie lokalnego czasu gwiazdowego w czasie rzeczywistym.',
    step2: 'Przełącz mnożnik prędkości, aby obserwować dryft standardowej wskazówki słonecznej i sfery gwiazdowej.',
    step3: 'Włącz kosmiczne dźwięki, aby usłyszeć różnicę między standardowym tyknięciem a astronomicznym przejściem godziny.',
    tipTitle: 'Dryft astronomiczny',
    tipContent: 'Ponieważ Ziemia krąży wokół Słońca, standardowe zegary słoneczne opóźniają się względem czasu gwiazdowego o 3 minuty i 56 sekund na dobę, dryfując dokładnie o 24 godziny w ciągu całego roku.',
    useLocationBtn: 'Użyj bieżącej lokalizacji',
    hemisphereLabel: 'Półkula gwiazdowa',
    hemisphereNorth: 'Północna (Wielka Niedźwiedzica)',
    hemisphereSouth: 'Południowa (Krzyż)',
    longitudeFormatLabel: 'Format długości',
    longitudeFormatDecimal: 'Stopnie dziesiętne',
    longitudeFormatDMS: 'Stopnie/Minuty',
  },
  seo: [
    { type: 'title', text: 'Co to jest czas gwiazdowy?', level: 2 },
    { type: 'paragraph', html: 'Czas gwiazdowy to system pomiaru czasu używany przez astronomów do lokalizowania obiektów niebieskich. Doba gwiazdowa trwa około 23 godzin, 56 minut i 4,09 sekundy. Jest to czas, w którym Ziemia wykonuje jeden pełny obrót wokół własnej osi względem równonocy wiosennej lub odległych gwiazd, a nie Słońca.' },
    { type: 'title', text: 'Doba słoneczna a doba gwiazdowa', level: 3 },
    { type: 'paragraph', html: 'Doba słoneczna mierzy czas między kolejnymi przejściami Słońca przez lokalny południk. Ponieważ Ziemia pokonuje około 1/365 swojej orbity wokół Słońca każdego dnia, musi obrócić się nieco więcej niż 360 stopni, aby ponownie ustawić się względem Słońca. Doba gwiazdowa to prawdziwy obrót o 360 stopni względem gwiazd, przez co jest krótsza o 3 minuty i 56 sekund.' },
    { type: 'title', text: 'Dlaczego astronomowie i zegarmistrzowie się tym przejmują', level: 3 },
    { type: 'paragraph', html: 'Dla astronomów gwiazda znajduje się zawsze w tej samej pozycji na niebie o tym samym czasie gwiazdowym. Aby śledzić gwiazdy, montaże teleskopów muszą obracać się dokładnie raz na dobę gwiazdową. Wysokiej klasy marki zegarmistrzowskie (takie jak Patek Philippe, Vacheron Constantin i IWC) tworzą ultrakomplikowane astronomiczne zegarki z gwiazdowymi mechanizmami do śledzenia LST bezpośrednio na nadgarstku.' },
    { type: 'title', text: 'Tabela referencyjna dryftu gwiazdowego i słonecznego', level: 3 },
    {
      type: 'table', headers: ['Upływające dni', 'Czas gwiazdowy wyprzedza', 'Stopnie przesunięcia', 'Dryft konstelacji'], rows: [
        ['1 dzień', '3m 56s', '0,986°', 'Niewielkie przesunięcie na zachód'],
        ['15 dni', '59m 0s', '14,79°', 'Przesunięcie o pół znaku zodiaku'],
        ['30 dni', '1h 58m', '29,58°', 'Pełne przesunięcie o jeden znak zodiaku'],
        ['90 dni', '5h 54m', '88,74°', 'Pełne przesunięcie o jeden sezon'],
        ['180 dni', '11h 48m', '177,48°', 'Przeciwległe konstelacje widoczne o północy'],
        ['365 dni', '24h 0m', '360,00°', 'Pełny cykl, zresetowanie ustawienia gwiazd'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Obliczone z epoki J2000', icon: 'mdi:creation-outline', badge: 'OBLICZENIE', html: 'Lokalny czas gwiazdowy jest obliczany przez konwersję czasu UTC na datę juliańską (dni od -4712), znalezienie Greenwich Mean Sidereal Time i zastosowanie twojej długości geograficznej (15 stopni na godzinę). Nasze narzędzie używa wysokoprecyzyjnego modelu liniowego IAU J2000 do śledzenia w czasie rzeczywistym.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);

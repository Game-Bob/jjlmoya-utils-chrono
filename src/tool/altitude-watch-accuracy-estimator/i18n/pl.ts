import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Dlaczego mechaniczne zegarki chodzą szybciej na dużych wysokościach?',
    answer: 'Mechaniczne zegarki chodzą szybciej na dużych wysokościach głównie z powodu mniejszej gęstości powietrza. Cieńsze powietrze powoduje mniejszy opór aerodynamiczny na kole wahadłowym, pozwalając mu oscylować z nieco większą amplitudą. Zwiększona amplituda powoduje przyspieszenie zegarka - typowo 2-6 sekund dziennie na każde 1.000 m wzrostu wysokości.',
  },
  {
    question: 'Czy wysokość wpływa również na zegarki kwarcowe?',
    answer: 'Zegarki kwarcowe są minimalnie dotknięte wysokością, ponieważ nie mają oscylującego mechanicznego koła wahadłowego. Jednak ekstremalne zmiany wysokości mogą wpływać na wydajność baterii. Efekt jest pomijalny w porównaniu z zegarkami mechanicznymi.',
  },
  {
    question: 'Czy zmiany wysokości mogą uszkodzić mój zegarek?',
    answer: 'Zmiany wysokości same w sobie rzadko uszkadzają mechaniczne zegarki. Jednak szybka dekompresja (jak w samolocie) może powodować problemy z wodoszczelnością. Normalne zmiany wysokości podczas podróży mieszczą się w tolerancjach projektowych.',
  },
];

const howTo = [
  {
    name: 'Wybierz wysokość',
    text: 'Przeciągnij suwak wysokości w górę lub w dół, aby symulować różne poziomy, od poziomu morza do 8.000 m. Obserwuj, jak oscylacje koła wahadłowego i dane atmosferyczne zmieniają się w czasie rzeczywistym.',
  },
  {
    name: 'Odczytaj odchylenie',
    text: 'Wyświetlacz odchylenia tempa pokazuje szacowane sekundy zyskane dziennie na wybranej wysokości. Wykres poniżej pokazuje trend na wszystkich wysokościach.',
  },
  {
    name: 'Rozważ czynniki',
    text: 'Obserwuj, jak gęstość powietrza maleje z wysokością, podczas gdy odchylenie tempa wzrasta. Dane temperatury i ciśnienia zapewniają kontekst dla zmian środowiskowych.',
  },
];

const title = 'Szacowanie Dokładności Wysokościowej: Jak Wysokość Wpływa na Twój Mechaniczny Zegarek';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'szacowanie-wysokosci',
  title,
  description: 'Dowiedz się, jak wysokość wpływa na dokładność mechanicznych zegarków. Dostosuj wysokość od poziomu morza do szczytu góry i zobacz zmiany w czasie rzeczywistym w oscylacji koła wahadłowego, odchyleniu tempa, gęstości powietrza, ciśnieniu i temperaturze.',
  ui: {
    title: 'Szacowanie Dokładności Wysokościowej',
    altitudeLabel: 'Wysokość',
    altitudeUnit: 'm',
    seaLevel: 'Poziom Morza',
    deviationLabel: 'Odchylenie Tempa',
    deviationUnit: 's/d',
    pressureLabel: 'Ciśnienie',
    pressureUnit: 'hPa',
    densityLabel: 'Gęstość Powietrza',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatura',
    temperatureUnit: '°C',
    oscillationLabel: 'Koło Wahadłowe',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Tempo',
    atmDataTitle: 'Warunki Atmosferyczne',
    howItWorks: 'Jak to Działa',
    howItWorksDesc: 'Niższa gęstość powietrza na dużych wysokościach zmniejsza opór na kole wahadłowym, zwiększając amplitudę i powodując szybsze chodzenie zegarka. To narzędzie szacuje odchylenie w oparciu o standardowe modele atmosferyczne.',
    negligible: 'Pomijalne',
    minor: 'Niewielkie',
    noticeable: 'Zauważalne',
    significant: 'Znaczące',
    severe: 'Poważne',
    step1: 'Przeciągnij suwak, aby symulować wysokości od poziomu morza do 8.000 m.',
    step2: 'Obserwuj animację koła wahadłowego i wskaźnik odchylenia w czasie rzeczywistym.',
    step3: 'Przejrzyj dane atmosferyczne, aby zrozumieć czynniki środowiskowe.',
    tipTitle: 'Wskazówka',
    tipContent: 'Efekt różni się w zależności od mechanizmu: mechanizmy wysokiej częstotliwości (36.000 VPH) są mniej dotknięte niż mechanizmy vintage niskiej częstotliwości (18.000 VPH).',
    deviationChart: 'Odchylenie vs Wysokość',
    altitudeM: 'Wysokość (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Cząsteczki Powietrza',
    airDensity: 'Gęstość Powietrza',
  },
  seo: [
    { type: 'title', text: 'Interaktywne Narzędzie do Szacowania Dokładności Wysokościowej dla Zegarków Mechanicznych', level: 2 },
    { type: 'paragraph', html: '<strong>Szacowanie Dokładności Wysokościowej</strong> to interaktywne narzędzie, które wizualizuje, jak zmiany wysokości wpływają na precyzję mechanicznych zegarków. Symulując wysokości od poziomu morza do 8.000 m, można zobaczyć szacowane odchylenie tempa spowodowane zmianami gęstości, ciśnienia i temperatury.' },
    { type: 'title', text: 'Jak Wysokość Wpływa na Dokładność Zegarka', level: 3 },
    { type: 'paragraph', html: 'Na większych wysokościach <strong>gęstość powietrza maleje</strong>, co zmniejsza opór aerodynamiczny na kole wahadłowym. Pozwala to kole wahadłowemu oscylować z większą amplitudą, powodując nieznaczne przyspieszenie zegarka. Efekt wynosi typowo <strong>+2 do +6 sekund dziennie</strong> na każde 1.000 m wzrostu wysokości.' },
    { type: 'title', text: 'Odchylenie Tempa na Różnych Wysokościach', level: 3 },
    {
      type: 'table', headers: ['Wysokość', 'Gęstość Pow.', 'Ciśnienie', 'Temperatura', 'Szac. Odchylenie'], rows: [
        ['Poziom Morza (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Baza'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Czynniki Środowiskowe', level: 3 },
    { type: 'paragraph', html: 'Poza gęstością powietrza, inne czynniki środowiskowe na dużych wysokościach mogą wpływać na wydajność zegarka: <strong>temperatura</strong> wpływa na lepkość smaru, <strong>zmiany ciśnienia</strong> mogą wpływać na uszczelnienie. Jednak wpływ gęstości powietrza na koło wahadłowe jest dominującym czynnikiem.' },
    { type: 'diagnostic', variant: 'info', title: 'Interaktywne Narzędzie Symulacyjne', icon: 'mdi:axis-arrow', badge: 'ZEGARMISTRZOSTWO', html: 'To narzędzie zapewnia szacowane wartości oparte na modelu ISA i obserwacjach empirycznych. Rzeczywiste wyniki różnią się w zależności od kalibru, stanu i tolerancji produkcyjnych.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

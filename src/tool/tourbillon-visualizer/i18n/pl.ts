import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Co to jest tourbillon?',
    answer: 'Tourbillon to obracająca się klatka, która zawiera wychwyt (balans, widełki kotwicowe i koło wychwytowe) mechanicznego zegarka. Obraca się nieprzerwanie — zazwyczaj raz na minutę — aby uśrednić błędy pozycyjne spowodowane grawitacją, poprawiając dokładność.',
  },
  {
    question: 'Jaka jest różnica między klasycznym a latającym tourbillonem?',
    answer: 'Klasyczny tourbillon jest wspierany przez górny i dolny mostek, podczas gdy latający tourbillon jest wspornikowy od dołu bez widocznego górnego wsparcia. Latające tourbillery oferują niezakłócony widok na obracający się wychwyt i są uważane za estetycznie bardziej wymagające w konstrukcji.',
  },
  {
    question: 'Czy tourbillon rzeczywiście poprawia dokładność?',
    answer: 'W nowoczesnych zegarkach naręcznych korzyść w dokładności jest minimalna, ponieważ błędy pozycyjne są już dobrze kompensowane. Jednak w zegarkach kieszonkowych (dla których Breguet wynalazł tourbillon w 1801 roku), stały obrót eliminował różnice chodu między pozycjami pionowymi. Dziś tourbillery są przede wszystkim demonstracją wysokiego kunsztu zegarmistrzowskiego.',
  },
];

const howTo = [
  {
    name: 'Zmień typ tourbillona',
    text: 'Przełączaj między klasycznym a latającym tourbillonem, aby zobaczyć różnicę strukturalną. Latający tourbillon nie ma górnego mostka, odsłaniając pełną klatkę.',
  },
  {
    name: 'Dostosuj częstotliwość uderzeń',
    text: 'Wypróbuj różne częstotliwości (18k, 28.8k, 36k VPH), aby zobaczyć jak zmienia się prędkość balansu i koła wychwytowego.',
  },
  {
    name: 'Kontroluj prędkość',
    text: 'Użyj kontrolek prędkości, aby zwolnić i obserwować skomplikowany taniec wychwytu, lub przyspieszyć, aby zobaczyć pełny cykl obrotu klatki.',
  },
];

const title = 'Tourbillon: Sztuka Obracającego się Wychwytu';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-wizualizator',
  title,
  description: 'Doświadcz hipnotyzującej sztuki tourbillona — obracającej się klatki mieszczącej wychwyt. Obserwuj oscylujący balans, oddychającą sprężynę i obracającą się klatkę w eleganckim mechanicznym balecie.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Typ',
    typeClassic: 'Klasyczny',
    typeFlying: 'Latający',
    speedLabel: 'Prędkość',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Wstrzymany',
    beatRateLabel: 'Częstotliwość',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Klatka',
    showLabelsLabel: 'Etykiety',
    step1: 'Przełączaj między klasycznym a latającym tourbillonem, aby porównać ich architekturę.',
    step2: 'Dostosuj częstotliwość uderzeń, aby zobaczyć jak wpływa na rytm wychwytu.',
    step3: 'Użyj kontrolek prędkości, aby obserwować precyzyjny mechaniczny taniec w dowolnym tempie.',
    tipTitle: 'Wskazówka',
    tipContent: 'Breguet wynalazł tourbillon w 1801 roku. Słowo "tourbillon" oznacza "trąba powietrzna" po francusku, opisując wygląd obracającej się klatki w ruchu.',
    balanceLabel: 'Balans',
    escapeLabel: 'Wychwyt',
    palletLabel: 'Kotwica',
    cageLabel: 'Klatka',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Animowana Sztuka Wychwytu', level: 2 },
    { type: 'paragraph', html: '<strong>Tourbillon</strong> to jedna z najbardziej urzekających komplikacji w haute horlogerie. Ten interaktywny wizualizator ożywia obracający się wychwyt ze szczegółową animowaną reprezentacją balansu, sprężyny, widełek kotwicowych, koła wychwytowego i kultowej obracającej się klatki. Odkryj mechaniczną poezję arcydzieła Bregueta.' },
    { type: 'title', text: 'Jak działa tourbillon', level: 3 },
    { type: 'paragraph', html: 'Tourbillon mieści cały wychwyt — <strong>balans, sprężynę, widełki kotwicowe i koło wychwytowe</strong> — wewnątrz obracającej się klatki. Klatka wykonuje zazwyczaj jeden obrót na minutę, stale zmieniając pozycję wychwytu względem grawitacji. To uśrednia błędy pozycyjne chronometrażu — koncepcja rewolucyjna, gdy Abraham-Louis Breguet opatentował ją w 1801 roku. <strong>Balans</strong> oscyluje z częstotliwością uderzeń zegarka (zazwyczaj 4 Hz / 28 800 vph), podczas gdy <strong>koło wychwytowe</strong> przesuwa się o jeden ząb na uderzenie, tworząc charakterystyczny ruch tykania.' },
    { type: 'title', text: 'Klasyczny vs Latający Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Cecha', 'Klasyczny Tourbillon', 'Latający Tourbillon'], rows: [
        ['Górne wsparcie', 'Widoczny mostek', 'Brak (wspornikowy)'],
        ['Widoczność', 'Częściowa', 'Pełna (niezakłócona)'],
        ['Trudność', 'Wysoka', 'Ekstremalnie wysoka'],
        ['Wynaleziony', '1801 (Breguet)', 'Lata 20. XX w. (Alfred Helwig)'],
        ['Popularny w', 'Tradycyjnych markach', 'Nowoczesnych niezależnych'],
      ]
    },
    { type: 'title', text: 'Porównanie Częstotliwości', level: 3 },
    {
      type: 'table', headers: ['Rytm (vph)', 'Częstotliwość', 'Koło Wychwytowe obr/min', 'Uderzeń/s', 'Typowe użycie'], rows: [
        ['18 000', '2,5 Hz', '20 obr/min', '5', 'Vintage zegarki kieszonkowe'],
        ['28 800', '4 Hz', '32 obr/min', '8', 'Nowoczesny standard (ETA, Rolex)'],
        ['36 000', '5 Hz', '40 obr/min', '10', 'Wysoka częstotliwość (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Mechaniczna Sztuka w Ruchu', icon: 'mdi:rotate-orbit', badge: 'ZEGARMISTRZOSTWO', html: 'Ten wizualizator jest artystyczną interpretacją wychwytu tourbillon. Obrót klatki, oscylacja balansu, oddychanie sprężyny, kołysanie widełek i krok koła wychwytowego są synchronizowane zgodnie z rzeczywistymi relacjami mechanicznymi. Użyj kontrolek, aby odkryć to arcydzieło mikromechanicznej inżynierii.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

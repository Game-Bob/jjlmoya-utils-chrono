import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Co to jest mechanizm zębaty w zegarku?',
    answer: 'Mechanizm zębaty to seria zazębiających się kół zębatych, które przenoszą energię z bębna sprężyny napędowej do wychwytu. Każda para kół zębatych zapewnia określony współczynnik redukcji, spowalniając szybkie uwalnianie energii sprężyny w kontrolowane, miarowe impulsy.',
  },
  {
    question: 'Dlaczego różne mechanizmy mają różne przełożenia?',
    answer: 'Przełożenia są określane przez liczbę zębów na każdym kole i pinii. Mechanizmy z różnymi częstotliwościami uderzeń (np. 28 800 VPH vs 36 000 VPH) mają różne prędkości koła wychwytowego i konfiguracje kół zębatych, aby utrzymać dokładny pomiar czasu przy jednoczesnym dostosowaniu do częstotliwości balansu.',
  },
  {
    question: 'Jaka jest różnica między kołem a pinią?',
    answer: 'W zegarmistrzostwie "koło" to większe koło zębate z wieloma zębami, które napędza następny komponent. "Pinia" to mniejsze koło zębate (zwykle 6-12 zębów), które jest napędzane. Razem koło i pinia tworzą parę zębatą, która zmienia prędkość obrotową i moment obrotowy.',
  },
];

const howTo = [
  {
    name: 'Wybierz mechanizm',
    text: 'Wybierz między standardowym (28 800 VPH), wysokiej częstotliwości (36 000 VPH El Primero) lub vintage (18 000 VPH). Każdy ma unikalne przełożenia i częstotliwości uderzeń.',
  },
  {
    name: 'Obserwuj mechanizm zębaty',
    text: 'Obserwuj animowane koła zębate obracające się z proporcjonalnymi prędkościami. Bęben obraca się wolno, podczas gdy koło wychwytowe obraca się szybko. Najedź na dowolne koło zębate lub kartę danych, aby uzyskać szczegółowe informacje.',
  },
  {
    name: 'Dostosuj prędkość',
    text: 'Użyj kontrolek prędkości, aby spowolnić, przyspieszyć lub zatrzymać animację. Pomaga to zwizualizować, jak każde koło zębate przyczynia się do łańcucha przenoszenia mocy.',
  },
];

const title = 'Odkrywca Kół Zębatych: Interaktywny Diagram Zegarmistrzowski';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'odkrywca-kola-zebate',
  title,
  description: 'Poznaj mechaniczne serce zegarka dzięki animowanej wizualizacji mechanizmu zębatego. Zobacz bęben sprężyny, koło środkowe, trzecie koło, czwarte koło, koło wychwytowe, widełki kotwicowe i balans w ruchu.',
  ui: {
    title: 'Odkrywca Kół Zębatych',
    barrelLabel: 'Bęben',
    centerWheelLabel: 'Koło Środkowe',
    thirdWheelLabel: 'Trzecie Koło',
    fourthWheelLabel: 'Czwarte Koło',
    escapeWheelLabel: 'Koło Wychwytowe',
    palletForkLabel: 'Widełki',
    balanceWheelLabel: 'Balans',
    rpmLabel: 'obr/min',
    teethLabel: 'zębów',
    gearRatioLabel: 'Przełożenie',
    powerFlowLabel: 'Przepływ Mocy',
    movementLabel: 'Mechanizm',
    speedLabel: 'Prędkość',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Wstrzymane',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Wybierz kaliber mechanizmu, aby zobaczyć jego unikalne przełożenia i częstotliwość uderzeń.',
    step2: 'Najedź na dowolne koło zębate lub kartę danych, aby podświetlić jego pozycję w przepływie mocy.',
    step3: 'Dostosuj prędkość animacji, aby zbadać, jak każde koło przenosi moc przez mechanizm.',
    tipTitle: 'Wskazówka',
    tipContent: 'Mechanizm zębaty redukuje szybkie uwalnianie energii sprężyny w kontrolowaną oscylację. Typowy bęben obraca się raz na 7-8 godzin, podczas gdy koło wychwytowe obraca się z prędkością 32 obr/min (przy 28 800 VPH) — redukcja ponad 15 000:1.',
  },
  seo: [
    { type: 'title', text: 'Interaktywny Odkrywca Kół Zębatych', level: 2 },
    { type: 'paragraph', html: '<strong>Mechanizm zębaty</strong> jest mechanicznym kręgosłupem każdego zegarka mechanicznego. To interaktywne narzędzie wizualizuje, jak moc przepływa z bębna sprężyny przez koło środkowe, trzecie koło, czwarte koło i koło wychwytowe do widełek kotwicowych i balansu. Zobacz, jak każde koło zębate obraca się z proporcjonalną prędkością i zrozum, jak przełożenia determinują pomiar czasu.' },
    { type: 'title', text: 'Jak działa mechanizm zębaty zegarka', level: 3 },
    { type: 'paragraph', html: 'Mechanizm zębaty zegarka składa się z serii <strong>kół</strong> (dużych kół zębatych) i <strong>pinii</strong> (małych kół zębatych), które przenoszą moc, jednocześnie zmniejszając prędkość. <strong>Bęben</strong> mieści sprężynę napędową i obraca się wolno, napędzając <strong>koło środkowe</strong>, które obraca się raz na godzinę (dla wskazówki minutowej). <strong>Trzecie koło</strong> i <strong>czwarte koło</strong> (koło sekund) dodatkowo zwiększają prędkość obrotową. Wreszcie <strong>koło wychwytowe</strong> uwalnia moc w kontrolowanych impulsach do <strong>widełek kotwicowych</strong>, które na przemian blokują i odblokowują koło wychwytowe, wysyłając impulsy do <strong>balansu</strong>. Balans oscyluje z precyzyjną częstotliwością — zazwyczaj 4 Hz (28 800 drgań na godzinę) — regulując chód zegarka.' },
    { type: 'title', text: 'Przełożenia i Przenoszenie Mocy', level: 3 },
    {
      type: 'table', headers: ['Komponent', 'Typowe zęby', 'obr/min (28 800 VPH)', 'Przełożenie od poprzedniego'], rows: [
        ['Bęben', '72', '0,002 (1 obr / 8 h)', '-'],
        ['Koło Środkowe', '60', '0,0167 (1 obr / h)', '~7,2:1'],
        ['Trzecie Koło', '50', '0,125 (1 obr / 8 min)', '~5:1'],
        ['Czwarte Koło', '60', '1 (1 obr / min)', '6:1'],
        ['Koło Wychwytowe', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Porównanie Mechanizmów', level: 3 },
    {
      type: 'table', headers: ['Mechanizm', 'Częstotliwość', 'Balans', 'Koło Wychwytowe obr/min', 'Typowa dokładność'], rows: [
        ['Vintage (18 000 VPH)', '18 000 bph', '2,5 Hz', '20 obr/min', '±15-30 s/d'],
        ['Standard (28 800 VPH)', '28 800 bph', '4 Hz', '32 obr/min', '±5-15 s/d'],
        ['Wysoka Częstotliwość (36 000 VPH)', '36 000 bph', '5 Hz', '40 obr/min', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktywne Narzędzie Edukacyjne', icon: 'mdi:cog-clockwise', badge: 'ZEGARMISTRZOSTWO', html: 'To narzędzie używa przybliżonych przełożeń reprezentatywnych dla typowych szwajcarskich wychwytów kotwicowych. Rzeczywiste przełożenia różnią się w zależności od kalibru. Użyj presetów mechanizmów, aby porównać, jak różne częstotliwości uderzeń wpływają na dynamikę mechanizmu zębatego.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};


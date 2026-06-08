import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Czym jest wieczny kalendarz w zegarku?',
    answer: 'Wieczny kalendarz to mechaniczna komplikacja zegarkowa, która automatycznie wyświetla prawidłową datę, dzień, miesiąc i fazę księżyca, uwzględniając miesiące o różnej długości i lata przestępne. Jest zaprogramowany tak, aby był dokładny do roku 2100 (następnego roku stulecia niepodzielnego przez 400).',
  },
  {
    question: 'Skąd wieczny kalendarz zna lata przestępne?',
    answer: 'Program mechaniczny wykorzystuje 48-miesięczne koło zębate (4 lata) ze specjalnie zaprojektowaną krzywką uwzględniającą 29 lutego. Mechanizm wie, że lata podzielne przez 100 nie są przestępne, chyba że są również podzielne przez 400. Większość wiecznych kalendarzy jest dokładna do 2100 roku, kiedy to będzie wymagana jednodniowa korekta.',
  },
  {
    question: 'Jaka jest różnica między kalendarzem wiecznym a rocznym?',
    answer: 'Kalendarz roczny wymaga ręcznej korekty raz w roku (pod koniec lutego), podczas gdy wieczny kalendarz automatycznie obsługuje lata przestępne i działa poprawnie przez dziesięciolecia. Kalendarze wieczne są mechanicznie znacznie bardziej złożone.',
  },
];

const howTo = [
  {
    name: 'Przesuń datę do przodu',
    text: 'Użyj przycisków D (dzień), M (miesiąc) i R (rok), aby przesunąć kalendarz do przodu. Obserwuj ruch wskazówki daty i zmianę okna miesiąca.',
  },
  {
    name: 'Obserwuj przejścia lat przestępnych',
    text: 'Przejdź przez luty roku przestępnego (np. 2024), aby zobaczyć skok z 29 na 1 marca. Spróbuj z rokiem nieprzestępnym, aby zobaczyć skok z 28 na 1 marca.',
  },
  {
    name: 'Użyj automatycznego odtwarzania',
    text: 'Naciśnij play, aby kalendarz automatycznie się przesuwał. To ujawnia pełny cykl długości miesięcy i progresję faz księżyca.',
  },
];

const title = 'Symulator Wiecznego Kalendarza: Interaktywna Komplikacja Zegarkowa';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'wieczny-kalendarz',
  title,
  description: 'Poznaj mechaniczny geniusz komplikacji wiecznego kalendarza. Wizualizuj datę, dzień, miesiąc, cykl lat przestępnych i fazę księżyca na animowanej tarczy.',
  ui: {
    title: 'Symulator Wiecznego Kalendarza',
    dateLabel: 'Data',
    dayLabel: 'Dzień',
    monthLabel: 'Miesiąc',
    yearLabel: 'Rok',
    leapYearLabel: 'Przestępny',
    moonPhaseLabel: 'Faza Księżyca',
    weekdayLabel: 'Dzień Tyg.',
    advanceDay: 'Dzień Naprzód',
    advanceMonth: 'Miesiąc Naprzód',
    advanceYear: 'Rok Naprzód',
    autoPlay: 'Auto',
    resetBtn: 'Dziś',
    dayNames: 'Niedziela,Poniedziałek,Wtorek,Środa,Czwartek,Piątek,Sobota',
    monthNames: 'Styczeń,Luty,Marzec,Kwiecień,Maj,Czerwiec,Lipiec,Sierpień,Wrzesień,Październik,Listopad,Grudzień',
    tipTitle: 'Wskazówka',
    tipContent: 'Większość zegarków z wiecznym kalendarzem używa 48-miesięcznego koła programowego z wycięciami o zmiennej długości. Luty ma najkrótsze wycięcie (28 dni w latach zwykłych, 29 w przestępnych), podczas gdy miesiące 30- i 31-dniowe mają progressively dłuższe wycięcia.',
    step1: 'Przesuwaj się dzień po dniu przez luty, aby zobaczyć, jak mechanizm radzi sobie z przejściami między miesiącami.',
    step2: 'Obserwuj wskaźnik fazy księżyca postępujący przez swój 29,5-dniowy cykl.',
    step3: 'Porównaj lutowe przejścia w latach przestępnych i zwykłych, aby zrozumieć 4-letni cykl.',
  },
  seo: [
    { type: 'title', text: 'Symulator Wiecznego Kalendarza: Interaktywna Komplikacja', level: 2 },
    { type: 'paragraph', html: '<strong>Wieczny kalendarz</strong> to jedna z najbardziej prestiżowych komplikacji w haute horlogerie. Ten interaktywny symulator wizualizuje, jak mechaniczny wieczny kalendarz śledzi datę, dzień, miesiąc, rok przestępny i fazę księżyca - bez ręcznej korekty przez dziesięciolecia. Poznaj 48-miesięczny program przekładni, zobacz jak działają lutowe przejścia i zrozum logikę kalendarza gregoriańskiego wbudowaną w te arcydzieła mikromechaniki.' },
    { type: 'title', text: 'Jak działa wieczny kalendarz', level: 3 },
    { type: 'paragraph', html: 'Mechaniczny wieczny kalendarz używa <strong>koła programowego</strong> z wycięciami o różnej głębokości reprezentującymi miesiące o różnej długości. Czujnik opada w każde wycięcie; głębsze wycięcie sygnalizuje krótki miesiąc (28-29 dni), uruchamiając mechanizm do przeskoczenia na 1. dzień następnego miesiąca po odpowiedniej liczbie dni. <strong>48-miesięczne koło zębate</strong> obsługuje 4-letni cykl lat przestępnych, z dodatkowym wycięciem na 29 lutego. Program wie, że lata stulecia (np. 2100) pomijają rok przestępny, chyba że są podzielne przez 400.' },
    { type: 'title', text: 'Porównanie: Wieczny vs Roczny Kalendarz', level: 3 },
    {
      type: 'table', headers: ['Cecha', 'Kalendarz Roczny', 'Wieczny Kalendarz'], rows: [
        ['Wymaga korekty', 'Raz w roku (1 Mar)', 'Raz na stulecie (2100)'],
        ['Obsługa przestępnych', 'Ręczna', 'Automatyczna (krzywka 4 l)'],
        ['Rozpoznawanie miesięcy', '30 vs 31 dni', 'Pełne 28/29/30/31'],
        ['Złożoność', 'Umiarkowana (~50 części)', 'Bardzo wysoka (~200+ części)'],
        ['Zakres cen', '3 000-15 000 €', '20 000-500 000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktywny Symulator Kalendarza', icon: 'mdi:calendar-month', badge: 'ZEGARMISTRZOSTWO', html: 'To narzędzie symuluje mechanizm kalendarzowy zegarka z wiecznym kalendarzem. Animowana tarcza pokazuje wskazówkę daty, okno miesiąca, sub-tarczę dnia, fazę księżyca i wskaźnik roku przestępnego. Użyj kontrolek, aby przemieszczać się po dniach, miesiącach lub latach i obserwować mechaniczną logikę w akcji.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Jak rozpoznać, czy zegarek to prawdziwy GMT, czy caller GMT?',
    answer: '<strong>Prawdziwy GMT</strong> (zwany też "flyer" GMT) pozwala na samodzielne przestawianie lokalnej wskazówki godzinowej - idealny dla podróżujących, którzy często zmieniają strefy czasowe. <strong>Caller GMT</strong> reguluje wskazówkę GMT oddzielnie, podczas gdy główna wskazówka godzinowa pozostaje nieruchoma, co jest tańsze w produkcji. Jak je odróżnić: wyciągnij koronkę do pozycji ustawiania czasu i obróć. Jeśli wskazówka godzinowa skacze co jedną godzinę bez zatrzymywania się, to prawdziwy GMT. Jeśli natomiast porusza się wskazówka GMT, to caller. Rolex używa prawdziwego kalibru GMT (3285) w GMT-Master II, podczas gdy wiele przystępnych cenowo microbrandomów stosuje mechanizmy caller, takie jak Seiko NH34.',
  },
  {
    question: 'Jaka jest różnica między zegarkiem GMT a World Timer?',
    answer: '<strong>Zegarek GMT</strong> zwykle śledzi dwie strefy czasowe - czas lokalny i czas referencyjny (najczęściej UTC) - za pomocą 24-godzinnej wskazówki i 24-godzinnego bezela. <strong>World Timer</strong> pokazuje wszystkie 24 strefy czasowe jednocześnie: ma pierścień z nazwami miast wokół tarczy i obracający się 24-godzinny dysk. World Timery, takie jak Patek Philippe 5230P czy JLC Geophysic Universal Time, pozwalają błyskawicznie odczytać czas w dowolnym mieście. GMT są prostsze i bardziej przystępne cenowo; World Timery są mechanicznie bardziej złożone i zazwyczaj droższe. To narzędzie działa jak cyfrowy World Timer, umożliwiając dodanie tylu miast, ile potrzebujesz.',
  },
  {
    question: 'Którą strefę czasową pokazuje mój zegarek, gdy na tarczy widnieje napis "GMT"?',
    answer: 'Gdy na tarczy zegarka widnieje napis "GMT", <strong>wskazówka GMT</strong> (zazwyczaj czwarta wskazówka z kolorową grocikiem) wskazuje czas w formacie 24-godzinnym. Większość właścicieli ustawia tę wskazówkę na UTC (uniwersalny czas koordynowany), ponieważ wszystkie strefy czasowe są definiowane jako przesunięcia względem UTC. Obrotowy 24-godzinny bezel można następnie wyrównać, aby odczytać dowolną inną strefę czasową. Na przykład, jeśli wskazówka GMT wskazuje 14 (2 po południu), a znaczniki bezela są ustawione na UTC+2, odczytujesz czas wschodnioeuropejski. To narzędzie pomaga wizualizować dokładnie tę zależność.',
  },
];

const howTo = [
  {
    name: 'Dodaj dowolne miasto do swojego pulpitu',
    text: 'Wpisz nazwę miasta lub strefy czasowej w pasku wyszukiwania. Kliknij wynik, aby natychmiast go dodać. Każde miasto pojawia się jako żywa karta zegara z aktualnym czasem lokalnym.',
  },
  {
    name: 'Usuwaj miasta, gdy nie są już potrzebne',
    text: 'Najedź kursorem na kartę zegara i kliknij przycisk ×, aby ją usunąć. Twój wybór jest automatycznie zapisywany w przeglądarce - zamknij okno i wróć później, a pulpit będzie dokładnie taki, jak go zostawiłeś.',
  },
  {
    name: 'Używaj jako punktu odniesienia GMT dla swojej kolekcji zegarków',
    text: 'Ustaw swoje miasto macierzyste i dodaj strefy czasowe, które śledzisz za pomocą swoich zegarków GMT. Korzystaj z etykiet przesunięcia na żywo, aby sprawdzić, czy ustawienie bezela jest prawidłowe dla każdej śledzonej strefy.',
  },
];

const title = 'Zegar Światowy: Pulpit na Żywo z Wieloma Strefami Czasowymi';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-zegar-swiatowy',
  title,
  description: 'Śledź wiele stref czasowych na żywo. Dodaj dowolne miasto i obserwuj aktualizację czasu co sekundę. Idealne dla entuzjastów zegarków z GMT lub World Timer.',
  ui: {
    title: 'Zegar Światowy',
    searchPlaceholder: 'Szukaj miasta lub strefy czasowej...',
    addLabel: 'Dodaj',
    removeLabel: 'Usuń',
    noResults: 'Nie znaleziono miast',
    yourZones: 'Twoje strefy czasowe',
  },
  seo: [
    { type: 'title', text: 'Zegar Światowy - Pulpit Stref Czasowych na Żywo dla Entuzjastów Zegarków', level: 2 },
    { type: 'paragraph', html: 'Niezależnie od tego, czy posiadasz <strong>GMT-Master II</strong>, <strong>World Timer</strong>, czy po prostu musisz śledzić wiele stref czasowych do pracy lub w podróży, ten pulpit na żywo pokazuje aktualny czas w każdym mieście, które cię interesuje - wszystko na pierwszy rzut oka. Dodaj Nowy Jork, Londyn, Tokio lub dowolne miasto, a czas aktualizuje się co sekundę. Twoje strefy są zapisywane w przeglądarce, więc nigdy nie musisz konfigurować ich ponownie.' },
    { type: 'title', text: 'Dlaczego entuzjaści zegarków potrzebują zegara światowego', level: 3 },
    { type: 'paragraph', html: 'Jeśli kolekcjonujesz <strong>zegarki GMT</strong>, znasz ten problem: ustawiasz bezel, by śledzić drugą strefę czasową, ale przesunięcia zmieniają się wraz z czasem letnim, albo masz kilka GMT i chcesz porównać, jak każdy z nich śledzi inne miasto. To narzędzie rozwiązuje ten problem. Dodaj miasta, które śledzą twoje zegarki, i natychmiast zobacz ich aktualne przesunięcie i czas. Żadnej matematyki w pamięci - wystarczy spojrzeć na kartę i dokładnie wiedzieć, gdzie powinna wskazywać twoja wskazówka GMT.' },
    { type: 'title', text: 'GMT vs World Timer - który pasuje do twojego stylu?', level: 3 },
    { type: 'paragraph', html: '<strong>Zegarek GMT</strong> (taki jak Rolex GMT-Master II "Pepsi" czy Tudor Black Bay Pro) używa 24-godzinnej wskazówki i obrotowego bezela do śledzenia dwóch stref czasowych. <strong>World Timer</strong> (taki jak Nomos Zürich Weltzeit czy Omega Seamaster Worldtimer) pokazuje wszystkie 24 strefy naraz za pomocą pierścienia miast i 24-godzinnego dysku. Ten pulpit naśladuje World Timer: możesz zobaczyć wszystkie miasta jednocześnie. Użyj go, aby zdecydować, która komplikacja pasuje do twojego stylu życia przed zakupem.' },
    { type: 'title', text: 'Praktyczne zastosowania poza kolekcjonowaniem zegarków', level: 3 },
    {
      type: 'list', items: [
        'Pracownicy zdalni umawiający spotkania między strefami czasowymi bez zamieszania',
        'Często podróżujący, którzy jednocześnie obserwują dom i cel podróży',
        'Traderzy śledzący otwarcia rynków w Nowym Jorku, Londynie, Tokio i Sydney',
        'Każdy, kto chce wiedzieć "która jest godzina w..." bez googlowania',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Zegar Światowy na Żywo', icon: 'mdi:clock-time-eight', badge: 'CZAS', html: 'Czasy aktualizują się na żywo co sekundę przy użyciu wbudowanej w przeglądarkę bazy danych stref czasowych. Przejścia na czas letni są obsługiwane automatycznie. Żadne dane nie są wysyłane do żadnego serwera.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

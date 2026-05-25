import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'wizualizator-faz-ksiezyca',
  title: 'Wizualizator faz Ksiezyca: kalendarz ksiezycowy i ustawianie komplikacji w zegarku',
  description: 'Wizualizuj bieżącą fazę Księżyca, oświetlenie, wiek oraz nadchodzące pełnie i nowie. Idealne do ustawiania komplikacji fazy Księżyca w zegarku.',
  ui: {
    title: 'Wizualizator faz Księżyca',
    selectDate: 'Wybierz datę',
    today: 'Dziś',
    moonPhase: 'Faza Księżyca',
    illumination: 'Oświetlenie',
    moonAge: 'Wiek Księżyca',
    daysUntilFull: 'Dni do Pełni',
    daysUntilNew: 'Dni do Nowiu',
    newMoon: 'Nów',
    waxingCrescent: 'Sierp przybywający',
    firstQuarter: 'Pierwsza kwadra',
    waxingGibbous: 'Księżyc przybywający',
    fullMoon: 'Pełnia',
    waningGibbous: 'Księżyc ubywający',
    lastQuarter: 'Ostatnia kwadra',
    waningCrescent: 'Sierp ubywający',
    nextFullMoon: 'Następna Pełnia',
    nextNewMoon: 'Następny Nów',
    tipTitle: 'Wskazówka',
    tipContent: 'Aby ustawić zegarek z fazą Księżyca, znajdź dzisiejszą fazę w tym narzędziu, a następnie przesuń koronkę, aż tarcza księżycowa będzie pasować. Większość mechanicznych faz Księżyca gromadzi błąd około jednego dnia na 2 lata.',
    days: 'Postęp cyklu',
    day: 'dzień',
  },
  seo: [
    { type: 'title', text: 'Wizualizator faz Ksiezyca: narzedzie ksiezycowe i ustawianie zegarka', level: 2 },
    { type: 'paragraph', html: 'Wizualizator faz Księżyca pokazuje <strong>bieżącą fazę Księżyca</strong> z realistyczną grafiką. Zobaczysz <strong>procent oświetlenia, wiek Księżyca, dni do następnej pełni i nowiu</strong>. Stworzony dla miłośników zegarków, którzy muszą precyzyjnie ustawić komplikację fazy Księżyca - działa również jako ogólny kalendarz księżycowy dla dowolnej daty w przeszłości lub przyszłości.' },
    { type: 'title', text: 'Słowniczek faz Księżyca', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Nów', definition: 'Księżyc znajduje się między Ziemią a Słońcem. Oświetlona strona jest odwrócona od nas. 0% oświetlenia. Początek cyklu księżycowego.' },
        { term: 'Sierp przybywający', definition: '1-49% oświetlenia. Cienki sierp pojawia się po prawej stronie (półkula północna). Księżyc zbliża się do pierwszej kwadry.' },
        { term: 'Pierwsza kwadra', definition: '50% oświetlenia. Połowa widocznej powierzchni jest oświetlona. Księżyc zakończył jedną czwartą swojego cyklu.' },
        { term: 'Księżyc przybywający', definition: '51-99% oświetlenia. Oświetlona jest więcej niż połowa. Księżyc zmierza w kierunku pełni.' },
        { term: 'Pełnia', definition: '100% oświetlenia. Cała widoczna powierzchnia jest oświetlona. Szczyt cyklu księżycowego.' },
        { term: 'Księżyc ubywający', definition: '99-51% oświetlenia. Oświetlony obszar zaczyna się zmniejszać od prawej strony.' },
        { term: 'Ostatnia kwadra', definition: '50% oświetlenia. Oświetlona jest lewa połowa. Trzy czwarte cyklu za nami.' },
        { term: 'Sierp ubywający', definition: '49-1% oświetlenia. Cienki sierp po lewej stronie przed resetem cyklu do nowiu.' },
      ]
    },
    { type: 'title', text: 'Jak ustawić fazę Księżyca w zegarku', level: 3 },
    {
      type: 'list', items: [
        'Użyj tego narzędzia, aby znaleźć dzisiejszą dokładną fazę Księżyca. Zanotuj nazwę fazy i jej wygląd.',
        'W zegarku wyciągnij koronkę do pozycji ustawiania fazy Księżyca (zwykle pozycja 2 lub 3).',
        'Przesuwaj koronkę, aż tarcza księżycowa pokaże tę samą fazę co narzędzie. Wskaźnik pełni znajduje się zazwyczaj na środku u góry tarczy.',
        'Unikaj ustawiania fazy Księżyca między 21:00 a 3:00, gdy mechanizm zmiany daty jest załączony i może ulec uszkodzeniu.',
        'Większość mechanicznych zegarków z fazą Księżyca używa koła z 59 zębami, które przybliża dwa cykle księżycowe (59 dni). Oznacza to błąd około jednego dnia na 2 lata.',
        'Dla wysokiej precyzji niektóre zegarki (Patek Philippe, A. Lange & Söhne) używają mechanizmów dokładnych do jednego dnia na 100+ lat.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Nigdy nie ustawiaj podczas zmiany daty', icon: 'mdi:alert', html: 'Nie ustawiaj fazy Księżyca (ani daty) między godziną <strong>21:00 a 3:00</strong>. W tym oknie mechanizm zmiany daty jest fizycznie sprzęgnięty z kołem daty. Forsowanie koronki może zerwać zęby koła. Jeśli musisz ustawić w tym okresie, najpierw przesuń wskazówki poza 3:00, a następnie ustaw fazę Księżyca.' },
    { type: 'title', text: 'Mechaniczna a precyzyjna faza Księżyca', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Koło zębate', 'Błąd narastania', 'Błąd 1 dnia po', 'Przykładowe zegarki'], rows: [
        ['Standardowy / podstawowy', '59 zębów', '~1 dzień co 2 lata', '~2,5 roku', 'Seiko, Orient, Hamilton, Tissot'],
        ['Średniozaawansowany', '135 zębów', '~1 dzień co 10 lat', '~10 lat', 'Omega, Tudor, IWC, Breitling'],
        ['Wysoka precyzja', 'Złożony mechanizm', '~1 dzień na 100+ lat', '100+ lat', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Odczyt tarczy księżycowej', html: 'W większości zegarków z fazą Księżyca tarcza księżycowa pokazuje <strong>dwa księżyce</strong> naprzeciw siebie. Każda pełnia pokrywa się ze środkiem górnego okienka. Po jednym pełnym cyklu (29,5 dnia) drugi księżyc zajmuje jego miejsce. Dlatego koło 59-zębowe działa: wykonuje jeden pełny obrót w 59 dni - dokładnie dwa cykle księżycowe.' },
    {
      type: 'summary', title: 'Szybkie zestawienie', items: [
        'Cykl księżycowy (synodyczny) trwa dokładnie 29,53058867 dnia. Narzędzie używa tej wartości dla maksymalnej dokładności.',
        'Osiem faz powtarza się w wiecznym cyklu: nów → sierp przybywający → pierwsza kwadra → księżyc przybywający → pełnia → księżyc ubywający → ostatnia kwadra → sierp ubywający.',
        'Aby ustawić fazę Księżyca w zegarku: znajdź dzisiejszą fazę tutaj, a następnie dopasuj ją na tarczy zegarka.',
        'Nigdy nie forsuj koronki między 21:00 a 3:00. Najpierw przesuń czas poza 3:00.',
        'Standardowe fazy Księżyca 59-zębowe dryfują o około jeden dzień co 2,5 roku. Korekta wymaga przeskoczenia tarczy o jeden klik.',
      ]
    },
  ],
  faq: [
    {
      question: 'Jak ustawić fazę Księżyca w zegarku?',
      answer: 'Znajdź dzisiejszą fazę Księżyca w tym narzędziu. Przesuwaj koronkę (zwykle pozycja 2), aż tarcza księżycowa pokaże pasującą fazę. Unikaj ustawiania między 21:00 a 3:00, gdy mechanizm daty jest załączony.',
    },
    {
      question: 'Jak dokładne są mechaniczne zegarki z fazą Księżyca?',
      answer: 'Większość używa koła z 59 zębami z dokładnością około jednego dnia co 2 lata. Zegarki wysokiej klasy, jak Patek Philippe i A. Lange & Söhne, osiągają dokładność jednego dnia na 100+ lat.',
    },
    {
      question: 'Jaka jest różnica między miesiącem synodycznym a syderycznym?',
      answer: 'Miesiąc syderyczny (27,3 dnia) to orbita Księżyca względem gwiazd. Miesiąc synodyczny (29,53 dnia) to czas między identycznymi fazami i to go śledzą zegarki z fazą Księżyca.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz datę',
      text: 'Użyj selektora daty, aby wybrać dowolną datę - w przeszłości lub przyszłości - i zobaczyć fazę Księżyca.',
    },
    {
      name: 'Odczytaj dane fazy',
      text: 'Karty pokazują nazwę fazy, procent oświetlenia, wiek Księżyca i postęp cyklu.',
    },
    {
      name: 'Znajdź nadchodzące wydarzenia',
      text: 'Daty następnej pełni i nowiu są wyświetlane automatycznie.',
    },
    {
      name: 'Ustaw swój zegarek',
      text: 'Użyj wyświetlonej fazy, aby precyzyjnie ustawić komplikację fazy Księżyca w zegarku.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak ustawić fazę Księżyca w zegarku?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Znajdź dzisiejszą fazę w tym narzędziu. Przesuwaj koronkę, aż tarcza księżycowa pokaże pasującą fazę. Unikaj ustawiania między 21:00 a 3:00.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak dokładne są mechaniczne zegarki z fazą Księżyca?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Większość używa koła z 59 zębami z dokładnością około jednego dnia co 2 lata. Zegarki wysokiej klasy osiągają dokładność jednego dnia na 100+ lat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jaka jest różnica między miesiącem synodycznym a syderycznym?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Miesiąc syderyczny (27,3 dnia) to orbita Księżyca względem gwiazd. Miesiąc synodyczny (29,53 dnia) to czas między identycznymi fazami i to go śledzą zegarki z fazą Księżyca.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Wizualizator faz Księżyca',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak wizualizować fazy Księżyca',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz datę',
          'text': 'Użyj selektora daty, aby wybrać dowolną datę i zobaczyć fazę Księżyca.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Odczytaj dane fazy',
          'text': 'Karty pokazują nazwę fazy, oświetlenie, wiek Księżyca i postęp cyklu.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ustaw swój zegarek',
          'text': 'Użyj wyświetlonej fazy, aby ustawić komplikację fazy Księżyca w zegarku.',
        },
      ],
    },
  ],
};

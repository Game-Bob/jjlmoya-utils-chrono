import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'referencyjny-przewodnik-po-koronce',
  title: 'Przewodnik po Koronce Zegarka',
  description: 'Interaktywny przewodnik po pozycjach koronki, kierunkach nakręcania i funkcjach ustawiania dla popularnych mechanizmów.',
  ui: {
    title: 'Ustawienia Koronki',
    movementLabel: 'Mechanizm',
    selectMovement: 'Wybierz mechanizm',
    customMovement: 'Własny',
    positionLabel: 'Pozycja',
    unscrewFirst: 'Najpierw odkręć koronkę',
    windingLabel: 'Nakręcanie',
    hackLabel: 'Hack',
    dangerZoneLabel: 'Unikaj 21:00\u20133:00',
    directionCW: 'Zgodnie z ruchem wskazówek',
    directionCCW: 'Przeciwnie do ruchu wskazówek',
    directionBoth: 'Dwukierunkowe',
    pullHint: 'Pociągnij koronkę',
    clickPosition: 'Kliknij pozycję',
    position0Title: 'Spoczynek',
    position0Desc: 'Koronka wciśnięta. Zegarek chodzi normalnie.',
    position0Detail: 'Funkcje nakręcania i ustawiania nie są aktywne.',
    position1Title: 'Nakręcanie ręczne',
    position1Desc: 'Obróć koronkę zgodnie z ruchem wskazówek, aby nakręcić sprężynę główną. Poczujesz opór w miarę napinania sprężyny.',
    position1Detail: 'Około 30\u201340 pełnych obrotów z całkowitego zatrzymania. Wirniki automatyczne również nakręcają podczas noszenia.',
    position2Title: 'Szybkie ustawianie daty',
    position2Desc: 'Obróć koronkę zgodnie z ruchem wskazówek, aby przestawić datę. Wskazówka godzinowa pozostaje zsynchronizowana z biegnącymi sekundami.',
    position2Detail: 'UNIKAJ szybkiego ustawiania daty między 21:00 a 3:00, gdy mechanizm zmiany daty jest załączony.',
    position3Title: 'Ustawianie czasu',
    position3Desc: 'Obróć koronkę w dowolnym kierunku, aby przesunąć wskazówki. Wskazówka sekundowa zatrzymuje się (hack) w celu precyzyjnej synchronizacji.',
    position3Detail: 'Pociągnij do pozycji 3, poczekaj, aż sekundy dojdą do 12, a następnie pociągnij do końca. Obróć, aby ustawić czas, i wciśnij z powrotem.',
    screwDownHint: 'Pamiętaj, aby przykręcić koronkę z powrotem dla wodoszczelności.',
    noQuickSet: 'Brak szybkiego ustawiania',
    noHack: 'Nie',
    hasHack: 'Tak',
    crownPositions: 'Pozycje Koronki',
    noteTitle: 'Uwaga',
  },
  seo: [
    { type: 'title', text: 'Przewodnik po Pozycjach Koronki — Jak Prawidłowo Nakręcać, Ustawiać Datę i Czas', level: 2 },
    { type: 'paragraph', html: 'Koronka to jedyny fizyczny interfejs między Tobą a mechanizmem zegarka. Używanie jej nieprawidłowo — nakręcanie wstecz, ustawianie daty o północy lub zbyt mocne ciągnięcie — może uszkodzić mechanizm. Ten przewodnik wyjaśnia każdą pozycję koronki dla kalibrów <strong>ETA, Sellita, Miyota, Seiko i Unitas</strong>, abyś nigdy nie musiał zgadywać.' },
    { type: 'title', text: 'Pozycje Koronki w Skrócie', level: 3 },
    { type: 'glossary', items: [
      { term: 'Pozycja 0 (Spoczynek)', definition: 'Koronka wciśnięta lub przykręcona. Zegarek chodzi normalnie. Żadne funkcje nie są aktywne. Zawsze wracaj tutaj po ustawianiu.' },
      { term: 'Pozycja 1 (Nakręcanie)', definition: 'Pierwsze pociągnięcie lub stan odkręcony. Obróć zgodnie z ruchem wskazówek, aby nakręcić sprężynę główną. Większość automatów nakręca się również przez wirnik.' },
      { term: 'Pozycja 2 (Szybkie ustawianie daty)', definition: 'Drugie pociągnięcie. Obróć zgodnie z ruchem wskazówek, aby przestawić datę. Unikaj używania między 21:00\u20133:00, gdy mechanizm daty jest załączony.' },
      { term: 'Pozycja 3 (Ustawianie czasu)', definition: 'Trzecie pociągnięcie. Zatrzymanie sekundnika (hacking) dla precyzyjnego ustawienia. Swobodny obrót w celu ustawienia czasu. Obecna w większości nowoczesnych automatów.' },
    ] },

    { type: 'title', text: 'Porównanie Mechanizmów: Funkcje Koronki', level: 3 },
    { type: 'table', headers: ['Mechanizm', 'Pozycje', 'Hack', 'Szybkie ust.', 'Kierunek nakr.'], rows: [
      ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['Miyota 8215', '2 (0,1,3)', 'Nie', 'Brak', 'ZRW'],
      ['Miyota 9015', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['Seiko 6R35', '3 (0,1,2,3)', 'Tak', 'Data (ZRW)', 'ZRW'],
      ['Unitas 6497/6498', '1 (0,1,3)', 'Nie', 'Brak', 'ZRW'],
    ] },

    { type: 'diagnostic', variant: 'warning', title: 'Częste Błędy z Koronką', icon: 'mdi:alert', badge: 'NIE RÓB TEGO', html: 'Nigdy nie ustawiaj szybko daty między <strong>21:00 a 3:00</strong>, gdy koło daty jest załączone. Może to uszkodzić zęby i wymagać pełnego serwisu mechanizmu. Jeśli musisz zmienić datę w tym oknie, najpierw przesuń czas po 3:00, ustaw datę, a następnie wróć do poprawnego czasu.' },

    { type: 'tip', title: 'Koronki Wkręcane', html: 'Zegarki nurkowe i sportowe często mają wkręcane koronki dla wodoszczelności. <strong>Zawsze odkręć przed pociągnięciem</strong>. Obracaj przeciwnie do ruchu wskazówek, aż koronka wyskoczy, a następnie pociągnij do żądanej pozycji. Po ustawieniu wciśnij, a następnie obróć zgodnie z ruchem wskazówek, lekko dociskając, aż do oporu. <strong>Nie dokręcaj zbyt mocno.</strong>' },

    { type: 'comparative', columns: 2, items: [
      { title: 'Standardowa Koronka', icon: 'mdi:crown', description: 'Koronka typu push-pull, spotykana w większości zegarków wizytowych i codziennych automatów. 2\u20134 pozycje. Wodoszczelność zwykle 30\u2013100 m.', points: ['Natychmiastowy dostęp, bez odkręcania', 'Ograniczona wodoszczelność', 'Powszechna w ETA, Miyota, Seiko'] },
      { title: 'Koronka Wkręcana', icon: 'mdi:lock', description: 'Koronka gwintowana wkręcana w tubę koperty. Standard w zegarkach nurkowych i narzędziowych. Wodoszczelność 200 m+.', points: ['Doskonała wodoszczelność', 'Wymaga odkręcenia przed użyciem', 'Powszechna w Rolex, Omega, Seiko Prospex'], highlight: true },
    ] },

    { type: 'summary', title: 'Szybka Referencja', items: [
      'Zawsze nakręcaj zgodnie z ruchem wskazówek — obrót wsteczny aktywuje sprzęgło poślizgowe, ale nie nakręca.',
      'Jeśli Twój zegarek ma wkręcaną koronkę, odkręć ją przed pociągnięciem do dowolnej pozycji.',
      'Unikaj szybkiego ustawiania daty między 21:00 a 3:00. W razie potrzeby przesuń czas po 3:00.',
      'Mechanizmy ręczne (np. Unitas 6498) mają mniej pozycji. Nakręć w pełni przed ustawieniem czasu.',
      'Mechanizmy bez hackowania (np. Miyota 8215) wymagają innej techniki: obróć za docelową minutę, a następnie powoli wróć.',
    ] },
  ],
  faq: [
    {
      question: 'Ile pozycji koronki ma mój zegarek?',
      answer: 'Większość automatycznych mechanizmów ma 3 funkcjonalne pozycje poza spoczynkiem: pozycja 1 do ręcznego nakręcania, pozycja 2 do szybkiego ustawiania daty i pozycja 3 do ustawiania czasu z hackingiem. Mechanizmy ręczne, takie jak Unitas 6498, mają tylko 1 funkcjonalną pozycję (nakręcanie, z ustawianiem czasu po dalszym pociągnięciu). Koronki wkręcane dodają dodatkowy krok: odkręć przed pociągnięciem.',
    },
    {
      question: 'Czy mogę uszkodzić zegarek, nakręcając go wstecz?',
      answer: 'Nie, ale to nic nie daje. Nowoczesne mechanizmy używają sprzęgła poślizgowego, które rozłącza się przy obrocie wstecznym, więc nakręcanie wstecz nie powoduje uszkodzeń, ale również nie nakręca sprężyny głównej. Zawsze nakręcaj zgodnie z ruchem wskazówek w przypadku ręcznego nakręcania. Jedynym wyjątkiem są niektóre vintageowe zegarki kieszonkowe i wczesne mechanizmy automatyczne.',
    },
    {
      question: 'Co to jest strefa zagrożenia zmiany daty i jak jej uniknąć?',
      answer: 'Strefa zagrożenia to zazwyczaj 21:00 do 3:00, gdy mechanizm zmiany daty jest fizycznie załączony z kołem daty. Szybkie ustawianie w tym oknie może uszkodzić zęby kół. Aby bezpiecznie ustawić datę: przesuń czas po 3:00, ustaw datę na poprzedni dzień, a następnie przesuń czas do przodu do poprawnej daty i godziny.',
    },
    {
      question: 'Dlaczego moja wskazówka sekundowa nie zatrzymuje się po pociągnięciu koronki?',
      answer: 'Niektóre mechanizmy nie mają mechanizmu hackowania. Popularne kalibry bez hackowania to Miyota 8215, Unitas 6497/6498 i wiele vintageowych mechanizmów. Aby dokładnie ustawić czas w mechanizmie bez hackowania: obróć koronkę 5\u201310 minut za docelową minutę, a następnie powoli obracaj wstecz, aż wskazówka minutowa znajdzie się dokładnie na żądanym znaczniku.',
    },
    {
      question: 'Skąd mam wiedzieć, ile obrotów potrzeba, aby w pełni nakręcić zegarek?',
      answer: 'Większość automatycznych mechanizmów wymaga 30\u201340 pełnych obrotów koronki z całkowitego zatrzymania. Mechanizmy ręczne różnią się: Unitas 6498 potrzebuje około 30\u201335 obrotów, podczas gdy Seiko 6R35 z rezerwą 70 godzin potrzebuje 50\u201360 obrotów. Zatrzymaj się, gdy poczujesz wyraźny opór — wymuszanie dalej może uszkodzić sprężynę główną.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Znajdź swój kaliber mechanizmu',
      text: 'Sprawdź na deklu (często grawerowany) lub na samym mechanizmie przez przezroczysty dekiel. Popularne numery: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Wybierz go w przewodniku',
      text: 'Wybierz swój mechanizm z listy rozwijanej. Wizualizacja koronki i panel aktualizują się, pokazując dokładne pozycje, kierunek nakręcania i funkcje.',
    },
    {
      name: 'Przejdź przez każdą pozycję',
      text: 'Kliknij przyciski pozycji (0\u20133) lub użyj przycisku Pociągnij. Przeczytaj opis i zwróć uwagę na ostrzeżenie o strefie zagrożenia przy ustawianiu daty.',
    },
    {
      name: 'Zastosuj na swoim zegarku',
      text: 'Mając przewodnik otwarty obok, przećwicz na swoim zegarku. Nakręcaj w prawidłowym kierunku, unikaj strefy zagrożenia, a następnie przykręć koronkę z powrotem.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ile pozycji koronki ma mój zegarek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Większość automatycznych mechanizmów ma 3 funkcjonalne pozycje poza spoczynkiem: pozycja 1 do ręcznego nakręcania, pozycja 2 do szybkiego ustawiania daty i pozycja 3 do ustawiania czasu z hackingiem.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę uszkodzić zegarek, nakręcając go wstecz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie. Nowoczesne mechanizmy używają sprzęgła poślizgowego, które rozłącza się przy obrocie wstecznym, więc nakręcanie wstecz nie powoduje uszkodzeń, ale również nie nakręca sprężyny głównej.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co to jest strefa zagrożenia zmiany daty?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Strefa zagrożenia to zazwyczaj 21:00 do 3:00. Aby bezpiecznie ustawić datę: przesuń czas po 3:00, ustaw datę na poprzedni dzień, a następnie przesuń do przodu.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dlaczego moja wskazówka sekundowa nie zatrzymuje się po pociągnięciu koronki?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Niektóre mechanizmy nie mają mechanizmu hackowania. Popularne kalibry bez hackowania to Miyota 8215 i Unitas 6497/6498. Aby ustawić czas: obróć za docelową wartość, a następnie powoli wstecz.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ile obrotów potrzeba, aby w pełni nakręcić zegarek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Większość automatycznych mechanizmów wymaga 30-40 pełnych obrotów koronki. Mechanizmy ręczne różnią się. Zatrzymaj się, gdy poczujesz wyraźny opór.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Przewodnik po Koronce Zegarka',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak korzystać z Przewodnika po Koronce Zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Znajdź swój kaliber mechanizmu',
          'text': 'Sprawdź na deklu (często grawerowany) lub na samym mechanizmie przez przezroczysty dekiel. Popularne numery: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wybierz go w przewodniku',
          'text': 'Wybierz swój mechanizm z listy rozwijanej. Wizualizacja koronki i panel aktualizują się, pokazując dokładne pozycje, kierunek nakręcania i funkcje.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Przejdź przez każdą pozycję',
          'text': 'Kliknij przyciski pozycji (0\u20133) lub użyj przycisku Pociągnij. Przeczytaj opis i zwróć uwagę na ostrzeżenie o strefie zagrożenia przy ustawianiu daty.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Zastosuj na swoim zegarku',
          'text': 'Mając przewodnik otwarty obok, przećwicz na swoim zegarku. Nakręcaj w prawidłowym kierunku, unikaj strefy zagrożenia, a następnie przykręć koronkę z powrotem.',
        },
      ],
    },
  ],
};

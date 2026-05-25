import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'kalkulator-dlugosci-paska',
  title: 'Kalkulator Długości Paska do Zegarka',
  description: 'Oblicz idealny rozmiar paska do swojego nadgarstka. Otrzymaj zalecenia dla pasków dwuczęściowych i NATO na podstawie rozmiaru nadgarstka i wymiarów zegarka.',
  ui: {
    title: 'Kalkulator Długości Paska',
    wristLabel: 'Obwód nadgarstka',
    wristPlaceholder: 'np. 170',
    lugLabel: 'Odległość między uchem a uchem',
    lugPlaceholder: 'np. 45',
    fitLabel: 'Preferowane dopasowanie',
    fitTight: 'Ciasne',
    fitRegular: 'Normalne',
    fitLoose: 'Luźne',
    unitLabel: 'Jednostka',
    standardLabel: 'Standardowy rozmiar fabryczny',
    bespokeLabel: 'Rozmiar na miarę',
    natoLabel: 'Długość paska NATO',
    longSide: 'Długa strona',
    shortSide: 'Krótka strona',
    totalLength: 'Długość całkowita',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Nadgarstki < 6.0 in',
    sizeS: 'Small (S) - Nadgarstki 6.0 do 6.5 in',
    sizeM: 'Medium (M) - Nadgarstki 6.5 do 7.0 in',
    sizeL: 'Large (L) - Nadgarstki 7.0 do 7.5 in',
    sizeXL: 'Extra Large (XL) - Nadgarstki 7.5 do 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Nadgarstki > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Przewodnik po Rozmiarach Pasków do Zegarków i Kalkulator Długości',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wybór idealnego paska do zegarka jest niezbędny zarówno dla wygody, jak i równowagi estetycznej. Zbyt długi pasek pozostawia nieestetyczny zwisający koniec, podczas gdy zbyt krótki może nie zapinać się bezpiecznie. Ten przewodnik pomoże Ci określić standardowe rozmiary fabryczne, wymiary na miarę i długości pasków NATO na podstawie rozmiaru nadgarstka, konstrukcji zegarka i pożądanego dopasowania.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Standardowy rozmiar fabryczny' },
        { value: '160-190mm', label: 'Pasuje do większości nadgarstków' },
        { value: '7 otworów', label: 'Typowe opcje regulacji' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Zrozumieć paski dwuczęściowe: Długa vs. krótka strona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dwuczęściowy pasek do zegarka jest określany przez dwie liczby, takie jak <strong>120/80 mm</strong>. Pierwsza liczba (np. 120 mm) to <strong>długa strona</strong> (strona z otworami), która jest mocowana przy pozycji godziny 6. Druga liczba (np. 80 mm) to <strong>krótka strona</strong> (strona klamry), która jest mocowana przy pozycji godziny 12. Sama klamra nie jest wliczana do tych pomiarów.',
    },
    {
      type: 'title',
      text: 'Tabela standardowych rozmiarów według obwodu nadgarstka',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Rozmiar nadgarstka', 'Pasek skórzany/gumowy', 'Pasek NATO', 'Zalecane dopasowanie'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Dopasowanie ciasne/małe'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Standardowe średnie'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Standardowe duże'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Dopasowanie extra duże'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Dopasowanie podwójnie extra duże'],
      ],
    },
    {
      type: 'title',
      text: 'Wyjaśnienie rozmiarów na miarę',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zamawiając pasek na miarę, możesz uzyskać absolutnie idealne dopasowanie. Zamiast zadowalać się standardowymi pozycjami otworów, pasek na miarę oblicza dokładną długość każdej strony, tak aby klamra znajdowała się dokładnie na środku spodniej strony nadgarstka. Wzór wykorzystuje całkowity obwód nadgarstka, odejmuje odległość między uchami zegarka i dzieli pozostałą długość zgodnie z geometrią nadgarstka.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Paski na miarę',
          description: 'Dopasowane specjalnie do Twojego nadgarstka i wymiarów koperty. Gwarantują idealne wyśrodkowanie klamry i eliminują nadmiar paska.',
          points: [
            'Idealne wyśrodkowanie klamry',
            'Pozycje otworów na miarę',
            'Bard nadmiaru paska',
            'Premium wygląd i odczucie',
          ],
        },
        {
          title: 'Standardowe paski fabryczne',
          description: 'Masowo produkowane rozmiary zaprojektowane do dopasowania do szerokiej gamy nadgarstków przy użyciu wielu otworów. Szybkie i ekonomiczne.',
          points: [
            'Niższy koszt',
            'Natychmiastowa dostępność',
            'Pasują do wielu zegarków',
            'Standaryzowane wymiary',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Kluczowa terminologia pasków do zegarków',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Odległość między uchami (Lug-to-Lug)',
          definition: 'Całkowita odległość pionowa od czubka górnego ucha do czubka dolnego ucha. To nie jest średnica koperty, ale całkowita długość sztywnej głowy zegarka spoczywającej na nadgarstku.',
        },
        {
          term: 'Krótka strona (Klamra)',
          definition: 'Sekcja paska przymocowana do pozycji godziny 12 koperty. Zawiera klamrę, ale jest wykluczona z pomiarów długości.',
        },
        {
          term: 'Długa strona (Koniec)',
          definition: 'Sekcja paska przymocowana do pozycji godziny 6. Ma otwory regulacyjne do dostosowania napięcia.',
        },
        {
          term: 'Pasek NATO',
          definition: 'Jednoczęściowy pasek nylonowy, który przechodzi pod kopertą zegarka przez sprężynki. Jest bardzo regulowany i trwały.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Prawidłowe mierzenie nadgarstka',
      html: 'Aby uzyskać dokładny pomiar, owiń elastyczną taśmę mierniczą (nie za ciasno) wokół miejsca, gdzie zwykle nosisz zegarek. Jeśli nie masz taśmy, użyj sznurka lub paska papieru, zaznacz miejsce zakładki i zmierz długość na płasko linijką.',
    },
    {
      type: 'title',
      text: 'Dlaczego odległość między uchami jest kluczowa dla rozmiaru paska',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu kolekcjonerów zapomina, że koperta zegarka działa jako sztywne przedłużenie paska. Zegarek z długą odległością między uchami 50 mm zajmuje więcej miejsca na nadgarstku niż zegarek dresswatch 40 mm. W związku z tym większy zegarek wymaga krótszych pasków, aby osiągnąć ten sam całkowity rozmiar pętli. Nieuwzględnienie odległości między uchami jest główną przyczyną źle dopasowanych pasków.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Unikanie przesunięcia klamry i zwisu koperty',
      html: 'Jeśli krótka strona paska jest zbyt długa lub zbyt krótka dla Twojego nadgarstka, klamra ześlizgnie się na bok. Powoduje to przesunięcie koperty zegarka ze środka, co prowadzi do dyskomfortu i zwiększonego ryzyka zarysowania koperty lub zapięcia. Zawsze dąż do tego, aby klamra znajdowała się na środku płaskiej spodniej strony nadgarstka.',
    },
    {
      type: 'proscons',
      title: 'Pasek NATO vs. pasek dwuczęściowy',
      items: [
        {
          pro: 'Paski NATO są bardzo regulowane i zapobiegają utracie zegarka w przypadku pęknięcia sprężynki.',
          con: 'Paski NATO dodają grubości pod kopertą zegarka.',
        },
        {
          pro: 'Paski dwuczęściowe utrzymują kopertę płasko przy skórze dla cieńszego profilu.',
          con: 'Paski dwuczęściowe wymagają precyzyjnego dopasowania i oferują mniej regulacji.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Jak mierzy się długość paska do zegarka?',
      answer: 'Długość paska do zegarka jest zwykle wyrażana w dwóch liczbach, takich jak 120/80 mm. Pierwsza liczba to długość długiej strony (końca), a druga to krótka strona (klamry).',
    },
    {
      question: 'Gdzie powinna znajdować się klamra na nadgarstku?',
      answer: 'Idealnie, klamra powinna być wyśrodkowana na spodniej stronie nadgarstka. Jeśli jest przesunięta, koperta zegarka zejdzie ze środka. Dostosowanie proporcji między długą a krótką stroną pomaga osiągnąć idealne wyśrodkowanie.',
    },
    {
      question: 'Jak odległość między uchami wpływa na potrzebną długość paska?',
      answer: 'Koperta zegarka jest sztywną częścią całej pętli paska. Większy zegarek z długą odległością między uchami (np. 50 mm) zmniejsza długość paska potrzebną do owinięcia nadgarstka w porównaniu z mniejszym zegarkiem (np. 40 mm) na tym samym nadgarstku.',
    },
    {
      question: 'Po której stronie jest długa końcówka paska?',
      answer: 'Tradycyjnie długa strona paska (z otworami regulacyjnymi) jest mocowana do pozycji godziny 6 koperty, skierowana w Twoją stronę. Krótka strona (z klamrą) jest mocowana do pozycji godziny 12.',
    },
    {
      question: 'Jak ciasny powinien być pasek do zegarka?',
      answer: 'Pasek powinien być dopasowany, ale wygodny. Powinieneś móc wsunąć jeden palec pod pasek bez użycia siły. Zbyt ciasny pasek może utrudniać krążenie, podczas gdy zbyt luźny spowoduje obracanie się koperty.',
    },
    {
      question: 'Czy mogę używać paska NATO w każdym zegarku?',
      answer: 'Tak, pod warunkiem, że zegarek ma standardowe sprężynki z wystarczającą przestrzenią między kopertą a sprężynką. Paski NATO przechodzą pod kopertą, więc bardzo wąskie przestrzenie mogą wymagać zakrzywionych sprężynek lub cieńszych materiałów paska.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Zmierz nadgarstek',
      text: 'Użyj elastycznej taśmy mierniczej, aby określić obwód nadgarstka w milimetrach lub calach.',
    },
    {
      name: 'Zmierz odległość między uchami',
      text: 'Zmierz wysokość koperty zegarka od czubka górnego ucha do czubka dolnego ucha.',
    },
    {
      name: 'Wybierz preferowane dopasowanie',
      text: 'Wybierz, czy wolisz dopasowanie ciasne, normalne czy luźne.',
    },
    {
      name: 'Oblicz zalecenia',
      text: 'Sprawdź standardowy rozmiar fabryczny, rozmiary na miarę dla długiej i krótkiej strony oraz idealną długość NATO.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak mierzy się długość paska do zegarka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Długość paska do zegarka jest zwykle wyrażana w dwóch liczbach, takich jak 120/80 mm. Pierwsza liczba to długość długiej strony (końca), a druga to krótka strona (klamry).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Gdzie powinna znajdować się klamra na nadgarstku?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealnie, klamra powinna być wyśrodkowana na spodniej stronie nadgarstka. Jeśli jest przesunięta, koperta zegarka zejdzie ze środka. Dostosowanie proporcji między długą a krótką stroną pomaga osiągnąć idealne wyśrodkowanie.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak odległość między uchami wpływa na potrzebną długość paska?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Koperta zegarka jest sztywną częścią całej pętli paska. Większy zegarek z długą odległością między uchami (np. 50 mm) zmniejsza długość paska potrzebną do owinięcia nadgarstka w porównaniu z mniejszym zegarkiem (np. 40 mm) na tym samym nadgarstku.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Po której stronie jest długa końcówka paska?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tradycyjnie długa strona paska (z otworami regulacyjnymi) jest mocowana do pozycji godziny 6 koperty, skierowana w Twoją stronę. Krótka strona (z klamrą) jest mocowana do pozycji godziny 12.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jak ciasny powinien być pasek do zegarka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pasek powinien być dopasowany, ale wygodny. Powinieneś móc wsunąć jeden palec pod pasek bez użycia siły. Zbyt ciasny pasek może utrudniać krążenie, podczas gdy zbyt luźny spowoduje obracanie się koperty.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę używać paska NATO w każdym zegarku?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak, pod warunkiem, że zegarek ma standardowe sprężynki z wystarczającą przestrzenią między kopertą a sprężynką. Paski NATO przechodzą pod kopertą, więc bardzo wąskie przestrzenie mogą wymagać zakrzywionych sprężynek lub cieńszych materiałów paska.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Długości Paska do Zegarka',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Kalkulator Długości Paska do Zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Zmierz nadgarstek',
          'text': 'Użyj elastycznej taśmy mierniczej, aby określić obwód nadgarstka w milimetrach lub calach.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Zmierz odległość między uchami',
          'text': 'Zmierz wysokość koperty zegarka od czubka górnego ucha do czubka dolnego ucha.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Wybierz preferowane dopasowanie',
          'text': 'Wybierz, czy wolisz dopasowanie ciasne, normalne czy luźne.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Oblicz zalecenia',
          'text': 'Sprawdź standardowy rozmiar fabryczny, rozmiary na miarę dla długiej i krótkiej strony oraz idealną długość NATO.'
        }
      ]
    } as any
  ]
};

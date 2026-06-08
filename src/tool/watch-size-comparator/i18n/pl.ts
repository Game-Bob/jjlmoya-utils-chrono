import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'porownywarka-rozmiarow-zegarkow',
  title: 'Porownywarka rozmiarow zegarkow: wizualne dopasowanie na nadgarstek',
  description: 'Porównuj rozmiary kopert zegarków na wizualizacji. Wpisz średnicę, lug-to-lug i obwód nadgarstka, aby sprawdzić, jak zegarek będzie leżał na ręce, zanim go kupisz.',
  ui: {
    title: 'Porównywarka rozmiarów zegarków',
    addWatch: 'Dodaj zegarek',
    watchName: 'Nazwa zegarka',
    watchNamePlaceholder: 'np. Rolex Submariner',
    caseDiameter: 'Średnica koperty',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Grubość',
    wristSize: 'Obwód nadgarstka',
    wristSizePlaceholder: 'np. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Usuń',
    yourWatches: 'Twoje zegarki',
    fitLegend: 'Legenda dopasowania',
    excellentFit: 'Idealny',
    goodFit: 'Dobry',
    borderlineFit: 'Graniczny',
    largeFit: 'Za duży',
    wristCurve: 'nadgarstek',
    nameRequired: 'Podaj nazwę zegarka',
    watchTooLarge: 'Zegarek wystaje poza nadgarstek',
    l2lExceedsWrist: 'Lug-to-lug przekracza szerokość nadgarstka',
    excellentDesc: 'Proporcjonalny - lug-to-lug mieści się dobrze w obrębie nadgarstka.',
    goodDesc: 'Dobre dopasowanie - lekko wystaje, ale wciąż wygodny.',
    borderlineDesc: 'Graniczny - ucha dochodzą do krawędzi nadgarstka.',
    largeDesc: 'Za duży - ucha prawdopodobnie wystają poza nadgarstek.',
    fitsWell: 'Dobrze leży',
    slightlyLarge: 'Lekko za duży',
    tooLarge: 'Za duży',
    source: 'Przewodnik rozmiarów',
    estimateNote: 'Wprowadź wymiary i dodaj zegarek, aby zobaczyć, jak leży na nadgarstku.',
  },
  seo: [
    { type: 'title', text: 'Porownywarka rozmiarow zegarkow: wizualne dopasowanie na nadgarstek', level: 2 },
    { type: 'paragraph', html: 'Zastanawiasz się, czy <strong>42-milimetrowy zegarek</strong> będzie pasował na Twój <strong>17-centymetrowy nadgarstek</strong>? Albo czy 48-milimetrowy lug-to-lug będzie wystawać? Porównywarka rozmiarów zegarków daje wizualną odpowiedź. Wpisz średnicę koperty, lug-to-lug, grubość i obwód nadgarstka - narzędzie rysuje zegarek w skali i oznacza dopasowanie kolorami od <span style="color:#22c55e">zielonego (idealny)</span> do <span style="color:#ef4444">czerwonego (za duży)</span>. Działa w jednostkach <strong>metrycznych i calowych</strong>.' },
    { type: 'title', text: 'Słowniczek rozmiarów zegarków', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Średnica koperty', definition: 'Szerokość koperty mierzona w poprzek tarczy, bez koronki. Typowy zakres: 34-46 mm. Najczęściej podawany wymiar, ale nie jedyny wpływający na dopasowanie.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'Odległość między górnym a dolnym uchem, do którego mocuje się pasek. To ten wymiar decyduje, czy zegarek wystaje poza nadgarstek. Zegarek 40 mm z L2L 50 mm nosi się większy niż 42 mm z L2L 46 mm.' },
        { term: 'Szerokość płaska nadgarstka', definition: 'Szerokość górnej powierzchni nadgarstka, w przeciwieństwie do jego obwodu. W przybliżeniu obwód nadgarstka / π minus 2-4 cm. To na tym wymiarze faktycznie spoczywa zegarek.' },
        { term: 'Stosunek koperty do nadgarstka', definition: 'Średnica koperty podzielona przez szerokość nadgarstka. Wskaźnik 0,6-0,75 (60-75%) uznaje się za klasyczne proporcjonalne dopasowanie.' },
      ]
    },

    { type: 'title', text: 'Jaki rozmiar zegarka pasuje na mój nadgarstek?', level: 3 },
    {
      type: 'table', headers: ['Obwód nadgarstka', 'Szer. płaska (ok.)', 'Idealna średnica koperty', 'Maks. Lug-to-Lug', 'Najlepszy do'], rows: [
        ['14-15 cm (5,5-5,9 cala)', '38-42 mm', '30-34 mm', '38-42 mm', 'Zegarków vintage i garniturowych'],
        ['15-16 cm (5,9-6,3 cala)', '40-44 mm', '34-36 mm', '40-44 mm', 'Małych klasycznych zegarków'],
        ['16-17 cm (6,3-6,7 cala)', '42-46 mm', '36-39 mm', '42-46 mm', 'Uniwersalnych rozmiarów na co dzień'],
        ['17-18 cm (6,7-7,1 cala)', '44-48 mm', '38-42 mm', '44-48 mm', 'Optymalnego rozmiaru dla większości marek'],
        ['18-19 cm (7,1-7,5 cala)', '46-50 mm', '40-44 mm', '46-50 mm', 'Zegarków nurkowych i GMT'],
        ['19-20 cm (7,5-7,9 cala)', '48-52 mm', '42-46 mm', '48-52 mm', 'Zegarków narzędziowych i pilotażowych'],
        ['20-21 cm (7,9-8,3 cala)', '50-54 mm', '44-48 mm', '50-54 mm', 'Zegarków oversize i flieger'],
      ]
    },

    { type: 'title', text: 'Jak zmierzyć nadgarstek pod zegarek?', level: 3 },
    {
      type: 'list', items: [
        'Owiń elastyczną miarą krawiecką nadgarstek tuż za kością nadgarstka (wyrostek łokciowy). Miara powinna przylegać, ale nie uciskać.',
        'Jeśli nie masz miary, użyj sznurka lub przewodu, zaznacz miejsce styku, a następnie zmierz odcinek linijką.',
        'Zapisz wynik w centymetrach lub calach. Przeciętny obwód nadgarstka u mężczyzn to 17-19 cm (6,7-7,5 cala), u kobiet 14-16 cm (5,5-6,3 cala).',
        'Aby oszacować płaską szerokość nadgarstka, odejmij 2-4 cm od obwodu lub skorzystaj z automatycznego oszacowania w narzędziu.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug to Lug to prawdziwy wyznacznik dopasowania', icon: 'mdi:ruler', html: 'Większość osób zwraca uwagę na <strong>średnicę koperty</strong>, ale to <strong>lug-to-lug</strong> decyduje, czy zegarek pasuje na Twój nadgarstek. Zegarek z L2L 48 mm na 55-milimetrowym płaskim nadgarstku (17 cm obwodu) zajmuje 87% szerokości nadgarstka. Powyżej 65% ucha zaczynają zbliżać się do krawędzi. <strong>Zawsze najpierw sprawdzaj L2L.</strong>' },

    { type: 'tip', title: 'CM czy cale? Używaj tego, co znasz', html: 'Narzędzie obsługuje zarówno jednostki metryczne, jak i calowe. Zmierz nadgarstek w systemie, którego używasz na co dzień. Wymiary koperty zegarka podaje się <strong>zawsze w milimetrach</strong> (nawet w USA), więc średnica i L2L pozostają w mm - przełącza się tylko pomiar nadgarstka. To zgodne z tym, jak działa branża zegarkowa.' },

    {
      type: 'summary', title: 'Szybka lista kontrolna przed zakupem', items: [
        'Zmierzy obwód nadgarstka i wprowadź go w narzędziu.',
        'Sprawdź lug-to-lug zegarka - nie tylko średnicę koperty.',
        'Zegarek powinien zajmować 60-75% płaskiej szerokości nadgarstka, aby pasował klasycznie.',
        'Jeśli ucha wystają poza krawędzie nadgarstka, zegarek będzie wydawał się za duży niezależnie od średnicy.',
        'Porównaj kilka zegarków obok siebie w narzędziu przed podjęciem decyzji zakupowej.',
      ]
    },
  ],
  faq: [
    {
      question: 'Jak zmierzyć nadgarstek pod zegarek?',
      answer: 'Użyj elastycznej miary krawieckiej wokół kości nadgarstka. Możesz też owinąć sznurek, zaznaczyć miejsce styku i zmierzyć linijką. Przeciętny obwód to 17-19 cm u mężczyzn, 14-16 cm u kobiet.',
    },
    {
      question: 'Czym jest lug-to-lug i dlaczego ma znaczenie?',
      answer: 'Lug-to-lug to odległość między górnym a dolnym uchem koperty. To on decyduje, czy zegarek wystaje poza nadgarstek. Zegarek z lug-to-lug 48 mm na 17-centymetrowym nadgarstku (≈55 mm szerokości płaskiej) jest proporcjonalny przy 87%. Powyżej 65% zaczyna wystawać.',
    },
    {
      question: 'Jaki rozmiar zegarka pasuje na nadgarstek 17 cm?',
      answer: 'Nadgarstek 17 cm (≈55 mm szer. płaskiej) dobrze przyjmuje zegarki o średnicy 36-42 mm i lug-to-lug 44-50 mm. Optymalny wybór to 38-40 mm z L2L 46-48 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wpisz obwód nadgarstka',
      text: 'Podaj obwód nadgarstka w centymetrach. Narzędzie na bieżąco aktualizuje wizualny zarys nadgarstka.',
    },
    {
      name: 'Wprowadź wymiary zegarka',
      text: 'Wpisz średnicę koperty, lug-to-lug i grubość w milimetrach.',
    },
    {
      name: 'Dodaj i porównuj',
      text: 'Kliknij "Dodaj zegarek", aby go zapisać. Dodaj kilka zegarków i przełączaj się między nimi, by porównać dopasowanie.',
    },
    {
      name: 'Odczytaj kolor',
      text: 'Zielony = idealny, żółty = graniczny, czerwony = za duży na Twój nadgarstek.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak zmierzyć nadgarstek pod zegarek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Użyj elastycznej miary krawieckiej wokół kości nadgarstka. Przeciętny obwód to 17-19 cm u mężczyzn, 14-16 cm u kobiet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czym jest lug-to-lug i dlaczego ma znaczenie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-lug to odległość między górnym a dolnym uchem koperty. Decyduje, czy zegarek wystaje poza nadgarstek.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jaki rozmiar zegarka pasuje na nadgarstek 17 cm?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nadgarstek 17 cm pasuje do zegarków o średnicy 36-42 mm z lug-to-lug 44-50 mm. Optymalnie 38-40 mm z L2L 46-48 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Porównywarka rozmiarów zegarków',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak porównywać rozmiary zegarków',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wpisz obwód nadgarstka',
          'text': 'Podaj obwód nadgarstka w centymetrach.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wprowadź wymiary zegarka',
          'text': 'Wpisz średnicę koperty, lug-to-lug i grubość.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Dodaj i porównuj',
          'text': 'Kliknij "Dodaj zegarek", aby go zapisać. Dodaj kilka zegarków, by je porównać.',
        },
      ],
    },
  ],
};

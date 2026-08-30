import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'wyszukiwarka-sprezyn',
  title: 'Wyszukiwarka Spręzyn Głównych',
  description: 'Oblicz wymiary sprężyny głównej na podstawie pomiarów bębna dla zabytkowych mechanizmów zegarkowych.',
  ui: {
    title: 'Wyszukiwarka Spręzyn Głównych',
    barrelLabel: 'Średnica wewnętrzna bębna',
    arborLabel: 'Średnica trzpienia bębna',
    heightLabel: 'Wysokość bębna',
    turnsLabel: 'Liczba obrotów',
    calculate: 'Oblicz',
    resultThickness: 'Grubość',
    resultHeight: 'Wysokość',
    resultLength: 'Długość',
    resultStrength: 'Siła',
    strengthWeak: 'Lekka',
    strengthMedium: 'Średnia',
    strengthStrong: 'Mocna',
    commercial: 'Rozmiar handlowy',
    unitLabel: 'Jednostka',
    mm: 'mm',
    inch: 'cal',
    step1: 'Zmierz średnicę wewnętrzną bębna, średnicę trzpienia i wysokość wewnętrzną suwmiarką.',
    step2: 'Ustaw oczekiwaną liczbę obrotów nakręcania (5-8 manualne, 6-10 automatyczne).',
    step3: 'Przełącz mm/cal dla preferowanego systemu jednostek.',
    tipTitle: 'Wskazówka',
    tipContent: 'Zawsze weryfikuj obliczone wymiary z danymi producenta. Sprawdź w katalogach dostawców przed zamówieniem.',
  },
  seo: [
    { type: 'title', text: 'Wyszukiwarka Spręzyn Głównych - Oblicz Wymiary Spręzyny dla Mechanizmów Zegarkowych', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0,08-0,18 mm', label: 'Typowa grubość sprężyny' },
        { value: '5-10 obrotów', label: 'Standardowy zakres nakręcania' },
        { value: '150-450 mm', label: 'Typowa długość sprężyny' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Renowacja zabytkowego mechanizmu zegarkowego często zaczyna się od identyfikacji właściwej sprężyny głównej. Narzędzie <strong>Wyszukiwarka Sprężyn Głównych</strong> pomaga obliczyć teoretyczne wymiary sprężyny na podstawie geometrii bębna. Po wprowadzeniu średnicy wewnętrznej bębna, średnicy trzpienia, wysokości bębna i oczekiwanej liczby obrotów narzędzie oblicza grubość, wysokość i długość sprężyny. Wyniki są również wyświetlane jako przybliżone rozmiary handlowe w jednostkach metrycznych i calowych, co ułatwia sprawdzenie w katalogach dostawców.' },
    { type: 'title', text: 'Jak obliczane są wymiary sprężyny głównej', level: 3 },
    { type: 'paragraph', html: 'Sprężyna główna zajmuje przestrzeń pierścieniową między ścianką bębna a trzpieniem. <strong>Grubość sprężyny</strong> jest szacowana jako <strong>(średnica wewnętrzna bębna - średnica trzpienia) / (2 x liczba obrotów + 1,5)</strong>, gdzie dodatkowe 1,5 uwzględnia mocowanie końca sprężyny i przestrzeń, jaką sprężyna zajmuje względem siebie. <strong>Długość sprężyny</strong> oblicza się według wzoru <strong>L = pi x liczba obrotów x (średnica wewnętrzna bębna + średnica trzpienia) / 2</strong>, co daje całkowitą długość taśmy po rozłożeniu na płasko. <strong>Wysokość sprężyny</strong> jest równa wewnętrznej wysokości bębna pomniejszonej o niewielki luz (zazwyczaj 0,1 mm), aby zapobiec ocieraniu o pokrywę bębna.' },
    { type: 'title', text: 'Jak zmierzyć bęben w celu doboru sprężyny głównej', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Średnica wewnętrzna bębna', definition: 'Wewnętrzna średnica bębna mierzona suwmiarką. Jest to największy okrąg, jaki może zająć sprężyna główna. Typowy zakres: 8-30 mm.' },
        { term: 'Średnica trzpienia bębna', definition: 'Średnica trzpienia bębna w najszerszym miejscu, gdzie zaczepia się wewnętrzny zwój sprężyny głównej. Mniejsze trzpienie pozwalają na dłuższe sprężyny w tym samym bębnie.' },
        { term: 'Wysokość bębna', definition: 'Wewnętrzna wysokość bębna. Wysokość sprężyny głównej musi być nieco mniejsza (0,05-0,15 mm), aby umożliwić swobodny obrót bez tarcia o pokrywę.' },
        { term: 'Liczba obrotów', definition: 'Liczba pełnych obrotów nakręcania, jakie zapewnia mechanizm. Kalibry ręczne zazwyczaj oferują 5-8 obrotów, automatyczne 6-10 obrotów.' },
      ],
    },
    { type: 'title', text: 'Siła sprężyny i jej znaczenie dla mechanizmu', level: 3 },
    { type: 'paragraph', html: '<strong>Grubość sprężyny</strong> jest głównym czynnikiem determinującym moment obrotowy przekazywany do koła zębatego. Grubsza sprężyna (powyżej 0,14 mm) zapewnia wysoki moment obrotowy odpowiedni dla mechanizmów z komplikacjami, takimi jak chronografy lub mechanizmy bicia. Średnie sprężyny (0,10-0,14 mm) są standardem dla większości kalibrów tylko z czasem i datą. Cienkie sprężyny (poniżej 0,10 mm) występują w małych mechanizmach damskich lub ultracienkich kalibrach. Zawsze stosuj się do oryginalnych specyfikacji producenta, jeśli są dostępne; zbyt mocna sprężyna może uszkodzić trzpień bębna lub czopy koła zębatego.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Użycie niewłaściwej sprężyny głównej może uszkodzić mechanizm',
      html: 'Zamontowanie sprężyny, która jest <strong>zbyt gruba</strong>, zwiększa tarcie i moment obrotowy poza granice projektowe, potencjalnie powodując zużycie otworu trzpienia bębna, wygięcie czopa koła środkowego, a nawet pęknięcie bębna. Sprężyna, która jest <strong>zbyt cienka</strong>, nie zapewni wystarczającej amplitudy, powodując spóźnianie się zegarka lub zatrzymanie przed osiągnięciem pełnej rezerwy chodu. Zawsze sprawdzaj obliczone wymiary w znanych katalogach dostawców przed zamówieniem.',
    },
    { type: 'title', text: 'Handlowe systemy rozmiarów sprężyn głównych', level: 3 },
    { type: 'paragraph', html: 'Dostawcy sprężyn głównych katalogują je według wymiarów <strong>długość x wysokość x grubość</strong> w milimetrach. Popularne rozmiary metryczne są zgodne z systemem General Resources lub GR. Systemy calowe są nadal używane przez niektórych amerykańskich i brytyjskich dostawców. Narzędzie wyświetla oba systemy, abyś mógł przeszukiwać katalogi niezależnie od dostawcy. Gdy dokładny obliczony rozmiar nie jest dostępny, wybierz najbliższy rozmiar handlowy, który dokładnie odpowiada wysokości i grubości w granicach 0,005 mm, a następnie dostosuj długość, wybierając sprężynę z tej samej rodziny wysokości i grubości.' },
    { type: 'title', text: 'Uwagi dotyczące zabytkowych kalibrów', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Kalibry szwajcarskie (ETA, FHF, AS, Unitas)</strong> - dobrze udokumentowane w systemie GR. Większość ma znane referencje sprężyn głównych.',
        '<strong>Kalibry francuskie (LIP, France Ebauches)</strong> - często używają niestandardowych proporcji bębna. Mierz dokładnie.',
        '<strong>Kalibry amerykańskie (Waltham, Elgin, Illinois)</strong> - systemy calowe. Użyj wyników w jednostkach imperialnych do sprawdzenia.',
        '<strong>Kalibry japońskie (Seiko, Citizen, Miyota)</strong> - system metryczny z dobrą dokumentacją katalogową dla mechanizmów po 1960 roku.',
        '<strong>Kalibry chińskie (Sea-Gull, DG, Tongji)</strong> - często są kopiami szwajcarskich konstrukcji. Szwajcarskie referencje GR zwykle mają zastosowanie.',
      ],
    },
    {
      type: 'summary',
      title: 'Najważniejsze wnioski dotyczące doboru sprężyny głównej',
      items: [
        'Dokładnie zmierz średnicę wewnętrzną bębna, średnicę trzpienia i wysokość bębna precyzyjną suwmiarką',
        'Użyj obliczonych wymiarów jako punktu wyjścia, a nie bezwzględnej specyfikacji',
        'Sprawdź w arkuszach technicznych producenta lub znanych katalogach dostawców',
        'Dopasuj wysokość sprężyny dokładnie do wysokości bębna minus 0,05-0,15 mm luzu',
        'Dopasuj grubość w granicach 0,005 mm obliczonej wartości dla optymalnej wydajności',
        'Sprawdź, czy długość sprężyny jest wystarczająca dla oczekiwanej liczby obrotów nakręcania',
      ],
    },
  ],
  faq: [
    {
      question: 'Jak dokładne są obliczone wymiary sprężyny głównej?',
      answer: 'Obliczenia opierają się na standardowych formułach zegarmistrzowskich zakładających idealną geometrię bębna. Rzeczywiste wymiary mogą różnić się o 5-10% ze względu na tolerancje produkcyjne, konfiguracje końcówek sprężyny (brace, eyelet lub T-end) oraz konkretny użyty stop. Zawsze używaj obliczonych wartości jako silnego punktu odniesienia, ale sprawdź w arkuszach danych producenta lub katalogach handlowych przed zamówieniem.',
    },
    {
      question: 'Co zrobić, gdy nie mogę znaleźć dokładnego rozmiaru handlowego?',
      answer: 'Gdy dokładny rozmiar nie jest dostępny, priorytetem jest dopasowanie wysokości sprężyny, a następnie grubości w granicach 0,005 mm. Długość można dostosować, wybierając inną sprężynę z tej samej rodziny wysokości i grubości. Nieco dłuższa sprężyna będzie działać, jeśli bęben ma wystarczająco dużo miejsca, ale krótsza sprężyna zmniejszy rezerwę chodu.',
    },
    {
      question: 'Jak zmierzyć wymiary bębna bez wyjmowania sprężyny głównej?',
      answer: 'Jeśli bęben nadal zawiera starą sprężynę, możesz zmierzyć średnicę zewnętrzną bębna od zewnątrz (a następnie odjąć grubość ścianki, zazwyczaj 0,2-0,4 mm) oraz całkowitą wysokość (a następnie odjąć grubość pokrywy). Aby uzyskać najdokładniejsze wyniki, wyjmij starą sprężynę i wyczyść bęben przed pomiarem.',
    },
    {
      question: 'Jaka jest różnica między końcówką sprężyny typu brace a eyelet?',
      answer: 'Końcówka typu brace (zwana również T-end) ma mały zaczep w kształcie litery T, który zaczepia się w ściance bębna. Większość nowoczesnych kalibrów szwajcarskich i japońskich używa tego typu. Końcówka typu eyelet ma mały otwór, który pasuje na kołek na trzpieniu. To narzędzie oblicza tylko wymiary taśmy; musisz sprawdzić, czy typ końcówki pasuje do twojego bębna przed zamówieniem.',
    },
    {
      question: 'Czy mogę użyć tego narzędzia dla mechanizmów chronografu lub automatycznych?',
      answer: 'Tak, ale pamiętaj, że mechanizmy automatyczne często mają większą liczbę obrotów (8-10) i mogą wymagać nieco cieńszej sprężyny, aby pomieścić dodatkowy moduł nakręcania. Mechanizmy chronografu zazwyczaj potrzebują grubszych sprężyn, aby napędzać mechanizm chronografu. Dostosuj odpowiednio liczbę obrotów i sprawdź ze specyfikacjami producenta.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Zmierz średnicę wewnętrzną bębna',
      text: 'Użyj precyzyjnej suwmiarki, aby zmierzyć średnicę wewnętrzną bębna. Wykonaj pomiary w dwóch punktach oddalonych o 90 stopni i uśrednij wyniki. Zapisz wynik w milimetrach.',
    },
    {
      name: 'Zmierz średnicę trzpienia bębna',
      text: 'Zmierz średnicę trzpienia bębna w najszerszym miejscu, gdzie mocuje się wewnętrzny zwój sprężyny głównej. Zwykle jest to w pobliżu środka trzpienia, a nie na kwadratowym końcu.',
    },
    {
      name: 'Zmierz wewnętrzną wysokość bębna',
      text: 'Zmierz głębokość bębna od dna do górnej krawędzi. Jeśli pokrywa jest wyjmowana, uwzględnij grubość pokrywy w swoim pomiarze. Wysokość sprężyny będzie około 0,1 mm mniejsza.',
    },
    {
      name: 'Ustaw liczbę obrotów',
      text: 'Określ, ile pełnych obrotów wykonuje sprężyna główna przy pełnym nakręceniu. W przypadku kalibrów z ręcznym nakręcaniem jest to zazwyczaj 5-8 obrotów. Automaty mogą mieć 6-10 obrotów. Sprawdź specyfikacje mechanizmu, jeśli są dostępne.',
    },
    {
      name: 'Odczytaj obliczone wymiary',
      text: 'Narzędzie wyświetla zalecaną grubość, wysokość i długość sprężyny. Szacuje również kategorię siły sprężyny i podaje odpowiedniki handlowe w jednostkach metrycznych i imperialnych.',
    },
    {
      name: 'Sprawdź w katalogach',
      text: 'Użyj wyświetlonych rozmiarów handlowych, aby przeszukać katalogi dostawców. Wprowadź wymiary metryczne lub imperialne w Cousins UK, Jules Borel lub u preferowanego dostawcy. Dostosuj wyszukiwanie, jeśli dokładny rozmiar nie jest dostępny.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak dokładne są obliczone wymiary sprężyny głównej?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Obliczenia opierają się na standardowych formułach zegarmistrzowskich zakładających idealną geometrię bębna. Rzeczywiste wymiary mogą różnić się o 5-10% ze względu na tolerancje produkcyjne, konfiguracje końcówek sprężyny i konkretny użyty stop. Zawsze sprawdzaj w arkuszach danych producenta lub katalogach handlowych przed zamówieniem.' },
        },
        {
          '@type': 'Question',
          'name': 'Co zrobić, gdy nie mogę znaleźć dokładnego rozmiaru handlowego?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Najpierw dopasuj dokładnie wysokość sprężyny, a następnie grubość w granicach 0,005 mm. Dostosuj długość z tej samej rodziny wysokości i grubości.' },
        },
        {
          '@type': 'Question',
          'name': 'Jak zmierzyć bęben bez wyjmowania sprężyny głównej?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Zmierz zewnętrzną średnicę bębna i odejmij grubość ścianki (0,2-0,4 mm). Aby uzyskać najlepsze wyniki, najpierw wyjmij starą sprężynę.' },
        },
        {
          '@type': 'Question',
          'name': 'Jaka jest różnica między końcówkami brace a eyelet?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-end) zaczepia się w ściance bębna. Eyelet ma otwór na kołek trzpienia. Nowoczesne kalibry szwajcarskie/japońskie używają końcówek brace.' },
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę użyć tego narzędzia dla mechanizmów chronografu lub automatycznych?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Tak. Automaty często potrzebują więcej obrotów (8-10) i cieńszych sprężyn. Chronografy potrzebują grubszych sprężyn. Dostosuj liczbę obrotów i sprawdź.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Wyszukiwarka Spręzyn Głównych',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Kalkulator Spręzyn Głównych Zegarka',
      'description': 'Oblicz teoretyczne wymiary sprężyny głównej na podstawie pomiarów bębna dla zabytkowych mechanizmów zegarkowych.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Obliczanie wymiarów sprężyny głównej zegarka',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Dowiedz się, jak obliczyć wymiary sprężyny głównej na podstawie średnicy wewnętrznej bębna, rozmiaru trzpienia i liczby obrotów nakręcania.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak znaleźć właściwą sprężynę główną',
      'description': 'Instrukcja krok po kroku dotycząca pomiaru bębna zegarka i obliczania prawidłowych wymiarów sprężyny głównej.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Zmierz średnicę wewnętrzną bębna', 'text': 'Użyj precyzyjnej suwmiarki, aby zmierzyć średnicę wewnętrzną bębna.' },
        { '@type': 'HowToStep', 'name': 'Zmierz średnicę trzpienia bębna', 'text': 'Zmierz średnicę trzpienia bębna w najszerszym miejscu.' },
        { '@type': 'HowToStep', 'name': 'Zmierz wysokość bębna', 'text': 'Zmierz głębokość wewnętrzną. Wysokość sprężyny jest o około 0,1 mm mniejsza.' },
        { '@type': 'HowToStep', 'name': 'Ustaw liczbę obrotów', 'text': 'Ustaw 5-8 dla ręcznego nakręcania, 6-10 dla mechanizmów automatycznych.' },
        { '@type': 'HowToStep', 'name': 'Odczytaj wyniki', 'text': 'Zobacz grubość, wysokość, długość sprężyny i odpowiedniki handlowe.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Wyszukiwarka Spręzyn Głównych',
      'description': 'Narzędzie dla zegarmistrzów do obliczania wymiarów sprężyny głównej na podstawie pomiarów bębna.',
      'category': 'Narzędzie Zegarmistrzowskie',
      'audience': { '@type': 'Audience', 'audienceType': 'Zegarmistrze i entuzjaści horologii' },
    },
  ],
};

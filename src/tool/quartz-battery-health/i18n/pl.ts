import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'kontrola-stanu-baterii-kwarcowej',
  title: 'Kontroler Stanu Baterii Kwarcowej',
  description: 'Oblicz teoretyczny czas pracy baterii mechanizmu kwarcowego, podając pojemność ogniwa (mAh) i pobór prądu kalibru (µA). Opcjonalnie ustaw datę instalacji, aby oszacować datę wymiany.',
  ui: {
    title: 'Kontroler Stanu Baterii Kwarcowej',
    batteryLabel: 'Ogniwo Baterii',
    selectBattery: 'Wybierz baterię',
    customBattery: 'Własna',
    capacityLabel: 'Pojemność',
    capacityUnit: 'mAh',
    consumptionLabel: 'Pobór',
    consumptionUnit: 'µA',
    installDateLabel: 'Zainstalowana',
    installDateHint: 'Opcjonalnie',
    monthLabel: 'Miesiąc',
    yearLabel: 'Rok',
    calculate: 'Oblicz',
    resultLabel: 'Szacowany Czas',
    theoreticalLife: 'Żywotność teoretyczna',
    yearsLabel: 'lat',
    monthsLabel: 'miesięcy',
    daysLabel: 'dni',
    changeDateLabel: 'Wymień do',
    noDateHint: 'Wprowadź datę instalacji, aby zobaczyć datę wymiany',
    healthLabel: 'Stan',
    healthGood: 'Dobry',
    healthModerate: 'Średni',
    healthCritical: 'Krytyczny',
    step1: 'Wybierz popularną baterię lub wybierz Własna, aby wprowadzić pojemność.',
    step2: 'Wprowadź pobór prądu kalibru w mikroamperach (µA).',
    step3: 'Opcjonalnie dodaj datę instalacji, a następnie naciśnij Oblicz.',
    tipTitle: 'Wskazówka',
    tipContent: 'Zawsze używaj wartości poboru prądu z oficjalnej karty katalogowej kalibru. Rzeczywista żywotność może być o 10-20% krótsza z powodu temperatury i zmian obciążenia.',
  },
  seo: [
    { type: 'title', text: 'Kontroler Stanu Baterii Kwarcowej. Jak długo wytrzyma bateria Twojego zegarka?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Typowy pobór 3-wskazówkowy' },
        { value: '18-55 mAh', label: 'Typowa pojemność ogniwa' },
        { value: '2.5-4.5 roku', label: 'Typowa żywotność baterii' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Zastanawiasz się, kiedy Twój kwarcowy zegarek przestanie tykać? <strong>Kontroler Stanu Baterii Kwarcowej</strong> pomoże Ci oszacować pozostały czas pracy baterii dowolnego mechanizmu kwarcowego, porównując pojemność ogniwa (mierzoną w mAh) ze średnim poborem prądu mechanizmu (mierzonego w mikroamperach, µA). Niezależnie od tego, czy posiadasz szwajcarski ETA, japoński Miyota, Seiko, Ronda czy chiński mechanizm DG, to narzędzie oblicza teoretyczną żywotność w latach, miesiącach i dniach i może nawet przewidzieć dokładną datę wymiany, jeśli podasz miesiąc i rok instalacji.' },
    { type: 'title', text: 'Jak obliczana jest żywotność baterii kwarcowej. Matematyka stojąca za szacowaniem', level: 3 },
    { type: 'paragraph', html: 'Żywotność baterii opiera się na prostym wzorze elektrycznym: <strong>Czas (godziny) = (Pojemność ogniwa w mAh x 1000) / Pobór prądu w µA</strong>. Dzieląc wynik przez 24 otrzymujemy dni, a przez 365,25 otrzymujemy lata. Na przykład standardowe <strong>ogniwo SR920SW (371) o pojemności 40 mAh</strong> zasilające mechanizm pobierający <strong>1,5 µA</strong> będzie teoretycznie działać około <strong>3 lat</strong>. Zmniejsz pobór do 1,0 µA, a to samo ogniwo wytrzyma ponad 4,5 roku. Zwiększ go do 2,5 µA, a żywotność baterii spadnie poniżej 2 lat. Każdy ułamek mikroampera ma znaczenie, gdy planujesz interwały serwisowe.' },
    { type: 'title', text: 'Najpopularniejsze typy baterii kwarcowych i ich pojemności', level: 3 },
    {
      type: 'table',
      headers: ['Oznaczenie Ogniwa', 'Kod', 'Pojemność', 'Typowe Zastosowanie'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Cienkie zegarki wizytowe'],
        ['SR626SW', '377', '27 mAh', 'Kwarcowe modele średnie'],
        ['SR920SW', '371', '40 mAh', 'Chronografy i wielofunkcyjne'],
        ['SR936SW', '394', '55 mAh', 'Duże hybrydy analogowo-cyfrowe'],
        ['CR2025', '-', '165 mAh', 'Moduły LED o wysokim poborze'],
      ],
    },
    { type: 'tip', title: 'Dopasuj oryginalną specyfikację', html: 'Wybór niewłaściwego typu ogniwa może skrócić żywotność baterii nawet o <strong>40%</strong>. Zawsze sprawdzaj oryginalny numer referencyjny baterii przed instalacją zamiennika. Kod numeryczny określa wymiary. Na przykład <strong>SR936SW</strong> ma średnicę 9,5 mm i grubość 3,6 mm.' },
    { type: 'title', text: 'Dlaczego zawsze należy używać oficjalnych wartości poboru prądu kalibru', level: 3 },
    { type: 'paragraph', html: 'Producenci mechanizmów, tacy jak <strong>ETA, Ronda, Miyota, Seiko i ISA</strong>, publikują oficjalne karty katalogowe dla każdego produkowanego kalibru. Karty te podają <strong>średni pobór prądu</strong> w kontrolowanej temperaturze (zwykle 22°C) i przy standardowym obciążeniu wskazówek. Użycie zgadywanej wartości 1,0 µA, gdy Twój mechanizm faktycznie pobiera 2,5 µA, może przeszacować żywotność baterii o ponad 100%. Zawsze pobieraj oficjalny PDF ze strony producenta lub sprawdź kaliber w specjalistycznych bazach danych, aby uzyskać rzeczywistą wartość poboru.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Wyciek baterii może zniszczyć mechanizm Twojego zegarka',
      html: 'Wyczerpana bateria srebrowo-tlenkowa może <strong>wyciekać wodorotlenek potasu</strong>, który koroduje sprężyny stykowe, ścieżki płytki drukowanej, a nawet cewkę silnika krokowego. Jeśli narzędzie szacuje mniej niż <strong>6 miesięcy pozostałej żywotności</strong>, zaplanuj wymianę baterii podczas następnego przeglądu. Zwróć szczególną uwagę na <strong>zegarki kwarcowe vintage z lat 70. i 80.</strong> Ich oryginalne baterie są znacznie bardziej podatne na wycieki po dziesięcioleciach wewnątrz koperty.',
    },
    { type: 'title', text: 'Czynniki skracające rzeczywistą żywotność baterii w porównaniu do szacunków teoretycznych', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Ekstremalne temperatury</strong>. Zegarek pozostawiony na nasłonecznionej desce rozdzielczej może mieć o 30% wyższy pobór prądu.',
        '<strong>Układy wykrywania niskiego napięcia</strong>. Wskaźnik dwusekundowego tykania zużywa dodatkową energię po aktywacji.',
        '<strong>Używanie chronografu lub alarmu</strong>. Chwilowe skoki prądu, które sumują się w czasie.',
        '<strong>Tarcie mechaniczne</strong>. Zużyte lub zabrudzone koła zębate zwiększają moment obrotowy potrzebny silnikowi krokowemu.',
        '<strong>Pola magnetyczne</strong>. Ekspozycja zwiększa wymagania momentu obrotowego silnika, przyspieszając wyczerpanie ogniwa.',
      ],
    },
    { type: 'paragraph', html: 'W praktyce można spodziewać się <strong>od 10 do 20% krótszej żywotności</strong> niż wynika to z obliczeń teoretycznych. W przypadku wysokiej dokładności termokompensowanych mechanizmów kwarcowych pobór zmienia się mniej, ale standardowy kwarc jest wyraźnie wrażliwy na te czynniki środowiskowe.' },
    { type: 'title', text: 'Jak znaleźć odpowiednią baterię zamienną do zegarka kwarcowego', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Silver-Oxide)', definition: 'Ogniwa oznaczone SR (np. SR920SW) zapewniają stabilne napięcie 1,55 V przez cały okres użytkowania, utrzymując dokładność oscylatora kwarcowego. Jest to standard w przypadku wysokiej jakości zegarków kwarcowych.' },
        { term: 'LR (Alkaline)', definition: 'Ogniwa oznaczone LR (np. LR41) mają stopniowo spadające napięcie, co może spowodować, że zegarek będzie chodził wolno lub zatrzyma się przedwcześnie. Nie są zalecane jako zamiennik ogniw SR.' },
        { term: 'CR (Lithium)', definition: 'Ogniwa oznaczone CR (np. CR2025) dostarczają 3,0 V i są stosowane w modułach o wysokim poborze z podświetleniem LED, dużymi wyświetlaczami LCD lub wieloma komplikacjami.' },
        { term: 'Kod Numeryczny', definition: 'Cztery cyfry kodują fizyczny rozmiar: pierwsze dwie cyfry to średnica w milimetrach, a ostatnie dwie to grubość w dziesiątych częściach milimetra. SR936SW = O 9,5 mm x 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Standardowy kwarc a solar i kinetic. Jak technologia zmienia równanie', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standardowy Kwarc',
          description: 'Używa wymiennego ogniwa pierwotnego srebrowo-tlenkowego lub litowego. Żywotność baterii zależy wyłącznie od pojemności w stosunku do poboru. Do tego właśnie służy ten kalkulator.',
          highlight: true,
          points: [
            'Wymienne ogniwo pierwotne',
            'Żywotność = pojemność / pobór',
            'Przewidywalny harmonogram wymiany',
            'Niedrogie wymiany baterii',
          ],
        },
        {
          title: 'Solar i Kinetic',
          description: 'Zegarki solarne wykorzystują ogniwa fotowoltaiczne do ładowania akumulatora litowo-jonowego. Zegarki Kinetic wykorzystują rotor z mikrogeneratorem do ładowania kondensatora.',
          points: [
            'Magazynowanie energii z możliwością ładowania',
            'Żywotność zależy od cykli ładowania',
            'Degradacja kondensatora w czasie',
            'Niekompatybilne z tym kalkulatorem',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Twierdzenia producentów o <strong>10-letniej żywotności baterii</strong> są zwykle oparte na mechanizmach o bardzo niskim poborze (około 0,5 do 0,8 µA) połączonych z ogniwami o dużej pojemności (165 mAh CR2025 lub większymi). W standardowym analogowym zegarku kwarcowym z małym ogniwem srebrowo-tlenkowym, takim jak <strong>SR626SW (27 mAh)</strong> i typowym mechanizmem 1,5 µA, rzeczywista żywotność jest bliższa <strong>2,5 do 3 lat</strong>. Zawsze weryfikuj za pomocą tego kalkulatora, zamiast ufać etykietom marketingowym.' },
    {
      type: 'tip',
      title: 'Wymieniaj zapobiegawczo, nie reaktywnie',
      html: 'Gdy widzisz, że wskazówka sekundowa skacze w <strong>2-sekundowych lub 4-sekundowych odstępach</strong>, mechanizm wszedł w tryb oszczędzania energii z powodu niskiego napięcia. Bateria ma około <strong>2 do 4 tygodni</strong> pozostałej żywotności. Wymień ją natychmiast, aby uniknąć uszkodzeń spowodowanych wyciekiem.',
    },
    {
      type: 'summary',
      title: 'Najważniejsze wnioski dotyczące stanu baterii kwarcowej',
      items: [
        'Używaj oficjalnej wartości poboru prądu kalibru z karty katalogowej producenta. Zgadywana wartość może przeszacować żywotność o ponad 100%.',
        'Dopasuj dokładnie oryginalny typ ogniwa. Chemie SR, LR i CR nie są wymienne.',
        'Wymień baterię, gdy narzędzie pokazuje mniej niż 6 miesięcy pozostałej żywotności, aby zapobiec wyciekowi.',
        'Rzeczywista żywotność baterii jest zazwyczaj o 10-20% krótsza od teoretycznej z powodu temperatury, tarcia i użytkowania.',
        'Ten kalkulator jest przeznaczony dla standardowych mechanizmów kwarcowych z wymiennymi ogniwami pierwotnymi, a nie dla zegarków solarnych ani kinetic.',
      ],
    },
  ],
  faq: [
    {
      question: 'Jak dokładne jest teoretyczne oszacowanie żywotności baterii?',
      answer: 'Obliczenia są ideałem elektrycznym opartym na pojemności podzielonej przez pobór. W rzeczywistych warunkach można spodziewać się od 10 do 20% krótszej żywotności z powodu wahań temperatury, układów wykrywania niskiego napięcia, oporu mechanicznego zużytych smarów oraz dodatkowego obciążenia funkcjami chronografu lub alarmu. Oszacowanie jest wiarygodną górną granicą, a nie dokładną prognozą.',
    },
    {
      question: 'Gdzie znajdę dokładną wartość poboru prądu dla mojego kalibru kwarcowego?',
      answer: 'Oficjalne karty katalogowe ETA, Ronda, Miyota, Seiko, ISA i innych producentów mechanizmów podają średni pobór prądu w mikroamperach (µA). Wyszukaj numer referencyjny kalibru wraz z słowem karta katalogowa lub specyfikacja techniczna. Wyspecjalizowane bazy danych, takie jak Ranfft, 17jewels i Watch-Wiki, również publikują wartości poboru prądu pochodzące od społeczności zegarkowej.',
    },
    {
      question: 'Co oznacza µA i dlaczego jest to ważne?',
      answer: 'µA oznacza mikroamper, czyli jedną milionową ampera. Mierzy prąd elektryczny, jaki mechanizm pobiera z baterii. Typowy analogowy kwarcowy mechanizm trzywskazówkowy pobiera od 1,0 do 2,5 µA. Chronografy i moduły wielofunkcyjne mogą pobierać od 3,0 do 6,0 µA. Im wyższy prąd, tym krótsza żywotność baterii dla danej pojemności ogniwa.',
    },
    {
      question: 'Czy mogę używać tego narzędzia do zegarków solarnych lub kinetic?',
      answer: 'Nie. Zegarki solarne (Eco-Drive, Solar, Light-Powered) wykorzystują ogniwa fotowoltaiczne do ładowania akumulatora. Zegarki Kinetic i Auto-Quartz wykorzystują rotor i mikrogenerator do ładowania kondensatora. Żadna z tych technologii nie opiera się na jednorazowym ogniwie pierwotnym, więc model pojemność kontra pobór nie ma zastosowania. Używaj tego kalkulatora tylko do standardowych mechanizmów kwarcowych z wymiennymi ogniwami srebrowo-tlenkowymi, alkalicznymi lub litowymi.',
    },
    {
      question: 'Czy powinienem wymienić baterię, zanim całkowicie się wyczerpie?',
      answer: 'Tak. Baterie srebrowo-tlenkowe i alkaliczne mogą wyciekać wodorotlenek potasu po całkowitym rozładowaniu, uszkadzając sprężyny stykowe, ścieżki PCB i cewkę silnika krokowego. Wymiana przed całkowitym rozładowaniem jest zdecydowanie zalecana. Jeśli narzędzie pokazuje mniej niż 6 miesięcy szacowanej żywotności, zaplanuj wymianę baterii tak szybko, jak to możliwe.',
    },
    {
      question: 'Co się stanie, jeśli użyję baterii o większej lub mniejszej pojemności niż oryginalna?',
      answer: 'Użycie ogniwa o większej pojemności (np. SR936SW 55 mAh zamiast SR920SW 40 mAh) wydłuży żywotność baterii, ale może nie pasować fizycznie. Ogniwo musi dokładnie odpowiadać oryginalnej średnicy i grubości, aby utrzymać prawidłowy nacisk sprężyny stykowej. Użycie ogniwa o mniejszej pojemności skraca żywotność baterii i może powodować przerywany kontakt, jeśli ogniwo jest zbyt małe. Zawsze wymieniaj na dokładnie ten sam numer referencyjny lub udokumentowany odpowiednik z tej samej rodziny rozmiarów.',
    },
    {
      question: 'Skąd mam wiedzieć, czy bateria w moim zegarku jest srebrowo-tlenkowa czy alkaliczna?',
      answer: 'Ogniwa srebrowo-tlenkowe są oznaczone SR (np. SR920SW) i zapewniają stabilne napięcie 1,55 V przez cały okres użytkowania, co utrzymuje dokładność oscylatora kwarcowego. Ogniwa alkaliczne są oznaczone LR (np. LR41) i mają stopniowo spadające napięcie, co może spowodować, że zegarek będzie chodził wolno lub zatrzyma się przedwcześnie. Większość renomowanych marek zegarków zaleca srebrowo-tlenkowe. Jeśli Twój zegarek pierwotnie używał SR, zawsze wymieniaj na SR, a nie LR.',
    },
    {
      question: 'Czy skakanie wskazówki sekundowej co dwie sekundy oznacza, że bateria się wyczerpuje?',
      answer: 'Tak. Gdy mechanizm kwarcowy wykryje, że napięcie baterii jest zbyt niskie, aby niezawodnie napędzać silnik krokowy, przechodzi w tryb oszczędzania energii, w którym wskazówka sekundowa skacze w 2-sekundowych lub 4-sekundowych odstępach. Jest to wskaźnik wyczerpania baterii. Gdy zauważysz to zachowanie, bateria ma około 2 do 4 tygodni pozostałej żywotności i należy ją natychmiast wymienić, aby uniknąć wycieku.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz lub dostosuj ogniwo baterii',
      text: 'Wybierz popularne ogniwo srebrowo-tlenkowe z listy rozwijanej. SR621SW, SR626SW, SR920SW, SR936SW i inne są wstępnie załadowane z oficjalnymi pojemnościami. Jeśli Twojego ogniwa nie ma na liście, wybierz Własna i wpisz jego dokładną pojemność w mAh widniejącą na etykiecie baterii lub podaną w karcie katalogowej producenta.',
    },
    {
      name: 'Wprowadź pobór prądu mechanizmu',
      text: 'Znajdź średni pobór prądu dla swojego kalibru w oficjalnej dokumentacji technicznej. Wpisz wartość w mikroamperach (µA) w pole poboru. Większość mechanizmów trzywskazówkowych używa od 1,0 do 2,5 µA. Chronografy i moduły wielofunkcyjne mogą sięgać do 6,0 µA.',
    },
    {
      name: 'Dodaj miesiąc i rok instalacji (opcjonalnie)',
      text: 'Jeśli pamiętasz lub masz zapisane, kiedy bateria była ostatnio instalowana, wybierz miesiąc i wpisz rok. Narzędzie użyje tej daty do obliczenia szacowanej daty wymiany i pokaże pozostały stan baterii jako procent.',
    },
    {
      name: 'Sprawdź teoretyczną żywotność',
      text: 'Karta wyników pokazuje całkowity szacowany czas pracy baterii w latach, miesiącach i pozostałych dniach. Jest to maksymalna żywotność w idealnych warunkach, zakładając, że żadne czynniki zewnętrzne nie zmniejszają pojemności baterii.',
    },
    {
      name: 'Sprawdź stan i datę wymiany',
      text: 'Po podaniu daty instalacji wskaźnik wypełnia się proporcjonalnie do pozostałej żywotności baterii. Zielona odznaka Dobry oznacza ponad 50% pozostałej żywotności. Żółta Średni oznacza od 20 do 50%. Czerwona Krytyczny oznacza mniej niż 20%. Dokładna zalecana data wymiany jest pokazana poniżej wskaźnika.',
    },
    {
      name: 'Dostosuj dane i przelicz',
      text: 'Zmień dowolne dane wejściowe, model baterii, wartość poboru lub datę instalacji, a wynik aktualizuje się automatycznie. Użyj tej funkcji, aby porównać różne typy baterii lub zaplanować harmonogramy wymiany dla wielu zegarków w swojej kolekcji.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak dokładne jest teoretyczne oszacowanie żywotności baterii?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Obliczenia są ideałem elektrycznym opartym na pojemności podzielonej przez pobór. W rzeczywistych warunkach można spodziewać się od 10 do 20% krótszej żywotności z powodu wahań temperatury, układów wykrywania niskiego napięcia, oporu mechanicznego zużytych smarów oraz dodatkowego obciążenia funkcjami chronografu lub alarmu. Oszacowanie jest wiarygodną górną granicą, a nie dokładną prognozą.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Gdzie znajdę dokładną wartość poboru prądu dla mojego kalibru kwarcowego?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oficjalne karty katalogowe ETA, Ronda, Miyota, Seiko, ISA i innych producentów mechanizmów podają średni pobór prądu w mikroamperach (µA). Wyszukaj numer referencyjny kalibru wraz z słowem karta katalogowa lub specyfikacja techniczna. Wyspecjalizowane bazy danych, takie jak Ranfft i 17jewels, również publikują wartości poboru prądu pochodzące od społeczności.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co oznacza µA i dlaczego jest to ważne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA oznacza mikroamper, czyli jedną milionową ampera. Mierzy prąd elektryczny, jaki mechanizm pobiera z baterii. Typowy analogowy kwarcowy mechanizm trzywskazówkowy pobiera od 1,0 do 2,5 µA. Chronografy i moduły wielofunkcyjne mogą pobierać od 3,0 do 6,0 µA. Im wyższy prąd, tym krótsza żywotność baterii dla danej pojemności ogniwa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy mogę używać tego narzędzia do zegarków solarnych lub kinetic?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie. Zegarki solarne wykorzystują ogniwa fotowoltaiczne do ładowania akumulatora. Zegarki Kinetic wykorzystują rotor i mikrogenerator do ładowania kondensatora. Żadna z tych technologii nie opiera się na jednorazowym ogniwie pierwotnym, więc model pojemność kontra pobór nie ma zastosowania. Używaj tego kalkulatora tylko do standardowych mechanizmów kwarcowych z wymiennymi ogniwami srebrowo-tlenkowymi, alkalicznymi lub litowymi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy powinienem wymienić baterię, zanim całkowicie się wyczerpie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Baterie srebrowo-tlenkowe i alkaliczne mogą wyciekać wodorotlenek potasu po całkowitym rozładowaniu, uszkadzając sprężyny stykowe, ścieżki PCB i cewkę silnika krokowego. Wymiana przed całkowitym rozładowaniem jest zdecydowanie zalecana. Jeśli narzędzie pokazuje mniej niż 6 miesięcy szacowanej żywotności, zaplanuj wymianę baterii tak szybko, jak to możliwe.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Skąd mam wiedzieć, czy bateria w moim zegarku jest srebrowo-tlenkowa czy alkaliczna?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ogniwa srebrowo-tlenkowe są oznaczone SR (np. SR920SW) i zapewniają stabilne napięcie 1,55 V przez cały okres użytkowania. Ogniwa alkaliczne są oznaczone LR (np. LR41) i mają stopniowo spadające napięcie. Większość renomowanych marek zegarków zaleca srebrowo-tlenkowe. Zawsze wymieniaj SR na SR, a nie na LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy skakanie wskazówki sekundowej co dwie sekundy oznacza, że bateria się wyczerpuje?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Gdy mechanizm kwarcowy wykryje niskie napięcie baterii, przechodzi w tryb oszczędzania energii, w którym wskazówka sekundowa skacze w 2-sekundowych lub 4-sekundowych odstępach. Jest to wskaźnik wyczerpania baterii. Gdy zauważysz to zachowanie, bateria ma około 2 do 4 tygodni pozostałej żywotności i należy ją natychmiast wymienić, aby uniknąć wycieku.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kontroler Stanu Baterii Kwarcowej',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Kalkulator Żywotności Baterii Zegarka',
      'description': 'Oblicz teoretyczny czas pracy baterii dowolnego mechanizmu kwarcowego, podając pojemność ogniwa (mAh) i pobór prądu kalibru (µA). Szacuje datę wymiany po podaniu miesiąca i roku instalacji.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Obliczanie żywotności baterii zegarka kwarcowego. Wyjaśnienie pojemności i poboru',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Dowiedz się, jak oszacować żywotność baterii mechanizmu kwarcowego, używając pojemności ogniwa w mAh i poboru prądu mechanizmu w µA. Zrozum wzór, wpływ temperatury i obciążenia oraz kiedy zaplanować wymianę.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak oszacować żywotność baterii zegarka kwarcowego',
      'description': 'Przewodnik krok po kroku korzystania z Kontrolera Stanu Baterii Kwarcowej w celu określenia pozostałej żywotności baterii dowolnego zegarka kwarcowego i zaplanowania jej wymiany.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz lub dostosuj ogniwo baterii',
          'text': 'Wybierz popularne ogniwo srebrowo-tlenkowe z listy rozwijanej. SR621SW, SR626SW, SR920SW, SR936SW i inne są wstępnie załadowane z oficjalnymi pojemnościami. Jeśli Twojego ogniwa nie ma na liście, wybierz Własna i wpisz jego dokładną pojemność w mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wprowadź pobór prądu mechanizmu',
          'text': 'Znajdź średni pobór prądu dla swojego kalibru z oficjalnej dokumentacji technicznej. Wpisz wartość w mikroamperach (µA) w pole poboru.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Dodaj miesiąc i rok instalacji',
          'text': 'Jeśli wiesz, kiedy bateria została zainstalowana, wybierz miesiąc i wpisz rok. Narzędzie oblicza szacowaną datę wymiany i pokazuje pozostały stan baterii jako procent.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sprawdź teoretyczną żywotność',
          'text': 'Karta wyników pokazuje całkowity szacowany czas pracy baterii w latach, miesiącach i pozostałych dniach. Jest to maksymalna żywotność w idealnych warunkach.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sprawdź stan i datę wymiany',
          'text': 'Po podaniu daty instalacji wskaźnik pokazuje pozostałą żywotność. Zielony oznacza ponad 50%. Żółty oznacza od 20 do 50%. Czerwony oznacza mniej niż 20%. Zalecana data wymiany jest pokazana poniżej.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Kontroler Stanu Baterii Kwarcowej',
      'description': 'Narzędzie online do szacowania żywotności baterii zegarka kwarcowego na podstawie pojemności ogniwa i poboru prądu mechanizmu.',
      'category': 'Kalkulator Baterii Zegarka',
      'audience': { '@type': 'Audience', 'audienceType': 'Miłośnicy zegarków i technicy serwisowi' },
    },
  ],
};

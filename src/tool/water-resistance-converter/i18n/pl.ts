import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'konwerter-wodoszczelnosci',
  title: 'Konwerter Wodoszczelnosci Zegarkow: Metry, ATM, Bar i Stopy',
  description: 'Przelicz klasy wodoszczelności zegarków między metrami, stopami, ATM i bar. Sprawdź, co każda klasa oznacza w codziennym użytkowaniu, podczas pływania i nurkowania.',
  ui: {
    title: 'Konwerter Wodoszczelności',
    depthLabel: 'Wodoszczelność',
    enterDepth: 'Wpisz klasę głębokości',
    unitMeters: 'Metry (m)',
    unitFeet: 'Stopy (ft)',
    unitATM: 'Atmosfery (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Równoważne Wartości',
    ratingLabel: 'Klasa',
    whatItMeans: 'Co Oznacza',
    notWaterResistant: 'Brak Wodoszczelności',
    notWaterResistantDesc: 'Żadnych zachlapań. Trzymaj z dala od wody.',
    handWash: 'Odporny na Zachlapania',
    handWashDesc: 'Mycie rąk, deszcz, lekkie zachlapania. Bez pływania, bez prysznica.',
    showerSwim: 'Prysznic i Pływanie po Powierzchni',
    showerSwimDesc: 'Prysznic, pływanie przy powierzchni. Bez nurkowania i snorkelingu.',
    snorkeling: 'Pływanie i Snorkeling',
    snorkelingDesc: 'Pływanie w basenie, snorkeling, sporty wodne. Doskonała codzienna odporność.',
    scubaDiving: 'Nurkowanie Rekreacyjne',
    scubaDivingDesc: 'Nurkowanie butlowe, intensywne aktywności morskie. Zgodne z ISO.',
    saturationDiving: 'Nurkowanie Głębokie / Saturacja',
    saturationDivingDesc: 'Profesjonalne nurkowanie saturowane. Ekstremalne głębokości. Kontekst zaworu ucieczki helu.',
    tipTitle: 'Wskazówka',
    tipContent: 'Wodoszczelność pogarsza się z czasem. Uszczelki powinny być testowane corocznie i wymieniane co 3-5 lat.',
  },
  seo: [
    { type: 'title', text: 'Konwerter Wodoszczelności Zegarków-Rozszyfrowanie Metrów, ATM, Bar & Stóp', level: 2 },
    { type: 'paragraph', html: 'Klasa wodoszczelności 30 metrów nie oznacza, że możesz nurkować na 30 metrów. Oznacza, że zegarek wytrzyma zachlapania i lekki deszcz. Ten konwerter tłumaczy między <strong>metrami, stopami, atmosferami (ATM) i barami</strong> i mówi, co każda klasa faktycznie pozwala robić.' },
    { type: 'title', text: 'Prawda o Klasach Wodoszczelności', level: 3 },
    { type: 'paragraph', html: 'Wodoszczelność zegarków testuje się w laboratorium pod ciśnieniem statycznym. Warunki rzeczywiste-poruszanie ręką, nurkowanie, zmiany temperatury-tworzą ciśnienie dynamiczne, które jest znacznie wyższe. Zegarek 30m / 3 ATM jest tylko odporny na zachlapania. Do pływania potrzebujesz co najmniej 100m / 10 ATM. Do nurkowania butlowego 200m / 20 ATM to standardowy próg wejścia.' },
    { type: 'title', text: 'Dlaczego Wodoszczelność Pogarsza się z Czasem', level: 3 },
    { type: 'paragraph', html: 'Gumowe uszczelki i O-ringi uszczelniające zegarek z czasem wysychają, pękają i ulegają kompresji. Ciepło, światło UV i chemikalia przyspieszają ten proces. Zegarek, który kiedyś był wodoszczelny do 100m, po 5 latach bez serwisu może być tylko odporny na zachlapania. Zlecaj coroczne testowanie uszczelek i wymieniaj je co 3 do 5 lat.' },
    { type: 'title', text: 'ISO 6425-Norma dla Zegarków Nurkowych', level: 3 },
    { type: 'paragraph', html: 'Aby zegarek mógł być nazwany "zegarkiem nurkowym," musi spełniać normę ISO 6425: co najmniej 100m wodoszczelności, jednokierunkowy bezel, świecące oznaczenia i zakręcana koronka. Zegarki spełniające tę normę są testowane 25% powyżej deklarowanej głębokości. Zegarek z certyfikatem ISO 200m jest testowany na 250m.' },
  ],
  faq: [
    {
      question: 'Czy mogę pływać z zegarkiem wodoszczelnym do 30 metrów?',
      answer: 'Nie. Klasa 30m / 3 ATM oznacza tylko odporność na zachlapania-mycie rąk, deszcz i pot. Pływanie wytwarza ciśnienie dynamiczne przekraczające statyczne ciśnienie testowe. Do pływania wybierz co najmniej 100m / 10 ATM.',
    },
    {
      question: 'Jaka jest różnica między ATM, bar i metrami?',
      answer: '1 ATM = 1 bar ≈ 10 metrów statycznego słupa wody. W branży zegarkowej są one zasadniczo równoważne. Zegarek 10 ATM jest tym samym co zegarek 10 bar i jest klasyfikowany do około 100 metrów.',
    },
    {
      question: 'Jak często powinienem testować wodoszczelność mojego zegarka?',
      answer: 'Raz w roku, szczególnie przed kontaktem z wodą. Uszczelki się zużywają. Co 3-5 lat wszystkie uszczelki należy wymienić podczas pełnego serwisu.',
    },
    {
      question: 'Co oznacza certyfikat ISO 6425?',
      answer: 'ISO 6425 to międzynarodowa norma dla zegarków nurkowych. Wymaga co najmniej 100m odporności, jednokierunkowego bezela, świecących oznaczeń i testowania 25% powyżej deklarowanej głębokości.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wpisz swoją klasę',
      text: 'Wpisz liczbę wodoszczelności swojego zegarka i wybierz jednostkę (metry, stopy, ATM lub bar).',
    },
    {
      name: 'Odczytaj równoważniki',
      text: 'Karta pokazuje przeliczone wartości we wszystkich czterech jednostkach jednocześnie.',
    },
    {
      name: 'Sprawdź zalecenie',
      text: 'Podświetlona karta pokazuje, które aktywności są bezpieczne przy klasie twojego zegarka.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Czy mogę pływać z zegarkiem wodoszczelnym do 30 metrów?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie. Klasa 30m / 3 ATM oznacza tylko odporność na zachlapania-mycie rąk, deszcz i pot. Do pływania wybierz co najmniej 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jaka jest różnica między ATM, bar i metrami?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 metrów statycznego słupa wody. W branży zegarkowej są one zasadniczo równoważne.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak często powinienem testować wodoszczelność mojego zegarka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Raz w roku, szczególnie przed kontaktem z wodą. Co 3-5 lat wszystkie uszczelki należy wymienić podczas pełnego serwisu.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co oznacza certyfikat ISO 6425?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 wymaga co najmniej 100m odporności, jednokierunkowego bezela, świecących oznaczeń i testowania 25% powyżej deklarowanej głębokości.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Konwerter Wodoszczelności Zegarków',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak przeliczać klasy wodoszczelności zegarków',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wpisz swoją klasę',
          'text': 'Wpisz liczbę wodoszczelności swojego zegarka i wybierz jednostkę.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Odczytaj równoważniki',
          'text': 'Karta pokazuje przeliczone wartości we wszystkich czterech jednostkach jednocześnie.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sprawdź zalecenie',
          'text': 'Podświetlona karta pokazuje, które aktywności są bezpieczne przy klasie twojego zegarka.',
        },
      ],
    },
  ],
};

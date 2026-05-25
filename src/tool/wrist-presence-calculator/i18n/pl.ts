import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'kalkulator-obecnosci-zegarka',
  title: 'Kalkulator Obecności Zegarka na Nadgarstku',
  description: 'Oblicz stosunek koperty do nadgarstka, pokrycie płaskiej powierzchni nadgarstka i określ idealny rozmiar zegarka na podstawie zasad estetyki.',
  ui: {
    title: 'Ustawienia Rozmiaru Nadgarstka',
    wristCircumferenceLabel: 'Obwód Nadgarstka',
    caseDiameterLabel: 'Średnica Koperty',
    lugToLugLabel: 'Odległość Między Uszkami',
    wristWidthLabel: 'Płaska Szerokość Nadgarstka',
    autoEstimateWidthLabel: 'Automatycznie szacuj płaską szerokość (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Analiza Dopasowania na Nadgarstku',
    caseWristRatioLabel: 'Stosunek Koperty do Nadgarstka',
    wristCoverageLabel: 'Pokrycie Nadgarstka',
    verdictLabel: 'Ocena',
    verdictOversized: 'Za Duża Koperta',
    verdictBold: 'Odważne / Nowoczesne Dopasowanie',
    verdictGolden: 'Złote / Klasyczne Dopasowanie',
    verdictVintage: 'Vintage / Za Małe',
    coverageSafe: 'Bezpieczne Dopasowanie',
    coverageBold: 'Odważne Dopasowanie',
    coverageOverhang: 'Ostrzeżenie o Zwisie Uszek',
    sweetSpotTitle: 'Styl Dopasowania',
    sweetSpotDesc: 'Sweet spot oznacza najbardziej zrównoważony wygląd wizualny.',
    minClassicLabel: 'Vintage / Klasyczne Dopasowanie',
    sweetSpotLabel: 'Estetyczny Sweet Spot',
    maxBoldLabel: 'Nowoczesne / Odważne Dopasowanie',
    maxLugToLugLabel: 'Maks. Zalecana Odległość Między Uszkami',
    idealSizesTitle: 'Wytyczne Dotyczące Idealnych Rozmiarów',
    visualizerTitle: 'Symulator Dopasowania na Żywo',
    wristWidthHelp: 'Szacunkowa wartość oparta na kształcie nadgarstka.',
    estimatedLabel: 'szacowane',
    customLabel: 'Nadgarstek',
  },
  seo: [
    { type: 'title', text: 'Jak wybrać idealny rozmiar zegarka: przewodnik po proporcjach', level: 2 },
    { type: 'paragraph', html: 'Znalezienie właściwego rozmiaru zegarka to połączenie matematyki, geometrii i osobistego stylu. W zegarmistrzostwo sposób, w jaki timepiece spoczywa na ręce, nazywa się <strong>obecnością na nadgarstku</strong>. Zegarek powinien wyglądać zrównoważenie-nie dominować ramienia nieestetycznym zwisem uszek ani nie znikać jak maleńka kropka. Aby osiągnąć ten balans, kolekcjonerzy analizują trzy główne parametry: średnicę koperty, odległość między uszkami i kształt nadgarstka.' },
    { type: 'title', text: 'Zrozumieć stosunek koperty do nadgarstka', level: 3 },
    { type: 'paragraph', html: 'Tradycyjną metodą oceny proporcji zegarka jest stosunek koperty do nadgarstka. Polega ona na podzieleniu obwodu nadgarstka w milimetrach przez średnicę koperty. Stosunki między <strong>4,5 a 5,0</strong> oznaczają klasyczny sweet spot. Od <strong>4,0 do 4,5</strong> zegarek wygląda nowocześnie i sportowo. Powyżej 5,0 dominuje estetyka vintage, a poniżej 4,0 koperta wydaje się za duża.' },
    { type: 'title', text: 'Dlaczego odległość między uszkami ważniejsza niż średnica', level: 3 },
    { type: 'paragraph', html: 'Choć to średnica koperty przyciąga uwagę, to właśnie <strong>odległość między uszkami</strong> (pionowa długość od czubka jednego uszka do drugiego) jest prawdziwym testem dopasowania. Złota zasada: odległość między uszkami nigdy nie powinna przekraczać płaskiej szerokości nadgarstka. Gdy uszka wysterczają poza nadgarstek, zegarek się przesuwa, między paskiem a skórą powstaje szczelina, a wygląd wizualny jest niezadowalający.' },
    { type: 'title', text: 'Płaskie a okrągłe nadgarstki: dopasowanie rozmiaru do anatomii', level: 3 },
    { type: 'paragraph', html: 'Obwód nadgarstka mówi tylko część historii. Nadgarstki o tym samym obwodzie mogą mieć różne przekroje poprzeczne: płaski lub okrągły. Płaskie nadgarstki mają szerszą górną powierzchnię, dzięki czemu mogą nosić zegarki z większą odległością między uszkami bez zwisu. Okrągłe nadgarstki mają bardziej cylindryczny kształt i węższy wierzch, co wymaga krótszej odległości między uszkami, by uniknąć zwisu.' },
  ],
  faq: [
    {
      question: 'Jaki jest idealny stosunek koperty do nadgarstka?',
      answer: 'Idealny stosunek wynosi od 4,0 do 5,0. Stosunek 4,5 to tradycyjny zegarmistrowski sweet spot. Od 4,0 do 4,5 uzyskujemy nowoczesną, odważną obecność na nadgarstku; powyżej 5,0 zegarek lepiej pasuje do stylu vintage; poniżej 4,0 koperta wydaje się za duża.',
    },
    {
      question: 'Dlaczego odległość między uszkami jest ważniejsza niż średnica koperty?',
      answer: 'Średnica koperty mierzy jedynie szerokość tarczy, ale odległość między uszkami określa całkowitą długość zegarka na nadgarstku. Jeśli przekroczy płaską szerokość nadgarstka, uszka będą zwisać, pasek opadnie pionowo, a zegarek będzie wyglądał niestabilnie i nieproporcjonalnie duże.',
    },
    {
      question: 'Jak płaski i okrągły nadgarstek wpływają na dopasowanie zegarka?',
      answer: 'Dwa nadgarstki o tym samym obwodzie (np. 17 cm) mogą zupełnie inaczej nosić zegarek. Płaski nadgarstek ma szerszą górną powierzchnię, co pozwala nosić zegarki z większą odległością między uszkami bez zwisu. Okrągły nadgarstek jest węższy na górze, dlatego wymaga krótszej odległości między uszkami dla stabilnego dopasowania.',
    },
    {
      question: 'Jak grubość i szerokość zarysu wpływają na wizualny rozmiar zegarka?',
      answer: 'Zegarki z bardzo wąskim koronowym (np. dress watches) mają większą powierzchnię tarczy i wyglądają na ręce na większe niż wskazuje ich rzeczywista średnica. Zegarki nurkowe z szerokim obrotowym koronowym mają mniejszą tarczę i wydają się bardziej kompaktowe. Zegarki grubsze niż 13 mm wyglądają dodatkowo masywniej i mają większą wagę wizualną.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Zmierz swój nadgarstek',
      text: 'Owiń elastyczną taśmę mierniczą wokół kości nadgarstka, aby uzyskać obwód w cm lub calach.',
    },
    {
      name: 'Wprowadź wymiary zegarka',
      text: 'Wpisz średnicę koperty i odległość między uszkami zegarka, który chcesz ocenić.',
    },
    {
      name: 'Przeanalizuj dopasowanie i symulator',
      text: 'Sprawdź stosunek koperty do nadgarstka, ostrzeżenie o zwisie uszek i obejrzyj diagram symulacji w czasie rzeczywistym.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jaki jest idealny stosunek koperty do nadgarstka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealny stosunek wynosi od 4,0 do 5,0. Stosunek 4,5 to tradycyjny zegarmistrowski sweet spot. Od 4,0 do 4,5 uzyskujemy nowoczesną, odważną obecność na nadgarstku; powyżej 5,0 zegarek lepiej pasuje do stylu vintage; poniżej 4,0 koperta wydaje się za duża.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dlaczego odległość między uszkami jest ważniejsza niż średnica koperty?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Średnica koperty mierzy jedynie szerokość tarczy, ale odległość między uszkami określa całkowitą długość zegarka na nadgarstku. Jeśli przekroczy płaską szerokość nadgarstka, uszka będą zwisać, pasek opadnie pionowo, a zegarek będzie wyglądał niestabilnie i nieproporcjonalnie duże.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Obecności Zegarka na Nadgarstku',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak wybrać idealny rozmiar zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Zmierz swój nadgarstek',
          'text': 'Owiń elastyczną taśmę mierniczą wokół kości nadgarstka, aby uzyskać obwód w cm lub calach.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Wprowadź wymiary zegarka',
          'text': 'Wpisz średnicę koperty i odległość między uszkami zegarka, który chcesz ocenić.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Przeanalizuj dopasowanie i symulator',
          'text': 'Sprawdź stosunek koperty do nadgarstka, ostrzeżenie o zwisie uszek i obejrzyj diagram symulacji w czasie rzeczywistym.'
        }
      ]
    }
  ]
};

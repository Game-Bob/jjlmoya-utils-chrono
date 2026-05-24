import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'kalkulator-zwezania-paska',
  title: 'Kalkulator wązania i proporcji paska do zegarka',
  description: 'Oblicz idealne zwęzenie paska do zegarka na podstawie rednicy koperty i szerokoci ucha. Znajd idealn szeroko klamry dla zrównowaonego wygldu.',
  ui: {
    title: 'Kalkulator wązania paska',
    caseLabel: 'Wymiary zegarka',
    caseInput: 'Rednica koperty',
    lugLabel: 'Szeroko ucha',
    lugInput: 'Szeroko ucha',
    taperLabel: 'Styl wąania',
    straight: 'Prosty',
    classic: 'Klasyczny',
    aggressive: 'Agresywny',
    customTaper: 'Niestandardowy',
    buckleWidth: 'Szeroko klamry',
    resultsTitle: 'Proporcje',
    lugWidth: 'Szeroko ucha',
    buckleWidthResult: 'Szeroko klamry',
    taperAmount: 'Wąenie',
    taperRatio: 'Stosunek',
    proportionScore: 'Proporcja',
    proportionExcellent: 'Doskonaa',
    proportionGood: 'Dobra',
    proportionFair: 'Przeciętna',
    proportionUnbalanced: 'Niezrównowaona',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: 'Uwaga',
    noteContent: 'Klasyczne zwęenie o 4 mm (np. z 20 na 16 mm) pasuje do zegarków garniturowych. Zegarki nurkowe i narzdziowe często lepiej wygldaj z prostym zwęeniem lub zwęeniem o 2 mm, co daje solidny wygld.',
    step1: 'Wprowad rednic koperty i szeroko ucha.',
    step2: 'Wybierz styl zwęania lub ustaw niestandardow szeroko klamry.',
    step3: 'Sprawd proporcje i reprezentacj wizualn.',
  },
  seo: [
    { type: 'title', text: 'Kalkulator wązania paska \u2014 Proporcje, szeroko klamry i przewodnik wizualny', level: 2 },
    { type: 'paragraph', html: 'Dobrze proporcjonalny pasek moe zrobi lub zepsu zegarek. Zbyt due zwęenie w zegarku nurkowym sprawia, e wyglda krucho. Brak zwęenia w zegarku garniturowym sprawia, e wyglda niezdarnie. Ten kalkulator pomoe Ci znale idealny <strong>stosunek zwęenia paska</strong> na podstawie rednicy koperty i szerokoci ucha.' },
    { type: 'title', text: 'Czym jest wąenie paska?', level: 3 },
    { type: 'paragraph', html: 'Zwu017cenie paska to zmniejszenie szerokoci od koczca ucha do koczca klamry. Klasyczny zegarek garniturowy moe zwęa si z 20 mm przy uszach do 16 mm przy klamrze \u2014 zwęenie o 4 mm. Zegarek nurkowy moe pozosta prosty na 20 mm, aby uzyska bardziej narzdziowy wygld.' },
    { type: 'title', text: 'Zota proporcja dla proporcji paska', level: 3 },
    { type: 'paragraph', html: 'Mionicy zegarków na ogó zgodz si, e szeroko ucha midzy 45% a 55% rednicy koperty wyglda najlepiej. W przypadku zwęania, szeroko klamry wynosząca 75% do 85% szerokoci ucha tworzy zrównowaon, eleganck sylwetk. Stosunki poza tym zakresem mog sprawi, e zegarek bdzie wyglda na zbyt cinarawy lub zbyt kruszynkowy.' },
    { type: 'title', text: 'Wąenie w zależnoci od stylu zegarka', level: 3 },
    { type: 'paragraph', html: 'Zegarki garniturowe: zwęenie o 4 mm (z 20 na 16 mm). Zegarki sportowe: zwęenie o 2 do 3 mm. Zegarki nurkowe: zwęenie o 0 do 2 mm. Zegarki wojskowe lub polowe: proste zwęenie dla solidnego wygldu. Zegarki pilotskie: minimalne zwęenie dopasowane do estetyki przyrzdu.' },
  ],
  faq: [
    {
      question: 'Jakie jest idealne zwęenie paska do zegarka garniturowego?',
      answer: 'Zwęenie o 4 mm to klasyczny wybór. Dla szerokoci ucha 20 mm oznacza to klamr 16 mm. Tworzy to eleganck sylwetk, która podkrela wyrafinowany wygld zegarka garniturowego.',
    },
    {
      question: 'Czy zegarek nurkowy powinien mie zwęany pasek?',
      answer: 'Wikszoci zegarków nurkowych najlepiej wyglda z minimalnym lub zerowym zwęeniem. Prosty pasek o szerokoci 20 mm na caej dugoci daje solidne, narzdziowe odczucie pasujące do utylitarnego charakteru nurków.',
    },
    {
      question: 'Co si stanie, jeli zwęenie jest zbyt agresywne?',
      answer: 'Agresywne zwęenie (6 mm lub więcej) moe sprawi, e gowa zegarka bdzie wyglda nieproporcjonalnie dua i cinarawa. Pasek moe si rónie wydawa zbyt cienki przy klamrze.',
    },
    {
      question: 'Jak zmierzy szeroko ucha?',
      answer: 'Zmierz wewntrzn szeroko midzy otworami na spryny w kopercie zegarka. To jest potrzebna szeroko paska. Typowe rozmiary to 18 mm, 20 mm i 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wprowad wymiary koperty i ucha',
      text: 'Wprowad rednic koperty i szeroko ucha w milimetrach.',
    },
    {
      name: 'Wybierz styl zwęania',
      text: 'Wybierz Prosty, Klasyczny, Agresywny lub Niestandardowy. Obraz wizualny aktualizuje si natychmiast.',
    },
    {
      name: 'Sprawd proporcje',
      text: 'Sprawd stosunek i wynik proporcji, aby zobaczy, czy wybór paska jest zrównowaony.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jakie jest idealne zwęenie paska do zegarka garniturowego?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zwęenie o 4 mm to klasyczny wybór. Dla szerokoci ucha 20 mm oznacza to klamr 16 mm, co daje eleganck sylwetk.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy zegarek nurkowy powinien mie zwęany pasek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wikszoci zegarków nurkowych najlepiej wyglda z minimalnym lub zerowym zwęeniem. Prosty pasek 20 mm daje solidne odczucie.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co si stanie, jeli zwęenie jest zbyt agresywne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Agresywne zwęenie moe sprawi, e gowa zegarka bdzie wyglda nieproporcjonalnie dua, a pasek moe by zbyt cienki przy klamrze.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak zmierzy szeroko ucha?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zmierz wewntrzn szeroko midzy otworami na spryny. Typowe rozmiary to 18 mm, 20 mm i 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator wązania paska do zegarka',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak obliczy zwęenie paska do zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wprowad wymiary koperty i ucha',
          'text': 'Wprowad rednic koperty i szeroko ucha w milimetrach.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wybierz styl zwęania',
          'text': 'Wybierz Prosty, Klasyczny, Agresywny lub Niestandardowy.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sprawd proporcje',
          'text': 'Sprawd stosunek i wynik proporcji.',
        },
      ],
    },
  ],
};

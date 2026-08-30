import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'calcolatore-rastremazione-cinturino',
  title: 'Calcolatore di rastremazione e proporzioni del cinturino',
  description: 'Calcola la rastremazione ideale del cinturino per il tuo orologio in base al diametro della cassa e alla larghezza tra le anse. Trova la larghezza della fibbia perfetta per un look equilibrato.',
  ui: {
    title: 'Calcolatore di rastremazione cinturino',
    caseLabel: 'Dimensioni orologio',
    caseInput: 'Diametro cassa',
    lugLabel: 'Larghezza anse',
    lugInput: 'Larghezza anse',
    taperLabel: 'Stile rastremazione',
    straight: 'Dritto',
    classic: 'Classico',
    aggressive: 'Marcato',
    customTaper: 'Personalizzato',
    buckleWidth: 'Larghezza fibbia',
    resultsTitle: 'Proporzioni',
    lugWidth: 'Larghezza anse',
    buckleWidthResult: 'Larghezza fibbia',
    taperAmount: 'Rastremazione',
    taperRatio: 'Rapporto',
    proportionScore: 'Proporzione',
    proportionExcellent: 'Ottimo',
    proportionGood: 'Buono',
    proportionFair: 'Discreto',
    proportionUnbalanced: 'Squilibrato',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Nota',
    noteContent: 'Una rastremazione classica di 4 mm (es., da 20 a 16 mm) si adatta agli orologi eleganti. Gli orologi subacquei e da strumento spesso hanno un aspetto migliore con una rastremazione dritta o di 2 mm per un feel robusto.',
    step1: 'Inserisci il diametro della cassa e la larghezza tra le anse.',
    step2: 'Scegli uno stile di rastremazione o imposta una larghezza fibbia personalizzata.',
    step3: 'Leggi le proporzioni e la rappresentazione visiva.',
  },
  seo: [
    { type: 'title', text: 'Calcolatore di rastremazione cinturino - Proporzioni, larghezza fibbia e guida visiva', level: 2 },
    { type: 'paragraph', html: 'Un cinturino ben proporzionato può fare la differenza. Troppa rastremazione su un subacqueo lo rende fragile. Nessuna rastremazione su un elegante lo rende grossolano. Questo calcolatore ti aiuta a trovare il <strong>rapporto di rastremazione</strong> ideale in base al diametro della cassa e alla larghezza tra le anse.' },
    { type: 'title', text: 'Cos\'è la rastremazione del cinturino?', level: 3 },
    { type: 'paragraph', html: 'La rastremazione del cinturino è la riduzione di larghezza dalle anse alla fibbia. Un orologio elegante classico potrebbe restringersi da 20 mm alle anse a 16 mm alla fibbia - una rastremazione di 4 mm. Un subacqueo potrebbe rimanere dritto a 20 mm per un aspetto più robusto.' },
    { type: 'title', text: 'Il rapporto aureo per le proporzioni del cinturino', level: 3 },
    { type: 'paragraph', html: 'Gli appassionati di orologi concordano generalmente che una larghezza tra le anse tra il 45% e il 55% del diametro della cassa sia la più gradevole. Per la rastremazione, una larghezza fibbia tra il 75% e l\'85% della larghezza delle anse crea una silhouette equilibrata ed elegante. Rapporti al di fuori di questo intervallo possono far sembrare l\'orologio pesante o troppo fragile.' },
    { type: 'title', text: 'Rastremazione per stile di orologio', level: 3 },
    { type: 'paragraph', html: 'Orologi eleganti: rastremazione di 4 mm (20 a 16 mm). Orologi sportivi: rastremazione da 2 a 3 mm. Orologi subacquei: rastremazione da 0 a 2 mm. Orologi militari o da campo: rastremazione dritta per un look robusto. Orologi da pilota: rastremazione minima per abbinarsi all\'estetica da strumento.' },
  ],
  faq: [
    {
      question: 'Qual è la rastremazione ideale per un orologio elegante?',
      answer: 'Una rastremazione di 4 mm è la scelta classica. Per una larghezza tra le anse di 20 mm, significa una fibbia da 16 mm. Questo crea una silhouette elegante che completa il look raffinato di un orologio formale.',
    },
    {
      question: 'Un orologio subacqueo dovrebbe avere un cinturino rastremato?',
      answer: 'La maggior parte degli orologi subacquei ha un aspetto migliore con una rastrematura minima o assente. Un cinturino dritto da 20 mm per tutta la lunghezza dà una sensazione robusta e da strumento che si adatta alla natura utilitaria dei subacquei.',
    },
    {
      question: 'Cosa succede se la rastremazione è troppo marcata?',
      answer: 'Una rastremazione marcata (6 mm o più) può far sembrare la cassa sproporzionatamente grande e pesante. Il cinturino potrebbe anche sembrare sottile all\'estremità della fibbia.',
    },
    {
      question: 'Come si misura la larghezza tra le anse?',
      answer: 'Misura la larghezza interna tra i fori delle barre a molla sulla cassa. Questa è la larghezza del cinturino di cui hai bisogno. Le misure comuni sono 18 mm, 20 mm e 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Inserisci le dimensioni di cassa e anse',
      text: 'Inserisci il diametro della cassa e la larghezza tra le anse in millimetri.',
    },
    {
      name: 'Scegli uno stile di rastremazione',
      text: 'Seleziona Dritto, Classico, Marcato o Personalizzato. Il visivo si aggiorna istantaneamente.',
    },
    {
      name: 'Verifica le proporzioni',
      text: 'Controlla il rapporto e il punteggio di proporzione per vedere se la scelta del cinturino è equilibrata.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual è la rastremazione ideale per un orologio elegante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Una rastremazione di 4 mm è la scelta classica. Per anse da 20 mm, significa una fibbia da 16 mm, creando una silhouette elegante.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Un orologio subacqueo dovrebbe avere un cinturino rastremato?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La maggior parte degli orologi subacquei ha un aspetto migliore con rastrematura minima o assente. Un cinturino dritto da 20 mm dà una sensazione robusta.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede se la rastremazione è troppo marcata?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Una rastremazione marcata può far sembrare la cassa sproporzionata e il cinturino può sembrare sottile all\'estremità della fibbia.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Come si misura la larghezza tra le anse?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Misura la larghezza interna tra i fori delle barre a molla. Le misure comuni sono 18 mm, 20 mm e 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore di rastremazione cinturino',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come calcolare la rastremazione del cinturino',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Inserisci le dimensioni di cassa e anse',
          'text': 'Inserisci il diametro della cassa e la larghezza tra le anse in millimetri.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Scegli uno stile di rastremazione',
          'text': 'Seleziona Dritto, Classico, Marcato o Personalizzato.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Verifica le proporzioni',
          'text': 'Controlla il rapporto e il punteggio di proporzione.',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'calcolatore-lunghezza-cinturino',
  title: 'Calcolatore di Lunghezza del Cinturino per Orologio',
  description: 'Calcola la misura ideale del cinturino per il tuo polso. Ottieni consigli per cinturini a due pezzi e NATO in base alle dimensioni del polso e dell\'orologio.',
  ui: {
    title: 'Calcolatore Lunghezza Cinturino',
    wristLabel: 'Circonferenza polso',
    wristPlaceholder: 'es. 170',
    lugLabel: 'Distanza tra le anse',
    lugPlaceholder: 'es. 45',
    fitLabel: 'Vestibilità preferita',
    fitTight: 'Saldato',
    fitRegular: 'Regolare',
    fitLoose: 'Largo',
    unitLabel: 'Unità',
    standardLabel: 'Misura standard',
    bespokeLabel: 'Misura su misura',
    natoLabel: 'Lunghezza cinturino NATO',
    longSide: 'Lato lungo',
    shortSide: 'Lato corto',
    totalLength: 'Lunghezza totale',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Polsi < 6.0 in',
    sizeS: 'Small (S) - Polsi 6.0 a 6.5 in',
    sizeM: 'Medium (M) - Polsi 6.5 a 7.0 in',
    sizeL: 'Large (L) - Polsi 7.0 a 7.5 in',
    sizeXL: 'Extra Large (XL) - Polsi 7.5 a 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Polsi > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Guida alle Misure dei Cinturini per Orologi e Calcolatore di Lunghezza',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scegliere il cinturino perfetto per il tuo orologio è essenziale sia per il comfort che per l\'equilibrio estetico. Un cinturino troppo lungo lascia un\'antiestetica coda svolazzante, mentre uno troppo corto potrebbe non chiudere in modo sicuro. Questa guida spiega come determinare le misure standard, le misure su misura e le lunghezze dei cinturini NATO in base al polso, al design dell\'orologio e alla vestibilità desiderata.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Misura standard' },
        { value: '160-190mm', label: 'Adatto alla maggior parte dei polsi' },
        { value: '7 fori', label: 'Regolazioni tipiche' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Capire i cinturini a due pezzi: Lato lungo vs. lato corto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un cinturino a due pezzi è definito da due numeri, come <strong>120/80 mm</strong>. Il primo numero (es. 120 mm) è il <strong>lato lungo</strong> (il lato della punta), che si fissa alla posizione delle 6 ore. Il secondo numero (es. 80 mm) è il <strong>lato corto</strong> (il lato della fibbia), che si fissa alla posizione delle 12 ore. La fibbia stessa non è inclusa in queste misure.',
    },
    {
      type: 'title',
      text: 'Tabella delle misure standard in base alla circonferenza del polso',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Misura polso', 'Cinturino pelle/gomma', 'Cinturino NATO', 'Vestibilità consigliata'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Vestibilità piccola'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Vestibilità media standard'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Vestibilità grande standard'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Vestibilità extra large'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Vestibilità doppio extra large'],
      ],
    },
    {
      type: 'title',
      text: 'Misure su misura spiegate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ordinando cinturini fatti su misura, puoi ottenere la vestibilità perfetta. Invece di accontentarti delle posizioni standard dei fori, un cinturino su misura calcola la lunghezza precisa per ogni lato in modo che la fibbia poggi esattamente al centro della parte inferiore del polso. La formula utilizza la circonferenza totale del polso, sottrae la distanza tra le anse dell\'orologio e divide la lunghezza rimanente in base alla geometria del polso.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cinturini su misura',
          description: 'Realizzati specificamente per il tuo polso e le dimensioni della cassa. Garantiscono un centraggio perfetto della fibbia ed eliminano la coda in eccesso.',
          points: [
            'Centraggio perfetto della fibbia',
            'Posizioni dei fori personalizzate',
            'Nessuna coda di cinturino in eccesso',
            'Aspetto e sensazione premium',
          ],
        },
        {
          title: 'Cinturini standard',
          description: 'Misure prodotte in serie progettate per adattarsi a un\'ampia gamma di polsi grazie a fori multipli. Veloci ed economici.',
          points: [
            'Costo inferiore',
            'Disponibilità immediata',
            'Adatti a più orologi',
            'Dimensioni standardizzate',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Terminologia chiave dei cinturini per orologi',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Distanza tra le anse (Lug-to-Lug)',
          definition: 'La distanza verticale totale dall\'estremità dell\'ansa superiore all\'estremità dell\'ansa inferiore. Non è il diametro della cassa, ma la lunghezza totale della testa dell\'orologio che poggia sul polso.',
        },
        {
          term: 'Lato corto (Fibbia)',
          definition: 'La sezione del cinturino fissata alla posizione delle 12 ore della cassa. Include la fibbia ma è esclusa dalle misure di lunghezza.',
        },
        {
          term: 'Lato lungo (Punta)',
          definition: 'La sezione del cinturino fissata alla posizione delle 6 ore. Ha fori di regolazione per regolare la tensione.',
        },
        {
          term: 'Cinturino NATO',
          definition: 'Un cinturino in nylon monopezzo che passa sotto la cassa dell\'orologio attraverso le barrette. È altamente regolabile e durevole.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Misurare correttamente il polso',
      html: 'Per una misurazione accurata, avvolgi un metro a nastro flessibile (senza stringere) intorno alla zona dove indossi normalmente l\'orologio. Se non hai un metro, usa uno spago o una striscia di carta, segna la sovrapposizione e misura la lunghezza con un righello.',
    },
    {
      type: 'title',
      text: 'Perché la distanza tra le anse è fondamentale per la misura del cinturino',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Molti collezionisti dimenticano che la cassa dell\'orologio agisce come un\'estensione rigida del cinturino. Un orologio con una distanza tra le anse di 50 mm occupa più spazio sul polso rispetto a un orologio da 40 mm. Di conseguenza, l\'orologio più grande richiede cinturini più corti per ottenere la stessa dimensione del cappio. Non considerare la distanza tra le anse è la ragione numero uno dei cinturini mal vestiti.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Evitare lo spostamento della fibbia e lo sbalzo della cassa',
      html: 'Se il lato corto del cinturino è troppo lungo o troppo corto per il tuo polso, la fibbia scivolerà lateralmente. Questo fa sì che la cassa dell\'orologio si sposti dal centro, causando disagio e aumentando il rischio di graffi sulla cassa o sulla chiusura. Cerca sempre che la fibbia sia centrata sulla parte inferiore piatta del polso.',
    },
    {
      type: 'proscons',
      title: 'Cinturino NATO vs. cinturino a due pezzi',
      items: [
        {
          pro: 'I cinturini NATO sono altamente regolabili e prevengono la perdita dell\'orologio in caso di rottura di una barretta.',
          con: 'I cinturino NATO aggiungono spessore sotto la cassa dell\'orologio.',
        },
        {
          pro: 'I cinturini a due pezzi mantengono la cassa a contatto con la pelle per un profilo più sottile.',
          con: 'I cinturini a due pezzi richiedono un dimensionamento preciso e offrono meno regolazioni.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Come si misura la lunghezza di un cinturino per orologio?',
      answer: 'La lunghezza di un cinturino è solitamente espressa con due numeri come 120/80 mm. Il primo numero è la lunghezza del lato lungo (punta), e il secondo è il lato corto (fibbia).',
    },
    {
      question: 'Dov\'è posizionata la fibbia sul polso?',
      answer: 'Idealmente, la fibbia dovrebbe essere centrata sulla parte inferiore del polso. Se è spostata, la cassa dell\'orologio si decentrerà. Regolare il rapporto tra lato lungo e lato corto aiuta a ottenere un centraggio perfetto.',
    },
    {
      question: 'Come influisce la distanza tra le anse sulla lunghezza del cinturino necessaria?',
      answer: 'La cassa dell\'orologio è una parte rigida del cappio totale del cinturino. Un orologio grande con una lunga distanza tra le anse (es. 50 mm) riduce la lunghezza del cinturino necessaria per avvolgere il polso rispetto a un orologio più piccolo (es. 40 mm) sullo stesso polso.',
    },
    {
      question: 'Da che parte va il lato lungo del cinturino?',
      answer: 'Tradizionalmente, il lato lungo del cinturino (contenente i fori di regolazione) è fissato alla posizione delle 6 ore della cassa, puntando verso di te. Il lato corto (con la fibbia) è fissato alla posizione delle 12 ore.',
    },
    {
      question: 'Quanto deve essere stretto un cinturino per orologio?',
      answer: 'Un cinturino dovrebbe essere aderente ma comodo. Dovresti poter infilare un dito sotto senza forzare. Un cinturino troppo stretto può limitare la circolazione, mentre uno troppo largo farà ruotare la cassa.',
    },
    {
      question: 'Posso usare un cinturino NATO su qualsiasi orologio?',
      answer: 'Sì, purché l\'orologio abbia barrette standard con spazio sufficiente tra la cassa e la barretta. I cinturini NATO passano sotto la cassa, quindi spazi molto stretti potrebbero richiedere barrette curve o materiali di cinturino più sottili.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Misurare il polso',
      text: 'Usa un metro a nastro flessibile per trovare la circonferenza del polso in millimetri o pollici.',
    },
    {
      name: 'Misurare la distanza tra le anse',
      text: 'Misura l\'altezza della cassa dell\'orologio dall\'estremità dell\'ansa superiore all\'estremità dell\'ansa inferiore.',
    },
    {
      name: 'Selezionare la vestibilità preferita',
      text: 'Scegli tra una vestibilità saldata, regolare o larga.',
    },
    {
      name: 'Calcolare i consigli',
      text: 'Consulta la misura standard, le misure su misura lato lungo/corto e la lunghezza NATO ideale.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come si misura la lunghezza di un cinturino per orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La lunghezza di un cinturino è solitamente espressa con due numeri come 120/80 mm. Il primo numero è la lunghezza del lato lungo (punta), e il secondo è il lato corto (fibbia).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Dov\'è posizionata la fibbia sul polso?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealmente, la fibbia dovrebbe essere centrata sulla parte inferiore del polso. Se è spostata, la cassa dell\'orologio si decentrerà. Regolare il rapporto tra lato lungo e lato corto aiuta a ottenere un centraggio perfetto.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Come influisce la distanza tra le anse sulla lunghezza del cinturino necessaria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La cassa dell\'orologio è una parte rigida del cappio totale del cinturino. Un orologio grande con una lunga distanza tra le anse (es. 50 mm) riduce la lunghezza del cinturino necessaria per avvolgere il polso rispetto a un orologio più piccolo (es. 40 mm) sullo stesso polso.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Da che parte va il lato lungo del cinturino?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tradizionalmente, il lato lungo del cinturino (contenente i fori di regolazione) è fissato alla posizione delle 6 ore della cassa, puntando verso di te. Il lato corto (con la fibbia) è fissato alla posizione delle 12 ore.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quanto deve essere stretto un cinturino per orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un cinturino dovrebbe essere aderente ma comodo. Dovresti poter infilare un dito sotto senza forzare. Un cinturino troppo stretto può limitare la circolazione, mentre uno troppo largo farà ruotare la cassa.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Posso usare un cinturino NATO su qualsiasi orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì, purché l\'orologio abbia barrette standard con spazio sufficiente tra la cassa e la barretta. I cinturini NATO passano sotto la cassa, quindi spazi molto stretti potrebbero richiedere barrette curve o materiali di cinturino più sottili.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore di Lunghezza del Cinturino per Orologio',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Calcolatore di Lunghezza del Cinturino per Orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Misurare il polso',
          'text': 'Usa un metro a nastro flessibile per trovare la circonferenza del polso in millimetri o pollici.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Misurare la distanza tra le anse',
          'text': 'Misura l\'altezza della cassa dell\'orologio dall\'estremità dell\'ansa superiore all\'estremità dell\'ansa inferiore.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Selezionare la vestibilità preferita',
          'text': 'Scegli tra una vestibilità saldata, regolare o larga.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcolare i consigli',
          'text': 'Consulta la misura standard, le misure su misura lato lungo/corto e la lunghezza NATO ideale.'
        }
      ]
    } as any
  ]
};

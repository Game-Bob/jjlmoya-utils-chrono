import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'calcolatore-presenza-polso',
  title: 'Calcolatore di Presenza al Polso e Taglia dell\'Orologio',
  description: 'Calcola il rapporto cassa-polso, la copertura piatta del polso e determina la taglia ideale dell\'orologio in base a linee guida estetiche.',
  ui: {
    title: 'Impostazioni di Misura',
    wristCircumferenceLabel: 'Circonferenza del Polso',
    caseDiameterLabel: 'Diametro della Cassa',
    lugToLugLabel: 'Distanza tra i Corni',
    wristWidthLabel: 'Larghezza Piatta del Polso',
    autoEstimateWidthLabel: 'Stima automatica della larghezza piatta (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Analisi della Vestibilità al Polso',
    caseWristRatioLabel: 'Rapporto Cassa-Polso',
    wristCoverageLabel: 'Copertura del Polso',
    verdictLabel: 'Verdetto',
    verdictOversized: 'Cassa Sovradimensionata',
    verdictBold: 'Vestibilità Moderna / Decisa',
    verdictGolden: 'Vestibilità Classica / Aurea',
    verdictVintage: 'Vintage / Sottodimensionato',
    coverageSafe: 'Vestibilità Equilibrata',
    coverageBold: 'Vestibilità Decisa',
    coverageOverhang: 'Avvertenza Corni in Aggetto',
    sweetSpotTitle: 'Stile di Vestibilità',
    sweetSpotDesc: 'Lo sweet spot rappresenta l\'aspetto visivo più equilibrato.',
    minClassicLabel: 'Vestibilità Vintage / Classica',
    sweetSpotLabel: 'Sweet Spot Estetico',
    maxBoldLabel: 'Vestibilità Moderna / Decisa',
    maxLugToLugLabel: 'Distanza tra i Corni Massima Raccomandata',
    idealSizesTitle: 'Guida alle Taglie Ideali',
    visualizerTitle: 'Simulatore in Tempo Reale',
    wristWidthHelp: 'Stima basata sulla forma del polso.',
    estimatedLabel: 'stimato',
    customLabel: 'Polso',
  },
  seo: [
    { type: 'title', text: 'Come scegliere la taglia perfetta dell\'orologio: la guida alle proporzioni', level: 2 },
    { type: 'paragraph', html: 'Trovare la taglia giusta per un orologio è una combinazione di matematica, geometria e stile personale. In orologeria, il modo in cui un segnatempo si posa sul polso si chiama <strong>presenza al polso</strong>. Un orologio deve apparire equilibrato: né dominare il braccio con un aggetto antiestetico dei corni, né scomparire come un minuscolo puntino. Per raggiungere questo equilibrio, i collezionisti analizzano tre parametri principali: diametro della cassa, distanza tra i corni e forma del polso.' },
    { type: 'title', text: 'Capire il rapporto cassa-polso', level: 3 },
    { type: 'paragraph', html: 'Il rapporto cassa-polso è il metodo classico per valutare le proporzioni di un orologio. Si divide la circonferenza del polso in millimetri per il diametro della cassa. Rapporti tra <strong>4,5 e 5,0</strong> rappresentano lo sweet spot classico. Da <strong>4,0 a 4,5</strong> si ottiene un aspetto moderno e sportivo. Sopra 5,0 prevale l\'estetica vintage; sotto 4,0 la cassa risulta sovradimensionata.' },
    { type: 'title', text: 'Perché la distanza tra i corni conta più del diametro', level: 3 },
    { type: 'paragraph', html: 'Pur ricevendo tutta l\'attenzione, il diametro della cassa non è il vero banco di prova: lo è la <strong>distanza tra i corni</strong> (la lunghezza verticale da punta a punta dei corni). La regola aurea è che questa distanza non deve mai superare la larghezza piatta del polso. Se i corni vanno in aggetto, l\'orologio scivola, si crea un vuoto tra il cinturino e la pelle e il risultato visivo è scadente.' },
    { type: 'title', text: 'Polsi piatti vs. tondi: scegliere in base alla propria anatomia', level: 3 },
    { type: 'paragraph', html: 'La circonferenza del polso racconta solo una parte della storia. Polsi con la stessa circonferenza possono avere sezioni trasversali diverse: piatta o tonda. I polsi piatti offrono una superficie superiore più ampia e tollerano distanze tra i corni maggiori senza aggetto. I polsi tondi sono più cilindrici, con una superficie superiore più stretta, e richiedono distanze tra i corni più brevi per evitare l\'aggetto.' },
  ],
  faq: [
    {
      question: 'Qual è il rapporto cassa-polso ideale?',
      answer: 'Il rapporto ideale è compreso tra 4,0 e 5,0. Un rapporto di 4,5 rappresenta lo sweet spot dell\'orologeria classica. Tra 4,0 e 4,5 si ottiene una presenza al polso moderna e decisa; oltre 5,0 l\'orologio si adatta meglio a uno stile vintage; sotto 4,0 tende ad apparire sovradimensionato.',
    },
    {
      question: 'Perché la distanza tra i corni è più importante del diametro della cassa?',
      answer: 'Il diametro misura solo la larghezza del quadrante, mentre la distanza tra i corni definisce la lunghezza totale dell\'orologio sul polso. Se supera la larghezza piatta del polso, i corni vanno in aggetto, il cinturino cade in verticale e l\'orologio appare instabile e sproporzionato.',
    },
    {
      question: 'Come influiscono i polsi piatti o tondi sulla vestibilità?',
      answer: 'Due polsi con la stessa circonferenza (es. 17 cm) possono portare un orologio in modo molto diverso. Un polso piatto ha una superficie superiore più ampia e può accogliere distanze tra i corni maggiori senza aggetto. Un polso tondo è più stretto in alto e richiede distanze tra i corni più brevi per una vestibilità stabile.',
    },
    {
      question: 'Come lo spessore e il vetro cambiano le dimensioni visive di un orologio?',
      answer: 'Gli orologi con lunetta molto sottile (come quelli eleganti) hanno una superficie del quadrante maggiore e appaiono più grandi del loro diametro reale. Gli orologi da immersione con lunetta girevole larga hanno un quadrante più piccolo e sembrano più compatti. Allo stesso modo, gli orologi di spessore superiore a 13 mm appaiono più massicci e visivamente più pesanti.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Misura il tuo polso',
      text: 'Avvolgi un metro flessibile attorno all\'osso del polso per trovare la tua circonferenza in cm o pollici.',
    },
    {
      name: 'Inserisci le dimensioni dell\'orologio',
      text: 'Inserisci il diametro della cassa e la distanza tra i corni dell\'orologio che vuoi valutare.',
    },
    {
      name: 'Analizza la vestibilità e il simulatore',
      text: 'Verifica il rapporto cassa-polso, l\'avvertenza di aggetto dei corni e osserva il diagramma in tempo reale.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual è il rapporto cassa-polso ideale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il rapporto ideale è compreso tra 4,0 e 5,0. Un rapporto di 4,5 rappresenta lo sweet spot dell\'orologeria classica. Tra 4,0 e 4,5 si ottiene una presenza al polso moderna e decisa; oltre 5,0 l\'orologio si adatta meglio a uno stile vintage; sotto 4,0 tende ad apparire sovradimensionato.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Perché la distanza tra i corni è più importante del diametro della cassa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il diametro misura solo la larghezza del quadrante, mentre la distanza tra i corni definisce la lunghezza totale dell\'orologio sul polso. Se supera la larghezza piatta del polso, i corni vanno in aggetto, il cinturino cade in verticale e l\'orologio appare instabile e sproporzionato.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore di Presenza al Polso e Taglia dell\'Orologio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come determinare la taglia perfetta dell\'orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Misura il tuo polso',
          'text': 'Avvolgi un metro flessibile attorno all\'osso del polso per trovare la tua circonferenza in cm o pollici.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Inserisci le dimensioni dell\'orologio',
          'text': 'Inserisci il diametro della cassa e la distanza tra i corni dell\'orologio che vuoi valutare.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analizza la vestibilità e il simulatore',
          'text': 'Verifica il rapporto cassa-polso, l\'avvertenza di aggetto dei corni e osserva il diagramma in tempo reale.'
        }
      ]
    }
  ]
};

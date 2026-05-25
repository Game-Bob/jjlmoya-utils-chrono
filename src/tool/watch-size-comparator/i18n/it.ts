import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'confronto-taglie-orologi',
  title: 'Watch Size Comparator — Vestibilità al Polso',
  description: 'Confronta visivamente le dimensioni delle casse degli orologi. Inserisci diametro, lug-to-lug e circonferenza polso per vedere come ti calzerà un orologio prima di acquistarlo.',
  ui: {
    title: 'Watch Size Comparator',
    addWatch: 'Aggiungi Orologio',
    watchName: 'Nome Orologio',
    watchNamePlaceholder: 'es. Rolex Submariner',
    caseDiameter: 'Diametro Cassa',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Spessore',
    wristSize: 'Circonferenza Polso',
    wristSizePlaceholder: 'es. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Rimuovi',
    yourWatches: 'I Tuoi Orologi',
    fitLegend: 'Legenda Vestibilità',
    excellentFit: 'Ottimo',
    goodFit: 'Buono',
    borderlineFit: 'Al Limite',
    largeFit: 'Troppo Grande',
    wristCurve: 'polso',
    nameRequired: 'Inserisci un nome per l\'orologio',
    watchTooLarge: 'L\'orologio supera la larghezza del polso',
    l2lExceedsWrist: 'Il lug-to-lug supera la larghezza del polso',
    excellentDesc: 'Proporzionato — il lug-to-lug resta ben entro il polso.',
    goodDesc: 'Buona vestibilità — sporgenza leggera ma comunque comoda.',
    borderlineDesc: 'Al limite — le anse si avvicinano al bordo del polso.',
    largeDesc: 'Troppo grande — le anse probabilmente sporgono dal polso.',
    fitsWell: 'Calza bene',
    slightlyLarge: 'Leggermente grande',
    tooLarge: 'Troppo grande',
    source: 'Guida alle misure',
    estimateNote: 'Inserisci le dimensioni e aggiungi un orologio per vedere come calza al polso.',
  },
  seo: [
    { type: 'title', text: 'Watch Size Comparator — Vestibilità Visiva al Polso', level: 2 },
    { type: 'paragraph', html: 'Ti stai chiedendo se un <strong>orologio da 42 mm</strong> calzerà sul tuo <strong>polso da 17 cm</strong>? O se quel lug-to-lug da 48 mm sporge troppo? Watch Size Comparator ti dà una risposta visiva. Inserisci diametro cassa, lug-to-lug, spessore e circonferenza polso — lo strumento disegna l\'orologio in scala e colora la vestibilità dal <span style="color:#22c55e">verde (ottimo)</span> al <span style="color:#ef4444">rosso (troppo grande)</span>. Funziona sia in unità <strong>metriche che imperiali</strong>.' },
    { type: 'title', text: 'Glossario delle Dimensioni degli Orologi', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Diametro Cassa', definition: 'La larghezza della cassa misurata da un lato all\'altro del quadrante, esclusa la corona. Range tipico: 34-46 mm. È la misura più citata, ma non l\'unica che conta per la vestibilità.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'La distanza tra le anse superiore e inferiore, dove si attacca il cinturino. Determina se l\'orologio sporge dal polso. Un 40 mm con L2L da 50 mm indossa più grande di un 42 mm con L2L da 46 mm.' },
        { term: 'Larghezza Piatta del Polso', definition: 'La larghezza della superficie superiore del polso, opposta alla circonferenza. Indicativamente: circonferenza / π meno 2-4 cm. È la dimensione su cui poggia effettivamente l\'orologio.' },
        { term: 'Rapporto Cassa-Polso', definition: 'Diametro cassa diviso per larghezza polso. Un rapporto di 0,6-0,75 (60-75%) è considerato la vestibilità classica proporzionata.' },
      ]
    },

    { type: 'title', text: 'Quale Misura di Orologio Calza sul Mio Polso?', level: 3 },
    {
      type: 'table', headers: ['Circonferenza Polso', 'Larghezza Piatta (circa)', 'Diametro Ideale Cassa', 'Lug-to-Lug Max', 'Ideale Per'], rows: [
        ['14-15 cm (5.5-5.9 in)', '38-42 mm', '30-34 mm', '38-42 mm', 'Orologi vintage e da vestito'],
        ['15-16 cm (5.9-6.3 in)', '40-44 mm', '34-36 mm', '40-44 mm', 'Orologi classici piccoli'],
        ['16-17 cm (6.3-6.7 in)', '42-46 mm', '36-39 mm', '42-46 mm', 'Misura versatile per tutti i giorni'],
        ['17-18 cm (6.7-7.1 in)', '44-48 mm', '38-42 mm', '44-48 mm', 'Il punto dolce per la maggior parte dei marchi'],
        ['18-19 cm (7.1-7.5 in)', '46-50 mm', '40-44 mm', '46-50 mm', 'Subacquei e GMT'],
        ['19-20 cm (7.5-7.9 in)', '48-52 mm', '42-46 mm', '48-52 mm', 'Tool watch e piloti'],
        ['20-21 cm (7.9-8.3 in)', '50-54 mm', '44-48 mm', '50-54 mm', 'Orologi oversize e flieger'],
      ]
    },

    { type: 'title', text: 'Come Misurare il Polso per un Orologio', level: 3 },
    {
      type: 'list', items: [
        'Avvolgi un metro da sarta flessibile intorno al polso, appena sotto l\'osso (stiloide ulnare). Deve essere aderente ma non stretto.',
        'Se non hai un metro, usa uno spago o un cavo, segna la sovrapposizione e misurala con un righello.',
        'Annota la misura in centimetri o pollici. La media maschile è 17-19 cm (6,7-7,5 in); quella femminile 14-16 cm (5,5-6,3 in).',
        'Per stimare la larghezza piatta del polso, sottrai 2-4 cm dalla circonferenza o usa la funzione di stima automatica dello strumento.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Il Lug to Lug e il Vero Limite di Vestibilita', icon: 'mdi:ruler', html: 'La maggior parte delle persone guarda il <strong>diametro cassa</strong>, ma è il <strong>lug-to-lug</strong> che determina se un orologio calza. Un orologio con L2L da 48 mm su un polso piatto da 55 mm (circonferenza 17 cm) occupa l\'87% della larghezza del polso. Oltre il 65% le anse iniziano ad avvicinarsi al bordo. <strong>Controlla sempre prima il L2L.</strong>' },

    { type: 'tip', title: 'CM o Pollici? Usa Quello che Conosci', html: 'Lo strumento supporta sia il metrico che l\'imperiale. Misura il polso nel sistema che usi tutti i giorni. Le dimensioni della cassa sono <strong>sempre in millimetri</strong> (anche negli USA), quindi diametri e L2L restano in mm — solo la misura del polso cambia. Esattamente come funziona nel settore orologiero.' },

    {
      type: 'summary', title: 'Lista di Controllo Rapida Prima dell\'Acquisto', items: [
        'Misura la circonferenza del polso e inseriscila nello strumento.',
        'Controlla il lug-to-lug dell\'orologio, non solo il diametro cassa.',
        'L\'orologio dovrebbe occupare il 60-75% della larghezza piatta del polso per una vestibilità classica.',
        'Se le anse sporgono dai bordi del polso, l\'orologio sembrerà troppo grande a prescindere dal diametro.',
        'Usa lo strumento per confrontare più orologi fianco a fianco prima di decidere l\'acquisto.',
      ]
    },
  ],
  faq: [
    {
      question: 'Come si misura il polso per un orologio?',
      answer: 'Usa un metro flessibile intorno all\'osso del polso. In alternativa, avvolgi uno spago, segna la sovrapposizione e misurala con un righello. La media è 17-19 cm per gli uomini, 14-16 cm per le donne.',
    },
    {
      question: 'Cos\'è il lug-to-lug e perché è importante?',
      answer: 'Il lug-to-lug è la distanza tra le anse superiore e inferiore. Determina se l\'orologio sporge dal polso. Un orologio con 48 mm di lug-to-lug su un polso da 17 cm (≈55 mm di larghezza piatta) è proporzionato all\'87%. Oltre il 65% inizia a sporgere.',
    },
    {
      question: 'Che misura di orologio calza su un polso da 17 cm?',
      answer: 'Un polso da 17 cm (≈55 mm di larghezza piatta) ospita comodamente orologi con diametro 36-42 mm e lug-to-lug 44-50 mm. Il punto dolce è 38-40 mm con L2L da 46-48 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Inserisci la circonferenza del polso',
      text: 'Digita la circonferenza del polso in centimetri. Lo strumento aggiorna la sagoma visiva del polso.',
    },
    {
      name: 'Inserisci le dimensioni dell\'orologio',
      text: 'Inserisci diametro cassa, lug-to-lug e spessore in millimetri.',
    },
    {
      name: 'Aggiungi e confronta',
      text: 'Clicca "Aggiungi Orologio" per salvarlo. Aggiungi più orologi e clicca tra di loro per confrontare la vestibilità.',
    },
    {
      name: 'Leggi il colore',
      text: 'Verde = ottimo, giallo = al limite, rosso = troppo grande per il tuo polso.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come si misura il polso per un orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa un metro flessibile intorno all\'osso del polso. La media è 17-19 cm per gli uomini, 14-16 cm per le donne.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cos\'è il lug-to-lug e perché è importante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il lug-to-lug è la distanza tra le anse superiore e inferiore. Determina se l\'orologio sporge dal polso.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Che misura di orologio calza su un polso da 17 cm?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un polso da 17 cm accetta diametri 36-42 mm con lug-to-lug 44-50 mm. Il punto dolce è 38-40 mm con L2L da 46-48 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come confrontare le dimensioni degli orologi',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Inserisci la circonferenza del polso',
          'text': 'Digita la circonferenza del polso in centimetri.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inserisci le dimensioni dell\'orologio',
          'text': 'Inserisci diametro cassa, lug-to-lug e spessore.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi e confronta',
          'text': 'Clicca Aggiungi Orologio per salvarlo. Aggiungi più orologi per confrontarli.',
        },
      ],
    },
  ],
};


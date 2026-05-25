import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'simulatore-colore-lume',
  title: 'Lume Color Simulator — Visualizzatore di Lume per Orologi',
  description: 'Visualizza diversi colori di lume in tempo reale. Confronta C1, C3, BGW9, LumiNova e altri su vari livelli di luminosità ambientale.',
  ui: {
    title: 'Lume Color Simulator',
    lumeType: 'Tipo di Lume',
    brightness: 'Luminosità Ambientale',
    dark: 'Buio',
    light: 'Luce',
    color: 'Colore',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Tipo',
    description: 'Descrizione',
    c1Name: 'C1',
    c1Desc: 'Verde (classico)',
    c3Name: 'C3',
    c3Desc: 'Super Verde',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Bianco Ghiaccio',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Bianco Caldo',
    vintageName: 'Vintage',
    vintageDesc: 'Radio Invecchiato',
    orangeName: 'Arancione',
    orangeDesc: 'Arancione Sub',
    blueName: 'Blu',
    blueDesc: 'Blu Profondo',
    greenName: 'Verde',
    greenDesc: 'Verde Neon',
    tipTitle: 'Consiglio',
    tipContent: 'La luminosità del lume dipende dalla qualità del pigmento e da quanta luce ha assorbito. Il BGW9 brilla di un bianco-blu ed è il più luminoso, mentre il lume vintage ha un bagliore caldo e tenue.',
  },
  seo: [
    { type: 'title', text: 'Simulatore Colori Lume Orologi — Visualizzatore Bagliore in Tempo Reale', level: 2 },
    { type: 'paragraph', html: 'Il lume è una delle scelte più personali nel collezionismo di orologi. Preferisci il classico bagliore verde del <strong>C1 Super-LumiNova</strong> o il bianco ghiaccio del <strong>BGW9</strong>? Questo simulatore ti mostra l\'aspetto di ogni tipo di lume a diversi livelli di luminosità, dalla piena luce del giorno al buio completo, con i valori esatti <strong>HEX e RGB</strong> per ogni tonalità.' },
    { type: 'title', text: 'Confronto tra i Tipi di Super-LumiNova', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Colore di Giorno', 'Colore del Bagliore', 'Luminosità', 'Ideale Per'], rows: [
        ['C1', 'Verde chiaro', 'Verde', 'Media', 'Orologi da vestito, estetica originale'],
        ['C3', 'Giallo-verde', 'Verde brillante', 'Altissima', 'Orologi subacquei, tool watch'],
        ['BGW9', 'Bianco sporco', 'Bianco ghiaccio', 'Alta', 'Sportivi moderni, look pulito'],
        ['LumiNova', 'Beige caldo', 'Bianco caldo', 'Bassa-media', 'Lume economico'],
        ['Vintage', 'Crema / marrone chiaro', 'Caldo tenue', 'Bassa', 'Orologi in stile heritage'],
        ['Arancione', 'Arancione', 'Arancione', 'Media', 'Accenti subacquei, sub retrò'],
        ['Blu', 'Azzurro', 'Blu', 'Media', 'Quadranti di design, moda'],
        ['Verde', 'Verde brillante', 'Verde', 'Alta', 'Orologi in stile militare'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 — Quale Scegliere?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Verde Classico', icon: 'mdi:lightbulb-on', description: 'La formulazione originale Super-LumiNova. Illumina in verde con luminosità media. Una scelta classica e sicura che funziona con qualsiasi stile di orologio.', points: ['Luminosità media, visibilità 4–6 h', 'Bagliore verde, tonalità calda', 'Formulazione più economica', 'Comune negli orologi entry-level'], highlight: false },
        { title: 'C3 Super Verde', icon: 'mdi:lightning-bolt', description: 'Il lume verde più luminoso disponibile. Usato negli orologi subacquei professionisti dove la leggibilità sott\'acqua è fondamentale. Massimo bagliore con minima carica.', points: ['Luminosità altissima, visibilità 8–12 h', 'Giallo-verde alla luce del giorno', 'Preferito da Seiko, Citizen, Omega', 'Ideale per leggibilità al buio'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Bianco Ghiaccio', icon: 'mdi:snowflake', description: 'Illumina in bianco-blu invece che verde. Leggermente meno brillante del C3 ma apprezzato per il suo aspetto pulito e moderno. Popolare negli sportivi di lusso.', points: ['Luminosità alta, visibilità 6–10 h', 'Bagliore bianco-blu, tonalità neutra', 'Look pulito e moderno alla luce del giorno', 'Usato da Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Stile Radio', icon: 'mdi:fire', description: 'Tonalità beige/crema calda che imita il lume al radio degli anni \'60. Volutamente più spento per autenticità estetica. Il bagliore è caldo, sottile e invecchia splendidamente.', points: ['Luminosità bassa, visibilità 2–4 h', 'Dal crema caldo all\'ambra spenta', 'Aspetto invecchiato senza radioattività', 'Popolare nelle riedizioni heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'La Luminosità Non è Tutto', icon: 'mdi:palette', html: 'Il lume più brillante (C3) non è sempre la scelta migliore. Il <strong>BGW9</strong> sacrifica una piccola differenza di luminosità per un look più neutro e moderno che molti collezionisti preferiscono. Il <strong>lume vintage</strong> privilegia l\'estetica d\'epoca rispetto alle prestazioni. Scegli in base a ciò che conta di più per te: <strong>massimo bagliore, estetica moderna o autenticità heritage.</strong>' },
    { type: 'title', text: 'Come Funziona il Lume: La Scienza Dietro il Bagliore', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Un pigmento fotoluminescente a base di alluminato di stronzio. Assorbe la luce UV e visibile e la riemette sotto forma di bagliore. Non radioattivo e sicuro. Sviluppato originariamente da Nemoto & Co. nel 1993.' },
        { term: 'Tempo di Carica', definition: 'La durata dell\'esposizione alla luce necessaria per saturare il pigmento. Una carica completa richiede 10–30 minuti sotto luce solare diretta o UV. Più carica = bagliore più lungo e luminoso.' },
        { term: 'Durata del Bagliore', definition: 'Per quanto tempo il lume rimane visibile dopo la carica. Il Super-LumiNova di qualità brilla visibilmente per 6–12 ore. Il periodo più luminoso sono i primi 30 minuti dopo la carica.' },
        { term: 'Grado del Pigmento', definition: 'La qualità dei cristalli di alluminato di stronzio. I pigmenti di grado superiore (C3, BGW9) usano cristalli più grandi e uniformi per un bagliore più luminoso e duraturo. I gradi inferiori (LumiNova) usano cristalli più piccoli e sono più spenti.' },
      ]
    },
    {
      type: 'summary', title: 'Guida Rapida alla Scelta del Lume', items: [
        'Per la massima leggibilità al buio: scegli C3 (verde più brillante) o BGW9 (bianco-blu più brillante).',
        'Per un look moderno e di lusso: BGW9 è il preferito attuale tra i brand di alta gamma.',
        'Per costruzioni vintage/heritage: usa Vintage o Arancione per un calore d\'epoca.',
        'C1 è il tuttofare: buona luminosità, verde classico, economico.',
        'Il colore del lume alla luce del giorno è molto diverso dal colore del bagliore — usa il simulatore per confrontarli entrambi.',
      ]
    },
  ],
  faq: [
    {
      question: 'Quale lume è il più luminoso?',
      answer: 'Il C3 Super-LumiNova è la formulazione verde più brillante. Il BGW9 è il bianco-blu più brillante. Entrambi sono significativamente più luminosi del C1 o del LumiNova standard.',
    },
    {
      question: 'Cos\'è il lume BGW9?',
      answer: 'Il BGW9 è una variante del Super-LumiNova che brilla in bianco-blu invece che verde. È leggermente meno luminoso del C3 ma preferito da molti per il suo aspetto pulito e moderno.',
    },
    {
      question: 'Il lume vintage si illumina?',
      answer: 'Il lume vintage moderno (beige/caldo) si illumina ma è volutamente più spento per imitare il radio invecchiato. Il compromesso è l\'autenticità estetica a scapito della luminosità massima.',
    },
    {
      question: 'Quanto dura il lume?',
      answer: 'Dopo una carica completa sotto luce intensa, il Super-LumiNova di qualità brilla visibilmente per 6–12 ore. Il periodo più luminoso sono i primi 30 minuti.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona un tipo di lume',
      text: 'Scegli tra i preset C1, C3, BGW9, LumiNova, Vintage, Arancione, Blu o Verde.',
    },
    {
      name: 'Regola la luminosità',
      text: 'Trascina il controllo della luminosità ambientale dal giorno (sinistra) alla notte (destra) per vedere come si comporta il lume.',
    },
    {
      name: 'Leggi le specifiche',
      text: 'La scheda informativa mostra i valori HEX e RGB esatti del colore corrente.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quale lume è il più luminoso?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Il C3 Super-LumiNova è il verde più brillante. Il BGW9 è il bianco-blu più brillante.' },
        },
        {
          '@type': 'Question',
          'name': 'Cos\'è il lume BGW9?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Il BGW9 è una variante del Super-LumiNova che brilla in bianco-blu invece che verde.' },
        },
        {
          '@type': 'Question',
          'name': 'Il lume vintage si illumina?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Il lume vintage moderno si illumina ma è volutamente più spento per imitare il radio invecchiato.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come simulare i colori del lume',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona un tipo di lume',
          'text': 'Scegli tra i preset C1, C3, BGW9, LumiNova o altri.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Regola la luminosità',
          'text': 'Trascina la luminosità dal giorno alla notte per vedere il comportamento del lume.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi le specifiche',
          'text': 'La scheda informativa mostra i valori HEX e RGB del colore corrente.',
        },
      ],
    },
  ],
};


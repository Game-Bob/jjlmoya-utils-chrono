import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'visualizzatore-fase-lunare',
  title: 'Moon Phase Visualizer — Calendario Lunare e Impostazione Complicazione Orologio',
  description: 'Visualizza la fase lunare corrente, illuminazione, età e le prossime lune piene e nuove. Perfetto per regolare la complicazione della fase lunare del tuo orologio.',
  ui: {
    title: 'Moon Phase Visualizer',
    selectDate: 'Seleziona Data',
    today: 'Oggi',
    moonPhase: 'Fase Lunare',
    illumination: 'Illuminazione',
    moonAge: 'Età Lunare',
    daysUntilFull: 'Giorni alla Luna Piena',
    daysUntilNew: 'Giorni alla Luna Nuova',
    newMoon: 'Luna Nuova',
    waxingCrescent: 'Luna Crescente',
    firstQuarter: 'Primo Quarto',
    waxingGibbous: 'Gibbosa Crescente',
    fullMoon: 'Luna Piena',
    waningGibbous: 'Gibbosa Calante',
    lastQuarter: 'Ultimo Quarto',
    waningCrescent: 'Luna Calante',
    nextFullMoon: 'Prossima Luna Piena',
    nextNewMoon: 'Prossima Luna Nuova',
    tipTitle: 'Consiglio',
    tipContent: 'Per impostare un orologio con fase lunare, trova prima la fase di oggi con questo strumento, poi avanza la corona finché il disco lunare non corrisponde. La maggior parte delle fasi lunari meccaniche è precisa entro un giorno ogni 2 anni.',
    days: 'Avanzamento Ciclo',
    day: 'giorno',
  },
  seo: [
    { type: 'title', text: 'Visualizzatore Fase Lunare — Calendario Lunare e Guida Impostazione Orologio', level: 2 },
    { type: 'paragraph', html: 'Il Moon Phase Visualizer mostra la <strong>fase lunare corrente</strong> con un rendering realistico della luna. Consulta <strong>percentuale di illuminazione, età lunare, giorni alla prossima luna piena e alla prossima luna nuova</strong>. Progettato per gli appassionati di orologi che devono impostare con precisione la complicazione della fase lunare — funziona anche come calendario lunare generale per qualsiasi data passata o futura.' },
    { type: 'title', text: 'Glossario delle Fasi Lunari', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Luna Nuova', definition: 'La luna si trova tra la Terra e il sole. Il lato illuminato è rivolto lontano da noi. Illuminazione 0%. Inizio del ciclo lunare.' },
        { term: 'Luna Crescente', definition: 'Illuminazione 1–49%. Un sottile spicchio appare sul lato destro (emisfero nord). La luna si sta muovendo verso il primo quarto.' },
        { term: 'Primo Quarto', definition: 'Illuminazione 50%. Metà della superficie visibile è illuminata. La luna ha completato un quarto del suo ciclo.' },
        { term: 'Gibbosa Crescente', definition: 'Illuminazione 51–99%. Più della metà è illuminata. La luna si avvicina al plenilunio.' },
        { term: 'Luna Piena', definition: 'Illuminazione 100%. L\'intera superficie visibile è illuminata. L\'apice del ciclo lunare.' },
        { term: 'Gibbosa Calante', definition: 'Illuminazione 99–51%. L\'area illuminata inizia a ridursi dal lato destro.' },
        { term: 'Ultimo Quarto', definition: 'Illuminazione 50%. La metà sinistra è illuminata. Tre quarti del ciclo completati.' },
        { term: 'Luna Calante', definition: 'Illuminazione 49–1%. Un sottile spicchio sulla sinistra prima che il ciclo torni alla luna nuova.' },
      ]
    },
    { type: 'title', text: 'Come Impostare un Orologio con Fase Lunare', level: 3 },
    {
      type: 'list', items: [
        'Usa questo strumento per trovare la fase lunare esatta di oggi. Prendi nota del nome della fase e dell\'aspetto visivo.',
        'Sull\'orologio, estrai la corona nella posizione di impostazione della fase lunare (di solito posizione 2 o 3).',
        'Avanza la corona finché il disco lunare non mostra la stessa fase dello strumento. L\'indicatore di luna piena è di solito al centro in alto del disco.',
        'Evita di impostare la fase lunare tra le 21:00 e le 3:00, quando il meccanismo del cambio data è innestato e può danneggiarsi.',
        'La maggior parte degli orologi con fase lunare meccanica usa un ingranaggio a 59 denti che approssima due cicli lunari (59 giorni). Ciò significa che accumulano circa un giorno di errore ogni 2 anni.',
        'Per alta precisione, alcuni orologi (Patek Philippe, A. Lange & Söhne) usano ingranaggi accurati entro un giorno ogni 100+ anni.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Non Impostare Mai Durante il Cambio Data', icon: 'mdi:alert', html: 'Non impostare la fase lunare (o la data) tra le <strong>21:00 e le 3:00</strong> circa. In questa finestra il meccanismo del cambio data è fisicamente innestato con la ruota della data. Forzare la corona può rompere i denti degli ingranaggi. Se devi assolutamente impostare in questo periodo, porta prima le lancette oltre le 3:00, poi imposta la fase lunare.' },
    { type: 'title', text: 'Fase Lunare Meccanica vs Alta Precisione', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Ingranaggio', 'Accumulo Errore', 'Deriva di 1 Giorno Dopo', 'Orologi Esempio'], rows: [
        ['Standard / Base', '59 denti', '~1 giorno ogni 2 anni', '~2,5 anni', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermedio', '135 denti', '~1 giorno ogni 10 anni', '~10 anni', 'Omega, Tudor, IWC, Breitling'],
        ['Alta Precisione', 'Tren d\'ingranaggi', '~1 giorno ogni 100+ anni', '100+ anni', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Leggere il Disco Lunare', html: 'Sulla maggior parte degli orologi con fase lunare, il disco mostra <strong>due lune</strong> opposte tra loro. Ogni luna piena si allinea con l\'apertura centrale in alto. Dopo un ciclo completo (29,5 giorni), la seconda luna prende il suo posto. Ecco perché funziona un ingranaggio a 59 denti: completa una rotazione intera in 59 giorni — esattamente due cicli lunari.' },
    {
      type: 'summary', title: 'Riferimento Rapido', items: [
        'Il ciclo lunare (sinodico) è esattamente di 29,53058867 giorni. Lo strumento usa questo valore per la massima precisione.',
        'Otto fasi si ripetono in un ciclo eterno: nuova → crescente → primo quarto → gibbosa crescente → piena → gibbosa calante → ultimo quarto → calante.',
        'Per impostare un orologio con fase lunare: trova la fase di oggi qui, poi abbinala sul disco dell\'orologio.',
        'Non forzare mai la corona tra le 21:00 e le 3:00. Porta prima l\'ora oltre le 3:00.',
        'Le fasi lunari standard a 59 denti perdono circa un giorno ogni 2,5 anni. La correzione richiede di avanzare il disco di uno scatto.',
      ]
    },
  ],
  faq: [
    {
      question: 'Come si imposta la fase lunare su un orologio?',
      answer: 'Trova la fase lunare di oggi con questo strumento. Avanza la corona (di solito posizione 2) finché il disco lunare non mostra la fase corrispondente. Evita di impostare tra le 21:00 e le 3:00 quando il meccanismo della data è innestato.',
    },
    {
      question: 'Quanto sono precisi gli orologi con fase lunare meccanica?',
      answer: 'La maggior parte usa un ingranaggio a 59 denti con una precisione di circa un giorno ogni 2 anni. Gli orologi di alta gamma come Patek Philippe e A. Lange & Söhne raggiungono una precisione entro un giorno ogni 100+ anni.',
    },
    {
      question: 'Qual è la differenza tra mese sinodico e sidereo?',
      answer: 'Il mese sidereo (27,3 giorni) è l\'orbita della luna rispetto alle stelle. Il mese sinodico (29,53 giorni) è il tempo tra fasi identiche ed è ciò che gli orologi con fase lunare tracciano.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona una data',
      text: 'Usa il selettore per scegliere qualsiasi data, passata o futura, e vedere la fase lunare.',
    },
    {
      name: 'Leggi i dati della fase',
      text: 'Le schede mostrano il nome della fase, la percentuale di illuminazione, l\'età lunare e l\'avanzamento del ciclo.',
    },
    {
      name: 'Trova i prossimi eventi',
      text: 'Le date della prossima luna piena e della prossima luna nuova vengono visualizzate automaticamente.',
    },
    {
      name: 'Imposta il tuo orologio',
      text: 'Usa la fase visualizzata per impostare con precisione la complicazione della fase lunare del tuo orologio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come si imposta la fase lunare su un orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Trova la fase lunare di oggi con questo strumento. Avanza la corona finché il disco lunare non mostra la fase corrispondente. Evita di impostare tra le 21:00 e le 3:00.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quanto sono precisi gli orologi con fase lunare meccanica?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La maggior parte usa un ingranaggio a 59 denti con una precisione di circa un giorno ogni 2 anni. Gli orologi di alta gamma raggiungono una precisione entro un giorno ogni 100+ anni.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual è la differenza tra mese sinodico e sidereo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il mese sidereo (27,3 giorni) è l\'orbita della luna rispetto alle stelle. Il mese sinodico (29,53 giorni) è il tempo tra fasi identiche ed è ciò che gli orologi con fase lunare tracciano.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come visualizzare le fasi lunari',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona una data',
          'text': 'Usa il selettore per scegliere qualsiasi data e vedere la fase lunare.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi i dati della fase',
          'text': 'Le schede mostrano il nome della fase, illuminazione, età lunare e avanzamento del ciclo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Imposta il tuo orologio',
          'text': 'Usa la fase visualizzata per impostare la complicazione della fase lunare del tuo orologio.',
        },
      ],
    },
  ],
};


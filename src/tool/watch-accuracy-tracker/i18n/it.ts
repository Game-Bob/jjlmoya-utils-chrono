import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calcolatore-precisione-orologio',
  title: 'Calcolatore di Precisione di Marcia e Scarto dell\'Orologio',
  description: 'Registra e calcola la deviazione giornaliera dei tuoi orologi meccanici o al quarzo per analizzarne la precisione e la costanza.',
  ui: {
    title: 'Precisione dell\'Orologio',
    selectWatch: 'Seleziona o aggiungi un orologio',
    watchPlaceholder: 'es. Seiko SKX007',
    addWatch: 'Aggiungi orologio',
    deleteWatch: 'Elimina orologio',
    addLog: 'Registra nuova misurazione',
    offsetLabel: 'Scarto (secondi)',
    offsetPlaceholder: '0',
    dateLabel: 'Ora della misurazione',
    saveLog: 'Salva registro',
    avgRate: 'Deviazione media giornaliera',
    consistency: 'Stato di precisione',
    totalLogs: 'Misurazioni totali',
    historyTitle: 'Cronologia misurazioni',
    noLogs: 'Ancora nessuna misurazione per questo orologio. Aggiungi almeno due misurazioni per calcolare lo scarto.',
    tableDate: 'Data e ora',
    tableOffset: 'Scarto',
    tableRate: 'Scarto giornaliero',
    tableActions: 'Azioni',
    deleteLog: 'Elimina',
    coscExcellent: 'Cronometro COSC (+4/-6 s/g)',
    excellent: 'Eccellente (da 0 a +5 s/g)',
    good: 'Buono (+/- 10 s/g)',
    needsService: 'Necessita assistenza (> +/- 20 s/g)',
    secondsPerDay: 's/g',
    seconds: 'secondi',
    referenceTime: 'Ora di riferimento',
    watchTime: 'Ora dell\'orologio',
    useCurrentTime: 'Usa ora attuale',
    calculatedRate: 'Deviazione calcolata',
    driftPredictorTitle: 'Calcolatore e Proiezione della Deriva',
    driftPredictorDesc: 'Proietta lo scarto accumulato nel tempo e confrontalo con gli standard di fabbrica.',
    dailyRateInput: 'Scarto giornaliero (secondi/giorno)',
    dailyRatePlaceholder: 'es. +4.5 o -3',
    driftHeading: 'Proiezioni',
    period: 'Periodo',
    accumulatedDrift: 'Deriva proiettata',
    day: '1 Giorno',
    week: '1 Settimana',
    month: '1 Mese',
    months3: '3 Mesi',
    months6: '6 Mesi',
    year: '1 Anno',
    years5: '5 Anni',
    watchStandardTitle: 'Certificazione degli Standard',
    trackerHeading: 'Tracciamento in Tempo Reale',
    driftCalculatorTab: 'Proiezione Deriva',
    trackerTab: 'Registro di Precisione',
    stdRolex: 'Rolex Superlativo',
    stdCosc: 'Cronometro COSC',
    stdMetas: 'Master METAS',
    stdStdMech: 'Meccanico Standard',
    stdQuartz: 'Quarzo Standard',
    stdHaq: 'Quarzo ad Alta Precisione',
    presetRolex: 'Rolex (+2 s/g)',
    presetCosc: 'COSC (+4 s/g)',
    presetStdMech: 'Standard (+15 s/g)',
    presetQuartz: 'Quarzo (+0.5 s/g)',
    statusPass: 'Idoneo',
    statusFail: 'Non idoneo',
    toleranceRolex: '±2 s/g',
    toleranceCosc: '-4 / +6 s/g',
    toleranceMetas: '0 / +5 s/g',
    toleranceStdMech: '±15 s/g',
    toleranceQuartz: '±0.5 s/g',
    toleranceHaq: '±10 s/anno',
  },
  seo: [
    { type: 'title', text: 'Guida Completa sulla Precisione degli Orologi e Regolazione di Marcia', level: 2 },
    { type: 'paragraph', html: 'Gli orologi meccanici sono capolavori di microingegneria, ma a differenza dei modelli al quarzo, risentono di forze fisiche e ambientali che ne alterano lo scarto quotidiano. Monitorare costantemente la deviazione media giornaliera è fondamentale per valutarne la salute e capire quando è necessario un intervento di manutenzione professionale.' },
    { type: 'title', text: 'Perché gli Orologi Meccanici Desviano: Fattori Chiave', level: 2 },
    { type: 'paragraph', html: 'Molteplici fattori influenzano la marcia giornaliera. La gravità agisce sul bilanciere a seconda della posizione di riposo dell\'orologio. Gli sbalzi termici contraggono o dilatano la spirale, alterandone le oscillazioni. Inoltre, lo stato di carica della molla principale influisce sull\'ampiezza: un orologio carico al massimo è più stabile di uno prossimo a scaricarsi.' },
    { type: 'title', text: 'La Deriva Accumulata: Come Piccoli Scarti Diventano Ore', level: 2 },
    { type: 'paragraph', html: 'Un errore di soli +5 secondi al giorno sembra trascurabile, ma è cumulativo. In una settimana equivale a 35 secondi; in un mese sono 2.5 minuti e in un anno supererà i 30 minuti di scarto. Questa deriva evidenzia l\'importanza di misurare regolarmente la precisione di marcia.' },
    { type: 'title', text: 'Come Misurare la Precisione di Marcia Manualmente', level: 2 },
    { type: 'paragraph', html: 'Puoi stimare lo scarto del tuo orologio anche senza un cronocomparatore professionale. Sincronizza l\'orologio con una fonte oraria atòmica (come il segnale UTC). Dopo 24 o 48 ore di utilizzo, controlla e annota la nuova differenza. Dividi questo scarto per i giorni passati per ricavare la marcia media.' },
    { type: 'title', text: 'Sfruttare la Deriva Posizionale per l\'Autoregolazione', level: 2 },
    { type: 'paragraph', html: 'Molti movimenti meccanici possono essere parzialmente autorregolati scegliendo come posizionarli durante il riposo notturno. Ad esempio, lasciando l\'orologio piatto con il quadrante rivolto verso l\'alto può tendere a guadagnare secondi, mentre appoggiarlo sulla corona può portarlo a perderne. Annotando queste tendenze potrai regolare il tuo orologio senza aprirlo.' },
  ],
  faq: [
    {
      question: 'Qual è uno scarto giornaliero normale per un orologio meccanico?',
      answer: 'I movimenti meccanici standard hanno solitamente uno scarto compreso tra +/- 10 e 20 secondi al giorno. I cronometri certificati COSC sono invece regolati per oscillare tra -4 e +6 secondi al giorno, mentre i modelli al quarzo di fascia alta possono raggiungere precisioni superiori a +/- 0.5 secondi al giorno.',
    },
    {
      question: 'Perché la precisione dell\'orologio varia a seconda della posizione?',
      answer: 'La gravità terrestre esercita una forza sul bilanciere e sulla spirale in modo differente se il quadrante è rivolto verso l\'alto, verso il basso o se la corona è poggiata sul fianco. Questa variazione posizionale causa leggere differenze nell\'ampiezza e nella marcia dell\'orologio.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Registrare lo Stato Iniziale',
      text: 'Sincronizza l\'orologio con un orologio atomico di riferimento e annota lo scarto iniziale in secondi.',
    },
    {
      name: 'Indossare e Monitorare',
      text: 'Indossa l\'orologio normalmente o lascialo fermo in una posizione fissa per almeno 12-24 ore.',
    },
    {
      name: 'Registrare lo Stato Finale',
      text: 'Annota di nuovo lo scarto rispetto al tempo di riferimento. Il sistema calcolerà la deviazione media giornaliera.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore di Precisione di Marcia e Scarto dell\'Orologio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual è uno scarto giornaliero normale per un orologio meccanico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'I movimenti meccanici standard hanno solitamente uno scarto compreso tra +/- 10 e 20 secondi al giorno. I cronometri certificati COSC sono invece regolati per oscillare tra -4 e +6 secondi al giorno, mentre i modelli al quarzo di fascia alta possono raggiungere precisioni superiori a +/- 0.5 secondi al giorno.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Perché la precisione dell\'orologio varia a seconda della posizione?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La gravità terrestre esercita una forza sul bilanciere e sulla spirale in modo differente se il quadrante è rivolto verso l\'alto, verso il basso o se la corona è poggiata sul fianco. Questa variazione posizionale causa leggere differenze nell\'ampiezza e nella marcia dell\'orologio.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come Misurare la Precisione di Marcia Manualmente',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Registrare lo Stato Iniziale',
          'text': 'Sincronizza l\'orologio con un orologio atomico di riferimento e annota lo scarto iniziale in secondi.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Indossare e Monitorare',
          'text': 'Indossa l\'orologio normalmente o lascialo fermo in una posizione fissa per almeno 12-24 ore.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Registrare lo Stato Finale',
          'text': 'Annota di nuovo lo scarto rispetto al tempo di riferimento. Il sistema calcolerà la deviazione media giornaliera.'
        }
      ]
    }
  ],
};

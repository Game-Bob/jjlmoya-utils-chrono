import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Perché gli orologi meccanici funzionano più velocemente in alta quota?',
    answer: 'Gli orologi meccanici funzionano più velocemente in alta quota principalmente a causa della ridotta densità dell\'aria. L\'aria più rarefatta crea meno resistenza aerodinamica sul bilanciere, permettendogli di oscillare con un\'ampiezza leggermente maggiore. Questa maggiore ampiezza fa anticipare l\'orologio - tipicamente 2-6 secondi al giorno per ogni 1.000 m di guadagno in altitudine.',
  },
  {
    question: 'L\'altitudine influisce anche sugli orologi al quarzo?',
    answer: 'Gli orologi al quarzo sono minimamente influenzati dall\'altitudine poiché non hanno un bilanciere meccanico oscillante. Tuttavia, cambiamenti estremi di altitudine possono influire sulle prestazioni della batteria. L\'effetto è trascurabile rispetto agli orologi meccanici.',
  },
  {
    question: 'I cambiamenti di altitudine possono danneggiare il mio orologio?',
    answer: 'I cambiamenti di altitudine da soli raramente danneggiano gli orologi meccanici. Tuttavia, la decompressione rapida (come in aereo) può causare problemi di tenuta stagna. Le variazioni normali di altitudine durante i viaggi rientrano nelle tolleranze di progettazione.',
  },
];

const howTo = [
  {
    name: 'Seleziona un\'altitudine',
    text: 'Trascina il cursore dell\'altitudine verso l\'alto o il basso per simulare diverse elevazioni, dal livello del mare a 8.000 m. Osserva come l\'oscillazione del bilanciere e i dati atmosferici cambiano in tempo reale.',
  },
  {
    name: 'Leggi la deviazione',
    text: 'Il display della deviazione di marcia mostra i secondi stimati guadagnati al giorno all\'altitudine selezionata. Il grafico sottostante mostra l\'andamento su tutte le altitudini.',
  },
  {
    name: 'Considera i fattori',
    text: 'Osserva come la densità dell\'aria diminuisce con l\'altitudine mentre la deviazione di marcia aumenta. I dati di temperatura e pressione forniscono contesto per i cambiamenti ambientali.',
  },
];

const title = 'Stimatore di Precisione in Altitudine: Come l\'Elevazione Influisce sul Tuo Orologio Meccanico';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'stimatore-altitudine',
  title,
  description: 'Scopri come l\'altitudine influisce sulla precisione degli orologi meccanici. Regola l\'elevazione dal livello del mare alla vetta e osserva in tempo reale i cambiamenti nell\'oscillazione del bilanciere, deviazione di marcia, densità dell\'aria, pressione e temperatura.',
  ui: {
    title: 'Stimatore di Precisione in Altitudine',
    altitudeLabel: 'Altitudine',
    altitudeUnit: 'm',
    seaLevel: 'Livello del Mare',
    deviationLabel: 'Deviazione di Marcia',
    deviationUnit: 's/g',
    pressureLabel: 'Pressione',
    pressureUnit: 'hPa',
    densityLabel: 'Densità dell\'Aria',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatura',
    temperatureUnit: '°C',
    oscillationLabel: 'Bilanciere',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Marcia',
    atmDataTitle: 'Condizioni Atmosferiche',
    howItWorks: 'Come Funziona',
    howItWorksDesc: 'La minore densità dell\'aria in alta quota riduce la resistenza sul bilanciere, aumentando l\'ampiezza e facendo funzionare l\'orologio più velocemente. Questo strumento stima la deviazione basandosi su modelli atmosferici standard.',
    negligible: 'Trascurabile',
    minor: 'Minore',
    noticeable: 'Notevole',
    significant: 'Significativo',
    severe: 'Grave',
    step1: 'Trascina il cursore per simulare elevazioni dal livello del mare a 8.000 m.',
    step2: 'Guarda l\'animazione del bilanciere e l\'indicatore di deviazione in tempo reale.',
    step3: 'Esamina i dati atmosferici per comprendere i fattori ambientali.',
    tipTitle: 'Consiglio',
    tipContent: 'L\'effetto varia in base al movimento: i movimenti ad alta frequenza (36.000 A/h) sono meno influenzati rispetto ai movimenti vintage a bassa frequenza (18.000 A/h).',
    deviationChart: 'Deviazione vs Altitudine',
    altitudeM: 'Altitudine (m)',
    secondsPerDay: 's/g',
    particleLabel: 'Molecole d\'Aria',
    airDensity: 'Densità dell\'Aria',
  },
  seo: [
    { type: 'title', text: 'Stimatore Interattivo di Precisione in Altitudine per Orologi Meccanici', level: 2 },
    { type: 'paragraph', html: 'Lo <strong>Stimatore di Precisione in Altitudine</strong> è uno strumento interattivo che visualizza come i cambiamenti di elevazione influenzano la precisione degli orologi meccanici. Simulando altitudini dal livello del mare a 8.000 m, puoi vedere la deviazione stimata causata da variazioni di densità, pressione e temperatura.' },
    { type: 'title', text: 'Come l\'Altitudine Influisce sulla Precisione', level: 3 },
    { type: 'paragraph', html: 'A quote più elevate, <strong>la densità dell\'aria diminuisce</strong>, riducendo la resistenza aerodinamica sul bilanciere. Ciò permette al bilanciere di oscillare con maggiore ampiezza, facendo funzionare l\'orologio leggermente più veloce. L\'effetto è tipicamente <strong>da +2 a +6 secondi al giorno</strong> per ogni 1.000 m di elevazione.' },
    { type: 'title', text: 'Deviazione di Marcia a Diverse Altitudini', level: 3 },
    {
      type: 'table', headers: ['Altitudine', 'Densità Aria', 'Pressione', 'Temperatura', 'Dev. Stimata'], rows: [
        ['Liv. Mare (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Base'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/g'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/g'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/g'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/g'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/g'],
      ]
    },
    { type: 'title', text: 'Fattori Ambientali', level: 3 },
    { type: 'paragraph', html: 'Oltre alla densità dell\'aria, altri fattori ambientali in alta quota possono influire sulle prestazioni: la <strong>temperatura</strong> influisce sulla viscosità del lubrificante, i <strong>cambiamenti di pressione</strong> possono compromettere la tenuta. L\'effetto della densità dell\'aria sul bilanciere rimane il fattore dominante.' },
    { type: 'diagnostic', variant: 'info', title: 'Strumento di Simulazione Interattivo', icon: 'mdi:axis-arrow', badge: 'OROLOGERIA', html: 'Questo strumento fornisce valori stimati basati sul modello ISA e osservazioni empiriche. I risultati reali variano in base al calibro, alle condizioni e alle tolleranze di fabbricazione.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

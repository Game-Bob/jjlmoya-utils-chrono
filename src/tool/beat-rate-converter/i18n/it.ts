import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'convertitore-frequenza-battiti',
  title: 'Convertitore di Frequenza di Battiti \u2014 VPH in Hz e s/g',
  description: 'Converti vibrazioni per ora (VPH) in Hertz, tick al secondo e calcola l\u2019impatto giornaliero di un singolo tick perso. Funziona con calibri ETA, Sellita, Miyota, Seiko, Rolex, Omega e Zenith.',
  ui: {
    title: 'Convertitore di Frequenza di Battiti',
    vphLabel: 'Movimento',
    selectMovement: 'Seleziona movimento',
    customMovement: 'Personalizzato',
    customVph: 'Vibrazioni per ora',
    resultsTitle: 'Calcoli',
    frequency: 'Frequenza',
    ticksPerSec: 'Tick al secondo',
    lostTickImpact: 'Se perde 1 tick all\u2019ora',
    lostTickExplainer: 'Un tick perso all\u2019ora significa circa 3 secondi persi al giorno a 28.800 VPH. Frequenze di battito pi\u00f9 basse amplificano l\u2019impatto.',
    step1: 'Seleziona il tuo movimento o inserisci un VPH personalizzato.',
    step2: 'Leggi la frequenza in Hz, i tick al secondo e l\u2019impatto di un tick perso.',
    tipTitle: 'Consiglio',
    tipContent: 'Frequenze di battito pi\u00f9 alte (36.000 VPH) garantiscono una scorrevolezza maggiore della lancetta e migliore precisione, ma anche pi\u00f9 usura sullo scappamento.',
  },
  seo: [
    { type: 'title', text: 'Convertitore di Frequenza di Battiti \u2014 VPH in Hz e secondi al giorno', level: 2 },
    { type: 'paragraph', html: 'Ogni orologio meccanico batte a una frequenza specifica \u2014 il numero di vibrazioni che il suo bilanciere compie in un\u2019ora. Questo numero determina la fluidit\u00e0 della lancetta dei secondi e la precisione dell\u2019orologio. Questo convertitore traduce <strong>VPH in Hz e tick al secondo</strong> e mostra l\u2019impatto reale di un singolo tick perso.' },
    { type: 'title', text: 'Cos\u2019\u00e8 una Frequenza di Battito?', level: 3 },
    { type: 'paragraph', html: 'La frequenza di battito, misurata in vibrazioni per ora (vph), \u00e8 la frequenza alla quale oscilla il bilanciere di un orologio. Una frequenza comune \u00e8 28.800 VPH \u2014 ovvero 4 Hz, o 8 tick al secondo. Frequenze pi\u00f9 alte come 36.000 VPH (5 Hz) producono un movimento pi\u00f9 fluido e possono teoricamente migliorare la precisione riducendo l\u2019effetto degli errori posizionali.' },
    { type: 'title', text: 'Perch\u00e9 un tick perso \u00e8 importante', level: 3 },
    { type: 'paragraph', html: 'Se lo scappamento di un orologio non riesce a fornire un tick a causa di attrito, magnetismo o usura, quel tick perso si traduce direttamente in tempo perso. A 28.800 VPH, un singolo tick mancato all\u2019ora si accumula fino a circa <strong>3 secondi al giorno</strong>. A 18.000 VPH, lo stesso errore costa quasi 5 secondi al giorno. Questo strumento ti aiuta a capire la matematica dietro la regolazione.' },
    { type: 'title', text: 'Frequenze di Battito Comuni', level: 3 },
    { type: 'paragraph', html: 'Gli orologi da tasca vintage e i primi automatici spesso funzionano a 18.000 VPH (2,5 Hz). Molti calibri Seiko e Miyota utilizzano 21.600 VPH (3 Hz). Lo standard moderno \u00e8 28.800 VPH (4 Hz), usato da ETA, Sellita, Rolex e altri. I movimenti ad alta frequenza come lo Zenith El Primero funzionano a 36.000 VPH (5 Hz) per una maggiore precisione.' },
  ],
  faq: [
    {
      question: 'Come si convertono i VPH in Hz?',
      answer: 'Dividi i VPH per 7.200. Un orologio che batte a 28.800 VPH funziona a 4 Hz (28.800 \u00f7 7.200 = 4). La divisione per 7.200 tiene conto del fatto che un\u2019oscillazione completa contiene due vibrazioni e che ci sono 3.600 secondi in un\u2019ora.',
    },
    {
      question: 'Cosa significa una frequenza di battito pi\u00f9 alta per la precisione?',
      answer: 'Frequenze di battito pi\u00f9 alte generalmente consentono una maggiore precisione teorica perch\u00e9 il bilanciere \u00e8 meno influenzato da disturbi posizionali. Tuttavia, creano anche pi\u00f9 attrito e usura sulle pietre di leva e sulla ruota di scappamento, richiedendo una migliore lubrificazione e una manutenzione pi\u00f9 frequente.',
    },
    {
      question: 'Come influisce un tick perso sulla precisione giornaliera?',
      answer: 'Un tick mancato all\u2019ora si traduce in 24 tick persi al giorno. Il tempo perso dipende dalla tua frequenza di battito: dividi 86.400 per il tuo VPH. A 28.800 VPH sono 3 secondi al giorno. A 18.000 VPH sono 4,8 secondi al giorno.',
    },
    {
      question: 'Pu\u00f2 un orologio recuperare un tick perso?',
      answer: 'No. Una volta che un tick viene perso, il tempo \u00e8 permanentemente perso. L\u2019orologio non "recupera". Ecco perch\u00e9 la salute dello scappamento \u2014 pietre pulite, lubrificazione adeguata e corretto errore di battuta \u2014 influisce direttamente sulla marcia giornaliera.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona il tuo calibro',
      text: 'Scegli il tuo movimento dal menu a tendina. Ogni preimpostazione include il VPH corretto per quel calibro.',
    },
    {
      name: 'Leggi i risultati',
      text: 'La scheda mostra la frequenza in Hz, i tick al secondo e l\u2019impatto giornaliero di un singolo tick perso.',
    },
    {
      name: 'Prova un VPH personalizzato',
      text: 'Seleziona "Personalizzato" per inserire qualsiasi valore VPH per movimenti vintage o insoliti.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come si convertono i VPH in Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dividi i VPH per 7.200. Un orologio che batte a 28.800 VPH funziona a 4 Hz. La divisione per 7.200 tiene conto di un\u2019oscillazione contenente due vibrazioni e 3.600 secondi per ora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa significa una frequenza di battito pi\u00f9 alta per la precisione?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Frequenze di battito pi\u00f9 alte consentono una maggiore precisione teorica perch\u00e9 il bilanciere \u00e8 meno influenzato da disturbi posizionali. Tuttavia, creano anche pi\u00f9 attrito e usura.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Come influisce un tick perso sulla precisione giornaliera?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un tick mancato all\u2019ora si traduce in 24 tick persi al giorno. Dividi 86.400 per il tuo VPH per trovare i secondi persi al giorno.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Pu\u00f2 un orologio recuperare un tick perso?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Una volta che un tick viene perso, il tempo \u00e8 permanentemente perso. L\u2019orologio non recupera.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertitore di Frequenza di Battiti',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come convertire VPH in Hz e calcolare l\u2019impatto di un tick perso',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona il tuo calibro',
          'text': 'Scegli il tuo movimento dal menu a tendina. Ogni preimpostazione include il VPH corretto per quel calibro.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi i risultati',
          'text': 'La scheda mostra la frequenza in Hz, i tick al secondo e l\u2019impatto giornaliero di un singolo tick perso.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Prova un VPH personalizzato',
          'text': 'Seleziona Personalizzato per inserire qualsiasi valore VPH per movimenti vintage o insoliti.',
        },
      ],
    },
  ],
};

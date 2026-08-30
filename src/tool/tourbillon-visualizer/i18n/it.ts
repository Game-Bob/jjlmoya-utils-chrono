import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Cos\'è un tourbillon?',
    answer: 'Un tourbillon è una gabbia rotante che contiene lo scappamento (bilanciere, àncora e ruota di scappamento) di un orologio meccanico. Ruota continuamente - tipicamente una volta al minuto - per mediare gli errori posizionali causati dalla gravità, migliorando la precisione.',
  },
  {
    question: 'Qual è la differenza tra un tourbillon classico e uno volante?',
    answer: 'Un tourbillon classico è supportato da un ponte superiore e inferiore, mentre un tourbillon volante è a sbalzo dal basso senza supporto superiore visibile. I tourbillon volanti offrono una visione senza ostacoli dello scappamento rotante e sono considerati esteticamente più impegnativi da costruire.',
  },
  {
    question: 'Un tourbillon migliora effettivamente la precisione?',
    answer: 'Negli orologi da polso moderni, il beneficio in precisione è minimo poiché gli errori posizionali sono già ben compensati. Tuttavia, negli orologi da tasca (per cui Breguet inventò il tourbillon nel 1801), la rotazione costante eliminava le differenze di marcia tra le posizioni verticali. Oggi i tourbillon sono principalmente una dimostrazione di alta arte orologiera.',
  },
];

const howTo = [
  {
    name: 'Cambia tipo di tourbillon',
    text: 'Passa dal tourbillon classico a quello volante per vedere la differenza strutturale. Il tourbillon volante non ha ponte superiore, rivelando la gabbia completa.',
  },
  {
    name: 'Regola la frequenza',
    text: 'Prova diverse frequenze (18k, 28.8k, 36k VPH) per vedere come cambiano la velocità del bilanciere e la rotazione della ruota di scappamento.',
  },
  {
    name: 'Controlla la velocità',
    text: 'Usa i controlli di velocità per rallentare e osservare l\'intricata danza dello scappamento, o accelera per vedere il ciclo completo di rotazione della gabbia.',
  },
];

const title = 'Tourbillon: Arte dello Scappamento Rotante';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualizzatore',
  title,
  description: 'Scopri l\'arte affascinante del tourbillon - una gabbia rotante che ospita lo scappamento. Guarda il bilanciere oscillare, la spirale respirare e la gabbia ruotare in un elegante balletto meccanico.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Tipo',
    typeClassic: 'Classico',
    typeFlying: 'Volante',
    speedLabel: 'Velocità',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausa',
    beatRateLabel: 'Frequenza',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Gabbia',
    showLabelsLabel: 'Etichette',
    step1: 'Passa dal tourbillon classico a quello volante per confrontare la loro architettura.',
    step2: 'Regola la frequenza per vedere come influenza il ritmo dello scappamento.',
    step3: 'Usa i controlli di velocità per osservare la precisa danza meccanica a qualsiasi ritmo.',
    tipTitle: 'Consiglio',
    tipContent: 'Breguet inventò il tourbillon nel 1801. La parola "tourbillon" significa "mulinello" in francese, descrivendo l\'aspetto della gabbia rotante in movimento.',
    balanceLabel: 'Bilanciere',
    escapeLabel: 'Scappamento',
    palletLabel: 'Àncora',
    cageLabel: 'Gabbia',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Arte Animata dello Scappamento', level: 2 },
    { type: 'paragraph', html: 'Il <strong>tourbillon</strong> è una delle complicazioni più affascinanti dell\'alta orologeria. Questo visualizzatore interattivo dà vita allo scappamento rotante con una rappresentazione animata dettagliata del bilanciere, della spirale, dell\'àncora, della ruota di scappamento e dell\'iconica gabbia rotante. Esplora la poesia meccanica del capolavoro di Breguet.' },
    { type: 'title', text: 'Come funziona un tourbillon', level: 3 },
    { type: 'paragraph', html: 'Un tourbillon ospita l\'intero scappamento - <strong>bilanciere, spirale, àncora e ruota di scappamento</strong> - all\'interno di una gabbia rotante. La gabbia completa tipicamente una rotazione al minuto, cambiando continuamente la posizione dello scappamento rispetto alla gravità. Questo media gli errori posizionali, un concetto rivoluzionario quando Abraham-Louis Breguet lo brevettò nel 1801. Il <strong>bilanciere</strong> oscilla alla frequenza dell\'orologio (tipicamente 4 Hz / 28.800 VPH), mentre la <strong>ruota di scappamento</strong> avanza di un dente per battito, creando il caratteristico movimento tick.' },
    { type: 'title', text: 'Tourbillon Classico vs Volante', level: 3 },
    {
      type: 'table', headers: ['Caratteristica', 'Tourbillon Classico', 'Tourbillon Volante'], rows: [
        ['Supporto superiore', 'Ponte visibile', 'Nessuno (a sbalzo)'],
        ['Visibilità', 'Parziale (ponte visibile)', 'Completa (senza ostacoli)'],
        ['Difficoltà', 'Alta', 'Estremamente alta'],
        ['Inventato', '1801 (Breguet)', 'Anni 1920 (Alfred Helwig)'],
        ['Comune in', 'Marchi tradizionali', 'Indipendenti moderni'],
      ]
    },
    { type: 'title', text: 'Confronto Frequenze', level: 3 },
    {
      type: 'table', headers: ['Ritmo (vph)', 'Frequenza', 'Ruota Scapp. giri/min', 'Battiti/s', 'Uso tipico'], rows: [
        ['18.000', '2,5 Hz', '20 giri/min', '5', 'Orologi da tasca vintage'],
        ['28.800', '4 Hz', '32 giri/min', '8', 'Standard moderno (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 giri/min', '10', 'Alta frequenza (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Arte Meccanica in Movimento', icon: 'mdi:rotate-orbit', badge: 'OROLOGERIA', html: 'Questo visualizzatore è un\'interpretazione artistica di uno scappamento tourbillon. La rotazione della gabbia, l\'oscillazione del bilanciere, la respirazione della spirale, il dondolio dell\'àncora e l\'avanzamento della ruota di scappamento sono sincronizzati secondo reali relazioni meccaniche. Usa i controlli per esplorare questo capolavoro di ingegneria micromeccanica.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

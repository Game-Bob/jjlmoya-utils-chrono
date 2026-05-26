import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Che cos\'è un treno di ingranaggi in un orologio?',
    answer: 'Un treno di ingranaggi è una serie di ruote dentate interconnesse che trasmettono la potenza dal bariletto del motore allo scappamento. Ogni coppia di ingranaggi fornisce uno specifico rapporto di riduzione, rallentando il rilascio rapido dell\'energia della molla in impulsi controllati e scanditi nel tempo.',
  },
  {
    question: 'Perché diversi movimenti hanno diversi rapporti di ingranaggio?',
    answer: 'I rapporti di ingranaggio sono determinati dal numero di denti su ogni ruota e pignone. Movimenti con diverse frequenze di battuta (es. 28.800 VPH vs 36.000 VPH) hanno diverse velocità della ruota di scappamento e configurazioni di ingranaggi per mantenere una precisione cronometrica adattandosi alla frequenza del bilanciere.',
  },
  {
    question: 'Qual è la differenza tra una ruota e un pignone?',
    answer: 'In orologeria, una "ruota" è l\'ingranaggio più grande con molti denti che aziona il componente successivo. Un "pignone" è l\'ingranaggio più piccolo (di solito 6-12 denti) che viene azionato. Insieme, una ruota e un pignone formano una coppia di ingranaggi che modifica la velocità di rotazione e la coppia.',
  },
];

const howTo = [
  {
    name: 'Seleziona un movimento',
    text: 'Scegli tra movimenti standard (28.800 VPH), ad alta frequenza (36.000 VPH El Primero) o vintage (18.000 VPH). Ognuno ha rapporti di ingranaggio e frequenze di battuta unici.',
  },
  {
    name: 'Osserva il treno di ingranaggi',
    text: 'Guarda gli ingranaggi animati ruotare a velocità proporzionali. Il bariletto gira lentamente mentre la ruota di scappamento ruota rapidamente. Passa il mouse su un ingranaggio o una scheda dati per informazioni dettagliate.',
  },
  {
    name: 'Regola la velocità',
    text: 'Usa i controlli di velocità per rallentare, accelerare o mettere in pausa l\'animazione. Questo aiuta a visualizzare come ogni ingranaggio contribuisce alla catena di trasmissione della potenza.',
  },
];

const title = 'Esploratore del Treno di Ingranaggi: Diagramma Interattivo di Orologeria';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'esploratoretreningranaggi',
  title,
  description: 'Esplora il cuore meccanico di un orologio con una visualizzazione animata del treno di ingranaggi. Vedi il bariletto, la ruota centrale, la terza ruota, la quarta ruota, la ruota di scappamento, l\'ancora e il bilanciere in movimento.',
  ui: {
    title: 'Esploratore del Treno di Ingranaggi',
    barrelLabel: 'Bariletto',
    centerWheelLabel: 'Ruota Centrale',
    thirdWheelLabel: 'Terza Ruota',
    fourthWheelLabel: 'Quarta Ruota',
    escapeWheelLabel: 'Ruota di Scappamento',
    palletForkLabel: 'Ancora',
    balanceWheelLabel: 'Bilanciere',
    rpmLabel: 'giri/min',
    teethLabel: 'denti',
    gearRatioLabel: 'Rapporto',
    powerFlowLabel: 'Flusso di Potenza',
    movementLabel: 'Movimento',
    speedLabel: 'Velocità',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausa',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Seleziona un calibro di movimento per vedere i suoi rapporti di ingranaggio e frequenza unici.',
    step2: 'Passa il mouse su un ingranaggio o una scheda dati per evidenziare la sua posizione nel flusso di potenza.',
    step3: 'Regola la velocità dell\'animazione per studiare come ogni ruota trasmette la potenza attraverso il treno.',
    tipTitle: 'Consiglio',
    tipContent: 'Il treno di ingranaggi riduce il rapido rilascio di energia della molla in un\'oscillazione controllata. Un bariletto tipico ruota una volta ogni 7-8 ore, mentre la ruota di scappamento gira a 32 giri/min (a 28.800 VPH) — una riduzione di oltre 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Esploratore Interattivo del Treno di Ingranaggi', level: 2 },
    { type: 'paragraph', html: 'Il <strong>treno di ingranaggi</strong> è la spina dorsale meccanica di ogni orologio meccanico. Questo strumento interattivo visualizza come la potenza fluisce dal bariletto attraverso la ruota centrale, la terza ruota, la quarta ruota e la ruota di scappamento fino all\'ancora e al bilanciere. Guarda ogni ingranaggio ruotare alla sua velocità proporzionale e comprendi come i rapporti di ingranaggio determinano la misurazione del tempo.' },
    { type: 'title', text: 'Come funziona un treno di ingranaggi', level: 3 },
    { type: 'paragraph', html: 'Un treno di ingranaggi di un orologio consiste in una serie di <strong>ruote</strong> (grandi ingranaggi) e <strong>pignoni</strong> (piccoli ingranaggi) che trasmettono potenza riducendo la velocità. Il <strong>bariletto</strong> contiene la molla motrice e ruota lentamente, azionando la <strong>ruota centrale</strong> che gira una volta all\'ora (per la lancetta dei minuti). La <strong>terza ruota</strong> e la <strong>quarta ruota</strong> (ruota dei secondi) aumentano ulteriormente la velocità di rotazione. Infine, la <strong>ruota di scappamento</strong> rilascia la potenza in impulsi controllati all\'<strong>ancora</strong>, che blocca e sblocca alternativamente la ruota di scappamento, inviando impulsi al <strong>bilanciere</strong>. Il bilanciere oscilla a una frequenza precisa — tipicamente 4 Hz (28.800 vibrazioni all\'ora) — regolando la marcia dell\'orologio.' },
    { type: 'title', text: 'Rapporti di Ingranaggio e Trasmissione di Potenza', level: 3 },
    {
      type: 'table', headers: ['Componente', 'Denti tipici', 'giri/min (28.800 VPH)', 'Rapporto precedente'], rows: [
        ['Bariletto', '72', '0,002 (1 giro / 8 h)', '-'],
        ['Ruota Centrale', '60', '0,0167 (1 giro / h)', '~7,2:1'],
        ['Terza Ruota', '50', '0,125 (1 giro / 8 min)', '~5:1'],
        ['Quarta Ruota', '60', '1 (1 giro / min)', '6:1'],
        ['Ruota di Scappamento', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Confronto Movimenti', level: 3 },
    {
      type: 'table', headers: ['Movimento', 'Frequenza', 'Bilanciere', 'Ruota Scappamento giri/min', 'Precisione tipica'], rows: [
        ['Vintage (18.000 VPH)', '18.000 bph', '2,5 Hz', '20 giri/min', '±15-30 s/g'],
        ['Standard (28.800 VPH)', '28.800 bph', '4 Hz', '32 giri/min', '±5-15 s/g'],
        ['Alta Frequenza (36.000 VPH)', '36.000 bph', '5 Hz', '40 giri/min', '±3-8 s/g'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Strumento di Apprendimento Interattivo', icon: 'mdi:cog-clockwise', badge: 'OROLOGERIA', html: 'Questo strumento utilizza rapporti di ingranaggio approssimativi rappresentativi dei comuni movimenti a scappamento svizzero. I rapporti reali variano a seconda del calibro. Usa le preimpostazioni di movimento per confrontare come diverse frequenze influenzano la dinamica del treno di ingranaggi.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};


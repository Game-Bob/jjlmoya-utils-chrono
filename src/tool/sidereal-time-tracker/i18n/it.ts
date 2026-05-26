import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Qual è la differenza tra tempo solare e tempo siderale?',
    answer: 'Il tempo solare si basa sulla posizione del Sole rispetto al meridiano locale (richiede 24 ore), mentre il tempo siderale si basa sulla rotazione della Terra rispetto alle stelle di sfondo lontane (richiede 23 ore, 56 minuti, 4,09 secondi).',
  },
  {
    question: 'Perché un giorno siderale è più corto di un giorno solare?',
    answer: 'Mentre la Terra ruota sul suo asse, viaggia anche lungo la sua orbita attorno al Sole. Per rivolgere nuovamente la faccia al Sole, la Terra deve ruotare leggermente più di 360 gradi, il che aggiunge circa 3 minuti e 56 secondi al giorno rispetto a una semplice rotazione allineata alle stelle.',
  },
  {
    question: 'In che modo la longitudine influisce sul tempo siderale locale?',
    answer: 'Il Tempo Siderale Locale viene calcolato aggiungendo la longitudine dell\'osservatore (convertita in ore: 15 gradi all\'ora) al Tempo Siderale Medio di Greenwich (GMST). Ogni grado verso est aggiunge 4 minuti al tuo orologio siderale locale.',
  },
];

const howTo = [
  {
    name: 'Imposta la tua longitudine di riferimento',
    text: 'Regola il cursore sulla tua longitudine locale. Questo allinea la scala siderale di 24 ore al tuo meridiano locale.',
  },
  {
    name: 'Osserva le lancette solari e siderali',
    text: 'Guarda il quadrante: le lancette solari standard mostrano l\'ora UTC sul quadrante interno a 12 ore, mentre la lancetta dorata e le stelle mostrano il tempo siderale sulla scala esterna a 24 ore.',
  },
  {
    name: 'Accelera la velocità celeste',
    text: 'Clicca sui moltiplicatori di velocità 200× o 5000× per vedere la rotazione della sfera stellare e la deriva accumularsi in tempo reale.',
  },
];

const title = 'Tracciatore Astronomico del Tempo Siderale: Orologio del Tempo Siderale Locale';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'tracciatore-tempo-siderale',
  title,
  description: 'Tieni traccia del Tempo Siderale Medio di Greenwich (GMST) e del Tempo Siderale Locale (LST) con un artistico quadrante astronomico a astrolabio e un simulatore di deriva stellare in tempo reale.',
  ui: {
    title: 'Tracciatore del Tempo Siderale',
    longitudeLabel: 'Longitudine dell\'osservatore',
    solarTimeLabel: 'Tempo Universale Coordinato (UTC)',
    siderealTimeLabel: 'Tempo Siderale Locale (LST)',
    differenceLabel: 'Deriva Stellare-Solare',
    utcLabel: 'Data/Ora UTC',
    speedLabel: 'Velocità Celeste',
    speedNormal: '1× (Tempo reale)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Deriva)',
    audioToggleLabel: 'Tick di Campana Cosmica',
    step1: 'Regola la tua longitudine locale per vedere il Tempo Siderale Locale cambiare in tempo reale.',
    step2: 'Attiva il moltiplicatore di velocità per osservare la deriva della lancetta solare e della sfera siderale.',
    step3: 'Attiva le Campane Cosmiche per sentire la differenza tra un tick normale e un passaggio d\'ora astronomico.',
    tipTitle: 'Deriva Astronomica',
    tipContent: 'Poiché la Terra orbita attorno al Sole, gli orologi solari standard restano indietro rispetto al tempo siderale di 3 minuti e 56 secondi al giorno, derivando esattamente di 24 ore nell\'arco di un anno intero.',
    useLocationBtn: 'Usa posizione attuale',
    hemisphereLabel: 'Emisfero Stellare',
    hemisphereNorth: 'Nord (Orsa Maggiore)',
    hemisphereSouth: 'Sud (Croce)',
    longitudeFormatLabel: 'Formato longitudine',
    longitudeFormatDecimal: 'Gradi decimali',
    longitudeFormatDMS: 'Gradi/Minuti',
  },
  seo: [
    { type: 'title', text: 'Cos\'è il tempo siderale?', level: 2 },
    { type: 'paragraph', html: 'Il tempo siderale è un sistema di misurazione del tempo che gli astronomi usano per localizzare oggetti celesti. Un giorno siderale dura circa 23 ore, 56 minuti e 4,09 secondi. È il tempo che impiega la Terra per compiere una rotazione completa sul proprio asse rispetto all\'equinozio di primavera o alle stelle lontane, anziché rispetto al Sole.' },
    { type: 'title', text: 'Giorno Solare vs. Giorno Siderale', level: 3 },
    { type: 'paragraph', html: 'Un giorno solare misura il tempo tra transiti consecutivi del Sole attraverso il meridiano locale. Poiché la Terra percorre circa 1/365 della sua orbita attorno al Sole ogni giorno, deve ruotare leggermente più di 360 gradi per riallinearsi con il Sole. Un giorno siderale è una vera rotazione di 360 gradi rispetto alle stelle, il che lo rende più corto di 3 minuti e 56 secondi.' },
    { type: 'title', text: 'Perché astronomi e orologiai se ne interessano', level: 3 },
    { type: 'paragraph', html: 'Per gli astronomi, una stella è sempre nella stessa posizione nel cielo allo stesso Tempo Siderale. Per tracciare le stelle, i supporti del telescopio devono ruotare esattamente una volta al giorno siderale. I marchi di alta orologeria (come Patek Philippe, Vacheron Constantin e IWC) creano orologi astronomici ultracomplicati con treni di ingranaggi siderali per tracciare il LST direttamente al polso.' },
    { type: 'title', text: 'Tabella di riferimento della deriva stellare vs. solare', level: 3 },
    {
      type: 'table', headers: ['Giorni trascorsi', 'Tempo siderale in anticipo', 'Gradi di spostamento', 'Deriva delle costellazioni'], rows: [
        ['1 giorno', '3m 56s', '0,986°', 'Leggero spostamento verso ovest'],
        ['15 giorni', '59m 0s', '14,79°', 'Mezzo segno zodiacale'],
        ['30 giorni', '1h 58m', '29,58°', 'Un\'intera costellazione zodiacale'],
        ['90 giorni', '5h 54m', '88,74°', 'Un\'intera stagione'],
        ['180 giorni', '11h 48m', '177,48°', 'Costellazioni opposte visibili a mezzanotte'],
        ['365 giorni', '24h 0m', '360,00°', 'Ciclo completo, riallineamento stellare'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Calcolato dall\'Epoca J2000', icon: 'mdi:creation-outline', badge: 'CALCOLO', html: 'Il Tempo Siderale Locale viene calcolato convertendo l\'ora UTC in Data Giuliana (giorni dal -4712), trovando il Tempo Siderale Medio di Greenwich e applicando la tua longitudine (15 gradi all\'ora). Il nostro strumento utilizza il modello lineare IAU J2000 ad alta precisione per il tracciamento in tempo reale.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);

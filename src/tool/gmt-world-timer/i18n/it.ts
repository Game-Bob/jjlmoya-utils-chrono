import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Come capire se un orologio è un vero GMT o un caller GMT?',
    answer: 'Un <strong>vero GMT</strong> (chiamato anche "flyer" GMT) consente di saltare la lancetta delle ore locale in modo indipendente - ideale per chi viaggia spesso e cambia fuso orario frequentemente. Un <strong>caller GMT</strong> regola la lancetta GMT separatamente mentre la lancetta delle ore principale resta ferma, il che è più economico da produrre. Per distinguerli: tira la corona in posizione di regolazione dell\'ora e ruotala. Se la lancetta delle ore salta con incrementi di un\'ora senza fermarsi, è un vero GMT. Se invece si muove la lancetta GMT, è un caller. Rolex utilizza un calibro vero GMT (3285) nel GMT-Master II, mentre molti microbrand accessibili usano movimenti caller come il Seiko NH34.',
  },
  {
    question: 'Qual è la differenza tra un orologio GMT e un World Timer?',
    answer: 'Un <strong>orologio GMT</strong> di solito tiene traccia di due fusi orari - l\'ora locale e un riferimento (di solito UTC) - usando una lancetta delle 24 ore e una lunetta 24 ore. Un <strong>World Timer</strong> mostra tutti e 24 i fusi orari contemporaneamente: ha un anello delle città intorno al quadrante e un disco delle 24 ore che ruota. World Timer come il Patek Philippe 5230P o il JLC Geophysic Universal Time ti permettono di leggere l\'ora in qualsiasi città all\'istante. I GMT sono più semplici e più accessibili; i World Timer sono meccanicamente più complessi e tipicamente più costosi. Questo strumento funziona come un World Timer digitale, permettendoti di aggiungere tutte le città che desideri.',
  },
  {
    question: 'Quale fuso orario mostra il mio orologio quando dice "GMT"?',
    answer: 'Quando un orologio riporta "GMT" sul quadrante, la <strong>lancetta GMT</strong> (di solito una quarta lancetta con una punta a freccia colorata) indica l\'ora in formato 24 ore. La maggior parte dei proprietari imposta questa lancetta su UTC (Tempo Universale Coordinato) perché tutti i fusi orari sono definiti come scostamenti da UTC. La lunetta girevole 24 ore può quindi essere allineata per leggere qualsiasi altro fuso orario. Per esempio, se la lancetta GMT punta alle 14 (2 PM) e i riferimenti della lunetta la allineano a UTC+2, stai leggendo l\'Ora dell\'Europa Orientale. Questo strumento ti aiuta a visualizzare esattamente quella relazione.',
  },
];

const howTo = [
  {
    name: 'Aggiungi qualsiasi città al tuo cruscotto',
    text: 'Digita il nome di una città o un fuso orario nella barra di ricerca. Clicca su un risultato per aggiungerlo all\'istante. Ogni città appare come una scheda orologio in diretta con l\'ora locale corrente.',
  },
  {
    name: 'Rimuovi le città quando non ti servono',
    text: 'Passa il mouse su una scheda orologio e clicca il pulsante × per rimuoverla. La tua selezione viene salvata automaticamente nel browser - chiudi e torna più tardi e il tuo cruscotto è esattamente come lo hai lasciato.',
  },
  {
    name: 'Usalo come riferimento GMT per la tua collezione di orologi',
    text: 'Imposta la tua città di riferimento e aggiungi i fusi orari che segui con i tuoi orologi GMT. Usa le etichette di scostamento in diretta per verificare se l\'allineamento della lunetta è corretto per ogni zona tracciata.',
  },
];

const title = 'Orologio Mondiale: Cruscotto con Più Fusi Orari in Diretta';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'orologio-mondiale-gmt',
  title,
  description: 'Tieni traccia di più fusi orari in diretta. Aggiungi qualsiasi città e vedi l\'ora corrente aggiornarsi ogni secondo. Perfetto per gli appassionati di orologi con GMT o World Timer.',
  ui: {
    title: 'Orologio Mondiale',
    searchPlaceholder: 'Cerca città o fuso orario...',
    addLabel: 'Aggiungi',
    removeLabel: 'Rimuovi',
    noResults: 'Nessuna città trovata',
    yourZones: 'I tuoi fusi orari',
  },
  seo: [
    { type: 'title', text: 'Orologio Mondiale - Cruscotto Fusi Orari in Diretta per Appassionati di Orologi', level: 2 },
    { type: 'paragraph', html: 'Che tu possieda un <strong>GMT-Master II</strong>, un <strong>World Timer</strong>, o che tu debba semplicemente tenere traccia di più fusi orari per lavoro o viaggi, questo cruscotto in diretta ti mostra l\'ora corrente in ogni città che ti interessa - tutto a colpo d\'occhio. Aggiungi New York, Londra, Tokyo o qualsiasi altra città, e l\'ora si aggiorna ogni secondo. I tuoi fusi vengono salvati nel browser così non devi mai riconfigurare.' },
    { type: 'title', text: 'Perché gli appassionati di orologi hanno bisogno di un orologio mondiale', level: 3 },
    { type: 'paragraph', html: 'Se collezioni <strong>orologi GMT</strong>, conosci la difficoltà: imposti la lunetta per tracciare un secondo fuso, ma gli scostamenti cambiano con l\'ora legale, o semplicemente possiedi più GMT e vuoi confrontare come ciascuno segue una città diversa. Questo strumento risolve il problema. Aggiungi le città che i tuoi orologi tracciano e vedi immediatamente il loro scostamento e l\'ora corrente. Niente più calcoli mentali - basta guardare la scheda e sapere esattamente dove dovrebbe puntare la tua lancetta GMT.' },
    { type: 'title', text: 'GMT vs World Timer - Quale si adatta al tuo stile?', level: 3 },
    { type: 'paragraph', html: 'Un <strong>orologio GMT</strong> (come il Rolex GMT-Master II "Pepsi" o Tudor Black Bay Pro) usa una lancetta 24 ore e una lunetta girevole per tracciare due fusi orari. Un <strong>World Timer</strong> (come il Nomos Zürich Weltzeit o Omega Seamaster Worldtimer) mostra tutti i 24 fusi orari contemporaneamente usando un anello delle città e un disco 24 ore. Questo cruscotto imita un World Timer: puoi vedere tutte le città in una volta. Usalo per decidere quale complicazione si adatta al tuo stile di vita prima dell\'acquisto.' },
    { type: 'title', text: 'Usi pratici oltre il collezionismo di orologi', level: 3 },
    {
      type: 'list', items: [
        'Lavoratori da remoto che pianificano riunioni tra fusi orari senza confusione',
        'Viaggiatori frequenti che tengono d\'occhio casa e destinazione simultaneamente',
        'Trader che seguono le aperture dei mercati a New York, Londra, Tokyo e Sydney',
        'Chiunque voglia sapere "che ora è a..." senza dover cercare su Google',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Orologio Mondiale in Diretta', icon: 'mdi:clock-time-eight', badge: 'ORA', html: 'Le ore si aggiornano in diretta ogni secondo usando il database dei fusi orari integrato del browser. I cambi dell\'ora legale vengono gestiti automaticamente. Nessun dato viene inviato a server esterni.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

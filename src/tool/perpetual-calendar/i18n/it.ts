import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Che cos\'è un calendario perpetuo in un orologio?',
    answer: 'Un calendario perpetuo è una complicazione orologiera meccanica che mostra automaticamente la data, il giorno, il mese e la fase lunare corretti, tenendo conto dei mesi di diversa lunghezza e degli anni bisestili. È programmato per essere preciso fino all\'anno 2100 (il prossimo anno secolare non divisibile per 400).',
  },
  {
    question: 'Come fa un calendario perpetuo a conoscere gli anni bisestili?',
    answer: 'Il programma meccanico utilizza un ingranaggio di 48 mesi (4 anni) con una camma appositamente progettata che tiene conto del 29 febbraio. Il meccanismo sa che gli anni divisibili per 100 non sono bisestili a meno che non siano anche divisibili per 400. La maggior parte dei calendari perpetui sono precisi fino al 2100, quando richiederanno una correzione di un giorno.',
  },
  {
    question: 'Qual è la differenza tra un calendario perpetuo e un calendario annuale?',
    answer: 'Un calendario annuale richiede una correzione manuale all\'anno (alla fine di febbraio), mentre un calendario perpetuo gestisce automaticamente gli anni bisestili e continua correttamente per decenni. I calendari perpetui sono meccanicamente molto più complessi.',
  },
];

const howTo = [
  {
    name: 'Avanzare la data',
    text: 'Usa i pulsanti G (giorno), M (mese) e A (anno) per avanzare il calendario. Osserva la lancetta della data muoversi e la finestra del mese cambiare.',
  },
  {
    name: 'Osservare le transizioni bisestili',
    text: 'Avanza attraverso febbraio di un anno bisestile (es. 2024) per vedere il salto dal 29 al 1 marzo. Prova con un anno non bisestile per vedere il salto dal 28 al 1 marzo.',
  },
  {
    name: 'Usare la riproduzione automatica',
    text: 'Premi play per far avanzare automaticamente il calendario. Questo rivela l\'intero ciclo delle lunghezze dei mesi e la progressione della fase lunare.',
  },
];

const title = 'Simulatore di Calendario Perpetuo: Complicazione Orologiera Interattiva';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'calendario-perpetuo-italiano',
  title,
  description: 'Esplora il genio meccanico di una complicazione calendario perpetuo. Visualizza data, giorno, mese, ciclo degli anni bisestili e fase lunare con un quadrante animato.',
  ui: {
    title: 'Simulatore di Calendario Perpetuo',
    dateLabel: 'Data',
    dayLabel: 'Giorno',
    monthLabel: 'Mese',
    yearLabel: 'Anno',
    leapYearLabel: 'Bisestile',
    moonPhaseLabel: 'Fase Lunare',
    weekdayLabel: 'Settimana',
    advanceDay: 'Avanti Giorno',
    advanceMonth: 'Avanti Mese',
    advanceYear: 'Avanti Anno',
    autoPlay: 'Auto',
    resetBtn: 'Oggi',
    dayNames: 'Domenica,Lunedì,Martedì,Mercoledì,Giovedì,Venerdì,Sabato',
    monthNames: 'Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre',
    tipTitle: 'Consiglio',
    tipContent: 'La maggior parte degli orologi con calendario perpetuo utilizza una ruota programma di 48 mesi con tacche di lunghezza variabile. Febbraio ha la tacca più corta (28 giorni negli anni comuni, 29 nei bisestili), mentre i mesi di 30 e 31 giorni hanno tacche progressivamente più lunghe.',
    step1: 'Avanza giorno per giorno oltre febbraio per vedere come il meccanismo gestisce le transizioni di fine mese.',
    step2: 'Osserva l\'indicatore di fase lunare progredire attraverso il suo ciclo di 29,5 giorni.',
    step3: 'Confronta le transizioni di febbraio tra anni bisestili e comuni per comprendere il ciclo di 4 anni.',
  },
  seo: [
    { type: 'title', text: 'Simulatore di Calendario Perpetuo: Complicazione Interattiva', level: 2 },
    { type: 'paragraph', html: 'Il <strong>calendario perpetuo</strong> è una delle complicazioni più prestigiose dell\'alta orologeria. Questo simulatore interattivo visualizza come un calendario perpetuo meccanico tiene traccia di data, giorno, mese, anno bisestile e fase lunare - senza correzione manuale per decenni. Esplora il programma ad ingranaggio di 48 mesi, vedi come funzionano le transizioni di febbraio e comprendi la logica del calendario gregoriano incorporata in questi capolavori di micromeccanica.' },
    { type: 'title', text: 'Come funziona un calendario perpetuo', level: 3 },
    { type: 'paragraph', html: 'Un calendario perpetuo meccanico utilizza una <strong>ruota programma</strong> con tacche di diverse profondità che rappresentano i mesi di diversa lunghezza. Un leva sensore cade in ogni tacca; una tacca più profonda segnala un mese corto (28-29 giorni), attivando il meccanismo per avanzare al 1 del mese successivo dopo il numero corretto di giorni. Un <strong>ingranaggio di 48 mesi</strong> gestisce il ciclo di 4 anni bisestili, con una tacca extra per il 29 febbraio. Il programma sa che gli anni secolari (es. 2100) saltano l\'anno bisestile a meno che non siano divisibili per 400.' },
        { type: 'title', text: 'Riferimento logica calendario', level: 3 },
    {"type":"table","headers":["Mese","Giorni","Profondità intaglio","Azione anno bisestile"],"rows":[["Gennaio","31","Profondo","Normale"],["Febbraio","28 / 29","Più superficiale","Giorno extra ogni 4 anni"],["Marzo","31","Profondo","Normale"],["Aprile","30","Medio","Normale"],["Maggio","31","Profondo","Normale"],["Giugno","30","Medio","Normale"],["Luglio","31","Profondo","Normale"],["Agosto","31","Profondo","Normale"],["Settembre","30","Medio","Normale"],["Ottobre","31","Profondo","Normale"],["Novembre","30","Medio","Normale"],["Dicembre","31","Profondo","Normale"]]},
{ type: 'title', text: 'Confronto: Calendario Perpetuo vs Annuale', level: 3 },
    {
      type: 'table', headers: ['Caratteristica', 'Calendario Annuale', 'Calendario Perpetuo'], rows: [
        ['Richiede regolazione', 'Una volta all\'anno (1 Mar)', 'Una volta per secolo (2100)'],
        ['Gestione bisestili', 'Manuale', 'Automatica (camma 4 anni)'],
        ['Riconoscimento mesi', '30 vs 31 giorni', 'Completo 28/29/30/31'],
        ['Complessità', 'Moderata (~50 pezzi)', 'Molto alta (~200+ pezzi)'],
        ['Fascia di prezzo', '3.000-15.000 €', '20.000-500.000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Simulatore di Calendario Interattivo', icon: 'mdi:calendar-month', badge: 'OROLOGERIA', html: 'Questo strumento simula il meccanismo calendario di un orologio a calendario perpetuo. Il quadrante animato mostra la lancetta della data, la finestra del mese, il subdial del giorno, la fase lunare e l\'indicatore dell\'anno bisestile. Usa i controlli per avanzare attraverso giorni, mesi o anni e osserva la logica meccanica in azione.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'calcolatore-tachimetro',
  title: 'Calcolatore Tachimetro: Velocita dal tempo trascorso',
  description: 'Calcola la velocita dal tempo trascorso usando la formula del tachimetro. Funziona con qualsiasi cronografo dotato di scala tachimetrica sulla lunetta.',
  ui: {
    title: 'Calcolatore Tachimetro',
    timeLabel: 'Tempo Trascorso (secondi)',
    timeHelp: 'Tempo misurato su 1 km o 1 miglio',
    speedResult: 'Velocita',
    bezelReading: 'Lettura Lunetta',
    presetLabel: 'Scenario Predefinito',
    selectPreset: 'Seleziona uno scenario',
    customPreset: 'Personalizzato',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Avvia il cronografo quando l oggetto passa il punto di partenza.',
    exampleStep2: 'Fermalo dopo 1 km. La scala tachimetrica mostra la velocita.',
    tipTitle: 'Consiglio',
    tipContent: 'A 36 secondi la lunetta segna 100. Tempi piu rapidi (durata minore) indicano velocita piu elevate sulla scala tachimetrica.',
  },
  seo: [
    { type: 'title', text: 'Calcolatore Tachimetro: Converti il tempo trascorso in velocita', level: 2 },
    { type: 'paragraph', html: 'Un tachimetro e una scala sulla lunetta o sul quadrante di un orologio che converte il tempo trascorso in velocita. Viene tipicamente usato con un cronografo: avvia il timer quando l oggetto passa un punto di riferimento, fermalo dopo 1 km (o 1 miglio) e leggi la velocita sulla scala. Questo calcolatore esegue il calcolo per te.' },
    { type: 'title', text: 'Come funziona un Tachimetro', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formula', definition: 'Velocita = 3.600 ÷ tempo trascorso in secondi. La costante 3.600 rappresenta i secondi per ora.' },
        { term: 'La Scala', definition: 'Le lunette tachimetriche sono graduate da 60 (alle 3 in punto) fino a 400 o 500 (vicino alle 12 in punto). Velocita piu elevate corrispondono a tempi trascorsi piu brevi.' },
        { term: 'Distanza Base', definition: 'I tachimetri standard sono calibrati per 1 km o 1 miglio. Per altre distanze, dividi la lettura di conseguenza.' },
      ]
    },
    { type: 'title', text: 'Misure Tachimetriche Comuni', level: 3 },
    {
      type: 'table', headers: ['Tempo Trascorso', 'Velocita', 'Scenario'], rows: [
        ['10 s', '360 km/h', 'Treno ad alta velocita / auto da corsa'],
        ['12 s', '300 km/h', 'Decollo di un jet privato'],
        ['20 s', '180 km/h', 'Auto sportiva in autostrada'],
        ['30 s', '120 km/h', 'Auto su superstrada'],
        ['36 s', '100 km/h', 'Auto in strada (riferimento standard)'],
        ['45 s', '80 km/h', 'Auto su strada urbana'],
        ['60 s', '60 km/h', 'Guida in citta'],
        ['90 s', '40 km/h', 'Ciclismo'],
        ['120 s', '30 km/h', 'Jogging'],
        ['240 s', '15 km/h', 'Corsa'],
        ['480 s', '7.5 km/h', 'Camminata'],
      ]
    },
    { type: 'title', text: 'Oltre la Scala Standard', level: 3 },
    { type: 'paragraph', html: 'Se la tua lunetta tachimetrica arriva solo fino a 400 ma il tuo tempo trascorso e inferiore a 9 secondi, puoi comunque usarla. Usa semplicemente una distanza base piu lunga. Ad esempio, se percorri 2 km in 18 secondi, dimezza la lettura della lunetta. Al contrario, per velocita basse (oltre 60 secondi), usa una distanza base piu corta (es. 0.5 km) e moltiplica per 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Compatibilita del Tachimetro', icon: 'mdi:information', badge: 'NOTA', html: 'Non tutti i cronografi hanno una lunetta tachimetrica. Alcuni orologi posizionano la scala tachimetrica sul rehaut del quadrante o sull anello esterno. Gli orologi digitali possono includere una funzione tachimetrica nella modalita cronografo. La formula funziona sempre indipendentemente dalla scala fisica.' },
  ],
  faq: [
    {
      question: 'Come si usa una lunetta tachimetrica sul mio orologio?',
      answer: 'Avvia il cronografo in un punto di riferimento (es. un cartello stradale). Fermalo dopo esattamente 1 km (o 1 miglio). La lancetta dei secondi punta alla velocita sulla scala della lunetta. Per esempio, se ci sono voluti 36 secondi per percorrere 1 km, la lancetta punta a 100, ovvero 100 km/h.',
    },
    {
      question: 'Cosa succede se il mio tempo trascorso e piu veloce di quanto la lunetta possa leggere?',
      answer: 'Alcuni tachimetri arrivano solo fino a 400 o 500. Se percorri 1 km in meno di 9 secondi, usa una distanza base piu lunga. Percorri 2 km e dividi la lettura della lunetta per 2, o percorri 3 km e dividi per 3.',
    },
    {
      question: 'Cosa succede se il mio tempo trascorso e piu lento di quanto la lunetta possa leggere?',
      answer: 'Usa una distanza base piu corta. Per esempio, se ci vogliono 90 secondi per percorrere 1 km, percorri 0.5 km invece. Leggi la lunetta e moltiplica per 2. La scala tachimetrica standard copre tempi da circa 7 a 60 secondi.',
    },
    {
      question: 'Posso usare un tachimetro per qualcosa di diverso dalla velocita?',
      answer: 'Si. Il tachimetro misura qualsiasi tasso orario. Per esempio, misura quanto tempo impieghi per completare un compito e la scala mostra quanti ne puoi fare all ora. Nella produzione, un compito di 30 secondi significa 120 unita all ora.',
    },
    {
      question: 'Tutti i tachimetri usano la stessa scala?',
      answer: 'La maggior parte usa la scala logaritmica standard basata sulla formula 3.600 ÷ secondi. Tuttavia, alcuni orologi vintage o marche possono avere variazioni. La scala fisica puo anche essere limitata dalla minuteria e dalle marcature della lunetta.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona uno scenario o inserisci un tempo personalizzato',
      text: 'Scegli tra opzioni predefinite come Auto, Ciclismo o Corsa, oppure seleziona Personalizzato per inserire qualsiasi tempo trascorso in secondi.',
    },
    {
      name: 'Leggi il risultato della velocita',
      text: 'Il calcolatore mostra la velocita in km/h e la lettura equivalente sulla lunetta tachimetrica.',
    },
    {
      name: 'Applica al tuo cronografo',
      text: 'Usa il tempo trascorso per trovare la velocita corrispondente sulla lunetta tachimetrica del tuo orologio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Come si usa una lunetta tachimetrica sul mio orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Avvia il cronografo in un punto di riferimento. Fermalo dopo esattamente 1 km. La lancetta dei secondi punta alla velocita sulla scala della lunetta. Per esempio, 36 secondi = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede se il mio tempo trascorso e piu veloce di quanto la lunetta possa leggere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa una distanza base piu lunga. Percorri 2 km e dividi la lettura della lunetta per 2, o percorri 3 km e dividi per 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede se il mio tempo trascorso e piu lento di quanto la lunetta possa leggere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa una distanza base piu corta. Percorri 0.5 km invece. Leggi la lunetta e moltiplica per 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usare un tachimetro per qualcosa di diverso dalla velocita?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Si. Il tachimetro misura qualsiasi tasso orario. Misura quanto tempo impieghi per completare un compito e la scala mostra quanti ne puoi fare all ora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Tutti i tachimetri usano la stessa scala?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La maggior parte usa la scala logaritmica standard basata sulla formula 3.600 ÷ secondi. Alcuni orologi vintage possono avere variazioni.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore Tachimetro',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come calcolare la velocita usando un tachimetro',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona uno scenario o tempo personalizzato',
          'text': 'Scegli tra opzioni predefinite come Auto, Ciclismo o Corsa, oppure seleziona Personalizzato per inserire qualsiasi tempo trascorso in secondi.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi il risultato della velocita',
          'text': 'Il calcolatore mostra la velocita in km/h e la lettura equivalente sulla lunetta tachimetrica.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Applica al tuo cronografo',
          'text': 'Usa il tempo trascorso per trovare la velocita corrispondente sulla lunetta tachimetrica del tuo orologio.',
        },
      ],
    },
  ],
};

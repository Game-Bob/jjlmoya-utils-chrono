import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'guida-riferimento-corona',
  title: 'Guida di Riferimento alla Corona dell\'Orologio',
  description: 'Guida interattiva alle posizioni della corona, direzioni di carica e funzioni di regolazione per movimenti popolari.',
  ui: {
    title: 'Impostazioni Corona',
    movementLabel: 'Movimento',
    selectMovement: 'Seleziona movimento',
    customMovement: 'Personalizzato',
    positionLabel: 'Posizione',
    unscrewFirst: 'Svitare prima la corona',
    windingLabel: 'Carica',
    hackLabel: 'Stop al secondi',
    dangerZoneLabel: 'Evitare 21\u20133',
    directionCW: 'Orario',
    directionCCW: 'Antiorario',
    directionBoth: 'Bidirezionale',
    pullHint: 'Tirare la corona',
    clickPosition: 'Clicca una posizione',
    position0Title: 'Riposo',
    position0Desc: 'Corona premuta verso l\'interno. L\'orologio funziona normalmente.',
    position0Detail: 'Nessuna funzione di carica o regolazione attivata.',
    position1Title: 'Carica Manuale',
    position1Desc: 'Ruotare la corona in senso orario per caricare la molla principale. Si avvertirà una resistenza crescente man mano che la molla si tende.',
    position1Detail: 'Circa 30\u201340 rotazioni complete da fermo. I rotori automatici caricano anche durante l\'uso.',
    position2Title: 'Regolazione Rapida della Data',
    position2Desc: 'Ruotare la corona in senso orario per avanzare la data. La lancetta delle ore rimane sincronizzata con i secondi.',
    position2Detail: 'EVITARE la regolazione rapida della data tra le 21:00 e le 3:00 mentre il meccanismo di cambio data è inserito.',
    position3Title: 'Regolazione dell\'Ora',
    position3Desc: 'Ruotare la corona in entrambe le direzioni per muovere le lancette. La lancetta dei secondi si ferma (stop al secondi) per una sincronizzazione precisa.',
    position3Detail: 'Tirare in posizione 3, attendere che i secondi raggiungano 12, poi tirare completamente. Ruotare per impostare l\'ora e ripremere verso l\'interno.',
    screwDownHint: 'Ricordarsi di riavvitare la corona per garantire la tenuta stagna.',
    noQuickSet: 'Nessuna regolazione rapida',
    noHack: 'No',
    hasHack: 'Sì',
    crownPositions: 'Posizioni della Corona',
    noteTitle: 'Nota',
  },
  seo: [
    { type: 'title', text: 'Guida alle Posizioni della Corona-Come Caricare, Regolare Data e Ora Correttamente', level: 2 },
    { type: 'paragraph', html: 'La corona è l\'unica interfaccia fisica tra te e il movimento del tuo orologio. Usarla male-caricare al contrario, regolare la data a mezzanotte o tirare troppo forte-può danneggiare il meccanismo. Questa guida analizza ogni posizione della corona per i calibri <strong>ETA, Sellita, Miyota, Seiko e Unitas</strong> in modo che tu non debba mai indovinare.' },
    { type: 'title', text: 'Posizioni della Corona a Colpo d\'Occhio', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Posizione 0 (Riposo)', definition: 'Corona premuta o avvitata. L\'orologio funziona normalmente. Nessuna funzione attivata. Tornare sempre qui dopo la regolazione.' },
        { term: 'Posizione 1 (Carica)', definition: 'Prima estrazione o stato svitato. Ruotare in senso orario per caricare la molla principale. La maggior parte degli automatici carica anche tramite il rotore.' },
        { term: 'Posizione 2 (Regolazione Rapida della Data)', definition: 'Seconda estrazione. Ruotare in senso orario per avanzare la data. Evitare l\'uso tra le 21:00\u20133:00 quando il meccanismo della data è inserito.' },
        { term: 'Posizione 3 (Regolazione dell\'Ora)', definition: 'Terza estrazione. La lancetta dei secondi si ferma per un allineamento preciso. Ruotare liberamente per impostare l\'ora. Presente sulla maggior parte degli automatici moderni.' },
      ]
    },

    { type: 'title', text: 'Confronto dei Movimenti: Funzioni della Corona', level: 3 },
    {
      type: 'table', headers: ['Movimento', 'Posizioni', 'Stop', 'Reg. Rapida', 'Dir. Carica'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['Miyota 8215', '2 (0,1,3)', 'No', 'Nessuna', 'O'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Sì', 'Data (O)', 'O'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'No', 'Nessuna', 'O'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Errori Comuni con la Corona', icon: 'mdi:alert', badge: 'DA NON FARE', html: 'Non regolare mai rapidamente la data tra le <strong>21:00 e le 3:00</strong> mentre la ruota della data è inserita. Questo può rompere i denti e richiedere una revisione completa del movimento. Se devi cambiare la data durante questa finestra, prima porta l\'ora oltre le 3:00, regola la data, poi torna all\'ora corretta.' },

    { type: 'tip', title: 'Corone A Vite', html: 'Gli orologi subacquei e sportivi hanno spesso corone a vite per la tenuta stagna. <strong>Svitare sempre prima di tirare</strong>. Ruotare in senso antiorario finché la corona non scatta, poi tirare alla posizione desiderata. Dopo la regolazione, premere verso l\'interno, quindi ruotare in senso orario esercitando una leggera pressione fino a quando non è salda. <strong>Non stringere eccessivamente.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Corona Standard', icon: 'mdi:crown', description: 'Corona a pressione presente sulla maggior parte degli orologi eleganti e automatici da tutti i giorni. 2\u20134 posizioni. Tenuta stagna tipicamente 30\u2013100 m.', points: ['Accesso immediato, nessuna svitatura', 'Tenuta stagna limitata', 'Comune su ETA, Miyota, Seiko'] },
        { title: 'Corona A Vite', icon: 'mdi:lock', description: 'Corona filettata che si avvita nel tubo della cassa. Standard sugli orologi subacquei e da strumento. Tenuta stagna 200 m+.', points: ['Tenuta stagna superiore', 'Deve essere svitata prima dell\'uso', 'Comune su Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Riferimento Rapido', items: [
        'Caricare sempre in senso orario-la carica inversa aziona la frizione a slittamento ma non carica.',
        'Se il tuo orologio ha una corona a vite, svitala prima di tirare in qualsiasi posizione.',
        'Evita la regolazione rapida della data tra le 21:00 e le 3:00. Porta prima l\'ora oltre le 3:00 se necessario.',
        'I movimenti a carica manuale (es. Unitas 6498) hanno meno posizioni. Caricare completamente prima di regolare l\'ora.',
        'I movimenti senza stop al secondi (es. Miyota 8215) richiedono una tecnica diversa: ruotare oltre il minuto target, poi lentamente indietro.',
      ]
    },
  ],
  faq: [
    {
      question: 'Quante posizioni della corona ha il mio orologio?',
      answer: 'La maggior parte dei movimenti automatici ha 3 posizioni funzionali oltre al riposo: posizione 1 per la carica manuale, posizione 2 per la regolazione rapida della data e posizione 3 per la regolazione dell\'ora con stop al secondi. I movimenti a carica manuale come l\'Unitas 6498 hanno solo 1 posizione funzionale (carica, con regolazione dell\'ora su un\'ulteriore estrazione). Le corone a vite aggiungono un passaggio extra: svitare prima di tirare.',
    },
    {
      question: 'Posso danneggiare l\'orologio caricando al contrario?',
      answer: 'No, ma non serve a nulla. I movimenti moderni utilizzano una frizione a slittamento che si disinnesta quando viene girata al contrario, quindi la carica inversa non causa danni ma non carica nemmeno la molla principale. Caricare sempre in senso orario per la carica manuale. L\'unica eccezione sono alcuni orologi da tasca vintage e i primi movimenti automatici.',
    },
    {
      question: 'Cos\'è la zona di pericolo del cambio data e come evitarla?',
      answer: 'La zona di pericolo è tipicamente tra le 21:00 e le 3:00, quando il meccanismo di cambio data è fisicamente inserito con la ruota della data. La regolazione rapida durante questa finestra può rompere i denti degli ingranaggi. Per impostare la data in sicurezza: porta l\'ora oltre le 3:00, imposta la data al giorno precedente, poi avanza fino alla data e all\'ora corrette.',
    },
    {
      question: 'Perché la lancetta dei secondi non si ferma quando tiro la corona?',
      answer: 'Alcuni movimenti sono privi del meccanismo di stop al secondi. I calibri comuni senza stop includono il Miyota 8215, l\'Unitas 6497/6498 e molti movimenti vintage. Per regolare l\'ora con precisione su un movimento senza stop: ruota la corona di 5\u201310 minuti oltre il minuto target, poi gira lentamente indietro fino a quando la lancetta dei minuti cade esattamente sul segno desiderato.',
    },
    {
      question: 'Quanti giri servono per caricare completamente il mio orologio?',
      answer: 'La maggior parte dei movimenti automatici richiede 30\u201340 rotazioni complete della corona da fermo. I movimenti a carica manuale variano: l\'Unitas 6498 necessita di circa 30\u201335 giri, mentre il Seiko 6R35 con la sua riserva di carica di 70 ore ne richiede 50\u201360. Fermati quando senti una resistenza decisa-forzare oltre può danneggiare la molla principale.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Trova il calibro del tuo movimento',
      text: 'Guarda sul fondello (spesso inciso) o sul movimento stesso attraverso un fondello trasparente. Numeri comuni: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Selezionalo nella guida',
      text: 'Scegli il tuo movimento dal menu a tendina. Il disegno della corona e il pannello si aggiornano per mostrare le tue posizioni esatte, la direzione di carica e le funzioni.',
    },
    {
      name: 'Scorri ogni posizione',
      text: 'Clicca sui chip delle posizioni (0\u20133) o usa il pulsante Tira. Leggi la descrizione e nota l\'avviso della zona di pericolo per la regolazione della data.',
    },
    {
      name: 'Applica al tuo orologio',
      text: 'Con la guida aperta accanto a te, esercitati sul tuo orologio reale. Carica nella direzione corretta, evita la zona di pericolo e riavvita la corona alla fine.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quante posizioni della corona ha il mio orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La maggior parte dei movimenti automatici ha 3 posizioni funzionali oltre al riposo: posizione 1 per la carica manuale, posizione 2 per la regolazione rapida della data e posizione 3 per la regolazione dell\'ora con stop al secondi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso danneggiare l\'orologio caricando al contrario?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. I movimenti moderni utilizzano una frizione a slittamento che si disinnesta quando viene girata al contrario, quindi la carica inversa non causa danni ma non carica nemmeno la molla principale.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cos\'è la zona di pericolo del cambio data?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La zona di pericolo è tipicamente tra le 21:00 e le 3:00. Per impostare la data in sicurezza: porta l\'ora oltre le 3:00, imposta la data al giorno precedente, poi avanza.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Perché la lancetta dei secondi non si ferma quando tiro la corona?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alcuni movimenti sono privi del meccanismo di stop al secondi. I calibri comuni senza stop includono il Miyota 8215 e l\'Unitas 6497/6498. Per regolare l\'ora: ruota oltre il target, poi lentamente indietro.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quanti giri per caricare completamente il mio orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La maggior parte dei movimenti automatici richiede 30\u201340 rotazioni complete della corona. I movimenti a carica manuale variano. Fermati quando senti una resistenza decisa.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Guida di Riferimento alla Corona',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come usare la Guida di Riferimento alla Corona',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Trova il calibro del tuo movimento',
          'text': 'Guarda sul fondello (spesso inciso) o sul movimento stesso attraverso un fondello trasparente. Numeri comuni: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Selezionalo nella guida',
          'text': 'Scegli il tuo movimento dal menu a tendina. Il disegno della corona e il pannello si aggiornano per mostrare le tue posizioni esatte, la direzione di carica e le funzioni.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Scorri ogni posizione',
          'text': 'Clicca sui chip delle posizioni (0\u20133) o usa il pulsante Tira. Leggi la descrizione e nota l\'avviso della zona di pericolo per la regolazione della data.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Applica al tuo orologio',
          'text': 'Con la guida aperta accanto a te, esercitati sul tuo orologio reale. Carica nella direzione corretta, evita la zona di pericolo e riavvita la corona alla fine.',
        },
      ],
    },
  ],
};

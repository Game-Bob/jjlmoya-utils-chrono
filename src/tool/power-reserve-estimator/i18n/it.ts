import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'calcolatore-riserva-carica',
  title: 'Calcolatore Riserva di Carica',
  description: 'Stima la riserva di carica residua del tuo orologio in base ai giri di corona e alle ore di utilizzo. Funziona con i calibri pi\u00f9 diffusi ETA, Sellita, Miyota, Seiko e Rolex.',
  ui: {
    title: 'Calcolatore Riserva di Carica',
    movementLabel: 'Movimento',
    selectMovement: 'Seleziona movimento',
    customMovement: 'Personalizzato',
    turnsLabel: 'Giri di Corona',
    hoursLabel: 'Ore di Utilizzo',
    turnsInput: 'Giri',
    hoursInput: 'Ore',
    activityLabel: 'Attivit\u00e0',
    activityLow: 'Scrivania',
    activityMedium: 'Cammino',
    activityHigh: 'Attivo',
    calculate: 'Calcola',
    reserveRemaining: 'Riserva Residua',
    hoursRemaining: 'Residua',
    chargePercent: 'Carica',
    resultLabel: 'Riserva Stimata',
    stopTimeLabel: 'Funziona fino',
    powerReserveHours: 'Riserva (h)',
    fullWindTurns: 'Giri a carica piena',
    step1: 'Seleziona il tuo movimento dal menu a tendina.',
    step2: 'Inserisci i giri di corona e le ore di utilizzo.',
    step3: 'Premi Calcola per vedere la tua riserva.',
    tipTitle: 'Consiglio',
    tipContent: 'I movimenti a carica manuale si caricano solo quando giri la corona. I movimenti automatici si caricano anche mentre li indossi.',
  },
  seo: [
    { type: 'title', text: 'Calcolatore Riserva di Carica \u2014 Quanta riserva ha ancora il tuo movimento?', level: 2 },
    { type: 'paragraph', html: 'Ti chiedi quanta energia rimane al tuo orologio meccanico? Che tu abbia caricato la corona stamattina o indossato l\u2019orologio tutto il giorno, questo calcolatore ti indica il livello di carica approssimativo e le ore residue per calibri popolari come <strong>ETA, Sellita, Miyota, Seiko e Rolex</strong>.' },
    { type: 'title', text: 'Come funziona la riserva di carica in un orologio meccanico', level: 3 },
    { type: 'paragraph', html: 'La riserva di carica \u00e8 la quantit\u00e0 di energia immagazzinata nella molla motrice. Quando carichi la corona, tendi la molla, immagazzinando energia potenziale. Un rotore automatico tende la molla anche mentre indossi l\u2019orologio. L\u2019energia si scarica a un ritmo costante \u2014 tipicamente 2\u20133% all\u2019ora \u2014 fino a quando l\u2019orologio si ferma.' },
    { type: 'title', text: 'Carica manuale vs. Carica tramite rotore', level: 3 },
    { type: 'paragraph', html: 'La carica manuale tramite corona \u00e8 il metodo pi\u00f9 efficiente per caricare un orologio \u2014 ogni giro completo aggiunge una quantit\u00e0 prevedibile di energia, solitamente circa il 2,5% della riserva totale. Indossare l\u2019orologio carica pi\u00f9 lentamente e dipende dal tuo livello di attivit\u00e0: un impiegato d\u2019ufficio pu\u00f2 caricare il 4\u20136% all\u2019ora, mentre una persona attiva pu\u00f2 arrivare all\u20198\u201310%. Questo calcolatore utilizza una media prudenziale.' },
    { type: 'title', text: 'Perch\u00e9 stimare la riserva di carica \u00e8 importante', level: 3 },
    { type: 'paragraph', html: 'Conoscere il livello di carica del tuo orologio aiuta a evitare arresti imprevisti. Un orologio che si ferma durante la notte potrebbe aver bisogno di pi\u00f9 carica prima di andare a letto, o potrebbe non essere indossato abbastanza. Usa questo strumento per capire le tue abitudini di carica e mantenere il tuo automatico in funzione.' },
  ],
  faq: [
    {
      question: 'Quanto carica un giro di corona l\u2019orologio?',
      answer: 'Dipende dal movimento. La maggior parte dei calibri automatici raggiunge la carica completa in 30\u201340 giri, quindi ogni giro aggiunge circa il 2,5\u20133,3% della riserva totale. I movimenti a carica manuale come l\u2019Unitas 6498 necessitano di circa 35 giri per una carica completa.',
    },
    {
      question: 'Indossare l\u2019orologio lo carica quanto la carica manuale?',
      answer: 'Indossarlo carica pi\u00f9 lentamente e in modo variabile. In un lavoro d\u2019ufficio, puoi caricare il 4\u20136% all\u2019ora tramite il rotore. Durante movimento attivo (camminare, sport), pu\u00f2 raggiungere l\u20198\u201310% all\u2019ora. La carica a mano \u00e8 pi\u00f9 veloce e prevedibile.',
    },
    {
      question: 'Quanta riserva perde un orologio all\u2019ora?',
      answer: 'Il consumo \u00e8 costante: dividi 100 per la riserva di carica in ore. Un movimento da 38 ore perde circa il 2,6% all\u2019ora, uno da 42 ore perde il 2,4% e uno da 70 ore perde circa l\u20191,4% all\u2019ora.',
    },
    {
      question: 'Posso sovraccaricare il mio orologio?',
      answer: 'I movimenti automatici moderni hanno un meccanismo a frizione che impedisce il sovraccarico. Una volta che la molla motrice \u00e8 completamente carica, i giri aggiuntivi slittano semplicemente. Anche i movimenti a carica manuale hanno un arresto, ma forzare oltre il limite pu\u00f2 danneggiare la molla motrice.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona il tuo movimento',
      text: 'Scegli il calibro del tuo orologio dal menu a tendina. Se non \u00e8 elencato, seleziona Personalizzato e inserisci la sua riserva di carica e i giri a carica piena.',
    },
    {
      name: 'Inserisci i dati',
      text: 'Inserisci quanti giri di corona hai effettuato o per quante ore hai indossato l\u2019orologio oggi. Puoi compilare entrambi per una stima combinata.',
    },
    {
      name: 'Calcola',
      text: 'Premi il pulsante Calcola. Il risultato mostra la percentuale di carica stimata e le ore residue di riserva di carica.',
    },
    {
      name: 'Regola le tue abitudini',
      text: 'Usa i risultati per decidere se hai bisogno di pi\u00f9 carica prima di dormire o di pi\u00f9 ore di utilizzo durante il giorno per mantenere l\u2019orologio in funzione.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto carica un giro di corona l\'orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dipende dal movimento. La maggior parte dei calibri automatici raggiunge la carica completa in 30-40 giri, quindi ogni giro aggiunge circa il 2,5-3,3% della riserva totale. I movimenti a carica manuale come l\'Unitas 6498 necessitano di circa 35 giri per una carica completa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Indossare l\'orologio lo carica quanto la carica manuale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Indossarlo carica più lentamente e in modo variabile. In un lavoro d\'ufficio, puoi caricare il 4-6% all\'ora tramite il rotore. Durante movimento attivo può raggiungere l\'8-10% all\'ora. La carica a mano è più veloce e prevedibile.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quanta riserva perde un orologio all\'ora?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il consumo è costante: dividi 100 per la riserva di carica in ore. Un movimento da 38 ore perde circa il 2,6% all\'ora, uno da 42 ore perde il 2,4% e uno da 70 ore perde circa l\'1,4% all\'ora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso sovraccaricare il mio orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'I movimenti automatici moderni hanno un meccanismo a frizione che impedisce il sovraccarico. Una volta che la molla motrice è completamente carica, i giri aggiuntivi slittano semplicemente.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calcolatore Riserva di Carica',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come stimare la riserva di carica del tuo orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona il tuo movimento',
          'text': 'Scegli il calibro del tuo orologio dal menu a tendina. Se non è elencato, seleziona Personalizzato e inserisci la sua riserva di carica e i giri a carica piena.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inserisci i dati',
          'text': 'Inserisci quanti giri di corona hai effettuato o per quante ore hai indossato l\'orologio oggi. Puoi compilare entrambi per una stima combinata.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcola',
          'text': 'Premi il pulsante Calcola. Il risultato mostra la percentuale di carica stimata e le ore residue di riserva di carica.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Regola le tue abitudini',
          'text': 'Usa i risultati per decidere se hai bisogno di più carica prima di dormire o di più ore di utilizzo durante il giorno per mantenere l\'orologio in funzione.',
        },
      ],
    },
  ],
};

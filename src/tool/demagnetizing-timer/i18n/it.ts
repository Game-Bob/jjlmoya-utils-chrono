import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'timer-smagnetizzazione',
  title: 'Timer per Smagnetizzazione Orologi',
  description: 'Un timer countdown preciso con segnali acustici per la smagnetizzazione fai-da-te degli orologi. Ottieni la durata di pressione esatta per la tua bobina smagnetizzante.',
  ui: {
    title: 'Impostazioni Timer',
    durationLabel: 'Durata Impulso',
    duration1s: '1 Secondo',
    duration2s: '2 Secondi',
    duration3s: '3 Secondi',
    customLabel: 'Personalizzato',
    startButton: 'Avvia',
    stopButton: 'Ferma',
    resetButton: 'Reimposta',
    pressPhase: 'Premi il pulsante dello smagnetizzatore ora!',
    holdPhase: 'Tieni premuto...',
    releasePhase: 'Rilascia ora!',
    completePhase: 'Fatto! Allontana l\'orologio.',
    ready: 'Pronto',
    seconds: 's',
    instructions: 'Come Smagnetizzare',
    step1: 'Posiziona l\'orologio sulla piattaforma dello smagnetizzatore.',
    step2: 'Premi Avvia e tieni premuto il pulsante dello smagnetizzatore per la durata impostata.',
    step3: 'Rilascia il pulsante e allontana lentamente l\'orologio.',
    step4: 'Ripeti 2-3 volte se necessario, ruotando l\'orologio ogni volta.',
    tipTitle: 'Consiglio',
    tipContent: 'Tieni l\'orologio ad almeno 1 metro di distanza dallo smagnetizzatore acceso per evitare una nuova magnetizzazione.',
  },
  seo: [
    { type: 'title', text: 'Timer per Smagnetizzazione Orologi-mpismo Preciso per la Smagnetizzazione Fai-da-Té', level: 2 },
    { type: 'paragraph', html: 'Smagnetizzare un orologio richiede un tempismo esatto nella pressione del pulsante. La maggior parte degli smagnetizzatori fai-da-te funziona generando un campo magnetico alternato decrescente, e l\'impulso ideale dura tra <strong>1 e 3 secondi</strong>. Se lo tieni troppo poco, il campo non neutralizza la magnetizzazione; se lo tieni troppo a lungo, rischi di saturare il movimento.' },
    { type: 'title', text: 'Perché il tempismo è importante per la smagnetizzazione', level: 3 },
    { type: 'paragraph', html: 'Quando premi il pulsante dello smagnetizzatore, all\'interno della bobina si crea un campo magnetico alternato. Il campo oscilla alla frequenza di rete (50/60 Hz) e decade quando rilasci. L\'obiettivo è esporre l\'orologio a questo campo decrescente <strong>per il tempo giusto</strong> per randomizzare i domini magnetici dello spirale e degli altri componenti in acciaio. Un impulso da 1 a 3 secondi è il punto ottimale per la maggior parte dei movimenti.' },
    { type: 'title', text: 'Come funziona uno smagnetizzatore', level: 3 },
    { type: 'paragraph', html: 'Uno smagnetizzatore è essenzialmente una bobina di filo che produce un forte campo magnetico alternato quando viene alimentata. Posizionare un orologio magnetizzato in questo campo fa sì che i suoi domini magnetici interni si invertano rapidamente. Quando il campo viene rimosso bruscamente (rilasciando il pulsante), i domini si stabilizzano in uno schema casuale, annullando efficacemente la magnetizzazione netta.' },
    { type: 'title', text: 'Segni che il tuo orologio ha bisogno di smagnetizzazione', level: 3 },
    { type: 'paragraph', html: 'I sintomi comuni di un orologio magnetizzato includono: avanzare di diversi minuti al giorno, cronometraggio incoerente tra le posizioni, un ticchettio udibilmente più veloce e, in casi estremi, l\'arresto completo dell\'orologio. Se il tuo orologio automatico improvvisamente inizia ad accelerare, la magnetizzazione è spesso la causa e la smagnetizzazione è una soluzione semplice.' },
  ],
  faq: [
    {
      question: 'Per quanto tempo devo premere il pulsante dello smagnetizzatore?',
      answer: 'Da 1 a 3 secondi è la durata d\'impulso consigliata. Inizia con 1 secondo e aumenta se necessario. Impulsi eccessivamente lunghi possono surriscaldare la bobina senza migliorare i risultati.',
    },
    {
      question: 'Si può smagnetizzare un orologio più di una volta?',
      answer: 'Sì. Ripeti il processo da 2 a 3 volte, ruotando l\'orologio di 90 gradi ogni volta. Questo garantisce che tutti gli assi siano esposti al campo alternato. Non c\'è rischio di sovra-smagnetizzazione.',
    },
    {
      question: 'La smagnetizzazione funziona sugli orologi al quarzo?',
      answer: 'Gli orologi al quarzo sono raramente influenzati dalla magnetizzazione poiché contengono pochi componenti ferromagnetici. Tuttavia, il motore passo-passo di alcuni movimenti al quarzo può magnetizzarsi, causando un movimento erratico delle lancette. La smagnetizzazione è sicura per gli orologi al quarzo.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Imposta durata',
      text: 'Scegli 1, 2 o 3 secondi in base alla gravità della magnetizzazione.',
    },
    {
      name: 'Posiziona l\'orologio',
      text: 'Metti l\'orologio piatto sulla piattaforma dello smagnetizzatore, centrato sopra la bobina.',
    },
    {
      name: 'Premi e tieni',
      text: 'Premi il pulsante Avvia contemporaneamente al pulsante dello smagnetizzatore e tieni premuto per la durata impostata.',
    },
    {
      name: 'Rilascia e allontana',
      text: 'Rilascia il pulsante e allontana lentamente l\'orologio di almeno 1 metro prima di spegnere lo smagnetizzatore.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Per quanto tempo devo premere il pulsante dello smagnetizzatore?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Da 1 a 3 secondi è la durata d\'impulso consigliata. Inizia con 1 secondo e aumenta se necessario. Impulsi eccessivamente lunghi possono surriscaldare la bobina senza migliorare i risultati.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Si può smagnetizzare un orologio più di una volta?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì. Ripeti il processo da 2 a 3 volte, ruotando l\'orologio di 90 gradi ogni volta. Questo garantisce che tutti gli assi siano esposti al campo alternato. Non c\'è rischio di sovra-smagnetizzazione.',
          },
        },
        {
          '@type': 'Question',
          'name': 'La smagnetizzazione funziona sugli orologi al quarzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gli orologi al quarzo sono raramente influenzati dalla magnetizzazione poiché contengono pochi componenti ferromagnetici. Tuttavia, il motore passo-passo di alcuni movimenti al quarzo può magnetizzarsi, causando un movimento erratico delle lancette. La smagnetizzazione è sicura per gli orologi al quarzo.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Timer per Smagnetizzazione Orologi',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come smagnetizzare un orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Imposta durata',
          'text': 'Scegli 1, 2 o 3 secondi in base alla gravità della magnetizzazione.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Posiziona l\'orologio',
          'text': 'Metti l\'orologio piatto sulla piattaforma dello smagnetizzatore, centrato sopra la bobina.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Premi e tieni',
          'text': 'Premi il pulsante Avvia contemporaneamente al pulsante dello smagnetizzatore e tieni premuto per la durata impostata.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Rilascia e allontana',
          'text': 'Rilascia il pulsante e allontana lentamente l\'orologio di almeno 1 metro prima di spegnere lo smagnetizzatore.',
        },
      ],
    },
  ],
};

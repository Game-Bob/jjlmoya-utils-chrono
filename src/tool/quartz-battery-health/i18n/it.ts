import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'controllo-salute-batteria-quarzo',
  title: 'Controllo Salute Batteria al Quarzo',
  description: 'Calcola la durata teorica della batteria di un movimento al quarzo inserendo la capacità della cella (mAh) e il consumo del calibro (µA). Opzionalmente imposta la data di installazione per stimare la data di sostituzione.',
  ui: {
    title: 'Controllo Salute Batteria al Quarzo',
    batteryLabel: 'Cella Batteria',
    selectBattery: 'Seleziona batteria',
    customBattery: 'Personalizzata',
    capacityLabel: 'Capacità',
    capacityUnit: 'mAh',
    consumptionLabel: 'Consumo',
    consumptionUnit: 'µA',
    installDateLabel: 'Installata il',
    installDateHint: 'Opzionale',
    monthLabel: 'Mese',
    yearLabel: 'Anno',
    calculate: 'Calcola',
    resultLabel: 'Durata Stimata',
    theoreticalLife: 'Durata teorica',
    yearsLabel: 'anni',
    monthsLabel: 'mesi',
    daysLabel: 'giorni',
    changeDateLabel: 'Sostituire entro',
    noDateHint: 'Inserisci la data di installazione per vedere la data di sostituzione',
    healthLabel: 'Stato',
    healthGood: 'Buono',
    healthModerate: 'Moderato',
    healthCritical: 'Critico',
    step1: 'Scegli una batteria comune o seleziona Personalizzata per inserire la capacità.',
    step2: 'Inserisci il consumo del calibro in microampere (µA).',
    step3: 'Opzionalmente aggiungi la data di installazione, poi premi Calcola.',
    tipTitle: 'Consiglio',
    tipContent: 'Usa sempre il valore di consumo dalla scheda tecnica ufficiale del calibro. La durata reale può essere del 10-20 % inferiore a causa delle variazioni di temperatura e carico.',
  },
  seo: [
    { type: 'title', text: 'Controllo Salute Batteria al Quarzo: quanto durerà la batteria del tuo orologio?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Consumo tipico 3 lancette' },
        { value: '18-55 mAh', label: 'Capacità cella comune' },
        { value: '2.5-4.5 yr', label: 'Durata batteria usuale' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Ti stai chiedendo quando il tuo orologio al quarzo smetterà di funzionare? Il <strong>Controllo Salute Batteria al Quarzo</strong> ti aiuta a stimare la durata residua della batteria di qualsiasi movimento al quarzo confrontando la capacità della cella (espressa in mAh) con il consumo medio del movimento (espresso in microampere, µA). Che tu possieda un movimento ETA svizzero, un Miyota giapponese, un Seiko, un Ronda o un DG cinese, questo strumento calcola la durata teorica in anni, mesi e giorni e può persino prevedere la data esatta di sostituzione se inserisci il mese e l\'anno di installazione.' },
    { type: 'title', text: 'Come viene calcolata la durata della batteria al quarzo: la matematica dietro la stima', level: 3 },
    { type: 'paragraph', html: 'La durata della batteria segue una semplice formula elettrica: <strong>Durata (ore) = (Capacità della cella in mAh × 1000) ÷ Consumo in µA</strong>. Dividendo il risultato per 24 si ottengono i giorni, e per 365,25 si ottengono gli anni. Ad esempio, una <strong>SR920SW (371) da 40 mAh</strong> che alimenta un movimento con un consumo di <strong>1,5 µA</strong> durerà teoricamente circa <strong>3 anni</strong>. Riduci il consumo a 1,0 µA e la stessa cella supera i 4,5 anni. Aumentalo a 2,5 µA e la durata della batteria scende a meno di 2 anni. Ogni frazione di microampere conta quando si pianificano gli intervalli di manutenzione.' },
    { type: 'title', text: 'Tipi di batteria per orologi al quarzo più comuni e loro capacità', level: 3 },
    {
      type: 'table',
      headers: ['Riferimento Cella', 'Codice Comune', 'Capacità', 'Utilizzo Tipico'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Orologi sottili da vestito'],
        ['SR626SW', '377', '27 mAh', 'Modelli al quarzo medi'],
        ['SR920SW', '371', '40 mAh', 'Cronografi e multifunzione'],
        ['SR936SW', '394', '55 mAh', 'Grandi ibridi analogico-digitali'],
        ['CR2025', '-', '165 mAh', 'Moduli LED ad alto consumo'],
      ],
    },
    { type: 'tip', title: 'Rispetta la specifica originale', html: 'Scegliere il tipo di cella sbagliato può ridurre la durata della batteria fino al <strong>40 %</strong>. Controlla sempre il numero di riferimento della batteria originale prima di installare una sostituzione. Il codice numerico indica le dimensioni: ad esempio, <strong>SR936SW</strong> ha un diametro di 9,5 mm e uno spessore di 3,6 mm.' },
    { type: 'title', text: 'Perché dovresti usare sempre i valori di consumo ufficiali del calibro', level: 3 },
    { type: 'paragraph', html: 'I produttori di movimenti come <strong>ETA, Ronda, Miyota, Seiko e ISA</strong> pubblicano schede tecniche ufficiali per ogni calibro che producono. Queste schede riportano il <strong>consumo medio di corrente</strong> in condizioni di temperatura controllata (di solito 22 °C) e con un carico di coppia standard delle lancette. Utilizzare un valore presunto di 1,0 µA quando il tuo movimento consuma effettivamente 2,5 µA può sovrastimare la durata della batteria di oltre il 100 %. Scarica sempre il PDF ufficiale dal sito del produttore o consulta il riferimento del calibro su database specializzati per ottenere il valore di consumo reale.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La perdita della batteria può distruggere il movimento dell\'orologio',
      html: 'Una batteria all\'ossido d\'argento esaurita può <strong>perdere idrossido di potassio</strong>, che corrode le molle di contatto, le piste del circuito stampato e persino la bobina del motore passo-passo. Se lo strumento stima meno di <strong>6 mesi di vita residua</strong>, programma un cambio batteria durante il prossimo controllo di routine. Presta particolare attenzione agli <strong>orologi al quarzo vintage degli anni \'70 e \'80</strong>: le loro batterie originali sono molto più soggette a perdite dopo decenni all\'interno della cassa.',
    },
    { type: 'title', text: 'Fattori che riducono la durata reale della batteria rispetto alla stima teorica', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperature estreme</strong> - un orologio lasciato sul cruscotto soleggiato può avere un consumo di corrente superiore del 30 %',
        '<strong>Circuiti di rilevamento fine vita</strong> - l\'indicatore del secondo che salta ogni due secondi consuma energia extra una volta attivato',
        '<strong>Uso del cronografo o della sveglia</strong> - picchi di corrente momentanei che si accumulano nel tempo',
        '<strong>Attrito meccanico</strong> - treni di ingranaggi invecchiati o sporchi aumentano la coppia necessaria al motore passo-passo',
        '<strong>Campi magnetici</strong> - l\'esposizione aumenta i requisiti di coppia del motore, scaricando la cella più velocemente',
      ],
    },
    { type: 'paragraph', html: 'In pratica ci si può aspettare una <strong>durata dal 10 al 20 % inferiore</strong> rispetto al calcolo teorico. Per i movimenti al quarzo termocompensati ad alta precisione il consumo varia meno, ma il quarzo standard è notevolmente sensibile a questi fattori ambientali.' },
    { type: 'title', text: 'Come trovare la batteria di ricambio giusta per il tuo orologio al quarzo', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Ossido d\'Argento)', definition: 'Le celle marcate SR (es. SR920SW) forniscono una tensione stabile di 1,55 V per tutta la loro durata, mantenendo preciso l\'oscillatore al quarzo. È lo standard per gli orologi al quarzo di qualità.' },
        { term: 'LR (Alcalina)', definition: 'Le celle marcate LR (es. LR41) hanno una tensione gradualmente decrescente, che può causare un ritardo o l\'arresto prematuro dell\'orologio. Non raccomandate come sostituto delle celle SR.' },
        { term: 'CR (Litio)', definition: 'Le celle marcate CR (es. CR2025) erogano 3,0 V e vengono utilizzate in moduli ad alto consumo con retroilluminazione LED, display LCD di grandi dimensioni o complicazioni multiple.' },
        { term: 'Codice Numerico', definition: 'Le quattro cifre codificano le dimensioni fisiche: le prime due cifre sono il diametro in millimetri e le ultime due sono lo spessore in decimi di millimetro. SR936SW = Ø9,5 mm × 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Quarzo standard vs solare vs cinetico: come la tecnologia cambia l\'equazione', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Quarzo Standard',
          description: 'Utilizza una cella primaria all\'ossido d\'argento o al litio sostituibile. La durata della batteria dipende esclusivamente dal rapporto tra capacità e consumo. È per questo che è progettato questo calcolatore.',
          highlight: true,
          points: [
            'Cella primaria sostituibile',
            'Durata = capacità ÷ consumo',
            'Programma di sostituzione prevedibile',
            'Cambi batteria economici',
          ],
        },
        {
          title: 'Solare e Cinetico',
          description: 'Gli orologi solari utilizzano celle fotovoltaiche per ricaricare un accumulatore agli ioni di litio. Gli orologi cinetici utilizzano un micro-generatore azionato da un rotore per caricare un condensatore.',
          points: [
            'Accumulo di energia ricaricabile',
            'La durata dipende dai cicli di carica',
            'Degrado del condensatore nel tempo',
            'Non compatibile con questo calcolatore',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Le dichiarazioni dei produttori di una <strong>"durata della batteria di 10 anni"</strong> si basano solitamente su movimenti a consumo molto basso (circa 0,5 - 0,8 µA) abbinati a celle di grande capacità (165 mAh CR2025 o superiori). In un orologio al quarzo analogico standard con una piccola cella all\'ossido d\'argento come la <strong>SR626SW (27 mAh)</strong> e un movimento tipico da 1,5 µA, la durata reale è più vicina a <strong>2,5 - 3 anni</strong>. Verifica sempre con questo calcolatore piuttosto che fidarti delle etichette di marketing.' },
    {
      type: 'tip',
      title: 'Sostituisci in modo proattivo, non reattivo',
      html: 'Quando vedi la lancetta dei secondi saltare a intervalli di <strong>2 o 4 secondi</strong>, il movimento è entrato in modalità di risparmio energetico a causa della bassa tensione. La batteria ha circa <strong>2 - 4 settimane</strong> di vita residua. Sostituiscila immediatamente per evitare danni da perdite.',
    },
    {
      type: 'summary',
      title: 'Punti chiave per la salute della batteria degli orologi al quarzo',
      items: [
        'Usa il valore di consumo ufficiale del calibro dalla scheda tecnica del produttore: un valore presunto può sovrastimare la durata di oltre il 100 %',
        'Abbina esattamente il tipo di cella originale: le chimiche SR, LR e CR non sono intercambiabili',
        'Sostituisci la batteria quando lo strumento mostra meno di 6 mesi di vita residua per prevenire perdite',
        'La durata reale della batteria è tipicamente dal 10 al 20 % inferiore rispetto al valore teorico ideale a causa di temperatura, attrito e utilizzo',
        'Questo calcolatore è progettato per movimenti al quarzo standard con celle primarie sostituibili, non per orologi solari o cinetici',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto è accurata la stima teorica della durata della batteria?',
      answer: 'Il calcolo è un ideale elettrico basato sulla capacità divisa per il consumo. In condizioni reali ci si può aspettare una durata dal 10 al 20 % inferiore a causa delle variazioni di temperatura, dei circuiti di rilevamento fine vita, dell\'attrito meccanico dei lubrificanti invecchiati e del carico extra delle funzioni di cronografo o sveglia. La stima è un limite superiore affidabile, non una previsione esatta.',
    },
    {
      question: 'Dove trovo il valore esatto del consumo per il mio calibro al quarzo?',
      answer: 'Le schede tecniche ufficiali di ETA, Ronda, Miyota, Seiko, ISA e altri produttori di movimenti riportano il consumo medio di corrente in microampere (µA). Cerca il numero di riferimento del calibro seguito da "scheda tecnica" o "specifiche tecniche". Database specializzati come Ranfft, 17jewels e Watch-Wiki pubblicano anche valori di consumo forniti dalla comunità orologiera.',
    },
    {
      question: 'Cosa significa "µA" e perché è importante?',
      answer: 'µA sta per microampere, ovvero un milionesimo di ampere. Misura la corrente elettrica che il movimento assorbe dalla batteria. Un tipico movimento analogico al quarzo a tre lancette consuma tra 1,0 e 2,5 µA. I cronografi e i moduli multifunzione possono consumare da 3,0 a 6,0 µA. Più alta è la corrente, minore è la durata della batteria per una data capacità della cella.',
    },
    {
      question: 'Posso usare questo strumento per orologi solari o cinetici?',
      answer: 'No. Gli orologi solari (Eco-Drive, Solar, Light-Powered) utilizzano celle fotovoltaiche per ricaricare una batteria ricaricabile. Gli orologi cinetici e Auto-Quartz utilizzano un rotore e un micro-generatore per caricare un condensatore. Nessuna delle due tecnologie si basa su una cella primaria monouso, quindi il modello capacità-consumo non si applica. Usa questo calcolatore solo per movimenti al quarzo standard con celle all\'ossido d\'argento, alcaline o al litio sostituibili.',
    },
    {
      question: 'Dovrei sostituire la batteria prima che si esaurisca completamente?',
      answer: 'Sì. Le batterie all\'ossido d\'argento e alcaline possono perdere idrossido di potassio quando sono completamente scariche, danneggiando le molle di contatto, le piste del circuito stampato e la bobina del motore passo-passo. La sostituzione prima della scarica completa è fortemente raccomandata. Se lo strumento mostra meno di 6 mesi di vita stimata residua, programma un cambio batteria appena possibile.',
    },
    {
      question: 'Cosa succede se uso una batteria con capacità superiore o inferiore all\'originale?',
      answer: 'L\'uso di una cella con capacità maggiore (es. SR936SW 55 mAh invece di SR920SW 40 mAh) prolungherà la durata della batteria ma potrebbe non entrare fisicamente: la cella deve corrispondere esattamente al diametro e allo spessore originali per mantenere una corretta pressione delle molle di contatto. L\'uso di una cella con capacità inferiore accorcia la durata della batteria e può causare un contatto intermittente se la cella è sottodimensionata. Sostituisci sempre con lo stesso numero di riferimento esatto o un equivalente documentato della stessa famiglia dimensionale.',
    },
    {
      question: 'Come faccio a sapere se la batteria del mio orologio è all\'ossido d\'argento o alcalina?',
      answer: 'Le celle all\'ossido d\'argento sono marcate SR (es. SR920SW) e forniscono una tensione stabile di 1,55 V per tutta la loro durata, mantenendo preciso l\'oscillatore al quarzo. Le celle alcaline sono marcate LR (es. LR41) e hanno una tensione gradualmente decrescente, che può causare un ritardo o l\'arresto prematuro dell\'orologio. La maggior parte dei produttori di orologi di qualità specifica l\'ossido d\'argento. Se il tuo orologio utilizzava originariamente SR, sostituisci sempre con SR, non con LR.',
    },
    {
      question: 'La lancetta dei secondi che salta ogni due secondi significa che la batteria si sta esaurendo?',
      answer: 'Sì. Quando il movimento al quarzo rileva che la tensione della batteria è troppo bassa per azionare in modo affidabile il motore passo-passo, entra in una modalità di risparmio energetico in cui la lancetta dei secondi salta a intervalli di 2 o 4 secondi. Questo è l\'indicatore di fine vita. Quando vedi questo comportamento, la batteria ha circa 2 - 4 settimane di vita residua e dovrebbe essere sostituita immediatamente per evitare perdite.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleziona o personalizza la cella batteria',
      text: 'Scegli una cella comune all\'ossido d\'argento dal menu a tendina: SR621SW, SR626SW, SR920SW, SR936SW e altre sono precaricate con le loro capacità ufficiali. Se la tua cella non è elencata, seleziona Personalizzata e inserisci la sua capacità esatta in mAh come stampato sull\'etichetta della batteria o riportato nella scheda tecnica del produttore.',
    },
    {
      name: 'Inserisci il consumo del movimento',
      text: 'Trova il consumo medio di corrente per il tuo calibro nella documentazione tecnica ufficiale. Digita il valore in microampere (µA) nel campo del consumo. La maggior parte dei movimenti a tre lancette utilizza da 1,0 a 2,5 µA. I cronografi e i moduli multifunzione possono arrivare fino a 6,0 µA.',
    },
    {
      name: 'Aggiungi il mese e l\'anno di installazione (opzionale)',
      text: 'Se ricordi o hai registrato quando la batteria è stata installata l\'ultima volta, seleziona il mese e inserisci l\'anno. Lo strumento utilizzerà questa data per calcolare la data di sostituzione stimata e mostrare la salute residua della batteria in percentuale.',
    },
    {
      name: 'Leggi la durata teorica',
      text: 'La scheda del risultato mostra la durata totale stimata della batteria in anni, mesi e giorni rimanenti. Questa è la durata massima in condizioni ideali, supponendo che nessun fattore esterno riduca la capacità della batteria.',
    },
    {
      name: 'Controlla lo stato di salute e la data di sostituzione',
      text: 'Quando viene fornita una data di installazione, l\'indicatore si riempie proporzionalmente alla durata residua della batteria. Un badge verde "Buono" significa che rimane più del 50 % della durata. Giallo "Moderato" significa tra il 20 e il 50 %. Rosso "Critico" significa meno del 20 %. La data di sostituzione raccomandata esatta è mostrata sotto l\'indicatore.',
    },
    {
      name: 'Modifica gli input e ricalcola',
      text: 'Cambia qualsiasi input (modello di batteria, valore di consumo o data di installazione) e il risultato si aggiorna automaticamente. Usalo per confrontare diversi tipi di batteria o per pianificare i programmi di sostituzione per più orologi della tua collezione.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto è accurata la stima teorica della durata della batteria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Il calcolo è un ideale elettrico basato sulla capacità divisa per il consumo. In condizioni reali ci si può aspettare una durata dal 10 al 20 % inferiore a causa delle variazioni di temperatura, dei circuiti di rilevamento fine vita, dell\'attrito meccanico dei lubrificanti invecchiati e del carico extra delle funzioni di cronografo o sveglia. La stima è un limite superiore affidabile, non una previsione esatta.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dove trovo il valore esatto del consumo per il mio calibro al quarzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le schede tecniche ufficiali di ETA, Ronda, Miyota, Seiko, ISA e altri produttori di movimenti riportano il consumo medio di corrente in microampere (µA). Cerca il numero di riferimento del calibro seguito da scheda tecnica o specifiche tecniche. Database specializzati come Ranfft e 17jewels pubblicano anche valori di consumo forniti dalla comunità.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa significa µA e perché è importante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA sta per microampere, ovvero un milionesimo di ampere. Misura la corrente elettrica che il movimento assorbe dalla batteria. Un tipico movimento analogico al quarzo a tre lancette consuma tra 1,0 e 2,5 µA. I cronografi e i moduli multifunzione possono consumare da 3,0 a 6,0 µA. Più alta è la corrente, minore è la durata della batteria per una data capacità della cella.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usare questo strumento per orologi solari o cinetici?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Gli orologi solari utilizzano celle fotovoltaiche per ricaricare una batteria ricaricabile. Gli orologi cinetici utilizzano un rotore e un micro-generatore per caricare un condensatore. Nessuna delle due tecnologie si basa su una cella primaria monouso, quindi il modello capacità-consumo non si applica. Usa questo calcolatore solo per movimenti al quarzo standard con celle all\'ossido d\'argento, alcaline o al litio sostituibili.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dovrei sostituire la batteria prima che si esaurisca completamente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì. Le batterie all\'ossido d\'argento e alcaline possono perdere idrossido di potassio quando sono completamente scariche, danneggiando le molle di contatto, le piste del circuito stampato e la bobina del motore passo-passo. La sostituzione prima della scarica completa è fortemente raccomandata. Se lo strumento mostra meno di 6 mesi di vita stimata residua, programma un cambio batteria appena possibile.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Come faccio a sapere se la batteria del mio orologio è all\'ossido d\'argento o alcalina?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le celle all\'ossido d\'argento sono marcate SR (es. SR920SW) e forniscono una tensione stabile di 1,55 V per tutta la loro durata. Le celle alcaline sono marcate LR (es. LR41) e hanno una tensione gradualmente decrescente. La maggior parte dei produttori di orologi di qualità specifica l\'ossido d\'argento. Sostituisci sempre SR con SR, non con LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'La lancetta dei secondi che salta ogni due secondi significa che la batteria si sta esaurendo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sì. Quando il movimento al quarzo rileva una bassa tensione della batteria, entra in modalità di risparmio energetico in cui la lancetta dei secondi salta a intervalli di 2 o 4 secondi. Questo è l\'indicatore di fine vita. Quando vedi questo comportamento, la batteria ha circa 2 - 4 settimane di vita residua e dovrebbe essere sostituita immediatamente per evitare perdite.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Controllo Salute Batteria al Quarzo',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calcolatore Durata Batteria Orologi',
      'description': 'Calcola la durata teorica della batteria di qualsiasi movimento per orologio al quarzo inserendo la capacità della cella (mAh) e il consumo del calibro (µA). Stima la data di sostituzione quando vengono forniti mese e anno di installazione.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calcolo della durata della batteria degli orologi al quarzo: capacità vs consumo spiegato',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Scopri come stimare la durata della batteria di un movimento per orologio al quarzo utilizzando la capacità della cella in mAh e il consumo del movimento in µA. Comprendi la formula, l\'effetto della temperatura e del carico e quando programmare una sostituzione.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come stimare la durata della batteria di un orologio al quarzo',
      'description': 'Una guida passo passo all\'utilizzo del Controllo Salute Batteria al Quarzo per determinare la durata residua della batteria di qualsiasi orologio al quarzo e pianificarne la data di sostituzione.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleziona o personalizza la cella batteria',
          'text': 'Scegli una cella comune all\'ossido d\'argento dal menu a tendina: SR621SW, SR626SW, SR920SW, SR936SW e altre sono precaricate con le loro capacità ufficiali. Se la tua cella non è elencata, seleziona Personalizzata e inserisci la sua capacità esatta in mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inserisci il consumo del movimento',
          'text': 'Trova il consumo medio di corrente per il tuo calibro dalla documentazione tecnica ufficiale. Digita il valore in microampere (µA) nel campo del consumo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi il mese e l\'anno di installazione',
          'text': 'Se sai quando la batteria è stata installata, seleziona il mese e inserisci l\'anno. Lo strumento calcola la data di sostituzione stimata e mostra la salute residua della batteria in percentuale.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi la durata teorica',
          'text': 'La scheda del risultato mostra la durata totale stimata della batteria in anni, mesi e giorni rimanenti. Questa è la durata massima in condizioni ideali.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controlla lo stato di salute e la data di sostituzione',
          'text': 'Quando viene fornita una data di installazione, l\'indicatore mostra la durata residua. Verde significa più del 50 %. Giallo significa dal 20 al 50 %. Rosso significa meno del 20 %. La data di sostituzione raccomandata è mostrata sotto.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Controllo Salute Batteria al Quarzo',
      'description': 'Uno strumento online per stimare la durata della batteria degli orologi al quarzo in base alla capacità della cella e al consumo del movimento.',
      'category': 'Calcolatore Batteria Orologi',
      'audience': { '@type': 'Audience', 'audienceType': 'Appassionati di orologi e tecnici di riparazione' },
    },
  ],
};

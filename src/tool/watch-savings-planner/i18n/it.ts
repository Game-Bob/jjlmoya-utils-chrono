import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'pianificatore-risparmio-orologio',
  title: 'Pianificatore di Risparmio per Orologi',
  description: 'Imposta e monitora obiettivi di risparmio per il tuo prossimo acquisto di orologi. Visualizza i progressi, calcola le tempistiche e resta motivato.',
  ui: {
    title: 'Impostazioni Obiettivo di Risparmio',
    addGoalTitle: 'Nuovo Obiettivo di Risparmio',
    goalNameLabel: 'Orologio',
    goalNamePlaceholder: 'es. Rolex Submariner',
    targetPriceLabel: 'Prezzo Obiettivo',
    currentSavingsLabel: 'Risparmiato',
    monthlyLabel: 'Al Mese',
    addButton: 'Aggiungi Obiettivo',
    cancelButton: 'Annulla',
    goalsEmpty: 'Ancora nessun obiettivo di risparmio',
    goalsEmptySub: 'Imposta il tuo primo obiettivo orologio e inizia a risparmiare!',
    monthsToGoal: 'Tempo all\u2019obiettivo',
    yearsToGoal: 'Anni all\u2019obiettivo',
    month: 'mese',
    months: 'mesi',
    year: 'anno',
    totalSaved: 'Totale Risparmiato',
    totalGoals: 'Obiettivi',
    achieved: 'Raggiunto',
    percentLabel: 'Risparmiato',
    deleteGoal: 'Elimina',
    editGoal: 'Modifica',
    saveGoal: 'Salva',
    currency: '$',
    summaryTitle: 'Riepilogo',
    goalAchieved: 'Raggiunto!',
    goalProgress: 'Progressi',
    congratsTitle: 'Complimenti!',
    congratsDesc: 'Hai raggiunto il tuo obiettivo di risparmio!',
    monthlyContribution: 'Mensile',
    targetDate: 'Data Obiettivo',
    adjustMonthly: 'Modifica mensile',
  },
  seo: [
    { type: 'title', text: 'Pianificatore di Risparmio per Orologi \u2014 Segui il tuo Prossimo Acquisto', level: 2 },
    { type: 'paragraph', html: 'Risparmiare per un orologio \u00e8 un viaggio. Che si tratti di un <strong>Speedmaster vintage</strong>, di un <strong>Submariner</strong> o di un <strong>Grand Seiko</strong>, un piano di risparmio chiaro trasforma il sogno in una scadenza. Questo strumento ti aiuta a visualizzare i progressi, regolare i contributi mensili e vedere esattamente quando uscirai dalla boutique con il tuo graal.' },
    { type: 'title', text: 'Perch\u00e9 un piano di risparmio \u00e8 importante per i collezionisti di orologi', level: 3 },
    { type: 'paragraph', html: 'Collezionare orologi \u00e8 un gioco di pazienza. I prezzi dei modelli pi\u00f9 ambiti salgono costantemente e gli acquisti d\u2019impulso portano spesso a rimpianti. Un approccio di risparmio strutturato ti mantiene disciplinato, previene lo stress finanziario e rende l\u2019acquisto finale meritato. Inoltre, monitorare i progressi giorno dopo giorno aumenta l\u2019attesa e rende l\u2019unboxing ancora pi\u00f9 dolce.' },
    { type: 'title', text: 'Come impostare obiettivi di risparmio realistici per orologi', level: 3 },
    { type: 'paragraph', html: 'Inizia con il prezzo totale, incluse tasse e spedizione. Poi dividi per quanto puoi mettere da parte comodamente ogni mese. Una buona regola \u00e8 destinare non pi\u00f9 del <strong>10\u201315% del reddito disponibile</strong> al risparmio per orologi. Se la tempistica sembra troppo lunga, considera di suddividerla in traguardi pi\u00f9 piccoli \u2014 o esplora alternative pi\u00f9 accessibili nella stessa famiglia di stile.' },
    { type: 'title', text: 'La psicologia del monitoraggio degli obiettivi', level: 3 },
    { type: 'paragraph', html: 'Il monitoraggio visivo dei progressi innesca il rilascio di dopamina, lo stesso neurotrasmettitore che rende il collezionismo cos\u00ec gratificante. Ogni volta che registri un nuovo contributo e vedi l\u2019anello di progresso riempirsi, rinforzi l\u2019abitudine. Ecco perch\u00e9 i piccoli risparmi regolari funzionano spesso meglio dei depositi grandi e sporadici \u2014 il rituale stesso diventa parte dell\u2019esperienza del collezionista.' },
  ],
  faq: [
    {
      question: 'Quanto dovrei risparmiare ogni mese per un orologio?',
      answer: 'Punta al 10\u201315% del tuo reddito mensile disponibile. La chiave \u00e8 la costanza \u2014 anche 100 $ al mese diventano 1.200 $ all\u2019anno. Regola l\u2019importo in base alla tua tempistica: obiettivi pi\u00f9 brevi richiedono contributi mensili pi\u00f9 alti.',
    },
    {
      question: 'Dovrei risparmiare per un orologio alla volta o per pi\u00f9?',
      answer: 'Uno alla volta \u00e8 solitamente pi\u00f9 efficace. La concentrazione crea slancio. Una volta raggiunto il primo obiettivo, la fiducia e la disciplina si trasferiscono al successivo. Detto questo, questo pianificatore supporta pi\u00f9 obiettivi in modo da poter confrontare le tempistiche.',
    },
    {
      question: 'Cosa succede se il prezzo dell\u2019orologio aumenta mentre risparmio?',
      answer: 'Ottima domanda. Controlla il prezzo di mercato attuale ogni pochi mesi e aggiorna il tuo obiettivo. Se i prezzi salgono rapidamente, considera di aumentare l\u2019importo mensile o di accorciare la tempistica per bloccare il prezzo attuale.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Imposta l\u2019obiettivo',
      text: 'Inserisci il nome dell\u2019orologio e il prezzo totale, incluse tasse e spedizione.',
    },
    {
      name: 'Monitora i risparmi',
      text: 'Registra quanto hai gi\u00e0 risparmiato e quanto puoi mettere da parte ogni mese.',
    },
    {
      name: 'Segui i progressi',
      text: 'Guarda l\u2019anello di progresso riempirsi mentre aggiorni i tuoi risparmi. Regola gli importi mensili in qualsiasi momento.',
    },
    {
      name: 'Festeggia',
      text: 'Quando l\u2019anello raggiunge il 100%, hai raggiunto il tuo obiettivo. \u00c8 ora di comprare quell\u2019orologio!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto dovrei risparmiare ogni mese per un orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Punta al 10\u201315% del tuo reddito mensile disponibile. La chiave \u00e8 la costanza \u2014 anche 100 $ al mese diventano 1.200 $ all\u2019anno.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dovrei risparmiare per un orologio alla volta o per pi\u00f9?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uno alla volta \u00e8 solitamente pi\u00f9 efficace. La concentrazione crea slancio. Una volta raggiunto il primo obiettivo, porta quella disciplina al successivo.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede se il prezzo dell\u2019orologio aumenta mentre risparmio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Controlla il prezzo di mercato attuale ogni pochi mesi e aggiorna il tuo obiettivo. Considera di aumentare l\u2019importo mensile se i prezzi salgono rapidamente.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pianificatore di Risparmio per Orologi',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come risparmiare per l\u2019acquisto di un orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Imposta l\u2019obiettivo',
          'text': 'Inserisci il nome dell\u2019orologio e il prezzo totale, incluse tasse e spedizione.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitora i risparmi',
          'text': 'Registra quanto hai gi\u00e0 risparmiato e quanto puoi mettere da parte ogni mese.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Segui i progressi',
          'text': 'Guarda l\u2019anello di progresso riempirsi mentre aggiorni i tuoi risparmi.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Festeggia',
          'text': 'Quando l\u2019anello raggiunge il 100%, hai raggiunto il tuo obiettivo. \u00c8 ora di comprare quell\u2019orologio!',
        },
      ],
    },
  ],
};

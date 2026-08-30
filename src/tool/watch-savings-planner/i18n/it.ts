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
    monthsToGoal: 'Tempo all\'obiettivo',
    yearsToGoal: 'Anni all\'obiettivo',
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
    currency: 'EUR',
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
    { type: 'title', text: 'Pianificatore di Risparmio per Orologi - Segui il tuo Prossimo Acquisto', level: 2 },
    { type: 'paragraph', html: 'Risparmiare per un orologio è un viaggio. Che si tratti di un <strong>Speedmaster vintage</strong>, di un <strong>Submariner</strong> o di un <strong>Grand Seiko</strong>, un piano di risparmio chiaro trasforma il sogno in una scadenza. Questo strumento ti aiuta a visualizzare i progressi, regolare i contributi mensili e vedere esattamente quando uscirai dalla boutique con il tuo graal.' },
    { type: 'title', text: 'Perché un piano di risparmio è importante per i collezionisti di orologi', level: 3 },
    { type: 'paragraph', html: 'Collezionare orologi è un gioco di pazienza. I prezzi dei modelli più ambiti salgono costantemente e gli acquisti d\'impulso portano spesso a rimpianti. Un approccio di risparmio strutturato ti mantiene disciplinato, previene lo stress finanziario e rende l\'acquisto finale meritato. Inoltre, monitorare i progressi giorno dopo giorno aumenta l\'attesa e rende l\'unboxing ancora più dolce.' },
    { type: 'title', text: 'Come impostare obiettivi di risparmio realistici per orologi', level: 3 },
    { type: 'paragraph', html: 'Inizia con il prezzo totale, incluse tasse e spedizione. Poi dividi per quanto puoi mettere da parte comodamente ogni mese. Una buona regola è destinare non più del <strong>10-15% del reddito disponibile</strong> al risparmio per orologi. Se la tempistica sembra troppo lunga, considera di suddividerla in traguardi più piccoli - o esplora alternative più accessibili nella stessa famiglia di stile.' },
    { type: 'title', text: 'La psicologia del monitoraggio degli obiettivi', level: 3 },
    { type: 'paragraph', html: 'Il monitoraggio visivo dei progressi innesca il rilascio di dopamina, lo stesso neurotrasmettitore che rende il collezionismo così gratificante. Ogni volta che registri un nuovo contributo e vedi l\'anello di progresso riempirsi, rinforzi l\'abitudine. Ecco perché i piccoli risparmi regolari funzionano spesso meglio dei depositi grandi e sporadici - il rituale stesso diventa parte dell\'esperienza del collezionista.' },
  ],
  faq: [
    {
      question: 'Quanto dovrei risparmiare ogni mese per un orologio?',
      answer: 'Punta al 10-15% del tuo reddito mensile disponibile. La chiave è la costanza - anche 100 $ al mese diventano 1.200 $ all\'anno. Regola l\'importo in base alla tua tempistica: obiettivi più brevi richiedono contributi mensili più alti.',
    },
    {
      question: 'Dovrei risparmiare per un orologio alla volta o per più?',
      answer: 'Uno alla volta è solitamente più efficace. La concentrazione crea slancio. Una volta raggiunto il primo obiettivo, la fiducia e la disciplina si trasferiscono al successivo. Detto questo, questo pianificatore supporta più obiettivi in modo da poter confrontare le tempistiche.',
    },
    {
      question: 'Cosa succede se il prezzo dell\'orologio aumenta mentre risparmio?',
      answer: 'Ottima domanda. Controlla il prezzo di mercato attuale ogni pochi mesi e aggiorna il tuo obiettivo. Se i prezzi salgono rapidamente, considera di aumentare l\'importo mensile o di accorciare la tempistica per bloccare il prezzo attuale.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Imposta l\'obiettivo',
      text: 'Inserisci il nome dell\'orologio e il prezzo totale, incluse tasse e spedizione.',
    },
    {
      name: 'Monitora i risparmi',
      text: 'Registra quanto hai già risparmiato e quanto puoi mettere da parte ogni mese.',
    },
    {
      name: 'Segui i progressi',
      text: 'Guarda l\'anello di progresso riempirsi mentre aggiorni i tuoi risparmi. Regola gli importi mensili in qualsiasi momento.',
    },
    {
      name: 'Festeggia',
      text: 'Quando l\'anello raggiunge il 100%, hai raggiunto il tuo obiettivo. È ora di comprare quell\'orologio!',
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
            'text': 'Punta al 10-15% del tuo reddito mensile disponibile. La chiave è la costanza - anche 100 $ al mese diventano 1.200 $ all\'anno.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dovrei risparmiare per un orologio alla volta o per più?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uno alla volta è solitamente più efficace. La concentrazione crea slancio. Una volta raggiunto il primo obiettivo, porta quella disciplina al successivo.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa succede se il prezzo dell\'orologio aumenta mentre risparmio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Controlla il prezzo di mercato attuale ogni pochi mesi e aggiorna il tuo obiettivo. Considera di aumentare l\'importo mensile se i prezzi salgono rapidamente.',
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
      'name': 'Come risparmiare per l\'acquisto di un orologio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Imposta l\'obiettivo',
          'text': 'Inserisci il nome dell\'orologio e il prezzo totale, incluse tasse e spedizione.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitora i risparmi',
          'text': 'Registra quanto hai già risparmiato e quanto puoi mettere da parte ogni mese.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Segui i progressi',
          'text': 'Guarda l\'anello di progresso riempirsi mentre aggiorni i tuoi risparmi.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Festeggia',
          'text': 'Quando l\'anello raggiunge il 100%, hai raggiunto il tuo obiettivo. È ora di comprare quell\'orologio!',
        },
      ],
    },
  ],
};

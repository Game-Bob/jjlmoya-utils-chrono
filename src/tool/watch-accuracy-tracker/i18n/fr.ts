import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculateur-precision-montre',
  title: 'Calculateur d\'Écart de Marche et Précision de Montre',
  description: 'Enregistrez et calculez la dérive quotidienne de vos montres mécaniques ou à quartz pour analyser leur précision et leur régularité.',
  ui: {
    title: 'Précision de la Montre',
    selectWatch: 'Sélectionner ou ajouter une montre',
    watchPlaceholder: 'ex. Seiko SKX007',
    addWatch: 'Ajouter',
    deleteWatch: 'Supprimer',
    addLog: 'Enregistrer une mesure',
    offsetLabel: 'Écart (secondes)',
    offsetPlaceholder: '0',
    dateLabel: 'Heure de la mesure',
    saveLog: 'Sauvegarder',
    avgRate: 'Écart journalier moyen',
    consistency: 'Statut de précision',
    totalLogs: 'Total des mesures',
    historyTitle: 'Historique des mesures',
    noLogs: 'Aucun enregistrement pour cette montre. Ajoutez au moins deux mesures pour calculer la précision.',
    tableDate: 'Date & Heure',
    tableOffset: 'Écart',
    tableRate: 'Écart journalier',
    tableActions: 'Actions',
    deleteLog: 'Supprimer',
    coscExcellent: 'Chronomètre COSC (+4/-6 s/j)',
    excellent: 'Excellent (0 à +5 s/j)',
    good: 'Bon (+/- 10 s/j)',
    needsService: 'Révision nécessaire (> +/- 20 s/j)',
    secondsPerDay: 's/j',
    seconds: 'secondes',
    referenceTime: 'Heure de référence',
    watchTime: 'Heure de la montre',
    useCurrentTime: 'Utiliser l\'heure actuelle',
    calculatedRate: 'Dérive calculée',
    driftPredictorTitle: 'Calculateur de Dérive Temporelle',
    driftPredictorDesc: 'Projeter la dérive accumulée dans le temps et comparer aux standards de l\'industrie.',
    dailyRateInput: 'Écart quotidien (secondes/jour)',
    dailyRatePlaceholder: 'ex. +4.5 ou -3',
    driftHeading: 'Projections',
    period: 'Période',
    accumulatedDrift: 'Dérive projetée',
    day: '1 Jour',
    week: '1 Semaine',
    month: '1 Mois',
    months3: '3 Mois',
    months6: '6 Mois',
    year: '1 An',
    years5: '5 Ans',
    watchStandardTitle: 'Certifications de l\'Industrie',
    trackerHeading: 'Suivi de l\'Écart de Marche',
    driftCalculatorTab: 'Projection de Dérive',
    trackerTab: 'Registre de Précision',
    stdRolex: 'Superlatif Rolex',
    stdCosc: 'Chronomètre COSC',
    stdMetas: 'Master METAS',
    stdStdMech: 'Mécanique Standard',
    stdQuartz: 'Quartz Standard',
    stdHaq: 'Quartz de Haute Précision',
    presetRolex: 'Rolex (+2 s/j)',
    presetCosc: 'COSC (+4 s/j)',
    presetStdMech: 'Standard (+15 s/j)',
    presetQuartz: 'Quartz (+0.5 s/j)',
    statusPass: 'Conforme',
    statusFail: 'Non conforme',
    toleranceRolex: '±2 s/j',
    toleranceCosc: '-4 / +6 s/j',
    toleranceMetas: '0 / +5 s/j',
    toleranceStdMech: '±15 s/j',
    toleranceQuartz: '±0.5 s/j',
    toleranceHaq: '±10 s/an',
  },
  seo: [
    { type: 'title', text: 'Guide Complet sur la Précision Horlogère et la Régulation de Marche', level: 2 },
    { type: 'paragraph', html: 'Les montres mécaniques sont des chefs-d\'œuvre de micro-ingénierie, mais contrairement aux mouvements à quartz, elles sont soumises à diverses forces physiques et environnementales qui affectent leur précision. Le suivi régulier de l\'écart de marche quotidien est essentiel pour s\'assurer de leur bon fonctionnement et anticiper une révision technique.' },
    { type: 'title', text: 'Pourquoi les Montres Mécaniques Dérivent-elles ?', level: 2 },
    { type: 'paragraph', html: 'Plusieurs facteurs perturbent la régularité d\'un mouvement mécanique. La gravité terrestre agit sur le balancier de manière différente selon l\'orientation de la montre. Les variations de température modifient l\'élasticité du spiral, ce qui fait varier la fréquence d\'oscillation. De plus, la force du ressort moteur (réserve de marche) influe sur l\'amplitude : le mouvement est plus régulier lorsque le ressort est complètement remonté.' },
    { type: 'title', text: 'Comprendre la Dérive Cumulative dans le Temps', level: 2 },
    { type: 'paragraph', html: 'Un écart quotidien de +5 secondes peut sembler anodin, mais il s\'accumule rapidement. En une semaine, cela représente 35 secondes d\'avance. En un mois, la dérive atteint 2.5 minutes, et en un an, votre montre affichera plus de 30 minutes de décalage. C\'est pourquoi il est utile de mesurer cette dérive pour calibrer au mieux vos garde-temps.' },
    { type: 'title', text: 'Comment Mesurer Manuellement la Dérive d\'une Montre', level: 2 },
    { type: 'paragraph', html: 'Vous pouvez évaluer l\'écart de marche de votre montre sans chronocomparateur professionnel. Il vous suffit de synchroniser votre montre avec une horloge atomique de référence. Après 24 à 48 heures d\'utilisation, notez le décalage en secondes. Divisez cet écart par le nombre de jours écoulés pour obtenir votre dérive quotidienne moyenne.' },
    { type: 'title', text: 'Réguler sa Montre Grâce à la Dérive Positionnelle', level: 2 },
    { type: 'paragraph', html: 'Il est possible de corriger légèrement la marche de votre garde-temps mécanique en choisissant sa position de repos durant la nuit. Par exemple, poser la montre à plat (cadran vers le haut) peut lui faire gagner quelques secondes, tandis que la poser sur la tranche (couronne vers le bas) peut lui en faire perdre. En documentant ces habitudes, vous compensez la dérive sans ouvrir le boîtier.' },
  ],
  faq: [
    {
      question: 'Quel est l\'écart de marche normal pour une montre mécanique ?',
      answer: 'Une montre mécanique standard dévie généralement de +/- 10 à 20 secondes par jour. Les chronomètres certifiés COSC sont quant à eux réglés dans une plage de -4 à +6 secondes par jour, tandis que les mouvements à quartz haut de gamme peuvent afficher un écart inférieur à +/- 0.5 seconde par jour.',
    },
    {
      question: 'Pourquoi la précision varie-t-elle selon la position de la montre ?',
      answer: 'La gravité terrestre influe directement sur le balancier et le spiral selon que le cadran est orienté vers le haut, le bas, ou que la couronne est orientée sur le côté. Cette variation de position crée des frottements différents qui font varier l\'amplitude et la marche de la montre.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Enregistrer l\'état initial',
      text: 'Synchronisez votre montre avec une horloge atomique et notez l\'écart initial en secondes.',
    },
    {
      name: 'Porter et suivre la montre',
      text: 'Portez votre montre normalement ou placez-la dans une position fixe pendant au moins 12 à 24 heures.',
    },
    {
      name: 'Enregistrer l\'état final',
      text: 'Mesurez à nouveau l\'écart par rapport à l\'horloge atomique. Le système calcule automatiquement la dérive journalière.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur d\'Écart de Marche et Précision de Montre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quel est l\'écart de marche normal pour une montre mécanique ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une montre mécanique standard dévie généralement de +/- 10 à 20 secondes par jour. Les chronomètres certifiés COSC sont quant à eux réglés dans une plage de -4 à +6 secondes par jour, tandis que les mouvements à quartz haut de gamme peuvent afficher un écart inférieur à +/- 0.5 seconde par jour.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Pourquoi la précision varie-t-elle selon la position de la montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La gravité terrestre influe directement sur le balancier et le spiral selon que le cadran est orienté vers le haut, le bas, ou que la couronne est orientée sur le côté. Cette variation de position crée des frottements différents qui font varier l\'amplitude et la marche de la montre.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment Mesurer Manuellement la Dérive d\'une Montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enregistrer l\'état initial',
          'text': 'Synchronisez votre montre avec une horloge atomique et notez l\'écart initial en secondes.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Porter et suivre la montre',
          'text': 'Portez votre montre normalement ou placez-la dans une position fixe pendant au moins 12 à 24 heures.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Enregistrer l\'état final',
          'text': 'Mesurez à nouveau l\'écart par rapport à l\'horloge atomique. Le système calcule automatiquement la dérive journalière.'
        }
      ]
    }
  ],
};

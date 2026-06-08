import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'visualiseur-de-phase-lunaire',
  title: 'Visualiseur de Phase Lunaire: Calendrier Lunaire & Outil pour Montre à Phases',
  description: 'Visualisez la phase lunaire actuelle, son illumination, son âge ainsi que les prochaines pleines et nouvelles lunes. Idéal pour régler le quantième lunaire de votre montre.',
  ui: {
    title: 'Visualiseur de Phase Lunaire',
    selectDate: 'Choisir une date',
    today: 'Aujourd\'hui',
    moonPhase: 'Phase lunaire',
    illumination: 'Illumination',
    moonAge: 'Âge lunaire',
    daysUntilFull: 'Jours avant la Pleine Lune',
    daysUntilNew: 'Jours avant la Nouvelle Lune',
    newMoon: 'Nouvelle Lune',
    waxingCrescent: 'Premier Croissant',
    firstQuarter: 'Premier Quartier',
    waxingGibbous: 'Gibbeuse Croissante',
    fullMoon: 'Pleine Lune',
    waningGibbous: 'Gibbeuse Décroissante',
    lastQuarter: 'Dernier Quartier',
    waningCrescent: 'Dernier Croissant',
    nextFullMoon: 'Prochaine Pleine Lune',
    nextNewMoon: 'Prochaine Nouvelle Lune',
    tipTitle: 'Astuce',
    tipContent: 'Pour régler une montre à phases de lune, trouvez d\'abord la phase lunaire du jour avec cet outil, puis avancez la couronne jusqu\'à ce que le disque lunaire corresponde. La plupart des quantièmes lunaires mécaniques sont précis à un jour près tous les 2 ans.',
    days: 'Progression du cycle',
    day: 'jour',
  },
  seo: [
    { type: 'title', text: 'Visualiseur de Phase Lunaire - Outil Lunaire & Guide de Réglage', level: 2 },
    { type: 'paragraph', html: 'Le Visualiseur de Phase Lunaire affiche la <strong>phase lunaire actuelle</strong> avec un rendu réaliste de la lune. Consultez le <strong>pourcentage d\'illumination, l\'âge lunaire, les jours avant la prochaine pleine lune et la prochaine nouvelle lune</strong>. Conçu pour les passionnés de montres qui doivent régler précisément leur quantième lunaire - fonctionne aussi comme calendrier lunaire général pour n\'importe quelle date passée ou future.' },
    { type: 'title', text: 'Glossaire des Phases Lunaires', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Nouvelle Lune', definition: 'La lune est entre la Terre et le soleil. La face illuminée nous tourne le dos. 0 % d\'illumination. Le début du cycle lunaire.' },
        { term: 'Premier Croissant', definition: '1-49 % d\'illumination. Un fin croissant apparaît sur le côté droit (hémisphère Nord). La lune se dirige vers le premier quartier.' },
        { term: 'Premier Quartier', definition: '50 % d\'illumination. La moitié de la surface visible est éclairée. La lune a parcouru un quart de son cycle.' },
        { term: 'Gibbeuse Croissante', definition: '51-99 % d\'illumination. Plus de la moitié est éclairée. La lune se prépare vers la pleine lune.' },
        { term: 'Pleine Lune', definition: '100 % d\'illumination. Toute la surface visible est éclairée. Le sommet du cycle lunaire.' },
        { term: 'Gibbeuse Décroissante', definition: '99-51 % d\'illumination. La zone éclairée commence à rétrécir par la droite.' },
        { term: 'Dernier Quartier', definition: '50 % d\'illumination. La moitié gauche est éclairée. Trois quarts du cycle sont achevés.' },
        { term: 'Dernier Croissant', definition: '49-1 % d\'illumination. Un fin croissant sur la gauche avant que le cycle ne revienne à la nouvelle lune.' },
      ]
    },
    { type: 'title', text: 'Comment Régler une Montre à Phases de Lune', level: 3 },
    {
      type: 'list', items: [
        'Utilisez cet outil pour trouver la phase lunaire exacte du jour. Notez le nom de la phase et son apparence visuelle.',
        'Sur votre montre, tirez la couronne en position de réglage des phases de lune (généralement position 2 ou 3).',
        'Avancez la couronne jusqu\'à ce que le disque lunaire affiche la même phase que l\'outil. L\'indicateur de pleine lune est généralement au centre-haut du disque.',
        'Évitez de régler la phase lunaire entre 21 h et 3 h du matin, lorsque le mécanisme de changement de date est engagé et peut être endommagé.',
        'La plupart des montres mécaniques à phases de lune utilisent un engrenage à 59 dents qui approche deux cycles lunaires (59 jours). Cela signifie qu\'elles accumulent environ un jour d\'erreur tous les 2 ans.',
        'Pour une haute précision, certaines montres (Patek Philippe, A. Lange & Söhne) utilisent des engrenages précis à un jour près tous les 100 ans et plus.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Ne Réglez Jamais Pendant le Changement de Date', icon: 'mdi:alert', html: 'Ne réglez pas la phase lunaire (ni la date) entre environ <strong>21 h et 3 h du matin</strong>. Pendant cette fenêtre, le mécanisme de changement de date de la montre est physiquement en prise avec la roue de date. Forcer la couronne peut striper les dents de l\'engrenage. Si vous devez absolument régler pendant cette période, avancez d\'abord les aiguilles au-delà de 3 h, puis réglez la phase lunaire.' },
    { type: 'title', text: 'Phase de Lune Mécanique vs Haute Précision', level: 3 },
    {
      type: 'table', headers: ['Type', 'Engrenage', 'Dérive', 'Décalage d\'1 jour après', 'Exemples de montres'], rows: [
        ['Standard / Entrée de gamme', '59 dents', '~1 jour tous les 2 ans', '~2,5 ans', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermédiaire', '135 dents', '~1 jour tous les 10 ans', '~10 ans', 'Omega, Tudor, IWC, Breitling'],
        ['Haute précision', 'Train d\'engrenages', '~1 jour tous les 100+ ans', '100+ ans', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Lecture du Disque Lunaire', html: 'Sur la plupart des montres à phases de lune, le disque lunaire représente <strong>deux lunes</strong> opposées. Chaque pleine lune s\'aligne avec l\'ouverture centrale-haut. Après un cycle complet (29,5 jours), la deuxième lune prend le relais. C\'est pourquoi un engrenage à 59 dents fonctionne&nbsp;: il effectue une rotation complète en 59 jours - exactement deux cycles lunaires.' },
    {
      type: 'summary', title: 'Référence Rapide', items: [
        'Le cycle lunaire (synodique) est exactement de 29,53058867 jours. L\'outil utilise cette valeur pour une précision maximale.',
        'Huit phases se répètent en un cycle éternel&nbsp;: nouvelle → premier croissant → premier quartier → gibbeuse croissante → pleine → gibbeuse décroissante → dernier quartier → dernier croissant.',
        'Pour régler une montre à phases de lune&nbsp;: trouvez la phase du jour ici, puis faites-la correspondre sur le disque de votre montre.',
        'Ne forcez jamais la couronne entre 21 h et 3 h du matin. Avancez d\'abord l\'heure au-delà de 3 h.',
        'Les phases de lune standard à 59 dents dérivent d\'environ un jour tous les 2,5 ans. La correction nécessite d\'avancer le disque d\'un cran.',
      ]
    },
  ],
  faq: [
    {
      question: 'Comment régler les phases de lune sur ma montre&nbsp;?',
      answer: 'Trouvez la phase lunaire du jour avec cet outil. Avancez la couronne (généralement position 2) jusqu\'à ce que le disque lunaire affiche la phase correspondante. Évitez de régler entre 21 h et 3 h du matin lorsque le mécanisme de date est engagé.',
    },
    {
      question: 'Quelle est la précision des montres mécaniques à phases de lune&nbsp;?',
      answer: 'La plupart utilisent un engrenage à 59 dents précis à environ un jour près tous les 2 ans. Les montres haut de gamme comme Patek Philippe et A. Lange & Söhne atteignent une précision d\'un jour tous les 100 ans et plus.',
    },
    {
      question: 'Quelle est la différence entre un mois synodique et sidéral&nbsp;?',
      answer: 'Le mois sidéral (27,3 jours) est l\'orbite de la lune par rapport aux étoiles. Le mois synodique (29,53 jours) est le temps entre des phases identiques et est ce que les montres à phases de lune suivent.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Choisissez une date',
      text: 'Utilisez le sélecteur de date pour choisir n\'importe quelle date, passée ou future, et visualisez la phase lunaire.',
    },
    {
      name: 'Consultez les données',
      text: 'Les fiches affichent le nom de la phase, le pourcentage d\'illumination, l\'âge lunaire et la progression du cycle.',
    },
    {
      name: 'Trouvez les prochains événements',
      text: 'Les dates de la prochaine pleine lune et nouvelle lune s\'affichent automatiquement.',
    },
    {
      name: 'Réglez votre montre',
      text: 'Utilisez la phase affichée pour régler précisément le quantième lunaire de votre montre.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment régler les phases de lune sur ma montre&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Trouvez la phase lunaire du jour avec cet outil. Avancez la couronne jusqu\'à ce que le disque lunaire affiche la phase correspondante. Évitez de régler entre 21 h et 3 h du matin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la précision des montres mécaniques à phases de lune&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart utilisent un engrenage à 59 dents précis à environ un jour tous les 2 ans. Les montres haut de gamme atteignent une précision d\'un jour tous les 100 ans et plus.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la différence entre un mois synodique et sidéral&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le mois sidéral (27,3 jours) est l\'orbite de la lune par rapport aux étoiles. Le mois synodique (29,53 jours) est le temps entre des phases identiques suivi par les montres à phases de lune.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Visualiseur de Phase Lunaire',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment visualiser les phases lunaires',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Choisissez une date',
          'text': 'Utilisez le sélecteur de date pour choisir une date et voir la phase lunaire.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Consultez les données',
          'text': 'Les fiches affichent le nom de la phase, l\'illumination, l\'âge lunaire et la progression du cycle.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Réglez votre montre',
          'text': 'Utilisez la phase affichée pour régler le quantième lunaire de votre montre.',
        },
      ],
    },
  ],
};

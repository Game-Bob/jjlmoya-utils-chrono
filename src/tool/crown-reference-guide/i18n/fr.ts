import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'guide-reference-couronne',
  title: 'Guide de Référence de la Couronne de Montre',
  description: 'Guide interactif des positions de couronne, sens de remontage et fonctions de réglage pour les mouvements populaires.',
  ui: {
    title: 'Réglages de la Couronne',
    movementLabel: 'Mouvement',
    selectMovement: 'Sélectionner un mouvement',
    customMovement: 'Personnalisé',
    positionLabel: 'Position',
    unscrewFirst: 'Dévisser d\'abord la couronne',
    windingLabel: 'Remontage',
    hackLabel: 'Arrêt du balancier',
    dangerZoneLabel: 'Éviter 21h-3h',
    directionCW: 'Horaire',
    directionCCW: 'Antihoraire',
    directionBoth: 'Bidirectionnel',
    pullHint: 'Tirer la couronne',
    clickPosition: 'Cliquez sur une position',
    position0Title: 'Repos',
    position0Desc: 'Couronne enfoncée ou vissée. La montre fonctionne normalement.',
    position0Detail: 'Aucune fonction de remontage ou de réglage activée.',
    position1Title: 'Remontage Manuel',
    position1Desc: 'Tournez la couronne dans le sens horaire pour remonter le ressort moteur. Vous sentirez une résistance croissante.',
    position1Detail: 'Environ 30-40 tours complets depuis l\'arrêt. Les rotors automatiques remontent également lors du port.',
    position2Title: 'Réglage Rapide de la Date',
    position2Desc: 'Tournez la couronne dans le sens horaire pour avancer la date. L\'aiguille des heures reste synchronisée avec les secondes.',
    position2Detail: 'ÉVITEZ le réglage rapide de la date entre 21 h et 3 h du matin lorsque le mécanisme de changement de date est engagé.',
    position3Title: 'Réglage de l\'Heure',
    position3Desc: 'Tournez la couronne dans n\'importe quel sens pour déplacer les aiguilles. La trotteuse s\'arrête (arrêt du balancier) pour une synchronisation précise.',
    position3Detail: 'Tirez jusqu\'à la position 3, attendez que les secondes atteignent 12, puis tirez complètement. Tournez pour régler l\'heure et repoussez.',
    screwDownHint: 'N\'oubliez pas de revisser la couronne pour garantir l\'étanchéité.',
    noQuickSet: 'Pas de réglage rapide',
    noHack: 'Non',
    hasHack: 'Oui',
    crownPositions: 'Positions de la Couronne',
    noteTitle: 'Remarque',
  },
  seo: [
    { type: 'title', text: 'Guide des Positions de la Couronne-Remonter, Régler la Date et l\'Heure Correctement', level: 2 },
    { type: 'paragraph', html: 'La couronne est la seule interface physique entre vous et le mouvement de votre montre. L\'utiliser incorrectement-remonter en sens inverse, régler la date à minuit ou tirer trop fort-peut endommager le mécanisme. Ce guide détaille chaque position de couronne pour les calibres <strong>ETA, Sellita, Miyota, Seiko et Unitas</strong> afin que vous n\'ayez jamais à deviner.' },
    { type: 'title', text: 'Aperçu des Positions de Couronne', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Position 0 (Repos)', definition: 'Couronne enfoncée ou vissée. La montre fonctionne normalement. Aucune fonction activée. Revenez toujours ici après le réglage.' },
        { term: 'Position 1 (Remontage)', definition: 'Première traction ou état dévissé. Tournez dans le sens horaire pour remonter le ressort moteur. La plupart des automatiques remontent également via le rotor.' },
        { term: 'Position 2 (Réglage Rapide de la Date)', definition: 'Deuxième traction. Tournez dans le sens horaire pour avancer la date. Évitez d\'utiliser entre 21 h-3 h du matin lorsque le mécanisme de date est engagé.' },
        { term: 'Position 3 (Réglage de l\'Heure)', definition: 'Troisième traction. La trotteuse s\'arrête pour un alignement précis. Tournez librement pour régler l\'heure. Présente sur la plupart des automatiques modernes.' },
      ]
    },

    { type: 'title', text: 'Comparaison des Mouvements: Fonctions de la Couronne', level: 3 },
    {
      type: 'table', headers: ['Mouvement', 'Positions', 'Arrêt', 'Réglage Rap.', 'Sens Rem.'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['Miyota 8215', '2 (0,1,3)', 'Non', 'Aucun', 'H'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Oui', 'Date (H)', 'H'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'Non', 'Aucun', 'H'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Erreurs Courantes avec la Couronne', icon: 'mdi:alert', badge: 'À NE PAS FAIRE', html: 'Ne réglez jamais la date rapidement entre <strong>21 h et 3 h du matin</strong> lorsque la roue de date est engagée. Cela peut briser des dents et nécessiter une révision complète du mouvement. Si vous devez changer la date pendant cette fenêtre, avancez d\'abord l\'heure au-delà de 3 h, réglez la date, puis revenez à l\'heure correcte.' },

    { type: 'tip', title: 'Couronnes Vissées', html: 'Les montres de plongée et les montres sportives ont souvent des couronnes vissées pour l\'étanchéité. <strong>Toujours dévisser avant de tirer</strong>. Tournez dans le sens antihoraire jusqu\'à ce que la couronne sorte, puis tirez jusqu\'à la position souhaitée. Après le réglage, enfoncez, puis tournez dans le sens horaire en exerçant une légère pression jusqu\'à ce que ce soit bien ajusté. <strong>Ne serrez pas trop.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Couronne Standard', icon: 'mdi:crown', description: 'Couronne à pousser-tirer présente sur la plupart des montres habillées et automatiques quotidiennes. 2-4 positions. Étanchéité typiquement de 30-100 m.', points: ['Accès immédiat, pas de dévissage', 'Étanchéité limitée', 'Courante sur ETA, Miyota, Seiko'] },
        { title: 'Couronne Vissée', icon: 'mdi:lock', description: 'Couronne filetée qui se visse dans le tube du boîtier. Standard sur les montres de plongée et les montres-outils. Étanchéité 200 m+.', points: ['Étanchéité supérieure', 'Doit être dévissée avant utilisation', 'Courante sur Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Référence Rapide', items: [
        'Remontez toujours dans le sens horaire-le remontage inverse actionne l\'embrayage à friction mais ne remonte pas.',
        'Si votre montre a une couronne vissée, dévissez-la avant de tirer sur quelque position que ce soit.',
        'Évitez le réglage rapide de la date entre 21 h et 3 h. Avancez d\'abord l\'heure au-delà de 3 h si nécessaire.',
        'Les mouvements à remontage manuel (ex. Unitas 6498) ont moins de positions. Remontez complètement avant de régler l\'heure.',
        'Les mouvements sans arrêt du balancier (ex. Miyota 8215) nécessitent une technique différente: tournez au-delà de la minute cible, puis lentement en arrière.',
      ]
    },
  ],
  faq: [
    {
      question: 'Combien de positions de couronne ma montre a-t-elle ?',
      answer: 'La plupart des mouvements automatiques ont 3 positions fonctionnelles en plus du repos: position 1 pour le remontage manuel, position 2 pour le réglage rapide de la date et position 3 pour le réglage de l\'heure avec arrêt du balancier. Les mouvements à remontage manuel comme l\'Unitas 6498 ont seulement 1 position fonctionnelle (remontage, avec réglage de l\'heure sur une traction supplémentaire). Les couronnes vissées ajoutent une étape supplémentaire: dévisser avant de tirer.',
    },
    {
      question: 'Puis-je endommager ma montre en remontant en sens inverse ?',
      answer: 'Non, mais cela ne fait rien. Les mouvements modernes utilisent un embrayage à friction qui se désengage lors d\'une rotation inverse, donc le remontage inverse n\'endommage pas mais ne remonte pas non plus le ressort moteur. Remontez toujours dans le sens horaire pour le remontage manuel. La seule exception concerne certaines montres de poche anciennes et les premiers mouvements automatiques.',
    },
    {
      question: 'Qu\'est-ce que la zone de danger du changement de date et comment l\'éviter ?',
      answer: 'La zone de danger se situe généralement entre 21 h et 3 h du matin, lorsque le mécanisme de changement de date est physiquement engagé avec la roue de date. Un réglage rapide pendant cette fenêtre peut briser les dents d\'engrenage. Pour régler la date en toute sécurité: avancez l\'heure au-delà de 3 h, réglez la date à la veille, puis avancez l\'heure jusqu\'à la date et l\'heure correctes.',
    },
    {
      question: 'Pourquoi ma trotteuse ne s\'arrête-t-elle pas quand je tire la couronne ?',
      answer: 'Certains mouvements n\'ont pas de mécanisme d\'arrêt du balancier. Les calibres courants sans arrêt incluent le Miyota 8215, l\'Unitas 6497/6498 et de nombreux mouvements anciens. Pour régler l\'heure avec précision sur un mouvement sans arrêt: tournez la couronne de 5-10 minutes au-delà de votre minute cible, puis tournez lentement en arrière jusqu\'à ce que l\'aiguille des minutes tombe exactement sur le repère souhaité.',
    },
    {
      question: 'Combien de tours faut-il pour remonter complètement ma montre ?',
      answer: 'La plupart des mouvements automatiques nécessitent 30-40 tours complets de couronne depuis l\'arrêt. Les mouvements à remontage manuel varient: l\'Unitas 6498 nécessite environ 30-35 tours, tandis que le Seiko 6R35 avec sa réserve de 70 heures en nécessite 50-60. Arrêtez-vous lorsque vous sentez une résistance ferme-forcer au-delà peut endommager le ressort moteur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Trouvez votre calibre de mouvement',
      text: 'Regardez sur le fond du boîtier (souvent gravé) ou sur le mouvement lui-même à travers un fond transparent. Numéros courants: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Sélectionnez-le dans le guide',
      text: 'Choisissez votre mouvement dans le menu déroulant. Le visuel de la couronne et le panneau se mettent à jour pour afficher vos positions exactes, le sens de remontage et les fonctions.',
    },
    {
      name: 'Parcourez chaque position',
      text: 'Cliquez sur les puces de position (0-3) ou utilisez le bouton Tirer. Lisez la description et notez l\'avertissement de zone de danger pour le réglage de la date.',
    },
    {
      name: 'Appliquez à votre montre',
      text: 'Avec le guide ouvert à côté de vous, exercez-vous sur votre montre réelle. Remontez dans le bon sens, évitez la zone de danger et revissez la couronne après.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien de positions de couronne ma montre a-t-elle ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart des mouvements automatiques ont 3 positions fonctionnelles en plus du repos: position 1 pour le remontage manuel, position 2 pour le réglage rapide de la date et position 3 pour le réglage de l\'heure avec arrêt du balancier.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je endommager ma montre en remontant en sens inverse ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Les mouvements modernes utilisent un embrayage à friction qui se désengage lors d\'une rotation inverse, donc le remontage inverse n\'endommage pas mais ne remonte pas non plus le ressort moteur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce que la zone de danger du changement de date ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La zone de danger se situe généralement entre 21 h et 3 h du matin. Pour régler la date en toute sécurité: avancez l\'heure au-delà de 3 h, réglez la date à la veille, puis avancez.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Pourquoi ma trotteuse ne s\'arrête-t-elle pas quand je tire la couronne ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Certains mouvements n\'ont pas de mécanisme d\'arrêt du balancier. Les calibres courants sans arrêt incluent le Miyota 8215 et l\'Unitas 6497/6498. Pour régler l\'heure: tournez au-delà de la cible, puis lentement en arrière.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Combien de tours pour remonter complètement ma montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart des mouvements automatiques nécessitent 30-40 tours complets de couronne. Les mouvements à remontage manuel varient. Arrêtez-vous lorsque vous sentez une résistance ferme.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Guide de Référence de la Couronne',
      'operatingSystem': 'Tous',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment utiliser le Guide de Référence de la Couronne',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Trouvez votre calibre de mouvement',
          'text': 'Regardez sur le fond du boîtier (souvent gravé) ou sur le mouvement lui-même à travers un fond transparent. Numéros courants: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sélectionnez-le dans le guide',
          'text': 'Choisissez votre mouvement dans le menu déroulant. Le visuel de la couronne et le panneau se mettent à jour pour afficher vos positions exactes, le sens de remontage et les fonctions.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Parcourez chaque position',
          'text': 'Cliquez sur les puces de position (0-3) ou utilisez le bouton Tirer. Lisez la description et notez l\'avertissement de zone de danger pour le réglage de la date.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Appliquez à votre montre',
          'text': 'Avec le guide ouvert à côté de vous, exercez-vous sur votre montre réelle. Remontez dans le bon sens, évitez la zone de danger et revissez la couronne après.',
        },
      ],
    },
  ],
};

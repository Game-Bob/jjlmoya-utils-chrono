import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimateur-reserve-de-marche',
  title: 'Estimateur de Réserve de Marche',
  description: 'Estimez la réserve de marche restante de votre montre en fonction des tours de couronne et des heures de port. Compatible avec les calibres populaires ETA, Sellita, Miyota, Seiko et Rolex.',
  ui: {
    title: 'Estimateur de Réserve de Marche',
    movementLabel: 'Calibre',
    selectMovement: 'Sélectionner un calibre',
    customMovement: 'Personnalisé',
    turnsLabel: 'Tours de Couronne',
    hoursLabel: 'Temps de Port',
    turnsInput: 'Tours',
    hoursInput: 'Heures',
    activityLabel: 'Activité',
    activityLow: 'Bureau',
    activityMedium: 'Marche',
    activityHigh: 'Actif',
    calculate: 'Calculer',
    reserveRemaining: 'Réserve Restante',
    hoursRemaining: 'Restant',
    chargePercent: 'Charge',
    resultLabel: 'Réserve Estimée',
    stopTimeLabel: 'Fonctionne jusqu\'à',
    powerReserveHours: 'Réserve (h)',
    fullWindTurns: 'Tours jusqu\'à plein',
    step1: 'Sélectionnez votre calibre dans le menu déroulant.',
    step2: 'Entrez les tours de couronne et les heures de port.',
    step3: 'Appuyez sur Calculer pour voir votre réserve.',
    tipTitle: 'Astuce',
    tipContent: 'Les mouvements à remontage manuel ne se chargent que lorsque vous tournez la couronne. Les mouvements automatiques se chargent également lorsque vous portez la montre.',
  },
  seo: [
    { type: 'title', text: 'Estimateur de Réserve de Marche - Quelle réserve reste-t-il à votre mouvement ?', level: 2 },
    { type: 'paragraph', html: 'Vous vous demandez combien d\'énergie il reste à votre montre mécanique ? Que vous ayez remonté la couronne ce matin ou porté la montre toute la journée, cet estimateur vous indique le niveau de charge approximatif et les heures restantes pour les calibres populaires comme <strong>ETA, Sellita, Miyota, Seiko et Rolex</strong>.' },
    { type: 'title', text: 'Comment fonctionne la réserve de marche d\'une montre mécanique', level: 3 },
    { type: 'paragraph', html: 'La réserve de marche est la quantité d\'énergie emmagasinée dans le ressort moteur. Lorsque vous remontez la couronne, vous tendez le ressort et stockez de l\'énergie potentielle. Un rotor automatique tend également le ressort lorsque vous portez la montre. L\'énergie se dissipe ensuite à un rythme régulier - généralement 2-3 % par heure - jusqu\'à ce que la montre s\'arrête.' },
    { type: 'title', text: 'Remontage manuel vs. Charge par rotor', level: 3 },
    { type: 'paragraph', html: 'Le remontage manuel via la couronne est le moyen le plus efficace de charger une montre : chaque tour complet ajoute une quantité d\'énergie prévisible, généralement environ 2,5 % de la réserve totale. Le port de la montre charge plus lentement et dépend de votre niveau d\'activité : un employé de bureau peut charger 4-6 % par heure, tandis qu\'une personne active peut charger 8-10 %. Cet estimateur utilise une moyenne prudente.' },
    { type: 'title', text: 'Pourquoi l\'estimation de la réserve de marche est importante', level: 3 },
    { type: 'paragraph', html: 'Connaître le niveau de charge de votre montre permet d\'éviter les arrêts inattendus. Si la montre s\'arrête pendant la nuit, elle a peut-être besoin de plus de remontage avant le coucher, ou pas assez de temps de port. Utilisez cet outil pour comprendre vos habitudes de charge et garder votre automatique en marche.' },
  ],
  faq: [
    {
      question: 'Combien un tour de couronne charge-t-il la montre ?',
      answer: 'Cela dépend du calibre. La plupart des calibres automatiques atteignent le plein remontage en 30-40 tours, donc chaque tour ajoute environ 2,5-3,3 % de la réserve totale. Les mouvements à remontage manuel comme l\'Unitas 6498 nécessitent également environ 35 tours pour un plein remontage.',
    },
    {
      question: 'Porter la montre la charge-t-il autant que le remontage ?',
      answer: 'Le port charge plus lentement et de manière variable. Au bureau, vous pouvez charger 4-6 % par heure via le rotor. En mouvement actif (marche, sport), cela peut atteindre 8-10 % par heure. Le remontage manuel est plus rapide et plus prévisible.',
    },
    {
      question: 'Quelle réserve une montre perd-elle par heure ?',
      answer: 'La consommation est constante : divisez 100 par la réserve de marche en heures. Un calibre de 38 heures perd environ 2,6 % par heure, un 42 heures perd 2,4 % et un 70 heures perd environ 1,4 % par heure.',
    },
    {
      question: 'Puis-je trop remonter ma montre ?',
      answer: 'Les mouvements automatiques modernes sont équipés d\'un embrayage à friction qui empêche le surremontage. Une fois le ressort moteur complètement tendu, les tours supplémentaires glissent simplement. Les mouvements à remontage manuel ont également une butée, mais forcer au-delà peut endommager le ressort moteur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Sélectionnez votre calibre',
      text: 'Choisissez le calibre de votre montre dans le menu déroulant. S\'il n\'apparaît pas, sélectionnez Personnalisé et saisissez sa réserve de marche et ses tours jusqu\'à plein.',
    },
    {
      name: 'Saisissez vos données',
      text: 'Indiquez combien de tours de couronne vous avez effectués ou combien d\'heures vous avez porté la montre aujourd\'hui. Vous pouvez remplir les deux pour une estimation combinée.',
    },
    {
      name: 'Calculer',
      text: 'Appuyez sur le bouton Calculer. Le résultat affiche le pourcentage de charge estimé et les heures restantes de réserve de marche.',
    },
    {
      name: 'Ajustez vos habitudes',
      text: 'Utilisez les résultats pour décider si vous devez remonter davantage avant le coucher ou porter la montre plus longtemps dans la journée pour qu\'elle continue de fonctionner.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien un tour de couronne charge-t-il la montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cela dépend du calibre. La plupart des calibres automatiques atteignent le plein remontage en 30-40 tours, donc chaque tour ajoute environ 2,5-3,3 % de la réserve totale. Les mouvements à remontage manuel comme l\'Unitas 6498 nécessitent également environ 35 tours pour un plein remontage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Porter la montre la charge-t-il autant que le remontage ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le port charge plus lentement et de manière variable. Au bureau, vous pouvez charger 4-6 % par heure via le rotor. En mouvement actif, cela peut atteindre 8-10 % par heure. Le remontage manuel est plus rapide et plus prévisible.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle réserve une montre perd-elle par heure ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La consommation est constante: divisez 100 par la réserve de marche en heures. Un calibre de 38 heures perd environ 2,6 % par heure, un 42 heures perd 2,4 % et un 70 heures perd environ 1,4 % par heure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je trop remonter ma montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les mouvements automatiques modernes sont équipés d\'un embrayage à friction qui empêche le surremontage. Une fois le ressort moteur complètement tendu, les tours supplémentaires glissent simplement.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Estimateur de Réserve de Marche',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment estimer la réserve de marche de votre montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Sélectionnez votre calibre',
          'text': 'Choisissez le calibre de votre montre dans le menu déroulant. S\'il n\'apparaît pas, sélectionnez Personnalisé et saisissez sa réserve de marche et ses tours jusqu\'à plein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Saisissez vos données',
          'text': 'Indiquez combien de tours de couronne vous avez effectués ou combien d\'heures vous avez porté la montre aujourd\'hui. Vous pouvez remplir les deux pour une estimation combinée.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Calculer',
          'text': 'Appuyez sur le bouton Calculer. Le résultat affiche le pourcentage de charge estimé et les heures restantes de réserve de marche.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajustez vos habitudes',
          'text': 'Utilisez les résultats pour décider si vous devez remonter davantage avant le coucher ou porter la montre plus longtemps dans la journée pour qu\'elle continue de fonctionner.',
        },
      ],
    },
  ],
};

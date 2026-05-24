import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimateur-reserve-de-marche',
  title: 'Estimateur de R\u00e9serve de Marche',
  description: 'Estimez la r\u00e9serve de marche restante de votre montre en fonction des tours de couronne et des heures de port. Compatible avec les calibres populaires ETA, Sellita, Miyota, Seiko et Rolex.',
  ui: {
    title: 'Estimateur de R\u00e9serve de Marche',
    movementLabel: 'Calibre',
    selectMovement: 'S\u00e9lectionner un calibre',
    customMovement: 'Personnalis\u00e9',
    turnsLabel: 'Tours de Couronne',
    hoursLabel: 'Temps de Port',
    turnsInput: 'Tours',
    hoursInput: 'Heures',
    activityLabel: 'Activit\u00e9',
    activityLow: 'Bureau',
    activityMedium: 'Marche',
    activityHigh: 'Actif',
    calculate: 'Calculer',
    reserveRemaining: 'R\u00e9serve Restante',
    hoursRemaining: 'Restant',
    chargePercent: 'Charge',
    resultLabel: 'R\u00e9serve Estim\u00e9e',
    stopTimeLabel: 'Fonctionne jusqu\'\u00e0',
    powerReserveHours: 'R\u00e9serve (h)',
    fullWindTurns: 'Tours jusqu\'\u00e0 plein',
    step1: 'S\u00e9lectionnez votre calibre dans le menu d\u00e9roulant.',
    step2: 'Entrez les tours de couronne et les heures de port.',
    step3: 'Appuyez sur Calculer pour voir votre r\u00e9serve.',
    tipTitle: 'Astuce',
    tipContent: 'Les mouvements \u00e0 remontage manuel ne se chargent que lorsque vous tournez la couronne. Les mouvements automatiques se chargent \u00e9galement lorsque vous portez la montre.',
  },
  seo: [
    { type: 'title', text: 'Estimateur de R\u00e9serve de Marche \u2014 Quelle r\u00e9serve reste-t-il \u00e0 votre mouvement ?', level: 2 },
    { type: 'paragraph', html: 'Vous vous demandez combien d\u2019\u00e9nergie il reste \u00e0 votre montre m\u00e9canique\u00a0? Que vous ayez remont\u00e9 la couronne ce matin ou port\u00e9 la montre toute la journ\u00e9e, cet estimateur vous indique le niveau de charge approximatif et les heures restantes pour les calibres populaires comme <strong>ETA, Sellita, Miyota, Seiko et Rolex</strong>.' },
    { type: 'title', text: 'Comment fonctionne la r\u00e9serve de marche d\u2019une montre m\u00e9canique', level: 3 },
    { type: 'paragraph', html: 'La r\u00e9serve de marche est la quantit\u00e9 d\u2019\u00e9nergie emmagasin\u00e9e dans le ressort moteur. Lorsque vous remontez la couronne, vous tendez le ressort et stockez de l\u2019\u00e9nergie potentielle. Un rotor automatique tend \u00e9galement le ressort lorsque vous portez la montre. L\u2019\u00e9nergie se dissipe ensuite \u00e0 un rythme r\u00e9gulier \u2014 g\u00e9n\u00e9ralement 2\u20133\u00a0% par heure \u2014 jusqu\u2019\u00e0 ce que la montre s\u2019arr\u00eate.' },
    { type: 'title', text: 'Remontage manuel vs. Charge par rotor', level: 3 },
    { type: 'paragraph', html: 'Le remontage manuel via la couronne est le moyen le plus efficace de charger une montre\u00a0: chaque tour complet ajoute une quantit\u00e9 d\u2019\u00e9nergie pr\u00e9visible, g\u00e9n\u00e9ralement environ 2,5\u00a0% de la r\u00e9serve totale. Le port de la montre charge plus lentement et d\u00e9pend de votre niveau d\u2019activit\u00e9\u00a0: un employ\u00e9 de bureau peut charger 4\u20136\u00a0% par heure, tandis qu\u2019une personne active peut charger 8\u201310\u00a0%. Cet estimateur utilise une moyenne prudente.' },
    { type: 'title', text: 'Pourquoi l\u2019estimation de la r\u00e9serve de marche est importante', level: 3 },
    { type: 'paragraph', html: 'Conna\u00eetre le niveau de charge de votre montre permet d\u2019\u00e9viter les arr\u00eats inattendus. Si la montre s\u2019arr\u00eate pendant la nuit, elle a peut-\u00eatre besoin de plus de remontage avant le coucher, ou pas assez de temps de port. Utilisez cet outil pour comprendre vos habitudes de charge et garder votre automatique en marche.' },
  ],
  faq: [
    {
      question: 'Combien un tour de couronne charge-t-il la montre\u00a0?',
      answer: 'Cela d\u00e9pend du calibre. La plupart des calibres automatiques atteignent le plein remontage en 30\u201340 tours, donc chaque tour ajoute environ 2,5\u20133,3\u00a0% de la r\u00e9serve totale. Les mouvements \u00e0 remontage manuel comme l\u2019Unitas 6498 n\u00e9cessitent \u00e9galement environ 35 tours pour un plein remontage.',
    },
    {
      question: 'Porter la montre la charge-t-il autant que le remontage\u00a0?',
      answer: 'Le port charge plus lentement et de mani\u00e8re variable. Au bureau, vous pouvez charger 4\u20136\u00a0% par heure via le rotor. En mouvement actif (marche, sport), cela peut atteindre 8\u201310\u00a0% par heure. Le remontage manuel est plus rapide et plus pr\u00e9visible.',
    },
    {
      question: 'Quelle r\u00e9serve une montre perd-elle par heure\u00a0?',
      answer: 'La consommation est constante\u00a0: divisez 100 par la r\u00e9serve de marche en heures. Un calibre de 38 heures perd environ 2,6\u00a0% par heure, un 42 heures perd 2,4\u00a0% et un 70 heures perd environ 1,4\u00a0% par heure.',
    },
    {
      question: 'Puis-je trop remonter ma montre\u00a0?',
      answer: 'Les mouvements automatiques modernes sont \u00e9quip\u00e9s d\u2019un embrayage \u00e0 friction qui emp\u00eache le surremontage. Une fois le ressort moteur compl\u00e8tement tendu, les tours suppl\u00e9mentaires glissent simplement. Les mouvements \u00e0 remontage manuel ont \u00e9galement une but\u00e9e, mais forcer au-del\u00e0 peut endommager le ressort moteur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'S\u00e9lectionnez votre calibre',
      text: 'Choisissez le calibre de votre montre dans le menu d\u00e9roulant. S\u2019il n\u2019appara\u00eet pas, s\u00e9lectionnez Personnalis\u00e9 et saisissez sa r\u00e9serve de marche et ses tours jusqu\u2019\u00e0 plein.',
    },
    {
      name: 'Saisissez vos donn\u00e9es',
      text: 'Indiquez combien de tours de couronne vous avez effectu\u00e9s ou combien d\u2019heures vous avez port\u00e9 la montre aujourd\u2019hui. Vous pouvez remplir les deux pour une estimation combin\u00e9e.',
    },
    {
      name: 'Calculer',
      text: 'Appuyez sur le bouton Calculer. Le r\u00e9sultat affiche le pourcentage de charge estim\u00e9 et les heures restantes de r\u00e9serve de marche.',
    },
    {
      name: 'Ajustez vos habitudes',
      text: 'Utilisez les r\u00e9sultats pour d\u00e9cider si vous devez remonter davantage avant le coucher ou porter la montre plus longtemps dans la journ\u00e9e pour qu\u2019elle continue de fonctionner.',
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
            'text': 'Cela dépend du calibre. La plupart des calibres automatiques atteignent le plein remontage en 30–40 tours, donc chaque tour ajoute environ 2,5–3,3 % de la réserve totale. Les mouvements à remontage manuel comme l\'Unitas 6498 nécessitent également environ 35 tours pour un plein remontage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Porter la montre la charge-t-il autant que le remontage ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le port charge plus lentement et de manière variable. Au bureau, vous pouvez charger 4–6 % par heure via le rotor. En mouvement actif, cela peut atteindre 8–10 % par heure. Le remontage manuel est plus rapide et plus prévisible.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle réserve une montre perd-elle par heure ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La consommation est constante : divisez 100 par la réserve de marche en heures. Un calibre de 38 heures perd environ 2,6 % par heure, un 42 heures perd 2,4 % et un 70 heures perd environ 1,4 % par heure.',
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

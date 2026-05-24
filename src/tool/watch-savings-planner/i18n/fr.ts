import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planificateur-epargne-montre',
  title: 'Planificateur d\u2019\u00e9pargne pour montres',
  description: 'D\u00e9finissez et suivez des objectifs d\u2019\u00e9pargne pour votre prochain achat de montre. Visualisez les progr\u00e8s, calculez les d\u00e9lais et restez motiv\u00e9.',
  ui: {
    title: 'Param\u00e8tres de l\u2019objectif d\u2019\u00e9pargne',
    addGoalTitle: 'Nouvel objectif d\u2019\u00e9pargne',
    goalNameLabel: 'Montre',
    goalNamePlaceholder: 'p.ex. Rolex Submariner',
    targetPriceLabel: 'Prix cible',
    currentSavingsLabel: '\u00c9pargn\u00e9',
    monthlyLabel: 'Par mois',
    addButton: 'Ajouter un objectif',
    cancelButton: 'Annuler',
    goalsEmpty: 'Aucun objectif d\u2019\u00e9pargne pour le moment',
    goalsEmptySub: 'D\u00e9finissez votre premier objectif montre et commencez \u00e0 \u00e9pargner !',
    monthsToGoal: 'Temps restant',
    yearsToGoal: 'Ann\u00e9es restantes',
    month: 'mois',
    months: 'mois',
    year: 'an',
    totalSaved: 'Total \u00e9pargn\u00e9',
    totalGoals: 'Objectifs',
    achieved: 'Atteint',
    percentLabel: '\u00c9pargn\u00e9',
    deleteGoal: 'Supprimer',
    editGoal: 'Modifier',
    saveGoal: 'Enregistrer',
    currency: 'EUR',
    summaryTitle: 'R\u00e9sum\u00e9',
    goalAchieved: 'Atteint !',
    goalProgress: 'Progr\u00e8s',
    congratsTitle: 'F\u00e9licitations !',
    congratsDesc: 'Vous avez atteint votre objectif d\u2019\u00e9pargne !',
    monthlyContribution: 'Mensualit\u00e9',
    targetDate: 'Date cible',
    adjustMonthly: 'Ajuster le montant mensuel',
  },
  seo: [
    { type: 'title', text: 'Planificateur d\u2019\u00e9pargne pour montres \u2014 Suivez votre prochain achat', level: 2 },
    { type: 'paragraph', html: '\u00c9pargner pour une montre est un voyage. Que ce soit une <strong>Speedmaster vintage</strong>, une <strong>Submariner</strong> ou une <strong>Grand Seiko</strong>, un plan d\u2019\u00e9pargne clair transforme le r\u00eave en \u00e9ch\u00e9ancier. Cet outil vous aide \u00e0 visualiser votre progression, ajuster vos contributions mensuelles et voir exactement quand vous sortirez de la boutique avec votre graal.' },
    { type: 'title', text: 'Pourquoi un plan d\u2019\u00e9pargne est important pour les collectionneurs de montres', level: 3 },
    { type: 'paragraph', html: 'La collection de montres est un jeu de patience. Les prix des mod\u00e8les recherch\u00e9s augmentent r\u00e9guli\u00e8rement, et les achats impulsifs m\u00e8nent souvent \u00e0 des regrets. Une approche d\u2019\u00e9pargne structur\u00e9e vous garde disciplin\u00e9, \u00e9vite les tensions financi\u00e8res et rend l\u2019achat final m\u00e9rit\u00e9. De plus, suivre vos progr\u00e8s jour apr\u00e8s jour cr\u00e9e de l\u2019anticipation et rend le d\u00e9ballage encore plus agr\u00e9able.' },
    { type: 'title', text: 'Comment fixer des objectifs d\u2019\u00e9pargne r\u00e9alistes pour une montre', level: 3 },
    { type: 'paragraph', html: 'Commencez par le prix total, taxes et frais de port inclus. Divisez ensuite par le montant que vous pouvez mettre de c\u00f4t\u00e9 chaque mois sans difficult\u00e9. Une bonne r\u00e8gle consiste \u00e0 ne pas consacrer plus de <strong>10\u201315 % de vos revenus disponibles</strong> \u00e0 l\u2019\u00e9pargne pour une montre. Si le d\u00e9lai vous semble trop long, envisagez de le diviser en plus petites \u00e9tapes \u2014 ou explorez des alternatives plus abordables dans la m\u00eame famille de style.' },
    { type: 'title', text: 'La psychologie du suivi des objectifs', level: 3 },
    { type: 'paragraph', html: 'Le suivi visuel des progr\u00e8s d\u00e9clenche la lib\u00e9ration de dopamine, le m\u00eame neurotransmetteur qui rend la collection si gratifiante. Chaque fois que vous enregistrez une nouvelle contribution et que vous voyez l\u2019anneau de progression se remplir, vous renforcez l\u2019habitude. C\u2019est pourquoi de petites \u00e9pargnes r\u00e9guli\u00e8res fonctionnent souvent mieux que des d\u00e9p\u00f4ts importants et sporadiques \u2014 le rituel lui-m\u00eame fait partie de l\u2019exp\u00e9rience de collectionneur.' },
  ],
  faq: [
    {
      question: 'Combien devrais-je \u00e9pargner chaque mois pour une montre ?',
      answer: 'Visez 10\u201315 % de vos revenus mensuels disponibles. La cl\u00e9 est la r\u00e9gularit\u00e9 \u2014 m\u00eame 100 $ par mois repr\u00e9sentent 1 200 $ par an. Ajustez le montant en fonction de votre \u00e9ch\u00e9ance : des objectifs plus courts n\u00e9cessitent des contributions mensuelles plus \u00e9lev\u00e9es.',
    },
    {
      question: 'Dois-je \u00e9pargner pour une montre \u00e0 la fois ou pour plusieurs ?',
      answer: 'Une \u00e0 la fois est g\u00e9n\u00e9ralement plus efficace. La concentration cr\u00e9e de l\u2019\u00e9lan. Une fois votre premier objectif atteint, la confiance et la discipline se reportent sur le suivant. Cela dit, ce planificateur prend en charge plusieurs objectifs pour vous permettre de comparer les \u00e9ch\u00e9ances.',
    },
    {
      question: 'Que faire si le prix de la montre augmente pendant que j\u2019\u00e9pargne ?',
      answer: 'Bonne question. V\u00e9rifiez le prix du march\u00e9 actuel tous les deux ou trois mois et mettez \u00e0 jour votre objectif. Si les prix montent rapidement, envisagez d\u2019augmenter votre montant mensuel ou de raccourcir le d\u00e9lai pour verrouiller le prix actuel.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'D\u00e9finissez votre objectif',
      text: 'Entrez le nom de la montre et son prix total, taxes et frais de port inclus.',
    },
    {
      name: 'Suivez votre \u00e9pargne',
      text: 'Indiquez combien vous avez d\u00e9j\u00e0 \u00e9pargn\u00e9 et combien vous pouvez mettre de c\u00f4t\u00e9 chaque mois.',
    },
    {
      name: 'Surveillez vos progr\u00e8s',
      text: 'Regardez l\u2019anneau de progression se remplir \u00e0 mesure que vous mettez \u00e0 jour votre \u00e9pargne. Ajustez les montants mensuels \u00e0 tout moment.',
    },
    {
      name: 'C\u00e9l\u00e9brez',
      text: 'Quand l\u2019anneau atteint 100 %, vous avez atteint votre objectif. Il est temps d\u2019acheter cette montre !',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien devrais-je \u00e9pargner chaque mois pour une montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Visez 10\u201315 % de vos revenus mensuels disponibles. La cl\u00e9 est la r\u00e9gularit\u00e9 \u2014 m\u00eame 100 $ par mois repr\u00e9sentent 1 200 $ par an.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dois-je \u00e9pargner pour une montre \u00e0 la fois ou pour plusieurs ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une \u00e0 la fois est g\u00e9n\u00e9ralement plus efficace. La concentration cr\u00e9e de l\u2019\u00e9lan. Une fois votre premier objectif atteint, appliquez cette discipline au suivant.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si le prix de la montre augmente pendant que j\u2019\u00e9pargne ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'V\u00e9rifiez le prix du march\u00e9 actuel tous les deux ou trois mois et mettez \u00e0 jour votre objectif. Envisagez d\u2019augmenter votre montant mensuel si les prix montent rapidement.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planificateur d\u2019\u00e9pargne pour montres',
      'operatingSystem': 'Tous',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'N\u00e9cessite HTML5. N\u00e9cessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment \u00e9pargner pour l\u2019achat d\u2019une montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'D\u00e9finissez votre objectif',
          'text': 'Entrez le nom de la montre et son prix total, taxes et frais de port inclus.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Suivez votre \u00e9pargne',
          'text': 'Indiquez combien vous avez d\u00e9j\u00e0 \u00e9pargn\u00e9 et combien vous pouvez mettre de c\u00f4t\u00e9 chaque mois.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Surveillez vos progr\u00e8s',
          'text': 'Regardez l\u2019anneau de progression se remplir \u00e0 mesure que vous mettez \u00e0 jour votre \u00e9pargne.',
        },
        {
          '@type': 'HowToStep',
          'name': 'C\u00e9l\u00e9brez',
          'text': 'Quand l\u2019anneau atteint 100 %, vous avez atteint votre objectif. Il est temps d\u2019acheter cette montre !',
        },
      ],
    },
  ],
};

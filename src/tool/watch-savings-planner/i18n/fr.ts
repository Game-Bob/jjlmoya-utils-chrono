import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planificateur-epargne-montre',
  title: 'Planificateur d\'épargne pour montres',
  description: 'Définissez et suivez des objectifs d\'épargne pour votre prochain achat de montre. Visualisez les progrès, calculez les délais et restez motivé.',
  ui: {
    title: 'Paramètres de l\'objectif d\'épargne',
    addGoalTitle: 'Nouvel objectif d\'épargne',
    goalNameLabel: 'Montre',
    goalNamePlaceholder: 'p.ex. Rolex Submariner',
    targetPriceLabel: 'Prix cible',
    currentSavingsLabel: 'Épargné',
    monthlyLabel: 'Par mois',
    addButton: 'Ajouter un objectif',
    cancelButton: 'Annuler',
    goalsEmpty: 'Aucun objectif d\'épargne pour le moment',
    goalsEmptySub: 'Définissez votre premier objectif montre et commencez à épargner !',
    monthsToGoal: 'Temps restant',
    yearsToGoal: 'Années restantes',
    month: 'mois',
    months: 'mois',
    year: 'an',
    totalSaved: 'Total épargné',
    totalGoals: 'Objectifs',
    achieved: 'Atteint',
    percentLabel: 'Épargné',
    deleteGoal: 'Supprimer',
    editGoal: 'Modifier',
    saveGoal: 'Enregistrer',
    currency: 'EUR',
    summaryTitle: 'Résumé',
    goalAchieved: 'Atteint !',
    goalProgress: 'Progrès',
    congratsTitle: 'Félicitations !',
    congratsDesc: 'Vous avez atteint votre objectif d\'épargne !',
    monthlyContribution: 'Mensualité',
    targetDate: 'Date cible',
    adjustMonthly: 'Ajuster le montant mensuel',
  },
  seo: [
    { type: 'title', text: 'Planificateur d\'épargne pour montres - Suivez votre prochain achat', level: 2 },
    { type: 'paragraph', html: 'Épargner pour une montre est un voyage. Que ce soit une <strong>Speedmaster vintage</strong>, une <strong>Submariner</strong> ou une <strong>Grand Seiko</strong>, un plan d\'épargne clair transforme le rêve en échéancier. Cet outil vous aide à visualiser votre progression, ajuster vos contributions mensuelles et voir exactement quand vous sortirez de la boutique avec votre graal.' },
    { type: 'title', text: 'Pourquoi un plan d\'épargne est important pour les collectionneurs de montres', level: 3 },
    { type: 'paragraph', html: 'La collection de montres est un jeu de patience. Les prix des modèles recherchés augmentent régulièrement, et les achats impulsifs mènent souvent à des regrets. Une approche d\'épargne structurée vous garde discipliné, évite les tensions financières et rend l\'achat final mérité. De plus, suivre vos progrès jour après jour crée de l\'anticipation et rend le déballage encore plus agréable.' },
    { type: 'title', text: 'Comment fixer des objectifs d\'épargne réalistes pour une montre', level: 3 },
    { type: 'paragraph', html: 'Commencez par le prix total, taxes et frais de port inclus. Divisez ensuite par le montant que vous pouvez mettre de côté chaque mois sans difficulté. Une bonne règle consiste à ne pas consacrer plus de <strong>10-15 % de vos revenus disponibles</strong> à l\'épargne pour une montre. Si le délai vous semble trop long, envisagez de le diviser en plus petites étapes - ou explorez des alternatives plus abordables dans la même famille de style.' },
    { type: 'title', text: 'La psychologie du suivi des objectifs', level: 3 },
    { type: 'paragraph', html: 'Le suivi visuel des progrès déclenche la libération de dopamine, le même neurotransmetteur qui rend la collection si gratifiante. Chaque fois que vous enregistrez une nouvelle contribution et que vous voyez l\'anneau de progression se remplir, vous renforcez l\'habitude. C\'est pourquoi de petites épargnes régulières fonctionnent souvent mieux que des dépôts importants et sporadiques - le rituel lui-même fait partie de l\'expérience de collectionneur.' },
  ],
  faq: [
    {
      question: 'Combien devrais-je épargner chaque mois pour une montre ?',
      answer: 'Visez 10-15 % de vos revenus mensuels disponibles. La clé est la régularité - même 100 $ par mois représentent 1 200 $ par an. Ajustez le montant en fonction de votre échéance: des objectifs plus courts nécessitent des contributions mensuelles plus élevées.',
    },
    {
      question: 'Dois-je épargner pour une montre à la fois ou pour plusieurs ?',
      answer: 'Une à la fois est généralement plus efficace. La concentration crée de l\'élan. Une fois votre premier objectif atteint, la confiance et la discipline se reportent sur le suivant. Cela dit, ce planificateur prend en charge plusieurs objectifs pour vous permettre de comparer les échéances.',
    },
    {
      question: 'Que faire si le prix de la montre augmente pendant que j\'épargne ?',
      answer: 'Bonne question. Vérifiez le prix du marché actuel tous les deux ou trois mois et mettez à jour votre objectif. Si les prix montent rapidement, envisagez d\'augmenter votre montant mensuel ou de raccourcir le délai pour verrouiller le prix actuel.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Définissez votre objectif',
      text: 'Entrez le nom de la montre et son prix total, taxes et frais de port inclus.',
    },
    {
      name: 'Suivez votre épargne',
      text: 'Indiquez combien vous avez déjà épargné et combien vous pouvez mettre de côté chaque mois.',
    },
    {
      name: 'Surveillez vos progrès',
      text: 'Regardez l\'anneau de progression se remplir à mesure que vous mettez à jour votre épargne. Ajustez les montants mensuels à tout moment.',
    },
    {
      name: 'Célébrez',
      text: 'Quand l\'anneau atteint 100 %, vous avez atteint votre objectif. Il est temps d\'acheter cette montre !',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien devrais-je épargner chaque mois pour une montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Visez 10-15 % de vos revenus mensuels disponibles. La clé est la régularité - même 100 $ par mois représentent 1 200 $ par an.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dois-je épargner pour une montre à la fois ou pour plusieurs ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une à la fois est généralement plus efficace. La concentration crée de l\'élan. Une fois votre premier objectif atteint, appliquez cette discipline au suivant.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si le prix de la montre augmente pendant que j\'épargne ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vérifiez le prix du marché actuel tous les deux ou trois mois et mettez à jour votre objectif. Envisagez d\'augmenter votre montant mensuel si les prix montent rapidement.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planificateur d\'épargne pour montres',
      'operatingSystem': 'Tous',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment épargner pour l\'achat d\'une montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Définissez votre objectif',
          'text': 'Entrez le nom de la montre et son prix total, taxes et frais de port inclus.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Suivez votre épargne',
          'text': 'Indiquez combien vous avez déjà épargné et combien vous pouvez mettre de côté chaque mois.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Surveillez vos progrès',
          'text': 'Regardez l\'anneau de progression se remplir à mesure que vous mettez à jour votre épargne.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Célébrez',
          'text': 'Quand l\'anneau atteint 100 %, vous avez atteint votre objectif. Il est temps d\'acheter cette montre !',
        },
      ],
    },
  ],
};

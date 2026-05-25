import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'suivi-intervalle-entretien',
  title: 'Suivi des Intervalles d\'Entretien de Montres',
  description: 'Suivez et gérez les intervalles d\'entretien de votre collection de montres. Sachez en un coup d\'œil quand chaque montre doit être révisée.',
  ui: {
    title: 'Suivi d\'Entretien',
    addWatch: 'Ajouter une montre',
    editWatch: 'Modifier la montre',
    cancel: 'Annuler',
    save: 'Enregistrer',
    deleteWatch: 'Supprimer',
    confirmDelete: 'Supprimer cette montre de votre collection ?',
    emptyTitle: 'Votre collection est vide',
    emptyDesc: 'Suivez les intervalles d\'entretien de vos montres pour ne plus jamais manquer une révision.',
    emptyAction: 'Ajouter votre première montre',
    healthy: 'à jour',
    due: 'proche',
    overdue: 'dépassé',
    nameLabel: 'Nom de la montre',
    namePlaceholder: 'ex. Rolex Submariner',
    movementLabel: 'Type de mouvement',
    movementAuto: 'Automatique',
    movementManual: 'Manuel',
    movementQuartz: 'Quartz',
    movementKinetic: 'Kinetic',
    dateLabel: 'Date du dernier entretien',
    neverServiced: 'Neuve ou jamais révisée',
    lastServiceLabel: 'Dernier entretien',
    nextServiceLabel: 'Prochain entretien',
    serviced: 'Révisée le',
    newWatch: 'Neuve',
    years: 'ans',
    collectionHealth: 'Santé de la collection',
  },
  seo: [
    { type: 'title', text: 'Suivi des Intervalles d\'Entretien : Prenez soin de vos montres', level: 2 },
    { type: 'paragraph', html: 'Une montre mécanique est un instrument de précision comportant des centaines de pièces mobiles. Les lubrifiants sèchent, les joints s\'usent et la précision dérive avec le temps.' },
    { type: 'title', text: 'Pourquoi planifier les révisions de vos montres', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Automatique (3-5 ans)', definition: 'Le barillet, les inverseurs et les roulements du rotor subissent une friction constante. Les huiles usées épaississent.' },
        { term: 'Manuel (3-5 ans)', definition: 'Intervalle similaire aux automatiques. La tige et le mécanisme de remontoir sont sollicités à chaque remontage.' },
        { term: 'Quartz (5-10 ans)', definition: 'Moins de pièces d\'usure mais la pile peut couler et les joints doivent être changés pour garantir l\'étanchéité.' },
        { term: 'Kinetic (5 ans)', definition: 'Combine remontage automatique et précision du quartz. Le condensateur a une durée de vie limitée.' },
      ]
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence réviser une montre automatique ?',
      answer: 'La plupart des fabricants suggèrent un entretien tous les 3 à 5 ans. En pratique, beaucoup fonctionnent 5 à 7 ans sans problème. Faites-la réviser plus tôt en cas de dérive importante.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ajouter une montre', text: 'Saisissez le nom, le mouvement et la date de révision. Le système calcule la prochaine échéance.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'À quelle fréquence réviser une montre automatique ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart des fabricants suggèrent un entretien tous les 3 à 5 ans. En pratique, beaucoup fonctionnent 5 à 7 ans sans problème.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Suivi des Intervalles d\'Entretien de Montres',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Suivi des Intervalles d\'Entretien de Montres',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ajouter une montre',
          'text': 'Saisissez le nom, le mouvement et la date de révision.'
        }
      ]
    }
  ]
};

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
  {
    "type": "title",
    "text": "Suivi des intervalles d'entretien de montres",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Une montre mécanique nécessite un <strong>entretien régulier</strong> pour préserver sa précision et sa valeur."
  },
  {
    "type": "title",
    "text": "Intervalles recommandés par type de mouvement",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Automatique (3-5 ans)",
        "definition": "Le rotor de remontage automatique subit une usure continue."
      },
      {
        "term": "Remontage manuel (4-5 ans)",
        "definition": "Moins de pièces en mouvement mais les engrenages de couronne s'usent."
      },
      {
        "term": "Quartz (5-10 ans)",
        "definition": "Faible usure mécanique mais nécessite le changement de pile et de joints."
      },
      {
        "term": "Cinétique / Solaire (5-8 ans)",
        "definition": "L'accumulateur a une durée de vie limitée."
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Signes qu'une révision est nécessaire",
    "icon": "mdi:information",
    "badge": "ALERT",
    "html": "Si la montre dérive de plus de 15 secondes par jour ou présente de la buée, faites-la réviser rapidement."
  },
  {
    "type": "title",
    "text": "Gérez votre collection",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Ajoutez chaque montre de votre collection pour calculer automatiquement sa prochaine révision."
  }
],
  faq: [
  {
    "question": "À quelle fréquence faut-il réviser une montre automatique?",
    "answer": "Les fabricants recommandent un entretien tous les 3 à 5 ans. En pratique, beaucoup fonctionnent 5 à 7 ans sans problème."
  },
  {
    "question": "Les montres à quartz nécessitent-elles un entretien?",
    "answer": "Oui, la pile doit être remplacée tous les 2-3 ans pour éviter les fuites. Une révision complète des joints est conseillée tous les 5-10 ans."
  },
  {
    "question": "Que se passe-t-il si je ne révise jamais ma montre?",
    "answer": "Les lubrifiants sèchent, augmentant les frottements et l'usure des rouages. Cela entraîne des réparations coûteuses."
  },
  {
    "question": "Peut-on remonter trop fort une montre manuelle?",
    "answer": "Les montres manuelles modernes possèdent un butée nette en fin de remontage. Ne forcez pas la couronne."
  },
  {
    "question": "L'intervalle varie-t-il selon l'usage quotidien ou occasionnel?",
    "answer": "Oui, une montre portée quotidiennement s'use plus vite et nécessite un entretien tous les 3 ans."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Ajouter une montre",
    "text": "Entrez le nom, le mouvement et la date du dernier entretien."
  },
  {
    "name": "Consulter le tableau de bord",
    "text": "Chaque montre affiche une barre de progression avec un code couleur."
  },
  {
    "name": "Mettre à jour après entretien",
    "text": "Après révision, mettez à jour la date pour réinitialiser le cycle."
  }
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

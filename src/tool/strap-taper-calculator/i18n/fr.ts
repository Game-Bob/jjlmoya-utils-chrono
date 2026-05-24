import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'calculatrice-conicite-bracelet',
  title: 'Calculateur de conicité et proportions de bracelet de montre',
  description: 'Calculez la conicité idéale du bracelet pour votre montre en fonction du diamètre du boîtier et de l\'entrecorne. Trouvez la largeur de boucle parfaite pour un look équilibré.',
  ui: {
    title: 'Calculateur de conicité de bracelet',
    caseLabel: 'Dimensions de la montre',
    caseInput: 'Diamètre du boîtier',
    lugLabel: 'Entrecorne',
    lugInput: 'Entrecorne',
    taperLabel: 'Style de conicité',
    straight: 'Droit',
    classic: 'Classique',
    aggressive: 'Marqué',
    customTaper: 'Personnalisé',
    buckleWidth: 'Largeur de boucle',
    resultsTitle: 'Proportions',
    lugWidth: 'Entrecorne',
    buckleWidthResult: 'Largeur de boucle',
    taperAmount: 'Conicité',
    taperRatio: 'Ratio',
    proportionScore: 'Proportion',
    proportionExcellent: 'Excellent',
    proportionGood: 'Bon',
    proportionFair: 'Correct',
    proportionUnbalanced: 'Déséquilibré',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: 'Remarque',
    noteContent: 'Une conicité classique de 4 mm (p. ex., de 20 à 16 mm) convient aux montres habillées. Les montres de plongée et les montres-outils sont souvent plus belles avec une conicité droite ou de 2 mm pour un aspect robuste.',
    step1: 'Entrez le diamètre du boîtier et l\'entrecorne.',
    step2: 'Choisissez un style de conicité ou définissez une largeur de boucle personnalisée.',
    step3: 'Consultez les proportions et la représentation visuelle.',
  },
  seo: [
    { type: 'title', text: 'Calculateur de conicité de bracelet \u2014 Proportions, largeur de boucle et guide visuel', level: 2 },
    { type: 'paragraph', html: 'Un bracelet bien proportionné peut faire ou défaire une montre. Trop de conicité sur une plongeuse la rend fragile. Pas de conicité sur une montre habillée la rend grossière. Ce calculateur vous aide à trouver le <strong>ratio de conicité</strong> idéal selon le diamètre de votre boîtier et votre entrecorne.' },
    { type: 'title', text: 'Qu\'est-ce que la conicité d\'un bracelet?', level: 3 },
    { type: 'paragraph', html: 'La conicité d\'un bracelet est la réduction de largeur entre l\'entrecorne et la boucle. Une montre habillée classique peut passer de 20 mm aux cornes à 16 mm à la boucle \u2014 une conicité de 4 mm. Une montre de plongée peut rester à 20 mm droit pour un aspect plus utilitaire.' },
    { type: 'title', text: 'Le ratio idéal pour les proportions du bracelet', level: 3 },
    { type: 'paragraph', html: 'Les passionnés de montres s\'accordent généralement à dire qu\'un entrecorne entre 45 % et 55 % du diamètre du boîtier est le plus flatteur. Pour la conicité, une largeur de boucle entre 75 % et 85 % de l\'entrecorne crée une silhouette équilibrée et élégante. Les ratios en dehors de cette plage peuvent donner l\'impression que la montre est trop lourde ou trop fragile.' },
    { type: 'title', text: 'Conicité selon le style de montre', level: 3 },
    { type: 'paragraph', html: 'Montres habillées : conicité de 4 mm (20 à 16 mm). Montres sportives : conicité de 2 à 3 mm. Montres de plongée : conicité de 0 à 2 mm. Montres militaires ou de terrain : conicité droite pour un look robuste. Montres de pilote : conicité minimale pour correspondre à l\'esthétique d\'instrument.' },
  ],
  faq: [
    {
      question: 'Quelle est la conicité idéale pour une montre habillée?',
      answer: 'Une conicité de 4 mm est le choix classique. Pour un entrecorne de 20 mm, cela signifie une boucle de 16 mm. Cela crée une silhouette élégante qui complète le look raffiné d\'une montre habillée.',
    },
    {
      question: 'Une montre de plongée devrait-elle avoir un bracelet conique?',
      answer: 'La plupart des montres de plongée sont plus belles avec une conicité minimale ou nulle. Un bracelet droit de 20 mm sur toute sa longueur donne une sensation robuste d\'outil qui correspond à la nature utilitaire des plongeuses.',
    },
    {
      question: 'Que se passe-t-il si la conicité est trop marquée?',
      answer: 'Une conicité marquée (6 mm ou plus) peut donner l\'impression que le boîtier est disproportionné et trop lourd. Le bracelet peut également sembler fragile au niveau de la boucle.',
    },
    {
      question: 'Comment mesure-t-on l\'entrecorne?',
      answer: 'Mesurez la largeur intérieure entre les trous de barre à ressort sur le boîtier. C\'est la largeur de bracelet dont vous avez besoin. Les tailles courantes sont 18 mm, 20 mm et 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Saisissez les dimensions du boîtier et des cornes',
      text: 'Entrez le diamètre du boîtier et l\'entrecorne en millimètres.',
    },
    {
      name: 'Choisissez un style de conicité',
      text: 'Sélectionnez Droit, Classique, Marqué ou Personnalisé. Le visuel se met à jour instantanément.',
    },
    {
      name: 'Consultez les proportions',
      text: 'Vérifiez le ratio et le score de proportion pour voir si votre choix de bracelet est équilibré.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quelle est la conicité idéale pour une montre habillée?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une conicité de 4 mm est le choix classique. Pour un entrecorne de 20 mm, cela donne une boucle de 16 mm, créant une silhouette élégante.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Une montre de plongée devrait-elle avoir un bracelet conique?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart des montres de plongée sont plus belles avec une conicité minimale ou nulle. Un bracelet droit de 20 mm donne une sensation robuste d\'outil.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que se passe-t-il si la conicité est trop marquée?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une conicité marquée peut donner l\'impression que le boîtier est disproportionné et le bracelet peut sembler fragile au niveau de la boucle.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment mesure-t-on l\'entrecorne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mesurez la largeur intérieure entre les trous de barre à ressort. Les tailles courantes sont 18 mm, 20 mm et 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur de conicité de bracelet de montre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment calculer la conicité du bracelet d\'une montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Saisissez les dimensions du boîtier et des cornes',
          'text': 'Entrez le diamètre du boîtier et l\'entrecorne en millimètres.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Choisissez un style de conicité',
          'text': 'Sélectionnez Droit, Classique, Marqué ou Personnalisé.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Consultez les proportions',
          'text': 'Vérifiez le ratio et le score de proportion.',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'calculateur-presence-poignet',
  title: 'Calculateur de Présence au Poignet et de Taille de Montre',
  description: 'Calculez le ratio boîtier-poignet, la couverture plate du poignet et déterminez la taille de montre idéale selon des critères esthétiques.',
  ui: {
    title: 'Paramètres de Taille',
    wristCircumferenceLabel: 'Tour de Poignet',
    caseDiameterLabel: 'Diamètre du Boîtier',
    lugToLugLabel: 'Entraxe des Cornes',
    wristWidthLabel: 'Largeur Plate du Poignet',
    autoEstimateWidthLabel: 'Estimer automatiquement la largeur plate (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Analyse du Port au Poignet',
    caseWristRatioLabel: 'Ratio Boîtier-Poignet',
    wristCoverageLabel: 'Couverture du Poignet',
    verdictLabel: 'Verdict',
    verdictOversized: 'Boîtier Surdimensionné',
    verdictBold: 'Port Moderne / Affirmé',
    verdictGolden: 'Port Classique / Idéal',
    verdictVintage: 'Vintage / Trop Petit',
    coverageSafe: 'Port Équilibré',
    coverageBold: 'Port Affirmé',
    coverageOverhang: 'Dépassement des Cornes',
    sweetSpotTitle: 'Style de Port',
    sweetSpotDesc: 'La zone idéale représente le rendu visuel le plus équilibré.',
    minClassicLabel: 'Port Vintage / Classique',
    sweetSpotLabel: 'Zone Esthétique Idéale',
    maxBoldLabel: 'Port Moderne / Affirmé',
    maxLugToLugLabel: 'Entraxe Maximum Recommandé',
    idealSizesTitle: 'Guide des Tailles Idéales',
    visualizerTitle: 'Simulateur en Direct',
    wristWidthHelp: 'Estimation basée sur la forme du poignet.',
    estimatedLabel: 'estimé',
    customLabel: 'Poignet',
  },
  seo: [
    { type: 'title', text: 'Comment choisir la taille de montre parfaite: le guide des proportions', level: 2 },
    { type: 'paragraph', html: 'Trouver la bonne taille de montre est un équilibre entre mathématiques, géométrie et style personnel. En horlogerie, la façon dont une pièce se pose sur le poignet se nomme la <strong>présence au poignet</strong>. Une montre doit paraître équilibrée-ni dominer le bras avec un dépassement disgracieux, ni disparaître comme un minuscule point. Pour atteindre cet équilibre, les collectionneurs analysent trois métriques: le diamètre du boîtier, l\'entraxe des cornes et la forme du poignet.' },
    { type: 'title', text: 'Comprendre le ratio boîtier-poignet', level: 3 },
    { type: 'paragraph', html: 'Le ratio boîtier-poignet est une méthode classique pour évaluer les proportions d\'une montre. Il s\'obtient en divisant le tour de poignet en millimètres par le diamètre du boîtier. Des ratios entre <strong>4,5 et 5,0</strong> correspondent à la zone idéale traditionnelle. De <strong>4,0 à 4,5</strong>, le rendu est moderne et sportif. Au-dessus de 5,0, l\'esthétique vintage prime, et en dessous de 4,0, le boîtier paraît surdimensionné.' },
    { type: 'title', text: 'Pourquoi l\'entraxe des cornes prime sur le diamètre', level: 3 },
    { type: 'paragraph', html: 'Si le diamètre du boîtier retient toute l\'attention, c\'est l\'<strong>entraxe des cornes</strong> (la longueur verticale entre les extrémités des cornes) qui constitue le vrai test du port. La règle d\'or: l\'entraxe ne doit jamais dépasser la largeur plate du poignet. Si les cornes dépassent les bords, la montre glisse, un espace se crée entre le bracelet et la peau, et le rendu visuel est raté.' },
    { type: 'title', text: 'Poignets plats vs. ronds: choisir selon son anatomie', level: 3 },
    { type: 'paragraph', html: 'Le tour de poignet ne raconte qu\'une partie de l\'histoire. Des poignets de même circonférence peuvent avoir des sections transversales différentes: plate ou ronde. Les poignets plats offrent une surface supérieure plus large et supportent de plus grands entraxes sans dépassement. Les poignets ronds, plus cylindriques, ont une surface supérieure plus étroite et nécessitent des entraxes plus courts pour éviter le dépassement.' },
  ],
  faq: [
    {
      question: 'Quel est le ratio boîtier-poignet idéal ?',
      answer: 'Le ratio idéal se situe entre 4,0 et 5,0. Un ratio de 4,5 représente la zone dorée de l\'horlogerie classique. Entre 4,0 et 4,5, la montre affiche une présence moderne et affirmée ; au-dessus de 5,0, elle convient davantage au style vintage ; en dessous de 4,0, le boîtier paraît surdimensionné.',
    },
    {
      question: 'Pourquoi l\'entraxe des cornes importe-t-il plus que le diamètre ?',
      answer: 'Le diamètre mesure seulement la largeur du cadran. L\'entraxe définit la longueur totale de la montre sur le poignet. S\'il dépasse la largeur plate du poignet, les cornes débordent, le bracelet tombe à la verticale et la montre paraît instable et disproportionnée.',
    },
    {
      question: 'Comment les poignets plats ou ronds influencent-ils le port ?',
      answer: 'Deux poignets de même circonférence (par exemple 17 cm) peuvent porter une montre très différemment. Un poignet plat dispose d\'une surface supérieure plus large et peut accueillir des entraxes plus grands sans dépassement. Un poignet rond est plus étroit en surface et nécessite des entraxes plus courts pour un port stable.',
    },
    {
      question: 'Comment l\'épaisseur et la largeur de la lunette modifient-elles la taille visuelle ?',
      answer: 'Les montres à lunette très fine (comme les montres habillées) ont une surface de cadran plus grande et paraissent plus grandes qu\'elles ne le sont. Les montres de plongée à large lunette tournante ont un cadran plus petit et semblent plus compactes. De même, les montres de plus de 13 mm d\'épaisseur paraissent plus imposantes et plus lourdes visuellement.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mesurer son poignet',
      text: 'Entourez votre poignet avec un mètre ruban souple pour obtenir votre circonférence en cm ou en pouces.',
    },
    {
      name: 'Saisir les dimensions de la montre',
      text: 'Entrez le diamètre du boîtier et l\'entraxe des cornes de la montre que vous souhaitez évaluer.',
    },
    {
      name: 'Analyser le port et le simulateur',
      text: 'Vérifiez le ratio boîtier-poignet, l\'alerte de dépassement des cornes et observez le diagramme en temps réel.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quel est le ratio boîtier-poignet idéal ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le ratio idéal se situe entre 4,0 et 5,0. Un ratio de 4,5 représente la zone dorée de l\'horlogerie classique. Entre 4,0 et 4,5, la montre affiche une présence moderne et affirmée ; au-dessus de 5,0, elle convient davantage au style vintage ; en dessous de 4,0, le boîtier paraît surdimensionné.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Pourquoi l\'entraxe des cornes importe-t-il plus que le diamètre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le diamètre mesure seulement la largeur du cadran. L\'entraxe définit la longueur totale de la montre sur le poignet. S\'il dépasse la largeur plate du poignet, les cornes débordent, le bracelet tombe à la verticale et la montre paraît instable et disproportionnée.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur de Présence au Poignet et de Taille de Montre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment déterminer la taille de montre parfaite',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Mesurer son poignet',
          'text': 'Entourez votre poignet avec un mètre ruban souple pour obtenir votre circonférence en cm ou en pouces.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Saisir les dimensions de la montre',
          'text': 'Entrez le diamètre du boîtier et l\'entraxe des cornes de la montre que vous souhaitez évaluer.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analyser le port et le simulateur',
          'text': 'Vérifiez le ratio boîtier-poignet, l\'alerte de dépassement des cornes et observez le diagramme en temps réel.'
        }
      ]
    }
  ]
};

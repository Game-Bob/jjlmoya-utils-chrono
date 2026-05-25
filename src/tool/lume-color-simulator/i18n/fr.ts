import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'simulateur-de-couleur-de-lume',
  title: 'Simulateur de Couleur de Lume — Visualiseur de Luminescence',
  description: 'Visualisez différentes couleurs de lume en temps réel. Comparez C1, C3, BGW9, LumiNova et bien d\'autres à différents niveaux de luminosité ambiante.',
  ui: {
    title: 'Simulateur de Couleur de Lume',
    lumeType: 'Type de Lume',
    brightness: 'Luminosité ambiante',
    dark: 'Sombre',
    light: 'Clair',
    color: 'Couleur',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Type',
    description: 'Description',
    c1Name: 'C1',
    c1Desc: 'Vert (classique)',
    c3Name: 'C3',
    c3Desc: 'Super Vert',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Bleu Glacé',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Blanc Chaud',
    vintageName: 'Vintage',
    vintageDesc: 'Radium Vieilli',
    orangeName: 'Orange',
    orangeDesc: 'Orange Plongée',
    blueName: 'Bleu',
    blueDesc: 'Bleu Profond',
    greenName: 'Vert',
    greenDesc: 'Vert Néon',
    tipTitle: 'Astuce',
    tipContent: 'La luminosité du lume dépend de la qualité du pigment et de la quantité de lumière absorbée. Le BGW9 brille en bleu-blanc et est le plus lumineux, tandis que le lume vintage a une lueur chaude et tamisée.',
  },
  seo: [
    { type: 'title', text: 'Simulateur de Couleur de Lume — Visualiseur de Luminescence en Temps Réel', level: 2 },
    { type: 'paragraph', html: 'Le lume est l\'un des choix les plus personnels dans la collection de montres. Préférez-vous la lueur verte classique du <strong>C1 Super-LumiNova</strong> ou le bleu glacé du <strong>BGW9</strong>&nbsp;? Ce simulateur vous montre l\'apparence de chaque type de lume à différents niveaux de luminosité, du plein jour à l\'obscurité totale, avec les <strong>valeurs HEX et RVB</strong> exactes pour chaque nuance.' },
    { type: 'title', text: 'Comparaison des Types de Super-LumiNova', level: 3 },
    {
      type: 'table', headers: ['Type', 'Couleur de jour', 'Couleur luminescente', 'Luminosité', 'Idéal pour'], rows: [
        ['C1', 'Vert clair', 'Vert', 'Moyenne', 'Montres habillées, esthétique originale'],
        ['C3', 'Jaune-vert', 'Vert vif', 'Maximale', 'Montres de plongée, montres outils'],
        ['BGW9', 'Blanc cassé', 'Bleu glacé', 'Élevée', 'Montres sport modernes, look épuré'],
        ['LumiNova', 'Beige chaud', 'Blanc chaud', 'Faible-moyenne', 'Lume économique'],
        ['Vintage', 'Crème / fauve', 'Tamisé chaud', 'Faible', 'Montres style héritage'],
        ['Orange', 'Orange', 'Orange', 'Moyenne', 'Accents de plongée, plongeuses rétro'],
        ['Bleu', 'Bleu clair', 'Bleu', 'Moyenne', 'Cadrans design, montres de mode'],
        ['Vert', 'Vert vif', 'Vert', 'Élevée', 'Montres style militaire'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 — Lequel Choisir&nbsp;?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Vert Classique', icon: 'mdi:lightbulb-on', description: 'La formulation originale Super-LumiNova. Brille en vert avec une luminosité moyenne. Un choix classique et sûr qui fonctionne avec tous les styles de montres.', points: ['Luminosité moyenne, visibilité 4-6 h', 'Lueur verte, ton chaud', 'Formulation la plus abordable', 'Courante dans les montres d\'entrée de gamme'], highlight: false },
        { title: 'C3 Super Vert', icon: 'mdi:lightning-bolt', description: 'Le lume vert le plus lumineux disponible. Utilisé dans les montres de plongée professionnelles où la lisibilité sous l\'eau est cruciale. Lueur maximale pour une charge minimale.', points: ['Luminosité maximale, visibilité 8-12 h', 'Jaune-vert à la lumière du jour', 'Préféré par Seiko, Citizen, Omega', 'Meilleur pour la lisibilité en faible luminosité'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Bleu Glacé', icon: 'mdi:snowflake', description: 'Brille en bleu-blanc plutôt qu\'en vert. Légèrement moins lumineux que le C3 mais préféré pour son esthétique propre et moderne. Populaire dans les montres sport de luxe.', points: ['Luminosité élevée, visibilité 6-10 h', 'Lueur bleu-blanc, ton neutre', 'Look propre et moderne de jour', 'Utilisé par Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Style Radium', icon: 'mdi:fire', description: 'Ton beige/crème chaud qui imite le lume au radium des années 1960. Volontairement plus tamisé pour l\'authenticité esthétique. La lueur est chaude, subtile et vieillit magnifiquement.', points: ['Faible luminosité, visibilité 2-4 h', 'Crème chaud à ambre tamisé', 'Aspect vieilli sans radioactivité', 'Populaire dans les rééditions heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'La Luminosité n\'est Pas Tout', icon: 'mdi:palette', html: 'Le lume le plus lumineux (C3) n\'est pas toujours le meilleur choix. Le <strong>BGW9</strong> échange une petite différence de luminosité contre un look plus neutre et moderne que de nombreux collectionneurs préfèrent. Le <strong>lume vintage</strong> privilégie l\'esthétique d\'époque à la performance. Choisissez selon ce qui compte le plus pour vous&nbsp;: <strong>lueur maximale, esthétique moderne ou authenticité patrimoniale.</strong>' },
    { type: 'title', text: 'Comment Fonctionne le Lume&nbsp;: La Science Derrière la Lueur', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Un pigment photoluminescent à base d\'aluminate de strontium. Il absorbe les UV et la lumière visible et les réémet sous forme de lueur. Non radioactif et sûr. Développé à l\'origine par Nemoto & Co. en 1993.' },
        { term: 'Temps de charge', definition: 'La durée d\'exposition à la lumière nécessaire pour saturer le pigment luminescent. Une charge complète prend 10 à 30 minutes sous lumière directe du soleil ou UV. Plus la charge est longue, plus la lueur est longue et brillante.' },
        { term: 'Durée de lueur', definition: 'La durée pendant laquelle le lume reste visible après la charge. Un Super-LumiNova de qualité brille visiblement pendant 6 à 12 heures. La période la plus lumineuse est la première demi-heure après la charge.' },
        { term: 'Qualité du pigment', definition: 'La qualité des cristaux d\'aluminate de strontium. Les pigments de qualité supérieure (C3, BGW9) utilisent des cristaux plus gros et plus uniformes pour une lueur plus brillante et plus longue. Les qualités inférieures (LumiNova) utilisent des cristaux plus petits et sont plus tamisées.' },
      ]
    },
    {
      type: 'summary', title: 'Guide Rapide de Sélection du Lume', items: [
        'Pour une lisibilité maximale dans l\'obscurité&nbsp;: choisissez le C3 (vert le plus lumineux) ou le BGW9 (bleu-blanc le plus lumineux).',
        'Pour un look luxe moderne&nbsp;: le BGW9 est actuellement le favori des grandes marques horlogères.',
        'Pour les montres vintage/héritage&nbsp;: utilisez le Vintage ou l\'Orange pour une chaleur d\'époque.',
        'Le C1 est le polyvalent&nbsp;: bonne luminosité, vert classique, abordable.',
        'La couleur du lume de jour diffère considérablement de la couleur luminescente — utilisez le simulateur pour comparer les deux.',
      ]
    },
  ],
  faq: [
    {
      question: 'Quel lume est le plus lumineux&nbsp;?',
      answer: 'Le C3 Super-LumiNova est la formulation verte la plus lumineuse. Le BGW9 est le plus lumineux en bleu-blanc. Les deux sont nettement plus lumineux que le C1 ou le LumiNova standard.',
    },
    {
      question: 'Qu\'est-ce que le lume BGW9&nbsp;?',
      answer: 'Le BGW9 est une variante du Super-LumiNova qui brille en bleu-blanc plutôt qu\'en vert. Il est légèrement moins lumineux que le C3 mais préféré par beaucoup pour son aspect propre et moderne.',
    },
    {
      question: 'Le lume vintage brille-t-il&nbsp;?',
      answer: 'Le lume vintage moderne (beige/chaud) brille mais est volontairement plus tamisé pour imiter le radium vieilli. Le compromis est l\'authenticité esthétique au détriment de la luminosité maximale.',
    },
    {
      question: 'Combien de temps dure le lume&nbsp;?',
      answer: 'Après une charge complète sous une lumière vive, un Super-LumiNova de qualité brille visiblement pendant 6 à 12 heures. La période la plus lumineuse est la première demi-heure.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Sélectionnez un type de lume',
      text: 'Choisissez parmi les préréglages C1, C3, BGW9, LumiNova, Vintage, Orange, Bleu ou Vert.',
    },
    {
      name: 'Ajustez la luminosité',
      text: 'Faites glisser le curseur de luminosité ambiante du jour (gauche) à la nuit (droite) pour voir le comportement du lume.',
    },
    {
      name: 'Lisez les caractéristiques',
      text: 'La fiche d\'information affiche les valeurs HEX et RVB exactes de la couleur actuelle.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quel lume est le plus lumineux&nbsp;?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Le C3 Super-LumiNova est le vert le plus lumineux. Le BGW9 est le bleu-blanc le plus lumineux.' },
        },
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce que le lume BGW9&nbsp;?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Le BGW9 est une variante du Super-LumiNova qui brille en bleu-blanc plutôt qu\'en vert.' },
        },
        {
          '@type': 'Question',
          'name': 'Le lume vintage brille-t-il&nbsp;?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Le lume vintage moderne brille mais est volontairement plus tamisé pour imiter le radium vieilli.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Simulateur de Couleur de Lume',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment simuler les couleurs de lume',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Sélectionnez un type de lume',
          'text': 'Choisissez parmi C1, C3, BGW9, LumiNova ou d\'autres préréglages.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajustez la luminosité',
          'text': 'Faites glisser la luminosité du jour à la nuit pour voir le comportement du lume.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez les caractéristiques',
          'text': 'La fiche d\'information affiche les valeurs HEX et RVB de la couleur actuelle.',
        },
      ],
    },
  ],
};

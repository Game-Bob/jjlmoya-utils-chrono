import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'comparateur-de-taille-de-montre',
  title: 'Comparateur de Taille de Montre — Ajustement Visuel au Poignet',
  description: 'Comparez visuellement les tailles de boîtiers de montres. Entrez le diamètre, la corne-à-corne et votre tour de poignet pour voir comment une montre vous ira avant de l\'acheter.',
  ui: {
    title: 'Comparateur de Taille de Montre',
    addWatch: 'Ajouter une montre',
    watchName: 'Nom de la montre',
    watchNamePlaceholder: 'ex. Rolex Submariner',
    caseDiameter: 'Diamètre du boîtier',
    lugToLug: 'Corne-à-Corne',
    thickness: 'Épaisseur',
    wristSize: 'Tour de poignet',
    wristSizePlaceholder: 'ex. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Supprimer',
    yourWatches: 'Mes montres',
    fitLegend: 'Légende d\'ajustement',
    excellentFit: 'Excellent',
    goodFit: 'Bon',
    borderlineFit: 'Limite',
    largeFit: 'Trop grand',
    wristCurve: 'poignet',
    nameRequired: 'Saisissez un nom de montre',
    watchTooLarge: 'La montre dépasse le poignet',
    l2lExceedsWrist: 'La corne-à-corne dépasse la largeur du poignet',
    excellentDesc: 'Proportionnée — la corne-à-corne reste bien dans les limites du poignet.',
    goodDesc: 'Bon ajustement — dépasse légèrement mais reste confortable.',
    borderlineDesc: 'Limite — les cornes approchent du bord du poignet.',
    largeDesc: 'Trop grand — les cornes dépassent probablement du poignet.',
    fitsWell: 'Bien ajusté',
    slightlyLarge: 'Un peu grand',
    tooLarge: 'Trop grand',
    source: 'Guide des tailles',
    estimateNote: 'Saisissez les dimensions et ajoutez une montre pour voir comment elle s\'ajuste à votre poignet.',
  },
  seo: [
    { type: 'title', text: 'Comparateur de Taille de Montre — Ajustement Visuel au Poignet', level: 2 },
    { type: 'paragraph', html: 'Vous vous demandez si une <strong>montre de 42 mm</strong> ira à votre <strong>poignet de 17 cm</strong>&nbsp;? Ou si cette corne-à-corne de 48 mm dépassera&nbsp;? Le Comparateur de Taille de Montre vous donne une réponse visuelle. Entrez le diamètre du boîtier, la corne-à-corne, l\'épaisseur et votre tour de poignet — l\'outil dessine la montre à l\'échelle et colore l\'ajustement du <span style="color:#22c55e">vert (excellent)</span> au <span style="color:#ef4444">rouge (trop grand)</span>. Fonctionne en <strong>unités métriques et impériales</strong>.' },
    { type: 'title', text: 'Glossaire des Tailles de Montre', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Diamètre du boîtier', definition: 'La largeur du boîtier mesurée en travers du cadran, excluant la couronne. Plage typique&nbsp;: 34–46 mm. La mesure la plus couramment citée, mais pas le seul facteur d\'ajustement.' },
        { term: 'Corne-à-Corne (CàC)', definition: 'La distance entre les cornes supérieure et inférieure où s\'attache le bracelet. Cela détermine si la montre dépasse du poignet. Une montre de 40 mm avec une CàC de 50 mm porte plus grand qu\'une 42 mm avec une CàC de 46 mm.' },
        { term: 'Largeur plate du poignet', definition: 'La largeur de la surface supérieure de votre poignet, par opposition à sa circonférence. Approximativement circonférence du poignet / π moins 2–4 cm. C\'est la dimension sur laquelle repose réellement votre montre.' },
        { term: 'Rapport boîtier-poignet', definition: 'Diamètre du boîtier divisé par la largeur du poignet. Un rapport de 0,6–0,75 (60–75 %) est considéré comme l\'ajustement proportionné classique.' },
      ]
    },

    { type: 'title', text: 'Quelle Taille de Montre pour Mon Poignet&nbsp;?', level: 3 },
    {
      type: 'table', headers: ['Tour de poignet', 'Largeur plate (approx.)', 'Diamètre idéal', 'Corne-à-Corne max', 'Idéal pour'], rows: [
        ['14–15 cm (5,5–5,9 in)', '38–42 mm', '30–34 mm', '38–42 mm', 'Montres vintage & habillées'],
        ['15–16 cm (5,9–6,3 in)', '40–44 mm', '34–36 mm', '40–44 mm', 'Petites montres classiques'],
        ['16–17 cm (6,3–6,7 in)', '42–46 mm', '36–39 mm', '42–46 mm', 'Taille polyvalente quotidienne'],
        ['17–18 cm (6,7–7,1 in)', '44–48 mm', '38–42 mm', '44–48 mm', 'Le point idéal pour la plupart des marques'],
        ['18–19 cm (7,1–7,5 in)', '46–50 mm', '40–44 mm', '46–50 mm', 'Montres de plongée & GMT'],
        ['19–20 cm (7,5–7,9 in)', '48–52 mm', '42–46 mm', '48–52 mm', 'Montres outils & pilotes'],
        ['20–21 cm (7,9–8,3 in)', '50–54 mm', '44–48 mm', '50–54 mm', 'Montres oversized & flieger'],
      ]
    },

    { type: 'title', text: 'Comment Mesurer Votre Poignet pour une Montre', level: 3 },
    {
      type: 'list', items: [
        'Enroulez un mètre ruban flexible autour de votre poignet juste derrière l\'os du poignet (styloïde cubitale). Il doit être ajusté mais pas serré.',
        'Si vous n\'avez pas de mètre, utilisez une ficelle ou un câble, marquez le chevauchement, puis mesurez-le contre une règle.',
        'Notez la mesure en centimètres ou en pouces. Les poignets masculins moyens mesurent 17–19 cm (6,7–7,5 in) ; les poignets féminins moyens 14–16 cm (5,5–6,3 in).',
        'Pour estimer la largeur plate de votre poignet, soustrayez 2–4 cm de la circonférence ou utilisez la fonction d\'estimation automatique de l\'outil.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'La Corne–à–Corne est la Véritable Limite', icon: 'mdi:ruler', html: 'La plupart des gens se concentrent sur le <strong>diamètre du boîtier</strong>, mais c\'est la <strong>corne-à-corne</strong> qui détermine si une montre vous va. Une montre avec une CàC de 48 mm sur un poignet plat de 55 mm (17 cm de tour) occupe 87 % de la largeur du poignet. Au-delà de 65 %, les cornes commencent à approcher du bord du poignet. <strong>Vérifiez toujours la CàC en premier.</strong>' },

    { type: 'tip', title: 'cm ou Pouces&nbsp;? Utilisez Ce Que Vous Connaissez', html: 'L\'outil prend désormais en charge les unités métriques et impériales. Mesurez votre poignet dans le système que vous utilisez au quotidien. Les dimensions des boîtiers de montres sont <strong>toujours en millimètres</strong> (même aux États-Unis), donc les diamètres et la CàC restent en mm — seule la mesure du poignet change. Cela correspond au fonctionnement de l\'industrie horlogère.' },

    {
      type: 'summary', title: 'Checklist Rapide Avant d\'Acheter', items: [
        'Mesurez votre tour de poignet et saisissez-le dans l\'outil.',
        'Consultez la corne-à-corne de la montre — pas seulement le diamètre du boîtier.',
        'La montre devrait occuper 60–75 % de la largeur plate de votre poignet pour un ajustement classique.',
        'Si les cornes dépassent des bords de votre poignet, la montre semblera trop grande quel que soit le diamètre.',
        'Utilisez l\'outil pour comparer plusieurs montres côte à côte avant de prendre une décision d\'achat.',
      ]
    },
  ],
  faq: [
    {
      question: 'Comment mesurer mon poignet pour une montre&nbsp;?',
      answer: 'Utilisez un mètre ruban flexible autour de l\'os du poignet. Vous pouvez aussi enrouler une ficelle, marquer le chevauchement et le mesurer avec une règle. La moyenne est de 17–19 cm pour les hommes, 14–16 cm pour les femmes.',
    },
    {
      question: 'Qu\'est-ce que la corne-à-corne et pourquoi est-ce important&nbsp;?',
      answer: 'La corne-à-corne est la distance entre les cornes supérieure et inférieure. Elle détermine si la montre dépasse du poignet. Une montre avec une corne-à-corne de 48 mm sur un poignet de 17 cm (≈55 mm de largeur plate) est proportionnée à 87 %. Au-dessus de 65 %, elle commence à dépasser.',
    },
    {
      question: 'Quelle taille de montre pour un poignet de 17 cm&nbsp;?',
      answer: 'Un poignet de 17 cm (≈55 mm de largeur plate) accueille confortablement des montres de 36–42 mm de diamètre avec une corne-à-corne de 44–50 mm. Le point idéal est 38–40 mm avec une CàC de 46–48 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Entrez votre tour de poignet',
      text: 'Tapez votre tour de poignet en centimètres. L\'outil met à jour la silhouette visuelle du poignet.',
    },
    {
      name: 'Entrez les dimensions de la montre',
      text: 'Saisissez le diamètre du boîtier, la corne-à-corne et l\'épaisseur en millimètres.',
    },
    {
      name: 'Ajoutez et comparez',
      text: 'Cliquez sur «&nbsp;Ajouter une montre&nbsp;» pour l\'enregistrer. Ajoutez plusieurs montres et cliquez entre elles pour comparer l\'ajustement.',
    },
    {
      name: 'Lisez la couleur',
      text: 'Vert = excellent, jaune = limite, rouge = trop grand pour votre poignet.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment mesurer mon poignet pour une montre&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Utilisez un mètre ruban flexible autour de l\'os du poignet. La moyenne est de 17–19 cm pour les hommes, 14–16 cm pour les femmes.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qu\'est-ce que la corne-à-corne et pourquoi est-ce important&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La corne-à-corne est la distance entre les cornes supérieure et inférieure. Elle détermine si la montre dépasse du poignet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle taille de montre pour un poignet de 17 cm&nbsp;?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un poignet de 17 cm accueille des montres de 36–42 mm de diamètre avec une corne-à-corne de 44–50 mm. Le point idéal est 38–40 mm avec une CàC de 46–48 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Comparateur de Taille de Montre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment comparer les tailles de montres',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Entrez votre tour de poignet',
          'text': 'Tapez votre tour de poignet en centimètres.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Entrez les dimensions de la montre',
          'text': 'Saisissez le diamètre du boîtier, la corne-à-corne et l\'épaisseur.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajoutez et comparez',
          'text': 'Cliquez sur Ajouter une montre pour l\'enregistrer. Ajoutez plusieurs montres pour comparer.',
        },
      ],
    },
  ],
};

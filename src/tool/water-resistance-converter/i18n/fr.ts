import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'convertisseur-resistance-eau',
  title: 'Convertisseur d\'Étanchéité de Montres-Mètres, ATM, Bar & Pieds',
  description: 'Convertissez les indices d\'étanchéité des montres entre mètres, pieds, ATM et bar. Découvrez ce que chaque indice signifie réellement pour un usage quotidien, la natation et la plongée.',
  ui: {
    title: 'Convertisseur d\'Étanchéité',
    depthLabel: 'Étanchéité',
    enterDepth: 'Entrez l\'indice de profondeur',
    unitMeters: 'Mètres (m)',
    unitFeet: 'Pieds (ft)',
    unitATM: 'Atmosphères (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Valeurs Équivalentes',
    ratingLabel: 'Indice',
    whatItMeans: 'Signification',
    notWaterResistant: 'Non Étanche',
    notWaterResistantDesc: 'Aucune éclaboussure. Tenez-la complètement à l\'écart de l\'eau.',
    handWash: 'Résistant aux Éclaboussures',
    handWashDesc: 'Lavage des mains, pluie, légères éclaboussures. Pas de natation, pas de douche.',
    showerSwim: 'Douche et Natation en Surface',
    showerSwimDesc: 'Douche, natation en surface en piscine. Pas de plongée ni de snorkeling.',
    snorkeling: 'Natation et Snorkeling',
    snorkelingDesc: 'Natation en piscine, snorkeling, sports nautiques. Excellente résistance quotidienne.',
    scubaDiving: 'Plongée Loisir',
    scubaDivingDesc: 'Plongée sous-marine, activités marines intenses. Conforme à la norme ISO.',
    saturationDiving: 'Plongée Profonde / Saturation',
    saturationDivingDesc: 'Plongée à saturation professionnelle. Profondeurs extrêmes. Contexte de valve d\'échappement d\'hélium.',
    tipTitle: 'Astuce',
    tipContent: 'L\'étanchéité se dégrade avec le temps. Les joints doivent être vérifiés chaque année et remplacés tous les 3-5 ans.',
  },
  seo: [
    { type: 'title', text: 'Convertisseur d\'Étanchéité de Montres-Décoder les Mètres, ATM, Bar & Pieds', level: 2 },
    { type: 'paragraph', html: 'Un indice d\'étanchéité de 30 mètres ne signifie pas que vous pouvez plonger à 30 mètres. Cela signifie que la montresupport les éclaboussures et la pluie légère. Ce convertisseur traduit entre <strong>mètres, pieds, atmosphères (ATM) et bars</strong>, et vous indique ce que chaque indice autorise réellement.' },
    { type: 'title', text: 'La Vérité sur les Indices d\'Étanchéité', level: 3 },
    { type: 'paragraph', html: 'L\'étanchéité des montres est testée sous pression statique en laboratoire. Les conditions réelles-bouger le bras, plonger, changements de température-créent une pression dynamique bien plus élevée. Une montre 30m / 3 ATM est seulement résistante aux éclaboussures. Pour nager, vous avez besoin d\'au moins 100m / 10 ATM. Pour la plongée sous-marine, 200m / 20 ATM est le seuil d\'entrée standard.' },
    { type: 'title', text: 'Pourquoi l\'Étanchéité se Détériore avec le Temps', level: 3 },
    { type: 'paragraph', html: 'Les joints en caoutchouc et les joints toriques qui scellent votre montresèchent, se fissurent et se compriment avec le temps. La chaleur, la lumière UV et les produits chimiques accélèrent ce processus. Une montre qui était autrefois étanche à 100m peut n\'être plus que résistante aux éclaboussures après 5 ans sans entretien. Faites vérifier vos joints chaque année et remplacez-les tous les 3 à 5 ans.' },
    { type: 'title', text: 'ISO 6425-La Norme pour les Montres de Plongée', level: 3 },
    { type: 'paragraph', html: 'Pour qu\'une montre soit appelée "montre de plongée", elle doit répondre à la norme ISO 6425: au moins 100m d\'étanchéité, une lunette unidirectionnelle, des marquages luminescents et une couronne vissée. Les montres conformes à cette norme sont testées 25% au-dessus de leur profondeur nominale. Une montre certifiée ISO de 200m est testée à 250m.' },
  ],
  faq: [
    {
      question: 'Puis-je nager avec une montre étanche à 30 mètres ?',
      answer: 'Non. Un indice de 30m / 3 ATM signifie uniquement une résistance aux éclaboussures-lavage des mains, pluie et transpiration. La natation crée une pression dynamique qui dépasse la pression d\'essai statique. Pour nager, choisissez au moins 100m / 10 ATM.',
    },
    {
      question: 'Quelle est la différence entre ATM, bar et mètres ?',
      answer: '1 ATM = 1 bar ≈ 10 mètres de colonne d\'eau statique. Dans l\'industrie horlogère, ils sont essentiellement équivalents. Une montre 10 ATM est identique à une montre 10 bar et est conçue pour environ 100 mètres.',
    },
    {
      question: 'À quelle fréquence dois-je tester l\'étanchéité de ma montre ?',
      answer: 'Une fois par an, surtout avant une exposition à l\'eau. Les joints s\'usent. Tous les 3-5 ans, tous les joints doivent être remplacés lors d\'une révision complète.',
    },
    {
      question: 'Que signifie la certification ISO 6425 ?',
      answer: 'ISO 6425 est la norme internationale pour les montres de plongée. Elle exige au moins 100m de résistance, une lunette unidirectionnelle, des marquages luminescents et des tests 25% au-dessus de la profondeur nominale.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Entrez votre indice',
      text: 'Saisissez l\'indice d\'étanchéité de votre montre et sélectionnez l\'unité (mètres, pieds, ATM ou bar).',
    },
    {
      name: 'Lisez les équivalences',
      text: 'La carte affiche les valeurs converties dans les quatre unités simultanément.',
    },
    {
      name: 'Vérifiez la recommandation',
      text: 'La carte surlignée montre les activités sûres pour l\'indice de votre montre.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Puis-je nager avec une montre étanche à 30 mètres ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Un indice de 30m / 3 ATM signifie uniquement une résistance aux éclaboussures-lavage des mains, pluie et transpiration. Pour nager, choisissez au moins 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la différence entre ATM, bar et mètres ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 mètres de colonne d\'eau statique. Dans l\'industrie horlogère, ils sont essentiellement équivalents.',
          },
        },
        {
          '@type': 'Question',
          'name': 'À quelle fréquence dois-je tester l\'étanchéité de ma montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Une fois par an, surtout avant une exposition à l\'eau. Tous les 3-5 ans, tous les joints doivent être remplacés lors d\'une révision complète.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que signifie la certification ISO 6425 ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 exige au moins 100m de résistance, une lunette unidirectionnelle, des marquages luminescents et des tests 25% au-dessus de la profondeur nominale.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertisseur d\'Étanchéité de Montres',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment convertir les indices d\'étanchéité des montres',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Entrez votre indice',
          'text': 'Saisissez l\'indice d\'étanchéité de votre montre et sélectionnez l\'unité.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez les équivalences',
          'text': 'La carte affiche les valeurs converties dans les quatre unités simultanément.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Vérifiez la recommandation',
          'text': 'La carte surlignée montre les activités sûres pour l\'indice de votre montre.',
        },
      ],
    },
  ],
};

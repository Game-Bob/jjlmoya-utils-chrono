import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'minuteur-demagnetisation',
  title: 'Minuteur de Démagnétisation de Montre',
  description: 'Un minuteur de compte à rebours précis avec signaux sonores pour la démagnétisation maison des montres. Obtenez la durée d\'impulsion exacte pour votre bobine de démagnétisation.',
  ui: {
    title: 'Paramètres du Minuteur',
    durationLabel: 'Durée d\'impulsion',
    duration1s: '1 Seconde',
    duration2s: '2 Secondes',
    duration3s: '3 Secondes',
    customLabel: 'Personnalisé',
    startButton: 'Démarrer',
    stopButton: 'Arrêter',
    resetButton: 'Réinitialiser',
    pressPhase: 'Appuyez sur le bouton du démagnétiseur maintenant !',
    holdPhase: 'Maintenez enfoncé...',
    releasePhase: 'Relâchez maintenant !',
    completePhase: 'Terminé ! Éloignez la montre.',
    ready: 'Prêt',
    seconds: 's',
    instructions: 'Comment Démagnétiser',
    step1: 'Placez la montre sur la plateforme du démagnétiseur.',
    step2: 'Appuyez sur Démarrer et maintenez le bouton du démagnétiseur pendant la durée définie.',
    step3: 'Relâchez le bouton et éloignez lentement la montre.',
    step4: 'Répétez 2 à 3 fois si nécessaire, en tournant la montre à chaque fois.',
    tipTitle: 'Astuce',
    tipContent: 'Gardez la montre à au moins 1 mètre du démagnétiseur lorsqu\'il est allumé pour éviter une re-magnétisation.',
  },
  seo: [
    { type: 'title', text: 'Minuteur de Démagnétisation de Montre — Chronométrage Précis pour le DIY', level: 2 },
    { type: 'paragraph', html: 'Démagnétiser une montre nécessite un timing précis du bouton. La plupart des démagnétiseurs DIY fonctionnent en générant un champ magnétique alternatif décroissant, et l\'impulsion idéale dure entre <strong>1 et 3 secondes</strong>. Trop courte et le champ ne neutralise pas la magnétisation ; trop longue et vous risquez de saturer le mouvement.' },
    { type: 'title', text: 'Pourquoi le timing est crucial pour la démagnétisation', level: 3 },
    { type: 'paragraph', html: 'Lorsque vous appuyez sur le bouton du démagnétiseur, un champ magnétique alternatif est créé à l\'intérieur de la bobine. Le champ oscille à la fréquence du secteur (50/60 Hz) et s\'atténue lorsque vous relâchez. L\'objectif est d\'exposer la montre à ce champ décroissant <strong>juste assez longtemps</strong> pour randomiser les domaines magnétiques du spiral et des autres composants en acier. Une impulsion de 1 à 3 secondes est le point idéal pour la plupart des mouvements.' },
    { type: 'title', text: 'Comment fonctionne un démagnétiseur', level: 3 },
    { type: 'paragraph', html: 'Un démagnétiseur est essentiellement une bobine de fil qui produit un champ magnétique alternatif puissant lorsqu\'elle est alimentée. Placer une montre magnétisée dans ce champ provoque le basculement rapide de ses domaines magnétiques internes. Lorsque le champ est supprimé brusquement (en relâchant le bouton), les domaines se stabilisent dans un motif aléatoire, annulant ainsi la magnétisation nette.' },
    { type: 'title', text: 'Signes que votre montre a besoin d\'être démagnétisée', level: 3 },
    { type: 'paragraph', html: 'Les symptômes courants d\'une montre magnétisée incluent : une avance de plusieurs minutes par jour, un chronométrage irrégulier selon les positions, un tic-tac audiblement plus rapide et, dans les cas extrêmes, l\'arrêt complet de la montre. Si votre montre automatique se met soudainement à accélérer, la magnétisation en est souvent la cause et la démagnétisation est une solution simple.' },
  ],
  faq: [
    {
      question: 'Combien de temps dois-je appuyer sur le bouton du démagnétiseur ?',
      answer: '1 à 3 secondes est la durée d\'impulsion recommandée. Commencez par 1 seconde et augmentez si nécessaire. Des impulsions trop longues peuvent surchauffer la bobine sans améliorer les résultats.',
    },
    {
      question: 'Peut-on démagnétiser une montre plusieurs fois ?',
      answer: 'Oui. Répétez le processus 2 à 3 fois en tournant la montre de 90 degrés à chaque fois. Cela garantit que tous les axes sont exposés au champ alternatif. Il n\'y a aucun risque de sur-démagnétisation.',
    },
    {
      question: 'La démagnétisation fonctionne-t-elle sur les montres à quartz ?',
      answer: 'Les montres à quartz sont rarement affectées par la magnétisation car elles contiennent peu de composants ferromagnétiques. Cependant, le moteur pas à pas de certains mouvements à quartz peut se magnétiser, provoquant un mouvement erratique des aiguilles. La démagnétisation est sans danger pour les montres à quartz.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Régler la durée',
      text: 'Choisissez 1, 2 ou 3 secondes selon la sévérité de la magnétisation.',
    },
    {
      name: 'Positionner la montre',
      text: 'Placez la montre à plat sur la plateforme du démagnétiseur, centrée sur la bobine.',
    },
    {
      name: 'Appuyer et maintenir',
      text: 'Appuyez simultanément sur le bouton Démarrer et le bouton du démagnétiseur et maintenez pendant la durée définie.',
    },
    {
      name: 'Relâcher et éloigner',
      text: 'Relâchez le bouton et éloignez la montre d\'au moins 1 mètre avant d\'éteindre le démagnétiseur.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Combien de temps dois-je appuyer sur le bouton du démagnétiseur ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 à 3 secondes est la durée d\'impulsion recommandée. Commencez par 1 seconde et augmentez si nécessaire. Des impulsions trop longues peuvent surchauffer la bobine sans améliorer les résultats.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Peut-on démagnétiser une montre plusieurs fois ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Répétez le processus 2 à 3 fois en tournant la montre de 90 degrés à chaque fois. Cela garantit que tous les axes sont exposés au champ alternatif. Il n\'y a aucun risque de sur-démagnétisation.',
          },
        },
        {
          '@type': 'Question',
          'name': 'La démagnétisation fonctionne-t-elle sur les montres à quartz ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les montres à quartz sont rarement affectées par la magnétisation car elles contiennent peu de composants ferromagnétiques. Cependant, le moteur pas à pas de certains mouvements à quartz peut se magnétiser, provoquant un mouvement erratique des aiguilles. La démagnétisation est sans danger pour les montres à quartz.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Minuteur de Démagnétisation de Montre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment démagnétiser une montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Régler la durée',
          'text': 'Choisissez 1, 2 ou 3 secondes selon la sévérité de la magnétisation.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Positionner la montre',
          'text': 'Placez la montre à plat sur la plateforme du démagnétiseur, centrée sur la bobine.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Appuyer et maintenir',
          'text': 'Appuyez simultanément sur le bouton Démarrer et le bouton du démagnétiseur et maintenez pendant la durée définie.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Relâcher et éloigner',
          'text': 'Relâchez le bouton et éloignez la montre d\'au moins 1 mètre avant d\'éteindre le démagnétiseur.',
        },
      ],
    },
  ],
};

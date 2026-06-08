import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'convertisseur-frequence-balancement',
  title: 'Convertisseur de Fréquence de Balancement: VPH en Hz et s/j',
  description: 'Convertissez les vibrations par heure (VPH) en Hertz, en ticks par seconde et calculez l\'impact quotidien d\'un seul tick perdu. Fonctionne avec les calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega et Zenith.',
  ui: {
    title: 'Convertisseur de Fréquence de Balancement',
    vphLabel: 'Mouvement',
    selectMovement: 'Sélectionner un mouvement',
    customMovement: 'Personnalisé',
    customVph: 'Vibrations par heure',
    resultsTitle: 'Calculs',
    frequency: 'Fréquence',
    ticksPerSec: 'Ticks par seconde',
    lostTickImpact: 'S\'il perd 1 tick par heure',
    lostTickExplainer: 'Un tick manqué par heure signifie environ 3 secondes perdues par jour à 28 800 VPH. Les fréquences plus basses amplifient l\'impact.',
    step1: 'Sélectionnez votre mouvement ou saisissez un VPH personnalisé.',
    step2: 'Lisez la fréquence en Hz, les ticks par seconde et l\'impact d\'un tick perdu.',
    tipTitle: 'Astuce',
    tipContent: 'Les fréquences plus élevées (36 000 VPH) donnent un balayage plus fluide de l\'aiguille et une meilleure précision, mais aussi plus d\'usure sur l\'échappement.',
  },
  seo: [
    { type: 'title', text: 'Convertisseur de Fréquence de Balancement - VPH en Hz et secondes par jour', level: 2 },
    { type: 'paragraph', html: 'Chaque montre mécanique bat à une fréquence spécifique - le nombre de vibrations que son balancier effectue par heure. Ce nombre détermine la fluidité du balayage de l\'aiguille des secondes et la précision de la montre. Ce convertisseur traduit <strong>les VPH en Hz et en ticks par seconde</strong>, et montre l\'impact réel d\'un seul tick perdu.' },
    { type: 'title', text: 'Qu\'est-ce qu\'une fréquence de balancement?', level: 3 },
    { type: 'paragraph', html: 'La fréquence de balancement, mesurée en vibrations par heure (vph), est la fréquence à laquelle le balancier d\'une montre oscille. Une fréquence courante est 28 800 VPH - soit 4 Hz, ou 8 ticks par seconde. Des fréquences plus élevées comme 36 000 VPH (5 Hz) produisent un mouvement plus fluide et peuvent théoriquement améliorer la précision en réduisant l\'effet des erreurs de position.' },
    { type: 'title', text: 'Pourquoi un tick perdu est important', level: 3 },
    { type: 'paragraph', html: 'Si l\'échappement d\'une montre ne délivre pas un tick à cause de frottements, de magnétisme ou d\'usure, ce tick perdu se traduit directement en temps perdu. À 28 800 VPH, un seul tick manqué par heure s\'accumule pour environ <strong>3 secondes par jour</strong>. À 18 000 VPH, la même erreur coûte près de 5 secondes par jour. Cet outil vous aide à comprendre les calculs derrière le réglage.' },
    { type: 'title', text: 'Fréquences de balancement courantes', level: 3 },
    { type: 'paragraph', html: 'Les montres de poche vintage et les premières automatiques tournent souvent à 18 000 VPH (2,5 Hz). De nombreux calibres Seiko et Miyota utilisent 21 600 VPH (3 Hz). La norme moderne est 28 800 VPH (4 Hz), utilisée par ETA, Sellita, Rolex, et d\'autres. Les mouvements à haute fréquence comme le Zenith El Primero tournent à 36 000 VPH (5 Hz) pour une plus grande précision.' },
  ],
  faq: [
    {
      question: 'Comment convertir des VPH en Hz?',
      answer: 'Divisez les VPH par 7 200. Une montre battant à 28 800 VPH tourne à 4 Hz (28 800 ÷ 7 200 = 4). La division par 7 200 tient compte du fait qu\'une oscillation complète contient deux vibrations et qu\'il y a 3 600 secondes dans une heure.',
    },
    {
      question: 'Que signifie une fréquence plus élevée pour la précision?',
      answer: 'Des fréquences plus élevées permettent généralement une plus grande précision théorique car le balancier est moins affecté par les perturbations de position. Cependant, elles génèrent aussi plus de frottement et d\'usure sur les pierres de palette et la roue d\'échappement, nécessitant une meilleure lubrification et un entretien plus fréquent.',
    },
    {
      question: 'Comment un tick perdu affecte-t-il la précision quotidienne?',
      answer: 'Un tick manqué par heure se traduit par 24 ticks perdus par jour. Le temps perdu dépend de votre fréquence de balancement: divisez 86 400 par vos VPH. À 28 800 VPH, cela donne 3 secondes par jour. À 18 000 VPH, cela donne 4,8 secondes par jour.',
    },
    {
      question: 'Une montre peut-elle rattraper un tick perdu?',
      answer: 'Non. Une fois qu\'un tick est manqué, le temps est perdu définitivement. La montre ne "rattrape" pas. C\'est pourquoi la santé de l\'échappement - pierres propres, lubrification appropriée et erreur de battement correcte - impacte directement la marche quotidienne.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Sélectionnez votre calibre',
      text: 'Choisissez votre mouvement dans le menu déroulant. Chaque préréglage inclut le VPH correct pour ce calibre.',
    },
    {
      name: 'Lisez les résultats',
      text: 'La carte affiche la fréquence en Hz, les ticks par seconde et l\'impact quotidien d\'un seul tick perdu.',
    },
    {
      name: 'Essayez un VPH personnalisé',
      text: 'Sélectionnez "Personnalisé" pour saisir n\'importe quelle valeur VPH pour les mouvements vintage ou inhabituels.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment convertir des VPH en Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divisez les VPH par 7 200. Une montre battant à 28 800 VPH tourne à 4 Hz. La division par 7 200 tient compte d\'une oscillation contenant deux vibrations et de 3 600 secondes par heure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que signifie une fréquence plus élevée pour la précision?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Des fréquences plus élevées permettent une plus grande précision théorique car le balancier est moins affecté par les perturbations de position. Cependant, elles génèrent aussi plus de frottement et d\'usure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment un tick perdu affecte-t-il la précision quotidienne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un tick manqué par heure se traduit par 24 ticks perdus par jour. Divisez 86 400 par vos VPH pour trouver les secondes perdues par jour.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Une montre peut-elle rattraper un tick perdu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Une fois qu\'un tick est manqué, le temps est perdu définitivement. La montre ne rattrape pas.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertisseur de Fréquence de Balancement',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Nécessite HTML5. Nécessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment convertir des VPH en Hz et calculer l\'impact d\'un tick perdu',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Sélectionnez votre calibre',
          'text': 'Choisissez votre mouvement dans le menu déroulant. Chaque préréglage inclut le VPH correct pour ce calibre.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez les résultats',
          'text': 'La carte affiche la fréquence en Hz, les ticks par seconde et l\'impact quotidien d\'un seul tick perdu.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Essayez un VPH personnalisé',
          'text': 'Sélectionnez Personnalisé pour saisir n\'importe quelle valeur VPH pour les mouvements vintage ou inhabituels.',
        },
      ],
    },
  ],
};

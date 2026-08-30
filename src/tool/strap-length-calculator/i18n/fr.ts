import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'calculateur-longueur-bracelet',
  title: 'Calculateur de Longueur de Bracelet de Montre',
  description: 'Calcule la taille de bracelet idéale pour ton poignet. Obtiens des recommandations pour les bracelets deux pièces et NATO selon la taille du poignet et les dimensions de la montre.',
  ui: {
    title: 'Calculateur de Longueur de Bracelet',
    wristLabel: 'Tour de poignet',
    wristPlaceholder: 'ex. 170',
    lugLabel: 'Distance entre cornes',
    lugPlaceholder: 'ex. 45',
    fitLabel: 'Ajustement préféré',
    fitTight: 'Serré',
    fitRegular: 'Normal',
    fitLoose: 'Lâche',
    unitLabel: 'Unité',
    standardLabel: 'Taille standard',
    bespokeLabel: 'Taille sur mesure',
    natoLabel: 'Longueur bracelet NATO',
    longSide: 'Côté long',
    shortSide: 'Côté court',
    totalLength: 'Longueur totale',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Poignets < 6.0 in',
    sizeS: 'Small (S) - Poignets 6.0 à 6.5 in',
    sizeM: 'Medium (M) - Poignets 6.5 à 7.0 in',
    sizeL: 'Large (L) - Poignets 7.0 à 7.5 in',
    sizeXL: 'Extra Large (XL) - Poignets 7.5 à 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Poignets > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Guide des Tailles de Bracelet de Montre & Calculateur de Longueur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Choisir le bracelet parfait pour ta montre est essentiel pour le confort et l\'équilibre esthétique. Un bracelet trop long laisse un bout disgracieux qui dépasse, tandis qu\'un bracelet trop court risque de ne pas fermer correctement. Ce guide explique comment déterminer les tailles standard, les mesures sur mesure et les longueurs de bracelets NATO en fonction du poignet, du design de la montre et de l\'ajustement souhaité.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Taille standard' },
        { value: '160-190mm', label: 'S\'adapte à la plupart des poignets' },
        { value: '7 trous', label: 'Ajustements typiques' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Comprendre les bracelets deux pièces: côté long vs. côté court',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un bracelet de montre deux pièces est défini par deux nombres, comme <strong>120/80 mm</strong>. Le premier nombre (ex. 120 mm) est le <strong>côté long</strong> (le côté de la boucle), qui se fixe à la position 6 heures. Le deuxième nombre (ex. 80 mm) est le <strong>côté court</strong> (le côté de l\'ardillon), qui se fixe à la position 12 heures. La boucle elle-même n\'est pas incluse dans ces mesures.',
    },
    {
      type: 'title',
      text: 'Tableau des tailles standard selon le tour de poignet',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tour de poignet', 'Bracelet cuir/caoutchouc', 'Bracelet NATO', 'Ajustement recommandé'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Ajustement serré/petit'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Ajustement moyen standard'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Ajustement large standard'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Ajustement extra large'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Ajustement double extra large'],
      ],
    },
    {
      type: 'title',
      text: 'Explication des tailles sur mesure',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En commandant un bracelet sur mesure, tu peux viser l\'ajustement parfait. Au lieu de te contenter des positions de trous standard, un bracelet sur mesure calcule la longueur précise de chaque côté pour que la boucle repose exactement au centre du dessous de ton poignet. La formule utilise le tour de poignet total, soustrait la distance entre cornes de la montre et répartit la longueur restante selon la géométrie du poignet.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Bracelets sur mesure',
          description: 'Adaptés précisément à ton poignet et aux dimensions de ton boîtier. Garantissent un centrage parfait de la boucle et éliminent l\'excédent de bracelet.',
          points: [
            'Centrage parfait de la boucle',
            'Positions de trous sur mesure',
            'Pas d\'excédent de bracelet',
            'Aspect et toucher premium',
          ],
        },
        {
          title: 'Bracelets standard',
          description: 'Tailles produites en série conçues pour s\'adapter à une large gamme de poignets grâce à de multiples trous. Rapides et économiques.',
          points: [
            'Coût moins élevé',
            'Disponibilité immédiate',
            'Compatibles avec plusieurs montres',
            'Dimensions standardisées',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Terminologie clé des bracelets de montre',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Distance entre cornes (Lug-to-Lug)',
          definition: 'La distance verticale totale de l\'extrémité de la corne supérieure à l\'extrémité de la corne inférieure. Ce n\'est pas le diamètre du boîtier, mais la longueur totale de la tête de montre posée sur ton poignet.',
        },
        {
          term: 'Côté court (Boucle)',
          definition: 'La section du bracelet fixée à la position 12 heures du boîtier. Elle inclut la boucle mais est exclue des mesures de longueur.',
        },
        {
          term: 'Côté long (Extrémité)',
          definition: 'La section du bracelet fixée à la position 6 heures. Elle comporte des trous d\'ajustement pour régler le serrage.',
        },
        {
          term: 'Bracelet NATO',
          definition: 'Un bracelet en nylon d\'une seule pièce qui passe sous le boîtier de la montre à travers les barres. Il est très ajustable et durable.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Mesurer correctement ton poignet',
      html: 'Pour une mesure précise, enroule un mètre-ruban flexible (sans serrer) autour de l\'endroit où tu portes habituellement ta montre. Si tu n\'as pas de mètre, utilise une ficelle ou une bande de papier, marque le chevauchement et mesure la longueur à plat avec une règle.',
    },
    {
      type: 'title',
      text: 'Pourquoi la distance entre cornes est cruciale pour la taille du bracelet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beaucoup de collectionneurs oublient que le boîtier de la montre agit comme une extension rigide du bracelet. Une montre avec une grande distance entre cornes de 50 mm occupe plus d\'espace au poignet qu\'une montre habillée de 40 mm. Par conséquent, la montre plus grande nécessite des bracelets plus courts pour obtenir la même taille de boucle. Ne pas tenir compte de la distance entre cornes est la raison numéro un des bracelets mal ajustés.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Éviter le décalage de la boucle et le débordement du boîtier',
      html: 'Si le côté court de ton bracelet est trop long ou trop court pour ton poignet, la boucle glissera sur le côté. Cela décentre le boîtier de la montre, provoquant une gêne et augmentant le risque d\'éraflures du boîtier ou de la boucle. Veille toujours à ce que la boucle soit centrée sur la face inférieure plate de ton poignet.',
    },
    {
      type: 'proscons',
      title: 'Bracelet NATO vs. bracelet deux pièces',
      items: [
        {
          pro: 'Les bracelets NATO sont très ajustables et empêchent la perte de la montre en cas de rupture d\'une barrette.',
          con: 'Les bracelets NATO ajoutent de l\'épaisseur sous le boîtier de la montre.',
        },
        {
          pro: 'Les bracelets deux pièces maintiennent le boîtier au contact de la peau pour un profil plus fin.',
          con: 'Les bracelets deux pièces nécessitent un dimensionnement précis et offrent moins de réglages.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Comment mesure-t-on la longueur d\'un bracelet de montre ?',
      answer: 'La longueur d\'un bracelet de montre est généralement exprimée par deux nombres comme 120/80 mm. Le premier nombre est la longueur du côté long (extrémité), et le second est celle du côté court (boucle).',
    },
    {
      question: 'Où doit se situer la boucle sur le poignet ?',
      answer: 'Idéalement, la boucle doit être centrée sur le dessous de ton poignet. Si elle est décalée, le boîtier de la montre se décentrera. Ajuster le rapport entre le côté long et le côté court permet d\'obtenir un centrage parfait.',
    },
    {
      question: 'Comment la distance entre cornes affecte-t-elle la longueur de bracelet nécessaire ?',
      answer: 'Le boîtier de la montre fait partie intégrante de la boucle du bracelet. Une montre plus grande avec une distance entre cornes longue (ex. 50 mm) réduit la longueur de bracelet nécessaire pour faire le tour du poignet par rapport à une montre plus petite (ex. 40 mm) sur le même poignet.',
    },
    {
      question: 'De quel côté va le côté long du bracelet ?',
      answer: 'Traditionnellement, le côté long du bracelet (contenant les trous d\'ajustement) est fixé à la position 6 heures du boîtier, pointant vers toi. Le côté court (avec la boucle) est fixé à la position 12 heures.',
    },
    {
      question: 'À quel point un bracelet de montre doit-il être serré ?',
      answer: 'Un bracelet doit être ajusté mais confortable. Tu dois pouvoir glisser un doigt en dessous sans forcer. Un bracelet trop serré peut restreindre la circulation, tandis qu\'un bracelet trop lâche laissera le boîtier tourner.',
    },
    {
      question: 'Puis-je utiliser un bracelet NATO sur n\'importe quelle montre ?',
      answer: 'Oui, tant que la montre a des barrettes standard avec un espace suffisant entre le boîtier et la barrette. Les bracelets NATO passent sous le boîtier, donc des espaces très serrés peuvent nécessiter des barrettes courbées ou des matériaux de bracelet plus fins.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mesurer ton poignet',
      text: 'Utilise un mètre-ruban flexible pour trouver ton tour de poignet en millimètres ou en pouces.',
    },
    {
      name: 'Mesurer la distance entre cornes',
      text: 'Mesure la hauteur du boîtier de l\'extrémité de la corne supérieure à l\'extrémité de la corne inférieure.',
    },
    {
      name: 'Choisir ton ajustement préféré',
      text: 'Choisis entre un ajustement serré, normal ou lâche.',
    },
    {
      name: 'Calculer les recommandations',
      text: 'Consulte la taille standard, les tailles sur mesure côté long/court, et la longueur NATO idéale.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment mesure-t-on la longueur d\'un bracelet de montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La longueur d\'un bracelet de montre est généralement exprimée par deux nombres comme 120/80 mm. Le premier nombre est la longueur du côté long (extrémité), et le second est celle du côté court (boucle).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Où doit se situer la boucle sur le poignet ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idéalement, la boucle doit être centrée sur le dessous de ton poignet. Si elle est décalée, le boîtier de la montre se décentrera. Ajuster le rapport entre le côté long et le côté court permet d\'obtenir un centrage parfait.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Comment la distance entre cornes affecte-t-elle la longueur de bracelet nécessaire ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le boîtier de la montre fait partie intégrante de la boucle du bracelet. Une montre plus grande avec une distance entre cornes longue (ex. 50 mm) réduit la longueur de bracelet nécessaire pour faire le tour du poignet par rapport à une montre plus petite (ex. 40 mm) sur le même poignet.'
          }
        },
        {
          '@type': 'Question',
          'name': 'De quel côté va le côté long du bracelet ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Traditionnellement, le côté long du bracelet (contenant les trous d\'ajustement) est fixé à la position 6 heures du boîtier, pointant vers toi. Le côté court (avec la boucle) est fixé à la position 12 heures.'
          }
        },
        {
          '@type': 'Question',
          'name': 'À quel point un bracelet de montre doit-il être serré ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un bracelet doit être ajusté mais confortable. Tu dois pouvoir glisser un doigt en dessous sans forcer. Un bracelet trop serré peut restreindre la circulation, tandis qu\'un bracelet trop lâche laissera le boîtier tourner.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser un bracelet NATO sur n\'importe quelle montre ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui, tant que la montre a des barrettes standard avec un espace suffisant entre le boîtier et la barrette. Les bracelets NATO passent sous le boîtier, donc des espaces très serrés peuvent nécessiter des barrettes courbées ou des matériaux de bracelet plus fins.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur de Longueur de Bracelet de Montre',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Calculateur de Longueur de Bracelet de Montre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Mesurer ton poignet',
          'text': 'Utilise un mètre-ruban flexible pour trouver ton tour de poignet en millimètres ou en pouces.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Mesurer la distance entre cornes',
          'text': 'Mesure la hauteur du boîtier de l\'extrémité de la corne supérieure à l\'extrémité de la corne inférieure.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Choisir ton ajustement préféré',
          'text': 'Choisis entre un ajustement serré, normal ou lâche.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcular les recommandations',
          'text': 'Consulte la taille standard, les tailles sur mesure côté long/court, et la longueur NATO idéale.'
        }
      ]
    } as any
  ]
};

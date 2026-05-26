import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Qu\'est-ce qu\'un train d\'engrenages de montre?',
    answer: 'Un train d\'engrenages est une série de roues dentées interconnectées qui transmettent l\'énergie du barillet au mécanisme d\'échappement. Chaque paire d\'engrenages fournit un rapport de réduction spécifique, ralentissant la libération rapide de l\'énergie du ressort en impulsions contrôlées et rythmées.',
  },
  {
    question: 'Pourquoi différents mouvements ont-ils des rapports d\'engrenage différents?',
    answer: 'Les rapports d\'engrenage sont déterminés par le nombre de dents sur chaque roue et pignon. Les mouvements avec des fréquences de balancier différentes (p. ex., 28 800 VPH vs 36 000 VPH) ont des vitesses de roue d\'échappement et des configurations d\'engrenage différentes pour maintenir une précision horaire tout en s\'adaptant à la fréquence du balancier.',
  },
  {
    question: 'Quelle est la différence entre une roue et un pignon?',
    answer: 'En horlogerie, une "roue" est le grand engrenage avec de nombreuses dents qui entraîne le composant suivant. Un "pignon" est le petit engrenage (généralement 6-12 dents) qui est entraîné. Ensemble, une roue et un pignon forment une paire d\'engrenages qui modifie la vitesse de rotation et le couple.',
  },
];

const howTo = [
  {
    name: 'Sélectionnez un mouvement',
    text: 'Choisissez entre un mouvement standard (28 800 VPH), haute fréquence (36 000 VPH El Primero) ou vintage (18 000 VPH). Chacun a des rapports d\'engrenage et des fréquences uniques.',
  },
  {
    name: 'Observez le train d\'engrenages',
    text: 'Regardez les engrenages animés tourner à des vitesses proportionnelles. Le barillet tourne lentement tandis que la roue d\'échappement tourne rapidement. Survolez un engrenage ou une carte de données pour obtenir des informations détaillées.',
  },
  {
    name: 'Ajustez la vitesse',
    text: 'Utilisez les contrôles de vitesse pour ralentir, accélérer ou mettre en pause l\'animation. Cela permet de visualiser comment chaque engrenage contribue à la chaîne de transmission de puissance.',
  },
];

const title = 'Explorateur de Train d\'Engrenages: Diagramme Horloger Interactif';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'explorateurtrengrenages',
  title,
  description: 'Explorez le cœur mécanique d\'une montre avec une visualisation animée du train d\'engrenages. Voyez le barillet, la roue des minutes, la roue des heures, la roue des secondes, la roue d\'échappement, l\'ancre et le balancier en mouvement.',
  ui: {
    title: 'Explorateur de Train d\'Engrenages',
    barrelLabel: 'Barillet',
    centerWheelLabel: 'Roue Centrale',
    thirdWheelLabel: 'Troisième Roue',
    fourthWheelLabel: 'Quatrième Roue',
    escapeWheelLabel: 'Roue d\'Échappement',
    palletForkLabel: 'Ancre',
    balanceWheelLabel: 'Balancier',
    rpmLabel: 'tr/min',
    teethLabel: 'dents',
    gearRatioLabel: 'Rapport',
    powerFlowLabel: 'Flux de Puissance',
    movementLabel: 'Mouvement',
    speedLabel: 'Vitesse',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pause',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Sélectionnez un calibre de mouvement pour voir ses rapports d\'engrenage et sa fréquence uniques.',
    step2: 'Survolez un engrenage ou une carte de données pour mettre en évidence sa position dans le flux de puissance.',
    step3: 'Ajustez la vitesse d\'animation pour étudier comment chaque roue transmet la puissance à travers le train.',
    tipTitle: 'Astuce',
    tipContent: 'Le train d\'engrenages réduit la libération rapide d\'énergie du ressort en une oscillation contrôlée. Un barillet typique tourne une fois toutes les 7-8 heures, tandis que la roue d\'échappement tourne à 32 tr/min (à 28 800 VPH) — une réduction de plus de 15 000:1.',
  },
  seo: [
    { type: 'title', text: 'Explorateur Interactif de Train d\'Engrenages', level: 2 },
    { type: 'paragraph', html: 'Le <strong>train d\'engrenages</strong> est l\'épine dorsale mécanique de toute montre mécanique. Cet outil interactif visualise comment la puissance circule du barillet à travers la roue centrale, la troisième roue, la quatrième roue et la roue d\'échappement jusqu\'à l\'ancre et le balancier. Voyez chaque roue tourner à sa vitesse proportionnelle et comprenez comment les rapports d\'engrenage déterminent la mesure du temps.' },
    { type: 'title', text: 'Comment fonctionne un train d\'engrenages', level: 3 },
    { type: 'paragraph', html: 'Un train d\'engrenages de montre se compose d\'une série de <strong>roues</strong> (grands engrenages) et de <strong>pignons</strong> (petits engrenages) qui transmettent la puissance tout en réduisant la vitesse. Le <strong>barillet</strong> contient le ressort moteur et tourne lentement, entraînant la <strong>roue centrale</strong> qui tourne une fois par heure (pour l\'aiguille des minutes). La <strong>troisième roue</strong> et la <strong>quatrième roue</strong> (roue des secondes) augmentent encore la vitesse de rotation. Enfin, la <strong>roue d\'échappement</strong> libère la puissance en impulsions contrôlées vers l\'<strong>ancre</strong>, qui verrouille et déverrouille alternativement la roue d\'échappement, envoyant des impulsions au <strong>balancier</strong>. Le balancier oscille à une fréquence précise — généralement 4 Hz (28 800 vibrations par heure) — régulant la marche de la montre.' },
    { type: 'title', text: 'Rapports d\'Engrenage et Transmission de Puissance', level: 3 },
    {
      type: 'table', headers: ['Composant', 'Dents typiques', 'tr/min (28 800 VPH)', 'Rapport précédent'], rows: [
        ['Barillet', '72', '0,002 (1 tr / 8 h)', '-'],
        ['Roue Centrale', '60', '0,0167 (1 tr / h)', '~7,2:1'],
        ['Troisième Roue', '50', '0,125 (1 tr / 8 min)', '~5:1'],
        ['Quatrième Roue', '60', '1 (1 tr / min)', '6:1'],
        ['Roue d\'Échappement', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Comparaison des Mouvements', level: 3 },
    {
      type: 'table', headers: ['Mouvement', 'Fréquence', 'Balancier', 'Roue Échappement tr/min', 'Précision typique'], rows: [
        ['Vintage (18 000 VPH)', '18 000 bph', '2,5 Hz', '20 tr/min', '±15-30 s/j'],
        ['Standard (28 800 VPH)', '28 800 bph', '4 Hz', '32 tr/min', '±5-15 s/j'],
        ['Haute Fréquence (36 000 VPH)', '36 000 bph', '5 Hz', '40 tr/min', '±3-8 s/j'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Outil d\'Apprentissage Interactif', icon: 'mdi:cog-clockwise', badge: 'HORLOGERIE', html: 'Cet outil utilise des rapports d\'engrenage approximatifs représentatifs des mouvements à échappement suisse courants. Les rapports réels varient selon le calibre. Utilisez les préréglages de mouvement pour comparer comment différentes fréquences affectent la dynamique du train d\'engrenages.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};


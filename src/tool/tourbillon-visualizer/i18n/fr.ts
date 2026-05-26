import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Quest-ce qu\'un tourbillon?',
    answer: 'Un tourbillon est une cage rotative qui contient l\'échappement (balancier, ancre et roue d\'échappement) d\'une montre mécanique. Il tourne en continu — généralement une fois par minute — pour moyenner les erreurs de position causées par la gravité, améliorant ainsi la précision.',
  },
  {
    question: 'Quelle est la différence entre un tourbillon classique et un tourbillon volant?',
    answer: 'Un tourbillon classique est soutenu par un pont supérieur et inférieur, tandis qu\'un tourbillon volant est en porte-à-faux par le bas sans support supérieur visible. Les tourbillons volants offrent une vue dégagée sur l\'échappement rotatif et sont considérés comme plus exigeants esthétiquement à construire.',
  },
  {
    question: 'Un tourbillon améliore-t-il réellement la précision?',
    answer: 'Dans les montres-bracelets modernes, le bénéfice en précision est minime car les erreurs de position sont déjà bien compensées. Cependant, dans les montres de poche (pour lesquelles Breguet a inventé le tourbillon en 1801), la rotation constante éliminait les différences de marche entre les positions verticales. Aujourd\'hui, les tourbillons sont avant tout une démonstration du haut artisanat horloger.',
  },
];

const howTo = [
  {
    name: 'Changer le type de tourbillon',
    text: 'Passez du tourbillon classique au tourbillon volant pour voir la différence structurelle. Le tourbillon volant n\'a pas de pont supérieur, révélant la cage complète.',
  },
  {
    name: 'Ajuster la fréquence',
    text: 'Essayez différentes fréquences (18k, 28.8k, 36k VPH) pour voir comment la vitesse du balancier et la rotation de la roue d\'échappement changent.',
  },
  {
    name: 'Contrôler la vitesse',
    text: 'Utilisez les contrôles de vitesse pour ralentir et observer la danse complexe de l\'échappement, ou accélérez pour voir le cycle complet de rotation de la cage.',
  },
];

const title = 'Tourbillon: Art de l\'Échappement Rotatif';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'visualiseur-tourbillon',
  title,
  description: 'Découvrez l\'art fascinant du tourbillon — une cage rotative abritant l\'échappement. Regardez le balancier osciller, le spiral respirer et la cage tourner dans un ballet mécanique élégant.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Type',
    typeClassic: 'Classique',
    typeFlying: 'Volant',
    speedLabel: 'Vitesse',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pause',
    beatRateLabel: 'Fréquence',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Cage',
    showLabelsLabel: 'Étiquettes',
    step1: 'Passez du tourbillon classique au volant pour comparer leur architecture.',
    step2: 'Ajustez la fréquence pour voir comment elle affecte le rythme de l\'échappement.',
    step3: 'Utilisez les contrôles de vitesse pour observer la danse mécanique précise à tout rythme.',
    tipTitle: 'Astuce',
    tipContent: 'Breguet a inventé le tourbillon en 1801. Le mot "tourbillon" signifie "tourbillon de vent" en français, décrivant l\'apparence de la cage rotative en mouvement.',
    balanceLabel: 'Balancier',
    escapeLabel: 'Échappement',
    palletLabel: 'Ancre',
    cageLabel: 'Cage',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Art Animé de l\'Échappement', level: 2 },
    { type: 'paragraph', html: 'Le <strong>tourbillon</strong> est l\'une des complications les plus captivantes de la haute horlogerie. Ce visualiseur interactif donne vie à l\'échappement rotatif avec un rendu animé détaillé du balancier, du spiral, de l\'ancre, de la roue d\'échappement et de l\'iconique cage rotative. Explorez la poésie mécanique du chef-d\'œuvre de Breguet.' },
    { type: 'title', text: 'Comment fonctionne un tourbillon', level: 3 },
    { type: 'paragraph', html: 'Un tourbillon abrite l\'ensemble de l\'échappement — <strong>balancier, spiral, ancre et roue d\'échappement</strong> — à l\'intérieur d\'une cage rotative. La cage effectue généralement une rotation par minute, changeant continuellement la position de l\'échappement par rapport à la gravité. Cela moyenne les erreurs de timing positionnelles, un concept révolutionnaire quand Abraham-Louis Breguet l\'a breveté en 1801. Le <strong>balancier</strong> oscille à la fréquence de la montre (généralement 4 Hz / 28 800 VPH), tandis que la <strong>roue d\'échappement</strong> avance d\'une dent par battement, créant le mouvement de tic caractéristique.' },
    { type: 'title', text: 'Tourbillon Classique vs Volant', level: 3 },
    {
      type: 'table', headers: ['Caractéristique', 'Tourbillon Classique', 'Tourbillon Volant'], rows: [
        ['Support supérieur', 'Pont visible', 'Aucun (en porte-à-faux)'],
        ['Visibilité', 'Partielle (pont visible)', 'Complète (sans obstruction)'],
        ['Difficulté', 'Élevée', 'Extrêmement élevée'],
        ['Inventé', '1801 (Breguet)', 'Années 1920 (Alfred Helwig)'],
        ['Courant dans', 'Marques traditionnelles', 'Indépendants modernes'],
      ]
    },
    { type: 'title', text: 'Comparaison des Fréquences', level: 3 },
    {
      type: 'table', headers: ['Rythme (vph)', 'Fréquence', 'Roue Échappement tr/min', 'Battements/s', 'Utilisation typique'], rows: [
        ['18 000', '2,5 Hz', '20 tr/min', '5', 'Montres de poche vintage'],
        ['28 800', '4 Hz', '32 tr/min', '8', 'Standard moderne (ETA, Rolex)'],
        ['36 000', '5 Hz', '40 tr/min', '10', 'Haute fréquence (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Art Mécanique en Mouvement', icon: 'mdi:rotate-orbit', badge: 'HORLOGERIE', html: 'Ce visualiseur est une interprétation artistique d\'un échappement à tourbillon. La rotation de la cage, l\'oscillation du balancier, la respiration du spiral, le balancement de l\'ancre et l\'avance de la roue d\'échappement sont synchronisés selon des relations mécaniques réelles. Utilisez les commandes pour explorer ce chef-d\'œuvre d\'ingénierie micromécanique.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Pourquoi les montres mécaniques tournent-elles plus vite en haute altitude ?',
    answer: 'Les montres mécaniques tournent plus vite en haute altitude principalement à cause de la densité réduite de l\'air. Un air plus fin crée moins de traînée aérodynamique sur le balancier, lui permettant d\'osciller avec une amplitude légèrement plus grande. Cette amplitude accrue fait avancer la montre - généralement de 2 à 6 secondes par jour pour 1.000 m de gain d\'altitude.',
  },
  {
    question: 'L\'altitude affecte-t-elle aussi les montres à quartz ?',
    answer: 'Les montres à quartz sont peu affectées par l\'altitude car elles n\'ont pas de balancier mécanique oscillant. Cependant, les changements d\'altitude extrêmes peuvent affecter les performances de la batterie. L\'effet est négligeable par rapport aux montres mécaniques.',
  },
  {
    question: 'Les changements d\'altitude peuvent-ils endommager ma montre ?',
    answer: 'Les changements d\'altitude endommagent rarement les montres mécaniques. Une décompression rapide (comme dans un avion) peut causer des problèmes d\'étanchéité. Les variations normales d\'altitude pendant les voyages sont bien dans les tolérances de conception.',
  },
];

const howTo = [
  {
    name: 'Sélectionnez une altitude',
    text: 'Faites glisser le curseur d\'altitude vers le haut ou le bas pour simuler différentes élévations, du niveau de la mer à 8.000 m. Observez comment l\'oscillation du balancier et les données atmosphériques changent en temps réel.',
  },
  {
    name: 'Lisez la déviation',
    text: 'L\'affichage de la déviation de marche montre les secondes estimées gagnées par jour à l\'altitude sélectionnée. Le graphique ci-dessous montre la tendance sur toutes les altitudes.',
  },
  {
    name: 'Considérez les facteurs',
    text: 'Observez comment la densité de l\'air diminue avec l\'altitude tandis que la déviation augmente. Les données de température et de pression fournissent un contexte pour les changements environnementaux.',
  },
];

const title = 'Estimateur de Précision en Altitude: Comment l\'Élévation Affecte Votre Montre Mécanique';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'estimateur-altitude',
  title,
  description: 'Découvrez comment l\'altitude affecte la précision des montres mécaniques. Ajustez l\'élévation du niveau de la mer au sommet et voyez en temps réel les changements d\'oscillation du balancier, de déviation de marche, de densité de l\'air, de pression et de température.',
  ui: {
    title: 'Estimateur de Précision en Altitude',
    altitudeLabel: 'Altitude',
    altitudeUnit: 'm',
    seaLevel: 'Niveau de la Mer',
    deviationLabel: 'Déviation de Marche',
    deviationUnit: 's/j',
    pressureLabel: 'Pression',
    pressureUnit: 'hPa',
    densityLabel: 'Densité de l\'Air',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Température',
    temperatureUnit: '°C',
    oscillationLabel: 'Balancier',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Marche',
    atmDataTitle: 'Conditions Atmosphériques',
    howItWorks: 'Fonctionnement',
    howItWorksDesc: 'La densité réduite de l\'air en haute altitude diminue la traînée sur le balancier, augmentant l\'amplitude et accélérant la montre. Cet outil estime la déviation basée sur les modèles atmosphériques standards.',
    negligible: 'Négligeable',
    minor: 'Mineur',
    noticeable: 'Notable',
    significant: 'Significatif',
    severe: 'Sévère',
    step1: 'Faites glisser le curseur pour simuler des altitudes du niveau de la mer à 8.000 m.',
    step2: 'Regardez l\'animation du balancier et l\'indicateur de déviation en temps réel.',
    step3: 'Consultez les données atmosphériques pour comprendre les facteurs environnementaux.',
    tipTitle: 'Conseil',
    tipContent: 'L\'effet varie selon le mouvement: les mouvements haute fréquence (36.000 alt/h) sont moins affectés que les mouvements vintage basse fréquence (18.000 alt/h).',
    deviationChart: 'Déviation vs Altitude',
    altitudeM: 'Altitude (m)',
    secondsPerDay: 's/j',
    particleLabel: 'Molécules d\'Air',
    airDensity: 'Densité de l\'Air',
  },
  seo: [
    { type: 'title', text: 'Estimateur Interactif de Précision en Altitude pour Montres Mécaniques', level: 2 },
    { type: 'paragraph', html: 'L\'<strong>Estimateur de Précision en Altitude</strong> est un outil interactif qui visualise comment les changements d\'élévation affectent la précision des montres mécaniques. En simulant des altitudes du niveau de la mer à 8.000 m, vous voyez la déviation estimée causée par les variations de densité, pression et température.' },
    { type: 'title', text: 'Comment l\'Altitude Affecte la Précision', level: 3 },
    { type: 'paragraph', html: 'À haute altitude, <strong>la densité de l\'air diminue</strong>, réduisant la traînée aérodynamique sur le balancier. Cela permet au balancier d\'osciller avec une plus grande amplitude, faisant légèrement accélérer la montre. L\'effet est typiquement de <strong>+2 à +6 secondes par jour</strong> pour 1.000 m d\'élévation.' },
    { type: 'title', text: 'Déviation de Marche à Différentes Altitudes', level: 3 },
    {
      type: 'table', headers: ['Altitude', 'Densité Air', 'Pression', 'Température', 'Dév. Estimée'], rows: [
        ['Niveau Mer (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Référence'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/j'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/j'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/j'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/j'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/j'],
      ]
    },
    { type: 'title', text: 'Facteurs Environnementaux', level: 3 },
    { type: 'paragraph', html: 'Au-delà de la densité de l\'air, d\'autres facteurs environnementaux en haute altitude peuvent affecter les performances: la <strong>température</strong> influence la viscosité du lubrifiant, les <strong>changements de pression</strong> peuvent affecter l\'étanchéité. L\'effet de la densité de l\'air sur le balancier reste le facteur dominant.' },
    { type: 'diagnostic', variant: 'info', title: 'Outil de Simulation Interactif', icon: 'mdi:axis-arrow', badge: 'HORLOGERIE', html: 'Cet outil fournit des valeurs estimées basées sur le modèle ISA et des observations empiriques. Les résultats réels varient selon le calibre, l\'état et les tolérances de fabrication.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

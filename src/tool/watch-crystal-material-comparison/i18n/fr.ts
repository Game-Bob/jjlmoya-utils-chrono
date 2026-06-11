import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Quel verre de montre est le plus résistant aux rayures?', answer: 'Le verre saphir est le plus résistant avec une dureté de 9 sur l\'échelle de Mohs - seul le diamant est plus dur. Le verre minéral (5) est modéré, tandis que l\'hesalite (2-3) se raye facilement mais peut être poli.' },
  { question: 'Peut-on réparer un verre hesalite rayé?', answer: 'Oui, les rayures sur l\'hesalite peuvent être polies avec Polywatch en quelques minutes. Les verres minéraux et saphir ne peuvent pas être polis et doivent être remplacés.' },
  { question: 'Quel verre est le meilleur pour une montre de plongée?', answer: 'Le saphir est la référence pour les montres de plongée pour sa résistance aux rayures et sa durabilité. L\'hesalite n\'est pas recommandé pour la plongée.' },
];
const howTo = [
  { name: 'Sélectionner un verre', text: 'Cliquez sur un verre à gauche pour voir sa fiche de statistiques à droite.' },
  { name: 'Comparer deux verres', text: 'Faites glisser un verre depuis la liste et déposez-le sur un autre pour les comparer côte à côte.' },
  { name: 'Fermer la comparaison', text: 'Cliquez sur "Close Comparison" pour revenir à la vue unique.' },
];
const title = 'Comparaison de Verres de Montre: Hesalite vs Minéral vs Saphir';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'comparaison-verres-montre-hesalite-mineral-saphir',
  title,
  description: 'Comparez les verres de montre hesalite, minéral et saphir avec des fiches de statistiques interactives. Voyez la dureté, la clarté, la résistance aux chocs et aux rayures.',
  ui: {
    title: 'Comparaison de Verres', subTitle: 'Interactive Crystal Stats', hardness: 'Dureté', clarity: 'Clarté',
    impactResistance: 'Chocs', scratchResistance: 'Rayures', durability: 'Résistance', priceRange: 'Prix',
    step1: 'Cliquez sur un verre à gauche.', step2: 'Glissez-en un sur un autre pour comparer.',
    step3: 'Cliquez sur Fermer.', tipTitle: 'Conseil',
    tipContent: 'La note globale est une moyenne de toutes les stats. Plus haut ne signifie pas meilleur pour tout - l\'hesalite a la meilleure résistance aux chocs.',
    dragHint: 'Glisser', dragSub: 'pour comparer',
  },
  seo: [
    { type: 'title', text: 'Comparaison de Verres de Montre: Hesalite vs Minéral vs Saphir', level: 2 },
    { type: 'paragraph', html: 'Comparez <strong>hesalite, minéral et saphir</strong> avec des fiches de statistiques interactives. Dureté, clarté, résistance aux chocs et aux rayures.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

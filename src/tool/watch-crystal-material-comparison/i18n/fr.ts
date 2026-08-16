import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "Quel verre de montre est le plus résistant aux rayures?",
    "answer": "Le verre saphir est le plus résistant avec une dureté de 9 sur l'échelle de Mohs. Le verre minéral (5) est moyennement résistant et l'hésalite (2-3) se raye facilement mais se polit en quelques minutes."
  },
  {
    "question": "Peut-on réparer un verre hésalite rayé?",
    "answer": "Oui, l'hésalite (acrylique) se polit facilement avec Polywatch. Les verres minéraux et saphir ne se polissent pas et doivent être remplacés."
  },
  {
    "question": "Le verre saphir est-il incassable?",
    "answer": "Non, le saphir n'est pas incassable. Il est très dur mais cassant sous les chocs violents. L'hésalite résiste mieux aux impacts car elle se déforme sans s'éclater."
  },
  {
    "question": "Quel verre est idéal pour une montre de plongée?",
    "answer": "Le verre saphir est la référence pour la plongée grâce à sa résistance supérieure aux rayures et à la pression."
  }
];
const howTo = [
  {
    "name": "Sélectionner un verre",
    "text": "Cliquez sur n'importe quel verre pour voir sa fiche technique."
  },
  {
    "name": "Comparer deux verres",
    "text": "Glissez un verre sur un autre pour les comparer côte à côte."
  },
  {
    "name": "Fermer le comparateur",
    "text": "Cliquez sur fermer pour revenir à la vue individuelle."
  }
];
const title = 'Comparatif verres de montre Hesalite vs Verre Mineral vs Saphir';

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
  {
    "type": "title",
    "text": "Hésalite vs Verre Minéral vs Saphir: Guide comparatif complet",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le choix du <strong>verre de montre</strong> est essentiel. Ce guide compare <strong>l'hésalite, le verre minéral et le saphir</strong> en dureté, clarté, résistance aux chocs et prix."
  },
  {
    "type": "title",
    "text": "Verre Hésalite (Acrylique / Plexiglas)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L'hésalite est le verre traditionnel depuis les années 1930. Souple (2-3 Mohs), il se raye facilement mais se polit rapidement. Exemple emblématique: Omega Speedmaster Professional."
  },
  {
    "type": "title",
    "text": "Verre Minéral (Trempé)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Le verre minéral est en dioxyde de silicium traité thermiquement. Avec une dureté Mohs de 5, il équipe de nombreuses montres Seiko, Citizen et Orient."
  },
  {
    "type": "title",
    "text": "Verre Saphir (Corindon Synthétique)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Fabriqué en corindon synthétique, le verre saphir atteint une dureté de 9 sur l'échelle de Mohs. Pratiquement inrayable, c'est le standard des montres de luxe."
  },
  {
    "type": "title",
    "text": "Tableau comparatif des verres de montre",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Propriété",
      "Hésalite",
      "Verre Minéral",
      "Verre Saphir"
    ],
    "rows": [
      [
        "Dureté Mohs",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "Clarté",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "Résistance aux chocs",
        "5/10 (Meilleure)",
        "3/10",
        "2/10"
      ],
      [
        "Résistance rayures",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "Réparable",
        "Oui (polissage)",
        "Non (remplacement)",
        "Non (remplacement)"
      ],
      [
        "Prix",
        "5 - 30 €",
        "10 - 50 €",
        "30 - 200+ €"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Recommandation d'achat",
    "icon": "mdi:diamond-stone",
    "badge": "CONSEIL",
    "html": "Pour un <strong>usage quotidien</strong> privilégiez le saphir. Pour une <strong>montre vintage</strong> l'hésalite offre un charme inégalé."
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

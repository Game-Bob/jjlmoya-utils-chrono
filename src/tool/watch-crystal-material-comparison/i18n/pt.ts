import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Qual cristal de relógio é mais resistente a arranhões?', answer: 'O cristal de safira é o mais resistente com dureza 9 na escala de Mohs - apenas o diamante é mais duro. O mineral (5) é moderado, enquanto o hesalite (2-3) arranha facilmente mas pode ser polido.' },
  { question: 'Um cristal hesalite arranhado pode ser reparado?', answer: 'Sim, arranhões no hesalite podem ser polidos com Polywatch em minutos. Cristais minerais e de safira não podem ser polidos e devem ser substituídos.' },
  { question: 'Qual cristal é melhor para relógio de mergulho?', answer: 'A safira é o padrão para relógios de mergulho por sua resistência a arranhões e durabilidade. O hesalite não é recomendado para mergulho.' },
];
const howTo = [
  { name: 'Selecionar um cristal', text: 'Clique num cristal à esquerda para ver sua ficha de estatísticas à direita.' },
  { name: 'Comparar dois cristais', text: 'Arraste um cristal da lista e solte sobre outro para compará-los lado a lado.' },
  { name: 'Fechar comparação', text: 'Clique em "Close Comparison" para voltar à vista individual.' },
];
const title = 'Comparação de Cristais de Relógio: Hesalite vs Mineral vs Safira';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'comparacao-cristais-relogio-hesalite-mineral-safira',
  title,
  description: 'Compare cristais de relógio hesalite, mineral e safira com cartas de estatísticas interativas. Veja dureza, clareza, resistência ao impacto e a arranhões.',
  ui: {
    title: 'Comparação de Cristais', subTitle: 'Interactive Crystal Stats', hardness: 'Dureza', clarity: 'Clareza',
    impactResistance: 'Impacto', scratchResistance: 'Arranhão', durability: 'Durabilidade', priceRange: 'Preço',
    step1: 'Clique num cristal à esquerda.', step2: 'Arraste um sobre outro para comparar.',
    step3: 'Clique em Fechar.', tipTitle: 'Dica',
    tipContent: 'A classificação geral é uma média de todas as estatísticas. Mais alto nem sempre é melhor - o hesalite tem a melhor resistência ao impacto.',
    dragHint: 'Arrastar', dragSub: 'para comparar',
  },
  seo: [
    { type: 'title', text: 'Comparação de Cristais de Relógio: Hesalite vs Mineral vs Safira', level: 2 },
    { type: 'paragraph', html: 'Compare <strong>hesalite, mineral e safira</strong> com cartas de estatísticas interativas. Dureza, clareza, resistência ao impacto e a arranhões.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

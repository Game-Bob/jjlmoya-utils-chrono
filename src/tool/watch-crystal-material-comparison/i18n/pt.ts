import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

const faq = [
  { "question": "Qual vidro de relógio é mais resistente a riscos?", "answer": "O safira é o mais resistente, com dureza 9 na escala de Mohs. O mineral fica perto de 5 e a hesalita entre 2 e 3, mas pode ser polida." },
  { "question": "É possível reparar hesalita riscada?", "answer": "Sim. O acrílico hesalita pode ser polido com produtos como Polywatch. Vidros minerais e de safira normalmente precisam de ser substituídos." },
  { "question": "O vidro de safira é inquebrável?", "answer": "Não. É muito duro, mas pode rachar com um impacto forte. A hesalita absorve melhor os impactos porque se deforma." },
  { "question": "Qual vidro é melhor para um relógio de mergulho?", "answer": "A safira é o padrão em relógios de mergulho pela resistência a riscos e à pressão subaquática." }
];
const howTo = [
  { "name": "Selecionar um tipo de vidro", "text": "Clique num vidro da lista à esquerda para abrir o respetivo cartão de estatísticas." },
  { "name": "Comparar dois vidros", "text": "Arraste um vidro sobre o outro para os comparar lado a lado." },
  { "name": "Fechar a comparação", "text": "Clique em fechar comparação para voltar à vista individual." }
];
const description = 'Compare cristais de relógio hesalite, mineral e safira com cartas de estatísticas interativas. Veja dureza, clareza, resistência ao impacto e a arranhões.';
const title = 'Comparação de vidros de relógio: hesalite vs mineral vs safira';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

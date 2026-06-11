import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: '가장 긁힘에 강한 시계 크리스탈은?', answer: '사파이어 크리스탈은 모스 경도 9로 가장 긁힘에 강합니다 - 다이아몬드만 더 단단합니다. 미네랄(5)은 중간, 헤살라이트(2-3)는 쉽게 긁히지만 연마 가능합니다.' },
  { question: '긁힌 헤살라이트 크리스탈을 수리할 수 있나요?', answer: '네, 헤살라이트의 긁힘은 Polywatch로 몇 분 만에 연마할 수 있습니다. 미네랄과 사파이어는 연마할 수 없으며 교체해야 합니다.' },
  { question: '다이빙 시계에 가장 적합한 크리스탈은?', answer: '사파이어는 내구성과 긁힘 저항성 덕분에 다이빙 시계의 표준입니다. 헤살라이트는 다이빙에 권장되지 않습니다.' },
];
const howTo = [
  { name: '크리스탈 선택', text: '왼쪽의 크리스탈을 클릭하면 오른쪽에 통계 카드가 나타납니다.' },
  { name: '두 크리스탈 비교', text: '목록에서 크리스탈을 끌어 다른 크리스탈에 놓으면 나란히 비교할 수 있습니다.' },
  { name: '비교 닫기', text: '"Close Comparison"을 클릭하면 단일 보기로 돌아갑니다.' },
];
const title = '시계 크리스탈 비교: 헤살라이트 vs 미네랄 vs 사파이어';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'watch-crystal-material-comparison',
  title,
  description: '헤살라이트, 미네랄 글라스, 사파이어 시계 크리스탈을 인터랙티브 통계 카드로 비교하세요. 경도, 투명도, 내충격성, 내스크래치성, 내구성을 한눈에 확인하세요.',
  ui: {
    title: '크리스탈 비교', subTitle: 'Interactive Crystal Stats', hardness: '경도', clarity: '투명도',
    impactResistance: '내충격', scratchResistance: '내스크래치', durability: '내구성', priceRange: '가격',
    step1: '왼쪽의 크리스탈을 클릭하세요.', step2: '하나를 다른 위로 끌어서 비교하세요.',
    step3: '닫기를 클릭하세요.', tipTitle: '팁',
    tipContent: '전체 평점은 모든 통계의 평균입니다. 높다고 항상 좋은 것은 아닙니다 - 헤살라이트가 내충격성이 가장 좋습니다.',
    dragHint: '드래그', dragSub: '하여 비교',
  },
  seo: [
    { type: 'title', text: '시계 크리스탈 비교: 헤살라이트 vs 미네랄 vs 사파이어', level: 2 },
    { type: 'paragraph', html: '<strong>헤살라이트, 미네랄, 사파이어</strong> 시계 크리스탈을 인터랙티브 통계 카드로 비교하세요.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

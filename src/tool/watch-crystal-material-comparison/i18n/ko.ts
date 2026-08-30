import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "가장 긁힘에 강한 시계 유리는 무엇인가요?",
    "answer": "모스 경도 9의 사파이어 글라스가 가장 강합니다. 미네랄 글라스는 5, 헤살라이트는 2-3 수준이며 헤살라이트는 폴리워치로 쉽게 연마할 수 있습니다."
  },
  {
    "question": "스크래치가 난 헤살라이트 유리를 수리할 수 있나요?",
    "answer": "네, 아크릴 재질의 헤살라이트는 연마제로 몇 분 만에 긁힘을 제거할 수 있습니다. 미네랄과 사파이어 유리는 연마가 불가능하여 교체해야 합니다."
  },
  {
    "question": "사파이어 글라스는 깨지지 않나요?",
    "answer": "아닙니다. 사파이어는 경도가 높지만 강한 충격에는 깨질 수 있습니다. 충격 흡수력은 변형되는 헤살라이트가 가장 뛰어납니다."
  },
  {
    "question": "다이버 시계에 가장 적합한 유리는 무엇인가요?",
    "answer": "내스크래치성과 수압 내구성이 뛰어난 사파이어 글라스가 다이버 시계의 표준입니다."
  }
];
const howTo = [
  {
    "name": "유리 종류 선택",
    "text": "목록에서 유리를 클릭하여 스펙을 확인합니다."
  },
  {
    "name": "두 유리 비교",
    "text": "드래그하여 두 유리를 나란히 비교합니다."
  },
  {
    "name": "비교 창 닫기",
    "text": "닫기 버튼을 눌러 개별 보기로 돌아갑니다."
  }
];
const title = '시계 유리의 종류 비교 헤살라이트 vs 미네랄 글라스 vs 사파이어 글라스';

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
  {
    "type": "title",
    "text": "헤살라이트 vs 미네랄 vs 사파이어 시계 유리 완벽 비교 가이드",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "시계 유리의 선택은 매우 중요합니다. 본 가이드에서는 <strong>헤살라이트, 미네랄 글라스, 사파이어 글라스</strong>의 경도, 투명도, 충격 내구성, 가격을 비교합니다."
  },
  {
    "type": "title",
    "text": "헤살라이트 글라스 (아크릴 / 플라스틱)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "1930년대부터 사용된 전통적인 유리 재질입니다. 충격 흡수력이 뛰어나 오메가 스피드마스터 문워치에 적용된 것으로 유명합니다."
  },
  {
    "type": "title",
    "text": "미네랄 글라스 (강화 유리)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "열처리된 강화 유리로 모스 경도 5입니다. 세이코, 시티즌 등 실용적인 시계에 많이 사용됩니다."
  },
  {
    "type": "title",
    "text": "사파이어 글라스 (인공 사파이어)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "모스 경도 9의 최고급 시계 유리 소재입니다. 긁힘이 거의 생기지 않으며 럭셔리 시계의 필수 요소입니다."
  },
  {
    "type": "title",
    "text": "시계 유리 스펙 비교표",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "항목",
      "헤살라이트",
      "미네랄 글라스",
      "사파이어 글라스"
    ],
    "rows": [
      [
        "모스 경도",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "투명도",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "내충격성",
        "5/10 (최상)",
        "3/10",
        "2/10"
      ],
      [
        "내스크래치성",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "연마 수리",
        "가능",
        "불가 (교체)",
        "불가 (교체)"
      ],
      [
        "가격대",
        "1만원~",
        "2만원~",
        "5만원~"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "시계 유리 선택 팁",
    "icon": "mdi:diamond-stone",
    "badge": "참고",
    "html": "<strong>데일리 워치</strong>에는 긁힘 걱정 없는 사파이어가 좋으며, <strong>빈티지 감성</strong>을 원한다면 헤살라이트를 추천합니다."
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

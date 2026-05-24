import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'wrist-presence-calculator',
  title: '시계 손목 착용감 계산기',
  description: '케이스-손목 비율, 손목 평면 커버리지를 계산하고 미적 가이드라인에 따른 이상적인 시계 크기를 결정합니다.',
  ui: {
    title: '손목 사이즈 설정',
    wristCircumferenceLabel: '손목 둘레',
    caseDiameterLabel: '케이스 지름',
    lugToLugLabel: '러그 간 거리',
    wristWidthLabel: '손목 평면 너비',
    autoEstimateWidthLabel: '평면 너비 자동 추정 (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: '손목 착용 분석',
    caseWristRatioLabel: '케이스-손목 비율',
    wristCoverageLabel: '손목 커버리지',
    verdictLabel: '판정',
    verdictOversized: '오버사이즈',
    verdictBold: '볼드 / 모던 착용감',
    verdictGolden: '골든 / 클래식 착용감',
    verdictVintage: '빈티지 / 언더사이즈',
    coverageSafe: '적정 착용',
    coverageBold: '볼드 착용',
    coverageOverhang: '러그 오버행 경고',
    sweetSpotTitle: '착용 스타일',
    sweetSpotDesc: '스위트 스팟은 가장 균형 잡힌 시각적 외관을 나타냅니다.',
    minClassicLabel: '빈티지 / 클래식 착용감',
    sweetSpotLabel: '미적 스위트 스팟',
    maxBoldLabel: '모던 / 볼드 착용감',
    maxLugToLugLabel: '권장 최대 러그 간 거리',
    idealSizesTitle: '이상적인 사이즈 가이드',
    visualizerTitle: '실시간 착용 시뮬레이터',
    wristWidthHelp: '손목 형태를 기반으로 추정한 값입니다.',
    estimatedLabel: '추정',
    customLabel: '손목',
  },
  seo: [
    { type: 'title', text: '완벽한 시계 크기 선택하는 법: 비율 핏 가이드', level: 2 },
    { type: 'paragraph', html: '올바른 시계 크기를 찾는 것은 수학, 기하학, 개인 취향의 조합입니다. 시계학에서 타임피스가 팔목에 놓이는 방식을 <strong>손목 존재감</strong>이라고 부릅니다. 시계는 균형감 있게 보여야 합니다. 보기 흉한 오버행으로 팔을 압도해서도, 작은 점처럼 사라져서도 안 됩니다. 이 균형을 달성하기 위해 컬렉터들은 케이스 지름, 러그 간 거리, 손목 형태라는 세 가지 핵심 지표를 분석합니다.' },
    { type: 'title', text: '케이스-손목 비율 이해하기', level: 3 },
    { type: 'paragraph', html: '시계 비율을 평가하는 전통적인 방법은 케이스-손목 비율입니다. 손목 둘레를 밀리미터로 환산한 뒤 케이스 지름으로 나누면 비율을 얻을 수 있습니다. <strong>4.5~5.0</strong> 사이의 비율이 클래식한 스위트 스팟이며, <strong>4.0~4.5</strong>는 볼드하고 스포티한 현대적 느낌을 줍니다. 5.0을 초과하면 빈티지 드레스 워치 미학, 4.0 미만은 오버사이즈로 여겨집니다.' },
    { type: 'title', text: '러그 간 거리가 케이스 지름보다 중요한 이유', level: 3 },
    { type: 'paragraph', html: '케이스 지름이 주목받지만, <strong>러그 간 거리</strong>(위아래 러그 끝 사이의 세로 길이)가 진정한 착용 적합성 기준입니다. 황금 법칙은 러그 간 거리가 손목 평면 너비를 초과해서는 안 된다는 것입니다. 러그가 손목 가장자리를 넘으면 시계가 흔들리고, 스트랩과 피부 사이에 틈이 생기며, 시각적 균형이 무너집니다.' },
    { type: 'title', text: '평평한 손목 vs. 둥근 손목: 내 체형에 맞는 사이즈 선택', level: 3 },
    { type: 'paragraph', html: '손목 둘레는 이야기의 절반만 알려줍니다. 같은 둘레를 가진 손목도 단면 형태는 다를 수 있습니다. 평평한 손목은 상단 면적이 넓어 러그 간 거리가 긴 시계도 오버행 없이 착용할 수 있습니다. 둥근 손목은 원통형에 가까워 상단이 좁기 때문에 오버행을 피하려면 러그 간 거리가 짧은 시계가 필요합니다.' },
  ],
  faq: [
    {
      question: '이상적인 케이스-손목 비율은 얼마인가요?',
      answer: '이상적인 비율은 4.0~5.0입니다. 4.5는 전통적인 시계학의 스위트 스팟입니다. 4.0~4.5는 현대적이고 볼드한 손목 존재감을 주며, 5.0 초과는 빈티지 드레스 워치에 적합하고, 4.0 미만은 오버사이즈로 보이는 경향이 있습니다.',
    },
    {
      question: '러그 간 거리가 케이스 지름보다 중요한 이유는 무엇인가요?',
      answer: '케이스 지름은 시계 페이스의 너비만 측정하지만, 러그 간 거리는 손목 위 시계의 전체 길이를 결정합니다. 러그 간 거리가 손목 평면 너비를 초과하면 러그가 오버행되어 스트랩이 수직으로 늘어지고, 시계가 불안정하고 지나치게 커 보입니다.',
    },
    {
      question: '평평한 손목과 둥근 손목은 착용감에 어떤 차이를 만드나요?',
      answer: '같은 둘레(예: 17cm)의 손목도 시계 착용감이 다를 수 있습니다. 평평한 손목은 상단 면적이 넓어 러그 간 거리가 긴 시계도 오버행 없이 안정적으로 착용할 수 있습니다. 둥근 손목은 상단이 더 좁아 안정적인 착용을 위해 짧은 러그 간 거리가 필요합니다.',
    },
    {
      question: '두께와 베젤 너비는 시계의 시각적 크기에 어떤 영향을 미치나요?',
      answer: '베젤이 매우 얇은 시계(드레스 워치)는 다이얼 표면적이 넓어 실제 지름보다 더 크게 보입니다. 두꺼운 회전 베젤을 가진 다이버 워치는 다이얼이 작아 더 컴팩트하게 착용됩니다. 마찬가지로 두께가 13mm를 초과하는 시계는 더 두껍고 시각적으로 무거워 보입니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '손목 측정하기',
      text: '유연한 줄자를 손목 뼈 주위에 감아 cm 또는 인치로 둘레를 측정하세요.',
    },
    {
      name: '시계 치수 입력하기',
      text: '평가하려는 시계의 케이스 지름과 러그 간 거리를 입력하세요.',
    },
    {
      name: '착용 분석 및 시뮬레이터 확인',
      text: '케이스-손목 비율, 러그 오버행 경고를 확인하고 실시간 시뮬레이션 다이어그램을 확인하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '이상적인 케이스-손목 비율은 얼마인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '이상적인 비율은 4.0~5.0입니다. 4.5는 전통적인 시계학의 스위트 스팟입니다. 4.0~4.5는 현대적이고 볼드한 손목 존재감을 주며, 5.0 초과는 빈티지 드레스 워치에 적합하고, 4.0 미만은 오버사이즈로 보이는 경향이 있습니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '러그 간 거리가 케이스 지름보다 중요한 이유는 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '케이스 지름은 시계 페이스의 너비만 측정하지만, 러그 간 거리는 손목 위 시계의 전체 길이를 결정합니다. 러그 간 거리가 손목 평면 너비를 초과하면 러그가 오버행되어 스트랩이 수직으로 늘어지고, 시계가 불안정하고 지나치게 커 보입니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 손목 착용감 계산기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '완벽한 시계 크기 결정 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '손목 측정하기',
          'text': '유연한 줄자를 손목 뼈 주위에 감아 cm 또는 인치로 둘레를 측정하세요.'
        },
        {
          '@type': 'HowToStep',
          'name': '시계 치수 입력하기',
          'text': '평가하려는 시계의 케이스 지름과 러그 간 거리를 입력하세요.'
        },
        {
          '@type': 'HowToStep',
          'name': '착용 분석 및 시뮬레이터 확인',
          'text': '케이스-손목 비율, 러그 오버행 경고를 확인하고 실시간 시뮬레이션 다이어그램을 확인하세요.'
        }
      ]
    }
  ]
};

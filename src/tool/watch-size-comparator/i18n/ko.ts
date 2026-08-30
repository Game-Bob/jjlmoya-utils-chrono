import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'watch-size-comparator',
  title: '시계 사이즈 비교기: 손목 핏을 시각적으로 확인하세요',
  description: '시계 케이스 사이즈를 시각적으로 비교해보세요. 직경, 러그 투 러그, 손목 둘레를 입력하면 구매 전에 착용감을 확인할 수 있습니다.',
  ui: {
    title: '시계 사이즈 비교기',
    addWatch: '시계 추가',
    watchName: '시계 이름',
    watchNamePlaceholder: '예: 롤렉스 서브마리너',
    caseDiameter: '케이스 직경',
    lugToLug: '러그 투 러그',
    thickness: '두께',
    wristSize: '손목 둘레',
    wristSizePlaceholder: '예: 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: '삭제',
    yourWatches: '내 시계',
    fitLegend: '착용감 범례',
    excellentFit: '최적',
    goodFit: '양호',
    borderlineFit: '애매함',
    largeFit: '너무 큼',
    wristCurve: '손목',
    nameRequired: '시계 이름을 입력하세요',
    watchTooLarge: '시계가 손목보다 큽니다',
    l2lExceedsWrist: '러그 투 러그가 손목 너비를 초과합니다',
    excellentDesc: '비율이 적절합니다. 러그 투 러그가 손목 안쪽에 안정적으로 위치해요.',
    goodDesc: '양호한 착용감입니다. 살짝 넘치지만 편안해요.',
    borderlineDesc: '애매해요. 러그가 손목 가장자리에 가깝습니다.',
    largeDesc: '너무 커요. 러그가 손목을 넘어갈 가능성이 높습니다.',
    fitsWell: '잘 맞아요',
    slightlyLarge: '약간 커요',
    tooLarge: '너무 커요',
    source: '사이즈 가이드',
    estimateNote: '치수를 입력하고 시계를 추가하면 손목에 어떻게 맞는지 확인할 수 있어요.',
  },
  seo: [
    { type: 'title', text: '시계 사이즈 비교기: 손목 핏을 시각적으로 확인하세요', level: 2 },
    { type: 'paragraph', html: '<strong>42mm 시계</strong>가 <strong>17cm 손목</strong>에 맞을지 궁금하신가요? 48mm 러그 투 러그는 삐져나오지 않을까요? 시계 사이즈 비교기가 시각적인 답을 알려드립니다. 케이스 직경, 러그 투 러그, 두께, 손목 둘레를 입력하면 시계를 실물 크기로 그리고 <span style="color:#22c55e">초록색(최적)</span>부터 <span style="color:#ef4444">빨간색(너무 큼)</span>까지 색상으로 착용감을 표시해요. <strong>미터법과 야드파운드법</strong>을 모두 지원합니다.' },
    { type: 'title', text: '시계 사이즈 용어 설명', level: 3 },
    {
      type: 'glossary', items: [
        { term: '케이스 직경', definition: '크라운을 제외한 시계 케이스의 가로 너비입니다. 보통 34~46mm 범위예요. 가장 흔히 언급되는 사이즈이지만, 착용감을 결정하는 유일한 요소는 아닙니다.' },
        { term: '러그 투 러그(L2L)', definition: '스트랩이 연결되는 위아래 러그 사이의 거리예요. 시계가 손목에서 삐져나오는지를 결정합니다. 40mm 시계도 L2L이 50mm이면 46mm L2L의 42mm 시계보다 더 크게 보일 수 있어요.' },
        { term: '손목 평평한 너비', definition: '손목 둘레가 아니라 윗면의 너비입니다. 대략 손목 둘레 ÷ π에서 2~4cm를 뺀 값이에요. 시계가 실제로 얹히는 면적입니다.' },
        { term: '케이스-손목 비율', definition: '케이스 직경을 손목 너비로 나눈 값입니다. 0.6~0.75(60~75%) 비율이 고전적인 적정 착용감으로 여겨져요.' },
      ]
    },

    { type: 'title', text: '내 손목에는 몇 mm 시계가 어울릴까?', level: 3 },
    {
      type: 'table', headers: ['손목 둘레', '평평한 너비(약)', '적정 케이스 직경', '최대 러그 투 러그', '추천 용도'], rows: [
        ['14-15 cm (5.5-5.9 in)', '38-42 mm', '30-34 mm', '38-42 mm', '빈티지 & 드레스 워치'],
        ['15-16 cm (5.9-6.3 in)', '40-44 mm', '34-36 mm', '40-44 mm', '작은 클래식 시계'],
        ['16-17 cm (6.3-6.7 in)', '42-46 mm', '36-39 mm', '42-46 mm', '데일리 활용도 높은 사이즈'],
        ['17-18 cm (6.7-7.1 in)', '44-48 mm', '38-42 mm', '44-48 mm', '대부분 브랜드의 표준'],
        ['18-19 cm (7.1-7.5 in)', '46-50 mm', '40-44 mm', '46-50 mm', '다이버 워치 & GMT'],
        ['19-20 cm (7.5-7.9 in)', '48-52 mm', '42-46 mm', '48-52 mm', '툴 & 파일럿 워치'],
        ['20-21 cm (7.9-8.3 in)', '50-54 mm', '44-48 mm', '50-54 mm', '오버사이즈 & 플리거 워치'],
      ]
    },

    { type: 'title', text: '시계 착용을 위한 손목 측정 방법', level: 3 },
    {
      type: 'list', items: [
        '손목뼈(척골 경상돌기) 바로 뒤에 줄자를 감으세요. 편안하게 밀착되어야 하지만 조이지는 않아야 해요.',
        '줄자가 없다면 실이나 케이블을 이용해 겹친 부분을 표시한 뒤 자로 재면 됩니다.',
        '센티미터 또는 인치로 기록하세요. 평균 남성 손목은 17~19cm(6.7~7.5in), 평균 여성 손목은 14~16cm(5.5~6.3in)예요.',
        '평평한 손목 너비를 추정하려면 둘레에서 2~4cm를 빼거나 이 도구의 자동 추정 기능을 사용해보세요.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: '러그 투 러그가 진짜 착용감을 결정합니다', icon: 'mdi:ruler', html: '대부분 <strong>케이스 직경</strong>에 집중하지만, 시계가 손목에 맞는지는 <strong>러그 투 러그</strong>가 결정합니다. 55mm 평평한 손목(17cm 둘레)에 48mm L2L 시계는 손목 너비의 87%를 차지해요. 65%를 넘으면 러그가 손목 가장자리에 닿기 시작합니다. <strong>항상 L2L을 먼저 확인하세요.</strong>' },

    { type: 'tip', title: 'CM 아니면 인치? 익숙한 단위를 사용하세요', html: '이제 미터법과 야드파운드법을 모두 지원합니다. 평소 쓰는 단위로 손목을 측정하세요. 시계 케이스 치수는 <strong>항상 밀리미터</strong>이므로(미국에서도 마찬가지), 직경과 L2L은 mm로 유지되고 손목 측정값만 바뀝니다. 시계 업계의 실제 방식과 동일해요.' },

    {
      type: 'summary', title: '구매 전 체크리스트', items: [
        '손목 둘레를 측정해서 도구에 입력하세요.',
        '케이스 직경뿐만 아니라 러그 투 러그도 확인하세요.',
        '클래식한 착용감을 원한다면 시계가 손목 평평한 너비의 60~75%를 차지해야 해요.',
        '러그가 손목 가장자리를 넘으면 직경과 관계없이 시계가 너무 크게 느껴집니다.',
        '구매 전에 여러 시계를 나란히 비교해보세요.',
      ]
    },
  ],
  faq: [
    {
      question: '시계 착용을 위해 손목을 어떻게 측정하나요?',
      answer: '손목뼈 주변에 줄자를 감아 측정하세요. 줄자가 없다면 실을 감고 겹친 부분을 표시한 뒤 자로 재면 됩니다. 남성 평균 17~19cm, 여성 평균 14~16cm예요.',
    },
    {
      question: '러그 투 러그가 무엇이고 왜 중요한가요?',
      answer: '러그 투 러그는 위아래 러그 사이의 거리로, 시계가 손목에서 삐져나오는지를 결정합니다. 17cm 손목(약 55mm 평평한 너비)에 48mm 러그 투 러그는 87%로 적절합니다. 65%를 넘으면 삐져나오기 시작해요.',
    },
    {
      question: '17cm 손목에는 몇 mm 시계가 어울리나요?',
      answer: '17cm 손목(약 55mm 평평한 너비)에는 직경 36~42mm, 러그 투 러그 44~50mm 시계가 편안하게 맞습니다. 가장 이상적인 조합은 38~40mm에 46~48mm L2L이에요.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '손목 둘레 입력하기',
      text: '손목 둘레를 센티미터로 입력하세요. 도구가 손목 실루엣을 시각적으로 업데이트해요.',
    },
    {
      name: '시계 치수 입력하기',
      text: '케이스 직경, 러그 투 러그, 두께를 밀리미터 단위로 입력하세요.',
    },
    {
      name: '추가하고 비교하기',
      text: '"시계 추가"를 클릭하면 저장됩니다. 여러 시계를 추가하고 클릭해서 착용감을 비교해보세요.',
    },
    {
      name: '색상 확인하기',
      text: '초록색 = 최적, 노란색 = 애매함, 빨간색 = 손목에 너무 큼.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '시계에 맞는 손목 둘레는 어떻게 측정하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '유연한 줄자로 손목뼈 주변을 측정하세요. 평균 손목 둘레는 남성 17-19cm, 여성 14-16cm입니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '러그 투 러그란 무엇이며 왜 중요한가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '러그 투 러그는 위쪽 러그와 아래쪽 러그 사이의 거리입니다. 시계가 손목 밖으로 튀어나오는지를 결정합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '손목 둘레 17cm에는 어떤 크기의 시계가 맞나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '손목 둘레 17cm에는 직경 36-42mm, 러그 투 러그 44-50mm인 시계가 잘 맞습니다. 가장 균형 잡힌 크기는 직경 38-40mm, L2L 46-48mm입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to compare watch sizes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter your wrist size',
          'text': 'Type your wrist circumference in centimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter watch dimensions',
          'text': 'Input case diameter, lug-to-lug, and thickness.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Add and compare',
          'text': 'Click Add Watch to save it. Add multiple watches to compare.',
        },
      ],
    },
  ],
};

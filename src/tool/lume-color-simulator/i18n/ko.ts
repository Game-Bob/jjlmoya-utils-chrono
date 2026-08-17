import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-color-simulator',
  title: '루미 컬러 시뮬레이터: 시계 발광색 시각화 도구',
  description: '다양한 루미 컬러를 실시간으로 확인하세요. C1, C3, BGW9, 루미노바 등 여러 종류를 주변 밝기 레벨별로 비교해볼 수 있습니다.',
  ui: {
    title: '루미 컬러 시뮬레이터',
    lumeType: '루미 종류',
    brightness: '주변 밝기',
    dark: '어두움',
    light: '밝음',
    color: '색상',
    hex: 'HEX',
    rgb: 'RGB',
    type: '종류',
    description: '설명',
    c1Name: 'C1',
    c1Desc: '그린(클래식)',
    c3Name: 'C3',
    c3Desc: '슈퍼 그린',
    bgw9Name: 'BGW9',
    bgw9Desc: '아이스 블루',
    lumiNovaName: '루미노바',
    lumiNovaDesc: '웜 화이트',
    vintageName: '빈티지',
    vintageDesc: '에이징 라듐',
    orangeName: '오렌지',
    orangeDesc: '다이버 오렌지',
    blueName: '블루',
    blueDesc: '딥 블루',
    greenName: '그린',
    greenDesc: '네온 그린',
    tipTitle: '팁',
    tipContent: '루미의 밝기는 안료 품질과 흡수한 빛의 양에 따라 달라집니다. BGW9는 청백색으로 빛나며 가장 밝고, 빈티지 루미는 따뜻하고 은은하게 빛납니다.',
  },
  seo: [
    { type: 'title', text: '시계 루미 컬러 시뮬레이터 - 실시간 발광색 비교', level: 2 },
    { type: 'paragraph', html: '루미는 시계 수집에서 가장 개인적인 선택 중 하나입니다. <strong>C1 슈퍼-루미노바</strong>의 클래식한 녹색 발광이 좋으신가요, 아니면 <strong>BGW9</strong>의 시원한 청백색이 더 끌리시나요? 이 시뮬레이터는 각 루미 종류가 밝은 햇빛부터 완전한 암흑까지 다양한 밝기 레벨에서 어떻게 보이는지 보여주고, 각 색상의 정확한 <strong>HEX 및 RGB 값</strong>도 함께 제공합니다.' },
    { type: 'title', text: '슈퍼-루미노바 종류 비교', level: 3 },
    {
      type: 'table', headers: ['종류', '주간 색상', '발광 색상', '밝기', '추천 용도'], rows: [
        ['C1', '연한 녹색', '녹색', '중간', '드레스 워치, 오리지널 감성'],
        ['C3', '황록색', '밝은 녹색', '가장 높음', '다이버 워치, 툴 워치'],
        ['BGW9', '오프 화이트', '아이스 블루', '높음', '모던 스포츠 워치, 깔끔한 룩'],
        ['루미노바', '웜 베이지', '웜 화이트', '낮음~중간', '가성비 루미'],
        ['빈티지', '크림 / 황갈색', '따뜻하고 은은함', '낮음', '헤리티지 스타일 시계'],
        ['오렌지', '오렌지', '오렌지', '중간', '다이버 악센트, 레트로 다이버'],
        ['블루', '연한 파랑', '파랑', '중간', '디자이너 다이얼, 패션 워치'],
        ['그린', '밝은 녹색', '녹색', '높음', '밀리터리 스타일 시계'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 - 어떤 것을 선택해야 할까?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 클래식 그린', icon: 'mdi:lightbulb-on', description: '최초의 슈퍼-루미노바 포뮬레이션입니다. 중간 밝기의 녹색으로 빛납니다. 어떤 시계 스타일에도 무난하게 어울리는 클래식한 선택이에요.', points: ['중간 밝기, 4~6시간 가시성', '녹색 발광, 따뜻한 톤', '가장 저렴한 포뮬레이션', '보급형 시계에 흔히 사용'], highlight: false },
        { title: 'C3 슈퍼 그린', icon: 'mdi:lightning-bolt', description: '가장 밝은 녹색 루미입니다. 수중 가독성이 중요한 전문 다이버 워치에 사용되며, 최소한의 충전으로 최대 발광을 제공합니다.', points: ['최고 밝기, 8~12시간 가시성', '햇빛 아래서 황록색', '세이코, 시티즌, 오메가 선호', '저조도 가독성 최고'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 아이스 블루', icon: 'mdi:snowflake', description: '녹색 대신 청백색으로 빛납니다. C3보다는 약간 덜 밝지만 깔끔하고 모던한 미적 감각으로 선호도가 높습니다. 럭셔리 스포츠 워치에 인기가 많아요.', points: ['높은 밝기, 6~10시간 가시성', '청백색 발광, 중성 톤', '주간에 깔끔하고 모던한 룩', '튜더, 그랜드 세이코, 오메가 사용'], highlight: true },
        { title: '빈티지 라듐 스타일', icon: 'mdi:fire', description: '1960년대 라듐 루미를 재현한 따뜻한 베이지/크림 톤입니다. 미적 정통성을 위해 의도적으로 어둡게 제작되었으며, 빛이 따뜻하고 은은하며 시간이 지날수록 멋스러워집니다.', points: ['낮은 밝기, 2~4시간 가시성', '웜 크림에서 은은한 앰버', '방사능 없이 에이징 룩 구현', '헤리티지 재출시 모델에 인기'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '밝기가 전부는 아닙니다', icon: 'mdi:palette', html: '가장 밝은 루미(C3)가 항상 최선의 선택은 아닙니다. <strong>BGW9</strong>는 약간의 밝기를 희생하는 대신 많은 컬렉터가 선호하는 중성적이고 모던한 룩을 제공합니다. <strong>빈티지 루미</strong>는 성능보다 시대에 맞는 미학을 우선시합니다. 자신에게 가장 중요한 것이 <strong>최대 발광, 모던한 미학, 아니면 헤리티지 정통성</strong>인지에 따라 선택하세요.' },
    { type: 'title', text: '루미의 작동 원리: 발광의 과학', level: 3 },
    {
      type: 'glossary', items: [
        { term: '슈퍼-루미노바', definition: '스트론튬 알루미네이트 기반의 광발광 안료입니다. 자외선과 가시광선을 흡수하여 빛으로 다시 방출합니다. 비방사성이고 안전합니다. 1993년 Nemoto & Co.에서 개발했습니다.' },
        { term: '충전 시간', definition: '루미 안료를 포화시키는 데 필요한 빛 노출 시간입니다. 직사광선이나 자외선 아래에서 완전 충전까지 10~30분이 걸립니다. 충전 시간이 길수록 더 오래, 더 밝게 빛납니다.' },
        { term: '발광 지속 시간', definition: '충전 후 루미가 눈에 보이는 상태로 유지되는 시간입니다. 품질 좋은 슈퍼-루미노바는 6~12시간 동안 선명하게 빛납니다. 충전 후 처음 30분이 가장 밝습니다.' },
        { term: '안료 등급', definition: '스트론튬 알루미네이트 결정의 품질입니다. 고급 안료(C3, BGW9)는 더 크고 균일한 결정을 사용하여 더 밝고 오래 빛납니다. 저급 안료(루미노바)는 작은 결정을 사용하며 더 어둡습니다.' },
      ]
    },
    {
      type: 'summary', title: '루미 선택 요약 가이드', items: [
        '어둠 속에서 최대 가독성이 필요하다면: C3(가장 밝은 녹색) 또는 BGW9(가장 밝은 청백색)를 선택하세요.',
        '모던한 럭셔리 룩을 원한다면: BGW9는 현재 하이엔드 시계 브랜드 사이에서 가장 선호됩니다.',
        '빈티지/헤리티지 빌드에는: 빈티지 또는 오렌지를 선택하여 시대에 맞는 따뜻한 느낌을 살리세요.',
        'C1은 올라운더입니다: 적당한 밝기, 클래식한 녹색, 합리적인 가격.',
        '주간 루미 색상과 발광 색상은 크게 다릅니다. 시뮬레이터로 둘을 비교해보세요.',
      ]
    },
  ],
  faq: [
    {
      question: '어느 루미가 가장 밝나요?',
      answer: 'C3 슈퍼-루미노바가 가장 밝은 녹색 포뮬레이션이고, BGW9가 가장 밝은 청백색입니다. 둘 다 C1이나 기본 루미노바보다 훨씬 밝습니다.',
    },
    {
      question: 'BGW9 루미가 무엇인가요?',
      answer: 'BGW9는 녹색 대신 청백색으로 빛나는 슈퍼-루미노바 변종입니다. C3보다 약간 덜 밝지만 깔끔하고 모던한 외관으로 많은 사람에게 선호됩니다.',
    },
    {
      question: '빈티지 루미는 빛나나요?',
      answer: '현대식 빈티지 스타일 루미(베이지/웜)는 빛나지만, 에이징 라듐을 재현하기 위해 의도적으로 어둡게 제작되었습니다. 최대 밝기보다 미적 정통성을 택한 것입니다.',
    },
    {
      question: '루미는 얼마나 오래 가나요?',
      answer: '밝은 빛 아래서 완전 충전 후, 품질 좋은 슈퍼-루미노바는 6~12시간 동안 선명하게 빛납니다. 가장 밝은 시기는 충전 후 처음 30분입니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '루미 종류 선택하기',
      text: 'C1, C3, BGW9, 루미노바, 빈티지, 오렌지, 블루, 그린 중에서 선택하세요.',
    },
    {
      name: '밝기 조절하기',
      text: '주변 밝기 슬라이더를 낮(왼쪽)에서 밤(오른쪽)으로 움직여 루미가 어떻게 변하는지 확인하세요.',
    },
    {
      name: '스펙 확인하기',
      text: '정보 카드에 현재 색상의 정확한 HEX 및 RGB 값이 표시됩니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '어떤 루미네선스가 가장 밝나요?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova가 가장 밝은 녹색입니다. BGW9가 가장 밝은 청백색입니다.' },
        },
        {
          '@type': 'Question',
          'name': 'BGW9 루미네선스란 무엇인가요?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9는 녹색 대신 청백색으로 빛나는 Super-LumiNova 변형입니다.' },
        },
        {
          '@type': 'Question',
          'name': '빈티지 스타일 루미네선스도 빛나나요?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '현대적인 빈티지 스타일 lume도 빛나지만, 오래된 라듐을 재현하기 위해 의도적으로 더 어둡습니다.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
       'name': '루미네선스 색상 시뮬레이터',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
       'browserRequirements': 'HTML5와 JavaScript가 필요합니다.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
       'name': '루미네선스 색상을 시뮬레이션하는 방법',
      'step': [
        {
          '@type': 'HowToStep',
           'name': '루 lume 종류 선택',
           'text': 'C1, C3, BGW9, LumiNova 또는 다른 프리셋 중에서 선택합니다.',
        },
        {
          '@type': 'HowToStep',
           'name': '밝기 조정',
           'text': '밝기를 낮에서 밤으로 움직여 lume의 동작을 확인합니다.',
        },
        {
          '@type': 'HowToStep',
           'name': '사양 확인',
           'text': '정보 카드에서 현재 색상의 HEX 및 RGB 값을 확인합니다.',
        },
      ],
    },
  ],
};

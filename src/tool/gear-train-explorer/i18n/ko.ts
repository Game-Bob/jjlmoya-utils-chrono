import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '시계의 기어 트레인이란 무엇인가요?',
    answer: '기어 트레인은 용두태엽 배럴에서 이스케이프먼트로 동력을 전달하는 일련의 맞물린 기어들입니다. 각 기어 쌍은 특정 감속비를 제공하여 태엽 에너지의 빠른 방출을 제어된 시간 간격의 임펄스로 늦춥니다.',
  },
  {
    question: '왜 다른 무브먼트는 다른 기어비를 가지고 있나요?',
    answer: '기어비는 각 휠과 피니언의 톱니 수에 의해 결정됩니다. 다른 진동수(예: 28,800 VPH vs 36,000 VPH)를 가진 무브먼트는 밸런스 휠 주파수를 수용하면서 정확한 시간 유지를 위해 다른 이스케이프먼트 휠 속도와 기어 구성을 가지고 있습니다.',
  },
  {
    question: '휠과 피니언의 차이점은 무엇인가요?',
    answer: '시계학에서 "휠"은 다음 구성 요소를 구동하는 많은 톱니를 가진 더 큰 기어입니다. "피니언"은 구동되는 더 작은 기어(보통 6-12 톱니)입니다. 함께, 휠과 피니언은 회전 속도와 토크를 변경하는 기어 쌍을 형성합니다.',
  },
];

const howTo = [
  {
    name: '무브먼트 선택',
    text: '표준(28,800 VPH), 고진동수(36,000 VPH 엘 프리메로), 또는 빈티지(18,000 VPH) 무브먼트 중에서 선택하세요. 각각 고유한 기어비와 진동수를 가지고 있습니다.',
  },
  {
    name: '기어 트레인 관찰',
    text: '애니메이션 기어가 비례 속도로 회전하는 것을 지켜보세요. 배럴은 천천히 회전하는 반면 이스케이프먼트 휠은 빠르게 회전합니다. 기어 또는 데이터 카드에 호버하면 자세한 정보를 볼 수 있습니다.',
  },
  {
    name: '속도 조정',
    text: '속도 컨트롤을 사용하여 애니메이션을 느리게, 빠르게 또는 일시 중지할 수 있습니다. 이를 통해 각 기어가 동력 전달 체인에 어떻게 기여하는지 시각화할 수 있습니다.',
  },
];

const title = '기어 트레인 탐험가: 대화형 시계학 다이어그램';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'gear-train-explorer',
  title,
  description: '애니메이션 기어 트레인 시각화로 시계의 기계적 심장을 탐험하세요. 배럴, 센터 휠, 서드 휠, 포스 휠, 이스케이프먼트 휠, 팔렛 포크, 밸런스 휠이 움직이는 모습을 확인하세요.',
  ui: {
    title: '기어 트레인 탐험가',
    barrelLabel: '배럴',
    centerWheelLabel: '센터 휠',
    thirdWheelLabel: '서드 휠',
    fourthWheelLabel: '포스 휠',
    escapeWheelLabel: '이스케이프먼트 휠',
    palletForkLabel: '팔렛 포크',
    balanceWheelLabel: '밸런스 휠',
    rpmLabel: 'rpm',
    teethLabel: '톱니',
    gearRatioLabel: '비율',
    powerFlowLabel: '동력 흐름',
    movementLabel: '무브먼트',
    speedLabel: '속도',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: '일시 정지',
    mov2824: 'ETA 2824-2',
    movElPrimero: '엘 프리메로',
    movVintage: '빈티지 18k',
    step1: '무브먼트 칼리버를 선택하여 고유한 기어비와 진동수를 확인하세요.',
    step2: '기어 또는 데이터 카드에 호버하여 동력 흐름에서의 위치를 강조 표시하세요.',
    step3: '애니메이션 속도를 조정하여 각 휠이 기어 트레인을 통해 동력을 전달하는 방식을 연구하세요.',
    tipTitle: '팁',
    tipContent: '기어 트레인은 태엽의 빠른 에너지 방출을 제어된 진동으로 변환합니다. 일반적인 배럴은 7-8시간마다 한 번 회전하는 반면, 이스케이프먼트 휠은 32 rpm(28,800 VPH에서)으로 회전합니다 - 15,000:1 이상의 감속비입니다.',
  },
  seo: [
    { type: 'title', text: '대화형 기어 트레인 탐험가', level: 2 },
    { type: 'paragraph', html: '<strong>기어 트레인</strong>은 모든 기계식 시계의 기계적 중추입니다. 이 대화형 도구는 배럴에서 센터 휠, 서드 휠, 포스 휠, 이스케이프먼트 휠을 통해 팔렛 포크와 밸런스 휠로 동력이 흐르는 방식을 시각화합니다. 각 기어가 비례적 속도로 회전하는 것을 보고 기어비가 시간 측정을 어떻게 결정하는지 이해하세요.' },
    { type: 'title', text: '시계 기어 트레인의 작동 방식', level: 3 },
    { type: 'paragraph', html: '시계 기어 트레인은 속도를 줄이면서 동력을 전달하는 일련의 <strong>휠</strong>(큰 기어)과 <strong>피니언</strong>(작은 기어)으로 구성됩니다. <strong>배럴</strong>은 태엽을 수용하고 천천히 회전하며 시간당 한 번 회전하는(분침용) <strong>센터 휠</strong>을 구동합니다. <strong>서드 휠</strong>과 <strong>포스 휠</strong>(초침 휠)은 회전 속도를 더욱 높입니다. 마지막으로, <strong>이스케이프먼트 휠</strong>이 제어된 틱으로 <strong>팔렛 포크</strong>에 동력을 방출하고, 팔렛 포크가 교대로 이스케이프먼트 휠을 잠그고 해제하여 <strong>밸런스 휠</strong>에 임펄스를 보냅니다. 밸런스 휠은 정밀한 주파수 - 일반적으로 4 Hz(시간당 28,800 진동) - 로 진동하여 시계의 레이트를 조절합니다.' },
    { type: 'title', text: '기어비와 동력 전달', level: 3 },
    {
      type: 'table', headers: ['구성 요소', '일반 톱니 수', 'rpm (28,800 VPH)', '이전 비율'], rows: [
        ['배럴', '72', '0.002 (1회전/8h)', '-'],
        ['센터 휠', '60', '0.0167 (1회전/h)', '~7.2:1'],
        ['서드 휠', '50', '0.125 (1회전/8분)', '~5:1'],
        ['포스 휠', '60', '1 (1회전/분)', '6:1'],
        ['이스케이프먼트 휠', '15', '32', '~1.875:1'],
      ]
    },
    { type: 'title', text: '무브먼트 비교', level: 3 },
    {
      type: 'table', headers: ['무브먼트', '진동수', '밸런스 주파수', '이스케이프먼트 휠 rpm', '일반 정확도'], rows: [
        ['빈티지 (18,000 VPH)', '18,000 bph', '2.5 Hz', '20 rpm', '±15-30 초/일'],
        ['표준 (28,800 VPH)', '28,800 bph', '4 Hz', '32 rpm', '±5-15 초/일'],
        ['고진동수 (36,000 VPH)', '36,000 bph', '5 Hz', '40 rpm', '±3-8 초/일'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '대화형 학습 도구', icon: 'mdi:cog-clockwise', badge: '시계학', html: '이 도구는 일반적인 스위스 팔렛 이스케이프먼트 무브먼트를 대표하는 근사적인 기어비를 사용합니다. 실제 비율은 칼리버에 따라 다릅니다. 무브먼트 프리셋을 사용하여 다양한 진동수가 기어 트레인 역학에 어떻게 영향을 미치는지 비교하세요.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

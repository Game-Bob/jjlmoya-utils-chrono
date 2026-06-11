import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '기계식 시계는 높은 고도에서 왜 더 빨리 작동하나요?',
    answer: '기계식 시계가 높은 고도에서 더 빨리 작동하는 주된 이유는 공기 밀도 감소입니다. 더 얇은 공기는 템프의 공기 저항을 줄여 진폭을 약간 더 크게 만듭니다. 이 증가된 진폭으로 인해 시계가 빨라집니다 - 일반적으로 무브먼트 설계에 따라 1,000m 상승 시 하루에 2~6초 정도입니다.',
  },
  {
    question: '고도는 쿼츠 시계에도 영향을 미치나요?',
    answer: '쿼츠 시계는 진동하는 기계식 템프가 없기 때문에 고도의 영향을 최소한으로 받습니다. 그러나 극단적인 고도 변화는 온도 변화로 인해 배터리 성능에 영향을 줄 수 있습니다. 그 영향은 기계식 시계에 비해 무시할 수 있습니다.',
  },
  {
    question: '고도 변화가 시계를 손상시킬 수 있나요?',
    answer: '고도 변화만으로 기계식 시계가 손상되는 경우는 드뭅니다. 그러나 항공기 내에서와 같은 급속 감압은 일부 시계의 방수에 문제를 일으킬 수 있습니다. 여행 중 정상적인 고도 변화는 모든 시계의 설계 허용 범위 내에 있습니다.',
  },
];

const howTo = [
  {
    name: '고도 선택',
    text: '고도 슬라이더를 위아래로 드래그하여 해수면에서 8,000m까지 다양한 고도를 시뮬레이션합니다. 템프 진동과 대기 데이터가 실시간으로 어떻게 변하는지 관찰하세요.',
  },
  {
    name: '편차 읽기',
    text: '율도 편차 디스플레이는 선택한 고도에서 하루에 얻은 예상 초를 보여줍니다. 아래의 편차 차트는 모든 고도에서의 추세를 보여줍니다.',
  },
  {
    name: '요인 고려',
    text: '율도 편차가 증가하는 동안 공기 밀도가 고도에 따라 어떻게 감소하는지 관찰하세요. 온도 및 압력 데이터는 환경 변화에 대한 맥락을 제공합니다.',
  },
];

const title = '고도 정확도 추정기: 고도가 기계식 시계에 미치는 영향';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'altitude-watch-accuracy-estimator',
  title,
  description: '고도가 기계식 시계의 정확도에 어떻게 영향을 미치는지 알아보세요. 해수면에서 산 정상까지 고도를 조절하고 템프 진동, 율도 편차, 공기 밀도, 압력 및 온도의 실시간 변화를 확인하세요.',
  ui: {
    title: '고도 정확도 추정기',
    altitudeLabel: '고도',
    altitudeUnit: 'm',
    seaLevel: '해수면',
    deviationLabel: '율도 편차',
    deviationUnit: '초/일',
    pressureLabel: '기압',
    pressureUnit: 'hPa',
    densityLabel: '공기 밀도',
    densityUnit: 'kg/m³',
    temperatureLabel: '기온',
    temperatureUnit: '°C',
    oscillationLabel: '템프',
    oscillationsPerSec: '진동/초',
    rateLabel: '율도',
    atmDataTitle: '대기 조건',
    howItWorks: '작동 방식',
    howItWorksDesc: '높은 고도에서 낮은 공기 밀도는 템프의 저항을 줄여 진폭을 증가시키고 시계를 더 빠르게 작동시킵니다. 이 도구는 표준 대기 모델을 기반으로 율도 편차를 추정합니다.',
    negligible: '무시 가능',
    minor: '약간',
    noticeable: '눈에 띔',
    significant: '상당함',
    severe: '심각함',
    step1: '슬라이더를 드래그하여 해수면에서 8,000m까지의 고도를 시뮬레이션하세요.',
    step2: '템프 애니메이션과 편차 게이지가 실시간으로 반응하는 것을 확인하세요.',
    step3: '대기 데이터를 검토하여 환경 요인을 이해하세요.',
    tipTitle: '팁',
    tipContent: '효과는 무브먼트에 따라 다릅니다: 고진동 무브먼트(36,000 vph)는 빈티지 저진동 무브먼트(18,000 vph)보다 영향을 덜 받습니다.',
    deviationChart: '편차 vs 고도',
    altitudeM: '고도 (m)',
    secondsPerDay: '초/일',
    particleLabel: '공기 분자',
    airDensity: '공기 밀도',
  },
  seo: [
    { type: 'title', text: '기계식 시계를 위한 인터랙티브 고도 정확도 추정기', level: 2 },
    { type: 'paragraph', html: '<strong>고도 정확도 추정기</strong>는 고도 변화가 기계식 시계의 정밀도에 어떻게 영향을 미치는지 시각화하는 인터랙티브 도구입니다. 해수면에서 8,000m까지의 고도를 시뮬레이션하여 공기 밀도, 압력 및 온도 변화로 인한 추정 율도 편차를 확인할 수 있습니다.' },
    { type: 'title', text: '고도가 시계 정확도에 미치는 영향', level: 3 },
    { type: 'paragraph', html: '더 높은 고도에서는 <strong>공기 밀도가 감소하여</strong> 템프의 공기 저항이 줄어듭니다. 이로 인해 템프가 더 큰 진폭으로 진동하여 시계가 약간 더 빨리 작동합니다. 효과는 일반적으로 1,000m 상승 시 <strong>하루에 +2~+6초</strong> 범위입니다.' },
    { type: 'title', text: '다른 고도에서의 율도 편차', level: 3 },
    {
      type: 'table', headers: ['고도', '공기 밀도', '기압', '기온', '추정 편차'], rows: [
        ['해수면 (0m)', '1.225 kg/m³', '1013 hPa', '15°C', '기준'],
        ['1,000m', '1.112 kg/m³', '898 hPa', '8.5°C', '+0.4 초/일'],
        ['2,000m', '1.007 kg/m³', '795 hPa', '2°C', '+0.9 초/일'],
        ['3,000m', '0.909 kg/m³', '701 hPa', '-4.5°C', '+1.5 초/일'],
        ['4,000m', '0.819 kg/m³', '616 hPa', '-11°C', '+2.1 초/일'],
        ['5,000m', '0.736 kg/m³', '540 hPa', '-17.5°C', '+2.8 초/일'],
      ]
    },
    { type: 'title', text: '환경 요인', level: 3 },
    { type: 'paragraph', html: '공기 밀도 외에도 높은 고도의 다른 환경 요인이 시계 성능에 영향을 줄 수 있습니다: <strong>온도</strong>는 윤활유 점도와 태엽 탄성에 영향을 미치고, <strong>압력 변화</strong>는 케이스 밀봉에 영향을 줄 수 있습니다. 그러나 템프 저항에 대한 공기 밀도의 영향이 고도 관련 율도 변화의 지배적인 요인입니다.' },
    { type: 'diagnostic', variant: 'info', title: '인터랙티브 시뮬레이션 도구', icon: 'mdi:axis-arrow', badge: '시계학', html: '이 도구는 ISA 모델과 경험적 관찰을 기반으로 추정 값을 제공합니다. 실제 결과는 무브먼트 칼리버, 상태 및 제조 공차에 따라 다릅니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

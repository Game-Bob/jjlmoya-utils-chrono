import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeter-calculator',
  title: '텔레미터 계산기: 시계 텔레미터(거리계) 사용법',
  description: '시계 텔레미터 베젤 사용법을 배워보세요. 기온을 반영하여 번개가 친 곳까지의 실제 거리를 계산합니다.',
  ui: {
    title: '텔레미터 계산기',
    triggerFlash: '번개 감지',
    triggerSound: '천둥 감지',
    stop: '정지',
    reset: '리셋',
    settings: '설정',
    unitSystem: '단위계',
    metric: '미터법 (km)',
    imperial: '야드파운드법 (마일)',
    temperature: '대기 온도',
    speedOfSound: '음속',
    distanceResult: '측정 거리',
    elapsedTime: '경과 시간',
    historyTitle: '측정 기록',
    noHistory: '아직 기록이 없습니다. 위에서 계산을 시작해 보세요!',
    sec: '초',
    km: 'km',
    m: 'm',
    mi: '마일',
    ft: '피트',
    step1: '번개나 폭발의 불빛을 보는 즉시 2시 방향 푸셔나 "번개 감지" 버튼을 누릅니다.',
    step2: '천둥 소리나 폭발음이 들리는 즉시 다시 한번 누르거나 "천둥 감지" 버튼을 누릅니다.',
    step3: '크로노그래프 초침이 멈춘 텔레미터 베젤의 숫자를 읽어 거리를 확인합니다.',
    tipTitle: '팁',
    tipContent: '따뜻한 공기는 차가운 공기보다 소리를 더 빠르게 전달합니다. 주변 기온을 설정하면 대기 상태에 맞춘 실제 거리를 정확히 얻을 수 있습니다.',
  },
  seo: [
    { type: 'title', text: '시계의 텔레미터(거리계) 베젤이란 무엇인가요?', level: 2 },
    { type: 'paragraph', html: '텔레미터는 크로노그래프 시계의 다이얼이나 베젤에 인쇄된 거리 측정용 눈금입니다. 빛과 소리의 전파 속도 차이를 이용해 시각적인 이벤트가 발생한 시점부터 청각적인 신호가 도달할 때까지의 거리를 계산할 수 있게 해줍니다.' },
  ],
  faq: [
    {
      question: '시계 텔레미터 눈금은 어떻게 사용하나요?',
      answer: '번개 불빛을 볼 때 크로노그래프를 시작하고, 천둥 소리가 들릴 때 정지합니다. 초침이 가리키는 베젤 눈금의 숫자가 바로 번개가 친 곳까지의 거리(km 또는 마일)입니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '단위 및 대기 온도 설정',
      text: '선호하는 측정 단위와 현재 위치의 대기 온도를 설정합니다.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

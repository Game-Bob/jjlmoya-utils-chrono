import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beat-rate-converter',
  title: '시계 비트 레이트 변환기: VPH에서 Hz 및 일당 오차',
  description: '시간당 진동수(VPH)를 헤르츠, 초당 팁 수로 변환하고 팁 하나가 눌긴 경우 일당 영향을 계산합니다. ETA, Sellita, Miyota, Seiko, Rolex, Omega, Zenith 칼리버와 호환됩니다.',
  ui: {
    title: '비트 레이트 변환기',
    vphLabel: '무브먼트',
    selectMovement: '무브먼트 선택',
    customMovement: '사용자 정의',
    customVph: '시간당 진동수',
    resultsTitle: '계산',
    frequency: '주파수',
    ticksPerSec: '초당 팁 수',
    lostTickImpact: '시간당 1팁이 눌긴 경우',
    lostTickExplainer: '28,800 VPH에서 시간당 팁 하나가 눌기면 하루에 약 3초가 손실됩니다. 비트 레이트가 낮을수록 그 영향이 커집니다.',
    step1: '무브먼트를 선택하거나 사용자 정의 VPH를 입력하세요.',
    step2: 'Hz 주파수, 초당 팁 수, 팁 눌김의 영향을 확인하세요.',
    tipTitle: '팁',
    tipContent: '높은 비트 레이트(36,000 VPH)는 매끄러운 초침 움직임과 더 나은 정밀도를 제공하지만, 탈진구조에 더 많은 마찰을 주지 않습니다.',
  },
  seo: [
    { type: 'title', text: '시계 비트 레이트 변환기 - VPH에서 Hz 및 일당 초 수', level: 2 },
    { type: 'paragraph', html: '모든 기계식 시계는 특정 레이트로 팁합니다. 그것은 균형바구나무가 시간당 만드는 진동수입니다. 이 숫자가 초침의 매끄러움과 시계의 정밀도를 결정합니다. 이 변환기는 <strong>VPH를 Hz와 초당 팁 수로 변환하고</strong>, 팁 하나가 눌겼을 때의 실제 영향을 보여줍니다.' },
    { type: 'title', text: '비트 레이트란 무엇인가?', level: 3 },
    { type: 'paragraph', html: '비트 레이트는 시간당 진동수(vph)로 측정되며, 시계의 균형바구나무가 진동하는 주파수입니다. 일반적인 레이트는 28,800 VPH(4 Hz, 초당 8팁)입니다. 36,000 VPH(5 Hz)와 같은 높은 비트 레이트는 더 매끄러운 움직임을 만들며, 위치 오차의 효과를 줄여 이론적으로 정확도를 향상시킬 수 있습니다.' },
    { type: 'title', text: '팁이 눌으는 이유', level: 3 },
    { type: 'paragraph', html: '마찰, 자기, 또는 손상으로 탈진구조가 팁을 한 번 놓치면, 그 눌은 팁은 그대로 손실된 시간으로 이어집니다. 28,800 VPH에서는 시간당 팁 하나가 약 <strong>하루에 3초</strong>를 손실시킵니다. 18,000 VPH에서는 같은 오류가 하루에 거의 5초까지 손실시킵니다. 이 도구를 통해 조절에 대한 수학적 원리를 이해할 수 있습니다.' },
    { type: 'title', text: '일반적인 비트 레이트', level: 3 },
    { type: 'paragraph', html: '빙테지 포센 시계와 초기 오토맥스는 보통 18,000 VPH(2.5 Hz)로 작동합니다. 많은 Seiko 및 Miyota 칼리버는 21,600 VPH(3 Hz)를 사용합니다. 현대 표준은 28,800 VPH(4 Hz)로, ETA, Sellita, Rolex 등이 채택하고 있습니다. Zenith El Primero와 같은 고주파수 무브먼트는 더 높은 정밀도를 위해 36,000 VPH(5 Hz)로 작동합니다.' },
  ],
  faq: [
    {
      question: 'VPH를 Hz로 변환하려면 어떻게 합니까?',
      answer: 'VPH를 7,200으로 나누세요. 28,800 VPH로 팁하는 시계는 4 Hz로 작동합니다(28,800 ÷ 7,200 = 4). 7,200으로 나누는 것은 한 번의 완전한 진동에 두 번의 진동이 포함되고, 1시간이 3,600초라는 사실을 반영한 것입니다.',
    },
    {
      question: '높은 비트 레이트가 정밀도에 미치는 영향은 무엇인가요?',
      answer: '높은 비트 레이트는 일반적으로 균형바구나무가 위치적 일레에 덕 영향을 받지 않아 이론적 정밀도가 높아집니다. 그러나 팰릿 돌과 탈진구조 바퀴에 마찰과 손상이 더 생기며, 더 좋은 윤활과 더 잔 괌수가 필요합니다.',
    },
    {
      question: '팁 눌음이 일당 정확도에 어떤 영향을 미치나요?',
      answer: '시간당 팁 하나가 눌그면 하루에 24개의 팁이 손실됩니다. 손실된 시간은 비트 레이트에 따라 다릅니다. 86,400을 VPH로 나누세요. 28,800 VPH에서는 하루에 3초, 18,000 VPH에서는 4.8초입니다.',
    },
    {
      question: '시계가 눌은 팁을 복구할 수 있나요?',
      answer: '아니요. 팁이 한 번 눌그면 그 시간은 영구적으로 손실됩니다. 시계가 "따라잡을" 수 없습니다. 그래서 탈진구조의 건강성(깨끗한 팰릿 돌, 적절한 윤활, 올바른 비트 에러)이 일당 주기에 직접적인 영향을 미치는 것입니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '칼리버 선택',
      text: '드롭다운에서 무브먼트를 선택하세요. 각 프리셋에는 해당 칼리버의 올바른 VPH가 포함되어 있습니다.',
    },
    {
      name: '계산 결과 확인',
      text: '카드에는 Hz 주파수, 초당 팁 수, 팁 하나가 눌겼을 때의 일당 영향이 표시됩니다.',
    },
    {
      name: '사용자 정의 VPH 테스트',
      text: '사용자 정의를 선택하면 빙테지나 특이한 무브먼트에 대해 임의의 VPH 값을 입력할 수 있습니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'VPH를 Hz로 변환하려면 어떻게 합니까?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'VPH를 7,200으로 나누세요. 28,800 VPH로 팁하는 시계는 4 Hz입니다. 7,200으로 나누는 것은 한 번의 진동에 두 번의 진동이 포함되고 3,600초가 1시간인 것을 반영한 것입니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '높은 비트 레이트가 정밀도에 미치는 영향은 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '높은 비트 레이트는 균형바구나무가 위치적 일레에 덕 영향을 받지 않아 이론적 정밀도가 높아집니다. 그러나 마찰과 손상도 더 생깁니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '팁 눌음이 일당 정확도에 어떤 영향을 미치나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '시간당 팁 하나가 눌그면 하루에 24개의 팁이 손실됩니다. 86,400을 VPH로 나누어 손실된 초를 찾으세요.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계가 눌은 팁을 복구할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '아니요. 팁이 한 번 눌그면 그 시간은 영구적으로 손실됩니다. 시계가 따라잡지 않습니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 비트 레이트 변환기',
      'operatingSystem': '모든 플랫폼',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 필요. JavaScript 필요.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'VPH를 Hz로 변환하고 팁 눌음의 영향을 계산하는 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '칼리버 선택',
          'text': '드롭다운에서 무브먼트를 선택하세요. 각 프리셋에는 해당 칼리버의 올바른 VPH가 포함되어 있습니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '계산 결과 확인',
          'text': '카드에는 Hz 주파수, 초당 팁 수, 팁 하나가 눌겼을 때의 일당 영향이 표시됩니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '사용자 정의 VPH 테스트',
          'text': '사용자 정의를 선택하면 빙테지나 특이한 무브먼트에 대해 임의의 VPH 값을 입력할 수 있습니다.',
        },
      ],
    },
  ],
};

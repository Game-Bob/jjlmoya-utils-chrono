import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'demagnetizing-timer',
  title: '시계 자기제거 타이머 & 가이드',
  description: 'DIY 시계 자기제거를 위한 정확한 카운트다운 타이머(오디오 신호 포함). 자기제거 코일에 필요한 정확한 누름 시간을 측정하세요.',
  ui: {
    title: '타이머 설정',
    durationLabel: '펄스 시간',
    duration1s: '1초',
    duration2s: '2초',
    duration3s: '3초',
    customLabel: '사용자 설정',
    startButton: '시작',
    stopButton: '중지',
    resetButton: '초기화',
    pressPhase: '자기제거기 버튼을 누르세요!',
    holdPhase: '버튼을 계속 누르고 있으세요...',
    releasePhase: '지금 놓으세요!',
    completePhase: '완료! 시계를 멀리 옮기세요.',
    ready: '준비',
    seconds: '초',
    instructions: '자기제거 방법',
    step1: '시계를 자기제거기 플랫폼에 올려놓으세요.',
    step2: '시작을 누르고 설정된 시간 동안 자기제거기 버튼을 계속 누르고 있으세요.',
    step3: '버튼에서 손을 떼고 시계를 천천히 멀리 옮기세요.',
    step4: '필요에 따라 2~3회 반복하고, 매번 시계를 돌려주세요.',
    tipTitle: '팁',
    tipContent: '재자기화를 방지하려면 전원이 켜진 자기제거기에서 시계를 최소 1미터 이상 떨어뜨려 두세요.',
  },
  seo: [
    { type: 'title', text: '시계 자기제거 타이머-Y 자기제거를 위한 정확한 펄스 타이밍', level: 2 },
    { type: 'paragraph', html: '시계를 자기제거하려면 정확한 버튼 누름 타이밍이 필요합니다. 대부분의 DIY 자기제거기는 감쇠하는 교류 자기장을 생성하여 작동하며, 이상적인 펄스는 <strong>1~3초</strong>입니다. 너무 짧으면 자기장이 자성을 중화하지 못하고, 너무 길면 무브먼트가 포화될 위험이 있습니다.' },
    { type: 'title', text: '시계 자기제거에서 타이밍이 중요한 이유', level: 3 },
    { type: 'paragraph', html: '자기제거기의 버튼을 누르면 코일 내부에 교류 자기장이 생성됩니다. 자기장은 상용 주파수(50/60 Hz)로 진동하다가 버튼을 놓으면 감쇠합니다. 목표는 헤어스프링과 기타 강철 부품의 자기 도메인을 무작위화하기 위해 이 감쇠 자기장에 시계를 <strong>적당한 시간</strong> 동안 노출시키는 것입니다. 1~3초의 펄스가 대부분의 무브먼트에 최적입니다.' },
    { type: 'title', text: '자기제거기의 작동 원리', level: 3 },
    { type: 'paragraph', html: '자기제거기는 기본적으로 전원이 공급되면 강력한 교류 자기장을 생성하는 와이어 코일입니다. 자화된 시계를 이 자기장에 놓으면 내부 자기 도메인이 빠르게 반전됩니다. 버튼을 놓아 자기장이 갑자기 제거되면 도메인이 무작위 패턴으로 안정화되어 순 자화가 효과적으로 상쇄됩니다.' },
    { type: 'title', text: '시계의 자기제거가 필요한 징후', level: 3 },
    { type: 'paragraph', html: '시계가 자화된 일반적인 증상으로는 하루에 수분 빨라짐, 위치에 따른 불규칙한 시간 유지, 청각적으로 감지되는 빠른 틱 소리, 극단적인 경우 시계 완전 정지 등이 있습니다. 오토매틱 시계가 갑자기 빨라지기 시작하면 자화가 원인인 경우가 많으며, 자기제거는 간단한 해결책입니다.' },
  ],
  faq: [
    {
      question: '자기제거기 버튼을 얼마나 눌러야 하나요?',
      answer: '1~3초가 권장 펄스 시간입니다. 1초부터 시작하여 필요에 따라 늘리세요. 너무 긴 펄스는 코일을 과열시킬 수 있으며 결과가 개선되지는 않습니다.',
    },
    {
      question: '시계를 여러 번 자기제거할 수 있나요?',
      answer: '네. 2~3회 반복하고 매번 시계를 90도씩 돌리세요. 이렇게 하면 모든 축이 교류 자기장에 노출됩니다. 과도한 자기제거의 위험은 없습니다.',
    },
    {
      question: '쿼츠 시계에도 자기제거가 효과가 있나요?',
      answer: '쿼츠 시계는 강자성 부품을 거의 포함하지 않아 자화의 영향을 거의 받지 않습니다. 그러나 일부 쿼츠 무브먼트의 스테핑 모터가 자화되어 바늘 움직임이 불규칙해질 수 있습니다. 쿼츠 시계에 자기제거를 해도 안전합니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '시간 설정',
      text: '자화 정도에 따라 1, 2, 3초를 선택하세요.',
    },
    {
      name: '시계 위치',
      text: '시계를 자기제거기 플랫폼에 평평하게 놓고 코일 위에 중앙에 오도록 하세요.',
    },
    {
      name: '누르고 유지',
      text: '시작 버튼과 자기제거기 버튼을 동시에 누르고 설정된 시간 동안 유지하세요.',
    },
    {
      name: '놓고 멀리 이동',
      text: '버튼에서 손을 떼고 자기제거기를 끄기 전에 시계를 최소 1미터 천천히 멀리 옮기세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '자기제거기 버튼을 얼마나 눌러야 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1~3초가 권장 펄스 시간입니다. 1초부터 시작하여 필요에 따라 늘리세요. 너무 긴 펄스는 코일을 과열시킬 수 있으며 결과가 개선되지는 않습니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계를 여러 번 자기제거할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네. 2~3회 반복하고 매번 시계를 90도씩 돌리세요. 이렇게 하면 모든 축이 교류 자기장에 노출됩니다. 과도한 자기제거의 위험은 없습니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '쿼츠 시계에도 자기제거가 효과가 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '쿼츠 시계는 강자성 부품을 거의 포함하지 않아 자화의 영향을 거의 받지 않습니다. 그러나 일부 쿼츠 무브먼트의 스테핑 모터가 자화되어 바늘 움직임이 불규칙해질 수 있습니다. 쿼츠 시계에 자기제거를 해도 안전합니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 자기제거 타이머 & 가이드',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 자기제거 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '시간 설정',
          'text': '자화 정도에 따라 1, 2, 3초를 선택하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '시계 위치',
          'text': '시계를 자기제거기 플랫폼에 평평하게 놓고 코일 위에 중앙에 오도록 하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '누르고 유지',
          'text': '시작 버튼과 자기제거기 버튼을 동시에 누르고 설정된 시간 동안 유지하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '놓고 멀리 이동',
          'text': '버튼에서 손을 떼고 자기제거기를 끄기 전에 시계를 최소 1미터 천천히 멀리 옮기세요.',
        },
      ],
    },
  ],
};

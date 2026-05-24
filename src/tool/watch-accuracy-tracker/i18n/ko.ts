import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'watch-accuracy-tracker',
  title: '시계 오차 측정기 및 기록기',
  description: '기계식 또는 쿼츠 시계의 일오차를 기록하고 계산하여 정밀도와 일관성을 분석합니다.',
  ui: {
    title: '시계 오차 측정기',
    selectWatch: '시계 선택 또는 추가',
    watchPlaceholder: '예: 세이코 SKX007',
    addWatch: '시계 추가',
    deleteWatch: '시계 삭제',
    addLog: '새 측정 기록 추가',
    offsetLabel: '오차 (초)',
    offsetPlaceholder: '0',
    dateLabel: '측정 시간',
    saveLog: '기록 저장',
    avgRate: '평균 일오차',
    consistency: '정밀도 상태',
    totalLogs: '총 기록 수',
    historyTitle: '측정 이력',
    noLogs: '이 시계에 기록된 오차가 없습니다. 정밀도를 계산하려면 최소 2개의 기록을 추가하세요.',
    tableDate: '날짜 및 시간',
    tableOffset: '오차',
    tableRate: '일오차',
    tableActions: '작업',
    deleteLog: '삭제',
    coscExcellent: 'COSC 크로노미터 기준 (+4/-6 초/일)',
    excellent: '매우 우수 (0 ~ +5 초/일)',
    good: '양호 (+/- 10 초/일)',
    needsService: '정비 필요 (> +/- 20 초/일)',
    secondsPerDay: '초/일',
    seconds: '초',
    referenceTime: '기준 시간',
    watchTime: '시계 시간',
    useCurrentTime: '현재 시간 사용',
    calculatedRate: '계산된 일오차',
    driftPredictorTitle: '누적 오차 예측 및 예측기',
    driftPredictorDesc: '시간 경과에 따른 누적 오차를 예측하고 표준 규격과 비교합니다.',
    dailyRateInput: '일오차 편차 (초/일)',
    dailyRatePlaceholder: '예: +4.5 또는 -3',
    driftHeading: '예측 결과',
    period: '기간',
    accumulatedDrift: '예측된 누적 오차',
    day: '1일',
    week: '1주일',
    month: '1개월',
    months3: '3개월',
    months6: '6개월',
    year: '1년',
    years5: '5년',
    watchStandardTitle: '인증 표준',
    trackerHeading: '실시간 오차 추적기',
    driftCalculatorTab: '누적 오차 예측',
    trackerTab: '오차 기록기',
    stdRolex: '롤렉스 최상급 크로노미터',
    stdCosc: 'COSC 크로노미터',
    stdMetas: 'METAS 마스터 크로노미터',
    stdStdMech: '일반 기계식 시계',
    stdQuartz: '일반 쿼츠 시계',
    stdHaq: '고정밀 쿼츠 (HAQ)',
    presetRolex: '롤렉스 (+2 초/일)',
    presetCosc: 'COSC (+4 초/일)',
    presetStdMech: '일반 기계식 (+15 초/일)',
    presetQuartz: '쿼츠 (+0.5 초/일)',
    statusPass: '합격',
    statusFail: '불합격',
    toleranceRolex: '±2 초/일',
    toleranceCosc: '-4 / +6 초/일',
    toleranceMetas: '0 / +5 초/일',
    toleranceStdMech: '±15 초/일',
    toleranceQuartz: '±0.5 초/일',
    toleranceHaq: '±10 초/년',
  },
  seo: [
    { type: 'title', text: '시계 정밀도 및 일오차 조정 완벽 가이드', level: 2 },
    { type: 'paragraph', html: '기계식 시계는 미세 공학의 결정체이지만, 쿼츠 무브먼트와 달리 시간 측정의 정확도에 영향을 주는 다양한 환경적, 물리적 힘에 노출되어 있습니다. 시계의 일오차 편차를 모니터링하고 이해하는 것은 시계의 성능을 유지하고 전문적인 오버홀 서비스가 필요한 시기를 결정하는 데 핵심적인 역할을 합니다.' },
    { type: 'title', text: '기계식 시계에 오차가 발생하는 주요 원인', level: 2 },
    { type: 'paragraph', html: '일일 오차에는 여러 가지 요인이 영향을 미칩니다. 중력은 시계의 보관 방향(자세)에 따라 밸런스 휠에 다르게 작용합니다. 온도 변화는 헤어스프링을 팽창하거나 수축시켜 진동수를 변화시킬 수 있습니다. 또한, 메인스프링의 태엽 감김 상태(파워 리저브)도 진동각에 영향을 미치는데, 태엽이 완전히 감긴 상태가 태엽이 풀려가는 상태보다 훨씬 안정적인 성능을 보입니다.' },
    { type: 'title', text: '누적 오차 이해하기: 미세한 오차가 축적되는 방식', level: 2 },
    { type: 'paragraph', html: '하루에 단 +5초의 오차는 미미해 보일 수 있지만, 시간은 누적됩니다. 단 일주일 만에 오차는 35초로 늘어납니다. 한 달이면 2.5분이 되고, 1년이면 30분 이상의 오차가 발생합니다. 이 누적 오차는 여러 개의 시계를 번갈아 가며 착용하고 원자 기준 시계와 동기화된 상태를 유지하려는 시계 수집가들에게 정확한 오차 추적이 필수적인 이유를 보여줍니다.' },
    { type: 'title', text: '시계 정밀도를 수동으로 추적하고 계산하는 방법', level: 2 },
    { type: 'paragraph', html: '전문 장비인 타임그래퍼 없이 시계의 일오차를 측정하려면 오차 기록기 기능을 사용할 수 있습니다. 먼저 시계를 정확한 기준 시계와 동기화하거나 원자 시계 기준(UTC 또는 NTP 등)에 대한 현재 오차(초)를 기록합니다. 24시간에서 48시간이 지난 후 다시 한번 오차를 기록합니다. 두 오차의 차이를 경과한 일수로 나누면 시계의 평균 일오차 편차를 계산할 수 있습니다.' },
    { type: 'title', text: '자세차를 활용한 자가 조정 방법', level: 2 },
    { type: 'paragraph', html: '많은 기계식 시계는 착용하지 않을 때 놓아두는 방향(자세)에 따라 미세하게 오차를 스스로 조정할 수 있습니다. 예를 들어, 밤에 시계 다이얼이 하늘을 향하도록 눕혀두면 몇 초가 빨라질 수 있는 반면, 용두(크라운)가 아래로 향하도록 세워두면 몇 초가 느려질 수 있습니다. 이러한 자세에 따른 오차 변화를 기록하고 저희 계산기를 활용하면, 시계를 밤에 놓아두는 자세를 바꾸는 것만으로도 일오차를 자연스럽게 상쇄할 수 있습니다.' },
  ],
  faq: [
    {
      question: '기계식 시계의 정상적인 일오차 범위는 얼마인가요?',
      answer: '일반적인 기계식 시계는 보통 하루에 +/- 10~20초 정도의 오차가 발생합니다. 공식 COSC 크로노미터 인증을 받은 시계는 하루 -4 ~ +6초 이내로 조정되며, 고급 쿼츠 무브먼트는 하루 +/- 0.5초 미만의 오차를 유지하기도 합니다.',
    },
    {
      question: '놓아두는 자세에 따라 시계 오차가 달라지는 이유는 무엇인가요?',
      answer: '시계가 하늘을 향하는지, 바닥을 향하는지, 용두가 위나 아래로 향하는지에 따라 밸런스 휠과 헤어스프링에 작용하는 중력의 영향이 달라집니다. 이 자세차로 인해 진동각과 오차에 미세한 변화가 생깁니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '초기 상태 기록',
      text: '신뢰할 수 있는 원자 시계와 시계를 동기화하거나 현재 오차(초)를 기록합니다.'
    },
    {
      name: '대기 및 착용',
      text: '시계를 평소처럼 착용하거나 특정 자세로 최소 12~24시간 동안 보관합니다.'
    },
    {
      name: '두 번째 상태 기록',
      text: '시계의 오차를 다시 기록합니다. 시스템이 자동으로 하루 평균 오차(초/일)를 계산합니다.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 오차 측정기 및 기록기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '기계식 시계의 정상적인 일오차 범위는 얼마인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '일반적인 기계식 시계는 보통 하루에 +/- 10~20초 정도의 오차가 발생합니다. 공식 COSC 크로노미터 인증을 받은 시계는 하루 -4 ~ +6초 이내로 조정되며, 고급 쿼츠 무브먼트는 하루 +/- 0.5초 미만의 오차를 유지하기도 합니다.'
          }
        },
        {
          '@type': 'Question',
          'name': '놓아두는 자세에 따라 시계 오차가 달라지는 이유는 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '시계가 하늘을 향하는지, 바닥을 향하는지, 용두가 위나 아래로 향하는지에 따라 밸런스 휠과 헤어스프링에 작용하는 중력의 영향이 달라집니다. 이 자세차로 인해 진동각과 오차에 미세한 변화가 생깁니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 오차 수동 측정 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '초기 상태 기록',
          'text': '신뢰할 수 있는 원자 시계와 시계를 동기화하거나 현재 오차(초)를 기록합니다.'
        },
        {
          '@type': 'HowToStep',
          'name': '대기 및 착용',
          'text': '시계를 평소처럼 착용하거나 특정 자세로 최소 12~24시간 동안 보관합니다.'
        },
        {
          '@type': 'HowToStep',
          'name': '두 번째 상태 기록',
          'text': '시계의 오차를 다시 기록합니다. 시스템이 자동으로 하루 평균 오차(초/일)를 계산합니다.'
        }
      ]
    }
  ]
};

import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'watch-savings-planner',
  title: '시계 구입 저축 계획기',
  description: '다음 시계 구입을 위한 저축 목표를 설정하고 추적하세요. 진행 상황을 시각화하고, 기간을 계산하며, 동기를 유지하세요.',
  ui: {
    title: '저축 목표 설정',
    addGoalTitle: '새 저축 목표',
    goalNameLabel: '시계',
    goalNamePlaceholder: '예: Rolex Submariner',
    targetPriceLabel: '목표 금액',
    currentSavingsLabel: '저축된 금액',
    monthlyLabel: '월 적금',
    addButton: '목표 추가',
    cancelButton: '취소',
    goalsEmpty: '아직 저축 목표가 없습니다',
    goalsEmptySub: '첫 번째 시계 목표를 설정하고 저축을 시작하세요!',
    monthsToGoal: '목표까지 기간',
    yearsToGoal: '목표까지 냄',
    month: '개월',
    months: '개월',
    year: '년',
    totalSaved: '총 저축액',
    totalGoals: '목표',
    achieved: '달성',
    percentLabel: '저축됨',
    deleteGoal: '삭제',
    editGoal: '편집',
    saveGoal: '저장',
    currency: 'KRW',
    summaryTitle: '요약',
    goalAchieved: '달성!',
    goalProgress: '진행 상황',
    congratsTitle: '축하합니다!',
    congratsDesc: '저축 목표를 달성했습니다!',
    monthlyContribution: '월 적금액',
    targetDate: '목표 날짜',
    adjustMonthly: '월 금액 조정',
  },
  seo: [
    { type: 'title', text: '시계 구입 저축 계획기 - 다음 시계 구입을 추적하세요', level: 2 },
    { type: 'paragraph', html: '시계를 위해 저축하는 것은 여정같습니다. <strong>빔터지 스피드마스터</strong>, <strong>서브마리너</strong>, 또는 <strong>그랜드 세이코</strong>물론, 명확한 저축 계획이 꿈을 일정으로 바꾸어 줍니다. 이 도구를 사용하면 진행 상황을 시각화하고, 월 적금액을 조정하며, 바틱에서 원하는 시계를 살 수 있는 정확한 순간을 알 수 있습니다.' },
    { type: 'title', text: '시계 콜렉터에게 저축 계획이 중요한 이유', level: 3 },
    { type: 'paragraph', html: '시계 콜렉션은 인내의 게임입니다. 인기 모델의 가격은 꼭 오르고, 충동 구매는 돋이렴 어어짐니다. 구조화된 저축 접근법은 규육적인 슬관을 만들어 주고, 재정적 부담을 방지하며, 최종 구매가 더욱 가치 있도록 만듭니다. 게다가 매일 진행 상황을 추적하면 기대감이 쌓이고, 언박스 시간이 더욱 달콤해집니다.' },
    { type: 'title', text: '현실적인 시계 저축 목표 설정하기', level: 3 },
    { type: 'paragraph', html: '세금과 배송비를 포함한 총 가격부터 시작하세요. 그다음으로 매월 무리 없이 떼 놓을 수 있는 금액으로 나누세요. 좋은 규챙은 가책하기 좋은 소득의 <strong>10-15%</strong>를 시계 저축에 할당하는 것입니다. 기간이 너무 길다면, 더 작은 이부 목표로 나누거나, 동일한 스타일계에서 더 합리적인 대안을 탐색해 보세요.' },
    { type: 'title', text: '목표 추적의 심리학', level: 3 },
    { type: 'paragraph', html: '시각적인 진행 추적은 콜렉션을 그렇게 보상감 있게 만드는 신경전달물질인 도파민 분비를 촉진합니다. 새로운 적금을 기록하고 진행 링이 채워지는 것을 볼 때마다 그 슬관이 강화됩니다. 그러하기 때문에 작은 금액을 규칙적으로 저축하는 것이 때로 일회성 대금 저축보다 효과적인 경우가 많습니다. 그 리들 자체가 콜렉션 경험의 일부가 되기 때문입니다.' },
  ],
  faq: [
    {
      question: '시계를 위해 매달 얼마를 저축해야 하나요?',
      answer: '가책하기 좋은 월 소득의 10-15%를 목표로 하세요. 일관성이 관건입니다. 매월 100달러라도 1년이면 1,200달러가 됩니다. 기간에 따라 금액을 조정하세요. 단기 목표일수록 더 많은 월 저축액이 필요합니다.',
    },
    {
      question: '한 번에 하나의 시계를 위해 저축해야 하나요, 아니면 여러 개를 함께요?',
      answer: '보통은 한 개씩 저축하는 것이 더 효과적입니다. 집중이 모멘텀을 만들어 줍니다. 첫 번째 목표를 달성하면, 그 자신과 손쟁이는 다음 목표로 이어집니다. 하지만, 이 계획기는 여러 목표를 지원하므로 기간을 비교할 수 있습니다.',
    },
    {
      question: '저축 중에 시계 가격이 오르면 어떻게 하나요?',
      answer: '좋은 질문입니다. 몇 개월마다 현재 시장 가격을 확인하고 목표를 업데이트하세요. 가격이 빠르게 오르고 있다면, 월 적금액을 늘리거나 기간을 단축하여 현재 가격을 보전하는 것을 고려하세요.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '목표 설정',
      text: '시계 이름과 세금 및 배송비를 포함한 총 가격을 입력하세요.',
    },
    {
      name: '저축 훌이보기',
      text: '이미 저축한 금액과 매월 떼 놓을 수 있는 금액을 기록하세요.',
    },
    {
      name: '진행 상황 모니터링',
      text: '저축액을 업데이트할 때마다 진행 링이 채워지는 것을 확인하세요. 월 금액은 언제든 조정 가능합니다.',
    },
    {
      name: '축하',
      text: '링이 100%가 되면, 목표를 달성한 것입니다. 이젠 그 시계를 사랜 차례입니다!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '시계를 위해 매달 얼마를 저축해야 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '가책하기 좋은 월 소득의 10-15%를 목표로 하세요. 일관성이 관건입니다. 매월 100달러라도 1년이면 1,200달러가 됩니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '한 번에 하나의 시계를 위해 저축해야 하나요, 아니면 여러 개를 함께요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '보통은 한 개씩 저축하는 것이 더 효과적입니다. 집중이 모멘텀을 만들어 줍니다. 첫 번째 목표를 달성하면, 그 손쟁을 다음 목표로 이어 갑니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '저축 중에 시계 가격이 오르면 어떻게 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '몇 개월마다 현재 시장 가격을 확인하고 목표를 업데이트하세요. 가격이 빠르게 오르면 월 적금액을 늘리는 것을 고려하세요.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 구입 저축 계획기',
      'operatingSystem': '모든 OS',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'HTML5 필요. JavaScript 필요.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 구입을 위한 저축 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '목표 설정',
          'text': '시계 이름과 세금 및 배송비를 포함한 총 가격을 입력하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '저축 훌이보기',
          'text': '이미 저축한 금액과 매월 떼 놓을 수 있는 금액을 기록하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '진행 상황 모니터링',
          'text': '저축액을 업데이트할 때마다 진행 링이 채워지는 것을 확인하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '축하',
          'text': '링이 100%가 되면, 목표를 달성한 것입니다. 이젠 그 시계를 사랜 차례입니다!',
        },
      ],
    },
  ],
};

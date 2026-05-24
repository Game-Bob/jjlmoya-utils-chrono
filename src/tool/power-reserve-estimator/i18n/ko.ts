import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'power-reserve-estimator',
  title: '시계 파워 리저브 추정기',
  description: '크라운 회전수와 착용 시간을 기준으로 시계의 남은 파워 리저브를 추정합니다. ETA, Sellita, Miyota, Seiko, Rolex의 주요 칼리버를 지원합니다.',
  ui: {
    title: '파워 리저브 추정기',
    movementLabel: '무브먼트',
    selectMovement: '무브먼트 선택',
    customMovement: '사용자 정의',
    turnsLabel: '크라운 회전수',
    hoursLabel: '착용 시간',
    turnsInput: '회전',
    hoursInput: '시간',
    activityLabel: '활동량',
    activityLow: '데스크',
    activityMedium: '걷기',
    activityHigh: '활동적',
    calculate: '계산',
    reserveRemaining: '남은 파워 리저브',
    hoursRemaining: '남은 시간',
    chargePercent: '충전율',
    resultLabel: '추정 파워 리저브',
    stopTimeLabel: '정지 예정 시각',
    powerReserveHours: '파워 리저브(h)',
    fullWindTurns: '만충전 회전수',
    step1: '드롭다운에서 무브먼트를 선택하세요.',
    step2: '크라운 회전수와 착용 시간을 입력하세요.',
    step3: '계산 버튼을 눌러 파워 리저브를 확인하세요.',
    tipTitle: '팁',
    tipContent: '수동 와인딩 무브먼트는 크라운을 돌릴 때만 충전됩니다. 오토매틱 무브먼트는 착용 중에도 충전됩니다.',
  },
  seo: [
    { type: 'title', text: '시계 파워 리저브 추정기\u2014내 무브먼트의 잔여 동력은 얼마나 남았을까?', level: 2 },
    { type: 'paragraph', html: '기계식 시계에 얼마나 많은 동력이 남아 있는지 궁금하신가요? 오늘 아침 크라운을 감았든, 하루 종일 착용했든, 이 추정기는 <strong>ETA, Sellita, Miyota, Seiko, Rolex</strong> 같은 인기 칼리버의 대략적인 충전율과 잔여 시간을 알려줍니다.' },
    { type: 'title', text: '기계식 시계에서 파워 리저브의 원리', level: 3 },
    { type: 'paragraph', html: '파워 리저브는 태엽에 저장된 에너지의 양입니다. 크라운을 감으면 태엽이 조여지면서 위치 에너지가 저장됩니다. 오토매틱 로터도 시계를 착용하는 동안 태엽을 감아줍니다. 저장된 에너지는 일정한 비율\u2014보통 시간당 2~3%\u2014로 소비되다가 시계가 멈춥니다.' },
    { type: 'title', text: '크라운 와인딩과 로터 충전의 차이', level: 3 },
    { type: 'paragraph', html: '크라운을 통한 수동 와인딩이 시계를 충전하는 가장 효율적인 방법입니다\u2014회전당 예측 가능한 양의 에너지가 추가되며, 보통 전체 파워 리저브의 약 2.5%입니다. 착용 중 충전은 더 느리고 활동량에 따라 달라집니다. 사무직 근무자는 시간당 4~6%, 활동적인 사람은 시간당 8~10%까지 충전할 수 있습니다. 이 추정기는 보수적인 평균값을 사용합니다.' },
    { type: 'title', text: '파워 리저브 추정이 중요한 이유', level: 3 },
    { type: 'paragraph', html: '시계의 충전 상태를 알면 예상치 못한 정지를 방지할 수 있습니다. 밤새 시계가 멈춘다면 취침 전에 더 감아야 하거나 충분한 착용 시간을 확보하지 못한 것일 수 있습니다. 이 도구를 사용해 충전 습관을 이해하고 오토매틱 시계를 계속 작동시키세요.' },
  ],
  faq: [
    {
      question: '크라운을 한 번 돌리면 시계가 얼마나 충전되나요?',
      answer: '무브먼트에 따라 다릅니다. 대부분의 오토매틱 칼리버는 30~40회전이면 만충전되므로, 회전당 전체 파워 리저브의 약 2.5~3.3%가 추가됩니다. Unitas 6498 같은 수동 와인딩 무브먼트도 만충전에 약 35회전이 필요합니다.',
    },
    {
      question: '시계를 착용하는 것만으로도 와인딩만큼 충전이 되나요?',
      answer: '착용 중 충전은 더 느리고 변동이 있습니다. 데스크 작업 시 로터를 통해 시간당 4~6% 정도 충전됩니다. 활동적인 움직임(걷기, 운동)이 있을 때는 시간당 8~10%까지 도달할 수 있습니다. 손으로 감는 것이 더 빠르고 예측 가능합니다.',
    },
    {
      question: '시계는 시간당 파워 리저브를 얼마나 소모하나요?',
      answer: '소모율은 일정합니다. 100을 파워 리저브 시간으로 나누면 됩니다. 38시간 무브먼트는 시간당 약 2.6%, 42시간은 2.4%, 70시간은 약 1.4%를 소모합니다.',
    },
    {
      question: '시계를 과도하게 감으면 고장나나요?',
      answer: '최신 오토매틱 무브먼트에는 슬리핑 클러치가 있어 과도한 와인딩을 방지합니다. 태엽이 완전히 감기면 추가 회전은 그냥 미끄러집니다. 수동 와인딩 무브먼트에도 정지 장치가 있지만, 무리하게 돌리면 태엽이 손상될 수 있습니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '무브먼트 선택',
      text: `드롭다운에서 시계 칼리버를 선택하세요. 목록에 없으면 '사용자 정의'를 선택하고 파워 리저브와 만충전 회전수를 입력하세요.`,
    },
    {
      name: '입력값 기입',
      text: '크라운을 몇 회전 감았는지, 오늘 몇 시간 착용했는지 입력하세요. 둘 다 입력하면 합산 추정치가 표시됩니다.',
    },
    {
      name: '계산',
      text: '계산 버튼을 누르세요. 결과에 추정 충전율과 남은 파워 리저브 시간이 표시됩니다.',
    },
    {
      name: '습관 조정',
      text: '결과를 바탕으로 취침 전에 더 감아야 하는지, 낮 동안 착용 시간을 늘려야 하는지 판단하여 시계를 계속 작동시키세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '크라운을 한 번 돌리면 시계가 얼마나 충전되나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '무브먼트에 따라 다릅니다. 대부분의 오토매틱 칼리버는 30~40회전이면 만충전되므로, 회전당 전체 파워 리저브의 약 2.5~3.3%가 추가됩니다. Unitas 6498 같은 수동 와인딩 무브먼트도 만충전에 약 35회전이 필요합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계를 착용하는 것만으로도 와인딩만큼 충전이 되나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '착용 중 충전은 더 느리고 변동이 있습니다. 데스크 작업 시 로터를 통해 시간당 4~6% 정도 충전됩니다. 활동적인 움직임이 있을 때는 시간당 8~10%까지 도달할 수 있습니다. 손으로 감는 것이 더 빠르고 예측 가능합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계는 시간당 파워 리저브를 얼마나 소모하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '소모율은 일정합니다. 100을 파워 리저브 시간으로 나누면 됩니다. 38시간 무브먼트는 시간당 약 2.6%, 42시간은 2.4%, 70시간은 약 1.4%를 소모합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계를 과도하게 감으면 고장나나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '최신 오토매틱 무브먼트에는 슬리핑 클러치가 있어 과도한 와인딩을 방지합니다. 태엽이 완전히 감기면 추가 회전은 그냥 미끄러집니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 파워 리저브 추정기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 파워 리저브를 추정하는 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '무브먼트 선택',
          'text': `드롭다운에서 시계 칼리버를 선택하세요. 목록에 없으면 '사용자 정의'를 선택하고 파워 리저브와 만충전 회전수를 입력하세요.`,
        },
        {
          '@type': 'HowToStep',
          'name': '입력값 기입',
          'text': '크라운을 몇 회전 감았는지, 오늘 몇 시간 착용했는지 입력하세요. 둘 다 입력하면 합산 추정치가 표시됩니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '계산',
          'text': '계산 버튼을 누르세요. 결과에 추정 충전율과 남은 파워 리저브 시간이 표시됩니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '습관 조정',
          'text': '결과를 바탕으로 취침 전에 더 감아야 하는지, 낮 동안 착용 시간을 늘려야 하는지 판단하여 시계를 계속 작동시키세요.',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'tachymeter-calculator',
  title: 'Takimeteo Gyesangi: Gyeongwa sigan euro sokdo gyesan',
  description: '타키미터 공식을 사용하여 경과 시간으로 속도를 계산합니다. 타키미터 베젤 눈금이 있는 모든 크로노그래프 시계와 호환됩니다.',
  ui: {
    title: '타키미터 계산기',
    timeLabel: '경과 시간 (초)',
    timeHelp: '1km 또는 1마일 구간 측정 시간',
    speedResult: '속도',
    bezelReading: '베젤 눈금',
    presetLabel: '시나리오 선택',
    selectPreset: '시나리오 선택',
    customPreset: '사용자 설정',
    seconds: '초',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: '물체가 시작 지점을 통과하면 크로노그래프를 시작합니다.',
    exampleStep2: '1km 후에 정지합니다. 타키미터 눈금이 속도를 표시합니다.',
    tipTitle: '팁',
    tipContent: '36초에서 베젤은 100을 가리킵니다. 더 빠른 시간(경과 시간이 짧을수록)은 타키미터 눈금에서 더 높은 속도를 나타냅니다.',
  },
  seo: [
    { type: 'title', text: '타키미터 계산기: 경과 시간으로 속도 계산', level: 2 },
    { type: 'paragraph', html: '타키미터는 시계 베젤이나 다이얼에 있는 눈금으로, 경과 시간을 속도로 변환합니다. 일반적으로 크로노그래프와 함께 사용됩니다. 물체가 기준점을 통과하면 타이머를 시작하고 1km(또는 1마일) 후에 정지하여 눈금에서 속도를 읽습니다. 이 계산기가 직접 계산해 드립니다.' },
    { type: 'title', text: '타키미터 작동 원리', level: 3 },
    {
      type: 'glossary', items: [
        { term: '공식', definition: '속도 = 3,600 ÷ 경과 시간(초). 상수 3,600은 1시간당 초 수입니다.' },
        { term: '눈금', definition: '타키미터 베젤은 60(3시 방향)에서 400~500(12시 방향)까지 표시되어 있습니다. 속도가 빠를수록 경과 시간이 짧아집니다.' },
        { term: '기준 거리', definition: '표준 타키미터는 1km 또는 1마일을 기준으로 보정됩니다. 다른 거리에서는 눈금을 비례적으로 나누어 계산합니다.' },
      ]
    },
    { type: 'title', text: '일반적인 타키미터 측정값', level: 3 },
    {
      type: 'table', headers: ['경과 시간', '속도', '시나리오'], rows: [
        ['10초', '360 km/h', '고속 열차 / 경주용 자동차'],
        ['12초', '300 km/h', '전용기 이륙'],
        ['20초', '180 km/h', '고속도로 스포츠카'],
        ['30초', '120 km/h', '고속도로 주행'],
        ['36초', '100 km/h', '일반 도로 주행 (표준 기준)'],
        ['45초', '80 km/h', '도시 도로 주행'],
        ['60초', '60 km/h', '시내 주행'],
        ['90초', '40 km/h', '자전거'],
        ['120초', '30 km/h', '조깅'],
        ['240초', '15 km/h', '달리기'],
        ['480초', '7.5 km/h', '걷기'],
      ]
    },
    { type: 'title', text: '표준 눈금 너머', level: 3 },
    { type: 'paragraph', html: '타키미터 베젤이 400까지만 표시되고 경과 시간이 9초 미만인 경우에도 사용할 수 있습니다. 더 긴 기준 거리를 사용하면 됩니다. 예를 들어 2km를 18초에 주행했다면 베젤 눈금을 반으로 나눕니다. 반대로 저속(60초 초과)의 경우 더 짧은 기준 거리(예: 0.5km)를 사용하고 눈금에 2를 곱합니다.' },
    { type: 'diagnostic', variant: 'info', title: '타키미터 호환성', icon: 'mdi:information', badge: '참고', html: '모든 크로노그래프에 타키미터 베젤이 있는 것은 아닙니다. 일부 시계는 다이얼 내부 링이나 외부 챕터 링에 타키미터 눈금이 있습니다. 디지털 시계는 크로노그래프 모드에 타키미터 기능이 포함될 수 있습니다. 공식은 물리적 눈금과 관계없이 항상 작동합니다.' },
  ],
  faq: [
    {
      question: '시계의 타키미터 베젤을 어떻게 사용하나요?',
      answer: '기준점(예: 고속도로 표지판)에서 크로노그래프를 시작하고 정확히 1km(또는 1마일) 후에 정지합니다. 초침이 베젤 눈금의 속도를 가리킵니다. 예를 들어 1km를 36초에 주행했다면 바늘이 100을 가리키며, 이는 시속 100km를 의미합니다.',
    },
    {
      question: '경과 시간이 베젤 판독 범위보다 짧으면 어떻게 하나요?',
      answer: '일부 타키미터는 400 또는 500까지만 표시됩니다. 1km를 9초 미만에 주행하는 경우 더 긴 기준 거리를 사용하세요. 2km를 주행하고 베젤 눈금을 2로 나누거나, 3km를 주행하고 3으로 나눕니다.',
    },
    {
      question: '경과 시간이 베젤 판독 범위보다 길면 어떻게 하나요?',
      answer: '더 짧은 기준 거리를 사용하세요. 예를 들어 1km에 90초가 걸리는 경우 0.5km로 측정합니다. 베젤을 읽고 2를 곱합니다. 표준 타키미터 눈금은 약 7초에서 60초까지의 시간을 지원합니다.',
    },
    {
      question: '타키미터를 속도 외에 다른 용도로 사용할 수 있나요?',
      answer: '네. 타키미터는 시간당 모든 비율을 측정합니다. 작업 완료 시간을 측정하면 눈금이 시간당 완료 가능한 작업 수를 보여줍니다. 제조업에서 30초 작업은 시간당 120개를 의미합니다.',
    },
    {
      question: '모든 타키미터가 동일한 눈금을 사용하나요?',
      answer: '대부분은 3,600 ÷ 초 공식에 기반한 표준 로그 눈금을 사용합니다. 하지만 일부 빈티지 시계나 브랜드에는 차이가 있을 수 있습니다. 물리적 눈금은 시계의 분침 트랙과 베젤 표시에 의해 제한될 수도 있습니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '시나리오를 선택하거나 사용자 정의 시간 입력',
      text: '자동차, 자전거, 달리기 등의 프리셋을 선택하거나 사용자 정의를 선택하여 초 단위로 경과 시간을 입력합니다.',
    },
    {
      name: '속도 결과 확인',
      text: '계산기가 km/h 단위의 속도와 해당하는 타키미터 베젤 눈금값을 표시합니다.',
    },
    {
      name: '크로노그래프에 적용',
      text: '경과 시간을 사용하여 시계의 타키미터 베젤에서 해당 속도를 찾습니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '시계의 타키미터 베젤을 어떻게 사용하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '기준점에서 크로노그래프를 시작하고 정확히 1km 후에 정지합니다. 초침이 베젤 눈금의 속도를 가리킵니다. 예: 36초 = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': '경과 시간이 베젤 판독 범위보다 짧으면 어떻게 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '더 긴 기준 거리를 사용하세요. 2km를 주행하고 베젤 눈금을 2로 나누거나, 3km를 주행하고 3으로 나눕니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '경과 시간이 베젤 판독 범위보다 길면 어떻게 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '더 짧은 기준 거리를 사용하세요. 0.5km로 측정하고 베젤을 읽어 2를 곱합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '타키미터를 속도 외에 다른 용도로 사용할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '네. 타키미터는 시간당 모든 비율을 측정합니다. 작업 시간을 측정하면 눈금이 시간당 완료 가능한 작업 수를 보여줍니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '모든 타키미터가 동일한 눈금을 사용하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '대부분은 3,600 ÷ 초의 표준 로그 눈금을 사용합니다. 일부 빈티지 시계에는 차이가 있을 수 있습니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '타키미터 계산기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '타키미터로 속도를 계산하는 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '시나리오를 선택하거나 사용자 정의 시간 입력',
          'text': '자동차, 자전거, 달리기 등의 프리셋을 선택하거나 사용자 정의를 선택하여 초 단위로 경과 시간을 입력합니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '속도 결과 확인',
          'text': '계산기가 km/h 단위의 속도와 해당하는 타키미터 베젤 눈금값을 표시합니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '크로노그래프에 적용',
          'text': '경과 시간을 사용하여 시계의 타키미터 베젤에서 해당 속도를 찾습니다.',
        },
      ],
    },
  ],
};

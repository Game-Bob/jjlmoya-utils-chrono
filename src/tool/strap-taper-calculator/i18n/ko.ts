import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'strap-taper-calculator',
  title: '시계 스트랩 테이퍼 및 비율 계산기',
  description: '케이스 직경과 러그 너비를 기반으로 시계에 이상적인 스트랩 테이퍼를 계산합니다. 균형 잡힌 룩을 위한 완벽한 버클 너비를 찾아보세요.',
  ui: {
    title: '스트랩 테이퍼 계산기',
    caseLabel: '시계 치수',
    caseInput: '케이스 직경',
    lugLabel: '러그 너비',
    lugInput: '러그 너비',
    taperLabel: '테이퍼 스타일',
    straight: '스트레이트',
    classic: '클래식',
    aggressive: '공격적',
    customTaper: '사용자 지정',
    buckleWidth: '버클 너비',
    resultsTitle: '비율',
    lugWidth: '러그 너비',
    buckleWidthResult: '버클 너비',
    taperAmount: '테이퍼',
    taperRatio: '비율',
    proportionScore: '프로포션',
    proportionExcellent: '우수',
    proportionGood: '양호',
    proportionFair: '보통',
    proportionUnbalanced: '불균형',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: '참고',
    noteContent: '4 mm의 클래식 테이퍼(예: 20 mm에서 16 mm)는 드레스 워치에 적합합니다. 다이버 워치와 툴 워치는 견고한 느낌을 위해 스트레이트 또는 2 mm 테이퍼가 더 좋아 보이는 경우가 많습니다.',
    step1: '케이스 직경과 러그 너비를 입력하세요.',
    step2: '테이퍼 스타일을 선택하거나 사용자 지정 버클 너비를 설정하세요.',
    step3: '비율과 시각적 표현을 확인하세요.',
  },
  seo: [
    { type: 'title', text: '시계 스트랩 테이퍼 계산기 - 비율, 버클 너비 및 시각적 가이드', level: 2 },
    { type: 'paragraph', html: '균형 잡힌 스트랩은 시계의 완성도를 좌우합니다. 다이버 시계에 테이퍼가 너무 많으면 약해 보이고, 드레스 시계에 테이퍼가 없으면 투박해 보입니다. 이 계산기는 케이스 직경과 러그 너비를 기반으로 이상적인 <strong>스트랩 테이퍼 비율</strong>을 찾는 데 도움을 줍니다.' },
    { type: 'title', text: '스트랩 테이퍼란 무엇인가요?', level: 3 },
    { type: 'paragraph', html: '스트랩 테이퍼는 러그 끝에서 버클 끝까지 스트랩 너비가 줄어드는 것을 말합니다. 클래식한 드레스 워치는 러그에서 20 mm에서 버클에서 16 mm로 4 mm 테이퍼질 수 있습니다. 다이버 워치는 도구 같은 외관을 위해 20 mm 스트레이트를 유지할 수 있습니다.' },
    { type: 'title', text: '스트랩 비율의 황금비', level: 3 },
    { type: 'paragraph', html: '시계 애호가들은 일반적으로 러그 너비가 케이스 직경의 45%에서 55% 사이일 때 가장 보기 좋다고 동의합니다. 테이퍼의 경우 버클 너비가 러그 너비의 75%에서 85%이면 균형 잡히고 우아한 실루엣이 만들어집니다. 이 범위를 벗어나면 시계가 머리 부분이 무거워 보이거나 약해 보일 수 있습니다.' },
    { type: 'title', text: '시계 스타일별 테이퍼', level: 3 },
    { type: 'paragraph', html: '드레스 워치: 4 mm 테이퍼(20 mm에서 16 mm). 스포츠 워치: 2~3 mm 테이퍼. 다이버 워치: 0~2 mm 테이퍼. 밀리터리 또는 필드 워치: 견고한 룩을 위한 스트레이트 테이퍼. 파일럿 워치: 계기판 미학에 맞춘 최소 테이퍼.' },
  ],
  faq: [
    {
      question: '드레스 워치에 이상적인 스트랩 테이퍼는 무엇인가요?',
      answer: '4 mm 테이퍼가 클래식한 선택입니다. 러그 너비가 20 mm라면 버클은 16 mm입니다. 이는 드레스 워치의 세련된 룩을 보완하는 우아한 실루엣을 만듭니다.',
    },
    {
      question: '다이버 워치에 테이퍼 스트랩을 사용해야 하나요?',
      answer: '대부분의 다이버 워치는 테이퍼가 최소이거나 아예 없는 것이 가장 좋아 보입니다. 20 mm 스트레이트 스트랩을 끝까지 사용하면 다이버의 실용적인 특성에 맞는 견고한 툴 워치 느낌을 줍니다.',
    },
    {
      question: '테이퍼가 너무 공격적이면 어떻게 되나요?',
      answer: '공격적인 테이퍼(6 mm 이상)는 시계 헤드가 불균형적으로 크고 위가 무거워 보일 수 있습니다. 버클 쪽 스트랩이 얇게 느껴질 수도 있습니다.',
    },
    {
      question: '러그 너비는 어떻게 측정하나요?',
      answer: '시계 케이스의 스프링 바 구멍 사이의 안쪽 너비를 측정하세요. 그것이 필요한 스트랩 너비입니다. 일반적인 사이즈는 18 mm, 20 mm, 22 mm입니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '케이스 및 러그 치수 입력',
      text: '케이스 직경과 러그 너비를 밀리미터 단위로 입력하세요.',
    },
    {
      name: '테이퍼 스타일 선택',
      text: '스트레이트, 클래식, 공격적 또는 사용자 지정을 선택하세요. 시각적 표시가 즉시 업데이트됩니다.',
    },
    {
      name: '비율 검토',
      text: '비율과 프로포션 점수를 확인하여 스트랩 선택이 균형 잡혀 있는지 확인하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '드레스 워치에 이상적인 스트랩 테이퍼는 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4 mm 테이퍼가 클래식한 선택입니다. 러그 너비 20 mm의 경우 버클은 16 mm로, 우아한 실루엣을 만듭니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '다이버 워치에 테이퍼 스트랩을 사용해야 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '대부분의 다이버 워치는 테이퍼가 최소이거나 없는 것이 가장 좋습니다. 20 mm 스트레이트 스트랩이 견고한 느낌을 줍니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '테이퍼가 너무 공격적이면 어떻게 되나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '공격적인 테이퍼는 시계 헤드를 불균형적으로 보이게 하고 버클 쪽 스트랩이 얇게 느껴질 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '러그 너비는 어떻게 측정하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '시계 케이스의 스프링 바 구멍 사이의 안쪽 너비를 측정하세요. 일반적인 사이즈는 18 mm, 20 mm, 22 mm입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 스트랩 테이퍼 계산기',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 스트랩 테이퍼 비율 계산 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '케이스 및 러그 치수 입력',
          'text': '케이스 직경과 러그 너비를 밀리미터 단위로 입력하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '테이퍼 스타일 선택',
          'text': '스트레이트, 클래식, 공격적 또는 사용자 지정을 선택하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '비율 검토',
          'text': '비율과 프로포션 점수를 확인하세요.',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'water-resistance-converter',
  title: '시계 방수 변환기: 미터, ATM, Bar, 피트',
  description: '시계 방수 등급을 미터, 피트, ATM, Bar 간에 변환합니다. 일상 사용, 수영, 다이빙에서 각 등급이 실제로 의미하는 바를 확인하세요.',
  ui: {
    title: '방수 변환기',
    depthLabel: '방수 등급',
    enterDepth: '방수 깊이 입력',
    unitMeters: '미터 (m)',
    unitFeet: '피트 (ft)',
    unitATM: '기압 (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: '변환 값',
    ratingLabel: '등급',
    whatItMeans: '의미',
    notWaterResistant: '방수 아님',
    notWaterResistantDesc: '물방울도 피하세요. 물과 완전히 멀리하세요.',
    handWash: '생활 방수',
    handWashDesc: '손 씻기, 비, 가벼운 물방울. 수영이나 샤워는 안 됩니다.',
    showerSwim: '샤워와 수영',
    showerSwimDesc: '샤워, 수영장 얕은 수영. 잠수나 스노클링은 안 됩니다.',
    snorkeling: '수영과 스노클링',
    snorkelingDesc: '수영장 수영, 스노클링, 수상 스포츠. 일상 사용에 우수한 방수 성능.',
    scubaDiving: '레크리에이션 다이빙',
    scubaDivingDesc: '스쿠버 다이빙, 고강도 해양 활동. ISO 준수.',
    saturationDiving: '포화 잠수',
    saturationDivingDesc: '전문 포화 잠수. 극한 수심. 헬륨 이스케이프 밸브 컨텍스트.',
    tipTitle: '팁',
    tipContent: '방수 성능은 시간이 지남에 따라 저하됩니다. 개스킷과 실링은 매년 점검하고 3\u20135년마다 교체해야 합니다.',
  },
  seo: [
    { type: 'title', text: '시계 방수 변환기-미터, ATM, Bar, 피트 이해하기', level: 2 },
    { type: 'paragraph', html: '30미터 방수 등급이 30미터까지 잠수할 수 있다는 의미는 아닙니다. 물방울과 가벼운 비를 견딜 수 있다는 뜻입니다. 이 변환기는 <strong>미터, 피트, 기압(ATM), Bar</strong> 간을 변환하고 각 등급이 실제로 허용하는 활동을 알려줍니다.' },
    { type: 'title', text: '방수 등급에 대한 진실', level: 3 },
    { type: 'paragraph', html: '시계 방수 성능은 실험실에서 정적 수압으로 테스트됩니다. 실제 환경-팔 움직임, 다이빙, 온도 변화-에서는 훨씬 더 높은 동적 압력이 발생합니다. 30m / 3 ATM 시계는 생활 방수만 가능합니다. 수영을 위해서는 최소 100m / 10 ATM이 필요합니다. 스쿠버 다이빙을 위해서는 200m / 20 ATM이 표준 기준입니다.' },
    { type: 'title', text: '방수 성능이 시간이 지나면서 저하되는 이유', level: 3 },
    { type: 'paragraph', html: '시계를 밀봉하는 고무 개스킷과 O링은 시간이 지나면서 건조해지고, 균열이 생기고, 압축됩니다. 열, 자외선, 화학 물질이 이 과정을 가속화합니다. 한때 100m 방수였던 시계도 5년간 관리 없이 방치하면 생활 방수 수준으로 저하될 수 있습니다. 실링은 매년 점검하고 3~5년마다 교체하세요.' },
    { type: 'title', text: 'ISO 6425-다이버 시계 표준', level: 3 },
    { type: 'paragraph', html: '시계가 "다이버 시계"로 불리려면 ISO 6425 표준을 충족해야 합니다: 최소 100m 방수, 단방향 베젤, 야광 표시, 나사식 크라운. 이 표준을 충족하는 시계는 정격 수심보다 25% 높은 압력에서 테스트됩니다. 200m ISO 인증 시계는 250m에서 테스트됩니다.' },
  ],
  faq: [
    {
      question: '30미터 방수 시계로 수영할 수 있나요?',
      answer: '아니요. 30m / 3 ATM 등급은 생활 방수만 의미합니다-손 씻기, 비, 땀. 수영은 정적 테스트 압력을 초과하는 동적 압력을 만듭니다. 수영을 위해서는 최소 100m / 10 ATM을 선택하세요.',
    },
    {
      question: 'ATM, Bar, 미터의 차이점은 무엇인가요?',
      answer: '1 ATM = 1 Bar ≈ 10미터의 정적 수주입니다. 시계 업계에서는 본질적으로 동일합니다. 10 ATM 시계는 10 Bar 시계와 같으며 약 100미터까지 사용 가능합니다.',
    },
    {
      question: '시계 방수 테스트는 얼마나 자주 해야 하나요?',
      answer: '1년에 한 번, 특히 물에 노출되기 전에. 개스킷과 실링은 마모됩니다. 3~5년마다 모든 실링을 전체 서비스 시 교체해야 합니다.',
    },
    {
      question: 'ISO 6425 인증이란 무엇인가요?',
      answer: 'ISO 6425는 다이버 시계에 대한 국제 표준입니다. 최소 100m 방수, 단방향 베젤, 야광 표시, 정격 수심의 25% 초과 테스트를 요구합니다.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '등급 입력',
      text: '시계의 방수 등급 숫자를 입력하고 단위(미터, 피트, ATM, Bar)를 선택하세요.',
    },
    {
      name: '변환 값 확인',
      text: '카드에 네 가지 단위의 변환 값이 동시에 표시됩니다.',
    },
    {
      name: '권장 사항 확인',
      text: '강조 표시된 카드는 해당 방수 등급에서 안전한 활동을 보여줍니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '30미터 방수 시계로 수영할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '아니요. 30m / 3 ATM 등급은 생활 방수만 의미합니다-손 씻기, 비, 땀. 수영을 위해서는 최소 100m / 10 ATM을 선택하세요.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ATM, Bar, 미터의 차이점은 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 Bar ≈ 10미터의 정적 수주입니다. 시계 업계에서는 본질적으로 동일합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '시계 방수 테스트는 얼마나 자주 해야 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1년에 한 번, 특히 물에 노출되기 전에. 3~5년마다 모든 실링을 전체 서비스 시 교체해야 합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ISO 6425 인증이란 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425는 최소 100m 방수, 단방향 베젤, 야광 표시, 정격 수심의 25% 초과 테스트를 요구합니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 방수 변환기',
      'operatingSystem': '모두',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 필요. JavaScript 필요.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 방수 등급 변환 방법',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '등급 입력',
          'text': '시계의 방수 등급 숫자를 입력하고 단위를 선택하세요.',
        },
        {
          '@type': 'HowToStep',
          'name': '변환 값 확인',
          'text': '카드에 네 가지 단위의 변환 값이 동시에 표시됩니다.',
        },
        {
          '@type': 'HowToStep',
          'name': '권장 사항 확인',
          'text': '강조 표시된 카드는 해당 방수 등급에서 안전한 활동을 보여줍니다.',
        },
      ],
    },
  ],
};

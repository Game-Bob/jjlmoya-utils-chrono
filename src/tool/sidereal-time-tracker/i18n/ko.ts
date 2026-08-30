import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '태양시와 항성시의 차이점은 무엇인가요?',
    answer: '태양시는 태양의 로컬 자오선에 대한 위치를 기준으로 하며(24시간 소요), 항성시는 지구의 먼 배경 별에 대한 자전을 기준으로 합니다(23시간 56분 4.09초 소요).',
  },
  {
    question: '항성일이 태양일보다 짧은 이유는 무엇인가요?',
    answer: '지구가 자전축을 중심으로 회전하는 동안, 태양 주위의 궤도를 따라 이동합니다. 다시 태양을 향하려면 지구가 360도보다 약간 더 회전해야 하며, 이는 단순한 별 정렬 회전에 비해 하루에 약 3분 56초를 추가합니다.',
  },
  {
    question: '경도는 로컬 항성시에 어떤 영향을 미치나요?',
    answer: '로컬 항성시는 관측자의 경도(시간으로 변환: 시간당 15도)를 그리니치 평균 항성시(GMST)에 더하여 계산됩니다. 동쪽으로 1도마다 로컬 항성시에 4분이 추가됩니다.',
  },
];

const howTo = [
  {
    name: '참조 경도 설정',
    text: '슬라이더를 로컬 경도에 맞춥니다. 이렇게 하면 24시간 항성시 눈금이 로컬 자오선에 정렬됩니다.',
  },
  {
    name: '태양 바늘과 항성 바늘 관찰',
    text: '다이얼을 보십시오: 표준 태양 바늘은 내부 12시간 다이얼에 UTC 시간을 표시하고, 황금색 바늘과 별은 외부 24시간 눈금에 항성시를 표시합니다.',
  },
  {
    name: '천체 속도 가속',
    text: '200배 또는 5000배 속도 배율을 클릭하여 별 배경 구체의 회전과 드리프트가 실시간으로 누적되는 것을 관찰하십시오.',
  },
];

const title = '천문 항성시 트래커: 로컬 항성시 시계';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'sidereal-time-tracker',
  title,
  description: '예술적인 천문 아스트롤라베 다이얼과 실시간 별 드리프트 시뮬레이터로 그리니치 평균 항성시(GMST)와 로컬 항성시(LST)를 추적하세요.',
  ui: {
    title: '항성시 트래커',
    longitudeLabel: '관측자 경도',
    solarTimeLabel: '협정 세계시(UTC)',
    siderealTimeLabel: '로컬 항성시(LST)',
    differenceLabel: '항성-태양 드리프트',
    utcLabel: 'UTC 날짜/시간',
    speedLabel: '천체 속도',
    speedNormal: '1배(실시간)',
    speedFast: '200배(타임랩스)',
    speedVeryFast: '5000배(드리프트)',
    audioToggleLabel: '우주 차임 소리',
    step1: '로컬 경도를 조정하여 로컬 항성시의 변화를 실시간으로 확인하세요.',
    step2: '속도 배율을 전환하여 표준 태양 바늘과 항성 구체의 드리프트를 관찰하세요.',
    step3: '우주 차임을 활성화하여 표준 틱과 천문 시간 경과의 차이를 들어보세요.',
    tipTitle: '천문 드리프트',
    tipContent: '지구가 태양 주위를 공전하기 때문에 표준 태양 시계는 항성시보다 하루에 3분 56초 늦어지며, 1년 동안 정확히 24시간의 드리프트가 발생합니다.',
    useLocationBtn: '현재 위치 사용',
    hemisphereLabel: '항성 반구',
    hemisphereNorth: '북쪽(큰곰자리)',
    hemisphereSouth: '남쪽(남십자자리)',
    longitudeFormatLabel: '경도 형식',
    longitudeFormatDecimal: '십진 도',
    longitudeFormatDMS: '도/분',
  },
  seo: [
    { type: 'title', text: '항성시란 무엇인가요?', level: 2 },
    { type: 'paragraph', html: '항성시는 천문학자들이 천체를 찾기 위해 사용하는 시간 측정 시스템입니다. 항성일은 약 23시간 56분 4.09초입니다. 이는 태양이 아닌 춘분점 또는 먼 별을 기준으로 지구가 자전축을 중심으로 완전히 한 바퀴 자전하는 데 걸리는 시간입니다.' },
    { type: 'title', text: '태양일 vs 항성일', level: 3 },
    { type: 'paragraph', html: '태양일은 태양이 로컬 자오선을 연속으로 통과하는 사이의 시간을 측정합니다. 지구는 매일 태양 주위 궤도의 약 1/365를 이동하기 때문에 태양과 다시 정렬되려면 360도보다 약간 더 회전해야 합니다. 항성일은 별에 대한 실제 360도 회전이므로 3분 56초 더 짧습니다.' },
    { type: 'title', text: '천문학자와 시계 제작자가 관심을 갖는 이유', level: 3 },
    { type: 'paragraph', html: '천문학자들에게 별은 동일한 항성시에 항상 하늘의 같은 위치에 있습니다. 별을 추적하려면 망원경 마운트가 항성일에 정확히 한 번 회전해야 합니다. 고급 시계 브랜드(파텍 필립, 바쉐론 콘스탄틴, IWC 등)는 항성 기어 트레인을 갖춘 초복잡 천문 시계를 만들어 손목에서 직접 LST를 추적할 수 있게 합니다.' },
    { type: 'title', text: '항성 vs 태양 드리프트 참조 표', level: 3 },
    {
      type: 'table', headers: ['경과 일수', '항성시 앞섬', '회전 각도 변화', '별자리 드리프트'], rows: [
        ['1일', '3분 56초', '0.986°', '약간 서쪽으로 이동'],
        ['15일', '59분 0초', '14.79°', '별자리 반 개 이동'],
        ['30일', '1시간 58분', '29.58°', '별자리 한 개 전체 이동'],
        ['90일', '5시간 54분', '88.74°', '계절 한 개 전체 이동'],
        ['180일', '11시간 48분', '177.48°', '자정에 반대쪽 별자리 관측'],
        ['365일', '24시간 0분', '360.00°', '완전한 주기, 별 정렬 초기화'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'J2000 원점에서 계산', icon: 'mdi:creation-outline', badge: '계산', html: '로컬 항성시는 UTC 시간을 율리우스 일(-4712년 이후 일수)로 변환하고, 그리니치 평균 항성시를 찾은 후 경도(시간당 15도)를 적용하여 계산됩니다. 이 도구는 고정밀 IAU J2000 선형 모델을 사용하여 실시간으로 추적합니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);

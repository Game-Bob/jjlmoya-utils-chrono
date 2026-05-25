import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'service-interval-tracker',
  title: '시계 오버홀 및 서비스 주기 관리기',
  description: '보유 중인 시계 컬렉션의 오버홀 주기를 추적하고 관리하세요. 각 시계의 점검 시기를 한눈에 파악할 수 있습니다.',
  ui: {
    title: '서비스 트래커',
    addWatch: '시계 추가',
    editWatch: '시계 편집',
    cancel: '취소',
    save: '저장',
    deleteWatch: '삭제',
    confirmDelete: '이 시계를 컬렉션에서 삭제하시겠습니까?',
    emptyTitle: '등록된 시계가 없습니다',
    emptyDesc: '시계의 정비 주기를 등록하고 오버홀 시기를 놓치지 마세요.',
    emptyAction: '첫 시계 추가하기',
    healthy: '양호',
    due: '점검 임박',
    overdue: '기간 초과',
    nameLabel: '시계 명칭',
    namePlaceholder: '예: 롤렉스 서브마리너',
    movementLabel: '무브먼트 종류',
    movementAuto: '자동 줄감기',
    movementManual: '수동 줄감기',
    movementQuartz: '쿼츠',
    movementKinetic: '키네틱',
    dateLabel: '마지막 오버홀 날짜',
    neverServiced: '신품 또는 점검 이력 없음',
    lastServiceLabel: '마지막 서비스',
    nextServiceLabel: '다음 서비스',
    serviced: '점검 완료',
    newWatch: '신품',
    years: '년',
    collectionHealth: '컬렉션 관리 상태',
  },
  seo: [
    { type: 'title', text: '시계 오버홀 주기 점검기: 컬렉션의 내구성을 유지하는 방법', level: 2 },
  ],
  faq: [
    {
      question: '오토매틱 시계는 얼마나 자주 오버홀해야 하나요?',
      answer: '대부분의 시계 제조사는 3~5년 주기의 오버홀을 권장합니다. 실제로는 5~7년 동안 문제없이 작동하기도 하지만, 기계 내부 윤활유가 마르면 부품 손상으로 이어질 수 있습니다.',
    }
  ],
  bibliography,
  howTo: [
    { name: '시계 등록', text: '시계 이름, 무브먼트 타입, 마지막 서비스 날짜를 입력하여 다음 정비일을 예약합니다.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '오토매틱 시계는 얼마나 자주 오버홀해야 하나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '대부분의 시계 제조사는 3~5년 주기의 오버홀을 권장합니다. 실제로는 5~7년 동안 문제없이 작동하기도 합니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '시계 오버홀 및 서비스 주기 관리기',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '시계 오버홀 및 서비스 주기 관리기',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '시계 등록',
          'text': '시계 이름, 무브먼트 타입, 마지막 서비스 날짜를 입력합니다.'
        }
      ]
    }
  ]
};

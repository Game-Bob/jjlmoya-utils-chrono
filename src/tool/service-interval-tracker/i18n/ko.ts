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
  {
    "type": "title",
    "text": "시계 오버홀 주기 관리 트래커",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "기계식 시계의 수명을 늘리기 위해서는 <strong>정기적인 오버홀</strong>이 필수적입니다."
  },
  {
    "type": "title",
    "text": "무브먼트 방식별 권장 오버홀 주기",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "오토매틱 (3-5년)",
        "definition": "로터와 자동 감기 부품이 지속적으로 작동하여 오일 소모가 빠릅니다."
      },
      {
        "term": "수동 태엽 (4-5년)",
        "definition": "부품 수는 적지만 매일 태엽을 감을 때 휠 마모가 발생합니다."
      },
      {
        "term": "쿼츠 (5-10년)",
        "definition": "기계적 마모는 적지만 배터리 및 방수 가스켓 점검이 필요합니다."
      },
      {
        "term": "키네틱 / 솔라 (5-8년)",
        "definition": "충전지의 수명에 따라 교체가 필요합니다."
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "점검이 필요한 신호",
    "icon": "mdi:information",
    "badge": "주의",
    "html": "하루 오차가 15~20초 이상 나거나 유리 안쪽에 습기가 찬다면 바로 점검을 받으세요."
  },
  {
    "type": "title",
    "text": "컬렉션 관리",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "소장 중인 시계를 등록하여 다음 점검일을 자동으로 계산하고 관리하세요."
  }
],
  faq: [
  {
    "question": "오토매틱 시계의 오버홀 주기",
    "answer": "대부분의 제조사는 3~5년 주기의 오버홀을 권장합니다. 실사용 시 5~7년 동안 문제없이 작동하기도 합니다."
  },
  {
    "question": "쿼츠 시계도 정기 점검이 필요한가요?",
    "answer": "네, 누액 방지를 위해 2~3년마다 건전지를 교체하고 5~10년마다 방수 방수 가스켓 교체가 필요합니다."
  },
  {
    "question": "오버홀을 받지 않으면 어떻게 되나요?",
    "answer": "윤활유가 말라 부품 마모가 심해지며 수리 비용이 크게 증가할 수 있습니다."
  },
  {
    "question": "수동 시계 태엽을 너무 많이 감으면 안 되나요?",
    "answer": "수동 시계는 태엽이 다 감기면 멈추는 느낌이 듭니다. 저항이 느껴지면 멈추세요."
  },
  {
    "question": "착용 빈도에 따라 오버홀 주기가 달라지나요?",
    "answer": "네, 매일 착용하는 시계는 3년, 가끔 착용하는 시계는 5년 주기를 권장합니다."
  }
],
  bibliography,
  howTo: [
  {
    "name": "시계 추가",
    "text": "시계 이름, 무브먼트 종류, 마지막 점검일을 입력합니다."
  },
  {
    "name": "대시보드 확인",
    "text": "각 시계의 권장 점검 주기가 진행 바와 색상으로 표시됩니다."
  },
  {
    "name": "점검 후 업데이트",
    "text": "오버홀 완료 후 날짜를 새로 업데이트합니다."
  }
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

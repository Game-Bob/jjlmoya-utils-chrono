import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeter-calculator',
  title: '텔레미터 계산기: 시계 텔레미터(거리계) 사용법',
  description: '시계 텔레미터 베젤 사용법을 배워보세요. 기온을 반영하여 번개가 친 곳까지의 실제 거리를 계산합니다.',
  ui: {
    title: '텔레미터 계산기',
    triggerFlash: '번개 감지',
    triggerSound: '천둥 감지',
    stop: '정지',
    reset: '리셋',
    settings: '설정',
    unitSystem: '단위계',
    metric: '미터법 (km)',
    imperial: '야드파운드법 (마일)',
    temperature: '대기 온도',
    speedOfSound: '음속',
    distanceResult: '측정 거리',
    elapsedTime: '경과 시간',
    historyTitle: '측정 기록',
    noHistory: '아직 기록이 없습니다. 위에서 계산을 시작해 보세요!',
    sec: '초',
    km: 'km',
    m: 'm',
    mi: '마일',
    ft: '피트',
    step1: '번개나 폭발의 불빛을 보는 즉시 2시 방향 푸셔나 "번개 감지" 버튼을 누릅니다.',
    step2: '천둥 소리나 폭발음이 들리는 즉시 다시 한번 누르거나 "천둥 감지" 버튼을 누릅니다.',
    step3: '크로노그래프 초침이 멈춘 텔레미터 베젤의 숫자를 읽어 거리를 확인합니다.',
    tipTitle: '팁',
    tipContent: '따뜻한 공기는 차가운 공기보다 소리를 더 빠르게 전달합니다. 주변 기온을 설정하면 대기 상태에 맞춘 실제 거리를 정확히 얻을 수 있습니다.',
  },
  seo: [
  {
    "type": "title",
    "text": "시계 텔레미터 베젤이란?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "텔레미터는 시각(빛)과 청각(소리)의 속도 차이를 이용해 거리까지의 추정치를 계산해주는 눈금입니다."
  },
  {
    "type": "title",
    "text": "텔레미터 사용 방법",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "1단계: 크로노그래프 시작",
        "definition": "번갯불이나 번쩍이는 빛을 보는 순간 스톱워치를 작동합니다."
      },
      {
        "term": "2단계: 크로노그래프 멈춤",
        "definition": "천둥소리나 폭발음이 들리는 순간 스톱워치를 멈춥니다."
      },
      {
        "term": "3단계: 거리 읽기",
        "definition": "초침이 가리키는 베젤의 눈금이 거리(km 또는 마일)입니다."
      }
    ]
  },
  {
    "type": "title",
    "text": "거리 계산의 물리적 원리",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "빛은 초당 약 30만km로 순간 도달하지만 소리는 섭씨 20도 공기 중에서 초당 약 343m를 이동합니다."
  },
  {
    "type": "title",
    "text": "텔레미터 vs 타키미터",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "<strong>타키미터</strong>는 속도를, <strong>텔레미터</strong>는 거리를 측정합니다."
  },
  {
    "type": "title",
    "text": "시간 대비 거리 참조표",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "경과 시간",
      "거리 (km)",
      "거리 (마일)",
      "음속"
    ],
    "rows": [
      [
        "1.0 초",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 초",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 초",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 초",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 초",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 초",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 초",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "기온이 음속에 미치는 영향",
    "icon": "mdi:information",
    "badge": "정확도",
    "html": "따뜻한 공기일수록 소리가 더 빠르게 전달됩니다."
  }
],
  faq: [
  {
    "question": "텔레미터 시계의 용도는 무엇인가요?",
    "answer": "번개와 둔탁한 뇌성처럼 눈에 보이고 소리가 나는 사건과의 거리를 측정하는 데 사용됩니다."
  },
  {
    "question": "텔레미터로 번개까지의 거리를 계산하는 방법은?",
    "answer": "번갯불이 보일 때 크로노그래프를 시작하고 천둥소리가 들릴 때 멈춘 후 베젤의 숫자를 읽습니다."
  },
  {
    "question": "타키미터와 텔레미터의 차이점은?",
    "answer": "타키미터는 정해진 거리에서의 속도를 측정하고, 텔레미터는 음속을 이용해 거리를 측정합니다."
  },
  {
    "question": "텔레미터 측정의 정확도는?",
    "answer": "섭씨 20도 기준 음속(약 343m/s)을 기준으로 제작되어 기온 변화에 따라 약간의 오차가 생길 수 있습니다."
  },
  {
    "question": "물속에서도 텔레미터를 사용할 수 있나요?",
    "answer": "아니오. 수중에서는 음속이 공기보다 4배 이상 빠르기 때문에 공기용 텔레미터는 맞지 않습니다."
  }
],
  bibliography,
  howTo: [
  {
    "name": "단위 및 기온 설정",
    "text": "사용할 단위계 및 현재 위치의 기온을 설정합니다."
  },
  {
    "name": "섬광을 볼 때 시작",
    "text": "번갯불을 보는 순간 번개 버튼을 누릅니다."
  },
  {
    "name": "소리를 들을 때 멈춤",
    "text": "천둥소리가 들리는 순간 소리 버튼을 누릅니다."
  },
  {
    "name": "거리 확인",
    "text": "결과 화면 또는 베젤의 초침 위치에서 거리를 읽습니다."
  }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

import type { CategoryLocaleContent } from "../../types";

const slug = "horology";
const title = "시계학 도구 & 참고 가이드";
const description =
  "시계 애호가를 위한 프로페셔널급 시계학 유틸리티-도 추적, 무브먼트 자기 제거, 착용 시간 계산, 인기 칼리버의 용두 위치 참고 자료를 제공합니다.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "시간을 이해하는 작업대", level: 2 },
    {
      type: "paragraph",
      html: `시계학은 다이얼이 단순한 이미지가 아니라 읽을 수 있는 시스템이 되는 순간 시작됩니다. 이 컬렉션은 오차를 관찰하고, 무브먼트의 리듬을 이해하고, 용두의 동작을 읽고, 더 많은 맥락 속에서 판단할 수 있는 도구를 모았습니다. 시계 제작자의 작업대를 대신하지는 않습니다. 대신 일상의 구체적인 질문을 명확한 결과와 호기심을 위한 여백이 있는 작은 탐구로 바꿉니다.`,
    },
    { type: "title", text: "눈으로 확인하는 정밀도", level: 2 },
    {
      type: "paragraph",
      html: `시계가 얼마나 빨라지거나 느려지는지 확인하고, 진동수를 VPH와 Hz 사이에서 변환하며, 착용 조건이 결과를 어떻게 바꾸는지 살펴보세요. 정밀도 도구는 비교하고, 반복하고, 배우기 위해 설계되었습니다. 모든 숫자는 단위를 유지하고, 모든 변환은 의미를 유지하며, 모든 결과는 기계식 시계에 대한 감각을 키워 줍니다. 정확성은 추상적인 개념이 아니라 관찰할 수 있는 경험이 됩니다.`,
    },
    { type: "title", text: "기계적 움직임을 위한 참고 자료", level: 2 },
    {
      type: "paragraph",
      html: `용두, 태엽, 글라스, 야광, 기어 트레인은 같은 물건에 대해 서로 다른 이야기를 들려줍니다. 용두 위치를 확인하고, 기어 트레인을 따라가고, 소재를 비교하고, 문페이즈·퍼페추얼 캘린더·투르비용 같은 컴플리케이션을 살펴보세요. 모든 기능은 브라우저에서 실행되며 사용 데이터는 기기에 남습니다. 시계를 수집하고, 수리하고, 조정하고, 더 주의 깊게 바라보기 위한 실용적인 라이브러리입니다.`,
    },
    {
      type: "stats",
      items: [
        { label: "계기", value: "25", icon: "mdi:tools" },
        { label: "칼리버", value: "8+", icon: "mdi:engine" },
        { label: "언어", value: "15", icon: "mdi:translate" },
        {
          label: "데이터 개인정보 보호",
          value: "Local",
          icon: "mdi:shield-check",
        },
      ],
    },
  ],
};

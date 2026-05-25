import type { ToolLocaleContent } from "../../../types";
import type { StrapLengthCalculatorUI } from "../entry";
import { bibliography } from "../bibliography";

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: "strap-length-calculator",
  title: "시계 스트랩 길이 계산기",
  description: "손목에 이상적인 스트랩 크기를 계산하세요. 손목 크기와 시계 치수에 따라 두 조각 스트랩과 NATO 스트랩에 대한 권장 사항을 제공합니다.",
  ui: {
    title: "스트랩 길이 계산기",
    wristLabel: "손목 둘레",
    wristPlaceholder: "예: 170",
    lugLabel: "러그 간 거리",
    lugPlaceholder: "예: 45",
    fitLabel: "선호하는 착용감",
    fitTight: "조임",
    fitRegular: "보통",
    fitLoose: "느슨함",
    unitLabel: "단위",
    standardLabel: "표준 사이즈",
    bespokeLabel: "맞춤 사이즈",
    natoLabel: "NATO 스트랩 길이",
    longSide: "긴 쪽",
    shortSide: "짧은 쪽",
    totalLength: "총 길이",
    millimeters: "mm",
    inches: "in",
    sizeXS: "Extra Small (XS) - 손목 < 6.0 in",
    sizeS: "Small (S) - 손목 6.0~6.5 in",
    sizeM: "Medium (M) - 손목 6.5~7.0 in",
    sizeL: "Large (L) - 손목 7.0~7.5 in",
    sizeXL: "Extra Large (XL) - 손목 7.5~8.0 in",
    sizeXXL: "Double Extra Large (XXL) - 손목 > 8.0 in",
  },
  seo: [
    { type: "title", text: "시계 스트랩 사이즈 가이드 및 길이 계산기", level: 2 },
    { type: "paragraph", html: "완벽한 시계 스트랩을 선택하는 것은 착용감과 미적 균형 모두에 필수적입니다. 너무 긴 스트랩은 보기 흉한 여분의 끝을 남기고, 너무 짧은 스트랩은 안전하게 채워지지 않을 수 있습니다. 이 가이드는 손목 크기, 시계 디자인, 원하는 착용감에 따라 표준 사이즈, 맞춤 치수 및 NATO 스트랩 길이를 결정하는 방법을 설명합니다." },
    { type: "stats", items: [{ value: "120/80mm", label: "표준 사이즈" }, { value: "160-190mm", label: "대부분의 손목에 맞음" }, { value: "7개 구멍", label: "일반적인 조정 옵션" }], columns: 3 },
    { type: "title", text: "두 조각 스트랩 이해하기: 긴 쪽 vs. 짧은 쪽", level: 3 },
    { type: "paragraph", html: "두 조각 시계 스트랩은 <strong>120/80 mm</strong>와 같은 두 숫자로 정의됩니다. 첫 번째 숫자(예: 120mm)는 <strong>긴 쪽</strong>(끝 부분)이며 6시 위치에 부착됩니다. 두 번째 숫자(예: 80mm)는 <strong>짧은 쪽</strong>(버클 부분)이며 12시 위치에 부착됩니다. 버클 자체는 이러한 측정에 포함되지 않습니다." },
    { type: "title", text: "손목 둘레별 표준 사이즈 표", level: 3 },
    { type: "table", headers: ["손목 크기", "가죽/고무 스트랩 길이", "NATO 스트랩 길이", "권장 착용감"], rows: [["150-164mm (5.9\"-6.5\")", "110/70mm", "260mm", "조임/작은 착용감"], ["165-178mm (6.5\"-7.0\")", "120/80mm", "270mm", "표준 중간 착용감"], ["179-190mm (7.0\"-7.5\")", "130/80mm", "280mm", "표준 큰 착용감"], ["191-203mm (7.5\"-8.0\")", "135/85mm", "290mm", "매우 큰 착용감"], ["204mm 이상 (8.0\" 이상)", "140/85mm", "300mm", "두 배 매우 큰 착용감"]] },
    { type: "title", text: "맞춤 사이즈 설명", level: 3 },
    { type: "paragraph", html: "맞춤 제작 스트랩을 주문할 때 완벽한 착용감을 목표로 할 수 있습니다. 표준 구멍 위치에 만족하는 대신, 맞춤 스트랩은 버클이 손목 아래쪽 정중앙에 위치하도록 각 면의 정확한 길이를 계산합니다. 공식은 총 손목 둘레를 사용하고 시계의 러그 간 거리를 뺀 후 남은 길이를 손목 형상에 따라 나눕니다." },
    { type: "comparative", items: [{ title: "맞춤 스트랩", description: "손목과 케이스 치수에 맞게 특별히 제작됩니다. 버클이 완벽하게 중앙에 위치하고 여분의 스트랩 끝이 없습니다.", points: ["완벽한 버클 중앙 정렬", "맞춤 구멍 위치", "여분의 스트랩 끝 없음", "프리미엄 외관과 느낌"] }, { title: "표준 스트랩", description: "여러 조정 구멍을 사용하여 다양한 손목에 맞도록 대량 생산된 사이즈. 빠르고 경제적입니다.", points: ["낮은 비용", "즉시 사용 가능", "여러 시계에 맞음", "표준화된 치수"] }], columns: 2 },
    { type: "title", text: "주요 시계 스트랩 용어", level: 3 },
    { type: "glossary", items: [{ term: "러그 간 거리 (Lug-to-Lug)", definition: "위쪽 러그 끝에서 아래쪽 러그 끝까지의 총 수직 거리입니다. 케이스 직경이 아니라 손목에 놓인 단단한 시계 본체의 전체 길이입니다." }, { term: "짧은 쪽 (버클)", definition: "케이스의 12시 위치에 부착되는 스트랩 부분입니다. 버클을 포함하지만 길이 측정에서는 제외됩니다." }, { term: "긴 쪽 (끝)", definition: "케이스의 6시 위치에 부착되는 스트랩 부분입니다. 조임을 조절하기 위한 조정 구멍이 있습니다." }, { term: "NATO 스트랩", definition: "스프링 바를 통해 시계 케이스 아래로 감싸는 일체형 나일론 스트랩입니다. 조정이 쉽고 내구성이 뛰어납니다." }] },
    { type: "tip", title: "손목 올바르게 측정하기", html: "정확한 측정을 위해 유연한 줄자를 사용하여 평소 시계를 착용하는 부위에 (너무 조이지 않게) 감습니다. 줄자가 없으면 끈이나 종이 조각을 사용하여 겹치는 부분을 표시하고 자로 평평한 길이를 측정합니다." },
    { type: "title", text: "러그 간 거리가 스트랩 사이즈에 중요한 이유", level: 3 },
    { type: "paragraph", html: "많은 수집가들은 시계 케이스가 스트랩의 단단한 연장 부분으로 작용한다는 사실을 잊습니다. 러그 간 거리가 50mm인 큰 시계는 40mm 드레스 워치보다 손목에서 더 많은 공간을 차지합니다. 결과적으로 큰 시계는 동일한 총 루프 크기를 달성하기 위해 더 짧은 스트랩이 필요합니다. 러그 간 거리를 고려하지 않는 것은 스트랩 착용감이 나쁜 가장 큰 이유입니다." },
    { type: "diagnostic", variant: "warning", title: "버클 이동 및 케이스 돌출 방지", html: "스트랩의 짧은 쪽이 손목에 비해 너무 길거나 너무 짧으면 버클이 옆으로 미끄러집니다. 이로 인해 시계 케이스가 중앙에서 벗어나 불편함을 유발하고 케이스나 잠금 장치에 긁힘이 생길 위험이 높아집니다. 항상 버클이 손목의 평평한 아래쪽 중앙에 위치하도록 하세요." },
    { type: "proscons", title: "NATO 스트랩 vs. 두 조각 스트랩", items: [{ pro: "NATO 스트랩은 조정이 매우 용이하며 스프링 바 파손 시 시계 분실을 방지합니다.", con: "NATO 스트랩은 시계 케이스 아래에 두께를 추가합니다." }, { pro: "두 조각 스트랩은 케이스를 피부에 밀착시켜 더 얇은 프로필을 제공합니다.", con: "두 조각 스트랩은 정확한 사이즈 측정이 필요하며 조정 범위가 적습니다." }] },
  ],
  faq: [
    { question: "시계 스트랩 길이는 어떻게 측정하나요?", answer: "스트랩 길이는 일반적으로 120/80mm와 같은 두 숫자로 표시됩니다. 첫 번째 숫자는 긴 쪽(끝)의 길이이고, 두 번째 숫자는 짧은 쪽(버클)의 길이입니다." },
    { question: "버클은 손목의 어디에 위치해야 하나요?", answer: "이상적으로 버클은 손목 아래쪽 중앙에 위치해야 합니다. 버클이 이동하면 시계 케이스가 중앙에서 벗어납니다. 긴 쪽과 짧은 쪽의 비율을 조정하면 완벽한 중앙 정렬을 달성할 수 있습니다." },
    { question: "러그 간 거리가 필요한 스트랩 길이에 어떤 영향을 미치나요?", answer: "시계 케이스는 전체 스트랩 루프의 단단한 부분입니다. 러그 간 거리가 긴(예: 50mm) 큰 시계는 같은 손목의 작은 시계(예: 40mm)에 비해 필요한 스트랩 길이가 줄어듭니다." },
    { question: "스트랩의 긴 쪽은 어느 쪽인가요?", answer: "전통적으로 스트랩의 긴 쪽(조정 구멍이 있는 쪽)은 케이스의 6시 위치에 부착되며 사용자를 향합니다. 짧은 쪽(버클이 있는 쪽)은 12시 위치에 부착됩니다." },
    { question: "시계 스트랩은 얼마나 조여야 하나요?", answer: "스트랩은 꼭 맞지만 편안해야 합니다. 무리하지 않고 스트랩 아래에 손가락 하나를 넣을 수 있어야 합니다. 너무 조이면 혈액 순환을 방해할 수 있고, 너무 느슨하면 케이스가 회전할 수 있습니다." },
    { question: "어떤 시계에도 NATO 스트랩을 사용할 수 있나요?", answer: "네, 시계에 표준 스프링 바가 있고 케이스와 바 사이에 충분한 공간이 있다면 가능합니다. NATO 스트랩은 케이스 아래로 감싸므로 공간이 매우 좁은 경우 곡선형 스프링 바나 더 얇은 스트랩 소재가 필요할 수 있습니다." },
  ],
  bibliography,
  howTo: [
    { name: "손목 측정하기", text: "유연한 줄자를 사용하여 손목 둘레를 밀리미터 또는 인치로 측정합니다." },
    { name: "러그 간 거리 측정하기", text: "위쪽 러그 끝에서 아래쪽 러그 끝까지 시계 케이스의 높이를 측정합니다." },
    { name: "선호하는 착용감 선택하기", text: "조임, 보통 또는 느슨함 중에서 선택합니다." },
    { name: "권장 사항 계산하기", text: "표준 사이즈, 긴 쪽/짧은 쪽 맞춤 사이즈, 이상적인 NATO 길이를 확인합니다." },
  ],
  schemas: [
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "시계 스트랩 길이는 어떻게 측정하나요?", "acceptedAnswer": { "@type": "Answer", "text": "스트랩 길이는 일반적으로 120/80mm와 같은 두 숫자로 표시됩니다. 첫 번째 숫자는 긴 쪽(끝)의 길이이고, 두 번째 숫자는 짧은 쪽(버클)의 길이입니다." } },
      { "@type": "Question", "name": "버클은 손목의 어디에 위치해야 하나요?", "acceptedAnswer": { "@type": "Answer", "text": "이상적으로 버클은 손목 아래쪽 중앙에 위치해야 합니다. 버클이 이동하면 시계 케이스가 중앙에서 벗어납니다. 긴 쪽과 짧은 쪽의 비율을 조정하면 완벽한 중앙 정렬을 달성할 수 있습니다." } },
      { "@type": "Question", "name": "러그 간 거리가 필요한 스트랩 길이에 어떤 영향을 미치나요?", "acceptedAnswer": { "@type": "Answer", "text": "시계 케이스는 전체 스트랩 루프의 단단한 부분입니다. 러그 간 거리가 긴(예: 50mm) 큰 시계는 같은 손목의 작은 시계(예: 40mm)에 비해 필요한 스트랩 길이가 줄어듭니다." } },
      { "@type": "Question", "name": "스트랩의 긴 쪽은 어느 쪽인가요?", "acceptedAnswer": { "@type": "Answer", "text": "전통적으로 스트랩의 긴 쪽(조정 구멍이 있는 쪽)은 케이스의 6시 위치에 부착되며 사용자를 향합니다. 짧은 쪽(버클이 있는 쪽)은 12시 위치에 부착됩니다." } },
      { "@type": "Question", "name": "시계 스트랩은 얼마나 조여야 하나요?", "acceptedAnswer": { "@type": "Answer", "text": "스트랩은 꼭 맞지만 편안해야 합니다. 무리하지 않고 스트랩 아래에 손가락 하나를 넣을 수 있어야 합니다. 너무 조이면 혈액 순환을 방해할 수 있고, 너무 느슨하면 케이스가 회전할 수 있습니다." } },
      { "@type": "Question", "name": "어떤 시계에도 NATO 스트랩을 사용할 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "네, 시계에 표준 스프링 바가 있고 케이스와 바 사이에 충분한 공간이 있다면 가능합니다. NATO 스트랩은 케이스 아래로 감싸므로 공간이 매우 좁은 경우 곡선형 스프링 바나 더 얇은 스트랩 소재가 필요할 수 있습니다." } }
    ] } as any,
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "시계 스트랩 길이 계산기", "operatingSystem": "All", "applicationCategory": "LifestyleApplication", "browserRequirements": "Requires HTML5. Requires JavaScript." } as any,
    { "@context": "https://schema.org", "@type": "HowTo", "name": "시계 스트랩 길이 계산기", "step": [
      { "@type": "HowToStep", "name": "손목 측정하기", "text": "유연한 줄자를 사용하여 손목 둘레를 밀리미터 또는 인치로 측정합니다." },
      { "@type": "HowToStep", "name": "러그 간 거리 측정하기", "text": "위쪽 러그 끝에서 아래쪽 러그 끝까지 시계 케이스의 높이를 측정합니다." },
      { "@type": "HowToStep", "name": "선호하는 착용감 선택하기", "text": "조임, 보통 또는 느슨함 중에서 선택합니다." },
      { "@type": "HowToStep", "name": "권장 사항 계산하기", "text": "표준 사이즈, 긴 쪽/짧은 쪽 맞춤 사이즈, 이상적인 NATO 길이를 확인합니다." }
    ] } as any
  ]
};

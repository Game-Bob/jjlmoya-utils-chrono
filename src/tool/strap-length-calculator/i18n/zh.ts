import type { ToolLocaleContent } from "../../../types";
import type { StrapLengthCalculatorUI } from "../entry";
import { bibliography } from "../bibliography";

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: "strap-length-calculator",
  title: "手表表带长度计算器",
  description: "计算适合您手腕的理想表带尺寸。根据手腕尺寸和手表尺寸获取两件式表带和NATO表带的推荐。",
  ui: {
    title: "表带长度计算器",
    wristLabel: "手腕周长",
    wristPlaceholder: "例如 170",
    lugLabel: "表耳间距",
    lugPlaceholder: "例如 45",
    fitLabel: "偏好贴合度",
    fitTight: "紧",
    fitRegular: "标准",
    fitLoose: "松",
    unitLabel: "单位",
    standardLabel: "标准尺寸",
    bespokeLabel: "定制尺寸",
    natoLabel: "NATO表带长度",
    longSide: "长侧",
    shortSide: "短侧",
    totalLength: "总长度",
    millimeters: "毫米",
    inches: "英寸",
    sizeXS: "Extra Small (XS) - 手腕 < 6.0 in",
    sizeS: "Small (S) - 手腕 6.0~6.5 in",
    sizeM: "Medium (M) - 手腕 6.5~7.0 in",
    sizeL: "Large (L) - 手腕 7.0~7.5 in",
    sizeXL: "Extra Large (XL) - 手腕 7.5~8.0 in",
    sizeXXL: "Double Extra Large (XXL) - 手腕 > 8.0 in",
  },
  seo: [
    { type: "title", text: "手表表带尺寸指南和长度计算器", level: 2 },
    { type: "paragraph", html: "选择完美的手表表带对于佩戴舒适度和美学平衡都至关重要。太长的表带会留下难看的多余部分，而太短的 表带可能无法安全扣紧。本指南帮助您根据手腕尺寸、手表设计和所需的贴合度来确定标准尺寸、定制尺寸和NATO表带长度。" },
    { type: "stats", items: [{ value: "120/80mm", label: "标准尺寸" }, { value: "160-190mm", label: "适合大多数手腕" }, { value: "7个孔", label: "典型调节选项" }], columns: 3 },
    { type: "title", text: "了解两件式表带：长侧 vs. 短侧", level: 3 },
    { type: "paragraph", html: "两件式手表表带由两个数字定义，例如<strong>120/80 毫米</strong>。第一个数字（例如120毫米）是<strong>长侧</strong>（尖端侧），固定在6点钟位置。第二个数字（例如80毫米）是<strong>短侧</strong>（表扣侧），固定在12点钟位置。表扣本身不包括在这些测量中。" },
    { type: "title", text: "按手腕周长划分的标准尺寸表", level: 3 },
    { type: "table", headers: ["手腕尺寸", "皮革/橡胶表带长度", "NATO表带长度", "推荐贴合度"], rows: [["150-164毫米（5.9-6.5英寸）", "110/70毫米", "260毫米", "紧/小贴合"], ["165-178毫米（6.5-7.0英寸）", "120/80毫米", "270毫米", "标准中等贴合"], ["179-190毫米（7.0-7.5英寸）", "130/80毫米", "280毫米", "标准大贴合"], ["191-203毫米（7.5-8.0英寸）", "135/85毫米", "290毫米", "超大贴合"], ["204毫米以上（8.0英寸以上）", "140/85毫米", "300毫米", "双倍超大贴合"]] },
    { type: "title", text: "定制尺寸说明", level: 3 },
    { type: "paragraph", html: "订购定制表带时，您可以追求完美的贴合度。定制表带不是满足于标准孔位，而是计算每侧的精确长度，使表扣恰好位于手腕下侧的中心。该公式使用手腕总周长，减去手表的表耳间距，然后根据手腕几何形状分割剩余长度。" },
    { type: "comparative", items: [{ title: "定制表带", description: "根据您的手腕和表壳尺寸量身定制。保证表扣完美居中，消除多余表带头。", points: ["表扣完美居中", "定制孔位", "无多余表带头", "优质外观和手感"] }, { title: "标准表带", description: "大规模生产的尺寸，通过多个调节孔适合广泛的手腕范围。快速且经济。", points: ["成本更低", "即时可用", "适用于多款手表", "标准化尺寸"] }], columns: 2 },
    { type: "title", text: "关键手表表带术语", level: 3 },
    { type: "glossary", items: [{ term: "表耳间距（Lug-to-Lug）", definition: "从上表耳尖端到下表耳尖端的垂直总距离。这不是表壳直径，而是放在手腕上的刚性手表头部的总长度。" }, { term: "短侧（表扣）", definition: "固定在表壳12点钟位置的表带部分。包含表扣，但不计入长度测量。" }, { term: "长侧（尖端）", definition: "固定在表壳6点钟位置的表带部分。有调节孔用于调整松紧。" }, { term: "NATO表带", definition: "一种一体式尼龙表带，通过弹簧杆缠绕在手表表壳下方。高度可调且耐用。" }] },
    { type: "tip", title: "正确测量手腕", html: "为了准确测量，将软尺（不要太紧）绕在您通常佩戴手表的部位。如果没有软尺，可以使用绳子或纸条，标记重叠处，然后用尺子测量平放的长度。" },
    { type: "title", text: "为什么表耳间距对表带尺寸至关重要", level: 3 },
    { type: "paragraph", html: "许多收藏者忘记手表表壳是表带的刚性延伸部分。表耳间距50毫米的大手表比40毫米的正装表在手腕上占据更多空间。因此，较大的手表需要较短的表带才能达到相同的总环尺寸。不考虑表耳间距是表带不合身的首要原因。" },
    { type: "diagnostic", variant: "warning", title: "避免表扣偏移和表壳悬空", html: "如果表带的短侧对手腕来说太长或太短，表扣会滑向一侧。这会导致手表表壳偏离中心，引起不适并增加表壳或扣具刮伤的风险。始终确保表扣位于手腕平坦下侧的中心。" },
    { type: "proscons", title: "NATO表带 vs. 两件式表带", items: [{ pro: "NATO表带高度可调，可在弹簧杆断裂时防止手表丢失。", con: "NATO表带会增加手表表壳下方的厚度。" }, { pro: "两件式表带使表壳紧贴皮肤，轮廓更薄。", con: "两件式表带需要精确的尺寸测量，调节余地较小。" }] },
  ],
  faq: [
    { question: "如何测量手表表带长度？", answer: "表带长度通常用两个数字表示，如120/80毫米。第一个数字是长侧（尖端）的长度，第二个是短侧（表扣）的长度。" },
    { question: "表扣应该位于手腕的什么位置？", answer: "理想情况下，表扣应位于手腕下侧的中心。如果偏移，手表表壳会偏离中心。调整长侧和短侧的比例有助于实现完美居中。" },
    { question: "表耳间距如何影响我需要的表带长度？", answer: "手表表壳是整个表带环的刚性部分。表耳间距较长（例如50毫米）的大手表比同一手腕上较小的手表（例如40毫米）需要的表带长度更短。" },
    { question: "表带的长端在哪一侧？", answer: "传统上，表带的长侧（带调节孔）固定在表壳的6点钟位置，朝向您。短侧（带表扣）固定在12点钟位置。" },
    { question: "手表表带应该多紧？", answer: "表带应贴合但舒适。您应该能够在不费力的情况下将一根手指伸入表带下方。太紧的表带会限制血液循环，而太松的表带会导致表壳旋转。" },
    { question: "我可以在任何手表上使用NATO表带吗？", answer: "可以，只要手表有标准弹簧杆，并且表壳与杆之间有足够的间隙。NATO表带缠绕在表壳下方，因此间隙非常窄的情况可能需要弯曲弹簧杆或更薄的表带材料。" },
  ],
  bibliography,
  howTo: [
    { name: "测量手腕", text: "使用软尺以毫米或英寸为单位测量手腕周长。" },
    { name: "测量表耳间距", text: "从上表耳尖端到下表耳尖端测量手表表壳的高度。" },
    { name: "选择偏好的贴合度", text: "选择紧、标准或松的贴合度。" },
    { name: "计算推荐", text: "查看标准尺寸、长侧/短侧的定制尺寸以及理想的NATO长度。" },
  ],
  schemas: [
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "如何测量手表表带长度？", "acceptedAnswer": { "@type": "Answer", "text": "表带长度通常用两个数字表示，如120/80毫米。第一个数字是长侧（尖端）的长度，第二个是短侧（表扣）的长度。" } },
      { "@type": "Question", "name": "表扣应该位于手腕的什么位置？", "acceptedAnswer": { "@type": "Answer", "text": "理想情况下，表扣应位于手腕下侧的中心。如果偏移，手表表壳会偏离中心。调整长侧和短侧的比例有助于实现完美居中。" } },
      { "@type": "Question", "name": "表耳间距如何影响我需要的表带长度？", "acceptedAnswer": { "@type": "Answer", "text": "手表表壳是整个表带环的刚性部分。表耳间距较长（例如50毫米）的大手表比同一手腕上较小的手表（例如40毫米）需要的表带长度更短。" } },
      { "@type": "Question", "name": "表带的长端在哪一侧？", "acceptedAnswer": { "@type": "Answer", "text": "传统上，表带的长侧（带调节孔）固定在表壳的6点钟位置，朝向您。短侧（带表扣）固定在12点钟位置。" } },
      { "@type": "Question", "name": "手表表带应该多紧？", "acceptedAnswer": { "@type": "Answer", "text": "表带应贴合但舒适。您应该能够在不费力的情况下将一根手指伸入表带下方。太紧的表带会限制血液循环，而太松的表带会导致表壳旋转。" } },
      { "@type": "Question", "name": "我可以在任何手表上使用NATO表带吗？", "acceptedAnswer": { "@type": "Answer", "text": "可以，只要手表有标准弹簧杆，并且表壳与杆之间有足够的间隙。NATO表带缠绕在表壳下方，因此间隙非常窄的情况可能需要弯曲弹簧杆或更薄的表带材料。" } }
    ] } as any,
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "手表表带长度计算器", "operatingSystem": "All", "applicationCategory": "LifestyleApplication", "browserRequirements": "Requires HTML5. Requires JavaScript." } as any,
    { "@context": "https://schema.org", "@type": "HowTo", "name": "手表表带长度计算器", "step": [
      { "@type": "HowToStep", "name": "测量手腕", "text": "使用软尺以毫米或英寸为单位测量手腕周长。" },
      { "@type": "HowToStep", "name": "测量表耳间距", "text": "从上表耳尖端到下表耳尖端测量手表表壳的高度。" },
      { "@type": "HowToStep", "name": "选择偏好的贴合度", "text": "选择紧、标准或松的贴合度。" },
      { "@type": "HowToStep", "name": "计算推荐", "text": "查看标准尺寸、长侧/短侧的定制尺寸以及理想的NATO长度。" }
    ] } as any
  ]
};

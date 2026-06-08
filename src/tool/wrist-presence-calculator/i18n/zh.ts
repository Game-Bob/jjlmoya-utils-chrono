import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'wrist-presence-calculator',
  title: '手表腕上存在感与尺寸计算器',
  description: '计算表壳与手腕比例、平腕宽度覆盖率，根据美学指南确定最适合您手腕的理想手表尺寸。',
  ui: {
    title: '手腕尺寸设置',
    wristCircumferenceLabel: '手腕周长',
    caseDiameterLabel: '表壳直径',
    lugToLugLabel: '表耳间距',
    wristWidthLabel: '平腕宽度',
    autoEstimateWidthLabel: '自动估算平腕宽度（30%）',
    unitCm: '厘米',
    unitInches: '英寸',
    unitMm: '毫米',
    fitAnalysisTitle: '佩戴贴合度评估',
    caseWristRatioLabel: '表壳与手腕比例',
    wristCoverageLabel: '手腕覆盖率',
    verdictLabel: '结论',
    verdictOversized: '过大',
    verdictBold: '大胆 / 现代',
    verdictGolden: '黄金 / 经典',
    verdictVintage: '复古 / 偏小',
    coverageSafe: '安全贴合',
    coverageBold: '大胆贴合',
    coverageOverhang: '表耳悬空警告',
    sweetSpotTitle: '佩戴风格',
    sweetSpotDesc: '最佳比例区间代表了最平衡的视觉效果。',
    minClassicLabel: '复古 / 经典',
    sweetSpotLabel: '美学最佳区间',
    maxBoldLabel: '现代 / 大胆',
    maxLugToLugLabel: '最大推荐表耳间距',
    idealSizesTitle: '理想尺寸指南',
    visualizerTitle: '实时佩戴模拟',
    wristWidthHelp: '根据手腕形状估算。',
    estimatedLabel: '估算值',
    customLabel: '手腕',
  },
  seo: [
    { type: 'title', text: '如何选择完美的手表尺寸：比例贴合指南', level: 2 },
    { type: 'paragraph', html: '选择合适的手表尺寸是数学、几何与个人风格的结合。在钟表学中，时计在手臂上的呈现方式被称为<strong>腕上存在感</strong>。一块手表应当看起来平衡-既不会因难看的悬空而支配手腕，也不会像一个小点般消失。要实现这种平衡，手表藏家会分析三个主要指标：表壳直径、表耳间距和手腕形状。' },
    { type: 'title', text: '理解表壳与手腕的比例', level: 3 },
    { type: 'paragraph', html: '衡量手表比例的传统方法是表壳与手腕之比。将手腕周长转换为毫米后除以表壳直径，即可得到这个比例。比例在<strong>4.5 到 5.0</strong>之间是经典的最佳区间。比例从<strong>4.0 到 4.5</strong>营造出大胆、运动的现代感。比例高于5.0呈现复古正装表的美感，而低于4.0则被认为过大。' },
    { type: 'title', text: '为什么表耳间距和平腕宽度决定了真正的贴合度', level: 3 },
    { type: 'paragraph', html: '虽然表壳直径备受关注，但<strong>表耳间距</strong>（从上方表耳尖端到下方表耳尖端的垂直长度）才是贴合度的真正考验。手表尺寸的黄金法则是表耳间距不应超过手腕的平腕宽度。如果表耳延伸到手腕边缘之外，就会产生表耳悬空。这会导致手表滑动、表带与皮肤之间出现缝隙，以及视觉上的不协调。' },
    { type: 'title', text: '扁平手腕 vs 圆形手腕：针对具体手型的尺寸选择', level: 3 },
    { type: 'paragraph', html: '手腕周长只能说明部分问题。相同周长的手腕可能有不同的横截面形状：扁平或圆形。扁平手腕的上表面更宽，可以安全佩戴表耳间距更长的手表。圆形手腕更接近圆柱形，上表面较窄，需要更短的表耳间距以避免悬空。' },
  ],
  faq: [
    {
      question: '理想的表壳与手腕比例是多少？',
      answer: '理想的表壳与手腕比例在4.0到5.0之间。用周长除以表壳直径，4.5是传统钟表学的最佳比例。4.0到4.5呈现现代、大胆的腕上存在感，高于5.0适合复古正装表，低于4.0则显得过大。',
    },
    {
      question: '为什么表耳间距比表壳直径更重要？',
      answer: '表壳直径只测量表盘的宽度，而表耳间距决定了手表在手腕上的总长度。如果表耳间距超过手腕的平腕宽度，表耳就会悬空，导致表带垂直下垂。这会让手表看起来不稳定且比例失调。',
    },
    {
      question: '扁平手腕和圆形手腕对手表尺寸和贴合有什么影响？',
      answer: '两个周长相同的手腕（例如17厘米）佩戴手表的效果可能截然不同。扁平手腕的上表面更宽，可以容纳更长表耳间距的手表而不产生悬空。圆形手腕的上表面较窄，需要更短的表耳间距才能稳定贴合。',
    },
    {
      question: '厚度和表圈宽度如何改变手表的视觉大小？',
      answer: '表圈极薄的手表（如正装表）表盘面积更大，看起来比实际直径更大。带有厚旋转表圈的潜水表表盘较小，显得更紧凑。同样，厚度超过13毫米的手表看起来更厚重，视觉重量也更大。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '测量手腕',
      text: '用软尺环绕手腕骨骼一周，以厘米或英寸为单位测量周长。',
    },
    {
      name: '输入手表尺寸',
      text: '输入您要评估的手表的表壳直径和表耳间距。',
    },
    {
      name: '分析贴合度与模拟',
      text: '查看表壳与手腕比例、表耳悬空警告，并观察实时模拟图。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '理想的表壳与手腕比例是多少？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '理想的表壳与手腕比例在4.0到5.0之间。用周长除以表壳直径，4.5是传统钟表学的最佳比例。4.0到4.5呈现现代、大胆的腕上存在感，高于5.0适合复古正装表，低于4.0则显得过大。'
          }
        },
        {
          '@type': 'Question',
          'name': '为什么表耳间距比表壳直径更重要？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '表壳直径只测量表盘的宽度，而表耳间距决定了手表在手腕上的总长度。如果表耳间距超过手腕的平腕宽度，表耳就会悬空，导致表带垂直下垂。这会让手表看起来不稳定且比例失调。'
          }
        },
        {
          '@type': 'Question',
          'name': '扁平手腕和圆形手腕对手表尺寸和贴合有什么影响？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '两个周长相同的手腕（例如17厘米）佩戴手表的效果可能截然不同。扁平手腕的上表面更宽，可以容纳更长表耳间距的手表而不产生悬空。圆形手腕的上表面较窄，需要更短的表耳间距才能稳定贴合。'
          }
        },
        {
          '@type': 'Question',
          'name': '厚度和表圈宽度如何改变手表的视觉大小？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '表圈极薄的手表（如正装表）表盘面积更大，看起来比实际直径更大。带有厚旋转表圈的潜水表表盘较小，显得更紧凑。同样，厚度超过13毫米的手表看起来更厚重，视觉重量也更大。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表腕上存在感与尺寸计算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何确定完美的腕表尺寸',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '测量手腕',
          'text': '用软尺环绕手腕骨骼一周，以厘米或英寸为单位测量周长。'
        },
        {
          '@type': 'HowToStep',
          'name': '输入手表尺寸',
          'text': '输入您要评估的手表的表壳直径和表耳间距。'
        },
        {
          '@type': 'HowToStep',
          'name': '分析贴合度与模拟',
          'text': '查看表壳与手腕比例、表耳悬空警告，并观察实时模拟图。'
        }
      ]
    }
  ]
};

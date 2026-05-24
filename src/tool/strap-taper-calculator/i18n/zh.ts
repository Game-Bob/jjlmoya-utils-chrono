import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'strap-taper-calculator',
  title: '手表表带锥度与比例计算器',
  description: '根据表壳直径和表耳宽度，计算手表表带的理想锥度。找到完美平衡的扣环宽度。',
  ui: {
    title: '表带锥度计算器',
    caseLabel: '手表尺寸',
    caseInput: '表壳直径',
    lugLabel: '表耳宽度',
    lugInput: '表耳宽度',
    taperLabel: '锥度风格',
    straight: '直通',
    classic: '经典',
    aggressive: '强烈',
    customTaper: '自定义',
    buckleWidth: '扣环宽度',
    resultsTitle: '比例',
    lugWidth: '表耳宽度',
    buckleWidthResult: '扣环宽度',
    taperAmount: '锥度',
    taperRatio: '比例',
    proportionScore: '比例评分',
    proportionExcellent: '优秀',
    proportionGood: '良好',
    proportionFair: '一般',
    proportionUnbalanced: '不均衡',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: '说明',
    noteContent: '4 mm的经典锥度（例如从20 mm到16 mm）适合正装表。潜水表和工具表通常采用直通或2 mm锥度，看起来更坚固。',
    step1: '输入表壳直径和表耳宽度。',
    step2: '选择锥度风格或设置自定义扣环宽度。',
    step3: '查看比例评分和视觉呈现。',
  },
  seo: [
    { type: 'title', text: '手表表带锥度计算器 \u2014 比例、扣环宽度与视觉指南', level: 2 },
    { type: 'paragraph', html: '比例得当的表带能成就一块表，也能毁掉一块表。潜水表锥度过大会显得脆弱，正装表没有锥度则显得笨重。本计算器帮助您根据表壳直径和表耳宽度找到理想的<strong>表带锥度比例</strong>。' },
    { type: 'title', text: '什么是表带锥度？', level: 3 },
    { type: 'paragraph', html: '表带锥度是指从表耳端到扣环端的宽度递减。经典正装表可能从表耳处的20 mm逐渐收窄到扣环处的16 mm \u2014 即4 mm锥度。潜水表则可能全程保持20 mm直通，呈现更偏工具表的外观。' },
    { type: 'title', text: '表带比例的黄金法则', level: 3 },
    { type: 'paragraph', html: '手表爱好者普遍认为，表耳宽度在表壳直径的45%到55%之间最为美观。对于锥度而言，扣环宽度在表耳宽度的75%到85%之间时，可以形成平衡优雅的轮廓。超出此范围的比值可能使手表显得头重脚轻或过于脆弱。' },
    { type: 'title', text: '不同风格手表的锥度建议', level: 3 },
    { type: 'paragraph', html: '正装表：4 mm锥度（20 mm到16 mm）。运动表：2到3 mm锥度。潜水表：0到2 mm锥度。军表或户外表：直通锥度呈现坚固风格。飞行员表：最小锥度以配合仪器美学。' },
  ],
  faq: [
    {
      question: '正装表的理想表带锥度是多少？',
      answer: '4 mm锥度是经典选择。对于20 mm表耳宽度，这意味着16 mm的扣环。这能营造出优雅的轮廓，与正装表的精致外观相得益彰。',
    },
    {
      question: '潜水表应该使用锥度表带吗？',
      answer: '大多数潜水表在锥度最小或没有锥度时最好看。全程20 mm的直通表带带来坚固的工具表手感，与潜水表的实用性特质相匹配。',
    },
    {
      question: '锥度太大会有什么问题？',
      answer: '过大的锥度（6 mm或以上）会使表头看起来不成比例地大且头重脚轻。表带在扣环端可能也会显得单薄。',
    },
    {
      question: '如何测量表耳宽度？',
      answer: '测量表壳上生耳孔之间的内侧宽度。这就是您需要的表带宽度。常见尺寸为18 mm、20 mm和22 mm。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '输入表壳和表耳尺寸',
      text: '以毫米为单位输入表壳直径和表耳宽度。',
    },
    {
      name: '选择锥度风格',
      text: '选择直通、经典、强烈或自定义。视觉呈现会即时更新。',
    },
    {
      name: '查看比例',
      text: '检查比例评分，了解您的表带选择是否均衡。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '正装表的理想表带锥度是多少？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4 mm锥度是经典选择。对于20 mm表耳宽度，这意味着16 mm的扣环，形成优雅的轮廓。',
          },
        },
        {
          '@type': 'Question',
          'name': '潜水表应该使用锥度表带吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数潜水表在锥度最小或没有锥度时最好看。20 mm的直通表带带来坚固感。',
          },
        },
        {
          '@type': 'Question',
          'name': '锥度太大会有什么问题？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '过大的锥度会使表头不成比例地大，表带在扣环端可能显得单薄。',
          },
        },
        {
          '@type': 'Question',
          'name': '如何测量表耳宽度？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '测量表壳上生耳孔之间的内侧宽度。常见尺寸为18 mm、20 mm和22 mm。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表表带锥度计算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何计算手表表带锥度比例',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '输入表壳和表耳尺寸',
          'text': '以毫米为单位输入表壳直径和表耳宽度。',
        },
        {
          '@type': 'HowToStep',
          'name': '选择锥度风格',
          'text': '选择直通、经典、强烈或自定义。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看比例',
          'text': '检查比例评分。',
        },
      ],
    },
  ],
};

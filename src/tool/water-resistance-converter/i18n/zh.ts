import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'water-resistance-converter',
  title: '手表防水换算工具 — 米、ATM、巴、英尺',
  description: '在米、英尺、ATM和巴之间换算手表的防水等级。了解每个等级在日常佩戴、游泳和潜水中的实际含义。',
  ui: {
    title: '防水换算工具',
    depthLabel: '防水等级',
    enterDepth: '输入防水深度',
    unitMeters: '米 (m)',
    unitFeet: '英尺 (ft)',
    unitATM: '大气压 (ATM)',
    unitBar: '巴 (bar)',
    convertedValues: '等效值',
    ratingLabel: '等级',
    whatItMeans: '含义',
    notWaterResistant: '不防水',
    notWaterResistantDesc: '避免任何水溅。完全远离水源。',
    handWash: '防溅水',
    handWashDesc: '洗手、雨水、轻微水溅。不可游泳，不可淋浴。',
    showerSwim: '淋浴和浅泳',
    showerSwimDesc: '淋浴、泳池浅水游泳。不可潜水或浮潜。',
    snorkeling: '游泳和浮潜',
    snorkelingDesc: '泳池游泳、浮潜、水上运动。日常使用中防水性出色。',
    scubaDiving: '休闲水肺潜水',
    scubaDivingDesc: '水肺潜水、高强度海洋活动。符合ISO标准。',
    saturationDiving: '深潜 / 饱和潜水',
    saturationDivingDesc: '专业饱和潜水。极端深度。氦气排放阀场景。',
    tipTitle: '提示',
    tipContent: '防水性能会随时间下降。密封垫圈应每年检测，每3\u20135年更换一次。',
  },
  seo: [
    { type: 'title', text: '手表防水换算工具 — 解读米、ATM、巴和英尺', level: 2 },
    { type: 'paragraph', html: '30米防水等级并不意味着你可以潜到30米深度。它意味着手表能够承受水溅和轻微雨水。本换算工具可在<strong>米、英尺、大气压（ATM）和巴</strong>之间进行转换，并告诉你每个等级实际允许的活动范围。' },
    { type: 'title', text: '防水等级的真相', level: 3 },
    { type: 'paragraph', html: '手表防水性能是在实验室静态压力下测试的。实际使用条件——手臂摆动、潜水、温度变化——会产生更高的动态压力。30m / 3 ATM的手表仅防溅水。游泳至少需要100m / 10 ATM。水肺潜水则以200m / 20 ATM为标准入门要求。' },
    { type: 'title', text: '防水性能为何随时间下降', level: 3 },
    { type: 'paragraph', html: '密封手表的橡胶密封垫和O形圈会随着时间推移而干燥、开裂和压缩。热量、紫外线和化学物质会加速这一过程。曾经防水100m的手表，5年未经维护后可能仅剩防溅水能力。请每年检测密封件，每3至5年更换一次。' },
    { type: 'title', text: 'ISO 6425 — 潜水表标准', level: 3 },
    { type: 'paragraph', html: '手表要被称为"潜水表"，必须符合ISO 6425标准：至少100m防水、单向旋转表圈、夜光标记和旋入式表冠。符合该标准的手表需在额定深度125%的压力下测试。200m ISO认证手表在250m深度进行测试。' },
  ],
  faq: [
    {
      question: '30米防水的手表可以游泳吗？',
      answer: '不可以。30m / 3 ATM等级仅表示防溅水——洗手、雨水和汗水。游泳产生的动态压力超过静态测试压力。游泳请选择至少100m / 10 ATM。',
    },
    {
      question: 'ATM、巴和米有什么区别？',
      answer: '1 ATM = 1巴 ≈ 10米静态水柱。在钟表行业，它们基本等效。10 ATM手表与10巴手表相同，约可承受100米深度。',
    },
    {
      question: '我应该多久检测一次手表的防水性能？',
      answer: '每年一次，尤其是在接触水之前。密封垫会老化。每3-5年，应在全面保养时更换所有密封件。',
    },
    {
      question: 'ISO 6425认证是什么意思？',
      answer: 'ISO 6425是潜水表的国际标准。要求至少100m防水、单向旋转表圈、夜光标记，并在额定深度125%的压力下进行测试。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '输入等级',
      text: '输入手表的防水数值并选择单位（米、英尺、ATM或巴）。',
    },
    {
      name: '查看等效值',
      text: '卡片同时显示所有四种单位的换算值。',
    },
    {
      name: '查看建议',
      text: '高亮显示的卡片显示在该防水等级下安全的活动。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '30米防水的手表可以游泳吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不可以。30m / 3 ATM等级仅表示防溅水——洗手、雨水和汗水。游泳请选择至少100m / 10 ATM。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ATM、巴和米有什么区别？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1巴 ≈ 10米静态水柱。在钟表行业，它们基本等效。',
          },
        },
        {
          '@type': 'Question',
          'name': '我应该多久检测一次手表的防水性能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '每年一次，尤其是在接触水之前。每3-5年，应在全面保养时更换所有密封件。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ISO 6425认证是什么意思？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425要求至少100m防水、单向旋转表圈、夜光标记，并在额定深度125%的压力下进行测试。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表防水换算工具',
      'operatingSystem': '全部',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': '需要HTML5。需要JavaScript。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何换算手表防水等级',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '输入等级',
          'text': '输入手表的防水数值并选择单位。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看等效值',
          'text': '卡片同时显示所有四种单位的换算值。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看建议',
          'text': '高亮显示的卡片显示在该防水等级下安全的活动。',
        },
      ],
    },
  ],
};

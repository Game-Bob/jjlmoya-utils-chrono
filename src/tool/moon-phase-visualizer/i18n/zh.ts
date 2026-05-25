import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'moon-phase-visualizer',
  title: '月相可视化工具 — nar 日历与手表月相调校工具',
  description: '实时查看当前月相、照亮率、月龄以及下次满月和新月。调校手表月相功能的理想工具。',
  ui: {
    title: '月相可视化工具',
    selectDate: '选择日期',
    today: '今天',
    moonPhase: '月相',
    illumination: '照亮率',
    moonAge: '月龄',
    daysUntilFull: '距离满月',
    daysUntilNew: '距离新月',
    newMoon: '新月',
    waxingCrescent: '蛾眉月',
    firstQuarter: '上弦月',
    waxingGibbous: '盈凸月',
    fullMoon: '满月',
    waningGibbous: '亏凸月',
    lastQuarter: '下弦月',
    waningCrescent: '残月',
    nextFullMoon: '下次满月',
    nextNewMoon: '下次新月',
    tipTitle: '提示',
    tipContent: '调校月相表时，先用此工具查找今天的月相，然后转动表冠直到月相盘与之匹配。大部分机械月相表的误差约为每 2 年偏差一天。',
    days: '周期进度',
    day: '天',
  },
  seo: [
    { type: 'title', text: '月相可视化工具 — 月相查询与手表调校指南', level: 2 },
    { type: 'paragraph', html: '月相可视化工具以逼真的月球渲染效果展示 <strong>当前月相</strong>。查看 <strong>照亮率百分比、月龄、距离下次满月的天数以及下次新月</strong>。专为需要精确调校月相功能的手表爱好者设计——同时也适用于查询过去或未来任何日期的通用月历。' },
    { type: 'title', text: '月相术语表', level: 3 },
    {
      type: 'glossary', items: [
        { term: '新月', definition: '月球运行到地球与太阳之间，被照亮的半球背对我们。照亮率 0%。月相周期的起点。' },
        { term: '蛾眉月', definition: '照亮率 1–49%。右侧出现一道细弯月（北半球）。月球正向上弦月阶段移动。' },
        { term: '上弦月', definition: '照亮率 50%。可见面的一半被照亮。月球完成其周期的四分之一。' },
        { term: '盈凸月', definition: '照亮率 51–99%。超过一半被照亮。月球正向着满月阶段变化。' },
        { term: '满月', definition: '照亮率 100%。整个可见面被照亮。月相周期的高峰。' },
        { term: '亏凸月', definition: '照亮率 99–51%。被照亮的部分从右侧开始缩小。' },
        { term: '下弦月', definition: '照亮率 50%。左半部分被照亮。周期完成四分之三。' },
        { term: '残月', definition: '照亮率 49–1%。左侧一道细弯月，之后周期重新从新月开始。' },
      ]
    },
    { type: 'title', text: '如何调校月相表', level: 3 },
    {
      type: 'list', items: [
        '使用本工具查找今天的精确月相，记下月相名称和视觉外观。',
        '将手表表冠拉出至月相调校档位（通常为第 2 或第 3 档）。',
        '转动表冠直到月相盘显示与工具相同的月相。满月指示器通常位于月相盘的正上方中央。',
        '避免在晚上 9 点到凌晨 3 点之间调校月相，此时日期切换机构正在运作，强行操作可能造成损坏。',
        '大多数机械月相表使用 59 齿齿轮，近似两个太阴月周期（59 天），因此每 2 年会累积约 1 天的误差。',
        '高精度手表（百达翡丽、朗格）使用更精密的齿轮系，误差仅为每 100 年以上偏差一天。',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: '切勿在日期切换期间调校', icon: 'mdi:alert', html: '请勿在 <strong>晚上 9 点到凌晨 3 点</strong> 之间调校月相（或日期）。在此期间，手表的日期切换机构与日期轮处于物理啮合状态。强行转动表冠可能导致齿轮损坏。如必须在此期间调校，先将指针拨过凌晨 3 点，再调校月相。' },
    { type: 'title', text: '普通月相与高精度月相对比', level: 3 },
    {
      type: 'table', headers: ['类型', '齿轮', '误差累积', '偏差一天需要', '代表表款'], rows: [
        ['标准/入门', '59 齿', '约每 2 年偏差 1 天', '约 2.5 年', '精工、东方、汉米尔顿、天梭'],
        ['中档', '135 齿', '约每 10 年偏差 1 天', '约 10 年', '欧米茄、帝舵、万国、百年灵'],
        ['高精度', '齿轮系', '约每 100+ 年偏差 1 天', '100+ 年', '百达翡丽、朗格'],
      ]
    },
    { type: 'tip', title: '看懂月相盘', html: '大多数月相表的月相盘上有 <strong>两个月亮</strong> 相对排列。每个满月对准中央顶部的窗口。经过一个完整周期（29.5 天）后，第二个月亮接替位置。这就是 59 齿齿轮的运作原理：它每 59 天转完一整圈——正好是两个太阴月周期。' },
    {
      type: 'summary', title: '快速参考', items: [
        '太阴（朔望）周期精确为 29.53058867 天。本工具使用该数值以获得最高精度。',
        '八个月相周而复始：新月 → 蛾眉月 → 上弦月 → 盈凸月 → 满月 → 亏凸月 → 下弦月 → 残月。',
        '调校月相表：在此查找今天月相，然后在手表的月相盘上匹配。',
        '切勿在晚上 9 点到凌晨 3 点之间强行转动表冠。先将时间拨过凌晨 3 点。',
        '标准 59 齿月相每约 2.5 年偏差一天。修正需要将月相盘向前推进一格。',
      ]
    },
  ],
  faq: [
    {
      question: '如何调校手表的月相功能？',
      answer: '使用本工具查找今天的月相。转动表冠（通常为第 2 档）直到月相盘显示匹配的月相。避免在晚上 9 点到凌晨 3 点之间调校，此时日期机构处于啮合状态。',
    },
    {
      question: '机械月相表的精度如何？',
      answer: '大多数使用 59 齿齿轮，精度约为每 2 年偏差一天。百达翡丽和朗格等高端腕表可达到每 100 年以上偏差一天。',
    },
    {
      question: '朔望月和恒星月有什么区别？',
      answer: '恒星月（27.3 天）是月球相对于恒星的公转周期。朔望月（29.53 天）是两次相同月相之间的时间间隔，月相表追踪的正是这个周期。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择日期',
      text: '使用日期选择器选择过去或未来的任意日期，查看对应月相。',
    },
    {
      name: '查看月相数据',
      text: '信息卡片显示月相名称、照亮率百分比、月龄和周期进度。',
    },
    {
      name: '查看月相事件',
      text: '下次满月和新月的日期会自动显示。',
    },
    {
      name: '调校手表',
      text: '使用显示的月相数据精确调校手表的月相功能。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '如何调校手表的月相功能？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '使用本工具查找今天的月相。转动表冠直到月相盘显示匹配的月相。避免在晚上 9 点到凌晨 3 点之间调校。',
          },
        },
        {
          '@type': 'Question',
          'name': '机械月相表的精度如何？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数使用 59 齿齿轮，精度约为每 2 年偏差一天。高端腕表可达到每 100 年以上偏差一天。',
          },
        },
        {
          '@type': 'Question',
          'name': '朔望月和恒星月有什么区别？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '恒星月（27.3 天）是月球相对于恒星的公转周期。朔望月（29.53 天）是两次相同月相之间的时间间隔，月相表追踪的正是这个周期。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to visualize moon phases',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select a date',
          'text': 'Use the date picker to choose any date and see the moon phase.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the phase data',
          'text': 'The cards show phase name, illumination, moon age, and cycle progress.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Set your watch',
          'text': 'Use the displayed phase to set your moon phase watch complication.',
        },
      ],
    },
  ],
};

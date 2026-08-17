import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-color-simulator',
  title: '夜光颜色模拟器: 手表夜光效果在线预览',
  description: '实时预览不同夜光颜色的效果。对比 C1、C3、BGW9、LumiNova 等多种夜光在不同环境亮度下的表现。',
  ui: {
    title: '夜光颜色模拟器',
    lumeType: '夜光类型',
    brightness: '环境亮度',
    dark: '暗',
    light: '亮',
    color: '颜色',
    hex: 'HEX',
    rgb: 'RGB',
    type: '类型',
    description: '说明',
    c1Name: 'C1',
    c1Desc: '绿色（经典）',
    c3Name: 'C3',
    c3Desc: '超级绿',
    bgw9Name: 'BGW9',
    bgw9Desc: '冰蓝色',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: '暖白色',
    vintageName: 'Vintage',
    vintageDesc: '复古镭',
    orangeName: 'Orange',
    orangeDesc: '潜水橙',
    blueName: 'Blue',
    blueDesc: '深蓝色',
    greenName: 'Green',
    greenDesc: '霓虹绿',
    tipTitle: '提示',
    tipContent: '夜光亮度取决于颜料品质和吸收光量的多少。BGW9 发出蓝白色光，亮度最高；而复古夜光呈暖色，亮度较暗。',
  },
  seo: [
    { type: 'title', text: '手表夜光颜色模拟器 - 实时发光效果预览', level: 2 },
    { type: 'paragraph', html: '夜光是手表收藏中最个性化的选择之一。你偏爱 <strong>C1 Super-LumiNova</strong> 的经典绿色光芒，还是 <strong>BGW9</strong> 的冰蓝色调？本模拟器展示每种夜光类型在从日光到全黑不同亮度等级下的表现，并提供每种颜色的精确 <strong>HEX 和 RGB 值</strong>。' },
    { type: 'title', text: 'Super-LumiNova 类型对比', level: 3 },
    {
      type: 'table', headers: ['类型', '日光颜色', '发光颜色', '亮度', '适合场景'], rows: [
        ['C1', '浅绿色', '绿色', '中等', '正装表，原汁原味'],
        ['C3', '黄绿色', '亮绿色', '最高', '潜水表，工具表'],
        ['BGW9', '米白色', '冰蓝色', '高', '现代运动表，简约风格'],
        ['LumiNova', '暖米色', '暖白色', '低-中', '经济型夜光方案'],
        ['Vintage', '奶油色/棕褐色', '暖暗光', '低', '复古风格手表'],
        ['Orange', '橙色', '橙色', '中等', '潜水表点缀，复古潜水表'],
        ['Blue', '浅蓝色', '蓝色', '中等', '设计款表盘，时尚手表'],
        ['Green', '亮绿色', '绿色', '高', '军表风格手表'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 - 该如何选择？', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 经典绿色', icon: 'mdi:lightbulb-on', description: 'Super-LumiNova 最早期的配方。发出中等亮度的绿色荧光。安全经典，适合任何手表风格。', points: ['中等亮度，可见 4-6 小时', '绿色发光，暖色调', '最经济的配方', '常见于入门级手表'], highlight: false },
        { title: 'C3 超级绿', icon: 'mdi:lightning-bolt', description: '市面上最亮的绿色夜光。专业潜水表在水下读时至关重要的选择。极短充电时间即可达到最大亮度。', points: ['最高亮度，可见 8-12 小时', '日光下呈黄绿色', '精工、西铁城、欧米茄首选', '弱光环境下最易读'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 冰蓝色', icon: 'mdi:snowflake', description: '发出蓝白色而非绿色光芒。亮度略低于 C3，但因干净现代的视觉效果备受青睐。常见于豪华运动表。', points: ['高亮度，可见 6-10 小时', '蓝白色发光，中性色调', '日光下呈现干净现代的质感', '帝舵、冠蓝狮、欧米茄使用'], highlight: true },
        { title: '复古镭式夜光', icon: 'mdi:fire', description: '暖米色/奶油色调，模仿 1960 年代镭夜光的效果。刻意降低亮度以还原真实复古质感。发光温暖、柔和，随时间愈加迷人。', points: ['低亮度，可见 2-4 小时', '暖奶油色到暗琥珀色', '复古外观，不含放射性物质', '复古复刻款中常见'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '亮度并非一切', icon: 'mdi:palette', html: '最亮的夜光（C3）未必总是最佳选择。<strong>BGW9</strong> 用微小的亮度差距换来了更中性、更现代的外观，深受许多收藏家喜爱。<strong>复古夜光</strong> 则优先考虑时代准确的复古美学而非性能。根据你最看重什么来做选择：<strong>最大亮度、现代美学、还是复古真实感。</strong>' },
    { type: 'title', text: '夜光原理：发光背后的科学', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: '一种基于铝酸锶的光致发光颜料。吸收紫外线和可见光后重新发出荧光。无放射性，安全可靠。由 Nemoto & Co. 于 1993 年研发。' },
        { term: '充电时间', definition: '使夜光颜料达到饱和所需的光照时长。在阳光或紫外线下充分充电需要 10-30 分钟。充电越久，发光越亮、越持久。' },
        { term: '发光持续时间', definition: '充电后夜光保持可见的时间。优质 Super-LumiNova 可持续发光 6-12 小时。充电后的前 30 分钟亮度最高。' },
        { term: '颜料等级', definition: '铝酸锶晶体的品质。高等级颜料（C3、BGW9）使用更大、更均匀的晶体，亮度和持续时间更优。低等级（LumiNova）使用更小的晶体，亮度较暗。' },
      ]
    },
    {
      type: 'summary', title: '夜光选择快速指南', items: [
        '追求黑暗中的最佳可读性：选择 C3（最亮绿色）或 BGW9（最亮蓝白色）。',
        '追求现代豪华质感：BGW9 是目前高端手表品牌中的热门之选。',
        '追求复古/复刻风格：使用 Vintage 或 Orange 以获得时代准确的温暖色调。',
        'C1 是万金油：亮度不错、经典绿色、价格实惠。',
        '夜光在日光下的颜色与发光颜色差异很大-使用模拟器同时对比两者。',
      ]
    },
  ],
  faq: [
    {
      question: '哪种夜光最亮？',
      answer: 'C3 Super-LumiNova 是最亮的绿色夜光。BGW9 是最亮的蓝白色夜光。两者的亮度都远超 C1 和普通 LumiNova。',
    },
    {
      question: '什么是 BGW9 夜光？',
      answer: 'BGW9 是 Super-LumiNova 的一个变种，发出蓝白色而非绿色光芒。亮度略低于 C3，但因其干净现代的外观而备受青睐。',
    },
    {
      question: '复古夜光会发光吗？',
      answer: '现代复古风格的夜光（米色/暖色）会发光，但刻意降低了亮度以模拟老化的镭夜光。这是以最大亮度换取复古真实感。',
    },
    {
      question: '夜光能持续多久？',
      answer: '在强光下充分充电后，优质 Super-LumiNova 可持续发光 6-12 小时。充电后的前 30 分钟亮度最高。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择夜光类型',
      text: '从 C1、C3、BGW9、LumiNova、Vintage、Orange、Blue 或 Green 预设中选择。',
    },
    {
      name: '调节亮度',
      text: '拖动环境亮度滑块从白天（左侧）到夜晚（右侧），观察夜光的变化。',
    },
    {
      name: '查看参数',
      text: '信息卡片显示当前颜色的精确 HEX 和 RGB 值。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '哪种夜光最亮？',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova 是最亮的绿色夜光。BGW9 是最亮的蓝白色夜光。' },
        },
        {
          '@type': 'Question',
          'name': '什么是 BGW9 夜光？',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 是 Super-LumiNova 的一个变种，发出蓝白色而非绿色光芒。' },
        },
        {
          '@type': 'Question',
          'name': '复古夜光会发光吗？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '现代复古风格的夜光会发光，但刻意降低了亮度以模拟老化的镭夜光效果。' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to simulate lume colors',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '选择夜光类型',
          'text': '从C1、C3、BGW9、LumiNova或其他预设中选择。',
        },
        {
          '@type': 'HowToStep',
          'name': '调整亮度',
          'text': '将亮度从白天滑到夜间，查看夜光表现。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看规格',
          'text': '信息卡显示当前颜色的HEX和RGB值。',
        },
      ],
    },
  ],
};

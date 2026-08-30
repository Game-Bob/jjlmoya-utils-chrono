import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'tachymeter-calculator',
  title: 'Cesuyi Jisuanqi: Cong jingguo shijian jisuan sudu',
  description: '使用测速仪公式根据经过时间计算速度。适用于任何带有测速仪表圈刻度的计时码表。',
  ui: {
    title: '测速仪计算器',
    timeLabel: '经过时间（秒）',
    timeHelp: '在1公里或1英里距离上测量的时间',
    speedResult: '速度',
    bezelReading: '表圈读数',
    presetLabel: '预设场景',
    selectPreset: '选择场景',
    customPreset: '自定义',
    seconds: '秒',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: '当物体经过起点时启动计时码表。',
    exampleStep2: '在1公里后停止。测速仪刻度显示速度。',
    tipTitle: '提示',
    tipContent: '36秒时表圈读数为100。时间越短（经过时间越少），测速仪刻度上的速度越高。',
  },
  seo: [
    { type: 'title', text: '测速仪计算器: 根据经过时间计算速度', level: 2 },
    { type: 'paragraph', html: '测速仪是手表表圈或表盘上的一种刻度，可将经过时间转换为速度。通常与计时码表配合使用：当物体经过参考点时启动计时器，在1公里（或1英里）后停止，然后从刻度上读取速度。本计算器为您完成所有计算。' },
    { type: 'title', text: '测速仪的工作原理', level: 3 },
    {
      type: 'glossary', items: [
        { term: '公式', definition: '速度 = 3,600 ÷ 经过时间（秒）。常数3,600代表每小时秒数。' },
        { term: '刻度', definition: '测速仪表圈从60（3点钟位置）到400或500（接近12点钟位置）进行标注。速度越快，经过时间越短。' },
        { term: '基准距离', definition: '标准测速仪以1公里或1英里为基准进行校准。对于其他距离，相应地除以读数。' },
      ]
    },
    { type: 'title', text: '常见的测速仪测量值', level: 3 },
    {
      type: 'table', headers: ['经过时间', '速度', '场景'], rows: [
        ['10秒', '360 km/h', '高速列车 / 赛车'],
        ['12秒', '300 km/h', '私人飞机起飞'],
        ['20秒', '180 km/h', '高速公路上的跑车'],
        ['30秒', '120 km/h', '高速公路上的汽车'],
        ['36秒', '100 km/h', '公路上的汽车（标准参考）'],
        ['45秒', '80 km/h', '城市道路上的汽车'],
        ['60秒', '60 km/h', '城市驾驶'],
        ['90秒', '40 km/h', '骑自行车'],
        ['120秒', '30 km/h', '慢跑'],
        ['240秒', '15 km/h', '跑步'],
        ['480秒', '7.5 km/h', '步行'],
      ]
    },
    { type: 'title', text: '超出标准刻度范围', level: 3 },
    { type: 'paragraph', html: '如果您的测速仪表圈只到400，而经过时间不足9秒，您仍然可以使用它。只需使用更长的基准距离即可。例如，如果您在18秒内行驶了2公里，将表圈读数除以2。反之，对于低速（超过60秒），使用较短的基准距离（如0.5公里）并将读数乘以2。' },
    { type: 'diagnostic', variant: 'info', title: '测速仪兼容性', icon: 'mdi:information', badge: '注意', html: '并非所有计时码表都配有测速仪表圈。有些手表将测速仪刻度放在表盘内圈或外侧刻度环上。数字手表可能在计时码表模式中包含测速仪功能。无论物理刻度是否存在，该公式始终有效。' },
  ],
  faq: [
    {
      question: '如何在我的手表上使用测速仪表圈？',
      answer: '在参考点（如高速公路标志牌）启动计时码表，在准确的1公里（或1英里）后停止。秒针指向表圈刻度上的速度。例如，如果在36秒内行驶了1公里，指针指向100，即100 km/h。',
    },
    {
      question: '如果经过时间短于表圈的读取范围怎么办？',
      answer: '有些测速仪只到400或500。如果您在9秒内完成了1公里，请使用更长的基准距离。行驶2公里并将表圈读数除以2，或行驶3公里并除以3。',
    },
    {
      question: '如果经过时间长于表圈的读取范围怎么办？',
      answer: '使用更短的基准距离。例如，如果需要90秒才能行驶1公里，则改为测量0.5公里。读取表圈读数并乘以2。标准测速仪刻度覆盖约7秒到60秒的时间范围。',
    },
    {
      question: '测速仪可以用于速度以外的测量吗？',
      answer: '可以。测速仪可以测量任何每小时速率。例如，测量完成一项任务所需的时间，刻度会显示您每小时可以完成多少件。在制造业中，30秒的任务意味着每小时120件。',
    },
    {
      question: '所有测速仪都使用相同的刻度吗？',
      answer: '大多数使用基于公式3,600 ÷ 秒的标准对数刻度。但某些复古手表或品牌可能存在差异。物理刻度也可能受到手表分钟轨道和表圈标记的限制。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择场景或输入自定义时间',
      text: '从汽车、骑自行车或跑步等预设中选择，或选择自定义并输入以秒为单位的经过时间。',
    },
    {
      name: '查看速度结果',
      text: '计算器显示以km/h为单位的速度以及对应的测速仪表圈读数。',
    },
    {
      name: '应用到您的计时码表',
      text: '使用经过时间在您手表的测速仪表圈上找到对应的速度。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '如何在我的手表上使用测速仪表圈？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '在参考点启动计时码表，在准确的1公里后停止。秒针指向表圈刻度上的速度。例如，36秒 = 100 km/h。',
          },
        },
        {
          '@type': 'Question',
          'name': '如果经过时间短于表圈的读取范围怎么办？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '使用更长的基准距离。行驶2公里并将表圈读数除以2，或行驶3公里并除以3。',
          },
        },
        {
          '@type': 'Question',
          'name': '如果经过时间长于表圈的读取范围怎么办？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '使用更短的基准距离。测量0.5公里，读取表圈读数并乘以2。',
          },
        },
        {
          '@type': 'Question',
          'name': '测速仪可以用于速度以外的测量吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可以。测速仪可以测量任何每小时速率。测量任务时间，刻度会显示每小时可完成的数量。',
          },
        },
        {
          '@type': 'Question',
          'name': '所有测速仪都使用相同的刻度吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数使用基于公式3,600 ÷ 秒的标准对数刻度。某些复古手表可能存在差异。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '测速仪计算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用测速仪计算速度',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '选择场景或输入自定义时间',
          'text': '从汽车、骑自行车或跑步等预设中选择，或选择自定义并输入以秒为单位的经过时间。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看速度结果',
          'text': '计算器显示以km/h为单位的速度以及对应的测速仪表圈读数。',
        },
        {
          '@type': 'HowToStep',
          'name': '应用到您的计时码表',
          'text': '使用经过时间在您手表的测速仪表圈上找到对应的速度。',
        },
      ],
    },
  ],
};

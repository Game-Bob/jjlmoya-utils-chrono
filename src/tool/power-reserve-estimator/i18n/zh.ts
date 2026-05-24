import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'power-reserve-estimator',
  title: '手表动力储存估算器',
  description: '根据表冠旋转圈数和佩戴时长，估算手表还剩多少动力储存。支持主流 ETA、Sellita、Miyota、Seiko 和 Rolex 机芯。',
  ui: {
    title: '动力储存估算器',
    movementLabel: '机芯',
    selectMovement: '选择机芯',
    customMovement: '自定义',
    turnsLabel: '表冠旋转圈数',
    hoursLabel: '佩戴时间',
    turnsInput: '圈',
    hoursInput: '小时',
    activityLabel: '活动量',
    activityLow: '办公',
    activityMedium: '步行',
    activityHigh: '活跃',
    calculate: '计算',
    reserveRemaining: '剩余动力储存',
    hoursRemaining: '剩余时间',
    chargePercent: '充能率',
    resultLabel: '估算动力储存',
    stopTimeLabel: '预计停走时间',
    powerReserveHours: '动力储存（h）',
    fullWindTurns: '满链所需圈数',
    step1: '从下拉菜单中选择您的机芯。',
    step2: '输入表冠旋转圈数和佩戴时长。',
    step3: '点击计算查看动力储存。',
    tipTitle: '提示',
    tipContent: '手动上链机芯仅在转动表冠时充能。自动机芯在佩戴过程中也会充能。',
  },
  seo: [
    { type: 'title', text: '手表动力储存估算器\u2014您的机芯还剩多少动力？', level: 2 },
    { type: 'paragraph', html: '想知道您的机械手表还剩多少动力吗？无论您今早拧了表冠，还是戴了一整天，这个估算器都能告诉您 <strong>ETA、Sellita、Miyota、Seiko、Rolex</strong> 等热门机芯的大致充能水平和剩余时间。' },
    { type: 'title', text: '机械手表的动力储存原理', level: 3 },
    { type: 'paragraph', html: '动力储存是发条中储存的能量。转动表冠时，发条被拧紧，储存势能。自动摆陀也会在您佩戴时给发条上弦。随后能量以稳定速率\u2014通常每小时 2\u20133%\u2014持续消耗，直到手表停止。' },
    { type: 'title', text: '表冠上链与摆陀充能的区别', level: 3 },
    { type: 'paragraph', html: '通过表冠手动上链是为手表充能最有效的方式\u2014每转一圈可增加可预测的能量，通常约为总动力储存的 2.5%。佩戴时充能较慢，且取决于您的活动水平：办公室工作者每小时可充能 4\u20136%，而活跃者可达 8\u201310%。本估算器采用保守平均值。' },
    { type: 'title', text: '为什么动力储存估算很重要', level: 3 },
    { type: 'paragraph', html: '了解手表的充能水平有助于避免意外停走。如果手表在夜间停走，可能需要在睡前多上几圈，或者佩戴时间不够。使用此工具了解您的充能习惯，让您的自动手表持续运转。' },
  ],
  faq: [
    {
      question: '转动表冠一圈能为手表充多少电？',
      answer: '取决于机芯。大多数自动机芯在 30\u201340 圈内达到满链，因此每圈约增加总动力储存的 2.5\u20133.3%。Unitas 6498 等手动上链机芯也大约需要 35 圈才能满链。',
    },
    {
      question: '佩戴手表充能和上链效果一样吗？',
      answer: '佩戴时充能较慢且不稳定。在办公桌前工作时，通过摆陀每小时可充能 4\u20136%。在活动状态下（步行、运动），每小时可达 8\u201310%。手动上链更快、更可预测。',
    },
    {
      question: '手表每小时消耗多少动力储存？',
      answer: '消耗是恒定的：用 100 除以动力储存小时数。38 小时机芯每小时消耗约 2.6%，42 小时消耗 2.4%，70 小时消耗约 1.4%。',
    },
    {
      question: '会上链过度损坏手表吗？',
      answer: '现代自动机芯配有滑动离合装置，可防止上链过度。发条完全上紧后，继续转动只会打滑。手动上链机芯也有限位机构，但强行超过限位可能会损坏发条。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择机芯',
      text: '从下拉菜单中选择您的手表机芯。如果未列出，请选择「自定义」并输入其动力储存和满链所需圈数。',
    },
    {
      name: '输入数据',
      text: '输入您转动了多少圈表冠，或今天佩戴了多少小时。两者都填可获得综合估算结果。',
    },
    {
      name: '计算',
      text: '点击计算按钮。结果将显示估算的充能百分比和剩余动力储存小时数。',
    },
    {
      name: '调整习惯',
      text: '根据结果判断是需要在睡前多上几圈，还是在白天增加佩戴时间，以保持手表持续运行。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '转动表冠一圈能为手表充多少电？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '取决于机芯。大多数自动机芯在 30\u201340 圈内达到满链，因此每圈约增加总动力储存的 2.5\u20133.3%。Unitas 6498 等手动上链机芯也大约需要 35 圈才能满链。',
          },
        },
        {
          '@type': 'Question',
          'name': '佩戴手表充能和上链效果一样吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '佩戴时充能较慢且不稳定。在办公桌前工作时，通过摆陀每小时可充能 4\u20136%。在活动状态下每小时可达 8\u201310%。手动上链更快、更可预测。',
          },
        },
        {
          '@type': 'Question',
          'name': '手表每小时消耗多少动力储存？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '消耗是恒定的：用 100 除以动力储存小时数。38 小时机芯每小时消耗约 2.6%，42 小时消耗 2.4%，70 小时消耗约 1.4%。',
          },
        },
        {
          '@type': 'Question',
          'name': '会上链过度损坏手表吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '现代自动机芯配有滑动离合装置，可防止上链过度。发条完全上紧后，继续转动只会打滑。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表动力储存估算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何估算手表的动力储存',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '选择机芯',
          'text': '从下拉菜单中选择您的手表机芯。如果未列出，请选择「自定义」并输入其动力储存和满链所需圈数。',
        },
        {
          '@type': 'HowToStep',
          'name': '输入数据',
          'text': '输入您转动了多少圈表冠，或今天佩戴了多少小时。两者都填可获得综合估算结果。',
        },
        {
          '@type': 'HowToStep',
          'name': '计算',
          'text': '点击计算按钮。结果将显示估算的充能百分比和剩余动力储存小时数。',
        },
        {
          '@type': 'HowToStep',
          'name': '调整习惯',
          'text': '根据结果判断是需要在睡前多上几圈，还是在白天增加佩戴时间，以保持手表持续运行。',
        },
      ],
    },
  ],
};

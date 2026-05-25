import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'demagnetizing-timer',
  title: '手表消磁定时器与指南',
  description: '一款带有声音提示的精确倒计时器，用于DIY手表消磁。为您的消磁线圈获取精确的按压时长。',
  ui: {
    title: '定时器设置',
    durationLabel: '脉冲时长',
    duration1s: '1秒',
    duration2s: '2秒',
    duration3s: '3秒',
    customLabel: '自定义',
    startButton: '开始',
    stopButton: '停止',
    resetButton: '重置',
    pressPhase: '请按下消磁器按钮！',
    holdPhase: '请按住按钮...',
    releasePhase: '立即松开！',
    completePhase: '完成！移开手表。',
    ready: '就绪',
    seconds: '秒',
    instructions: '如何消磁',
    step1: '将手表放在消磁器平台上。',
    step2: '按下开始键，同时按住消磁器按钮持续设定的时长。',
    step3: '松开按钮，缓慢移开手表。',
    step4: '如有需要重复2-3次，每次旋转手表。',
    tipTitle: '提示',
    tipContent: '消磁器通电时，请将手表保持至少1米距离，避免再次磁化。',
  },
  seo: [
    { type: 'title', text: '手表消磁定时器-Y消磁的精确脉冲计时', level: 2 },
    { type: 'paragraph', html: '消磁手表需要精确的按键时机。大多数DIY消磁器通过产生衰减的交流磁场来工作，理想的脉冲持续时间为<strong>1到3秒</strong>。时间太短，磁场无法中和磁化；时间太长，则有可能使机芯饱和。' },
    { type: 'title', text: '为什么消磁时的时机很重要', level: 3 },
    { type: 'paragraph', html: '按下消磁器按钮时，线圈内部会产生一个交流磁场。磁场以电源频率（50/60赫兹）振荡，松开按钮时逐渐衰减。目标是让手表<strong>恰好足够长时间</strong>暴露于这个衰减磁场中，以使游丝和其他钢制部件中的磁畴随机化。1到3秒的脉冲对大多数机芯来说是最佳选择。' },
    { type: 'title', text: '消磁器的工作原理', level: 3 },
    { type: 'paragraph', html: '消磁器本质上是一个导线线圈，通电时会产生强大的交流磁场。将磁化的手表置于该磁场中，其内部的磁畴会快速翻转。当磁场突然消失（松开按钮）时，磁畴会在随机模式下稳定下来，从而有效抵消净磁化。' },
    { type: 'title', text: '手表需要消磁的迹象', level: 3 },
    { type: 'paragraph', html: '手表被磁化的常见症状包括：每天走快几分钟、不同位置走时不一致、滴答声明显加速，以及极端情况下手表完全停止。如果您的自动手表突然开始走快，磁化往往是罪魁祸首，而消磁是一个简单的解决方案。' },
  ],
  faq: [
    {
      question: '我应该按消磁器按钮多长时间？',
      answer: '建议脉冲时长为1到3秒。从1秒开始，根据需要增加。过长的脉冲可能导致线圈过热，且不会改善效果。',
    },
    {
      question: '可以多次消磁手表吗？',
      answer: '可以。重复2到3次，每次将手表旋转90度。这样可以确保所有轴都暴露于交流磁场中。没有过度消磁的风险。',
    },
    {
      question: '消磁对石英表有效吗？',
      answer: '石英表很少受磁化影响，因为它们含有的铁磁性部件较少。然而，某些石英机芯中的步进电机可能会被磁化，导致指针运动异常。消磁对石英表是安全的。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '设置时长',
      text: '根据磁化程度选择1、2或3秒。',
    },
    {
      name: '放置手表',
      text: '将手表平放在消磁器平台上，对准线圈中心。',
    },
    {
      name: '按下并保持',
      text: '同时按下开始按钮和消磁器按钮，保持设定的时长。',
    },
    {
      name: '松开并移开',
      text: '松开按钮，在关闭消磁器前将手表缓慢移开至少1米。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '我应该按消磁器按钮多长时间？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '建议脉冲时长为1到3秒。从1秒开始，根据需要增加。过长的脉冲可能导致线圈过热，且不会改善效果。',
          },
        },
        {
          '@type': 'Question',
          'name': '可以多次消磁手表吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可以。重复2到3次，每次将手表旋转90度。这样可以确保所有轴都暴露于交流磁场中。没有过度消磁的风险。',
          },
        },
        {
          '@type': 'Question',
          'name': '消磁对石英表有效吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '石英表很少受磁化影响，因为它们含有的铁磁性部件较少。然而，某些石英机芯中的步进电机可能会被磁化，导致指针运动异常。消磁对石英表是安全的。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表消磁定时器与指南',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何消磁手表',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '设置时长',
          'text': '根据磁化程度选择1、2或3秒。',
        },
        {
          '@type': 'HowToStep',
          'name': '放置手表',
          'text': '将手表平放在消磁器平台上，对准线圈中心。',
        },
        {
          '@type': 'HowToStep',
          'name': '按下并保持',
          'text': '同时按下开始按钮和消磁器按钮，保持设定的时长。',
        },
        {
          '@type': 'HowToStep',
          'name': '松开并移开',
          'text': '松开按钮，在关闭消磁器前将手表缓慢移开至少1米。',
        },
      ],
    },
  ],
};

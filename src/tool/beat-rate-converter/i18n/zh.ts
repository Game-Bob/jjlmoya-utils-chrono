import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beat-rate-converter',
  title: '钟表换速器: VPH转Hz及每日误差',
  description: '将每小时振动次数（VPH）转换为赫兹、每秒膑动次数，并计算单次丢失膑动对日差的影响。支持ETA、Sellita、Miyota、Seiko、Rolex、Omega和Zenith等机芯。',
  ui: {
    title: '换速器',
    vphLabel: '机芯',
    selectMovement: '选择机芯',
    customMovement: '自定义',
    customVph: '每小时振动次数',
    resultsTitle: '计算结果',
    frequency: '频率',
    ticksPerSec: '每秒膑动次数',
    lostTickImpact: '如果每小时丢失1次膑动',
    lostTickExplainer: '在28,800 VPH下，每小时丢失一次膑动意味着每天约丢失3秒。低换速率会放大这种影响。',
    step1: '选择您的机芯或输入自定义的VPH。',
    step2: '查看Hz频率、每秒膑动次数以及丢失膑动的影响。',
    tipTitle: '小提示',
    tipContent: '更高的换速率（36,000 VPH）能带来更顺滑的秒针扫秒和更好的精度，但也会加剧换速机构的磨损。',
  },
  seo: [
    { type: 'title', text: '钟表换速器 - VPH转Hz及每日秒数', level: 2 },
    { type: 'paragraph', html: '每块机械表都以特定的节奏运行 - 其游丝摆轮每小时振动的次数。这个数字决定了秒针扫秒的顺滑程度以及表的精度。这款换算器能将<strong>VPH转换为Hz和每秒膑动次数</strong>，并展示单次丢失膑动带来的实际影响。' },
    { type: 'title', text: '什么是换速率？', level: 3 },
    { type: 'paragraph', html: '换速率，以每小时振动次数（vph）为单位测量，是表的游丝摆轮振动的频率。常见的节奏是28,800 VPH - 即4 Hz，或每秒8次膑动。36,000 VPH（5 Hz）这样的更高换速率能产生更顺滑的扫秒运动，并通过减小位置误差的影响而在理论上提高精度。' },
    { type: 'title', text: '为什么丢失膑动很重要', level: 3 },
    { type: 'paragraph', html: '如果表的换速机构因摩擦、磁性或磨损而无法完成一次膑动，那么这次丢失的膑动将直接转化为丢失的时间。在28,800 VPH下，每小时丢失一次膑动每天累计约<strong>3秒</strong>。在18,000 VPH下，同样的误差每天达到近5秒。这款工具将帮助您理解调整背后的数学原理。' },
    { type: 'title', text: '常见换速率', level: 3 },
    { type: 'paragraph', html: '复古怀表和早期自动机械表通常以18,000 VPH（2.5 Hz）运行。许多Seiko和Miyota机芯使用21,600 VPH（3 Hz）。现代标准是28,800 VPH（4 Hz），由ETA、Sellita、Rolex等采用。0"000 VPH（5 Hz）运行，以实现更高的精度。' },
  ],
  faq: [
    {
      question: '如何将VPH转换为Hz？',
      answer: '将VPH除以7,200。以28,800 VPH节奏运行的表为4 Hz（28,800 ÷ 7,200 = 4）。除以7,200是考虑到一次完整振动包含两次振动，而一小时有3,600秒。',
    },
    {
      question: '更高的换速率对精度意味着什么？',
      answer: '更高的换速率通常能带来更高的理论精度，因为游丝摆轮受位置干扰的影响较小。但是，它们也会对枕石和换速轮造成更多的摩擦和磨损，需要更好的润滑和更频繁的维护。',
    },
    {
      question: '丢失膑动如何影响日常精度？',
      answer: '每小时丢失一次膑动意味着每天丢失24次膑动。丢失的时间取决于您的换速率：将86,400除以您的VPH。在28,800 VPH下为每天3秒。在18,000 VPH下为4.8秒。',
    },
    {
      question: '表能复原丢失的膑动吗？',
      answer: '不能。一旦膑动丢失，时间将永久丢失。表不会"追上"。这就是为什么换速机构的健康状态 - 干净的枕石、正确的润滑和正确的换速误差 - 直接影响日差。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择您的机芯',
      text: '从下拉菜单中选择您的机芯。每个预设都包含该机芯的正确VPH值。',
    },
    {
      name: '查看结果',
      text: '卡片将显示Hz频率、每秒膑动次数以及单次丢失膑动的日差影响。',
    },
    {
      name: '尝试自定义VPH',
      text: '选择"自定义"可以为复古或非常见的机芯输入任意VPH值。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '如何将VPH转换为Hz？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '将VPH除以7,200。以28,800 VPH节奏运行的表为4 Hz。除以7,200是考虑到一次振动包含两次振动和每小时3,600秒。',
          },
        },
        {
          '@type': 'Question',
          'name': '更高的换速率对精度意味着什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '更高的换速率提供更高的理论精度，因为游丝摆轮受位置干扰的影响较小。但是，它们也会造成更多的摩擦和磨损。',
          },
        },
        {
          '@type': 'Question',
          'name': '丢失膑动如何影响日常精度？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '每小时丢失一次膑动意味着每天丢失24次膑动。将86,400除以您的VPH即可得到每天丢失的秒数。',
          },
        },
        {
          '@type': 'Question',
          'name': '表能复原丢失的膑动吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不能。一旦膑动丢失，时间将永久丢失。表不会追上。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '钟表换速器',
      'operatingSystem': '全部',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': '需要HTML5。需要JavaScript。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何将VPH转换为Hz并计算丢失膑动的影响',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '选择您的机芯',
          'text': '从下拉菜单中选择您的机芯。每个预设都包含该机芯的正确VPH值。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看结果',
          'text': '卡片将显示Hz频率、每秒膑动次数以及单次丢失膑动的日差影响。',
        },
        {
          '@type': 'HowToStep',
          'name': '尝试自定义VPH',
          'text': '选择自定义可以为复古或非常见的机芯输入任意VPH值。',
        },
      ],
    },
  ],
};

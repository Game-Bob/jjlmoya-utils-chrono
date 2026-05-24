import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'watch-accuracy-tracker',
  title: '手表精度追踪与记录器',
  description: '记录并计算您的机械表或石英表每日误差（日差），以分析其精度和稳定性。',
  ui: {
    title: '手表精度追踪器',
    selectWatch: '选择或添加手表',
    watchPlaceholder: '例如：精工 SKX007',
    addWatch: '添加手表',
    deleteWatch: '删除手表',
    addLog: '记录新测量值',
    offsetLabel: '误差（秒）',
    offsetPlaceholder: '0',
    dateLabel: '测量时间',
    saveLog: '保存记录',
    avgRate: '平均日差',
    consistency: '精度状态',
    totalLogs: '总记录数',
    historyTitle: '测量历史',
    noLogs: '该手表暂无记录。请至少添加两次记录以计算精度。',
    tableDate: '日期与时间',
    tableOffset: '误差',
    tableRate: '日差',
    tableActions: '操作',
    deleteLog: '删除',
    coscExcellent: 'COSC天文台认证标准 (+4/-6 秒/天)',
    excellent: '极佳 (0 至 +5 秒/天)',
    good: '良好 (+/- 10 秒/天)',
    needsService: '需要保养 (> +/- 20 秒/天)',
    secondsPerDay: '秒/天',
    seconds: '秒',
    referenceTime: '基准时间',
    watchTime: '手表时间',
    useCurrentTime: '使用当前时间',
    calculatedRate: '计算出的日差',
    driftPredictorTitle: '走时误差预测与投影',
    driftPredictorDesc: '预测随时间推移累积的走时误差，并与行业标准进行对比。',
    dailyRateInput: '每日走时误差（秒/天）',
    dailyRatePlaceholder: '例如：+4.5 或 -3',
    driftHeading: '误差投影',
    period: '周期',
    accumulatedDrift: '预测累积误差',
    day: '1天',
    week: '1周',
    month: '1个月',
    months3: '3个月',
    months6: '6个月',
    year: '1年',
    years5: '5年',
    watchStandardTitle: '标准与认证',
    trackerHeading: '实时误差追踪',
    driftCalculatorTab: '误差预测',
    trackerTab: '误差记录',
    stdRolex: '劳力士超卓天文台',
    stdCosc: 'COSC天文台认证',
    stdMetas: 'METAS至臻天文台',
    stdStdMech: '标准机械表',
    stdQuartz: '标准石英表',
    stdHaq: '高精度石英表',
    presetRolex: '劳力士 (+2 秒/天)',
    presetCosc: 'COSC (+4 秒/天)',
    presetStdMech: '普通机械表 (+15 秒/天)',
    presetQuartz: '普通石英表 (+0.5 秒/天)',
    statusPass: '合格',
    statusFail: '不合格',
    toleranceRolex: '±2 秒/天',
    toleranceCosc: '-4 / +6 秒/天',
    toleranceMetas: '0 / +5 秒/天',
    toleranceStdMech: '±15 秒/天',
    toleranceQuartz: '±0.5 秒/天',
    toleranceHaq: '±10 秒/年',
  },
  seo: [
    { type: 'title', text: '手表精度与日差调整终极指南', level: 2 },
    { type: 'paragraph', html: '机械表是微型工程的奇迹，但与石英机芯不同，它们容易受到各种环境和物理因素的影响，从而影响其走时精度。监测并理解手表的每日误差对于维持其良好运行状态以及决定何时需要进行专业保养至关重要。' },
    { type: 'title', text: '机械表产生走时误差的主要原因', level: 2 },
    { type: 'paragraph', html: '有几个因素会影响手表每天的走时快慢。重力对摆轮的影响会根据手表的放置方位（位差）而有所不同。温度变化会导致游丝膨胀或收缩，从而改变振动频率。此外，主发条的满条程度（动力储存）也会影响摆幅，通常情况下，满弦手表的走时要比动力即将耗尽时更为稳定。' },
    { type: 'title', text: '理解累积误差：微小偏差是如何随时间放大的', level: 2 },
    { type: 'paragraph', html: '每天仅 +5 秒的日差听起来微不足道，但时间是累积的。在短短一周内，这就会累积到 35 秒。一个月内会增加到 2.5 分钟，而一年下来，您的手表误差将超过 30 分钟。这种累积误差凸显了为什么对于经常轮换佩戴手表并希望手表与原子基准时间同步的收藏家来说，精确追踪走时是必不可少的。' },
    { type: 'title', text: '如何手动追踪和计算手表精度', level: 2 },
    { type: 'paragraph', html: '若要在没有专业校表仪的情况下测量手表的日差，您可以使用“误差记录”功能。首先，将手表与可靠的原子时间源（如 UTC 或 NTP 时钟）同步并记下当前的初始误差（秒）。24 到 48 小时后，再次记录误差。将两次误差的差值除以间隔天数，即可得出您手表的平均每日走时误差。' },
    { type: 'title', text: '利用方位差进行自我微调', level: 2 },
    { type: 'paragraph', html: '许多机械手表可以通过不佩戴时的放置姿势（方位）来进行细微的自我调整。例如，夜间将手表正面朝上平放可能会让其走快几秒，而将表冠朝下放置可能会让其走慢几秒。通过记录这些放置方位并使用我们的计算器，您可以确定夜间应如何放置手表，以自然抵消其每日误差。' },
  ],
  faq: [
    {
      question: '机械表的正常每日走时误差是多少？',
      answer: '标准的机械表日差通常在 +/- 10 至 20 秒之间。获得 COSC 天文台认证的表款经过精密调校，日差控制在 -4 至 +6 秒/天以内，而高品质的石英机芯可以达到每日误差小于 +/- 0.5 秒。',
    },
    {
      question: '为什么手表的精度会因放置位置而改变？',
      answer: '当地表正面朝上、朝下、表冠朝上或朝下时，重力对摆轮和游丝的牵引力是不同的。这种方位差会导致手表摆幅和走时快慢产生细微的变化。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '记录初始状态',
      text: '将手表与可靠的原子钟同步，或记下当前的误差（秒）。'
    },
    {
      name: '佩戴或静置观察',
      text: '正常佩戴手表，或将其保持在单一位置至少 12 至 24 小时。'
    },
    {
      name: '记录第二状态',
      text: '再次记录手表的误差。系统将自动计算每日的走时误差（秒/天）。'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表精度追踪与记录器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '机械表的正常每日走时误差是多少？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '标准的机械表日差通常在 +/- 10 至 20 秒之间。获得 COSC 天文台认证的表款经过精密调校，日差控制在 -4 至 +6 秒/天以内，而高品质的石英机芯可以达到每日误差小于 +/- 0.5 秒。'
          }
        },
        {
          '@type': 'Question',
          'name': '为什么手表的精度会因放置位置而改变？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '当地表正面朝上、朝下、表冠朝上或朝下时，重力对摆轮和游丝的牵引力是不同的。这种方位差会导致手表摆幅 and 走时快慢产生细微的变化。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何手动测量手表精度',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '记录初始状态',
          'text': '将手表与可靠的原子钟同步，或记下当前的误差（秒）。'
        },
        {
          '@type': 'HowToStep',
          'name': '佩戴或静置观察',
          'text': '正常佩戴手表，或将其保持在单一位置至少 12 至 24 小时。'
        },
        {
          '@type': 'HowToStep',
          'name': '记录第二状态',
          'text': '再次记录手表的误差。系统将自动计算每日的走时误差（秒/天）。'
        }
      ]
    }
  ]
};

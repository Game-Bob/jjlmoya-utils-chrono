import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'watch-savings-planner',
  title: '手表购买储蓄计划器',
  description: '为下一次手表购买设定并追踪储蓄目标。可视化进展，计算时间线，保持动力。',
  ui: {
    title: '储蓄目标设置',
    addGoalTitle: '新建储蓄目标',
    goalNameLabel: '手表',
    goalNamePlaceholder: '例如 Rolex Submariner',
    targetPriceLabel: '目标价格',
    currentSavingsLabel: '已储蓄',
    monthlyLabel: '每月',
    addButton: '添加目标',
    cancelButton: '取消',
    goalsEmpty: '尚无储蓄目标',
    goalsEmptySub: '设定你的第一个手表目标，开始储蓄吧！',
    monthsToGoal: '距目标剩余时间',
    yearsToGoal: '距目标剩余年数',
    month: '个月',
    months: '个月',
    year: '年',
    totalSaved: '累计储蓄',
    totalGoals: '目标数',
    achieved: '已达成',
    percentLabel: '储蓄比例',
    deleteGoal: '删除',
    editGoal: '编辑',
    saveGoal: '保存',
    currency: 'CNY',
    summaryTitle: '摘要',
    goalAchieved: '已达成！',
    goalProgress: '进展',
    congratsTitle: '恭喜！',
    congratsDesc: '你已达成储蓄目标！',
    monthlyContribution: '每月存款',
    targetDate: '目标日期',
    adjustMonthly: '调整每月存款',
  },
  seo: [
    { type: 'title', text: '手表购买储蓄计划器 - 追踪你的下一只手表', level: 2 },
    { type: 'paragraph', html: '为手表储蓄是一段旅程。无论是<strong>经典款 Speedmaster</strong>、<strong>Submariner</strong>还是<strong>Grand Seiko</strong>，一个清晰的储蓄计划能将梦想变为时间表。这个工具将帮你可视化进展、调整每月储蓄额度，并精确看到何时能带着你的梦中情人走出精品店。' },
    { type: 'title', text: '为什么储蓄计划对手表收藏家很重要', level: 3 },
    { type: 'paragraph', html: '手表收藏是一场耐心的游戏。热门款的价格稳步上涨，冲动消费往往带来后悔。结构化的储蓄方式能让你保持纪律，避免财务压力，让最终的购买变得更有成就感。此外，每天追踪进展还能增强期待感，让开箱的瞬间更加美好。' },
    { type: 'title', text: '如何设定现实的手表储蓄目标', level: 3 },
    { type: 'paragraph', html: '从包含税费和运费在内的总价开始。然后除以每月能轻松剒出的金额。一个好的原则是将不超过<strong>可支配收入的10-15%</strong>用于手表储蓄。如果时间线太长，可以考虑将其拆分为更小的里程碑-或者探索同样风格家族中更具性价比的替代品。' },
    { type: 'title', text: '目标追踪的心理学', level: 3 },
    { type: 'paragraph', html: '可视化进展追踪会触发多巴胺释放-这也是让收藏如此令人满足的神经传导物质。每当你记录一笔新的储蓄并看到进展环被填满时，你都在强化这个习惯。这就是为什么小额、定期的储蓄往往比间歇性大额存款更有效的原因-仪式感本身就成为了收藏体验的一部分。' },
  ],
  faq: [
    {
      question: '每个月应该储蓄多少钱来买手表？',
      answer: '建议目标为可支配月收入的10-15%。关键在于持之以恒-即使每月100美元，一年也能累计1,200美元。根据你的时间线调整金额：短期目标需要更高的每月储蓄额度。',
    },
    {
      question: '应该专注储蓄一只手表，还是同时储蓄多只？',
      answer: '通常一只一只地储蓄更有效。专注能塑造动力。一旦达成第一个目标，信心和纪律会自然转移到下一个。不过，这个计划器支持多个目标，你可以比较各自的时间线。',
    },
    {
      question: '如果我储蓄期间手表涨价了怎么办？',
      answer: '好问题。每隔几个月检查一下当前市场价格，并更新你的目标。如果价格涨得快，可以考虑增加每月储蓄额度或缩短时间线，以锁定当前价格。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '设定目标',
      text: '输入手表名称及其总价，包括税费和运费。',
    },
    {
      name: '追踪储蓄',
      text: '记录你已经储蓄的金额和每月能剒出的金额。',
    },
    {
      name: '监控进展',
      text: '随着你更新储蓄，观看进展环逐渐被填满。可随时调整每月储蓄额度。',
    },
    {
      name: '庆祝',
      text: '当进展环达到100%，你就已达成目标。是时候买下那只手表了！',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '每个月应该储蓄多少钱来买手表？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '建议目标为可支配月收入的10-15%。关键在于持之以恒-即使每月100美元，一年也能累计1,200美元。',
          },
        },
        {
          '@type': 'Question',
          'name': '应该专注储蓄一只手表，还是同时储蓄多只？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '通常一只一只地储蓄更有效。专注能塑造动力。一旦达成第一个目标，将那种纪律带到下一个目标。',
          },
        },
        {
          '@type': 'Question',
          'name': '如果我储蓄期间手表涨价了怎么办？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '每隔几个月检查一下当前市场价格，并更新你的目标。如果价格上涨快，请考虑增加每月储蓄额度。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表购买储蓄计划器',
      'operatingSystem': '全部',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': '需要HTML5。需要JavaScript。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何储蓄购买手表',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '设定目标',
          'text': '输入手表名称及其总价，包括税费和运费。',
        },
        {
          '@type': 'HowToStep',
          'name': '追踪储蓄',
          'text': '记录你已经储蓄的金额和每月能剒出的金额。',
        },
        {
          '@type': 'HowToStep',
          'name': '监控进展',
          'text': '随着你更新储蓄，观看进展环逐渐被填满。',
        },
        {
          '@type': 'HowToStep',
          'name': '庆祝',
          'text': '当进展环达到100%，你就已达成目标。是时候买下那只手表了！',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '为什么机械表在高海拔地区走得更快？',
    answer: '机械表在高海拔地区走得更快的主要原因是空气密度降低。较稀薄的空气对摆轮产生的空气阻力更小，使其能够以稍大的振幅摆动。这种增加的振幅会导致手表走快 - 通常每升高1,000米，每天快2-6秒，具体取决于机芯设计。',
  },
  {
    question: '海拔高度也会影响石英表吗？',
    answer: '石英表由于没有摆动的机械摆轮，受海拔影响极小。然而，极端海拔变化可能因温度变化影响电池性能。与机械表相比，这种影响可以忽略不计。',
  },
  {
    question: '海拔变化会损坏我的手表吗？',
    answer: '单纯的海拔变化很少损坏机械表。但是，快速减压（如在飞机上）可能会导致某些手表的防水出现问题。旅行中的正常海拔变化完全在任何手表的设计公差范围内。',
  },
];

const howTo = [
  {
    name: '选择海拔高度',
    text: '上下拖动海拔滑块，模拟从海平面到8,000米的不同海拔高度。观察摆轮摆动和大气数据如何实时变化。',
  },
  {
    name: '读取偏差',
    text: '速率偏差显示区显示选定海拔高度下每天估计的快慢秒数。下方的偏差图表显示所有海拔高度的趋势。',
  },
  {
    name: '考虑影响因素',
    text: '观察空气密度如何随海拔升高而降低，同时速率偏差如何增加。温度和压力数据为环境变化提供了背景信息。',
  },
];

const title = '海拔精度估算器：海拔高度对机械表的影响';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'altitude-watch-accuracy-estimator',
  title,
  description: '探索海拔高度如何影响机械表的精度。从海平面到山顶调节海拔高度，实时查看摆轮摆动、速率偏差、空气密度、压力和温度的变化。',
  ui: {
    title: '海拔精度估算器',
    altitudeLabel: '海拔',
    altitudeUnit: '米',
    seaLevel: '海平面',
    deviationLabel: '速率偏差',
    deviationUnit: '秒/天',
    pressureLabel: '气压',
    pressureUnit: 'hPa',
    densityLabel: '空气密度',
    densityUnit: 'kg/m³',
    temperatureLabel: '温度',
    temperatureUnit: '°C',
    oscillationLabel: '摆轮',
    oscillationsPerSec: '次/秒',
    rateLabel: '速率',
    atmDataTitle: '大气条件',
    howItWorks: '工作原理',
    howItWorksDesc: '高海拔地区较低的空气密度减少了摆轮的阻力，增加了摆动幅度，导致手表走快。此工具基于标准大气模型估算速率偏差。',
    negligible: '可忽略',
    minor: '轻微',
    noticeable: '明显',
    significant: '显著',
    severe: '严重',
    step1: '拖动滑块模拟从海平面到8,000米的海拔高度。',
    step2: '观察摆轮动画和偏差指示器的实时响应。',
    step3: '查看大气数据以了解环境因素的影响。',
    tipTitle: '提示',
    tipContent: '效果因机芯而异：高振频机芯（36,000次/小时）通常比 vintage 低振频机芯（18,000次/小时）受影响更小。',
    deviationChart: '偏差 vs 海拔',
    altitudeM: '海拔（米）',
    secondsPerDay: '秒/天',
    particleLabel: '空气分子',
    airDensity: '空气密度',
  },
  seo: [
    { type: 'title', text: '机械表交互式海拔精度估算工具', level: 2 },
    { type: 'paragraph', html: '<strong>海拔精度估算器</strong>是一个交互式工具，可可视化海拔变化如何影响机械表的精度。通过模拟从海平面到8,000米的海拔高度，您可以查看由空气密度、压力和温度变化引起的估计速率偏差。' },
    { type: 'title', text: '海拔如何影响手表精度', level: 3 },
    { type: 'paragraph', html: '在较高海拔高度，<strong>空气密度降低</strong>，从而减少摆轮的空气阻力。这使得摆轮能够以更大的振幅摆动，导致手表略微走快。效果通常为每升高1,000米<strong>每天快2-6秒</strong>。' },
    { type: 'title', text: '不同海拔高度的速率偏差', level: 3 },
    {
      type: 'table', headers: ['海拔', '空气密度', '气压', '温度', '估计偏差'], rows: [
        ['海平面（0米）', '1.225 kg/m³', '1013 hPa', '15°C', '基准'],
        ['1,000米', '1.112 kg/m³', '898 hPa', '8.5°C', '+0.4 秒/天'],
        ['2,000米', '1.007 kg/m³', '795 hPa', '2°C', '+0.9 秒/天'],
        ['3,000米', '0.909 kg/m³', '701 hPa', '-4.5°C', '+1.5 秒/天'],
        ['4,000米', '0.819 kg/m³', '616 hPa', '-11°C', '+2.1 秒/天'],
        ['5,000米', '0.736 kg/m³', '540 hPa', '-17.5°C', '+2.8 秒/天'],
      ]
    },
    { type: 'title', text: '环境因素', level: 3 },
    { type: 'paragraph', html: '除了空气密度，高海拔地区的其他环境因素也会影响手表性能：<strong>温度</strong>影响润滑油粘度和发条弹性，<strong>压力变化</strong>可能影响表壳密封。然而，空气密度对摆轮阻力的影响是与海拔相关的速率变化的主导因素。' },
    { type: 'diagnostic', variant: 'info', title: '交互式模拟工具', icon: 'mdi:axis-arrow', badge: '钟表学', html: '此工具基于国际标准大气（ISA）模型和经验观测提供估计值。实际结果因机芯型号、状况和制造公差而异。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

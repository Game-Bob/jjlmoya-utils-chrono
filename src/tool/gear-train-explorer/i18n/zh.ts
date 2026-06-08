import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '什么是手表的齿轮系？',
    answer: '齿轮系是一系列相互啮合的齿轮，将动力从发条盒传递到擒纵机构。每对齿轮提供特定的减速比，将发条能量的快速释放减慢为受控的、定时的脉冲。',
  },
  {
    question: '为什么不同机芯有不同的齿轮比？',
    answer: '齿轮比由每个轮子和齿轴上的齿数决定。具有不同振频（例如28,800 VPH vs 36,000 VPH）的机芯具有不同的擒纵轮速度和齿轮配置，以在适应摆轮频率的同时保持精确计时。',
  },
  {
    question: '轮子和齿轴有什么区别？',
    answer: '在钟表学中，"轮子"是驱动下一个部件的有许多齿的大型齿轮。"齿轴"是被驱动的小型齿轮（通常6-12个齿）。轮子和齿轴一起形成一个改变转速和扭矩的齿轮对。',
  },
];

const howTo = [
  {
    name: '选择机芯',
    text: '在标准（28,800 VPH）、高振频（36,000 VPH El Primero）或复古（18,000 VPH）机芯之间进行选择。每种都有独特的齿轮比和振频。',
  },
  {
    name: '观察齿轮系',
    text: '观看动画齿轮以成比例的速度旋转。发条盒缓慢转动，而擒纵轮快速旋转。悬停在任何齿轮或数据卡上以获取详细信息。',
  },
  {
    name: '调整速度',
    text: '使用速度控制来减慢、加快或暂停动画。这有助于可视化每个齿轮如何为动力传输链做出贡献。',
  },
];

const title = '齿轮系探索者：交互式钟表学图解';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'gear-train-explorer',
  title,
  description: '通过动画齿轮系可视化，探索手表的机械核心。观看发条盒、中心轮、三轮、四轮、擒纵轮、擒纵叉和摆轮的运动。',
  ui: {
    title: '齿轮系探索者',
    barrelLabel: '发条盒',
    centerWheelLabel: '中心轮',
    thirdWheelLabel: '三轮',
    fourthWheelLabel: '四轮',
    escapeWheelLabel: '擒纵轮',
    palletForkLabel: '擒纵叉',
    balanceWheelLabel: '摆轮',
    rpmLabel: 'rpm',
    teethLabel: '齿',
    gearRatioLabel: '比率',
    powerFlowLabel: '动力流',
    movementLabel: '机芯',
    speedLabel: '速度',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: '已暂停',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: '选择机芯型号以查看其独特的齿轮比和振频。',
    step2: '悬停在任何齿轮或数据卡上以突出其在动力流中的位置。',
    step3: '调整动画速度以研究每个轮子如何通过齿轮系传递动力。',
    tipTitle: '小贴士',
    tipContent: '齿轮系将发条的快速能量释放转化为受控的振荡。典型的发条盒每7-8小时旋转一次，而擒纵轮以32 rpm的速度旋转（在28,800 VPH时）-超过15,000:1的减速比。',
  },
  seo: [
    { type: 'title', text: '交互式齿轮系探索者', level: 2 },
    { type: 'paragraph', html: '<strong>齿轮系</strong>是每个机械表的机械骨干。这个交互式工具可视化动力如何从发条盒通过中心轮、三轮、四轮和擒纵轮流向擒纵叉和摆轮。观看每个齿轮以成比例的速度旋转，并了解齿轮比如何决定计时。' },
    { type: 'title', text: '手表齿轮系的工作原理', level: 3 },
    { type: 'paragraph', html: '手表的齿轮系由一系列<strong>轮子</strong>（大齿轮）和<strong>齿轴</strong>（小齿轮）组成，在传递动力的同时降低速度。<strong>发条盒</strong>容纳主发条并缓慢旋转，驱动每小时旋转一次（用于分针）的<strong>中心轮</strong>。<strong>三轮</strong>和<strong>四轮</strong>（秒轮）进一步提高旋转速度。最后，<strong>擒纵轮</strong>以受控的滴答声将动力释放给<strong>擒纵叉</strong>，擒纵叉交替锁定和解锁擒纵轮，向<strong>摆轮</strong>发送脉冲。摆轮以精确的频率振荡-通常为4 Hz（每小时28,800次振动）-调节手表的速率。' },
    { type: 'title', text: '齿轮比与动力传输', level: 3 },
    {
      type: 'table', headers: ['组件', '典型齿数', 'rpm (28,800 VPH)', '前级比率'], rows: [
        ['发条盒', '72', '0.002 (1转/8小时)', '-'],
        ['中心轮', '60', '0.0167 (1转/小时)', '~7.2:1'],
        ['三轮', '50', '0.125 (1转/8分钟)', '~5:1'],
        ['四轮', '60', '1 (1转/分钟)', '6:1'],
        ['擒纵轮', '15', '32', '~1.875:1'],
      ]
    },
    { type: 'title', text: '机芯比较', level: 3 },
    {
      type: 'table', headers: ['机芯', '振频', '摆轮频率', '擒纵轮 rpm', '典型精度'], rows: [
        ['复古 (18,000 VPH)', '18,000 bph', '2.5 Hz', '20 rpm', '±15-30 秒/天'],
        ['标准 (28,800 VPH)', '28,800 bph', '4 Hz', '32 rpm', '±5-15 秒/天'],
        ['高振频 (36,000 VPH)', '36,000 bph', '5 Hz', '40 rpm', '±3-8 秒/天'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '交互式学习工具', icon: 'mdi:cog-clockwise', badge: '钟表学', html: '此工具使用代表常见瑞士擒纵叉机芯的近似齿轮比。实际比率因型号而异。使用机芯预设来比较不同振频如何影响齿轮系动力学。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

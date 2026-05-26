import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '什么是陀飞轮？',
    answer: '陀飞轮是一个旋转的框架，包含机械手表的擒纵机构（摆轮、擒纵叉和擒纵轮）。它持续旋转——通常每分钟一圈——以平均重力造成的位置误差，提高精度。',
  },
  {
    question: '经典陀飞轮和飞行陀飞轮有什么区别？',
    answer: '经典陀飞轮由上桥和下桥支撑，而飞行陀飞轮从底部悬臂支撑，没有可见的上部支撑。飞行陀飞轮提供无阻碍的旋转擒纵机构视野，制造上被认为是美学要求更高的。',
  },
  {
    question: '陀飞轮真的能提高精度吗？',
    answer: '在现代腕表中，精度优势微乎其微，因为位置误差已经得到了很好的补偿。然而，在怀表中（宝玑于1801年为此发明了陀飞轮），持续旋转消除了垂直位置之间的速率差异。如今，陀飞轮主要是高级制表艺术的展示。',
  },
];

const howTo = [
  {
    name: '更改陀飞轮类型',
    text: '在经典和飞行陀飞轮之间切换，查看结构差异。飞行陀飞轮没有上桥，露出完整的框架。',
  },
  {
    name: '调整振频',
    text: '尝试不同的振频（18k、28.8k、36k VPH），查看摆轮速度和擒纵轮旋转如何变化。',
  },
  {
    name: '控制速度',
    text: '使用速度控制放慢速度观察擒纵机构 intricate 的舞蹈，或加快速度查看完整的框架旋转周期。',
  },
];

const title = '陀飞轮：旋转擒纵机构的艺术';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualizer',
  title,
  description: '体验陀飞轮迷人的艺术——容纳擒纵机构的旋转框架。观看摆轮摆动、游丝呼吸、框架在优雅的机械芭蕾中旋转。',
  ui: {
    title: '陀飞轮可视化器',
    typeLabel: '类型',
    typeClassic: '经典',
    typeFlying: '飞行',
    speedLabel: '速度',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: '已暂停',
    beatRateLabel: '振频',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: '框架',
    showLabelsLabel: '标签',
    step1: '在经典和飞行陀飞轮之间切换，比较它们的结构。',
    step2: '调整振频，查看它如何影响擒纵机构的节奏。',
    step3: '使用速度控制，以任何速度观察精确的机械之舞。',
    tipTitle: '小贴士',
    tipContent: '宝玑于1801年发明了陀飞轮。"陀飞轮"在法语中意为"旋风"，描述了旋转框架运动时的外观。',
    balanceLabel: '摆轮',
    escapeLabel: '擒纵',
    palletLabel: '擒纵叉',
    cageLabel: '框架',
  },
  seo: [
    { type: 'title', text: '陀飞轮可视化器：动画擒纵艺术', level: 2 },
    { type: 'paragraph', html: '<strong>陀飞轮</strong>是高级制表中最迷人的复杂功能之一。这个交互式可视化器通过摆轮、游丝、擒纵叉、擒纵轮和标志性旋转框架的详细动画渲染，使旋转的擒纵机构栩栩如生。探索宝玑杰作的机械诗意。' },
    { type: 'title', text: '陀飞轮的工作原理', level: 3 },
    { type: 'paragraph', html: '陀飞轮将整个擒纵机构 —— <strong>摆轮、游丝、擒纵叉和擒纵轮</strong> —— 容纳在一个旋转框架内。框架通常每分钟完成一次旋转，持续改变擒纵机构相对于重力的位置。这平均了位置性的计时误差，这一概念在阿伯拉罕-路易·宝玑于1801年获得专利时是革命性的。<strong>摆轮</strong>以手表的振频（通常为4 Hz / 28,800 VPH）摆动，而<strong>擒纵轮</strong>每次摆动前进一个齿，产生特有的滴答运动。' },
    { type: 'title', text: '经典 vs 飞行陀飞轮', level: 3 },
    {
      type: 'table', headers: ['特点', '经典陀飞轮', '飞行陀飞轮'], rows: [
        ['上部支撑', '可见桥板', '无（悬臂）'],
        ['可视性', '部分（桥板可见）', '完全（无遮挡）'],
        ['难度', '高', '极高'],
        ['发明', '1801年（宝玑）', '1920年代（阿尔弗雷德·海尔维格）'],
        ['常见于', '传统品牌', '现代独立品牌'],
      ]
    },
    { type: 'title', text: '振频比较', level: 3 },
    {
      type: 'table', headers: ['频率（vph）', '频率', '擒纵轮 rpm', '振动/秒', '典型用途'], rows: [
        ['18,000', '2.5 Hz', '20 rpm', '5', '复古怀表'],
        ['28,800', '4 Hz', '32 rpm', '8', '现代标准（ETA、劳力士）'],
        ['36,000', '5 Hz', '40 rpm', '10', '高频（真力时）'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '运动中的机械艺术', icon: 'mdi:rotate-orbit', badge: '钟表学', html: '此可视化器是陀飞轮擒纵机构的艺术诠释。框架旋转、摆轮摆动、游丝呼吸、擒纵叉摆动和擒纵轮步进均根据真实的机械关系同步。使用控件探索这一微机械工程的杰作。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

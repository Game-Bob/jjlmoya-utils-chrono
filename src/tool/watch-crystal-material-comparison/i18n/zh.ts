import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: '哪种表镜最耐刮？', answer: '蓝宝石表镜最耐刮，莫氏硬度为9 - 只有钻石更硬。矿物玻璃(5)中等，树脂玻璃(2-3)容易刮花但可以抛光。' },
  { question: '刮花的树脂玻璃表镜可以修复吗？', answer: '可以，树脂玻璃的划痕可以用Polywatch在几分钟内抛光。矿物和蓝宝石表镜无法抛光，必须更换。' },
  { question: '潜水表最适合哪种表镜？', answer: '蓝宝石是潜水表的标准选择，因其耐刮性和耐用性。树脂玻璃不建议用于潜水。' },
];
const howTo = [
  { name: '选择表镜', text: '点击左侧的表镜，右侧将显示其统计卡片。' },
  { name: '比较两种表镜', text: '从列表中拖拽一个表镜放到另一个上，即可并排比较。' },
  { name: '关闭比较', text: '点击"Close Comparison"按钮返回单个表镜视图。' },
];
const title = '表镜材料对比：树脂玻璃 vs 矿物玻璃 vs 蓝宝石';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'watch-crystal-material-comparison',
  title,
  description: '通过交互式统计卡片对比树脂玻璃、矿物玻璃和蓝宝石表镜。一目了然查看硬度、清晰度、抗冲击性、耐刮性和耐用性。',
  ui: {
    title: '表镜对比', subTitle: 'Interactive Crystal Stats', hardness: '硬度', clarity: '清晰度',
    impactResistance: '抗冲击', scratchResistance: '耐刮', durability: '耐用性', priceRange: '价格',
    step1: '点击左侧的表镜。', step2: '拖拽一个到另一个上进行比较。',
    step3: '点击关闭。', tipTitle: '提示',
    tipContent: '综合评分是所有统计数据的平均值。越高不一定越好 - 树脂玻璃的抗冲击性最好。',
    dragHint: '拖拽', dragSub: '进行比较',
  },
  seo: [
    { type: 'title', text: '表镜材料对比：树脂玻璃 vs 矿物玻璃 vs 蓝宝石', level: 2 },
    { type: 'paragraph', html: '通过交互式统计卡片对比<strong>树脂玻璃、矿物玻璃和蓝宝石</strong>表镜。' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

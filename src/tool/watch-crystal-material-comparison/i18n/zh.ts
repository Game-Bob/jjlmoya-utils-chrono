import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "哪种手表表镜最抗刮？",
    "answer": "莫氏硬度为9的蓝宝石水晶表镜最抗刮，硬度仅次于钻石。矿物玻璃为5，亚克力（2-3）易刮伤但可用Polywatch数分钟内打磨光亮。"
  },
  {
    "question": "刮伤的亚克力表镜可以修复吗？",
    "answer": "是的，亚克力（Hesalite）表镜可用打磨膏轻松抛光修复。矿物玻璃和蓝宝石表镜无法打磨，受损需直接更换。"
  },
  {
    "question": "蓝宝石表镜会防摔碎吗？",
    "answer": "不会。蓝宝石虽然极度抗刮，但受强烈撞击时比亚克力更易碎裂。亚克力在抗冲击方面表现最好。"
  },
  {
    "question": "潜水表最适合哪种表镜？",
    "answer": "蓝宝石表镜是潜水表的标准配置，因其极高抗刮性和抗水压能力。"
  }
];
const howTo = [
  {
    "name": "选择表镜类型",
    "text": "点击左侧表镜查看参数卡片。"
  },
  {
    "name": "对比两种表镜",
    "text": "拖拽一个表镜到另一个上方进行横向对比。"
  },
  {
    "name": "关闭对比",
    "text": "点击关闭对比返回单项视图。"
  }
];
const title = '手表镜面材质对比 亚克力 vs 矿物强化玻璃 vs 蓝宝石水晶';

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
  {
    "type": "title",
    "text": "亚克力 vs 矿物玻璃 vs 蓝宝石表镜 深度对比指南",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "选择合适的手表<strong>表镜材质</strong>至关重要。本指南全面对比<strong>亚克力（Hesalite）、矿物强化玻璃和蓝宝石水晶</strong>的硬度、透光度、抗震性及价格。"
  },
  {
    "type": "title",
    "text": "亚克力表镜（Plexiglas / 有机玻璃）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "自1930年代起使用的经典材质。质地较软（2-3 Mohs），易刮伤但韧性极佳抗摔。著名代表作：欧米茄超霸登月表。"
  },
  {
    "type": "title",
    "text": "矿物强化玻璃（Mineral Glass）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "经过热处理的二氧化硅玻璃，莫氏硬度5。广泛应用于精工、西铁城等中端实用手表。"
  },
  {
    "type": "title",
    "text": "蓝宝石水晶表镜（Synthetic Sapphire）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "莫氏硬度高达9的顶尖表镜材质，几乎无法刮伤，透光率极高，是奢华手表的标准配置。"
  },
  {
    "type": "title",
    "text": "表镜材质参数对比表",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "属性",
      "亚克力",
      "矿物玻璃",
      "蓝宝石水晶"
    ],
    "rows": [
      [
        "莫氏硬度",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "透光度",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "抗冲击性",
        "5/10 (最佳)",
        "3/10",
        "2/10"
      ],
      [
        "防刮性",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "抛光修复",
        "支持",
        "不支持（更换）",
        "不支持（更换）"
      ],
      [
        "价格区间",
        "50 - 200 元",
        "100 - 400 元",
        "300 - 1500+ 元"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "选购建议",
    "icon": "mdi:diamond-stone",
    "badge": "参考",
    "html": "<strong>日常通勤佩戴</strong>首选抗划伤的蓝宝石表镜；若追求<strong>复古质感</strong>，亚克力是不二之选。"
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

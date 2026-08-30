import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeter-calculator',
  title: '测距刻度计算器：如何使用手表测距仪',
  description: '学习如何使用手表测距刻度圈（Telemeter Bezel）。根据空气温度计算闪电与雷声之间的距离。',
  ui: {
    title: '测距刻度计算器',
    triggerFlash: '触发闪光',
    triggerSound: '触发声音',
    stop: '停止',
    reset: '复位',
    settings: '设置',
    unitSystem: '单位系统',
    metric: '公制 (公里)',
    imperial: '英制 (英里)',
    temperature: '空气温度',
    speedOfSound: '声速',
    distanceResult: '测量距离',
    elapsedTime: '流逝时间',
    historyTitle: '测量历史记录',
    noHistory: '尚无测量记录。请在上方开始计算！',
    sec: '秒',
    km: '公里',
    m: '米',
    mi: '英里',
    ft: '英尺',
    step1: '看到闪光（例如闪电）时，立即点击2点钟方向的按键或"触发闪光"。',
    step2: '听到声音（例如雷声）时，再次点击该按键或"触发声音"。',
    step3: '读取计时秒针在测距刻度圈上指向的数值，即为距离。',
    tipTitle: '专业提示',
    tipContent: '热空气传导声音的速度比冷空气快。调节环境温度可确保距离计算符合您所在环境的物理声学规律。',
  },
  seo: [
  {
    "type": "title",
    "text": "什么是手表测距表圈（Telemeter Bezel）？",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "测距计是印在计时码表表盘或表圈上的刻度，用于利用光速与声速差计算距离。"
  },
  {
    "type": "title",
    "text": "测距刻度使用方法",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "步骤 1: 启动",
        "definition": "看到闪电或火光瞬间启动计时码表。"
      },
      {
        "term": "步骤 2: 停止",
        "definition": "听到雷声或轰鸣声瞬间停止计时码表。"
      },
      {
        "term": "步骤 3: 读数",
        "definition": "大秒针在测距表圈上指向的数字即为距离（公里或英里）。"
      }
    ]
  },
  {
    "type": "title",
    "text": "测距计算的物理原理",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "光速约为每秒30万公里（瞬间到达），而20°C空气中的声速约为每秒343米。"
  },
  {
    "type": "title",
    "text": "测距计 vs 测速计对比",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "<strong>测速计</strong>测速度，<strong>测距计</strong>测距离。"
  },
  {
    "type": "title",
    "text": "时间与距离对照表",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "经过时间",
      "距离 (公里)",
      "距离 (英里)",
      "声速"
    ],
    "rows": [
      [
        "1.0 秒",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 秒",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 秒",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 秒",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 秒",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 秒",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 秒",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "温度对声速的影响",
    "icon": "mdi:information",
    "badge": "精度",
    "html": "空气温度越高，声音传播速度越快。"
  }
],
  faq: [
  {
    "question": "手表测距计（Telemeter）刻度有什么用？",
    "answer": "它用于通过声光时差计算佩戴者与可见且发声事件（如闪电与雷鸣）之间的距离。"
  },
  {
    "question": "如何用测距计手表计算闪电距离？",
    "answer": "看到闪电瞬间启动计时码表，听到雷声瞬间停止计时，大秒针指向的刻度即为距离。"
  },
  {
    "question": "测速计（Tachymeter）与测距计（Telemeter）有何区别？",
    "answer": "测速计基于已知距离测量速度，测距计基于时间与声速测量距离。"
  },
  {
    "question": "手表测距刻度的精度如何？",
    "answer": "刻度按20°C标准声速（343米/秒）预设，温度变化会产生微小误差。"
  },
  {
    "question": "可以在水下使用测距计吗？",
    "answer": "不能，因为声音在水中的传播速度是空气中的4倍以上。"
  }
],
  bibliography,
  howTo: [
  {
    "name": "设置单位与温度",
    "text": "选择公制或英制单位，并设定当地气温。"
  },
  {
    "name": "见光启动",
    "text": "看到闪电时点击闪电启动按钮。"
  },
  {
    "name": "听声停止",
    "text": "听到雷声时点击声音停止按钮。"
  },
  {
    "name": "读取距离",
    "text": "在结果面板或表圈刻度上读取计算出的距离。"
  }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

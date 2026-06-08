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
    { type: 'title', text: '什么是手表的测距刻度圈（Telemeter）？', level: 2 },
    { type: 'paragraph', html: '测距仪是印在计时码表表盘或表圈上的刻度。它使佩戴者能够计算出与某个既可见又可闻的遥远事件（如闪电、烟花或爆炸）之间的近似距离。' },
  ],
  faq: [
    {
      question: '如何使用手表的测距刻度？',
      answer: '当您看到事件（例如闪电）时启动计时功能。当您听到声音（例如雷声）时停止计时。秒针将指向刻度圈上的距离数值。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '配置单位与环境参数',
      text: '选择您偏好的单位系统，并设置您当前所在位置的空气温度。',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

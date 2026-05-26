import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '太阳时和恒星时有什么区别？',
    answer: '太阳时基于太阳相对于本地子午线的位置（耗时24小时），而恒星时基于地球相对于遥远背景恒星的旋转（耗时23小时56分4.09秒）。',
  },
  {
    question: '为什么恒星日比太阳日短？',
    answer: '当地球绕轴自转时，它也沿绕太阳的轨道运行。为了再次面向太阳，地球必须旋转略多于360度，与单纯的恒星对齐旋转相比，每天增加了约3分56秒。',
  },
  {
    question: '经度如何影响本地恒星时？',
    answer: '本地恒星时通过将观测者的经度（转换为小时：每小时15度）添加到格林威治平均恒星时（GMST）来计算。每向东1度，本地恒星时增加4分钟。',
  },
];

const howTo = [
  {
    name: '设置参考经度',
    text: '将滑块调整到您的本地经度。这将使24小时恒星时标与本地子午线对齐。',
  },
  {
    name: '观察太阳和恒星指针',
    text: '查看表盘：标准太阳指针在内部12小时表盘上显示UTC时间，而金色指针和星体在外部24小时刻度上显示恒星时。',
  },
  {
    name: '加速天体速度',
    text: '点击200倍或5000倍速度倍增器，观察星空背景球的旋转和漂移的实时累积。',
  },
];

const title = '天文恒星时追踪器：本地恒星时钟';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'sidereal-time-tracker',
  title,
  description: '通过艺术化的天文星盘表盘和实时恒星漂移模拟器，追踪格林威治平均恒星时（GMST）和本地恒星时（LST）。',
  ui: {
    title: '恒星时追踪器',
    longitudeLabel: '观测者经度',
    solarTimeLabel: '协调世界时（UTC）',
    siderealTimeLabel: '本地恒星时（LST）',
    differenceLabel: '恒星-太阳漂移',
    utcLabel: 'UTC日期/时间',
    speedLabel: '天体速度',
    speedNormal: '1倍（实时）',
    speedFast: '200倍（延时摄影）',
    speedVeryFast: '5000倍（漂移）',
    audioToggleLabel: '宇宙钟声',
    step1: '调整本地经度，实时查看本地恒星时的变化。',
    step2: '切换速度倍增器，观察标准太阳指针和恒星天球的漂移。',
    step3: '启用宇宙钟声，聆听标准滴答声与天文小时报时的区别。',
    tipTitle: '天文漂移',
    tipContent: '由于地球绕太阳公转，标准太阳时钟每天比恒星时慢3分56秒，在整整一年的时间里恰好漂移24小时。',
    useLocationBtn: '使用当前位置',
    hemisphereLabel: '恒星半球',
    hemisphereNorth: '北（大熊座）',
    hemisphereSouth: '南（南十字座）',
    longitudeFormatLabel: '经度格式',
    longitudeFormatDecimal: '十进制度',
    longitudeFormatDMS: '度/分',
  },
  seo: [
    { type: 'title', text: '什么是恒星时？', level: 2 },
    { type: 'paragraph', html: '恒星时是天文学家用来定位天体的时间测量系统。一个恒星日大约为23小时56分4.09秒。这是地球相对于春分点或遥远恒星（而非太阳）绕地轴完成一次完整自转所需的时间。' },
    { type: 'title', text: '太阳日 vs 恒星日', level: 3 },
    { type: 'paragraph', html: '太阳日测量太阳连续两次经过本地子午线之间的时间。由于地球每天绕太阳运行约1/365的轨道，它必须旋转略多于360度才能重新与太阳对齐。恒星日是相对于恒星的真实360度旋转，因此短了3分56秒。' },
    { type: 'title', text: '为什么天文学家和制表师关注它', level: 3 },
    { type: 'paragraph', html: '对天文学家来说，在相同的恒星时，恒星在天空中的位置始终相同。为了追踪恒星，望远镜支架必须每天准确旋转一次恒星日。高端手表品牌（如百达翡丽、江诗丹顿和万国表）制造带有恒星齿轮系的超复杂天文腕表，可直接在手腕上追踪LST。' },
    { type: 'title', text: '恒星 vs 太阳漂移参考表', level: 3 },
    {
      type: 'table', headers: ['经过天数', '恒星时领先', '旋转角度偏移', '星座漂移'], rows: [
        ['1天', '3分56秒', '0.986°', '轻微西移'],
        ['15天', '59分0秒', '14.79°', '半个星座偏移'],
        ['30天', '1小时58分', '29.58°', '一个完整星座偏移'],
        ['90天', '5小时54分', '88.74°', '一个完整季节偏移'],
        ['180天', '11小时48分', '177.48°', '午夜可见相反星座'],
        ['365天', '24小时0分', '360.00°', '完整周期，恒星对齐重置'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '基于J2000历元计算', icon: 'mdi:creation-outline', badge: '计算', html: '本地恒星时通过将UTC时间转换为儒略日（自-4712年以来的天数），找到格林威治平均恒星时，并应用您的经度（每小时15度）来计算。我们的工具使用高精度IAU J2000线性模型进行实时跟踪。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);

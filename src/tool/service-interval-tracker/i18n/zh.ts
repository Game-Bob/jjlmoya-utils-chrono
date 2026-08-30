import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'service-interval-tracker',
  title: '手表保养周期与维护记录工具',
  description: '追踪与管理您手表收藏的保养周期。一目了然得知每只手表何时需要进行洗油与维护。',
  ui: {
    title: '保养记录器',
    addWatch: '添加腕表',
    editWatch: '编辑腕表',
    cancel: '取消',
    save: '保存',
    deleteWatch: '删除',
    confirmDelete: '确定要从收藏中删除这只腕表吗？',
    emptyTitle: '您的收藏为空',
    emptyDesc: '记录您手表的洗油和保养时间，避免因机芯缺油造成齿轮磨损。',
    emptyAction: '添加您的第一只表',
    healthy: '状态良好',
    due: '临近保养',
    overdue: '逾期未保养',
    nameLabel: '腕表名称',
    namePlaceholder: '例如：劳力士水鬼',
    movementLabel: '机芯类型',
    movementAuto: '自动机械',
    movementManual: '手动机械',
    movementQuartz: '石英',
    movementKinetic: '人动电能',
    dateLabel: '上次保养日期',
    neverServiced: '全新或从未保养过',
    lastServiceLabel: '上次保养',
    nextServiceLabel: '下次保养',
    serviced: '已完成保养',
    newWatch: '全新',
    years: '年',
    collectionHealth: '收藏整体状况',
  },
  seo: [
  {
    "type": "title",
    "text": "手表保养周期追踪工具",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "机械表是精密的微型机械，<strong>定期保养</strong>是保持其精准与价值的关键。"
  },
  {
    "type": "title",
    "text": "各机芯类型建议保养周期",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "自动机械 (3-5年)",
        "definition": "自动陀与上链齿轮持续运转，需要定期补充润滑油。"
      },
      {
        "term": "手动机械 (4-5年)",
        "definition": "零件较自动表少，但每日上链会使大钢轮与吉齿轮磨损。"
      },
      {
        "term": "石英机芯 (5-10年)",
        "definition": "机械磨损极小，但需定期更换电池与防水胶圈。"
      },
      {
        "term": "光动能 / 人动电能 (5-8年)",
        "definition": "长效蓄电池电容有一定的使用寿命限制。"
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "需要保养的信号",
    "icon": "mdi:information",
    "badge": "注意",
    "html": "若手表每天误差超过15-20秒或表镜内出现雾气，请立即送修。"
  },
  {
    "type": "title",
    "text": "管理您的手表收藏",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "录入您收藏的每块手表，自动计算并管理下一次保养日期。"
  },
  {
    "type": "paragraph",
    "html": "记录换电池、检查防水圈以及机械机芯清洗和加油的日期，可以比较每块手表的状态，并及时发现走时变化或其他异常。"
  },
  {
    "type": "paragraph",
    "html": "如果出现走时明显变化、异响或表镜起雾，应尽快咨询专业维修店，并在维修后更新保养日期和相关记录，避免继续佩戴造成更大损伤，请及时处理。"
  }
],
  faq: [
  {
    "question": "自动机械表多久需要保养一次？",
    "answer": "大多数手表品牌建议每3至5年保养一次。实际使用中，许多手表可稳定运行5至7年。"
  },
  {
    "question": "石英表也需要定期保养吗？",
    "answer": "是的，建议每2-3年更换电池以防电池漏液，每5-10年全面保养并更换防水圈。"
  },
  {
    "question": "如果一直不保养手表会怎样？",
    "answer": "润滑油干涸会导致机芯零件磨损加剧，最终引发高昂的维修费用。"
  },
  {
    "question": "手动上链手表现象会过链吗？",
    "answer": "现代手动上链表在上满链时有明显的阻挡感，感到阻力时请勿发力强拧。"
  },
  {
    "question": "日常佩戴与偶尔佩戴保养周期不同吗？",
    "answer": "是的，日常佩戴的自动表零件磨损较快，建议每3年保养；偶尔佩戴的可延长至5年。"
  }
],
  bibliography,
  howTo: [
  {
    "name": "添加手表",
    "text": "输入手表名称、机芯类型及上次保养日期。"
  },
  {
    "name": "查看仪表盘",
    "text": "每块手表显示保养进度条与颜色状态提示。"
  },
  {
    "name": "保养后更新",
    "text": "保养完成后更新日期以重置保养周期。"
  }
],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '机械表一般几年需要进行一次保养洗油？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数手表品牌建议每隔3至5年进行一次机芯完全保养。在实际使用中，许多腕表在运行5-7年之后才需要重新清洗注油。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表保养周期与维护记录工具',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '手表保养周期与维护记录工具',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '添加手表',
          'text': '输入手表名称、选择机芯类别以及上次保养时间。'
        }
      ]
    }
  ]
};

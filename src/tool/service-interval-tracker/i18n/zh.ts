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
    { type: 'title', text: '手表洗油与保养周期管理：延长爱表使用寿命的秘诀', level: 2 },
  ],
  faq: [
    {
      question: '机械表一般几年需要进行一次保养洗油？',
      answer: '大多数手表品牌建议每隔3至5年进行一次机芯完全保养。在实际使用中，许多腕表在运行5-7年之后才需要重新清洗注油。如果误差明显变大，建议提前送保养。',
    }
  ],
  bibliography,
  howTo: [
    { name: '添加手表', text: '输入手表名称、选择机芯类别以及上次保养时间即可自动计算下次保养的截至日期。' }
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

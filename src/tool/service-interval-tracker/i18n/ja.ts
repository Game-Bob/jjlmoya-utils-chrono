import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'service-interval-tracker',
  title: '腕時計オーバーホール・定期メンテナンス管理ツール',
  description: 'お持ちの腕時計コレクションのメンテナンス周期を記録・管理。オーバーホールの推奨時期を一目で把握できます。',
  ui: {
    title: 'メンテナンス管理',
    addWatch: '時計を追加',
    editWatch: '時計を編集',
    cancel: 'キャンセル',
    save: '保存',
    deleteWatch: '削除',
    confirmDelete: 'この時計をコレクションから削除しますか？',
    emptyTitle: '登録されている時計がありません',
    emptyDesc: '腕時計のメンテナンス周期を記録して、オーバーホールの時期を逃さないようにしましょう。',
    emptyAction: '最初の時計を登録する',
    healthy: '良好',
    due: '要メンテ',
    overdue: '期限超過',
    nameLabel: '時計の名称',
    namePlaceholder: '例: ロレックス サブマリーナー',
    movementLabel: 'ムーブメントの種類',
    movementAuto: '自動巻き',
    movementManual: '手巻き',
    movementQuartz: 'クォーツ',
    movementKinetic: 'キネティック',
    dateLabel: '前回のメンテナンス日',
    neverServiced: '新品またはメンテナンス未実施',
    lastServiceLabel: '前回のメンテナンス',
    nextServiceLabel: '次回のメンテナンス',
    serviced: 'メンテナンス実施日',
    newWatch: '新品',
    years: '年',
    collectionHealth: 'コレクション全体の健全性',
  },
  seo: [
    { type: 'title', text: '腕時計のオーバーホール周期管理ツール：大切なコレクションを長持ちさせるために', level: 2 },
  ],
  faq: [
    {
      question: '自動巻き時計 of オーバーホールはどのくらいの頻度で行うべきですか？',
      answer: '多くのメーカーは3〜5年ごとのオーバーホールを推奨しています。実際には5〜7年程度問題なく動作する場合もありますが、摩耗や精度低下を防ぐために定期的な実施をおすすめします。',
    }
  ],
  bibliography,
  howTo: [
    { name: '時計の追加', text: '時計のモデル名、ムーブメントの種類、前回のメンテナンス日を入力すると、次回の推奨オーバーホール時期が自動計算されます。' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '自動巻き時計 of オーバーホールはどのくらいの頻度で行うべきですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '多くのメーカーは3〜5年ごとのオーバーホールを推奨しています。実際には5〜7年程度問題なく動作する場合もあります。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '腕時計オーバーホール・定期メンテナンス管理ツール',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '腕時計オーバーホール・定期メンテナンス管理ツール',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '時計の追加',
          'text': '時計のモデル名、ムーブメントの種類、前回のメンテナンス日を入力します。'
        }
      ]
    }
  ]
};

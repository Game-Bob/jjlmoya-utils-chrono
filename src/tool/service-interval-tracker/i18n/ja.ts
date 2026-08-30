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
  {
    "type": "title",
    "text": "腕時計メンテナンス周期トラッカー",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "機械式時計の性能を長持ちさせるには<strong>定期的なオーバーホール</strong>が不可欠です。"
  },
  {
    "type": "title",
    "text": "ムーブメント別推奨オーバーホール周期",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "自動巻き (3-5年)",
        "definition": "ローターと自動巻き機構が常に稼働するため油切れに注意が必要です。"
      },
      {
        "term": "手巻き (4-5年)",
        "definition": "自動巻きよりパーツ数が少ないですが、毎日のゼンマイ巻き上げによる摩耗があります。"
      },
      {
        "term": "クォーツ (5-10年)",
        "definition": "機械的摩耗は少ないですが、パッキン劣化や電池交換が必要です。"
      },
      {
        "term": "キネティック / ソーラー (5-8年)",
        "definition": "二次電池（キャパシタ）の寿命に応じた交換が必要です。"
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "オーバーホールが必要なサイン",
    "icon": "mdi:information",
    "badge": "注意",
    "html": "日差が15〜20秒以上大きくなったり、ガラス内に結露が見られたら早めの点検が必要です。"
  },
  {
    "type": "title",
    "text": "コレクションを管理",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "手持ちの時計を登録して、次のオーバーホール時期を自動計算・管理できます。"
  },
  {
    "type": "paragraph",
    "html": "電池交換、パッキンの確認、機械式ムーブメントの洗浄や注油など、実施した内容と日付を記録しておくと、時計ごとの状態を比較しやすくなります。"
  },
  {
    "type": "paragraph",
    "html": "精度の変化や異音、結露などの症状も一緒に記録して、必要なときは専門の時計店に相談してください。"
  }
],
  faq: [
  {
    "question": "自動巻き時計のオーバーホール頻度はどのくらいですか？",
    "answer": "メーカーは3〜5年ごとのオーバーホールを推奨しています。実際には5〜7年問題なく動くことも多いです。"
  },
  {
    "question": "クォーツ時計も定期的なメンテナンスが必要ですか？",
    "answer": "はい、液漏れを防ぐため2〜3年ごとの電池交換と、5〜10年ごとのパッキン交換・オーバーホールが推奨されます。"
  },
  {
    "question": "メンテナンスを怠るとどうなりますか？",
    "answer": "潤滑油が乾いて摩擦が増え、歯車や軸受けの摩耗が進行し、高額な修理が必要になります。"
  },
  {
    "question": "手巻き時計を巻きすぎるリスクはありますか？",
    "answer": "手巻き時計は巻き止まりの感触があります。手応えを感じたらそれ以上強く巻かないでください。"
  },
  {
    "question": "毎日着用する場合とたまに着用する場合で頻度は変わりますか？",
    "answer": "はい、毎日着用する時計は摩耗が早いため3年ごと、たまに着用する時計は5年ごとが目安です。"
  }
],
  bibliography,
  howTo: [
  {
    "name": "時計を追加",
    "text": "モデル名、ムーブメントの種類、最終オーバーホール日を入力します。"
  },
  {
    "name": "ダッシュボードを確認",
    "text": "各時計のメンテナンス周期がプログレスバーと色で表示されます。"
  },
  {
    "name": "メンテナンス後に更新",
    "text": "オーバーホール完了後、新しい日付に更新します。"
  }
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

import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'watch-savings-planner',
  title: '時計購入のための貯蓄プランナー',
  description: '次の時計購入に向けて貯蓄目標を設定し、進捗を管理します。進捗を可視化し、計画を立ち、モチベーションを維持します。',
  ui: {
    title: '貯蓄目標設定',
    addGoalTitle: '新しい貯蓄目標',
    goalNameLabel: '時計',
    goalNamePlaceholder: '例： Rolex Submariner',
    targetPriceLabel: '目標価格',
    currentSavingsLabel: '貯蓄額',
    monthlyLabel: '毎月',
    addButton: '目標を追加',
    cancelButton: 'キャンセル',
    goalsEmpty: 'まだ貯蓄目標がありません',
    goalsEmptySub: '最初の時計目標を設定して、貯蓄を始めましょう！',
    monthsToGoal: '目標までの期間',
    yearsToGoal: '目標までの年数',
    month: 'ヶ月',
    months: 'ヶ月',
    year: '年',
    totalSaved: '累計貯蓄額',
    totalGoals: '目標数',
    achieved: '達成',
    percentLabel: '貯蓄率',
    deleteGoal: '削除',
    editGoal: '編集',
    saveGoal: '保存',
    currency: 'JPY',
    summaryTitle: 'まとめ',
    goalAchieved: '達成！',
    goalProgress: '進捗',
    congratsTitle: 'おめでとう！',
    congratsDesc: '貯蓄目標を達成しました！',
    monthlyContribution: '毎月の貯蓄額',
    targetDate: '目標日',
    adjustMonthly: '毎月の額を調整',
  },
  seo: [
    { type: 'title', text: '時計購入のための貯蓄プランナー - 次の時計購入をトラックしよう', level: 2 },
    { type: 'paragraph', html: '時計のために貯蓄することは、それ自体が旅です。<strong>ビンテージのスピードマスター</strong>、<strong>サブマリーナー</strong>、あるいは<strong>グランドセイコー</strong>のいずれであっても、明確な貯蓄計画が夢をスケジュールに変えます。このツールは、進捗を可視化し、毎月の貯蓄額を調整し、あなたがブティックから師形とともに出てくる瞬間を正確に知ることを支援します。' },
    { type: 'title', text: '時計コレクターに貯蓄計画が必要な理由', level: 3 },
    { type: 'paragraph', html: '時計コレクションは耐必のゲームです。人気モデルの価格は積極的に上昇し、衝動買いはよく後悔につながります。構造化された貯蓄アプローチは、あなたをディシプリンに保ち、財政的な負担を防ぎ、最終的な買い物を償うためのものにします。さらに、日々の進捗を追かけることで期待感が高まり、アンボックスを開ける瞬間がいっそう甘くなります。' },
    { type: 'title', text: '現実的な時計貯蓄目標の設定方法', level: 3 },
    { type: 'paragraph', html: '税金や送料を含む総価格から始めます。それを毎月安心して割き当てられる額で割ります。目安としては、<strong>可変収入の10-15%</strong>を時計貯蓄にやることが理想的です。スケジュールが長すぎるようなら、より小さなマイルストーンに分けて考えてみてください。それか、同じスタイル系でより手の出しやすい代替案を探してみてもいいでしょう。' },
    { type: 'title', text: '目標管理の心理学', level: 3 },
    { type: 'paragraph', html: '視覚的な進捗管理は、コレクションをこのうわかり熱中させる神経伝達物質であるドーパミンの釋放を促します。新たな貯蓄を記録し、プログレスリングが填まっていくのを見るたびに、習慣が強化されます。だからこそ、小額で定期的な貯蓄が、不定期な大額貯蓄より効果的なのです。まるでルーチン自体がコレクター経験の一部になるような。' },
  ],
  faq: [
    {
      question: '時計のために毎月いくら貯蓄すべきですか？',
      answer: '可変収入の10-15%を目標にしましょう。継続することが重要です。毎月100ドルでも、年間で1,200ドルになります。目標の期間に応じて額を調整してください。短い目標には、より多くの毎月貯蓄額が必要です。',
    },
    {
      question: '一つの時計にずつ貯蓄すべきですか、複数同時に貯蓄すべきですか？',
      answer: '通常は一つずつ貯蓄するほうが効果的です。集中が動きにつながります。さに目標を達成すれば、その自信と研鎌が次の目標にも活きます。ただし、このプランナーは複数目標をサポートしており、期間を比較できます。',
    },
    {
      question: '貯蓄中に時計の価格が上がったらどうしますか？',
      answer: '良い質問です。数ヶ月ごとに市場価格を確認し、目標を更新してください。価格が急速に上昇している場合は、毎月の貯蓄額を増やすか、スケジュールを短縮して現在の価格を固定することを検討してください。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '目標を設定する',
      text: '時計の名前と、税金や送料を含む総価格を入力します。',
    },
    {
      name: '貯蓄を追跡する',
      text: 'すでに貯蓄した額と、毎月割き当てられる額を記録します。',
    },
    {
      name: '進捗を確認する',
      text: '貯蓄額を更新するたびに、プログレスリングが填まっていくのを確認できます。毎月の貯蓄額はいつでも調整可能です。',
    },
    {
      name: '祝福する',
      text: 'リングが100%になったら、目標達成です。その時計を買いに行きましょう！',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '時計のために毎月いくら貯蓄すべきですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '可変収入の10-15%を目標にしましょう。継続することが重要です。毎月100ドルでも、年間で1,200ドルになります。',
          },
        },
        {
          '@type': 'Question',
          'name': '一つの時計にずつ貯蓄すべきですか、複数同時に貯蓄すべきですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '通常は一つずつ貯蓄するほうが効果的です。集中が動きにつながります。さり目標を達成したら、その研鎌を次の目標にも活かしましょう。',
          },
        },
        {
          '@type': 'Question',
          'name': '貯蓄中に時計の価格が上がったらどうしますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '数ヶ月ごとに市場価格を確認し、目標を更新してください。価格が急速に上昇している場合は、毎月の貯蓄額を増やすことを検討してください。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計購入のための貯蓄プランナー',
      'operatingSystem': '全てのOS',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'HTML5対応。JavaScript必須。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '時計購入のための貯蓄方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '目標を設定する',
          'text': '時計の名前と、税金や送料を含む総価格を入力します。',
        },
        {
          '@type': 'HowToStep',
          'name': '貯蓄を追跡する',
          'text': 'すでに貯蓄した額と、毎月割き当てられる額を記録します。',
        },
        {
          '@type': 'HowToStep',
          'name': '進捗を確認する',
          'text': '貯蓄額を更新するたびに、プログレスリングが填まっていくのを確認できます。',
        },
        {
          '@type': 'HowToStep',
          'name': '祝福する',
          'text': 'リングが100%になったら、目標達成です。その時計を買いに行きましょう！',
        },
      ],
    },
  ],
};

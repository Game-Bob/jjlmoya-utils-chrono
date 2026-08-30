import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'watch-accuracy-tracker',
  title: '腕時計精度トラッカー＆ロガー',
  description: '機械式またはクォーツ式腕時計の日差（歩度）のズレを記録・計算し、精度と安定性を分析します。',
  ui: {
    title: '腕時計精度トラッカー',
    selectWatch: '腕時計を選択または追加',
    watchPlaceholder: '例：セイコー SKX007',
    addWatch: '時計を追加',
    deleteWatch: '時計を削除',
    addLog: '新しい測定値を記録',
    offsetLabel: 'ズレ（秒）',
    offsetPlaceholder: '0',
    dateLabel: '測定日時',
    saveLog: 'ログを保存',
    avgRate: '平均日差',
    consistency: '精度ステータス',
    totalLogs: '総ログ数',
    historyTitle: '測定履歴',
    noLogs: 'この時計のログはまだ記録されていません。精度を計算するには、少なくとも2つのログを追加してください。',
    tableDate: '測定日時',
    tableOffset: 'ズレ',
    tableRate: '日差',
    tableActions: '操作',
    deleteLog: '削除',
    coscExcellent: 'COSCクロノメーター規格基準内 (+4/-6 秒/日)',
    excellent: '極めて優秀 (0〜+5 秒/日)',
    good: '良好 (+/- 10 秒/日)',
    needsService: '要オーバーホール (> +/- 20 秒/日)',
    secondsPerDay: '秒/日',
    seconds: '秒',
    referenceTime: '基準時刻',
    watchTime: '時計の時刻',
    useCurrentTime: '現在時刻を使用',
    calculatedRate: '計算された日差',
    driftPredictorTitle: 'ドリフト予測と投影計算',
    driftPredictorDesc: '時間の経過に伴う累積的なズレを予測し、各規格と比較します。',
    dailyRateInput: '日差（秒/日）',
    dailyRatePlaceholder: '例：+4.5 または -3',
    driftHeading: '予測',
    period: '期間',
    accumulatedDrift: '予測される累積ズレ',
    day: '1日',
    week: '1週間',
    month: '1ヶ月',
    months3: '3ヶ月',
    months6: '6ヶ月',
    year: '1年',
    years5: '5年',
    watchStandardTitle: '規格認証',
    trackerHeading: 'ライブ精度トラッカー',
    driftCalculatorTab: 'ドリフト予測',
    trackerTab: '精度ロガー',
    stdRolex: 'ロレックス高精度クロノメーター',
    stdCosc: 'COSC公認クロノメーター',
    stdMetas: 'METASマスタークロノメーター',
    stdStdMech: '一般的な機械式',
    stdQuartz: '一般的なクォーツ',
    stdHaq: '高精度クォーツ',
    presetRolex: 'ロレックス (+2秒/日)',
    presetCosc: 'COSC (+4秒/日)',
    presetStdMech: '一般機械式 (+15秒/日)',
    presetQuartz: 'クォーツ (+0.5秒/日)',
    statusPass: '合格',
    statusFail: '不合格',
    toleranceRolex: '±2 秒/日',
    toleranceCosc: '-4 / +6 秒/日',
    toleranceMetas: '0 / +5 秒/日',
    toleranceStdMech: '±15 秒/日',
    toleranceQuartz: '±0.5 秒/日',
    toleranceHaq: '±10 秒/年',
  },
  seo: [
    { type: 'title', text: '腕時計の精度と日差調整に関する決定版ガイド', level: 2 },
    { type: 'paragraph', html: '機械式時計はマイクロエンジニアリングの驚異ですが、クォーツムーブメントとは異なり、時刻の精度に影響を与える様々な環境的・物理的要因の影響を受けます。時計の日差（歩度）のズレを監視して理解することは、時計の良好な状態を維持し、プロによるオーバーホール（分解掃除）が必要な時期を判断する鍵となります。' },
    { type: 'title', text: '機械式時計がズレる主な要因', level: 2 },
    { type: 'paragraph', html: '日々の精度には、いくつかの要素が影響します。重力は、時計の姿勢（向き）に応じてテンプ（バランスホイール）に異なる影響を与えます。また、温度変化によってヒゲゼンマイが伸縮し、振動数が変化することがあります。さらに、ゼンマイの巻き上げ状態（パワーリザーブ）も振り角に影響を与え、完全に巻き上げられた状態の方が、解けかけた状態よりも精度が安定する傾向があります。' },
    { type: 'title', text: '累積ドリフトを理解する：小さなズレがもたらす影響', level: 2 },
    { type: 'paragraph', html: '1日あたりわずか+5秒のズレは無視できるように思えますが、時間は累積されます。1週間で35秒のズレになり、1ヶ月で2.5分、1年では30分以上も時計の時刻がズレることになります。この累積的なズレこそが、複数の時計をローテーションで使用し、常に原子時計などの基準時刻と同期させたい時計コレクターにとって、正確なトラッキングが不可欠である理由です。' },
    { type: 'title', text: '腕時計の精度を手動で追跡・計算する方法', level: 2 },
    { type: 'paragraph', html: 'プロ用のタイムグラファーを使わずに時計の日差を測定するには、本ツールの「精度ロガー」機能が便利です。まず、お持ちの時計の時刻を合わせるか、原子時計の基準時刻（UTCやNTPなど）に対するズレ（秒）を記録します。24〜48時間経過後、再度そのズレを記録します。ズレの変化量を経過日数で割ることで、時計の平均日差を求めることができます。' },
    { type: 'title', text: '姿勢差を利用した自己調整', level: 2 },
    { type: 'paragraph', html: '多くの機械式時計は、着用していない時の置き方（姿勢）によって精度を微調整できます。例えば、夜間に文字盤を上にして平置きすると数秒進み、リューズを下にして置くと数秒遅れるといった性質があります。これらの姿勢と本ツールの計算機を活用することで、夜間の置き方を変えるだけで日差を自然に相殺させることができます。' },
  ],
  faq: [
    {
      question: '機械式時計の一般的な日差はどのくらいですか？',
      answer: '標準的な機械式時計の日差は、通常 +/- 10〜20秒程度です。COSC認定クロノメーターは -4〜+6秒/日以内に調整されており、高性能なクォーツムーブメントでは日差 +/- 0.5秒未満を達成するものもあります。',
    },
    {
      question: 'なぜ置き方（姿勢）によって時計の精度が変わるのですか？',
      answer: '時計が文字盤上、文字盤下、リューズ上、リューズ下のいずれの状態にあるかによって、テンプやヒゲゼンマイにかかる重力の方向が変化します。この姿勢差が振り角や歩度にわずかな影響を与えます。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '初期状態の記録',
      text: '時計を信頼できる原子時計と同期させるか、現在の基準時刻からのズレ（秒）を書き留めます。'
    },
    {
      name: '時間を置いて使用',
      text: '通常通り時計を着用するか、特定の姿勢のまま少なくとも12〜24時間放置します。'
    },
    {
      name: '2回目の記録',
      text: '再度、時計のズレを記録します。システムが自動的に1日あたりの平均日差を計算します。'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '腕時計精度トラッカー＆ロガー',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '機械式時計の一般的な日差はどのくらいですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '標準的な機械式時計の日差は、通常 +/- 10〜20秒程度です。COSC認定クロノメーターは -4〜+6秒/日以内に調整されており、高性能なクォーツムーブメントでは日差 +/- 0.5秒未満を達成するものもあります。'
          }
        },
        {
          '@type': 'Question',
          'name': 'なぜ置き方（姿勢）によって時計の精度が変わるのですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '時計が文字盤上、文字盤下、リューズ上、リューズ下のいずれの状態にあるかによって、テンプやヒゲゼンマイにかかる重力の方向が変化します。この姿勢差が振り角や歩度にわずかな影響を与えます。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '腕時計の精度を手動で測定する方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '初期状態の記録',
          'text': '時計を信頼できる原子時計と同期させるか、現在の基準時刻からのズレ（秒）を書き留めます。'
        },
        {
          '@type': 'HowToStep',
          'name': '時間を置いて使用',
          'text': '通常通り時計を着用するか、特定の姿勢のまま少なくとも12〜24時間放置します。'
        },
        {
          '@type': 'HowToStep',
          'name': '2回目の記録',
          'text': '再度、時計のズレを記録します。システムが自動的に1日あたりの平均日差を計算します。'
        }
      ]
    }
  ]
};

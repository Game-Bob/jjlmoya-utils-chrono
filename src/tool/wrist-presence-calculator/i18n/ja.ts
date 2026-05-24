import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'wrist-presence-calculator',
  title: '時計の手首フィット計算ツール',
  description: 'ケース径と手首の比率、手首の平坦部カバー率を計算し、美的ガイドラインに基づく最適な時計サイズを算出します。',
  ui: {
    title: '手首サイズ設定',
    wristCircumferenceLabel: '手首周り',
    caseDiameterLabel: 'ケース径',
    lugToLugLabel: 'ラグ間距離',
    wristWidthLabel: '手首の平坦幅',
    autoEstimateWidthLabel: '平坦幅を自動推定する（30%）',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: '手首フィット評価',
    caseWristRatioLabel: 'ケース対手首比',
    wristCoverageLabel: '手首カバー率',
    verdictLabel: '判定',
    verdictOversized: 'オーバーサイズ',
    verdictBold: 'ボールド／モダンフィット',
    verdictGolden: 'ゴールデン／クラシックフィット',
    verdictVintage: 'ヴィンテージ／アンダーサイズ',
    coverageSafe: '適正フィット',
    coverageBold: 'ボールドフィット',
    coverageOverhang: 'ラグオーバーハング警告',
    sweetSpotTitle: 'フィットスタイル',
    sweetSpotDesc: 'スイートスポットは最もバランスの取れた見た目を表します。',
    minClassicLabel: 'ヴィンテージ／クラシックフィット',
    sweetSpotLabel: '美的スイートスポット',
    maxBoldLabel: 'モダン／ボールドフィット',
    maxLugToLugLabel: '推奨最大ラグ間距離',
    idealSizesTitle: '理想サイズガイドライン',
    visualizerTitle: 'ライブフィットシミュレーター',
    wristWidthHelp: '手首の形状から推定した値です。',
    estimatedLabel: '推定',
    customLabel: '手首',
  },
  seo: [
    { type: 'title', text: '理想の時計サイズの選び方：プロポーションガイド', level: 2 },
    { type: 'paragraph', html: '適切な時計サイズを見つけるには、数学的な分析と幾何学的な視点、そして個人のスタイル感覚が必要です。時計学において、タイムピースが腕に乗る様子を<strong>手首存在感（ライストプレゼンス）</strong>と呼びます。理想的な時計は、不格好なラグオーバーハングで腕を圧迫することも、豆粒のように消えてしまうこともなく、バランスよく見えるものです。このバランスを実現するために、コレクターはケース径・ラグ間距離・手首の形状という3つの指標を分析します。' },
    { type: 'title', text: 'ケース対手首比を理解する', level: 3 },
    { type: 'paragraph', html: '時計のプロポーションを評価する伝統的な手法がケース対手首比です。手首周りをミリメートルに換算し、ケース径で割ると比率が得られます。<strong>4.5〜5.0</strong>の比率がクラシックなスイートスポットとされ、<strong>4.0〜4.5</strong>はモダンでスポーティな印象を与えます。5.0を超えるとヴィンテージドレスウォッチの雰囲気になり、4.0未満はオーバーサイズと判断されます。' },
    { type: 'title', text: 'なぜラグ間距離はケース径より重要なのか', level: 3 },
    { type: 'paragraph', html: 'ケース径ばかりが注目されますが、フィットの真の尺度は<strong>ラグ間距離</strong>（上下のラグ先端間の縦寸法）です。黄金律は「ラグ間距離が手首の平坦幅を超えてはならない」こと。ラグが手首の端を越えると、オーバーハングが生じてストラップが垂直に垂れ下がり、時計が不安定に見え、視覚的なバランスを損ないます。' },
    { type: 'title', text: '平坦な手首と丸い手首：解剖学的な違いに合わせたサイズ選び', level: 3 },
    { type: 'paragraph', html: '手首周りだけでは判断できません。同じ周囲径を持つ手首でも、断面形状は異なります。平坦な手首は上面が広く、ラグ間距離が長い時計でもオーバーハングなく着用できます。丸い手首は円筒形に近く上面が狭いため、オーバーハングを避けるにはラグ間距離の短い時計が必要です。' },
  ],
  faq: [
    {
      question: '理想的なケース対手首比はどのくらいですか？',
      answer: '理想の比率は4.0〜5.0の範囲です。4.5はクラシックな時計学のスイートスポットとされています。4.0〜4.5はモダンでボールドな手首存在感を与え、5.0超はヴィンテージドレスウォッチ向き、4.0未満はオーバーサイズに見える傾向があります。',
    },
    {
      question: 'なぜラグ間距離はケース径よりも重要なのですか？',
      answer: 'ケース径は文字盤の幅しか測りませんが、ラグ間距離は時計の手首上での全長を規定します。ラグ間距離が手首の平坦幅を超えると、ラグがオーバーハングしてストラップが垂直に落ち、時計が不安定で大きすぎるように見えます。',
    },
    {
      question: '平坦な手首と丸い手首では着用感にどう違いが出ますか？',
      answer: '同じ手首周り（例：17 cm）でも着用感は大きく異なります。平坦な手首は上面が広いためラグ間距離の長い時計でもオーバーハングなく安定して着用できます。丸い手首は上面が狭いため、安定したフィットには短いラグ間距離が必要です。',
    },
    {
      question: '厚さとベゼル幅は時計の見た目のサイズにどう影響しますか？',
      answer: 'ベゼルが極めて細い時計（ドレスウォッチなど）は文字盤面積が広く、実際のケース径より大きく見えます。回転ベゼルの厚いダイバーズウォッチは文字盤が小さいため、コンパクトに見えます。また13mm超の厚い時計は外観上の重量感が増します。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '手首を測定する',
      text: 'フレキシブルなメジャーで手首の骨の周囲を測り、cmまたはインチで周囲径を確認してください。',
    },
    {
      name: '時計の寸法を入力する',
      text: '評価する時計のケース径とラグ間距離を入力してください。',
    },
    {
      name: 'フィットとシミュレーターを確認する',
      text: 'ケース対手首比・ラグオーバーハング警告を確認し、リアルタイムのシミュレーション図を参照してください。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '理想的なケース対手首比はどのくらいですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '理想の比率は4.0〜5.0の範囲です。4.5はクラシックな時計学のスイートスポットとされています。4.0〜4.5はモダンでボールドな手首存在感を与え、5.0超はヴィンテージドレスウォッチ向き、4.0未満はオーバーサイズに見える傾向があります。'
          }
        },
        {
          '@type': 'Question',
          'name': 'なぜラグ間距離はケース径よりも重要なのですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ケース径は文字盤の幅しか測りませんが、ラグ間距離は時計の手首上での全長を規定します。ラグ間距離が手首の平坦幅を超えると、ラグがオーバーハングしてストラップが垂直に落ち、時計が不安定で大きすぎるように見えます。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計の手首フィット計算ツール',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '理想の時計サイズの決め方',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '手首を測定する',
          'text': 'フレキシブルなメジャーで手首の骨の周囲を測り、cmまたはインチで周囲径を確認してください。'
        },
        {
          '@type': 'HowToStep',
          'name': '時計の寸法を入力する',
          'text': '評価する時計のケース径とラグ間距離を入力してください。'
        },
        {
          '@type': 'HowToStep',
          'name': 'フィットとシミュレーターを確認する',
          'text': 'ケース対手首比・ラグオーバーハング警告を確認し、リアルタイムのシミュレーション図を参照してください。'
        }
      ]
    }
  ]
};

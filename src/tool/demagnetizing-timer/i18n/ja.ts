import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'demagnetizing-timer',
  title: '時計の脱磁タイマー＆ガイド',
  description: 'DIY時計脱磁のための正確なカウントダウンタイマー（音声ガイド付き）。脱磁コイルに最適な押し時間を計測します。',
  ui: {
    title: 'タイマー設定',
    durationLabel: 'パルス時間',
    duration1s: '1秒',
    duration2s: '2秒',
    duration3s: '3秒',
    customLabel: 'カスタム',
    startButton: 'スタート',
    stopButton: 'ストップ',
    resetButton: 'リセット',
    pressPhase: '脱磁器のボタンを押してください！',
    holdPhase: 'ボタンを押し続けてください...',
    releasePhase: '離してください！',
    completePhase: '完了！時計を離してください。',
    ready: '準備完了',
    seconds: '秒',
    instructions: '脱磁の手順',
    step1: '時計を脱磁器のプラットフォームに置きます。',
    step2: 'スタートを押し、設定した時間だけ脱磁器のボタンを押し続けます。',
    step3: 'ボタンを離し、ゆっくりと時計を遠ざけます。',
    step4: '必要に応じて2～3回繰り返し、その都度時計を回転させます。',
    tipTitle: 'ヒント',
    tipContent: '再磁化を防ぐため、電源オンの脱磁器から時計を少なくとも1メートル離してください。',
  },
  seo: [
    { type: 'title', text: '時計脱磁タイマー — DIY脱磁のための正確なパルスタイミング', level: 2 },
    { type: 'paragraph', html: '時計の脱磁には正確なボタン押しのタイミングが必要です。ほとんどのDIY脱磁器は減衰する交流磁場を生成することで動作し、理想的なパルスは<strong>1～3秒</strong>です。短すぎると磁場が磁化を中和できず、長すぎるとムーブメントが飽和するリスクがあります。' },
    { type: 'title', text: '時計脱磁においてタイミングが重要な理由', level: 3 },
    { type: 'paragraph', html: '脱磁器のボタンを押すと、コイル内部に交流磁場が発生します。磁場は商用周波数（50/60 Hz）で振動し、ボタンを離すと減衰します。目的は、ヒゲゼンマイやその他の鋼製部品の磁区をランダム化するために、この減衰磁場に時計を<strong>ちょうどよい時間</strong>さらすことです。1～3秒のパルスがほとんどのムーブメントにとって最適です。' },
    { type: 'title', text: '脱磁器の仕組み', level: 3 },
    { type: 'paragraph', html: '脱磁器は基本的にはワイヤーのコイルであり、通電すると強力な交流磁場を生成します。磁化された時計をこの磁場に置くと、内部の磁区が急速に反転します。ボタンを離して磁場が急に除去されると、磁区はランダムなパターンで安定し、正味の磁化が効果的に打ち消されます。' },
    { type: 'title', text: '時計の脱磁が必要なサイン', level: 3 },
    { type: 'paragraph', html: '時計が磁化されている一般的な症状には、1日に数分進む、姿勢による精度のばらつき、聴いてわかるほど秒針の音が速くなる、極端な場合には時計が完全に停止するなどがあります。自動巻き時計が突然速く動き始めた場合、磁化が原因であることが多く、脱磁は簡単な解決策です。' },
  ],
  faq: [
    {
      question: '脱磁器のボタンはどのくらい押せばよいですか？',
      answer: '1～3秒が推奨されるパルス時間です。1秒から始めて、必要に応じて増やしてください。長すぎるパルスはコイルを過熱させる可能性があり、結果が向上するわけではありません。',
    },
    {
      question: '時計の脱磁は複数回行えますか？',
      answer: 'はい。2～3回繰り返し、その都度時計を90度回転させてください。これにより、すべての軸が交流磁場にさらされます。脱磁のしすぎのリスクはありません。',
    },
    {
      question: 'クォーツ時計にも脱磁は効果がありますか？',
      answer: 'クォーツ時計は強磁性体部品をほとんど含まないため、磁化の影響を受けることは稀です。ただし、一部のクォーツムーブメントのステッピングモーターが磁化され、針の動きが不規則になることがあります。クォーツ時計への脱磁は安全です。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '時間を設定',
      text: '磁化の程度に応じて1、2、3秒を選択します。',
    },
    {
      name: '時計を配置',
      text: '時計を脱磁器のプラットフォームに平らに置き、コイルの上に中央揃えします。',
    },
    {
      name: '押して保持',
      text: 'スタートボタンと脱磁器のボタンを同時に押し、設定した時間保持します。',
    },
    {
      name: '離して遠ざける',
      text: 'ボタンを離し、脱磁器を切る前に時計を少なくとも1メートルゆっくりと遠ざけます。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '脱磁器のボタンはどのくらい押せばよいですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1～3秒が推奨されるパルス時間です。1秒から始めて、必要に応じて増やしてください。長すぎるパルスはコイルを過熱させる可能性があり、結果が向上するわけではありません。',
          },
        },
        {
          '@type': 'Question',
          'name': '時計の脱磁は複数回行えますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'はい。2～3回繰り返し、その都度時計を90度回転させてください。これにより、すべての軸が交流磁場にさらされます。脱磁のしすぎのリスクはありません。',
          },
        },
        {
          '@type': 'Question',
          'name': 'クォーツ時計にも脱磁は効果がありますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'クォーツ時計は強磁性体部品をほとんど含まないため、磁化の影響を受けることは稀です。ただし、一部のクォーツムーブメントのステッピングモーターが磁化され、針の動きが不規則になることがあります。クォーツ時計への脱磁は安全です。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計の脱磁タイマー＆ガイド',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '時計の脱磁方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '時間を設定',
          'text': '磁化の程度に応じて1、2、3秒を選択します。',
        },
        {
          '@type': 'HowToStep',
          'name': '時計を配置',
          'text': '時計を脱磁器のプラットフォームに平らに置き、コイルの上に中央揃えします。',
        },
        {
          '@type': 'HowToStep',
          'name': '押して保持',
          'text': 'スタートボタンと脱磁器のボタンを同時に押し、設定した時間保持します。',
        },
        {
          '@type': 'HowToStep',
          'name': '離して遠ざける',
          'text': 'ボタンを離し、脱磁器を切る前に時計を少なくとも1メートルゆっくりと遠ざけます。',
        },
      ],
    },
  ],
};

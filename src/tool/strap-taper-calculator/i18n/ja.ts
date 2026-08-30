import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'strap-taper-calculator',
  title: '時計ベルトのテーパーとプロポーション計算ツール',
  description: 'ケース径とラグ幅に基づいて、時計に最適なベルトのテーパーを計算します。バランスの取れた見た目を実現する完璧なバックル幅を見つけましょう。',
  ui: {
    title: 'ベルトテーパー計算ツール',
    caseLabel: '時計の寸法',
    caseInput: 'ケース径',
    lugLabel: 'ラグ幅',
    lugInput: 'ラグ幅',
    taperLabel: 'テーパースタイル',
    straight: 'ストレート',
    classic: 'クラシック',
    aggressive: 'アグレッシブ',
    customTaper: 'カスタム',
    buckleWidth: 'バックル幅',
    resultsTitle: 'プロポーション',
    lugWidth: 'ラグ幅',
    buckleWidthResult: 'バックル幅',
    taperAmount: 'テーパー',
    taperRatio: '比率',
    proportionScore: 'プロポーション',
    proportionExcellent: '優秀',
    proportionGood: '良好',
    proportionFair: '普通',
    proportionUnbalanced: '不均衡',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: '注意',
    noteContent: '4 mmのクラシックなテーパー（例：20 mmから16 mm）はドレスウォッチに適しています。ダイバーズやツールウォッチは、頑丈な印象を与えるためストレートまたは2 mmのテーパーの方が見栄えが良くなります。',
    step1: 'ケース径とラグ幅を入力します。',
    step2: 'テーパースタイルを選択するか、カスタムのバックル幅を設定します。',
    step3: 'プロポーションと視覚的な表示を確認します。',
  },
  seo: [
    { type: 'title', text: '時計ベルトテーパー計算ツール - プロポーション、バックル幅、ビジュアルガイド', level: 2 },
    { type: 'paragraph', html: 'プロポーションの良いベルトは時計の印象を大きく左右します。ダイバーズウォッチに過度のテーパーをかけると脆弱に見えます。ドレスウォッチにテーパーがないと野暮ったく見えます。この計算ツールは、ケース径とラグ幅に基づいて理想的な<strong>ベルトテーパー比率</strong>を見つけるのに役立ちます。' },
    { type: 'title', text: 'ベルトテーパーとは？', level: 3 },
    { type: 'paragraph', html: 'ベルトテーパーとは、ラグ側からバックル側にかけてのベルト幅の減少のことです。クラシックなドレスウォッチでは、ラグで20 mmからバックルで16 mmへと4 mmテーパーするのが一般的です。ダイバーズウォッチでは、より道具らしい外観にするために20 mmのままストレートにすることもあります。' },
    { type: 'title', text: 'ストラッププロポーションの黄金比', level: 3 },
    { type: 'paragraph', html: '時計愛好家の間では、ラグ幅がケース径の45%から55%の間が最も見栄えが良いとされています。テーパーについては、バックル幅がラグ幅の75%から85%であると、バランスの取れたエレガントなシルエットが生まれます。この範囲を外れると、時計が頭でっかちに見えたり、逆に脆弱に見えたりする可能性があります。' },
    { type: 'title', text: '時計スタイル別テーパー', level: 3 },
    { type: 'paragraph', html: 'ドレスウォッチ：4 mmテーパー（20 mmから16 mm）。スポーツウォッチ：2〜3 mmテーパー。ダイバーズウォッチ：0〜2 mmテーパー。ミリタリー／フィールドウォッチ：頑丈な印象のストレートテーパー。パイロットウォッチ：計器類の美観に合わせて最小限のテーパー。' },
  ],
  faq: [
    {
      question: 'ドレスウォッチに最適なベルトテーパーは？',
      answer: '4 mmのテーパーがクラシックな選択です。ラグ幅20 mmの場合、バックル幅は16 mmになります。これにより、ドレスウォッチの洗練された外観を引き立てるエレガントなシルエットが生まれます。',
    },
    {
      question: 'ダイバーズウォッチにはテーパー付きベルトが適していますか？',
      answer: 'ほとんどのダイバーズウォッチは、テーパーを最小限にするか、またはまったくかけない方が見栄えが良くなります。20 mmのストレートベルトを全体に使用することで、ダイバーズの実用本位の性質に合った頑丈な道具感が得られます。',
    },
    {
      question: 'テーパーが強すぎるとどうなりますか？',
      answer: '強いテーパー（6 mm以上）は、時計のヘッド部分が不釣り合いに大きく見え、頭でっかちになります。また、バックル側のベルトが薄っぺらく感じられることもあります。',
    },
    {
      question: 'ラグ幅の測り方は？',
      answer: 'ケースのバネ棒穴の内側の幅を測ります。それが必要なベルト幅です。一般的なサイズは18 mm、20 mm、22 mmです。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'ケースとラグの寸法を入力',
      text: 'ケース径とラグ幅をミリメートル単位で入力します。',
    },
    {
      name: 'テーパースタイルを選択',
      text: 'ストレート、クラシック、アグレッシブ、またはカスタムを選択します。ビジュアルが即座に更新されます。',
    },
    {
      name: 'プロポーションを確認',
      text: '比率とプロポーションスコアを確認して、ベルトの選択がバランスが取れているかどうかを判断します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'ドレスウォッチに最適なベルトテーパーは？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4 mmのテーパーがクラシックな選択です。ラグ幅20 mmの場合、バックル幅は16 mmになり、エレガントなシルエットが生まれます。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ダイバーズウォッチにはテーパー付きベルトが適していますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ほとんどのダイバーズウォッチはテーパーを最小限にするか、かけない方が見栄えが良くなります。20 mmのストレートベルトが頑丈な印象を与えます。',
          },
        },
        {
          '@type': 'Question',
          'name': 'テーパーが強すぎるとどうなりますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '強いテーパーは時計のヘッドを不釣り合いに見せ、バックル側のベルトが薄っぺらく感じられることがあります。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ラグ幅の測り方は？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ケースのバネ棒穴の内側の幅を測ります。一般的なサイズは18 mm、20 mm、22 mmです。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計ベルトテーパー計算ツール',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '時計ベルトのテーパープロポーションの計算方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'ケースとラグの寸法を入力',
          'text': 'ケース径とラグ幅をミリメートル単位で入力します。',
        },
        {
          '@type': 'HowToStep',
          'name': 'テーパースタイルを選択',
          'text': 'ストレート、クラシック、アグレッシブ、またはカスタムを選択します。',
        },
        {
          '@type': 'HowToStep',
          'name': 'プロポーションを確認',
          'text': '比率とプロポーションスコアを確認します。',
        },
      ],
    },
  ],
};

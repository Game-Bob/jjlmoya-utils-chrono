import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-color-simulator',
  title: 'ルミカラーシミュレーター—腕時計ルミ発色ビジュアライザー',
  description: 'ルミカラーをリアルタイムで比較。C1、C3、BGW9、LumiNovaなど、さまざまな夜光塗料の発色を明るさ別にシミュレーションします。',
  ui: {
    title: 'ルミカラーシミュレーター',
    lumeType: 'ルミタイプ',
    brightness: '周囲の明るさ',
    dark: '暗い',
    light: '明るい',
    color: '色',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'タイプ',
    description: '説明',
    c1Name: 'C1',
    c1Desc: 'グリーン（クラシック）',
    c3Name: 'C3',
    c3Desc: 'スーパーグリーン',
    bgw9Name: 'BGW9',
    bgw9Desc: 'アイスブルー',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'ウォームホワイト',
    vintageName: 'ビンテージ',
    vintageDesc: 'エイジドラジウム',
    orangeName: 'オレンジ',
    orangeDesc: 'ダイバーオレンジ',
    blueName: 'ブルー',
    blueDesc: 'ディープブルー',
    greenName: 'グリーン',
    greenDesc: 'ネオングリーン',
    tipTitle: 'ヒント',
    tipContent: 'ルミの明るさは、色素の品質と吸収した光の量に依存します。BGW9は青白く発光し最も明るく、ビンテージルミは暖かくほのかな光を放ちます。',
  },
  seo: [
    { type: 'title', text: '腕時計ルミカラーシミュレーター—リアルタイム発色比較ツール', level: 2 },
    { type: 'paragraph', html: 'ルミは腕時計収集家にとって最もこだわりのある要素のひとつです。<strong>C1スーパールミノバ</strong>のクラシックなグリーングローと<strong>BGW9</strong>のアイスブルー、どちらが好みですか？このシミュレーターでは、各ルミタイプが昼光から完全な暗闇まで、明るさのレベルごとにどのように見えるかを、正確な<strong>HEX値とRGB値</strong>とともに表示します。' },
    { type: 'title', text: 'スーパールミノバの種類比較', level: 3 },
    {
      type: 'table', headers: ['タイプ', '昼間の色', '発光色', '明るさ', 'おすすめ'], rows: [
        ['C1', 'ライトグリーン', 'グリーン', '中', 'ドレスウォッチ、オリジナル風'],
        ['C3', 'イエローグリーン', 'ブライトグリーン', '最高', 'ダイバーズウォッチ、ツールウォッチ'],
        ['BGW9', 'オフホワイト', 'アイスブルー', '高', 'モダンスポーツウォッチ、クリーンな見た目'],
        ['LumiNova', 'ウォームベージュ', 'ウォームホワイト', '低〜中', 'コスパ重視のルミ'],
        ['ビンテージ', 'クリーム／タン', '暖かくほのか', '低', 'ヘリテージスタイルの腕時計'],
        ['オレンジ', 'オレンジ', 'オレンジ', '中', 'ダイバーアクセント、レトロダイバー'],
        ['ブルー', 'ライトブルー', 'ブルー', '中', 'デザイナーダイヤル、ファッションウォッチ'],
        ['グリーン', 'ブライトグリーン', 'グリーン', '高', 'ミリタリースタイルの腕時計'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9—どれを選ぶべき？', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 クラシックグリーン', icon: 'mdi:lightbulb-on', description: 'オリジナルのスーパールミノバ処方。グリーンに発光し、明るさは中程度。どんな腕時計にも合う安心のクラシックチョイス。', points: ['中程度の明るさ、4〜6時間視認可能', 'グリーングロー、暖かい色調', '最も手頃な処方', 'エントリーレベルの腕時計に普及'], highlight: false },
        { title: 'C3 スーパーグリーン', icon: 'mdi:lightning-bolt', description: '入手可能な中で最も明るいグリーンルミ。水中での視認性が求められるプロ仕様のダイバーズウォッチに使用。最小限の充電で最大の輝き。', points: ['最高の明るさ、8〜12時間視認可能', '昼間はイエローグリーン', 'セイコー、シチズン、オメガに採用', '暗所での視認性に最適'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 アイスブルー', icon: 'mdi:snowflake', description: 'グリーンではなくブルーホワイトに発光。C3よりやや暗いが、クリーンでモダンな見た目が好まれている。高級スポーツウォッチに人気。', points: ['高輝度、6〜10時間視認可能', 'ブルーホワイトグロー、ニュートラルな色調', '昼間はクリーンでモダンな見た目', 'チュードル、グランドセイコー、オメガに採用'], highlight: true },
        { title: 'ビンテージ ラジウム調', icon: 'mdi:fire', description: '1960年代のラジウムルミを再現したウォームベージュ／クリーム色。見た目の再現性を優先し、意図的に暗め。暖かく繊細な輝きで、経年変化も美しい。', points: ['低輝度、2〜4時間視認可能', 'ウォームクリームから淡い琥珀色', '放射性物質を使わずに経年変化を再現', 'ヘリテージ復刻モデルに人気'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '明るさだけが全てではない', icon: 'mdi:palette', html: '最も明るいルミ（C3）が常に最良の選択とは限りません。<strong>BGW9</strong>はわずかな明るさの差と引き換えに、多くのコレクターが好むニュートラルでモダンな見た目を提供します。<strong>ビンテージルミ</strong>は性能よりも時代に合った風合いを優先します。自分にとって何が一番大事か—<strong>最大の輝き、モダンな美しさ、それともヘリテージの風格</strong>—で選びましょう。' },
    { type: 'title', text: 'ルミの発光メカニズム', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'スーパールミノバ', definition: 'ストロンチウムアルミン酸塩を基盤とした蓄光顔料。紫外線や可視光を吸収し、蓄えたエネルギーを発光として放出します。非放射性で安全。1993年に根本特殊化学が開発。' },
        { term: '充電時間', definition: 'ルミ顔料を飽和させるのに必要な光照射時間。直射日光またはUV下で10〜30分で満充電。充電時間が長いほど、より長く明るく発光します。' },
        { term: '発光持続時間', definition: '充電後にルミが視認できる時間。高品質のスーパールミノバは6〜12時間発光し続けます。最も明るいのは充電後30分間です。' },
        { term: '顔料グレード', definition: 'ストロンチウムアルミン酸塩の結晶品質。高グレードの顔料（C3、BGW9）はより大きく均一な結晶を使用し、明るく長い発光を実現。低グレード（LumiNova）は小さい結晶を使用し、輝きは控えめです。' },
      ]
    },
    {
      type: 'summary', title: 'ルミ選びクイックガイド', items: [
        '暗闇での視認性を重視するなら：C3（最輝度グリーン）かBGW9（最輝度ブルーホワイト）を選びましょう。',
        'モダンで高級感のある見た目なら：BGW9が現在ハイエンドブランドで人気です。',
        'ビンテージ／ヘリテージ風なら：ビンテージかオレンジで時代に合った温かみを。',
        'C1はオールラウンダー：十分な明るさ、クラシックなグリーン、手頃な価格帯。',
        '昼間の発色と夜間のグローカラーは大きく異なります—シミュレーターで両方を比較してみましょう。',
      ]
    },
  ],
  faq: [
    {
      question: '一番明るいルミはどれ？',
      answer: 'C3スーパールミノバが最も明るいグリーン処方です。BGW9は最も明るいブルーホワイト。どちらもC1や標準のLumiNovaより大幅に明るいです。',
    },
    {
      question: 'BGW9ルミって何？',
      answer: 'BGW9はスーパールミノバの一種で、グリーンではなくブルーホワイトに発光します。C3よりやや暗いですが、クリーンでモダンな外観から多くの人に好まれています。',
    },
    {
      question: 'ビンテージルミは光るの？',
      answer: '現代のビンテージスタイルルミ（ベージュ／ウォーム調）も発光しますが、経年変化したラジウムを再現するために意図的に暗くなっています。最大輝度よりも風合いを優先した選択です。',
    },
    {
      question: 'ルミの発光はどのくらい持続する？',
      answer: '明るい光で満充電した後、高品質のスーパールミノバは6〜12時間視認可能です。最も明るいのは最初の30分間です。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'ルミタイプを選択',
      text: 'C1、C3、BGW9、LumiNova、ビンテージ、オレンジ、ブルー、グリーンから選べます。',
    },
    {
      name: '明るさを調整',
      text: 'スライダーで周囲の明るさを昼（左）から夜（右）まで調整し、ルミの発色変化を確認します。',
    },
    {
      name: 'スペックを確認',
      text: '情報カードに現在の色の正確なHEX値とRGB値が表示されます。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '一番明るいルミはどれ？',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3スーパールミノバが最も明るいグリーン。BGW9が最も明るいブルーホワイトです。' },
        },
        {
          '@type': 'Question',
          'name': 'BGW9ルミって何？',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9はスーパールミノバの一種で、グリーンではなくブルーホワイトに発光します。' },
        },
        {
          '@type': 'Question',
          'name': 'ビンテージルミは光るの？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '現代のビンテージスタイルルミは発光しますが、経年変化したラジウムを再現するため意図的に暗くなっています。' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'ルミカラーシミュレーター',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5対応。JavaScript必須。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'ルミカラーのシミュレーション方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'ルミタイプを選択',
          'text': 'C1、C3、BGW9、LumiNovaなどからプリセットを選びます。',
        },
        {
          '@type': 'HowToStep',
          'name': '明るさを調整',
          'text': 'スライダーで昼から夜まで調整し、ルミの発色を確認します。',
        },
        {
          '@type': 'HowToStep',
          'name': 'スペックを確認',
          'text': '情報カードに現在の色のHEX値とRGB値が表示されます。',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '時計の歯車列とは何ですか？',
    answer: '歯車列は、香箱から脱進機に動力を伝達する一連の連動する歯車です。各歯車対は特定の減速比を提供し、ぜんまいエネルギーの急速な放出を制御されたタイミングのインパルスに減速します。',
  },
  {
    question: 'なぜ異なるムーブメントは異なる歯車比を持つのですか？',
    answer: '歯車比は各歯車とピニオンの歯数によって決まります。異なる振動数（例：28,800 VPH vs 36,000 VPH）のムーブメントは、テンプの振動数に対応しながら正確な計時を維持するために、異なる脱進機の速度と歯車構成を持っています。',
  },
  {
    question: '歯車とピニオンの違いは何ですか？',
    answer: '時計学において、「歯車」は次のコンポーネントを駆動する、多くの歯を持つ大きな歯車です。「ピニオン」は駆動される小さな歯車（通常6〜12歯）です。歯車とピニオンは一緒になって、回転速度とトルクを変える歯車対を形成します。',
  },
];

const howTo = [
  {
    name: 'ムーブメントを選択',
    text: '標準（28,800 VPH）、高振動数（36,000 VPH エル・プリメロ）、またはビンテージ（18,000 VPH）のムーブメントから選択できます。それぞれに独自の歯車比と振動数があります。',
  },
  {
    name: '歯車列を観察',
    text: 'アニメーションする歯車が比例した速度で回転するのを見てください。香箱はゆっくり回転し、脱進機は高速で回転します。歯車またはデータカードにホバーすると詳細情報が表示されます。',
  },
  {
    name: '速度を調整',
    text: '速度コントロールを使用して、アニメーションを低速化、高速化、または一時停止できます。これにより、各歯車が動力伝達チェーンにどのように貢献しているかを視覚化できます。',
  },
];

const title = '歯車列エクスプローラー：インタラクティブ時計学ダイアグラム';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'gear-train-explorer',
  title,
  description: 'アニメーション化された歯車列のビジュアライゼーションで、時計の機械的な心臓部を探検しましょう。香箱、Center Wheel、Third Wheel、Fourth Wheel、脱進機、アンクル、テンプの動きをご覧ください。',
  ui: {
    title: '歯車列エクスプローラー',
    barrelLabel: '香箱',
    centerWheelLabel: 'Center Wheel',
    thirdWheelLabel: 'Third Wheel',
    fourthWheelLabel: 'Fourth Wheel',
    escapeWheelLabel: '脱進機',
    palletForkLabel: 'アンクル',
    balanceWheelLabel: 'テンプ',
    rpmLabel: 'rpm',
    teethLabel: '歯',
    gearRatioLabel: '比率',
    powerFlowLabel: '動力の流れ',
    movementLabel: 'ムーブメント',
    speedLabel: '速度',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: '一時停止',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'エル・プリメロ',
    movVintage: 'ビンテージ 18k',
    step1: 'ムーブメントのキャリバーを選択して、その独自の歯車比と振動数を確認します。',
    step2: '歯車またはデータカードにホバーして、動力の流れの中での位置をハイライト表示します。',
    step3: 'アニメーション速度を調整して、各歯車がどのように動力を伝達するかを学習します。',
    tipTitle: 'ヒント',
    tipContent: '歯車列は、ぜんまいの急速なエネルギー放出を制御された振動に変換します。典型的な香箱は7〜8時間に1回回転するのに対し、脱進機は32 rpm（28,800 VPH時）で回転します - 15,000:1以上の減速比です。',
  },
  seo: [
    { type: 'title', text: 'インタラクティブ歯車列エクスプローラー', level: 2 },
    { type: 'paragraph', html: '<strong>歯車列</strong>は、すべての機械式時計の機械的な背骨です。このインタラクティブツールは、香箱からCenter Wheel、Third Wheel、Fourth Wheel、脱進機を経てアンクルとテンプに至る動力の流れを視覚化します。各歯車が比例した速度で回転する様子を見て、歯車比がどのように計時を決定するかを理解してください。' },
    { type: 'title', text: '時計の歯車列の仕組み', level: 3 },
    { type: 'paragraph', html: '時計の歯車列は、速度を減らしながら動力を伝達する一連の<strong>歯車</strong>（大きな歯車）と<strong>ピニオン</strong>（小さな歯車）で構成されています。<strong>香箱</strong>はぜんまいを収容しゆっくり回転し、時計回りに1回転する<strong>Center Wheel</strong>（分針用）を駆動します。<strong>Third Wheel</strong>と<strong>Fourth Wheel</strong>（秒針車）はさらに回転速度を上げます。最後に、<strong>脱進機</strong>が制御された ticks で<strong>アンクル</strong>に動力を解放し、アンクルが交互に脱進機をロック・アンロックして<strong>テンプ</strong>に impulso を送ります。テンプは正確な振動数 - 通常4 Hz（毎時28,800振動）- で振動し、時計のレートを調整します。' },
    { type: 'title', text: '歯車比と動力伝達', level: 3 },
    {
      type: 'table', headers: ['コンポーネント', '標準歯数', 'rpm (28,800 VPH)', '前からの比率'], rows: [
        ['香箱', '72', '0.002 (1回転/8h)', '-'],
        ['Center Wheel', '60', '0.0167 (1回転/h)', '~7.2:1'],
        ['Third Wheel', '50', '0.125 (1回転/8min)', '~5:1'],
        ['Fourth Wheel', '60', '1 (1回転/min)', '6:1'],
        ['脱進機', '15', '32', '~1.875:1'],
      ]
    },
    { type: 'title', text: 'ムーブメント比較', level: 3 },
    {
      type: 'table', headers: ['ムーブメント', '振動数', 'テンプ周波数', '脱進機 rpm', '標準精度'], rows: [
        ['ビンテージ (18,000 VPH)', '18,000 bph', '2.5 Hz', '20 rpm', '±15-30 秒/日'],
        ['標準 (28,800 VPH)', '28,800 bph', '4 Hz', '32 rpm', '±5-15 秒/日'],
        ['高振動数 (36,000 VPH)', '36,000 bph', '5 Hz', '40 rpm', '±3-8 秒/日'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'インタラクティブ学習ツール', icon: 'mdi:cog-clockwise', badge: '時計学', html: 'このツールは、一般的なスイスアンクル脱進機ムーブメントを代表するおおよその歯車比を使用しています。実際の比率はキャリバーによって異なります。ムーブメントプリセットを使用して、異なる振動数が歯車列のダイナミクスにどのように影響するかを比較してください。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

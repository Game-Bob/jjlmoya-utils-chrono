import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '機械式時計は高地でなぜ速く動くのですか？',
    answer: '機械式時計が高地で速く動く主な理由は、空気密度の低下です。薄い空気はテンプの空気抵抗を減らし、振幅をわずかに大きくします。この振幅の増加により時計が進みます - 通常、1,000mの上昇につき1日あたり2〜6秒の誤差が生じます。',
  },
  {
    question: 'クオーツ時計も高度の影響を受けますか？',
    answer: 'クオーツ時計は機械式のテンプがないため、高度の影響を最小限しか受けません。ただし、極端な高度変化は温度変化によりバッテリー性能に影響を与える可能性があります。機械式時計と比較するとその影響は無視できます。',
  },
  {
    question: '高度の変化は時計に損傷を与えますか？',
    answer: '高度変化だけでは機械式時計を損傷することはほとんどありません。ただし、航空機内のような急激な減圧は、一部の時計で防水性に問題を生じる可能性があります。旅行中の通常の高度変化は、どの時計の設計許容範囲内です。',
  },
];

const howTo = [
  {
    name: '高度を選択',
    text: '高度スライダーを上下にドラッグして、海抜から8,000mまでのさまざまな標高をシミュレートします。テンプの振動と大気データがリアルタイムで変化するのを観察してください。',
  },
  {
    name: '偏差を確認',
    text: '歩度偏差表示には、選択した高度での1日あたりの推定秒数が表示されます。下の偏差グラフはすべての高度での傾向を示しています。',
  },
  {
    name: '要因を考慮',
    text: '歩度偏差が増加する一方で、空気密度が高度とともにどのように減少するかを観察してください。温度と気圧のデータは、環境変化の背景を提供します。',
  },
];

const title = '高度精度推定ツール：標高が機械式時計に与える影響';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'altitude-watch-accuracy-estimator',
  title,
  description: '高度が機械式時計の精度にどのように影響するかを探ります。海抜から山頂まで標高を調整し、テンプの振動、歩度偏差、空気密度、気圧、温度のリアルタイム変化を確認できます。',
  ui: {
    title: '高度精度推定ツール',
    altitudeLabel: '高度',
    altitudeUnit: 'm',
    seaLevel: '海抜',
    deviationLabel: '歩度偏差',
    deviationUnit: '秒/日',
    pressureLabel: '気圧',
    pressureUnit: 'hPa',
    densityLabel: '空気密度',
    densityUnit: 'kg/m³',
    temperatureLabel: '気温',
    temperatureUnit: '°C',
    oscillationLabel: 'テンプ',
    oscillationsPerSec: '振動/秒',
    rateLabel: '歩度',
    atmDataTitle: '大気条件',
    howItWorks: '仕組み',
    howItWorksDesc: '高地での低い空気密度はテンプの抵抗を減らし、振幅を増加させて時計を速く動かします。このツールは標準大気モデルに基づいて歩度偏差を推定します。',
    negligible: '無視できる',
    minor: 'わずか',
    noticeable: '目立つ',
    significant: '顕著',
    severe: '深刻',
    step1: 'スライダーをドラッグして、海抜から8,000mまでの標高をシミュレートします。',
    step2: 'テンプのアニメーションと偏差ゲージがリアルタイムで反応するのを確認します。',
    step3: '大気データを確認して、環境要因を理解します。',
    tipTitle: 'ヒント',
    tipContent: '効果はムーブメントによって異なります：高振動ムーブメント（36,000振動/時）は、ビンテージ低振動ムーブメント（18,000振動/時）よりも影響を受けにくい傾向があります。',
    deviationChart: '偏差 vs 高度',
    altitudeM: '高度 (m)',
    secondsPerDay: '秒/日',
    particleLabel: '空気分子',
    airDensity: '空気密度',
  },
  seo: [
    { type: 'title', text: '機械式時計のためのインタラクティブ高度精度推定ツール', level: 2 },
    { type: 'paragraph', html: '<strong>高度精度推定ツール</strong>は、標高変化が機械式時計の精度にどのように影響するかを可視化するインタラクティブツールです。海抜から8,000mまでの高度をシミュレーションすることで、空気密度、気圧、温度の変化による推定歩度偏差を確認できます。' },
    { type: 'title', text: '高度が時計の精度に与える影響', level: 3 },
    { type: 'paragraph', html: '高地では<strong>空気密度が低下し</strong>、テンプの空気抵抗が減少します。これによりテンプはより大きな振幅で振動し、時計がわずかに速く動きます。効果は通常、1,000mの上昇につき<strong>1日あたり+2〜+6秒</strong>の範囲です。' },
    { type: 'title', text: '異なる高度での歩度偏差', level: 3 },
    {
      type: 'table', headers: ['高度', '空気密度', '気圧', '気温', '推定偏差'], rows: [
        ['海抜 (0m)', '1.225 kg/m³', '1013 hPa', '15°C', '基準'],
        ['1,000m', '1.112 kg/m³', '898 hPa', '8.5°C', '+0.4 秒/日'],
        ['2,000m', '1.007 kg/m³', '795 hPa', '2°C', '+0.9 秒/日'],
        ['3,000m', '0.909 kg/m³', '701 hPa', '-4.5°C', '+1.5 秒/日'],
        ['4,000m', '0.819 kg/m³', '616 hPa', '-11°C', '+2.1 秒/日'],
        ['5,000m', '0.736 kg/m³', '540 hPa', '-17.5°C', '+2.8 秒/日'],
      ]
    },
    { type: 'title', text: '環境要因', level: 3 },
    { type: 'paragraph', html: '空気密度以外にも、高地での他の環境要因が時計の性能に影響を与える可能性があります：<strong>温度</strong>は潤滑油の粘度とぜんまいの弾性に影響し、<strong>気圧変化</strong>はケースの密閉に影響を与える可能性があります。しかし、テンプの抵抗に対する空気密度の影響が、高度関連の歩度変化の支配的要因です。' },
    { type: 'diagnostic', variant: 'info', title: 'インタラクティブシミュレーションツール', icon: 'mdi:axis-arrow', badge: '時計学', html: 'このツールはISAモデルと経験的観測に基づく推定値を提供します。実際の結果はムーブメントのキャリバー、状態、製造公差によって異なります。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

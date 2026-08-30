import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '太陽時と恒星時の違いは何ですか？',
    answer: '太陽時は太陽のローカルメリディアンに対する位置に基づいており（24時間）、恒星時は地球の遠方の背景星に対する回転に基づいています（23時間56分4.09秒）。',
  },
  {
    question: 'なぜ恒星日は太陽日より短いのですか？',
    answer: '地球は自転しながら、太陽の周りの軌道に沿って移動しています。再び太陽の方向を向くためには、地球は360度よりわずかに多く回転する必要があり、単純な恒星基準の回転と比較して約3分56秒が1日に追加されます。',
  },
  {
    question: '経度はどのようにローカル恒星時に影響しますか？',
    answer: 'ローカル恒星時は、観測者の経度（度を時間に変換：15度/時）をグリニッジ平均恒星時（GMST）に加算して計算されます。東に1度進むごとに、ローカル恒星時に4分が追加されます。',
  },
];

const howTo = [
  {
    name: '基準経度を設定',
    text: 'スライダーをローカル経度に合わせます。これにより、24時間の恒星時スケールがローカルメリディアンに調整されます。',
  },
  {
    name: '太陽時針と恒星時針を観察',
    text: '文字盤を見てください：標準の太陽時針は内側の12時間ダイヤルにUTC時刻を表示し、金色の針と星は外側の24時間スケールに恒星時を表示します。',
  },
  {
    name: '天体速度を加速',
    text: '200倍または5000倍の速度乗数をクリックして、恒星背景球の回転とドリフトの蓄積をリアルタイムで観察します。',
  },
];

const title = '天文恒星時トラッカー：ローカル恒星時計';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'sidereal-time-tracker',
  title,
  description: '芸術的な天文アストロラーベ文字盤とリアルタイム恒星ドリフトシミュレーターで、グリニッジ平均恒星時（GMST）とローカル恒星時（LST）を追跡します。',
  ui: {
    title: '恒星時トラッカー',
    longitudeLabel: '観測者の経度',
    solarTimeLabel: '協定世界時（UTC）',
    siderealTimeLabel: 'ローカル恒星時（LST）',
    differenceLabel: '恒星-太陽ドリフト',
    utcLabel: 'UTC日時',
    speedLabel: '天体速度',
    speedNormal: '1倍（リアルタイム）',
    speedFast: '200倍（タイムラプス）',
    speedVeryFast: '5000倍（ドリフト）',
    audioToggleLabel: '宇宙のチャイム音',
    step1: 'ローカル経度を調整して、ローカル恒星時の変化をリアルタイムで確認します。',
    step2: '速度乗数を切り替えて、標準の太陽時針と恒星天球のドリフトを観察します。',
    step3: '宇宙のチャイム音を有効にして、標準のチック音と天文時の経過音の違いを聞きます。',
    tipTitle: '天文ドリフト',
    tipContent: '地球が太陽の周りを公転しているため、標準の太陽時計は恒星時より1日あたり3分56秒遅れ、1年の間に正確に24時間のドリフトが生じます。',
    useLocationBtn: '現在地を使用',
    hemisphereLabel: '恒星半球',
    hemisphereNorth: '北（おおぐま座）',
    hemisphereSouth: '南（みなみじゅうじ座）',
    longitudeFormatLabel: '経度形式',
    longitudeFormatDecimal: '十進度',
    longitudeFormatDMS: '度/分',
  },
  seo: [
    { type: 'title', text: '恒星時とは？', level: 2 },
    { type: 'paragraph', html: '恒星時は、天文学者が天体を特定するために使用する時間計測システムです。恒星日は約23時間56分4.09秒です。これは、太陽ではなく、春分点または遠方の恒星に対して地球が地軸の周りを1回完全に自転するのにかかる時間です。' },
    { type: 'title', text: '太陽日 vs 恒星日', level: 3 },
    { type: 'paragraph', html: '太陽日は、太陽がローカルメリディアンを連続して通過する間の時間を測定します。地球は毎日太陽の周りの軌道の約1/365を移動するため、太陽と再び位置を合わせるには360度よりわずかに多く回転する必要があります。恒星日は恒星に対する真の360度回転であり、3分56秒短くなっています。' },
    { type: 'title', text: '天文学者と時計職人が注目する理由', level: 3 },
    { type: 'paragraph', html: '天文学者にとって、星は同じ恒星時には常に空の同じ位置にあります。星を追跡するには、望遠鏡マウントが恒星日に正確に1回回転する必要があります。高級時計ブランド（パテック・フィリップ、ヴァシュロン・コンスタンタン、IWCなど）は、恒星時歯車列を備えた超複雑な天文時計を製造し、LSTを腕元で直接追跡できるようにしています。' },
    { type: 'title', text: '恒星 vs 太陽ドリフト参考表', level: 3 },
    {
      type: 'table', headers: ['経過日数', '恒星時の進み', '回転角度のずれ', '星座のドリフト'], rows: [
        ['1日', '3分56秒', '0.986°', 'わずかに西へ'],
        ['15日', '59分0秒', '14.79°', '星座半分のずれ'],
        ['30日', '1時間58分', '29.58°', '黄道十二星座1つ分のずれ'],
        ['90日', '5時間54分', '88.74°', '季節1つ分のずれ'],
        ['180日', '11時間48分', '177.48°', '真夜中に反対側の星座が出現'],
        ['365日', '24時間0分', '360.00°', '完全な周期、星の位置がリセット'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'J2000元期から計算', icon: 'mdi:creation-outline', badge: '計算', html: 'ローカル恒星時は、UTC時刻をユリウス日（-4712年からの日数）に変換し、グリニッジ平均恒星時を求め、経度（15度/時）を適用して計算されます。このツールは、高精度のIAU J2000線形モデルを使用してリアルタイムで追跡します。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);

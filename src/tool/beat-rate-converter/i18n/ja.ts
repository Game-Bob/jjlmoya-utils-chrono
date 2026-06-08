import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beat-rate-converter',
  title: '時計ビートレート変換器: VPHをHz・1日当たりの誤差に',
  description: '毎時の振動数（VPH）をヘルツ、秒当たりのチック数に変換し、チックが1つミスした際の日々の影響を計算します。ETA、Sellita、Miyota、Seiko、Rolex、Omega、Zenithのカリバーに対応。',
  ui: {
    title: 'ビートレート変換器',
    vphLabel: 'ムーベント',
    selectMovement: 'ムーベントを選択',
    customMovement: 'カスタム',
    customVph: '毎時の振動数',
    resultsTitle: '計算結果',
    frequency: '周波数',
    ticksPerSec: '1秒当たりのチック数',
    lostTickImpact: '1時間当たり1チック失った場合',
    lostTickExplainer: '28,800 VPH時、1時間当たり1チックのミスは、約3秒/日の誤差となります。ビートレートが低いほど影響は拡大されます。',
    step1: 'ムーベントを選択か、カスタムのVPHを入力してください。',
    step2: 'Hz周波数、秒当たりのチック数、およびチックミスの影響を確認できます。',
    tipTitle: 'ヒント',
    tipContent: '高いビートレート（36,000 VPH）は、より滑らかな秒針の動きと精度向上に寄与しますが、エスケープメントへの負担も増します。',
  },
  seo: [
    { type: 'title', text: '時計ビートレート変換器 - VPHをHz・1日当たりの秒数に変換', level: 2 },
    { type: 'paragraph', html: 'すべての機械式時計には固有のビートレートがあります-つまり、天車が1時間に何回振動するかを示す数値です。この数値によって、秒針の滑らかさと時計の精度が決まります。この変換器は<strong>VPHをHzと秒当たりのチック数に変換し</strong>、1つのチックがミスした際の実際の影響を示します。' },
    { type: 'title', text: 'ビートレートとは?', level: 3 },
    { type: 'paragraph', html: 'ビートレートは、毎時の振動数（vph）で測られ、時計の天車が振動する周波数です。一般的なレートは28,800 VPH（4 Hz、8チック/秒）です。36,000 VPH（5 Hz）のような高いビートレートはより滑らかな動きを生み出し、位置誤差の影響を減らすことで理論的に精度を向上できます。' },
    { type: 'title', text: 'チックミスが重要な理由', level: 3 },
    { type: 'paragraph', html: '摩擦、磁気、または摩耗によってエスケープメントがチックを一つ送れなかった場合、そのチックはそのまま失われた時間になります。28,800 VPHでは、1時間当たり1チックのミスが積み重なり、約<strong>1日当たり3秒</strong>の誤差となります。18,000 VPHでは同じ誤差が毎日ほぼ5秒になります。このツールで、調整にかかわる数学的な仕組みが理解できます。' },
    { type: 'title', text: '一般的なビートレート', level: 3 },
    { type: 'paragraph', html: 'ビンテージのポケットウォッチや古いオートマチックはよく18,000 VPH（2.5 Hz）で動きます。多くのSeikoやMiyotaのカリバーは21,600 VPH（3 Hz）を使用します。現代の標準は28,800 VPH（4 Hz）で、ETA、Sellita、Rolexなどが採用しています。Zenith El Primeroのような高周波ムーベントは36,000 VPH（5 Hz）で動作し、より高い精度を実現しています。' },
  ],
  faq: [
    {
      question: 'VPHをHzに変換するにはどうすればいいですか?',
      answer: 'VPHを7,200で割ってください。28,800 VPHの時計は4 Hzとなります（28,800 ÷ 7,200 = 4）。7,200での割算は、1回の全振動が2回の振動を含み、1時間が3,600秒であることを考慮しています。',
    },
    {
      question: '高いビートレートは精度にどのような影響を与えますか?',
      answer: '一般に、高いビートレートは天車が位置による撮乱を受けにくくするため、理論的な精度が向上します。しかし、パレット石やエスケープ車につのる摩擦や摩耗も増えるため、より良い潤滑と頻繁なメンテナンスが必要です。',
    },
    {
      question: 'チックミスは日々の精度にどのように影響しますか?',
      answer: '1時間当たり1チックのミスは、1日当たり24チックの損失です。失われる時間はビートレートによって異なります。86,400をVPHで割ってください。28,800 VPHでは1日当たり3秒、18,000 VPHでは4.8秒です。',
    },
    {
      question: '時計はミスしたチックを取り戻せますか?',
      answer: 'いいえ。一度チックがミスされると、その時間は永久的に失われます。時計が「追い付く」ことはありません。そのため、エスケープメントの状態-パレット石の清掃、適切な潤滑、正しいビートエラー-が日々の進行差に直接影響します。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'カリバーを選択',
      text: 'ドロップダウンからムーベントを選んでください。各プリセットには、そのカリバーに対応した正しいVPHが含まれています。',
    },
    {
      name: '結果を確認',
      text: 'カードには、Hz周波数、秒当たりのチック数、および1つのチックミスが日々に与える影響が表示されます。',
    },
    {
      name: 'カスタムVPHを試す',
      text: '「カスタム」を選択すると、ビンテージや一般的ではないムーベントに対して任意のVPH値を入力できます。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'VPHをHzに変換するにはどうすればいいですか?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'VPHを7,200で割ってください。28,800 VPHの時計は4 Hzです。7,200での割算は、1回の振動が2回の振動を含み、1時間が3,600秒であることを考慮しています。',
          },
        },
        {
          '@type': 'Question',
          'name': '高いビートレートは精度にどのような影響を与えますか?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '高いビートレートは天車が位置による撮乱を受けにくくするため、理論的な精度が向上します。しかし、摩擦や摩耗も増えます。',
          },
        },
        {
          '@type': 'Question',
          'name': 'チックミスは日々の精度にどのように影響しますか?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1時間当たり1チックのミスは、1日当たり24チックの損失です。86,400をVPHで割って、失われる秒数を求めてください。',
          },
        },
        {
          '@type': 'Question',
          'name': '時計はミスしたチックを取り戻せますか?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'いいえ。一度チックがミスされると、その時間は永久的に失われます。時計が追い付くことはありません。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計ビートレート変換器',
      'operatingSystem': '全プラットフォーム',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5対応。JavaScriptが必要。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'VPHをHzに変換し、チックミスの影響を計算する方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'カリバーを選択',
          'text': 'ドロップダウンからムーベントを選んでください。各プリセットには、そのカリバーに対応した正しいVPHが含まれています。',
        },
        {
          '@type': 'HowToStep',
          'name': '結果を確認',
          'text': 'カードには、Hz周波数、秒当たりのチック数、および1つのチックミスが日々に与える影響が表示されます。',
        },
        {
          '@type': 'HowToStep',
          'name': 'カスタムVPHを試す',
          'text': '「カスタム」を選択すると、ビンテージや一般的ではないムーベントに対して任意のVPH値を入力できます。',
        },
      ],
    },
  ],
};

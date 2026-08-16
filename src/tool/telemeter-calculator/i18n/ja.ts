import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeter-calculator',
  title: 'テレメーター計算機：腕時計のテレメーター（測距計）の使い方',
  description: '腕時計のテレメーターベゼルの使い方を学びましょう。気温に基づいて、雷の光から音が聞こえるまでの距離を計算します。',
  ui: {
    title: 'テレメーター計算機',
    triggerFlash: '光のトリガー',
    triggerSound: '音のトリガー',
    stop: 'ストップ',
    reset: 'リセット',
    settings: '設定',
    unitSystem: '単位系',
    metric: 'メートル法 (km)',
    imperial: 'ヤード・ポンド法 (マイル)',
    temperature: '気温',
    speedOfSound: '音速',
    distanceResult: '測定距離',
    elapsedTime: '経過時間',
    historyTitle: '測定履歴',
    noHistory: '履歴がありません。上のボタンから測定を開始してください。',
    sec: '秒',
    km: 'km',
    m: 'm',
    mi: 'マイル',
    ft: 'フィート',
    step1: '稲妻などの光が見えた瞬間に、2時位置のプッシャーまたは「光のトリガー」をクリックします。',
    step2: '雷鳴などの音が聞こえた瞬間に、もう一度クリックするか「音のトリガー」をクリックします。',
    step3: 'テレメーターベゼル上でクロノグラフ秒針が指している距離を読み取ります。',
    tipTitle: 'プロのアドバイス',
    tipContent: '暖かい空気は冷たい空気よりも音を速く伝えます。周囲の気温を調節することで、お使いの環境における物理的な音響に一致した正確な距離計算を行えます。',
  },
  seo: [
  {
    "type": "title",
    "text": "腕時計のテレメーターベゼルとは",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "テレメーターは、視覚（光）と聴覚（音）の到達時間の差を利用して距離を測定するスケールです。"
  },
  {
    "type": "title",
    "text": "テレメータースケールの使い方",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "ステップ1: スタート",
        "definition": "閃光が見えた瞬間にストップウォッチを開始します。"
      },
      {
        "term": "ステップ2: ストップ",
        "definition": "音が聞こえた瞬間にストップウォッチを停止します。"
      },
      {
        "term": "ステップ3: 目盛りを読み取る",
        "definition": "針が指している数字が距離（kmまたはマイル）です。"
      }
    ]
  },
  {
    "type": "title",
    "text": "距離計算の物理的仕組み",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "光速は約30万km/s（瞬時に到達）、音速は20℃の空気中で約343m/sです。"
  },
  {
    "type": "title",
    "text": "テレメーターとタキメーターの比較",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "<strong>タキメーター</strong>は速度を測定し、<strong>テレメーター</strong>は距離を測定します。"
  },
  {
    "type": "title",
    "text": "時間対距離参照表",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "経過時間",
      "距離 (km)",
      "距離 (マイル)",
      "音速"
    ],
    "rows": [
      [
        "1.0 秒",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 秒",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 秒",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 秒",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 秒",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 秒",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 秒",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "気温による音速の変化",
    "icon": "mdi:information",
    "badge": "精度",
    "html": "暖かい空気中では音速が速くなります。気温補正機能により正確な距離が求まります。"
  }
],
  faq: [
  {
    "question": "テレメーターベゼルは何に使用しますか？",
    "answer": "光と音の両方が発生する現象（雷と雷鳴など）までの距離を測定するために使用します。"
  },
  {
    "question": "テレメーターで雷までの距離を測る方法は？",
    "answer": "稲妻が見えた瞬間にクロノグラフをスタートし、雷鳴が聞こえたらストップします。針が指す数字が距離です。"
  },
  {
    "question": "タキメーターとテレメーターの違いは？",
    "answer": "タキメーターは一定距離間の速度を測定し、テレメーターは経過時間から距離を測定します。"
  },
  {
    "question": "テレメーターの精度はどのくらいですか？",
    "answer": "気温20℃での音速（約343m/s）を基準に計算されています。"
  },
  {
    "question": "水中でもテレメーターを使えますか？",
    "answer": "いいえ、水中では音速が空気中の4倍以上速くなるため正確に測定できません。"
  }
],
  bibliography,
  howTo: [
  {
    "name": "単位と気温を設定",
    "text": "メートル法/ヤード・ポンド法を選択し、現在の気温を入力します。"
  },
  {
    "name": "光が見えたらスタート",
    "text": "稲妻が見えた瞬間にボタンを押します。"
  },
  {
    "name": "音が聞こえたらストップ",
    "text": "雷鳴が聞こえた瞬間に再度ボタンを押します。"
  },
  {
    "name": "距離を読み取る",
    "text": "測定された距離を画面またはベゼルから読み取ります。"
  }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

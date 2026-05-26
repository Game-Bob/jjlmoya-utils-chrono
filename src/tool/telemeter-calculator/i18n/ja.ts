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
    { type: 'title', text: '腕時計のテレメーター（測距計）ベゼルとは？', level: 2 },
    { type: 'paragraph', html: 'テレメーターは、クロノグラフ（ストップウォッチ機能付き腕時計）の文字盤やベゼルに印刷されている目盛りです。光（視覚的なイベント）と音（聴覚的なイベント）の速度差を利用して、対象物までの距離を即座に算出できます。' },
  ],
  faq: [
    {
      question: 'テレメーターベゼルはどのように使いますか？',
      answer: '雷の光などが見えた瞬間にストップウォッチをスタートさせ、音が聞こえた瞬間にストップします。秒針が指しているベゼルの数値が、対象までの距離（キロメートルまたはマイル）になります。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '単位と環境の設定',
      text: '表示単位（メートルまたはマイル）を選択し、現在の場所の気温を設定します。',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);

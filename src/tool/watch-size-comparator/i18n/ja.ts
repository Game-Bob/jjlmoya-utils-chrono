import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'watch-size-comparator',
  title: '腕時計サイズ比較ツール—手首に合うサイズを視覚的に確認',
  description: '腕時計のケースサイズを視覚的に比較。直径、ラグ間距離、手首サイズを入力して、購入前にフィット感を確認できます。',
  ui: {
    title: '腕時計サイズ比較ツール',
    addWatch: '腕時計を追加',
    watchName: '腕時計名',
    watchNamePlaceholder: '例：ロレックス サブマリーナー',
    caseDiameter: 'ケース直径',
    lugToLug: 'ラグ間距離',
    thickness: '厚み',
    wristSize: '手首サイズ',
    wristSizePlaceholder: '例：17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: '削除',
    yourWatches: 'あなたの腕時計',
    fitLegend: 'フィット凡例',
    excellentFit: '最適',
    goodFit: '良好',
    borderlineFit: 'やや大きい',
    largeFit: '大きすぎる',
    wristCurve: '手首',
    nameRequired: '腕時計名を入力してください',
    watchTooLarge: '腕時計が手首からはみ出しています',
    l2lExceedsWrist: 'ラグ間距離が手首幅を超えています',
    excellentDesc: 'バランス良好—ラグ間距離が手首にしっかり収まります。',
    goodDesc: '良好—ややはみ出しますが、着用感は快適です。',
    borderlineDesc: 'ギリギリ—ラグが手首の端に近づいています。',
    largeDesc: '大きすぎる—ラグが手首からはみ出しそうです。',
    fitsWell: 'フィット良好',
    slightlyLarge: 'やや大きい',
    tooLarge: '大きすぎる',
    source: 'サイズガイド',
    estimateNote: '各サイズを入力して腕時計を追加すると、手首へのフィット感がわかります。',
  },
  seo: [
    { type: 'title', text: '腕時計サイズ比較ツール—手首に合うサイズを視覚的に確認', level: 2 },
    { type: 'paragraph', html: '<strong>42mmの腕時計</strong>が<strong>17cmの手首</strong>に合うか気になったことはありませんか？48mmのラグ間距離でははみ出してしまうでしょうか？腕時計サイズ比較ツールなら、視覚的に答えがわかります。ケース直径、ラグ間距離、厚み、手首サイズを入力するだけで、ツールが実寸で描画し、フィット感を<span style="color:#22c55e">緑（最適）</span>から<span style="color:#ef4444">赤（大きすぎる）</span>まで色分け。メートル法とヤード・ポンド法の両方に対応しています。' },
    { type: 'title', text: '腕時計サイズ用語集', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'ケース直径', definition: '文字盤を挟むケースの幅（竜頭を除く）。一般的な範囲は34〜46mm。最もよく使われるサイズ表記ですが、フィット感を決める唯一の要素ではありません。' },
        { term: 'ラグ間距離（L2L）', definition: 'ストラップが取り付けられる上部と下部のラグの間の距離。腕時計が手首からはみ出すかどうかを決定します。40mmケースでもL2Lが50mmなら、42mmケースでL2Lが46mmのものより大きく見えます。' },
        { term: '手首平幅', definition: '手首の上面の幅（周囲長ではなく）。おおよそ手首周囲長÷πから2〜4cm引いた値。腕時計が実際に載る面の寸法です。' },
        { term: 'ケース対手首比', definition: 'ケース直径を手首幅で割った値。0.6〜0.75（60〜75%）がクラシックなバランスの良いフィットとされています。' },
      ]
    },

    { type: 'title', text: 'どのサイズの腕時計が私の手首に合うのか？', level: 3 },
    {
      type: 'table', headers: ['手首周囲長', '平幅（目安）', '理想のケース直径', '最大ラグ間距離', 'おすすめ'], rows: [
        ['14〜15 cm', '38〜42 mm', '30〜34 mm', '38〜42 mm', 'ヴィンテージ＆ドレスウォッチ'],
        ['15〜16 cm', '40〜44 mm', '34〜36 mm', '40〜44 mm', 'スモールクラシックウォッチ'],
        ['16〜17 cm', '42〜46 mm', '36〜39 mm', '42〜46 mm', 'デイリーユースの万能サイズ'],
        ['17〜18 cm', '44〜48 mm', '38〜42 mm', '44〜48 mm', '多くのブランドに合うスイートスポット'],
        ['18〜19 cm', '46〜50 mm', '40〜44 mm', '46〜50 mm', 'ダイバーズウォッチ＆GMT'],
        ['19〜20 cm', '48〜52 mm', '42〜46 mm', '48〜52 mm', 'ツールウォッチ＆パイロットウォッチ'],
        ['20〜21 cm', '50〜54 mm', '44〜48 mm', '50〜54 mm', 'オーバーサイズ＆フリーガーウォッチ'],
      ]
    },

    { type: 'title', text: '手首の測り方', level: 3 },
    {
      type: 'list', items: [
        '柔らかいメジャーを手首の骨（尺骨茎状突起）のすぐ後ろに巻きます。きつすぎず、緩すぎず、ぴったりと巻いてください。',
        'メジャーがない場合は、紐やケーブルを使って一周し、重なった位置を印にしておいてから定規で測ります。',
        '測定値をセンチまたはインチで記録します。平均的な男性の手首は17〜19cm、女性は14〜16cmです。',
        '手首の平幅を推定するには、周囲長から2〜4cm引くか、ツールの自動推定機能を使ってください。',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'ラグ間距離こそが本当の着用限界', icon: 'mdi:ruler', html: '多くの人は<strong>ケース直径</strong>に注目しますが、実際に手首に合うかどうかを決めるのは<strong>ラグ間距離</strong>です。55mmの平幅（手首周囲17cm）にL2Lが48mmの腕時計は、手首幅の87%を占めます。65%を超えるとラグが手首の端に近づき始めます。<strong>まずはL2Lを確認しましょう。</strong>' },

    { type: 'tip', title: 'CMとインチ、使い慣れた単位で', html: 'ツールはメートル法とヤード・ポンド法の両方に対応しています。日常使っている単位で手首を測ってください。ケースサイズは<strong>常にミリメートル表記</strong>（アメリカでも同様）なので、直径とL2Lはmmのまま、手首の測定だけ切り替わります。これは業界標準に合わせた設計です。' },

    {
      type: 'summary', title: '購入前クイックチェックリスト', items: [
        '手首の周囲長を測ってツールに入力しましょう。',
        'ケース直径だけでなく、ラグ間距離も確認してください。',
        'クラシックなフィット感なら、手首平幅の60〜75%を目安に。',
        'ラグが手首の端からはみ出す場合、直径に関わらず大きく感じます。',
        '購入前に複数の腕時計をツールで並べて比較してみましょう。',
      ]
    },
  ],
  faq: [
    {
      question: '腕時計のサイズを合わせるための手首の測り方は？',
      answer: '柔らかいメジャーを手首の骨の周りに巻いて測ります。なければ紐を使って一周し、重なった位置を定規で測ってください。平均は男性17〜19cm、女性14〜16cmです。',
    },
    {
      question: 'ラグ間距離とは？なぜ重要なの？',
      answer: 'ラグ間距離は上部と下部のラグの間の距離です。腕時計が手首からはみ出すかどうかを決める重要な寸法です。17cmの手首（平幅約55mm）に48mmのL2Lだと占有率87%でバランスが良く、65%を超えるとはみ出し始めます。',
    },
    {
      question: '17cmの手首に合う腕時計のサイズは？',
      answer: '17cmの手首（平幅約55mm）には、直径36〜42mm、ラグ間距離44〜50mmの腕時計が快適にフィットします。スイートスポットは38〜40mmでL2Lが46〜48mmです。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '手首サイズを入力',
      text: '手首の周囲長をセンチメートルで入力します。ツールが手首のシルエットを表示します。',
    },
    {
      name: '腕時計のスペックを入力',
      text: 'ケース直径、ラグ間距離、厚みをミリメートルで入力します。',
    },
    {
      name: '追加して比較',
      text: '「腕時計を追加」をクリックして保存。複数の腕時計を追加して、クリックで切り替えながらフィット感を比較できます。',
    },
    {
      name: '色で判定',
      text: '緑＝最適、黄＝ギリギリ、赤＝大きすぎる、の3段階です。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '腕時計のサイズを合わせるための手首の測り方は？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '柔らかいメジャーを手首の骨の周りに巻いて測ります。平均は男性17〜19cm、女性14〜16cmです。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ラグ間距離とは？なぜ重要なの？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ラグ間距離は上部と下部のラグの間の距離で、腕時計が手首からはみ出すかどうかを決めます。',
          },
        },
        {
          '@type': 'Question',
          'name': '17cmの手首に合う腕時計のサイズは？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '17cmの手首には直径36〜42mm、ラグ間距離44〜50mmが快適にフィットします。スイートスポットは38〜40mmでL2Lが46〜48mmです。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '腕時計サイズ比較ツール',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5対応。JavaScript必須。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '腕時計サイズの比較方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '手首サイズを入力',
          'text': '手首の周囲長をセンチメートルで入力します。',
        },
        {
          '@type': 'HowToStep',
          'name': '腕時計のスペックを入力',
          'text': 'ケース直径、ラグ間距離、厚みを入力します。',
        },
        {
          '@type': 'HowToStep',
          'name': '追加して比較',
          'text': '「腕時計を追加」をクリックして保存。複数の腕時計を追加して比較します。',
        },
      ],
    },
  ],
};

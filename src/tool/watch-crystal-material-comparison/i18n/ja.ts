import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "最も傷に強い時計の風防はどれですか？",
    "answer": "モース硬度9のサファイアガラスが最も傷に強く、ダイヤモンドの次に硬いです。ミネラルガラス（硬度5）は標準的で、ヘサライト（硬度2-3）は傷つきやすいですがPolywatchで簡単に磨けます。"
  },
  {
    "question": "傷のついたヘサライト風防は修理できますか？",
    "answer": "はい、アクリル製のヘサライトはPolywatchなどの研磨剤で数分で磨き直せます。ミネラルやサファイアガラスは研磨できず交換が必要です。"
  },
  {
    "question": "サファイアガラスは割れませんか？",
    "answer": "いいえ、サファイアガラスは非常に硬いものの強い衝撃で割れることがあります。ヘサライトは変形するため衝撃耐性が最も高いです。"
  },
  {
    "question": "ダイバーズウォッチに最適な風防はどれですか？",
    "answer": "耐傷性と耐水圧性に優れるサファイアガラスがダイバーズウォッチの標準です。"
  }
];
const howTo = [
  {
    "name": "風防タイプを選択",
    "text": "リストから風防を選択するとスペックが表示されます。"
  },
  {
    "name": "2つの風防を比較",
    "text": "ドラッグ＆ドロップで2つの風防を並べて比較できます。"
  },
  {
    "name": "比較を終了",
    "text": "閉じるボタンを押して個別表示に戻ります。"
  }
];
const title = '時計風防比較 ヘサライト vs ミネラルガラス vs サファイアガラス';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'watch-crystal-material-comparison',
  title,
  description: 'ヘサライト、ミネラルガラス、サファイアの時計クリスタルをインタラクティブな統計カードで比較。硬度、透明度、耐衝撃性、耐傷性、耐久性を一目で確認。',
  ui: {
    title: 'クリスタル比較', subTitle: 'Interactive Crystal Stats', hardness: '硬度', clarity: '透明度',
    impactResistance: '耐衝撃', scratchResistance: '耐傷', durability: '耐久性', priceRange: '価格',
    step1: '左のクリスタルをクリック。', step2: 'ドラッグして別のクリスタルにドロップ。',
    step3: '閉じるをクリック。', tipTitle: 'ヒント',
    tipContent: '総合評価は全ステータスの平均です。高いほど常に良いとは限りません - ヘサライトは耐衝撃性に優れています。',
    dragHint: 'ドラッグ', dragSub: 'して比較',
  },
  seo: [
  {
    "type": "title",
    "text": "ヘサライト vs ミネラルガラス vs サファイアガラス 時計風防徹底比較ガイド",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "腕時計の<strong>風防素材</strong>選びは重要なポイントです。このガイドでは<strong>ヘサライト、ミネラルガラス、サファイアガラス</strong>の硬度、透明度、耐衝撃性、価格を比較します。"
  },
  {
    "type": "title",
    "text": "ヘサライト風防（アクリル・プラスチック）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "1930年代から使われる伝統的な風防素材です。軽量で耐衝撃性に優れ、オメガのスピードマスター・プロフェッショナル（月面着陸モデル）で有名です。"
  },
  {
    "type": "title",
    "text": "ミネラルガラス（強化ガラス）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "熱処理された珪酸塩ガラスで、モース硬度5。セイコーやシチズンなど中価格帯の時計に広く採用されています。"
  },
  {
    "type": "title",
    "text": "サファイアガラス（人工サファイア）",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "モース硬度9を誇る最高峰の風防素材です。非常に傷つきにくく高い透明度を持ち、高級時計の標準素材です。"
  },
  {
    "type": "title",
    "text": "風防スペック比較表",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "項目",
      "ヘサライト",
      "ミネラルガラス",
      "サファイアガラス"
    ],
    "rows": [
      [
        "モース硬度",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "透明度",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "耐衝撃性",
        "5/10（最高）",
        "3/10",
        "2/10"
      ],
      [
        "耐傷性",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "研磨修理",
        "可能",
        "不可（交換）",
        "不可（交換）"
      ],
      [
        "価格帯",
        "¥1,000〜",
        "¥2,000〜",
        "¥5,000〜"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "風防選びのアドバイス",
    "icon": "mdi:diamond-stone",
    "badge": "参考",
    "html": "<strong>日常使い</strong>には傷のつきにくいサファイアガラスが最適です。<strong>ヴィンテージウォッチ</strong>にはクラシックなヘサライトが好まれます。"
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

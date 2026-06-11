import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: '最も傷つきにくい時計のクリスタルは？', answer: 'サファイアクリスタルはモース硬度9で最も傷つきにくく、ダイヤモンドだけがより硬いです。ミネラルガラス(5)は中程度、ヘサライト(2-3)は傷つきやすいですが研磨可能です。' },
  { question: '傷ついたヘサライトクリスタルは修理できますか？', answer: 'はい、ヘサライトの傷はPolywatchで数分で研磨できます。ミネラルガラスとサファイアは研磨できず交換が必要です。' },
  { question: 'ダイビングウォッチに最適なクリスタルは？', answer: 'サファイアは耐傷性と耐久性からダイビングウォッチの標準です。ヘサライトはダイビングには推奨されません。' },
];
const howTo = [
  { name: 'クリスタルを選択', text: '左のクリスタルをクリックすると、右に統計カードが表示されます。' },
  { name: '2つのクリスタルを比較', text: 'リストからクリスタルをドラッグして別のクリスタルにドロップすると並べて比較できます。' },
  { name: '比較を閉じる', text: '「Close Comparison」をクリックすると単一表示に戻ります。' },
];
const title = '時計クリスタル比較: ヘサライト vs ミネラル vs サファイア';

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
    { type: 'title', text: '時計クリスタル比較: ヘサライト vs ミネラル vs サファイア', level: 2 },
    { type: 'paragraph', html: '<strong>ヘサライト、ミネラルガラス、サファイア</strong>をインタラクティブな統計カードで比較。' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

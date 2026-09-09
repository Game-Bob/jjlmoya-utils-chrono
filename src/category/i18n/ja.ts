import type { CategoryLocaleContent } from "../../types";

const slug = "horology";
const title = "時計学ツール＆リファレンスガイド";
const description =
  "時計愛好家のためのプロ仕様の時計学ユーティリティ-の追跡、ムーブメントの消磁、装着時間の計算、人気キャリバーの竜頭位置リファレンスを提供します。";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "時間を理解するための作業台", level: 2 },
    {
      type: "paragraph",
      html: `時計学は、文字盤がただの画像ではなく、読み解けるシステムになったときに始まります。このコレクションには、歩度を観察し、ムーブメントのリズムを理解し、りゅうずの動きを読み取り、より多くの文脈で判断するための計器がそろっています。時計師の作業台を置き換えるものではありません。日々の具体的な疑問を、明快な結果と好奇心のための余白を持つ小さな探究へ変えていきます。`,
    },
    { type: "title", text: "目で見える精度", level: 2 },
    {
      type: "paragraph",
      html: `時計がどれだけ進むか遅れるかを確認し、振動数をVPHとHzの間で変換し、装着条件が結果にどう影響するかを探ってみましょう。精度のツールは、比較し、繰り返し、学ぶために設計されています。すべての数値は単位を保ち、変換は意味を保ち、結果は機械式時計への直感を育てます。精度は抽象的なものではなく、観察できる体験になります。`,
    },
    { type: "title", text: "機械の動きを読むリファレンス", level: 2 },
    {
      type: "paragraph",
      html: `りゅうず、ぜんまい、風防、夜光、輪列は、同じ時計についてそれぞれ違う物語を語ります。りゅうずの位置を調べ、輪列を追い、素材を比べ、ムーンフェイズや永久カレンダー、トゥールビヨンのような複雑機構を眺めてください。すべてブラウザで動作し、利用データは端末に残ります。時計を集め、直し、調整し、より深く見るための実用的なライブラリです。`,
    },
    {
      type: "stats",
      items: [
        { label: "計器数", value: "25", icon: "mdi:tools" },
        { label: "キャリバー数", value: "8+", icon: "mdi:engine" },
        { label: "言語数", value: "15", icon: "mdi:translate" },
        {
          label: "データプライバシー",
          value: "Local",
          icon: "mdi:shield-check",
        },
      ],
    },
  ],
};

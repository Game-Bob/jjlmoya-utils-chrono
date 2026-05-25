import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'water-resistance-converter',
  title: '時計の防水変換ツール–メートル、ATM、バー、フィート',
  description: '時計の防水性能をメートル、フィート、ATM、バーの間で変換します。各性能が日常使い、水泳、ダイビングで実際に何を意味するかを確認しましょう。',
  ui: {
    title: '防水変換ツール',
    depthLabel: '防水性能',
    enterDepth: '耐圧深度を入力',
    unitMeters: 'メートル (m)',
    unitFeet: 'フィート (ft)',
    unitATM: '気圧 (ATM)',
    unitBar: 'バー (bar)',
    convertedValues: '換算値',
    ratingLabel: '性能',
    whatItMeans: '意味',
    notWaterResistant: '非防水',
    notWaterResistantDesc: '水滴も避けてください。完全に水から遠ざけてください。',
    handWash: '生活防水',
    handWashDesc: '手洗い、雨、軽い水滴。水泳やシャワーは避けてください。',
    showerSwim: 'シャワーと水泳',
    showerSwimDesc: 'シャワー、プールでの浅い水泳。潜水やシュノーケリングは避けてください。',
    snorkeling: '水泳とシュノーケリング',
    snorkelingDesc: 'プール水泳、シュノーケリング、ウォータースポーツ。日常使いに優れた防水性。',
    scubaDiving: 'レクリエーションダイビング',
    scubaDivingDesc: 'スキューバダイビング、高負荷のマリンアクティビティ。ISO準拠。',
    saturationDiving: '飽和潜水',
    saturationDivingDesc: 'プロフェッショナルな飽和潜水。極限深度。ヘリウムエスケープバルブ対応。',
    tipTitle: 'ヒント',
    tipContent: '防水性能は経年劣化します。ガスケットとシールは毎年点検し、3\u20135年ごとに交換してください。',
  },
  seo: [
    { type: 'title', text: '時計の防水変換ツール-メートル、ATM、バー、フィートを解説', level: 2 },
    { type: 'paragraph', html: '30メートル防水の表示は、30メートルまで潜れるという意味ではありません。水滴や軽い雨に耐えられるという意味です。この変換ツールは<strong>メートル、フィート、気圧（ATM）、バー</strong>の間を変換し、各性能で実際に何が可能かを示します。' },
    { type: 'title', text: '防水性能の真実', level: 3 },
    { type: 'paragraph', html: '時計の防水性能は実験室で静水圧下でテストされます。実際の使用条件-腕を動かす、潜る、温度変化-では、はるかに高い動水圧が発生します。30m / 3 ATMの時計は生活防水のみです。泳ぐには最低100m / 10 ATMが必要です。スキューバダイビングには200m / 20 ATMが標準的な目安です。' },
    { type: 'title', text: '防水性能が経年劣化する理由', level: 3 },
    { type: 'paragraph', html: '時計を密閉するゴム製のガスケットとOリングは、時間の経過とともに乾燥し、ひび割れ、圧縮されます。熱、紫外線、化学薬品はこのプロセスを加速します。かつて100m防水だった時計でも、5年間メンテナンスなしでは生活防水程度になることがあります。シールは毎年点検し、3〜5年ごとに交換してください。' },
    { type: 'title', text: 'ISO 6425-ダイバーズウォッチの基準', level: 3 },
    { type: 'paragraph', html: '時計が「ダイバーズウォッチ」と呼ばれるには、ISO 6425規格を満たす必要があります：最低100mの防水性、一方向回転ベゼル、蓄光表示、ねじ込み式リューズです。この規格を満たす時計は、定格深度の25%増しでテストされます。200mのISO認証時計は250mでテストされます。' },
  ],
  faq: [
    {
      question: '30メートル防水の時計で泳げますか？',
      answer: 'いいえ。30m / 3 ATMの表示は生活防水のみ-手洗い、雨、汗に対応します。水泳では静水圧テストを超える動水圧が発生します。泳ぐ場合は最低100m / 10 ATMをお選びください。',
    },
    {
      question: 'ATM、バー、メートルの違いは何ですか？',
      answer: '1 ATM = 1バー ≈ 10メートルの静水柱です。時計業界では基本的に同等です。10 ATMの時計は10バーの時計と同じで、約100メートルまで対応します。',
    },
    {
      question: '時計の防水テストはどのくらいの頻度で行うべきですか？',
      answer: '年に1回、特に水に触れる前に。ガスケットとシールは劣化します。3〜5年ごとに、フルメンテナンスですべてのシールを交換する必要があります。',
    },
    {
      question: 'ISO 6425認証とは何ですか？',
      answer: 'ISO 6425はダイバーズウォッチの国際規格です。最低100mの防水性、一方向回転ベゼル、蓄光表示、定格深度の25%増しでのテストを要求します。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '数値を入力',
      text: '時計の防水性能の数値を入力し、単位（メートル、フィート、ATM、バー）を選択します。',
    },
    {
      name: '換算値を確認',
      text: 'カードに4つの単位すべての換算値が同時に表示されます。',
    },
    {
      name: '推奨を確認',
      text: 'ハイライトされたカードは、その防水性能で安全なアクティビティを示します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '30メートル防水の時計で泳げますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'いいえ。30m / 3 ATMの表示は生活防水のみ-手洗い、雨、汗に対応します。泳ぐ場合は最低100m / 10 ATMをお選びください。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ATM、バー、メートルの違いは何ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1バー ≈ 10メートルの静水柱です。時計業界では基本的に同等です。',
          },
        },
        {
          '@type': 'Question',
          'name': '時計の防水テストはどのくらいの頻度で行うべきですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '年に1回、特に水に触れる前に。3〜5年ごとに、フルメンテナンスですべてのシールを交換する必要があります。',
          },
        },
        {
          '@type': 'Question',
          'name': 'ISO 6425認証とは何ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425は最低100mの防水性、一方向回転ベゼル、蓄光表示、定格深度の25%増しでのテストを要求します。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '時計の防水変換ツール',
      'operatingSystem': 'すべて',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5対応。JavaScript対応。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '時計の防水性能を変換する方法',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '数値を入力',
          'text': '時計の防水性能の数値を入力し、単位を選択します。',
        },
        {
          '@type': 'HowToStep',
          'name': '換算値を確認',
          'text': 'カードに4つの単位すべての換算値が同時に表示されます。',
        },
        {
          '@type': 'HowToStep',
          'name': '推奨を確認',
          'text': 'ハイライトされたカードは、その防水性能で安全なアクティビティを示します。',
        },
      ],
    },
  ],
};

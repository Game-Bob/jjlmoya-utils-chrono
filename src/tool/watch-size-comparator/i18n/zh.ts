import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'watch-size-comparator',
  title: '手表尺寸对比器: 腕上佩戴效果预览',
  description: '直观对比不同手表的表壳尺寸。输入表径、表耳间距和手腕周长，买前先看佩戴效果。',
  ui: {
    title: '手表尺寸对比器',
    addWatch: '添加手表',
    watchName: '手表名称',
    watchNamePlaceholder: '例如：劳力士潜航者',
    caseDiameter: '表壳直径',
    lugToLug: '表耳间距',
    thickness: '厚度',
    wristSize: '手腕尺寸',
    wristSizePlaceholder: '例如：17',
    mm: 'mm',
    cm: 'cm',
    unitCm: '厘米',
    unitInches: '英寸',
    remove: '删除',
    yourWatches: '我的手表',
    fitLegend: '佩戴图例',
    excellentFit: '优秀',
    goodFit: '良好',
    borderlineFit: '临界',
    largeFit: '偏大',
    wristCurve: '手腕',
    nameRequired: '请输入手表名称',
    watchTooLarge: '手表超出手腕范围',
    l2lExceedsWrist: '表耳间距超过手腕宽度',
    excellentDesc: '比例协调，表耳间距远小于手腕宽度。',
    goodDesc: '佩戴良好，略微超出但依然舒适。',
    borderlineDesc: '临界状态，表耳接近手腕边缘。',
    largeDesc: '偏大，表耳可能超出手腕。',
    fitsWell: '佩戴合适',
    slightlyLarge: '略微偏大',
    tooLarge: '偏大',
    source: '尺寸指南',
    estimateNote: '输入尺寸并添加手表，查看佩戴效果。',
  },
  seo: [
    { type: 'title', text: '手表尺寸对比器 - 腕上佩戴效果预览', level: 2 },
    { type: 'paragraph', html: '想知道一块 <strong>42mm 的手表</strong>戴在 <strong>17cm 的手腕</strong>上效果如何？或者 48mm 的表耳间距会不会超出手腕？手表尺寸对比器给你直观的答案。输入表径、表耳间距、厚度和手腕尺寸，工具会按比例绘制手表，并用颜色标注佩戴效果-从 <span style="color:#22c55e">绿色（优秀）</span>到 <span style="color:#ef4444">红色（偏大）</span>。同时支持 <strong>公制与英制</strong> 单位。' },
    { type: 'title', text: '手表尺寸术语表', level: 3 },
    {
      type: 'glossary', items: [
        { term: '表壳直径', definition: '手表表壳的横向宽度，不含表冠。常规范围：34-46mm。这是最常见的尺寸参数，但并非衡量佩戴效果的唯一因素。' },
        { term: '表耳间距（L2L）', definition: '上下表耳之间的距离，表带即连接于此。它决定手表是否会超出你的手腕。一块 40mm 表径、50mm 表耳间距的手表，实际佩戴效果比 42mm 表径、46mm 表耳间距的更大。' },
        { term: '手腕平面宽度', definition: '手腕顶部的平面宽度，而非手腕周长。大致等于手腕周长 ÷ π 减去 2-4cm。你的手表实际是佩戴在这个尺寸上的。' },
        { term: '表壳手腕比', definition: '表壳直径除以手腕平面宽度。比值在 0.6-0.75（60-75%）之间被认为是经典的协调比例。' },
      ]
    },

    { type: 'title', text: '我的手适合多大尺寸的手表？', level: 3 },
    {
      type: 'table', headers: ['手腕周长', '平面宽度（约）', '理想表径', '最大表耳间距', '适合风格'], rows: [
        ['14-15 cm（5.5-5.9 in）', '38-42 mm', '30-34 mm', '38-42 mm', '复古及正装表'],
        ['15-16 cm（5.9-6.3 in）', '40-44 mm', '34-36 mm', '40-44 mm', '经典小尺寸手表'],
        ['16-17 cm（6.3-6.7 in）', '42-46 mm', '36-39 mm', '42-46 mm', '日常百搭尺寸'],
        ['17-18 cm（6.7-7.1 in）', '44-48 mm', '38-42 mm', '44-48 mm', '大多数品牌的最佳尺寸'],
        ['18-19 cm（7.1-7.5 in）', '46-50 mm', '40-44 mm', '46-50 mm', '潜水表与 GMT'],
        ['19-20 cm（7.5-7.9 in）', '48-52 mm', '42-46 mm', '48-52 mm', '工具表与飞行员表'],
        ['20-21 cm（7.9-8.3 in）', '50-54 mm', '44-48 mm', '50-54 mm', '大尺寸与飞型表'],
      ]
    },

    { type: 'title', text: '如何测量手腕以选择手表', level: 3 },
    {
      type: 'list', items: [
        '用软尺绕手腕一周，紧贴腕骨（尺骨茎突）后方测量。松紧适中，不宜过紧。',
        '如果没有软尺，可用绳子或数据线绕手腕一圈，标记重叠处，再用直尺测量。',
        '记下测量值（厘米或英寸均可）。男性手腕平均为 17-19cm（6.7-7.5in）；女性为 14-16cm（5.5-6.3in）。',
        '要估算手腕平面宽度，从周长中减去 2-4cm，或使用工具的自动估算功能。',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: '表耳间距才是真正的限制因素', icon: 'mdi:ruler', html: '大多数人只关注 <strong>表壳直径</strong>，但 <strong>表耳间距</strong> 才是决定手表是否适合你的关键。一块表耳间距 48mm 的手表戴在 55mm 平面宽度（17cm 周长）的手腕上，占据手腕宽度的 87%。超过 65% 时，表耳就开始接近手腕边缘。<strong>务必先看表耳间距。</strong>' },

    { type: 'tip', title: '厘米还是英寸？用你习惯的单位就好', html: '本工具同时支持公制和英制。用你日常习惯的单位测量手腕即可。手表表壳尺寸 <strong>始终使用毫米</strong>（即使在美国也是如此），因此表径和表耳间距保持 mm 不变-只有手腕测量值可以切换。这与手表行业的实际做法一致。' },

    {
      type: 'summary', title: '购买前快速检查清单', items: [
        '测量手腕周长并输入工具中。',
        '查看手表的表耳间距-不仅仅是表壳直径。',
        '手表应占据手腕平面宽度的 60-75%，以达到经典协调的佩戴效果。',
        '如果表耳超出你的手腕边缘，无论表径大小，手表都会感觉偏大。',
        '在购买前使用工具并排对比多块手表。',
      ]
    },
  ],
  faq: [
    {
      question: '如何测量手腕以选择手表？',
      answer: '用软尺绕腕骨测量。也可用绳子绕手腕一圈，标记重叠处后以直尺测量。男性平均为 17-19cm，女性为 14-16cm。',
    },
    {
      question: '什么是表耳间距，为什么它很重要？',
      answer: '表耳间距是上下表耳之间的距离，决定手表是否会超出你的手腕。一块表耳间距 48mm 的手表戴在 17cm 手腕（约 55mm 平面宽度）上，比例为 87%。超过 65% 时即开始超出。',
    },
    {
      question: '17cm 的手腕适合多大尺寸的手表？',
      answer: '17cm 的手腕（约 55mm 平面宽度）适合表径 36-42mm、表耳间距 44-50mm 的手表。最佳范围是表径 38-40mm、表耳间距 46-48mm。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '输入手腕尺寸',
      text: '以厘米为单位输入你的手腕周长。工具会实时更新手腕轮廓。',
    },
    {
      name: '输入手表尺寸',
      text: '以毫米为单位输入表径、表耳间距和厚度。',
    },
    {
      name: '添加与对比',
      text: '点击"添加手表"保存。可添加多块手表并点击切换，对比佩戴效果。',
    },
    {
      name: '查看颜色标识',
      text: '绿色 = 优秀，黄色 = 临界，红色 = 对于你的手腕偏大。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '如何测量手腕以选择手表？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '用软尺绕腕骨测量。男性平均为 17-19cm，女性为 14-16cm。',
          },
        },
        {
          '@type': 'Question',
          'name': '什么是表耳间距，为什么它很重要？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '表耳间距是上下表耳之间的距离，决定手表是否会超出你的手腕。',
          },
        },
        {
          '@type': 'Question',
          'name': '17cm 的手腕适合多大尺寸的手表？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '17cm 手腕适合表径 36-42mm、表耳间距 44-50mm 的手表。最佳范围是 38-40mm 表径搭配 46-48mm 表耳间距。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to compare watch sizes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter your wrist size',
          'text': 'Type your wrist circumference in centimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter watch dimensions',
          'text': 'Input case diameter, lug-to-lug, and thickness.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Add and compare',
          'text': 'Click Add Watch to save it. Add multiple watches to compare.',
        },
      ],
    },
  ],
};

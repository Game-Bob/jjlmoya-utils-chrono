import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'mainspring-finder',
  title: '发条计算器',
  description: '根据发条盒尺寸计算古董机芯发条尺寸。',
  ui: {
    title: '发条计算器',
    barrelLabel: '发条盒内径',
    arborLabel: '条轴外径',
    heightLabel: '发条盒高度',
    turnsLabel: '圈数',
    calculate: '计算',
    resultThickness: '厚度',
    resultHeight: '高度',
    resultLength: '长度',
    resultStrength: '强度',
    strengthWeak: '轻',
    strengthMedium: '中',
    strengthStrong: '强',
    commercial: '商业规格',
    unitLabel: '单位',
    mm: 'mm',
    inch: 'in',
    step1: '用游标卡尺测量发条盒内径、条轴外径和内高。',
    step2: '设定预期的上链圈数（手动5-8圈，自动6-10圈）。',
    step3: '切换mm/in选择您偏好的单位系统。',
    tipTitle: '提示',
    tipContent: '务必对照厂家规格验证计算尺寸。订购前请交叉参考供应商目录。',
  },
  seo: [
    { type: 'title', text: '发条计算器 - 为手表机芯计算弹簧尺寸', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: '典型发条厚度' },
        { value: '5-10 turns', label: '标准上链范围' },
        { value: '150-450 mm', label: '常见发条长度' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: '修复古董机芯通常首先要找到正确的发条。<strong>发条计算器</strong>可根据发条盒几何尺寸帮助您计算发条的理论尺寸。输入发条盒内径、条轴直径、发条盒高度和预期上链圈数后，工具将计算出弹簧的厚度、高度和长度。结果还以公制和英制单位的近似商业规格显示，方便交叉参考供应商目录。' },
    { type: 'title', text: '发条尺寸如何计算', level: 3 },
    { type: 'paragraph', html: '发条占据了发条盒壁与条轴之间的环形空间。<strong>弹簧厚度</strong>估算为<strong>（发条盒内径 - 条轴外径）/（2倍圈数 + 1.5）</strong>，其中额外的1.5圈考虑了弹簧端部固定和弹簧自身所占的空间。<strong>弹簧长度</strong>遵循<strong>L = pi x 圈数 x（发条盒内径 + 条轴外径）/ 2</strong>，得出展开后的总长度。<strong>弹簧高度</strong>等于发条盒内高减去微小间隙（通常为0.1 mm），以防止摩擦发条盒盖。' },
    { type: 'title', text: '如何测量发条盒以选择发条', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: '发条盒内径', definition: '用卡尺测量的发条盒内部直径。这是发条可以占据的最大圆。典型范围：8-30 mm。' },
        { term: '条轴直径', definition: '条轴最宽处的直径，发条内圈在此处钩挂。较小的条轴允许在同一发条盒内使用更长的发条。' },
        { term: '发条盒高度', definition: '发条盒的内部高度。发条高度必须略小（0.05-0.15 mm），以便自由旋转而不摩擦盒盖。' },
        { term: '上链表圈数', definition: '机芯提供的完整上链表圈数。手动上链机芯通常提供5-8圈，自动机芯6-10圈。' },
      ],
    },
    { type: 'title', text: '发条强度及其对机芯的意义', level: 3 },
    { type: 'paragraph', html: '<strong>弹簧厚度</strong>是决定传递给齿轮系扭矩的主要因素。较厚的弹簧（大于0.14 mm）提供高扭矩，适合带有复杂功能的机芯，如计时码表或报时机构。中等弹簧（0.10-0.14 mm）适用于大多数仅显示时间和日期的常规机芯。薄弹簧（低于0.10 mm）用于小型女装机芯或超薄机芯。有原厂规格时务必匹配；过强的弹簧可能损坏条轴或齿轮系轴尖。' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '使用错误的发条可能损坏您的机芯',
      html: '安装<strong>过厚</strong>的弹簧会增加超出设计极限的摩擦和扭矩，可能磨损条轴孔、弯曲中心轮轴尖，甚至导致发条盒破裂。<strong>过薄</strong>的弹簧则无法提供足够的振幅，导致手表走慢或在达到满链前停止。订购前务必交叉参考计算尺寸与已知供应商目录。',
    },
    { type: 'title', text: '商业发条尺寸系统', level: 3 },
    { type: 'paragraph', html: '发条供应商按<strong>长度 x 高度 x 厚度</strong>（毫米）对弹簧进行分类。常见的公制规格遵循General Resources或GR系统。英制系统仍被一些美国和英国供应商使用。本工具同时显示两种系统，无论供应商如何，您都可以搜索目录。当找不到精确的计算尺寸时，选择高度完全匹配、厚度误差在0.005 mm以内的最接近商业规格，然后从相同高度/厚度系列中选择调整长度。' },
    { type: 'title', text: '古董机芯注意事项', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>瑞士机芯（ETA、FHF、AS、Unitas）</strong> - 在GR系统中有完善记录。大多数有已知的发条编号。',
        '<strong>法国机芯（LIP、France Ebauches）</strong> - 常使用非标准发条盒比例。请仔细测量。',
        '<strong>美国机芯（Waltham、Elgin、Illinois）</strong> - 英制系统。使用英制输出交叉参考。',
        '<strong>日本机芯（Seiko、Citizen、Miyota）</strong> - 公制系统，1960年后机芯的目录覆盖良好。',
        '<strong>中国机芯（Sea-Gull、DG、Tongji）</strong> - 常仿制瑞士设计。通常适用瑞士GR编号。',
      ],
    },
    {
      type: 'summary',
      title: '发条选择要点总结',
      items: [
        '用精密卡尺准确测量发条盒内径、条轴外径和发条盒高度',
        '将计算尺寸作为起点，而非绝对规格',
        '交叉参考厂家技术资料或已知供应商目录',
        '发条高度精确匹配发条盒高度减去0.05-0.15 mm间隙',
        '厚度与计算值的误差控制在0.005 mm以内以获得最佳性能',
        '验证发条长度足以满足预期的上链表圈数',
      ],
    },
  ],
  faq: [
    {
      question: '计算出的发条尺寸有多准确？',
      answer: '计算基于标准制表公式，假设理想发条盒几何结构。由于制造公差、弹簧端部配置（撑头、眼孔或T型端）以及特定合金的不同，实际尺寸可能有5-10%的偏差。始终将计算值作为强有力的参考，但订购前请交叉参考厂家数据表或商业供应商目录。',
    },
    {
      question: '如果找不到精确的商业规格怎么办？',
      answer: '当找不到精确尺寸时，优先匹配发条高度，其次是厚度误差在0.005 mm以内。长度可以从相同高度和厚度系列中选择不同的弹簧进行调整。如果发条盒有足够空间，稍长的弹簧也可以工作，但较短的弹簧会减少动力储备。',
    },
    {
      question: '如何在不拆下发条的情况下测量发条盒尺寸？',
      answer: '如果发条盒仍装有旧发条，可以从外侧测量发条盒外径（然后减去壁厚，通常为0.2-0.4 mm）和整体高度（然后减去盒盖厚度）。为获得最精确的结果，请在测量前拆下旧发条并清洁发条盒。',
    },
    {
      question: '撑头端和眼孔端发条有什么区别？',
      answer: '撑头端（也称为T型端）有一个小型T形凸片钩入发条盒壁。大多数现代瑞士和日本机芯使用此类型。眼孔端有一个小孔套在条轴的销钉上。本工具仅计算发条带材尺寸；您必须确认端部类型与您的发条盒匹配后再订购。',
    },
    {
      question: '此工具可用于计时码表或自动机芯吗？',
      answer: '可以，但请注意自动机芯通常具有更高的上链圈数（8-10圈），可能需要稍薄的弹簧以容纳额外的上链模块。计时码表机芯通常需要更厚的弹簧来驱动计时机构。相应调整圈数值并对照厂家规格验证。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '测量发条盒内径',
      text: '使用精密卡尺测量发条盒内径。在两个相差90度的位置测量并取平均值。以毫米为单位记录结果。',
    },
    {
      name: '测量条轴直径',
      text: '测量条轴最宽处的直径，即发条内圈附着点。此位置通常在条轴中心附近，而非方形端。',
    },
    {
      name: '测量发条盒内高',
      text: '测量发条盒从底部到顶部边缘的深度。如果盒盖可拆卸，将盒盖厚度纳入测量。发条高度约为少0.1 mm。',
    },
    {
      name: '设定上链表圈数',
      text: '确定发条完全上紧时的完整圈数。手动上链机芯通常为5-8圈。自动机芯可能有6-10圈。如有规格表请查询确认。',
    },
    {
      name: '读取计算尺寸',
      text: '工具显示推荐的弹簧厚度、高度和长度。同时估算弹簧强度类别，并分别以公制和英制单位提供商业等效规格。',
    },
    {
      name: '交叉参考目录',
      text: '使用显示的商业规格搜索供应商目录。将公制或英制尺寸输入Cousins UK、Jules Borel或您偏好的供应商。如果找不到精确尺寸，请调整搜索条件。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '计算出的发条尺寸有多准确？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '计算基于标准制表公式，假设理想发条盒几何结构。实际尺寸可能有5-10%的偏差。订购前请交叉参考厂家数据表或商业目录。' },
        },
        {
          '@type': 'Question',
          'name': '如果找不到精确的商业规格怎么办？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '优先匹配发条高度，其次是厚度误差在0.005 mm以内。从相同高度/厚度系列中调整长度。' },
        },
        {
          '@type': 'Question',
          'name': '如何在不拆下发条的情况下测量发条盒尺寸？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '测量发条盒外径并减去壁厚（0.2-0.4 mm）。为获得最佳结果，请先拆下旧发条。' },
        },
        {
          '@type': 'Question',
          'name': '撑头端和眼孔端有什么区别？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '撑头端（T型端）钩入发条盒壁。眼孔端有一个孔套在条轴销钉上。现代瑞士/日本机芯使用撑头端。' },
        },
        {
          '@type': 'Question',
          'name': '此工具可用于计时码表或自动机芯吗？',
          'acceptedAnswer': { '@type': 'Answer', 'text': '可以。自动机芯通常需要更多圈数（8-10圈）和更薄的弹簧。计时码表需要更厚的弹簧。调整圈数并验证。' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '发条计算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Mainspring Calculator',
      'description': '根据发条盒尺寸计算古董机芯发条的理论尺寸。',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': '手表发条尺寸计算',
      'proficiencyLevel': 'Intermediate',
      'abstract': '了解如何根据发条盒内径、条轴尺寸和上链表圈数计算发条尺寸。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何找到正确的发条',
      'description': '测量手表发条盒并计算正确发条尺寸的分步指南。',
      'step': [
        { '@type': 'HowToStep', 'name': '测量发条盒内径', 'text': '使用精密卡尺测量发条盒内径。' },
        { '@type': 'HowToStep', 'name': '测量条轴外径', 'text': '测量条轴最宽处的直径。' },
        { '@type': 'HowToStep', 'name': '测量发条盒高度', 'text': '测量内部深度。发条高度约为少0.1 mm。' },
        { '@type': 'HowToStep', 'name': '设定圈数', 'text': '手动上链设5-8圈，自动机芯设6-10圈。' },
        { '@type': 'HowToStep', 'name': '读取结果', 'text': '查看弹簧厚度、高度、长度和商业等效规格。' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': '发条计算器',
      'description': '一款为制表师提供的根据发条盒尺寸计算发条尺寸的工具。',
      'category': 'Watchmaking Tool',
      'audience': { '@type': 'Audience', 'audienceType': '制表师和钟表爱好者' },
    },
  ],
};

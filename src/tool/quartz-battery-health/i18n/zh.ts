import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'quartz-battery-health',
  title: '石英表电池寿命计算器',
  description: '输入电池容量（mAh）和机芯功耗（µA），计算石英机芯的理论电池寿命。可选填安装日期以预估更换日期。',
  ui: {
    title: '石英表电池寿命计算器',
    batteryLabel: '电池型号',
    selectBattery: '选择电池',
    customBattery: '自定义',
    capacityLabel: '容量',
    capacityUnit: 'mAh',
    consumptionLabel: '功耗',
    consumptionUnit: 'µA',
    installDateLabel: '安装日期',
    installDateHint: '可选',
    monthLabel: '月',
    yearLabel: '年',
    calculate: '计算',
    resultLabel: '预估寿命',
    theoreticalLife: '理论寿命',
    yearsLabel: '年',
    monthsLabel: '个月',
    daysLabel: '天',
    changeDateLabel: '建议更换日期',
    noDateHint: '输入安装日期可查看更换日期',
    healthLabel: '状态',
    healthGood: '良好',
    healthModerate: '中等',
    healthCritical: '临界',
    step1: '选择常见电池型号，或选择"自定义"输入电池容量。',
    step2: '输入机芯功耗，单位为微安（µA）。',
    step3: '可选填安装日期，然后点击"计算"。',
    tipTitle: '提示',
    tipContent: '务必使用官方机芯数据手册中的功耗值。实际寿命因温度和负载变化可能缩短10%-20%。',
  },
  seo: [
    { type: 'title', text: '石英表电池健康检测-你的手表电池还能用多久？', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: '典型三针机芯功耗' },
        { value: '18-55 mAh', label: '常见电池容量' },
        { value: '2.5-4.5 yr', label: '通常电池寿命' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: '想知道你的石英表什么时候会停吗？<strong>石英表电池寿命计算器</strong>通过比较电池容量（以mAh为单位）和机芯平均功耗（以微安µA为单位），帮助你估算任何石英机芯电池的剩余寿命。无论你拥有ETA、Miyota、Seiko、Ronda还是国产DG机芯，本工具都能计算出以年、月、天为单位的理论寿命-如果你输入安装月份和年份，甚至能预测出精确的更换日期。' },
    { type: 'title', text: '石英电池寿命的计算原理-估算背后的数学公式', level: 3 },
    { type: 'paragraph', html: '电池寿命遵循一个简单的电学公式：<strong>寿命（小时）=（电池容量mAh × 1000）÷ 电流消耗µA</strong>。将结果除以24得到天数，再除以365.25得到年数。例如，一块标准<strong>SR920SW（371）电池容量40 mAh</strong>，为功耗<strong>1.5 µA</strong>的机芯供电，理论上可持续约<strong>3年</strong>。将功耗降至1.0 µA，同一块电池可延长至4.5年以上。若增至2.5 µA，电池寿命则降至不足2年。规划维护周期时，每个微安都至关重要。' },
    { type: 'title', text: '常见石英表电池型号及其容量', level: 3 },
    {
      type: 'table',
      headers: ['电池型号', '通用代码', '容量', '典型用途'],
      rows: [
        ['SR621SW', '364', '18 mAh', '薄型正装表'],
        ['SR626SW', '377', '27 mAh', '中型石英表'],
        ['SR920SW', '371', '40 mAh', '计时码表及多功能表'],
        ['SR936SW', '394', '55 mAh', '大型数显混合表'],
        ['CR2025', '-', '165 mAh', '高耗电LED模块'],
      ],
    },
    { type: 'tip', title: '匹配原装规格', html: '选择错误的电池型号可能使电池寿命缩短多达<strong>40%</strong>。更换电池前务必核对原装电池编号。数字代码表示尺寸-例如<strong>SR936SW</strong>直径为9.5毫米，厚度为3.6毫米。' },
    { type: 'title', text: '为何应始终使用官方机芯功耗值', level: 3 },
    { type: 'paragraph', html: '<strong>ETA、Ronda、Miyota、Seiko和ISA</strong>等机芯制造商为其生产的每个机芯发布官方技术数据手册。这些数据手册列出了在受控温度（通常22°C）和标准指针扭矩负载下的<strong>平均电流消耗</strong>。如果你的机芯实际消耗2.5 µA，却猜测为1.0 µA，电池寿命可能被高估超过100%。务必从制造商官网下载官方PDF，或在专业数据库中核对机芯参数，以获取真实的功耗数据。' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '电池漏液可能损坏手表机芯',
      html: '耗尽后的氧化银电池可能<strong>泄漏氢氧化钾</strong>，腐蚀接触弹簧、电路板线路甚至步进电机线圈。如果工具估算的<strong>剩余寿命不足6个月</strong>，建议在下次常规检查时更换电池。特别留意<strong>1970年代和1980年代的 vintage 石英表</strong>-其原装电池在表壳内放置数十年后更易漏液。',
    },
    { type: 'title', text: '导致实际电池寿命短于理论估算的因素', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>温度极端</strong>-放在阳光直射仪表板上的手表，电流消耗可能增加30%',
        '<strong>寿命终止检测电路</strong>-两秒跳针指示器启动后消耗额外电量',
        '<strong>计时码表或闹钟功能的使用</strong>-瞬时电流尖峰随时间累积',
        '<strong>机械摩擦</strong>-老化或脏污的齿轮系增加步进电机所需扭矩',
        '<strong>磁场</strong>-暴露在磁场中会增加电机扭矩需求，加速电池消耗',
      ],
    },
    { type: 'paragraph', html: '实际使用中，电池寿命通常比理论计算值<strong>缩短10%至20%</strong>。对于高精度温度补偿石英机芯，功耗变化较小，但普通石英机芯对这些环境因素尤为敏感。' },
    { type: 'title', text: '如何为你的石英表找到合适的电池', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR（氧化银电池）', definition: '标有SR的电池（如SR920SW）在整个寿命期间提供稳定的1.55V输出，使石英振荡器保持精确。这是优质石英表的标准配置。' },
        { term: 'LR（碱性电池）', definition: '标有LR的电池（如LR41）电压逐渐下降，可能导致手表走慢或提前停止。不建议作为SR电池的替代品。' },
        { term: 'CR（锂电池）', definition: '标有CR的电池（如CR2025）提供3.0V电压，用于带LED背光、大尺寸LCD屏幕或多功能的高耗电模块。' },
        { term: '数字代码', definition: '四位数字表示物理尺寸：前两位为直径（毫米），后两位为厚度（十分之一毫米）。SR936SW = 直径9.5mm × 厚度3.6mm。' },
      ],
    },
    { type: 'title', text: '普通石英 vs 太阳能 vs 动能-技术如何改变计算公式', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: '普通石英表',
          description: '使用可更换的氧化银或锂一次电池。电池寿命完全取决于容量与功耗的比例。本计算器正是为此设计。',
          highlight: true,
          points: [
            '可更换一次电池',
            '寿命 = 容量 ÷ 功耗',
            '可预测的更换周期',
            '更换成本低廉',
          ],
        },
        {
          title: '太阳能表与动能表',
          description: '太阳能表使用光伏电池为锂离子蓄电池充电。动能表使用转子驱动的微型发电机为电容充电。',
          points: [
            '可充电储能',
            '寿命取决于充放电循环',
            '电容随时间老化',
            '不适用本计算器',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: '厂商宣称的<strong>"10年电池寿命"</strong>通常基于极低功耗机芯（约0.5至0.8 µA）搭配大容量电池（165 mAh CR2025或更大）。在配有小容量氧化银电池（如<strong>SR626SW，27 mAh</strong>）的标准指针式石英表中，配合典型1.5 µA机芯，实际寿命约为<strong>2.5至3年</strong>。请始终使用本计算器进行验证，而非轻信营销标签。' },
    {
      type: 'tip',
      title: '主动更换，而非被动应对',
      html: '当秒针开始以<strong>2秒或4秒</strong>间隔跳动时，表明机芯因电压过低已进入省电模式。此时电池剩余寿命约为<strong>2至4周</strong>。请立即更换以避免漏液损坏。',
    },
    {
      type: 'summary',
      title: '石英表电池健康核心要点',
      items: [
        '使用制造商数据手册中的官方机芯功耗值-猜测值可能高估寿命100%以上',
        '精确匹配原装电池型号：SR、LR和CR化学体系不可互换',
        '当工具显示剩余寿命不足6个月时更换电池，以防漏液',
        '实际电池寿命通常比理论理想值短10%至20%，受温度、摩擦和使用情况影响',
        '本计算器适用于带可更换一次电池的标准石英机芯，不适用于太阳能或动能手表',
      ],
    },
  ],
  faq: [
    {
      question: '理论电池寿命估算的准确度如何？',
      answer: '计算结果是基于容量除以功耗的理想电学值。在实际条件下，由于温度变化、寿命终止检测电路、老化润滑油引起的机械阻力以及计时码表或闹钟功能的额外负荷，实际寿命可能缩短10%至20%。该估算值是可靠的上限，而非精确预测。',
    },
    {
      question: '如何找到石英机芯的精确功耗值？',
      answer: 'ETA、Ronda、Miyota、Seiko、ISA等机芯制造商的官方技术数据手册中列出了以微安（µA）为单位的平均电流消耗。搜索机芯编号加"datasheet"或"technical specification"。Ranfft、17jewels和Watch-Wiki等专业数据库也发布由钟表社区贡献的功耗数据。',
    },
    {
      question: '什么是"µA"？为什么它很重要？',
      answer: 'µA代表微安，即百万分之一安培。它衡量机芯从电池中汲取的电流。典型的指针式石英三针机芯功耗在1.0至2.5 µA之间。计时码表和多功能模块可能达到3.0至6.0 µA。对于给定的电池容量，电流越高，电池寿命越短。',
    },
    {
      question: '我可以用这个工具计算太阳能表或动能表吗？',
      answer: '不能。太阳能表（Eco-Drive、Solar、Light-Powered）使用光伏电池为可充电电池充电。动能表和自动石英表使用转子和微型发电机为电容充电。这两种技术均不依赖一次性电池，因此容量-功耗模型不适用。请仅将此计算器用于配备可更换氧化银、碱性或锂电池的标准石英机芯。',
    },
    {
      question: '我应该在电池完全耗尽前更换吗？',
      answer: '是的。氧化银和碱性电池完全耗尽后可能泄漏氢氧化钾，损坏接触弹簧、PCB线路和步进电机线圈。强烈建议在完全放电前更换。如果工具显示预计剩余寿命不足6个月，请尽快安排更换电池。',
    },
    {
      question: '如果使用容量高于或低于原装的电池会怎样？',
      answer: '使用容量更高的电池（例如用SR936SW的55 mAh替代SR920SW的40 mAh）会延长电池寿命，但可能物理上不兼容-电池必须精确匹配原装的直径和厚度，以保持适当的接触弹簧压力。使用容量更低的电池会缩短电池寿命，且如果电池尺寸过小，可能导致接触不良。务必使用相同编号的电池或同一尺寸系列中有记录可查的等效型号进行更换。',
    },
    {
      question: '如何判断手表电池是氧化银还是碱性？',
      answer: '氧化银电池标有SR（如SR920SW），在整个寿命期间提供稳定的1.55V输出，使石英振荡器保持精确。碱性电池标有LR（如LR41），电压逐渐下降，可能导致手表走慢或提前停止。大多数优质手表品牌指定使用氧化银电池。如果原装使用SR，请始终用SR替换，不要使用LR。',
    },
    {
      question: '秒针每两秒跳动一次是否意味着电池即将耗尽？',
      answer: '是的。当石英机芯检测到电池电压过低，无法可靠驱动步进电机时，会进入省电模式，秒针以2秒或4秒间隔跳动。这是寿命终止指示器。看到此现象时，电池剩余寿命约为2至4周，应立即更换以避免漏液。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '选择或自定义电池型号',
      text: '从下拉列表中选择常见的氧化银电池-SR621SW、SR626SW、SR920SW、SR936SW等已预装官方容量。如果列表中没有你的电池型号，请选择"自定义"并输入电池标签上或制造商数据手册中列出的精确容量（mAh）。',
    },
    {
      name: '输入机芯功耗',
      text: '在官方技术文档中查找机芯的平均电流消耗。将微安（µA）值输入功耗字段。大多数三针机芯使用1.0至2.5 µA。计时码表和多功能模块可高达6.0 µA。',
    },
    {
      name: '添加安装月份和年份（可选）',
      text: '如果你记得或记录了上次电池安装时间，请选择月份并输入年份。工具将使用此日期计算预计更换日期，并以百分比显示剩余电池健康状态。',
    },
    {
      name: '查看理论寿命',
      text: '结果卡片显示总预估电池寿命（年、月和剩余天数）。这是理想条件下的最大寿命，假设没有外部因素降低电池容量。',
    },
    {
      name: '查看健康状态和更换日期',
      text: '提供安装日期后，进度条按比例显示剩余电池寿命。绿色"良好"表示剩余寿命超过50%。黄色"中等"表示20%至50%。红色"临界"表示不足20%。精确的建议更换日期显示在进度条下方。',
    },
    {
      name: '调整输入并重新计算',
      text: '更改任何输入-电池型号、功耗值或安装日期-结果将自动更新。用于比较不同电池类型，或为收藏中的多款手表规划更换计划。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '理论电池寿命估算的准确度如何？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '计算结果是基于容量除以功耗的理想电学值。在实际条件下，由于温度变化、寿命终止检测电路、老化润滑油引起的机械阻力以及计时码表或闹钟功能的额外负荷，实际寿命可能缩短10%至20%。该估算值是可靠的上限，而非精确预测。',
          },
        },
        {
          '@type': 'Question',
          'name': '如何找到石英机芯的精确功耗值？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ETA、Ronda、Miyota、Seiko、ISA等机芯制造商的官方技术数据手册中列出了以微安（µA）为单位的平均电流消耗。搜索机芯编号加datasheet或technical specification。Ranfft和17jewels等专业数据库也发布由社区贡献的功耗数据。',
          },
        },
        {
          '@type': 'Question',
          'name': '什么是µA？为什么它很重要？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA代表微安，即百万分之一安培。它衡量机芯从电池中汲取的电流。典型的指针式石英三针机芯功耗在1.0至2.5 µA之间。计时码表和多功能模块可能达到3.0至6.0 µA。对于给定的电池容量，电流越高，电池寿命越短。',
          },
        },
        {
          '@type': 'Question',
          'name': '我可以用这个工具计算太阳能表或动能表吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不能。太阳能表使用光伏电池为可充电电池充电。动能表使用转子和微型发电机为电容充电。这两种技术均不依赖一次性电池，因此容量-功耗模型不适用。请仅将此计算器用于配备可更换氧化银、碱性或锂电池的标准石英机芯。',
          },
        },
        {
          '@type': 'Question',
          'name': '我应该在电池完全耗尽前更换吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的。氧化银和碱性电池完全耗尽后可能泄漏氢氧化钾，损坏接触弹簧、PCB线路和步进电机线圈。强烈建议在完全放电前更换。如果工具显示预计剩余寿命不足6个月，请尽快安排更换电池。',
          },
        },
        {
          '@type': 'Question',
          'name': '如何判断手表电池是氧化银还是碱性？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '氧化银电池标有SR（如SR920SW），在整个寿命期间提供稳定的1.55V输出。碱性电池标有LR（如LR41），电压逐渐下降。大多数优质手表品牌指定使用氧化银电池。请始终用SR替换SR，不要使用LR。',
          },
        },
        {
          '@type': 'Question',
          'name': '秒针每两秒跳动一次是否意味着电池即将耗尽？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '是的。当石英机芯检测到电池电压过低时，会进入省电模式，秒针以2秒或4秒间隔跳动。这是寿命终止指示器。看到此现象时，电池剩余寿命约为2至4周，应立即更换以避免漏液。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '石英表电池寿命计算器',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Battery Life Calculator',
      'description': '输入电池容量（mAh）和机芯功耗（µA），计算任何石英表机芯的理论电池寿命。提供安装月份和年份时可估算更换日期。',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': '石英表电池寿命计算-容量与功耗详解',
      'proficiencyLevel': 'Beginner',
      'abstract': '了解如何使用电池容量（mAh）和机芯功耗（µA）估算石英表机芯的电池寿命。理解计算公式、温度和负载的影响，以及何时安排更换。',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何估算石英表电池寿命',
      'description': '使用石英表电池寿命计算器确定任何石英表电池的剩余寿命并规划更换日期的分步指南。',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '选择或自定义电池型号',
          'text': '从下拉列表中选择常见的氧化银电池-SR621SW、SR626SW、SR920SW、SR936SW等已预装官方容量。如果列表中没有你的电池型号，请选择"自定义"并输入精确容量（mAh）。',
        },
        {
          '@type': 'HowToStep',
          'name': '输入机芯功耗',
          'text': '从官方技术文档中查找机芯的平均电流消耗，将微安（µA）值输入功耗字段。',
        },
        {
          '@type': 'HowToStep',
          'name': '添加安装月份和年份',
          'text': '如果你知道电池的安装时间，请选择月份并输入年份。工具将计算预计更换日期，并以百分比显示剩余电池健康状态。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看理论寿命',
          'text': '结果卡片显示总预估电池寿命（年、月和剩余天数）。这是理想条件下的最大寿命。',
        },
        {
          '@type': 'HowToStep',
          'name': '查看健康状态和更换日期',
          'text': '提供安装日期后，进度条显示剩余寿命。绿色表示剩余超过50%。黄色表示20%至50%。红色表示不足20%。建议更换日期显示在下方。',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': '石英表电池寿命计算器',
      'description': '基于电池容量和机芯功耗估算石英表电池寿命的在线工具。',
      'category': 'Watch Battery Calculator',
      'audience': { '@type': 'Audience', 'audienceType': 'Watch enthusiasts and repair technicians' },
    },
  ],
};

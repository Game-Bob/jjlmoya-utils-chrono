import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'crown-reference-guide',
  title: '手表表冠参考指南',
  description: '热门机芯的表冠位置、上链方向和设置功能的交互式指南。',
  ui: {
    title: '表冠设置',
    movementLabel: '机芯',
    selectMovement: '选择机芯',
    customMovement: '自定义',
    positionLabel: '位置',
    unscrewFirst: '请先旋松表冠',
    windingLabel: '上链',
    hackLabel: '停秒',
    dangerZoneLabel: '避免晚上9点-凌晨3点',
    directionCW: '顺时针',
    directionCCW: '逆时针',
    directionBoth: '双向',
    pullHint: '拉出表冠',
    clickPosition: '点击位置',
    position0Title: '静止',
    position0Desc: '表冠已推入。手表正常运行。',
    position0Detail: '未启用任何上链或设置功能。',
    position1Title: '手动上链',
    position1Desc: '顺时针转动表冠以给发条上链。随着发条收紧，您会感到阻力。',
    position1Detail: '从完全静止约30-40整圈。自动陀在佩戴时也会上链。',
    position2Title: '日期快调',
    position2Desc: '顺时针转动表冠以推进日期。时针与秒针保持同步。',
    position2Detail: '在晚上9点到凌晨3点之间，日期切换机构啮合时，请勿快调日期。',
    position3Title: '时间设置',
    position3Desc: '向任一方向转动表冠以移动指针。秒针停止（停秒）以实现精确同步。',
    position3Detail: '拉至位置3，等待秒针到达12点，然后完全拉出。转动设置时间，然后推回。',
    screwDownHint: '记得将表冠旋回以保持防水。',
    noQuickSet: '无快调',
    noHack: '无',
    hasHack: '有',
    crownPositions: '表冠位置',
    noteTitle: '注意',
  },
  seo: [
    { type: 'title', text: '手表表冠位置指南-正确上链、设置日期和时间', level: 2 },
    { type: 'paragraph', html: '表冠是您与手表机芯之间唯一的物理接口。错误操作-反向旋转、在午夜设置日期、或用力过猛-都可能损坏机芯。本指南详细解析了<strong>ETA、Sellita、Miyota、Seiko和Unitas</strong>等机芯的每个表冠位置，让您再也不用猜测。' },
    { type: 'title', text: '表冠位置一览', level: 3 },
    {
      type: 'glossary', items: [
        { term: '位置0（静止）', definition: '表冠推入或旋入。手表正常运行。无功能启用。设置后务必回到此位置。' },
        { term: '位置1（上链）', definition: '第一次拉出或旋松状态。顺时针转动以给发条上链。大多数自动机芯也可通过自动陀上链。' },
        { term: '位置2（日期快调）', definition: '第二次拉出。顺时针转动以推进日期。在日期机构啮合的晚上9点到凌晨3点之间避免使用。' },
        { term: '位置3（时间设置）', definition: '第三次拉出。秒针停止（停秒）以实现精确对时。自由转动以设置时间。大多数现代自动机芯均具备此功能。' },
      ]
    },

    { type: 'title', text: '机芯对比：表冠功能', level: 3 },
    {
      type: 'table', headers: ['机芯', '档位', '停秒', '快调', '上链方向'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['Miyota 8215', '2 (0,1,3)', '无', '无', '顺时针'],
        ['Miyota 9015', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['Seiko 6R35', '3 (0,1,2,3)', '有', '日期（顺时针）', '顺时针'],
        ['Unitas 6497/6498', '1 (0,1,3)', '无', '无', '顺时针'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: '常见表冠操作误区', icon: 'mdi:alert', badge: '禁止', html: '切勿在日期轮啮合的<strong>晚上9点到凌晨3点</strong>之间快调日期。这可能导致轮齿损坏，需要全面维修机芯。如果必须在此时间段内更改日期，请先将时间调至凌晨3点之后，设置日期，然后调回正确时间。' },

    { type: 'tip', title: '旋入式表冠', html: '潜水表和运动表通常采用旋入式表冠以实现防水。<strong>拉出前务必先逆时针旋松</strong>。逆时针转动直到表冠弹出，然后拉出到所需位置。设置完成后，推入表冠，然后轻压并顺时针旋紧。<strong>切勿过紧。</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: '标准表冠', icon: 'mdi:crown', description: '大多数正装表和日常自动表采用的推拉式表冠。2-4个档位。防水性通常为30-100米。', points: ['直接操作，无需旋松', '防水性能有限', '常见于ETA、Miyota、Seiko机芯'] },
        { title: '旋入式表冠', icon: 'mdi:lock', description: '带有螺纹，可旋入表壳的表冠。潜水表和工具表的标准配置。防水性200米以上。', points: ['出色的防水性能', '使用前必须旋松', '常见于Rolex、Omega、Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: '快速参考', items: [
        '始终顺时针上链-旋转只会启动滑动离合，不会上链。',
        '如果手表配备旋入式表冠，请在拉出到任何位置之前先将其旋松。',
        '避免在晚上9点到凌晨3点之间快调日期。如需调整，先将时间调至凌晨3点之后。',
        '手动上链机芯（例如Unitas 6498）档位较少。设置时间前请先完全上链。',
        '无停秒功能的机芯（例如Miyota 8215）需要不同技巧：超过目标分钟，然后缓慢回调。',
      ]
    },
  ],
  faq: [
    {
      question: '我的手表有多少个表冠档位？',
      answer: '大多数自动机芯在静止状态之外有3个功能档位：手动上链的位置1、日期快调的位置2、以及带停秒功能的时间设置位置3。手动上链机芯如Unitas 6498则只有1个功能档位（上链，进一步拉出为时间设置）。旋入式表冠增加了一个步骤：拉出前先旋松。',
    },
    {
      question: '反向旋转会损坏手表吗？',
      answer: '不会，但也不会产生任何作用。现代机芯采用滑动离合，反向旋转时离合会脱离，因此反向旋转不会造成损坏，但也不会给发条上链。手动上链时务必顺时针旋转。唯一的例外是一些古董怀表和早期自动机芯。',
    },
    {
      question: '什么是日期切换危险期？如何避免？',
      answer: '危险期通常为晚上9点至凌晨3点，此时日期切换机构与日期轮物理啮合。在此期间快调日期可能导致齿轮齿损坏。安全设置日期的方法：将时间调至凌晨3点之后，将日期设置为前一天，然后将时间调至正确的日期和时间。',
    },
    {
      question: '为什么拉出表冠后秒针不会停止？',
      answer: '一些机芯不具备停秒功能。常见的无停秒机芯包括Miyota 8215、Unitas 6497/6498以及许多古董机芯。要在无停秒机芯上准确设置时间：将表冠转至超过目标分钟5-10分钟，然后缓慢回调直到分针准确指向所需位置。',
    },
    {
      question: '如何知道上满链需要多少圈？',
      answer: '大多数自动机芯从完全静止状态需要30-40整圈表冠旋转。手动上链机芯则各不相同：Unitas 6498约需30-35圈，而具有70小时动储的Seiko 6R35需要50-60圈。当感到明显的阻力时停止-继续可能会损坏发条。',
    },
  ],
  bibliography,
  howTo: [
    {
      name: '找到您的机芯编号',
      text: '查看表壳背面（通常有刻印）或通过透底表盖查看机芯本身。常见编号：2824、2892、7750、8215、9015、NH35、4R35、6R35、6498。',
    },
    {
      name: '在指南中选择它',
      text: '从下拉菜单中选择您的机芯。表冠可视化图和面板将更新以显示您的准确档位、上链方向和功能特点。',
    },
    {
      name: '逐个档位拉出体验',
      text: '点击档位块（0-3）或使用"拉出"按钮。阅读说明并注意日期设置的危险期警告。',
    },
    {
      name: '应用到您的腕表',
      text: '在您旁边打开此指南，然后在您的实际手表上练习。按正确方向上链，避开危险期，最后将表冠旋回。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '我的手表有多少个表冠档位？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数自动机芯在静止状态之外有3个功能档位：手动上链的位置1、日期快调的位置2、以及带停秒功能的时间设置位置3。',
          },
        },
        {
          '@type': 'Question',
          'name': '反向旋转会损坏手表吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '不会。现代机芯采用滑动离合，反向旋转时离合会脱离，因此反向旋转不会造成损坏，但也不会给发条上链。',
          },
        },
        {
          '@type': 'Question',
          'name': '什么是日期切换危险期？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '危险期通常为晚上9点到凌晨3点。安全设置日期的方法：将时间调至凌晨3点之后，将日期设置为前一天，然后调至正确日期。',
          },
        },
        {
          '@type': 'Question',
          'name': '为什么拉出表冠后秒针不会停止？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '一些机芯不具备停秒功能。常见的无停秒机芯包括Miyota 8215和Unitas 6497/6498。设置时间方法：超过目标后转动，然后缓慢回调。',
          },
        },
        {
          '@type': 'Question',
          'name': '上满链需要多少圈？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '大多数自动机芯需要30-40整圈表冠旋转。手动上链机芯则各不相同。当感到明显阻力时停止。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': '手表表冠参考指南',
      'operatingSystem': 'All',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': '如何使用表冠参考指南',
      'step': [
        {
          '@type': 'HowToStep',
          'name': '找到您的机芯编号',
          'text': '查看表壳背面（通常有刻印）或通过透底表盖查看机芯本身。常见编号：2824、2892、7750、8215、9015、NH35、4R35、6R35、6498。',
        },
        {
          '@type': 'HowToStep',
          'name': '在指南中选择它',
          'text': '从下拉菜单中选择您的机芯。表冠可视化图和面板将更新以显示您的准确档位、上链方向和功能特点。',
        },
        {
          '@type': 'HowToStep',
          'name': '逐个档位拉出体验',
          'text': '点击档位块（0-3）或使用"拉出"按钮。阅读说明并注意日期设置的危险期警告。',
        },
        {
          '@type': 'HowToStep',
          'name': '应用到您的腕表',
          'text': '在您旁边打开此指南，然后在您的实际手表上练习。按正确方向上链，避开危险期，最后将表冠旋回。',
        },
      ],
    },
  ],
};

import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '如何判断手表是真GMT还是呼叫器GMT？',
    answer: '<strong>真GMT</strong>（又称"飞行者"GMT）可以独立调整本地时针-适合频繁跨时区旅行的用户。<strong>呼叫器GMT</strong>则是在主时针不动的情况下单独调整GMT指针，制造成本较低。区分方法：将表冠拉出到时间设定位置并旋转。如果时针以一小时为单位跳动而不停顿，就是真GMT；如果GMT指针随之移动，就是呼叫器GMT。劳力士在GMT-Master II中使用真GMT机芯（3285），而许多平价微品牌则采用精工NH34等呼叫器GMT机芯。',
  },
  {
    question: 'GMT手表和世界时手表有什么区别？',
    answer: '<strong>GMT手表</strong>通常通过24小时指针和24小时表圈来追踪两个时区-您的本地时间和一个参考时间（通常是UTC）。<strong>世界时手表</strong>则同时显示全部24个时区：表盘周围有城市圈，并有一个旋转的24小时盘。百达翡丽5230P或积家地球物理天文台世界时等世界时手表可以让您即时读取任何城市的时间。GMT更简单、更实惠；世界时机芯更复杂，价格通常更高。本工具就像一个数字版世界时手表，您可以根据需要添加任意数量的城市。',
  },
  {
    question: '手表表盘上写着"GMT"时，显示的是哪个时区？',
    answer: '当手表表盘上标有"GMT"时，<strong>GMT指针</strong>（通常是带有彩色箭头的第四根指针）以24小时制指示时间。大多数用户将此指针设置为UTC（协调世界时），因为所有时区都定义为相对于UTC的偏移量。旋转式24小时表圈可以对齐以读取任何其他时区。例如，如果GMT指针指向14（下午2点），而您的表圈标记对齐到UTC+2，那么您读出的就是东欧时间。本工具可以帮助您直观地理解这种对应关系。',
  },
];

const howTo = [
  {
    name: '将任意城市添加到您的仪表盘',
    text: '在搜索栏中输入城市名称或时区。点击搜索结果即可立即添加。每个城市都会以实时时钟卡片的形式显示当前的当地时间。',
  },
  {
    name: '移除不需要的城市',
    text: '将鼠标悬停在任意时钟卡片上，点击×按钮即可移除。您的选择会自动保存在浏览器中-关闭后再次打开，仪表盘将保持原样。',
  },
  {
    name: '将其用作手表收藏的GMT参考',
    text: '设置您的家乡城市，并添加您通过GMT手表追踪的时区。使用实时偏移标签检查每个追踪时区的表圈对齐是否正确。',
  },
];

const title = '世界时钟：多时区实时仪表盘';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-world-timer',
  title,
  description: '实时追踪多个时区。添加任意城市，实时查看每秒更新的当前时间。适合拥有GMT或世界时手表的钟表爱好者。',
  ui: {
    title: '世界时钟',
    searchPlaceholder: '搜索城市或时区...',
    addLabel: '添加',
    removeLabel: '移除',
    noResults: '未找到城市',
    yourZones: '我的时区',
  },
  seo: [
    { type: 'title', text: '世界时钟 - 为钟表爱好者打造的实时时区仪表盘', level: 2 },
    { type: 'paragraph', html: '无论您拥有<strong>GMT-Master II</strong>、<strong>世界时手表</strong>，还是仅仅需要为工作或旅行追踪多个时区，这个实时仪表盘都能让您一目了然地看到每个关注城市的当前时间。添加纽约、伦敦、东京或任意城市，时间每秒更新。您的时区保存在浏览器中，无需重复配置。' },
    { type: 'title', text: '为什么钟表爱好者需要世界时钟', level: 3 },
    { type: 'paragraph', html: '如果您收藏<strong>GMT手表</strong>，一定遇到过这样的困扰：您调好表圈追踪第二个时区，但夏令时导致偏移变化，或者您拥有多块GMT手表，想比较它们如何追踪不同城市。本工具可以解决这个问题。添加您手表追踪的城市，立即查看它们的当前偏移和时间。无需心算-只需看一眼卡片，就能确切知道您的GMT指针应该指向哪里。' },
    { type: 'title', text: 'GMT与世界时 - 哪种风格适合您？', level: 3 },
    { type: 'paragraph', html: '<strong>GMT手表</strong>（如劳力士GMT-Master II"百事圈"或帝舵Black Bay Pro）使用24小时指针和旋转表圈来追踪两个时区。<strong>世界时手表</strong>（如诺莫斯苏黎世世界时或欧米茄海马世界时）通过城市圈和24小时盘同时显示所有24个时区。本仪表盘模拟了世界时手表：您可以同时查看所有城市。在购买之前，用它来帮助您决定哪种复杂功能更适合您的生活方式。' },
    { type: 'title', text: '超越手表收藏的实用功能', level: 3 },
    {
      type: 'list', items: [
        '远程工作者跨时区安排会议，不再混淆',
        '频繁旅行者同时关注家乡和目的地的时间',
        '交易者追踪纽约、伦敦、东京和悉尼的市场开盘时间',
        '任何人想快速知道"...现在几点？"而无需搜索',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: '实时世界时钟', icon: 'mdi:clock-time-eight', badge: '时间', html: '时间使用浏览器内置的时区数据库每秒实时更新。夏令时转换自动处理。不会向任何服务器发送任何数据。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

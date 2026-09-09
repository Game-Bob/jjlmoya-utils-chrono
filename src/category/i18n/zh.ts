import type { CategoryLocaleContent } from "../../types";

const slug = "horology";
const title = "钟表学工具与参考指南";
const description =
  "面向腕表爱好者的专业级钟表学工具-精度、消磁机芯、计算佩戴频率、探索热门机芯的錶冠位置参考。";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "一张理解时间的工作台", level: 2 },
    {
      type: "paragraph",
      html: `当表盘不再只是图像，而成为可以阅读的系统，钟表学便开始了。这套工具集合用于观察走时、理解机芯节奏、读取表冠动作，并在更多背景中作出判断。它并不取代钟表师的工作台，而是把日常的具体问题变成小型探索：结果清晰，界面克制，也为好奇心留下空间。`,
    },
    { type: "title", text: "可以被看见的精度", level: 2 },
    {
      type: "paragraph",
      html: `查看腕表每天快多少或慢多少，在 VPH 与 Hz 之间转换频率，并探索佩戴条件如何改变结果。这些精度工具适合比较、重复和学习：每个数字保留自己的单位，每次换算保留原本的意义，每个结果都在建立对机械结构的直觉。精度不再是抽象概念，而是可以观察的体验。`,
    },
    { type: "title", text: "理解机械动作的参考资料", level: 2 },
    {
      type: "paragraph",
      html: `表冠、发条、表镜、夜光和齿轮传动，分别讲述同一件物品的不同故事。查看表冠位置，跟随齿轮传动，比较材料，并探索月相、万年历与陀飞轮等复杂功能。所有工具都在浏览器中运行，使用数据留在你的设备上：这是一个用于收藏、维修、调校，并更专注地观看腕表的实用资料库。`,
    },
    {
      type: "stats",
      items: [
        { label: "仪器", value: "25", icon: "mdi:tools" },
        { label: "机芯", value: "8+", icon: "mdi:engine" },
        { label: "语言", value: "15", icon: "mdi:translate" },
        { label: "数据隐私", value: "Local", icon: "mdi:shield-check" },
      ],
    },
  ],
};

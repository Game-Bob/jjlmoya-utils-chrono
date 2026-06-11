import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Какое стекло для часов самое устойчивое к царапинам?', answer: 'Сапфировое стекло самое устойчивое с твердостью 9 по шкале Мооса - только алмаз тверже. Минеральное (5) среднее, хесалит (2-3) легко царапается, но поддается полировке.' },
  { question: 'Можно ли отремонтировать поцарапанное стекло хесалит?', answer: 'Да, царапины на хесалите можно заполировать Polywatch за几分钟. Минеральные и сапфировые стекла не полируются - их нужно заменять.' },
  { question: 'Какое стекло лучше для дайверских часов?', answer: 'Сапфир - стандарт для дайверских часов благодаря устойчивости к царапинам и долговечности. Хесалит не рекомендуется для дайвинга.' },
];
const howTo = [
  { name: 'Выберите стекло', text: 'Нажмите на стекло слева, чтобы увидеть карточку статистики справа.' },
  { name: 'Сравните два стекла', text: 'Перетащите стекло из списка на другое, чтобы сравнить их рядом.' },
  { name: 'Закрыть сравнение', text: 'Нажмите "Close Comparison", чтобы вернуться к одиночному виду.' },
];
const title = 'Сравнение Стекол для Часов: Хесалит vs Минеральное vs Сапфир';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'sravnenie-stekol-chasov-hesalit-mineralnoe-sapfir',
  title,
  description: 'Сравните стекла для часов из хесалита, минерала и сапфира с интерактивными карточками статистики. Твердость, прозрачность, ударопрочность и устойчивость к царапинам.',
  ui: {
    title: 'Сравнение Стекол', subTitle: 'Interactive Crystal Stats', hardness: 'Твердость', clarity: 'Прозрачность',
    impactResistance: 'Удар', scratchResistance: 'Царапины', durability: 'Долговечность', priceRange: 'Цена',
    step1: 'Нажмите на стекло слева.', step2: 'Перетащите одно на другое для сравнения.',
    step3: 'Нажмите Закрыть.', tipTitle: 'Совет',
    tipContent: 'Общий рейтинг - среднее всех показателей. Выше не всегда значит лучше - хесалит имеет лучшую ударопрочность.',
    dragHint: 'Перетащите', dragSub: 'для сравнения',
  },
  seo: [
    { type: 'title', text: 'Сравнение Стекол для Часов: Хесалит vs Минеральное vs Сапфир', level: 2 },
    { type: 'paragraph', html: 'Сравните <strong>хесалит, минеральное и сапфир</strong> стекла с интерактивными карточками статистики.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};

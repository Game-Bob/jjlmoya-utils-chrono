import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'treker-intervalov-obsluzhivaniya',
  title: 'Трекер интервалов обслуживания часов',
  description: 'Отслеживайте и контролируйте графики обслуживания вашей коллекции часов. Узнайте в один клик, когда требуется следующий репассаж.',
  ui: {
    title: 'Учет обслуживания',
    addWatch: 'Добавить часы',
    editWatch: 'Изменить запись',
    cancel: 'Отмена',
    save: 'Сохранить',
    deleteWatch: 'Удалить',
    confirmDelete: 'Удалить эти часы из вашей коллекции?',
    emptyTitle: 'Ваша коллекция пуста',
    emptyDesc: 'Записывайте даты обслуживания часов, чтобы не пропустить важные профилактические работы.',
    emptyAction: 'Добавить первые часы',
    healthy: 'в порядке',
    due: 'подходит срок',
    overdue: 'просрочено',
    nameLabel: 'Название часов',
    namePlaceholder: 'например, Rolex Submariner',
    movementLabel: 'Тип механизма',
    movementAuto: 'Автоподзавод',
    movementManual: 'Ручной завод',
    movementQuartz: 'Кварцевые',
    movementKinetic: 'Кинетик',
    dateLabel: 'Дата последнего обслуживания',
    neverServiced: 'Новые или без обслуживания',
    lastServiceLabel: 'Последний репассаж',
    nextServiceLabel: 'Следующий репассаж',
    serviced: 'Обслужены',
    newWatch: 'Новые',
    years: 'г.',
    collectionHealth: 'Состояние коллекции',
  },
  seo: [
    { type: 'title', text: 'Трекер репассажа часов: Своевременное обслуживание вашей коллекции', level: 2 },
  ],
  faq: [
    {
      question: 'Как часто нужно делать репассаж механических часов с автоподзаводом?',
      answer: 'Большинство производителей рекомендует производить чистку и смазку механизма каждые 3-5 лет. На практике часы могут сохранять точность до 5-7 лет.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Добавить часы', text: 'Внесите название часов, выберите тип механизма и укажите дату последнего репассажа.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Как часто нужно делать репассаж механических часов с автоподзаводом?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Большинство производителей рекомендует производить чистку и смазку механизма каждые 3-5 лет.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Трекер интервалов обслуживания часов',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Трекер интервалов обслуживания часов',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Добавить часы',
          'text': 'Внесите название часов, выберите тип механизма и укажите дату последнего репассажа.'
        }
      ]
    }
  ]
};

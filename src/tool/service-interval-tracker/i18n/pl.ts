import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Licznik Przeglądów i Serwisowania Zegarków';
const description = 'Monitoruj i zarządzaj terminami serwisowania swojej kolekcji zegarków. Sprawdź szybko, kiedy dany zegarek wymaga przeglądu.';
const faq = [
  {
    "question": "Jak często należy serwisować zegarek automatyczny?",
    "answer": "Większość producentów zaleca przegląd co 3-5 lat. W praktyce wiele zegarków działa bez problemów przez 5-7 lat."
  },
  {
    "question": "Czy zegarki kwarcowe wymagają regularnej konserwacji?",
    "answer": "Tak, baterię należy wymieniać co 2-3 lata, aby uniknąć wycieku. Pełny przegląd uszczelek zaleca się co 5-10 lat."
  },
  {
    "question": "Co się stanie, jeśli zegarek nigdy nie będzie serwisowany?",
    "answer": "Oleje wysychają, zwiększając tarcie i zużycie czopów oraz kamieni. Może to prowadzić do kosztownych awarii."
  },
  {
    "question": "Czy można na siłę nakręcać zegarek mechaniczny?",
    "answer": "Nowoczesne zegarki mechaniczne mają wyraźny opór po pełnym naciągnięciu. Nie obracaj koronki na siłę, gdy czujesz opór."
  },
  {
    "question": "Czy interwał zależy od codziennego lub okazjonalnego użytkowania?",
    "answer": "Tak, zegarek noszony codziennie zużywa się szybciej i wymaga przeglądu co 3 lata, a używany okazjonalnie może działać 5 lat."
  }
];
const howTo = [
  {
    "name": "Dodaj zegarek",
    "text": "Wpisz nazwę, typ mechanizmu i datę ostatniego serwisu."
  },
  {
    "name": "Sprawdź panel",
    "text": "Każdy zegarek pokazuje pasek postępu i oznaczenie kolorem."
  },
  {
    "name": "Aktualizuj po serwisie",
    "text": "Po wizycie u zegarmistrza zaktualizuj datę, aby rozpocząć cykl od nowa."
  }
];

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'rejestr-serwisowania-zegarkow',
  title: 'Licznik Przeglądów i Serwisowania Zegarków',
  description: 'Monitoruj i zarządzaj terminami serwisowania swojej kolekcji zegarków. Sprawdź szybko, kiedy dany zegarek wymaga przeglądu.',
  ui: {
    title: 'Serwis Zegarków',
    addWatch: 'Dodaj zegarek',
    editWatch: 'Edytuj zegarek',
    cancel: 'Anuluj',
    save: 'Zapisz',
    deleteWatch: 'Usuń',
    confirmDelete: 'Usunąć ten zegarek z kolekcji?',
    emptyTitle: 'Twoja kolekcja jest pusta',
    emptyDesc: 'Zapisuj terminy przeglądów i konserwacji swoich zegarków, aby zapobiec awariom mechanizmu.',
    emptyAction: 'Dodaj swój pierwszy zegarek',
    healthy: 'aktualny',
    due: 'nadchodzi termin',
    overdue: 'wymaga serwisu',
    nameLabel: 'Nazwa zegarka',
    namePlaceholder: 'np. Rolex Submariner',
    movementLabel: 'Typ mechanizmu',
    movementAuto: 'Automatyczny',
    movementManual: 'Manualny',
    movementQuartz: 'Kwarcowy',
    movementKinetic: 'Kinetyczny',
    dateLabel: 'Data ostatniego serwisu',
    neverServiced: 'Nowy lub brak serwisu',
    lastServiceLabel: 'Ostatni serwis',
    nextServiceLabel: 'Kolejny serwis',
    serviced: 'Serwisowany',
    newWatch: 'Nowy',
    years: 'lat',
    collectionHealth: 'Stan kolekcji',
  },
  seo: buildServiceSeo({ title, description, faq, howTo }),
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak często należy serwisować zegarek automatyczny?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zaleca się serwisowanie mechanizmu co 3 do 5 lat. W praktyce spora część zegarków działa dobrze przez 5-7 lat.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Licznik Przeglądów i Serwisowania Zegarków',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Licznik Przeglądów i Serwisowania Zegarków',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dodaj zegarek',
          'text': 'Wpisz nazwę zegarka, typ napędu oraz datę ostatniej konserwacji.'
        }
      ]
    }
  ]
};

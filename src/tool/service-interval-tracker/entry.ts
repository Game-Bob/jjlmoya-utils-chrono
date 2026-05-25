import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type ServiceIntervalTrackerUI = {
  title: string;
  addWatch: string;
  editWatch: string;
  cancel: string;
  save: string;
  deleteWatch: string;
  confirmDelete: string;
  emptyTitle: string;
  emptyDesc: string;
  emptyAction: string;
  healthy: string;
  due: string;
  overdue: string;
  nameLabel: string;
  namePlaceholder: string;
  movementLabel: string;
  movementAuto: string;
  movementManual: string;
  movementQuartz: string;
  movementKinetic: string;
  dateLabel: string;
  neverServiced: string;
  lastServiceLabel: string;
  nextServiceLabel: string;
  serviced: string;
  newWatch: string;
  years: string;
  collectionHealth: string;
};

export type ServiceIntervalTrackerLocaleContent = ToolLocaleContent<ServiceIntervalTrackerUI>;

export const serviceIntervalTracker: ChronoToolEntry<ServiceIntervalTrackerUI> = {
  id: 'service-interval-tracker',
  icons: { bg: 'mdi:wrench-outline', fg: 'mdi:calendar-clock' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

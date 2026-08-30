import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type WatchSavingsPlannerUI = {
  title: string;
  addGoalTitle: string;
  goalNameLabel: string;
  goalNamePlaceholder: string;
  targetPriceLabel: string;
  currentSavingsLabel: string;
  monthlyLabel: string;
  addButton: string;
  cancelButton: string;
  goalsEmpty: string;
  goalsEmptySub: string;
  monthsToGoal: string;
  yearsToGoal: string;
  month: string;
  months: string;
  year: string;
  totalSaved: string;
  totalGoals: string;
  achieved: string;
  percentLabel: string;
  deleteGoal: string;
  editGoal: string;
  saveGoal: string;
  currency: string;
  summaryTitle: string;
  goalAchieved: string;
  goalProgress: string;
  congratsTitle: string;
  congratsDesc: string;
  monthlyContribution: string;
  targetDate: string;
  adjustMonthly: string;
  simMonth: string;
  now: string;
};

export type WatchSavingsPlannerLocaleContent = ToolLocaleContent<WatchSavingsPlannerUI>;

export const watchSavingsPlanner: ChronoToolEntry<WatchSavingsPlannerUI> = {
  id: 'watch-savings-planner',
  icons: { bg: 'mdi:wallet-outline', fg: 'mdi:watch-variant' },
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

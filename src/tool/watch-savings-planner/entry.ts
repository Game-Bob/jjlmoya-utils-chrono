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
};

export type WatchSavingsPlannerLocaleContent = ToolLocaleContent<WatchSavingsPlannerUI>;

export const watchSavingsPlanner: ChronoToolEntry<WatchSavingsPlannerUI> = {
  id: 'watch-savings-planner',
  icons: { bg: 'mdi:wallet-outline', fg: 'mdi:watch-variant' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

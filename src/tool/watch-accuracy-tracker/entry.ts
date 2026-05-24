import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type WatchAccuracyTrackerUI = {
  title: string;
  selectWatch: string;
  watchPlaceholder: string;
  addWatch: string;
  deleteWatch: string;
  addLog: string;
  offsetLabel: string;
  offsetPlaceholder: string;
  dateLabel: string;
  saveLog: string;
  avgRate: string;
  consistency: string;
  totalLogs: string;
  historyTitle: string;
  noLogs: string;
  tableDate: string;
  tableOffset: string;
  tableRate: string;
  tableActions: string;
  deleteLog: string;
  coscExcellent: string;
  excellent: string;
  good: string;
  needsService: string;
  secondsPerDay: string;
  seconds: string;
  referenceTime: string;
  watchTime: string;
  useCurrentTime: string;
  calculatedRate: string;
  driftPredictorTitle: string;
  driftPredictorDesc: string;
  dailyRateInput: string;
  dailyRatePlaceholder: string;
  driftHeading: string;
  period: string;
  accumulatedDrift: string;
  day: string;
  week: string;
  month: string;
  months3: string;
  months6: string;
  year: string;
  years5: string;
  watchStandardTitle: string;
  trackerHeading: string;
  driftCalculatorTab: string;
  trackerTab: string;
  stdRolex: string;
  stdCosc: string;
  stdMetas: string;
  stdStdMech: string;
  stdQuartz: string;
  stdHaq: string;
  presetRolex: string;
  presetCosc: string;
  presetStdMech: string;
  presetQuartz: string;
  statusPass: string;
  statusFail: string;
  toleranceRolex: string;
  toleranceCosc: string;
  toleranceMetas: string;
  toleranceStdMech: string;
  toleranceQuartz: string;
  toleranceHaq: string;
};

export type WatchAccuracyTrackerLocaleContent = ToolLocaleContent<WatchAccuracyTrackerUI>;

export const watchAccuracyTracker: ChronoToolEntry<WatchAccuracyTrackerUI> = {
  id: 'watch-accuracy-tracker',
  icons: { bg: 'mdi:clock-outline', fg: 'mdi:clock-check' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
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

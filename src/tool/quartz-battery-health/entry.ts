import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type QuartzBatteryHealthUI = {
  title: string;
  batteryLabel: string;
  selectBattery: string;
  customBattery: string;
  capacityLabel: string;
  capacityUnit: string;
  consumptionLabel: string;
  consumptionUnit: string;
  installDateLabel: string;
  installDateHint: string;
  monthLabel: string;
  yearLabel: string;
  calculate: string;
  resultLabel: string;
  theoreticalLife: string;
  yearsLabel: string;
  monthsLabel: string;
  daysLabel: string;
  changeDateLabel: string;
  noDateHint: string;
  healthLabel: string;
  healthGood: string;
  healthModerate: string;
  healthCritical: string;
  step1: string;
  step2: string;
  step3: string;
  tipTitle: string;
  tipContent: string;
};

export type QuartzBatteryHealthLocaleContent = ToolLocaleContent<QuartzBatteryHealthUI>;

export const quartzBatteryHealth: ChronoToolEntry<QuartzBatteryHealthUI> = {
  id: 'quartz-battery-health',
  icons: { bg: 'mdi:battery', fg: 'mdi:heart-pulse' },
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

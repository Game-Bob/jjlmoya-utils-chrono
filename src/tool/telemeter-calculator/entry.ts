import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type TelemeterCalculatorUI = {
  title: string;
  triggerFlash: string;
  triggerSound: string;
  stop: string;
  reset: string;
  settings: string;
  unitSystem: string;
  metric: string;
  imperial: string;
  temperature: string;
  speedOfSound: string;
  distanceResult: string;
  elapsedTime: string;
  historyTitle: string;
  noHistory: string;
  sec: string;
  km: string;
  m: string;
  mi: string;
  ft: string;
  step1: string;
  step2: string;
  step3: string;
  tipTitle: string;
  tipContent: string;
};

export type TelemeterCalculatorLocaleContent = ToolLocaleContent<TelemeterCalculatorUI>;

export const telemeterCalculator: ChronoToolEntry<TelemeterCalculatorUI> = {
  id: 'telemeter-calculator',
  icons: { bg: 'mdi:weather-lightning', fg: 'mdi:waveform' },
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

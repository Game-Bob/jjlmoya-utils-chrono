import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type DemagnetizingTimerUI = {
  title: string;
  durationLabel: string;
  duration1s: string;
  duration2s: string;
  duration3s: string;
  customLabel: string;
  startButton: string;
  stopButton: string;
  resetButton: string;
  pressPhase: string;
  holdPhase: string;
  releasePhase: string;
  completePhase: string;
  ready: string;
  seconds: string;
  instructions: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  tipTitle: string;
  tipContent: string;
};

export type DemagnetizingTimerLocaleContent = ToolLocaleContent<DemagnetizingTimerUI>;

export const demagnetizingTimer: ChronoToolEntry<DemagnetizingTimerUI> = {
  id: 'demagnetizing-timer',
  icons: { bg: 'mdi:magnet', fg: 'mdi:timelapse' },
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

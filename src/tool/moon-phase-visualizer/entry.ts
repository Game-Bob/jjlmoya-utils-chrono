import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type MoonPhaseVisualizerUI = {
  title: string;
  selectDate: string;
  today: string;
  moonPhase: string;
  illumination: string;
  moonAge: string;
  daysUntilFull: string;
  daysUntilNew: string;
  newMoon: string;
  waxingCrescent: string;
  firstQuarter: string;
  waxingGibbous: string;
  fullMoon: string;
  waningGibbous: string;
  lastQuarter: string;
  waningCrescent: string;
  nextFullMoon: string;
  nextNewMoon: string;
  tipTitle: string;
  tipContent: string;
  days: string;
  day: string;
};

export type MoonPhaseVisualizerLocaleContent = ToolLocaleContent<MoonPhaseVisualizerUI>;

export const moonPhaseVisualizer: ChronoToolEntry<MoonPhaseVisualizerUI> = {
  id: 'moon-phase-visualizer',
  icons: { bg: 'mdi:weather-night', fg: 'mdi:brightness-7' },
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


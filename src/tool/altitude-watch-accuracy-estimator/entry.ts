import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type AltitudeWatchAccuracyEstimatorUI = {
  title: string;
  altitudeLabel: string;
  altitudeUnit: string;
  seaLevel: string;
  deviationLabel: string;
  deviationUnit: string;
  pressureLabel: string;
  pressureUnit: string;
  densityLabel: string;
  densityUnit: string;
  temperatureLabel: string;
  temperatureUnit: string;
  oscillationLabel: string;
  oscillationsPerSec: string;
  rateLabel: string;
  atmDataTitle: string;
  howItWorks: string;
  howItWorksDesc: string;
  negligible: string;
  minor: string;
  noticeable: string;
  significant: string;
  severe: string;
  step1: string;
  step2: string;
  step3: string;
  tipTitle: string;
  tipContent: string;
  deviationChart: string;
  altitudeM: string;
  secondsPerDay: string;
  particleLabel: string;
  airDensity: string;
};

export type AltitudeWatchAccuracyEstimatorLocaleContent = ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI>;

export const altitudeWatchAccuracyEstimator: ChronoToolEntry<AltitudeWatchAccuracyEstimatorUI> = {
  id: 'altitude-watch-accuracy-estimator',
  icons: { bg: 'mdi:terrain', fg: 'mdi:axis-arrow' },
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

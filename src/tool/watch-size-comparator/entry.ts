import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type WatchSizeComparatorUI = {
  title: string;
  addWatch: string;
  watchName: string;
  watchNamePlaceholder: string;
  caseDiameter: string;
  lugToLug: string;
  thickness: string;
  wristSize: string;
  wristSizePlaceholder: string;
  mm: string;
  cm: string;
  unitCm: string;
  unitInches: string;
  remove: string;
  yourWatches: string;
  fitLegend: string;
  excellentFit: string;
  goodFit: string;
  borderlineFit: string;
  largeFit: string;
  wristCurve: string;
  nameRequired: string;
  watchTooLarge: string;
  l2lExceedsWrist: string;
  excellentDesc: string;
  goodDesc: string;
  borderlineDesc: string;
  largeDesc: string;
  fitsWell: string;
  slightlyLarge: string;
  tooLarge: string;
  source: string;
  estimateNote: string;
};

export type WatchSizeComparatorLocaleContent = ToolLocaleContent<WatchSizeComparatorUI>;

export const watchSizeComparator: ChronoToolEntry<WatchSizeComparatorUI> = {
  id: 'watch-size-comparator',
  icons: { bg: 'mdi:ruler-square', fg: 'mdi:vector-square' },
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


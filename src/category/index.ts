import type { ChronoCategoryEntry } from '../types';
import { watchAccuracyTracker } from '../tool/watch-accuracy-tracker/entry';
import { wristPresenceCalculator } from '../tool/wrist-presence-calculator/entry';
import { demagnetizingTimer } from '../tool/demagnetizing-timer/entry';
import { crownReferenceGuide } from '../tool/crown-reference-guide/entry';
import { powerReserveEstimator } from '../tool/power-reserve-estimator/entry';
import { beatRateConverter } from '../tool/beat-rate-converter/entry';
import { waterResistanceConverter } from '../tool/water-resistance-converter/entry';
import { strapTaperCalculator } from '../tool/strap-taper-calculator/entry';
import { watchSizeComparator } from '../tool/watch-size-comparator/entry';
import { lumeColorSimulator } from '../tool/lume-color-simulator/entry';
import { moonPhaseVisualizer } from '../tool/moon-phase-visualizer/entry';
import { tachymeterCalculator } from '../tool/tachymeter-calculator/entry';
import { serviceIntervalTracker } from '../tool/service-interval-tracker/entry';

export const chronoCategory: ChronoCategoryEntry = {
  icon: 'mdi:clock-outline',
  tools: [
    watchAccuracyTracker,
    wristPresenceCalculator,
    demagnetizingTimer,
    crownReferenceGuide,
    powerReserveEstimator,
    beatRateConverter,
    waterResistanceConverter,
    strapTaperCalculator,
    watchSizeComparator,
    lumeColorSimulator,
    moonPhaseVisualizer,
    tachymeterCalculator,
    serviceIntervalTracker,
  ],
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



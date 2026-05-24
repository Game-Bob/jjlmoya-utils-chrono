export { chronoCategory } from './category';
export const chronoCategorySEO = () => import('./category/ChronoCategorySEO.astro').then((m) => m.default);

export { watchAccuracyTracker, WATCH_ACCURACY_TRACKER_TOOL } from './tool/watch-accuracy-tracker';
export { demagnetizingTimer, DEMAGNETIZING_TIMER_TOOL } from './tool/demagnetizing-timer';
export { watchSavingsPlanner, WATCH_SAVINGS_PLANNER_TOOL } from './tool/watch-savings-planner';
export { crownReferenceGuide, CROWN_REFERENCE_GUIDE_TOOL } from './tool/crown-reference-guide';
export { powerReserveEstimator, POWER_RESERVE_ESTIMATOR_TOOL } from './tool/power-reserve-estimator';
export { beatRateConverter, BEAT_RATE_CONVERTER_TOOL } from './tool/beat-rate-converter';
export { waterResistanceConverter, WATER_RESISTANCE_CONVERTER_TOOL } from './tool/water-resistance-converter';
export { strapTaperCalculator, STRAP_TAPER_CALCULATOR_TOOL } from './tool/strap-taper-calculator';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  ChronoToolEntry,
  ChronoCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';


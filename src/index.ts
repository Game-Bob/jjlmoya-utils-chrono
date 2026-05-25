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
export { watchSizeComparator, WATCH_SIZE_COMPARATOR_TOOL } from './tool/watch-size-comparator';
export { lumeColorSimulator, LUME_COLOR_SIMULATOR_TOOL } from './tool/lume-color-simulator';
export { moonPhaseVisualizer, MOON_PHASE_VISUALIZER_TOOL } from './tool/moon-phase-visualizer';
export { tachymeterCalculator, TACHYMETER_CALCULATOR_TOOL } from './tool/tachymeter-calculator';
export { serviceIntervalTracker, SERVICE_INTERVAL_TRACKER_TOOL } from './tool/service-interval-tracker';
export { strapLengthCalculator, STRAP_LENGTH_CALCULATOR_TOOL } from './tool/strap-length-calculator';

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


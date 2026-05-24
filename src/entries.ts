export { watchAccuracyTracker } from './tool/watch-accuracy-tracker/entry';
export type { WatchAccuracyTrackerUI, WatchAccuracyTrackerLocaleContent } from './tool/watch-accuracy-tracker/entry';
export { wristPresenceCalculator } from './tool/wrist-presence-calculator/entry';
export type { WristPresenceCalculatorUI, WristPresenceCalculatorLocaleContent } from './tool/wrist-presence-calculator/entry';
export { chronoCategory } from './category';

import { watchAccuracyTracker } from './tool/watch-accuracy-tracker/entry';
import { wristPresenceCalculator } from './tool/wrist-presence-calculator/entry';

export const ALL_ENTRIES = [watchAccuracyTracker, wristPresenceCalculator];


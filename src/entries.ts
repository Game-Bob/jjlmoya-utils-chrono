export { watchAccuracyTracker } from './tool/watch-accuracy-tracker/entry';
export type { WatchAccuracyTrackerUI, WatchAccuracyTrackerLocaleContent } from './tool/watch-accuracy-tracker/entry';
export { wristPresenceCalculator } from './tool/wrist-presence-calculator/entry';
export type { WristPresenceCalculatorUI, WristPresenceCalculatorLocaleContent } from './tool/wrist-presence-calculator/entry';
export { demagnetizingTimer } from './tool/demagnetizing-timer/entry';
export type { DemagnetizingTimerUI, DemagnetizingTimerLocaleContent } from './tool/demagnetizing-timer/entry';
export { chronoCategory } from './category';

import { watchAccuracyTracker } from './tool/watch-accuracy-tracker/entry';
import { wristPresenceCalculator } from './tool/wrist-presence-calculator/entry';
import { demagnetizingTimer } from './tool/demagnetizing-timer/entry';

export const ALL_ENTRIES = [watchAccuracyTracker, wristPresenceCalculator, demagnetizingTimer];


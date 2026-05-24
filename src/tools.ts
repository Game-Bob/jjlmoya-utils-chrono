export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WATCH_ACCURACY_TRACKER_TOOL } from './tool/watch-accuracy-tracker';
import { WRIST_PRESENCE_CALCULATOR_TOOL } from './tool/wrist-presence-calculator';
import { DEMAGNETIZING_TIMER_TOOL } from './tool/demagnetizing-timer';
import { WATCH_SAVINGS_PLANNER_TOOL } from './tool/watch-savings-planner';
import { CROWN_REFERENCE_GUIDE_TOOL } from './tool/crown-reference-guide';

export const ALL_TOOLS: ToolDefinition[] = [
  WATCH_ACCURACY_TRACKER_TOOL,
  WRIST_PRESENCE_CALCULATOR_TOOL,
  DEMAGNETIZING_TIMER_TOOL,
  WATCH_SAVINGS_PLANNER_TOOL,
  CROWN_REFERENCE_GUIDE_TOOL,
];




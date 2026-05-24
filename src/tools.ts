export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WATCH_ACCURACY_TRACKER_TOOL } from './tool/watch-accuracy-tracker';

export const ALL_TOOLS: ToolDefinition[] = [
  WATCH_ACCURACY_TRACKER_TOOL,
];




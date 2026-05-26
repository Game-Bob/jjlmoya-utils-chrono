export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WATCH_ACCURACY_TRACKER_TOOL } from './tool/watch-accuracy-tracker';
import { WRIST_PRESENCE_CALCULATOR_TOOL } from './tool/wrist-presence-calculator';
import { DEMAGNETIZING_TIMER_TOOL } from './tool/demagnetizing-timer';
import { WATCH_SAVINGS_PLANNER_TOOL } from './tool/watch-savings-planner';
import { CROWN_REFERENCE_GUIDE_TOOL } from './tool/crown-reference-guide';
import { POWER_RESERVE_ESTIMATOR_TOOL } from './tool/power-reserve-estimator';
import { BEAT_RATE_CONVERTER_TOOL } from './tool/beat-rate-converter';
import { WATER_RESISTANCE_CONVERTER_TOOL } from './tool/water-resistance-converter';
import { STRAP_TAPER_CALCULATOR_TOOL } from './tool/strap-taper-calculator';
import { WATCH_SIZE_COMPARATOR_TOOL } from './tool/watch-size-comparator';
import { LUME_COLOR_SIMULATOR_TOOL } from './tool/lume-color-simulator';
import { MOON_PHASE_VISUALIZER_TOOL } from './tool/moon-phase-visualizer';
import { TACHYMETER_CALCULATOR_TOOL } from './tool/tachymeter-calculator';
import { SERVICE_INTERVAL_TRACKER_TOOL } from './tool/service-interval-tracker';
import { STRAP_LENGTH_CALCULATOR_TOOL } from './tool/strap-length-calculator';
import { TELEMETER_CALCULATOR_TOOL } from './tool/telemeter-calculator';
import { SIDEREAL_TIME_TRACKER_TOOL } from './tool/sidereal-time-tracker';

export const ALL_TOOLS: ToolDefinition[] = [
  WATCH_ACCURACY_TRACKER_TOOL,
  WRIST_PRESENCE_CALCULATOR_TOOL,
  DEMAGNETIZING_TIMER_TOOL,
  WATCH_SAVINGS_PLANNER_TOOL,
  CROWN_REFERENCE_GUIDE_TOOL,
  POWER_RESERVE_ESTIMATOR_TOOL,
  BEAT_RATE_CONVERTER_TOOL,
  WATER_RESISTANCE_CONVERTER_TOOL,
  STRAP_TAPER_CALCULATOR_TOOL,
  WATCH_SIZE_COMPARATOR_TOOL,
  LUME_COLOR_SIMULATOR_TOOL,
  MOON_PHASE_VISUALIZER_TOOL,
  TACHYMETER_CALCULATOR_TOOL,
  SERVICE_INTERVAL_TRACKER_TOOL,
  STRAP_LENGTH_CALCULATOR_TOOL,
  TELEMETER_CALCULATOR_TOOL,
  SIDEREAL_TIME_TRACKER_TOOL,
];




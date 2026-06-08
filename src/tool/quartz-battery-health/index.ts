import type { ToolDefinition } from '../../types';
import { quartzBatteryHealth } from './entry';

export * from './entry';

export const QUARTZ_BATTERY_HEALTH_TOOL: ToolDefinition = {
  entry: quartzBatteryHealth,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { ToolDefinition } from '../../types';
import { serviceIntervalTracker } from './entry';

export * from './entry';

export const SERVICE_INTERVAL_TRACKER_TOOL: ToolDefinition = {
  entry: serviceIntervalTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

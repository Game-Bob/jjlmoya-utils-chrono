import type { ToolDefinition } from '../../types';
import { siderealTimeTracker } from './entry';

export * from './entry';

export const SIDEREAL_TIME_TRACKER_TOOL: ToolDefinition = {
  entry: siderealTimeTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

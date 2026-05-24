import type { ToolDefinition } from '../../types';
import { watchAccuracyTracker } from './entry';
export * from './entry';
export const WATCH_ACCURACY_TRACKER_TOOL: ToolDefinition = {
  entry: watchAccuracyTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

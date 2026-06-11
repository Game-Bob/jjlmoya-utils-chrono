import type { ToolDefinition } from '../../types';
import { altitudeWatchAccuracyEstimator } from './entry';

export * from './entry';

export const ALTITUDE_WATCH_ACCURACY_ESTIMATOR_TOOL: ToolDefinition = {
  entry: altitudeWatchAccuracyEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

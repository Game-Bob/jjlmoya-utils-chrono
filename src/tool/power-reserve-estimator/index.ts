import type { ToolDefinition } from '../../types';
import { powerReserveEstimator } from './entry';

export * from './entry';

export const POWER_RESERVE_ESTIMATOR_TOOL: ToolDefinition = {
  entry: powerReserveEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

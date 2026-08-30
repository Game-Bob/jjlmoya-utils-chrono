import type { ToolDefinition } from '../../types';
import { watchSavingsPlanner } from './entry';

export * from './entry';

export const WATCH_SAVINGS_PLANNER_TOOL: ToolDefinition = {
  entry: watchSavingsPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

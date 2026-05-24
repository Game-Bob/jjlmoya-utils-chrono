import type { ToolDefinition } from '../../types';
import { demagnetizingTimer } from './entry';

export * from './entry';

export const DEMAGNETIZING_TIMER_TOOL: ToolDefinition = {
  entry: demagnetizingTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

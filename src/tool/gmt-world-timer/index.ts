import type { ToolDefinition } from '../../types';
import { gmtWorldTimer } from './entry';

export * from './entry';

export const GMT_WORLD_TIMER_TOOL: ToolDefinition = {
  entry: gmtWorldTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

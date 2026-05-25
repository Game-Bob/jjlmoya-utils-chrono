import type { ToolDefinition } from '../../types';
import { watchSizeComparator } from './entry';

export * from './entry';

export const WATCH_SIZE_COMPARATOR_TOOL: ToolDefinition = {
  entry: watchSizeComparator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

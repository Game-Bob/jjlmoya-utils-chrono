import type { ToolDefinition } from '../../types';
import { mainspringFinder } from './entry';

export * from './entry';

export const MAINSPRING_FINDER_TOOL: ToolDefinition = {
  entry: mainspringFinder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

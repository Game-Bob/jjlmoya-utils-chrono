import type { ToolDefinition } from '../../types';
import { strapTaperCalculator } from './entry';

export * from './entry';

export const STRAP_TAPER_CALCULATOR_TOOL: ToolDefinition = {
  entry: strapTaperCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

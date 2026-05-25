import type { ToolDefinition } from '../../types';
import { strapLengthCalculator } from './entry';

export * from './entry';

export const STRAP_LENGTH_CALCULATOR_TOOL: ToolDefinition = {
  entry: strapLengthCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

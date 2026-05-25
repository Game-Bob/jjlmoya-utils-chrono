import type { ToolDefinition } from '../../types';
import { tachymeterCalculator } from './entry';

export * from './entry';

export const TACHYMETER_CALCULATOR_TOOL: ToolDefinition = {
  entry: tachymeterCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

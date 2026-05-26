import type { ToolDefinition } from '../../types';
import { telemeterCalculator } from './entry';

export * from './entry';

export const TELEMETER_CALCULATOR_TOOL: ToolDefinition = {
  entry: telemeterCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

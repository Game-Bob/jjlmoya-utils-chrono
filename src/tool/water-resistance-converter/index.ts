import type { ToolDefinition } from '../../types';
import { waterResistanceConverter } from './entry';

export * from './entry';

export const WATER_RESISTANCE_CONVERTER_TOOL: ToolDefinition = {
  entry: waterResistanceConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

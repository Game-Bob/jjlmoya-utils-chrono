import type { ToolDefinition } from '../../types';
import { beatRateConverter } from './entry';

export * from './entry';

export const BEAT_RATE_CONVERTER_TOOL: ToolDefinition = {
  entry: beatRateConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

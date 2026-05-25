import type { ToolDefinition } from '../../types';
import { lumeColorSimulator } from './entry';

export * from './entry';

export const LUME_COLOR_SIMULATOR_TOOL: ToolDefinition = {
  entry: lumeColorSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

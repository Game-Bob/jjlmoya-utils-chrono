import type { ToolDefinition } from '../../types';
import { tourbillonVisualizer } from './entry';

export * from './entry';

export const TOURBILLON_VISUALIZER_TOOL: ToolDefinition = {
  entry: tourbillonVisualizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

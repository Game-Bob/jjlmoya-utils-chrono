import type { ToolDefinition } from '../../types';
import { moonPhaseVisualizer } from './entry';

export * from './entry';

export const MOON_PHASE_VISUALIZER_TOOL: ToolDefinition = {
  entry: moonPhaseVisualizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

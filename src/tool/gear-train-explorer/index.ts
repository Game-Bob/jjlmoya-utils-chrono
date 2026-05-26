import type { ToolDefinition } from '../../types';
import { gearTrainExplorer } from './entry';

export * from './entry';

export const GEAR_TRAIN_EXPLORER_TOOL: ToolDefinition = {
  entry: gearTrainExplorer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

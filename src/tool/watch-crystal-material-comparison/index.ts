import type { ToolDefinition } from '../../types';
import { watchCrystalMaterialComparison } from './entry';

export * from './entry';

export const WATCH_CRYSTAL_MATERIAL_COMPARISON_TOOL: ToolDefinition = {
  entry: watchCrystalMaterialComparison,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

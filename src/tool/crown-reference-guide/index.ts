import type { ToolDefinition } from '../../types';
import { crownReferenceGuide } from './entry';

export * from './entry';

export const CROWN_REFERENCE_GUIDE_TOOL: ToolDefinition = {
  entry: crownReferenceGuide,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

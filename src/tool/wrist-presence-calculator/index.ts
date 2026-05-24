import type { ToolDefinition } from '../../types';
import { wristPresenceCalculator } from './entry';

export * from './entry';

export const WRIST_PRESENCE_CALCULATOR_TOOL: ToolDefinition = {
  entry: wristPresenceCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

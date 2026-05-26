import type { ToolDefinition } from '../../types';
import { perpetualCalendar } from './entry';

export * from './entry';

export const PERPETUAL_CALENDAR_TOOL: ToolDefinition = {
  entry: perpetualCalendar,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type MainspringFinderUI = {
  title: string;
  barrelLabel: string;
  arborLabel: string;
  heightLabel: string;
  turnsLabel: string;
  calculate: string;
  resultThickness: string;
  resultHeight: string;
  resultLength: string;
  resultStrength: string;
  strengthWeak: string;
  strengthMedium: string;
  strengthStrong: string;
  commercial: string;
  unitLabel: string;
  mm: string;
  inch: string;
  step1: string;
  step2: string;
  step3: string;
  tipTitle: string;
  tipContent: string;
};

export type MainspringFinderLocaleContent = ToolLocaleContent<MainspringFinderUI>;

export const mainspringFinder: ChronoToolEntry<MainspringFinderUI> = {
  id: 'mainspring-finder',
  icons: { bg: 'mdi:ruler', fg: 'mdi:cog-clockwise' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

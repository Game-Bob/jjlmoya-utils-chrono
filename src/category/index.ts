import type { ChronoCategoryEntry } from '../types';
import { watchAccuracyTracker } from '../tool/watch-accuracy-tracker/entry';

export const chronoCategory: ChronoCategoryEntry = {
  icon: 'mdi:clock-outline',
  tools: [
    watchAccuracyTracker,
  ],
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};



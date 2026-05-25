import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type StrapLengthCalculatorUI = {
  title: string;
  wristLabel: string;
  wristPlaceholder: string;
  lugLabel: string;
  lugPlaceholder: string;
  fitLabel: string;
  fitTight: string;
  fitRegular: string;
  fitLoose: string;
  unitLabel: string;
  standardLabel: string;
  bespokeLabel: string;
  natoLabel: string;
  longSide: string;
  shortSide: string;
  totalLength: string;
  millimeters: string;
  inches: string;
  sizeXS: string;
  sizeS: string;
  sizeM: string;
  sizeL: string;
  sizeXL: string;
  sizeXXL: string;
};

export type StrapLengthCalculatorLocaleContent = ToolLocaleContent<StrapLengthCalculatorUI>;

export const strapLengthCalculator: ChronoToolEntry<StrapLengthCalculatorUI> = {
  id: 'strap-length-calculator',
  icons: { bg: 'mdi:ruler', fg: 'mdi:tape-measure' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type WristPresenceCalculatorUI = {
  title: string;
  wristCircumferenceLabel: string;
  caseDiameterLabel: string;
  lugToLugLabel: string;
  wristWidthLabel: string;
  autoEstimateWidthLabel: string;
  unitCm: string;
  unitInches: string;
  unitMm: string;
  fitAnalysisTitle: string;
  caseWristRatioLabel: string;
  wristCoverageLabel: string;
  verdictLabel: string;
  verdictOversized: string;
  verdictBold: string;
  verdictGolden: string;
  verdictVintage: string;
  coverageSafe: string;
  coverageBold: string;
  coverageOverhang: string;
  sweetSpotTitle: string;
  sweetSpotDesc: string;
  minClassicLabel: string;
  sweetSpotLabel: string;
  maxBoldLabel: string;
  maxLugToLugLabel: string;
  idealSizesTitle: string;
  visualizerTitle: string;
  wristWidthHelp: string;
  estimatedLabel: string;
  customLabel: string;
};

export type WristPresenceCalculatorLocaleContent = ToolLocaleContent<WristPresenceCalculatorUI>;

export const wristPresenceCalculator: ChronoToolEntry<WristPresenceCalculatorUI> = {
  id: 'wrist-presence-calculator',
  icons: { bg: 'mdi:ruler', fg: 'mdi:watch' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
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

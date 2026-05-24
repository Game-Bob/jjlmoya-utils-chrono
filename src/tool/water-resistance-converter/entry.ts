import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type WaterResistanceConverterUI = {
  title: string;
  depthLabel: string;
  enterDepth: string;
  unitMeters: string;
  unitFeet: string;
  unitATM: string;
  unitBar: string;
  convertedValues: string;
  ratingLabel: string;
  whatItMeans: string;
  notWaterResistant: string;
  notWaterResistantDesc: string;
  handWash: string;
  handWashDesc: string;
  showerSwim: string;
  showerSwimDesc: string;
  snorkeling: string;
  snorkelingDesc: string;
  scubaDiving: string;
  scubaDivingDesc: string;
  saturationDiving: string;
  saturationDivingDesc: string;
  tipTitle: string;
  tipContent: string;
};

export type WaterResistanceConverterLocaleContent = ToolLocaleContent<WaterResistanceConverterUI>;

export const waterResistanceConverter: ChronoToolEntry<WaterResistanceConverterUI> = {
  id: 'water-resistance-converter',
  icons: { bg: 'mdi:water', fg: 'mdi:waves' },
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

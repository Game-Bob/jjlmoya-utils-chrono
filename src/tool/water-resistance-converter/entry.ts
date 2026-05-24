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
  handWash: string;
  handWashDesc: string;
  showerSwim: string;
  showerSwimDesc: string;
  snorkeling: string;
  snorkelingDesc: string;
  scubaDiving: string;
  scubaDivingDesc: string;
  deepDiving: string;
  deepDivingDesc: string;
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
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type LumeColorSimulatorUI = {
  title: string;
  lumeType: string;
  brightness: string;
  dark: string;
  light: string;
  color: string;
  hex: string;
  rgb: string;
  type: string;
  description: string;
  c1Name: string;
  c1Desc: string;
  c3Name: string;
  c3Desc: string;
  bgw9Name: string;
  bgw9Desc: string;
  lumiNovaName: string;
  lumiNovaDesc: string;
  vintageName: string;
  vintageDesc: string;
  orangeName: string;
  orangeDesc: string;
  blueName: string;
  blueDesc: string;
  greenName: string;
  greenDesc: string;
  tipTitle: string;
  tipContent: string;
};

export type LumeColorSimulatorLocaleContent = ToolLocaleContent<LumeColorSimulatorUI>;

export const lumeColorSimulator: ChronoToolEntry<LumeColorSimulatorUI> = {
  id: 'lume-color-simulator',
  icons: { bg: 'mdi:brightness-6', fg: 'mdi:weather-night' },
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


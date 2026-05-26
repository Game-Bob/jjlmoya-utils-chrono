import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type TourbillonUI = {
  title: string;
  typeLabel: string;
  typeClassic: string;
  typeFlying: string;
  speedLabel: string;
  speedNormal: string;
  speedSlow: string;
  speedPaused: string;
  beatRateLabel: string;
  rate18k: string;
  rate28k: string;
  rate36k: string;
  cageRotationLabel: string;
  showLabelsLabel: string;
  step1: string;
  step2: string;
  step3: string;
  tipTitle: string;
  tipContent: string;
  balanceLabel: string;
  escapeLabel: string;
  palletLabel: string;
  cageLabel: string;
};

export type TourbillonLocaleContent = ToolLocaleContent<TourbillonUI>;

export const tourbillonVisualizer: ChronoToolEntry<TourbillonUI> = {
  id: 'tourbillon-visualizer',
  icons: { bg: 'mdi:rotate-orbit', fg: 'mdi:circle-ring' },
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

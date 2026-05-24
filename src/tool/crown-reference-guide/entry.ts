import type { ChronoToolEntry, ToolLocaleContent } from '../../types';

export type CrownReferenceGuideUI = {
  title: string;
  movementLabel: string;
  selectMovement: string;
  customMovement: string;
  positionLabel: string;
  unscrewFirst: string;
  windingLabel: string;
  hackLabel: string;
  dangerZoneLabel: string;
  directionCW: string;
  directionCCW: string;
  directionBoth: string;
  pullHint: string;
  clickPosition: string;
  position0Title: string;
  position0Desc: string;
  position0Detail: string;
  position1Title: string;
  position1Desc: string;
  position1Detail: string;
  position2Title: string;
  position2Desc: string;
  position2Detail: string;
  position3Title: string;
  position3Desc: string;
  position3Detail: string;
  screwDownHint: string;
  noQuickSet: string;
  noHack: string;
  hasHack: string;
  crownPositions: string;
  noteTitle: string;
};

export type CrownReferenceGuideLocaleContent = ToolLocaleContent<CrownReferenceGuideUI>;

export const crownReferenceGuide: ChronoToolEntry<CrownReferenceGuideUI> = {
  id: 'crown-reference-guide',
  icons: { bg: 'mdi:crown-outline', fg: 'mdi:rotate-orbit' },
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

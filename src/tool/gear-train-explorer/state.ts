import type { MovementDef } from './movements';

let _ctx: CanvasRenderingContext2D;
let _mov: MovementDef;
let _hovered: number | null = null;
let _isDark = true;
let _fontFam = 'system-ui, sans-serif';

export function getCtx() { return _ctx; }
export function getMov() { return _mov; }
export function getHovered() { return _hovered; }
export function isDark() { return _isDark; }
export function getFontFam() { return _fontFam; }
export function setMov(m: MovementDef) { _mov = m; }
export function setHovered(h: number | null) { _hovered = h; }

export function setCtx(ctx: CanvasRenderingContext2D) {
  _ctx = ctx;
  _fontFam = getComputedStyle(document.body).fontFamily || _fontFam;
}

export function detectTheme() {
  const bg = window.getComputedStyle(document.body).backgroundColor;
  _isDark = !bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent' ? true : parseInt(bg.replace(/[^\d,]/g, '').split(',')[0]) < 128;
}

export function c(h: string, l: string): string { return _isDark ? h : l; }

export const W = 900;
export const H = 520;

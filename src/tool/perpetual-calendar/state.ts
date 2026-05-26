let _ctx: CanvasRenderingContext2D;
let _isDark = true;
let _fontFam = 'system-ui, sans-serif';

export function getCtx() { return _ctx; }
export function isDark() { return _isDark; }

export function setCtx(ctx: CanvasRenderingContext2D) {
  _ctx = ctx;
  _fontFam = getComputedStyle(document.body).fontFamily || _fontFam;
}

export function detectTheme() {
  const bg = window.getComputedStyle(document.body).backgroundColor;
  _isDark = !bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent' ? true : parseInt(bg.replace(/[^\d,]/g, '').split(',')[0]) < 128;
}

export function c(h: string, l: string): string { return _isDark ? h : l; }
export function getFontFam() { return _fontFam; }

export const W = 600;
export const H = 600;
export const CX = 300;
export const CY = 300;
export const OUTER_R = 280;
export const INNER_R = 220;

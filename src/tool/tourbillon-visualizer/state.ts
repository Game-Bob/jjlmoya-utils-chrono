let _ctx: CanvasRenderingContext2D;
let _isDark = true;
let _ff = 'system-ui, sans-serif';

export function getC() { return _ctx; }
export function isD() { return _isDark; }
export function ff() { return _ff; }

export function setCtx(c: CanvasRenderingContext2D) {
  _ctx = c;
  _ff = getComputedStyle(document.body).fontFamily || _ff;
}

export function detT() {
  const b = getComputedStyle(document.body).backgroundColor;
  _isDark = !b || b === 'rgba(0, 0, 0, 0)' || b === 'transparent' ? true : parseInt(b.replace(/[^\d,]/g, '').split(',')[0]) < 128;
}

export function cl(h: string, l: string) { return _isDark ? h : l; }

export const W = 700, H = 700, CX = 350, CY = 350;

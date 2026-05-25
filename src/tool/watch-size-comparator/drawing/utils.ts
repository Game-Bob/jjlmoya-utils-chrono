export interface RectConfig {
  x: number; y: number; w: number; h: number; r: number;
}

export function roundRect(ctx: CanvasRenderingContext2D, p: RectConfig): void {
  const { x, y, w, h, r } = p;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export function hexToRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export function getFitRatio(l2l: number, wristCm: number): number {
  return l2l / (wristCm * 10);
}

export function getFitColor(l2l: number, wristCm: number): string {
  const ratio = getFitRatio(l2l, wristCm);
  if (ratio < 0.5) return '#22c55e';
  if (ratio < 0.58) return '#86efac';
  if (ratio < 0.65) return '#facc15';
  return '#ef4444';
}

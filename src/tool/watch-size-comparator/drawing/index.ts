import { drawWatchBody } from './watch';
import { drawDimensionArrows, drawVertDimension } from './measures';
import { getFitColor, getFitRatio } from './utils';

export { getFitColor, getFitRatio };

interface LabelInfo {
  primary: string; secondary: string; color: string; dimColor: string;
}

function u(obj: Record<string, string>, key: string, fallback: string): string {
  return obj[key] || fallback;
}

function drawWarning(ctx: CanvasRenderingContext2D, cx: number, H: number, message: string): void {
  ctx.save();
  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('\u26A0 ' + message, cx, H - 44);
  ctx.restore();
}

function drawInfoLabel(ctx: CanvasRenderingContext2D, cx: number, y: number, info: LabelInfo): void {
  ctx.save();
  ctx.fillStyle = info.color;
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(info.primary, cx, y);
  ctx.fillStyle = info.dimColor;
  ctx.font = '10px sans-serif';
  ctx.fillText(info.secondary, cx, y + 16);
  ctx.restore();
}

function d(mm: number, u: 'cm' | 'in'): string {
  return u === 'in' ? (mm / 25.4).toFixed(1) : (Math.round(mm * 10) / 10).toFixed(1).replace(/\.0$/, '');
}
function du(u: 'cm' | 'in'): string {
  return u === 'in' ? 'in' : 'mm';
}

export function drawWatch(p: { ctx: CanvasRenderingContext2D; canvas: HTMLCanvasElement; ui: Record<string, string>; diameter: number; l2l: number; thickness: number; wristCm: number; unit: 'cm' | 'in' }): void {
  const { canvas, ui, diameter, l2l, thickness, wristCm, unit } = p;
  const ctx = p.ctx, W = canvas.width, H = canvas.height;
  const tooLargeMsg = u(ui, 'watchTooLarge', 'Watch extends beyond wrist');
  const caseLabel = u(ui, 'caseDiameter', '').trim(), l2lLabel = u(ui, 'lugToLug', 'L2L').trim();
  const wristLabel = u(ui, 'wristSize', 'wrist').trim(), thickLabel = u(ui, 'thickness', 'thick').trim();
  ctx.clearRect(0, 0, W, H);

  const wristWidthMm = (wristCm * 10) / Math.PI;
  const maxDim = Math.max(diameter, l2l);
  const scale = Math.min((W - 80) / maxDim, (H - 100) / l2l);

  const cx = W / 2, cy = H / 2 + 8, r = (diameter / 2) * scale;
  const l2lPx = l2l * scale, wristPx = wristWidthMm * scale;
  const color = getFitColor(l2l, wristCm), isTooWide = l2lPx > wristPx;
  const dimColor = 'rgba(128,128,128,0.5)', ratio = Math.round((l2l / wristWidthMm) * 100);

  const wristDisplay = unit === 'in' ? (wristCm / 2.54).toFixed(1) + 'in' : wristCm + 'cm';

  drawWatchBody(ctx, { cx, cy, r, l2lPx, color });

  if (isTooWide) {
    drawWarning(ctx, cx, H, tooLargeMsg);
  }

  drawDimensionArrows(ctx, { cx, y: cy + r + 22, halfW: r, label: `${d(diameter, unit)}${du(unit)} ${caseLabel}`.trim(), color });

  if (Math.abs(l2lPx - r * 2) > 2) {
    const dimX = cx + Math.max(wristPx / 2, l2lPx / 2) + 26;
    drawVertDimension(ctx, { x: dimX, y1: cy - l2lPx / 2, y2: cy + l2lPx / 2, label: `${d(l2l, unit)}${du(unit)} ${l2lLabel}`.trim(), color: dimColor });
  }

  drawDimensionArrows(ctx, { cx, y: H - 14, halfW: wristPx / 2, label: `${wristDisplay} ${wristLabel}`.trim(), color: dimColor });
  drawInfoLabel(ctx, cx, 8, { primary: `${d(diameter, unit)}\u00d7${d(l2l, unit)}\u00d7${d(thickness, unit)}${du(unit)}`, secondary: `${ratio}% ${wristLabel} width \u00b7 ${d(thickness, unit)}${du(unit)} ${thickLabel}`, color, dimColor });
}

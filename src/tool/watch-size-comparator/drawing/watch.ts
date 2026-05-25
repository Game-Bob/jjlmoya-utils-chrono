import { roundRect, hexToRgba } from './utils';
import type { RectConfig } from './utils';

function drawLugs(ctx: CanvasRenderingContext2D, p: { cx: number; cy: number; l2lPx: number; lugW: number; lugH: number; color: string }): void {
  const { cx, cy, l2lPx, lugW, lugH, color } = p;
  const lx = cx - lugW / 2;
  const topLug: RectConfig = { x: lx, y: cy - l2lPx / 2, w: lugW, h: lugH, r: 2 };
  const botLug: RectConfig = { x: lx, y: cy + l2lPx / 2 - lugH, w: lugW, h: lugH, r: 2 };

  roundRect(ctx, topLug);
  ctx.fillStyle = hexToRgba(color, 0.2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(color, 0.5);
  ctx.lineWidth = 1.2;
  ctx.stroke();

  roundRect(ctx, botLug);
  ctx.fillStyle = hexToRgba(color, 0.2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(color, 0.5);
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

function drawWatchCase(ctx: CanvasRenderingContext2D, p: { cx: number; cy: number; r: number; color: string }): void {
  const { cx, cy, r, color } = p;
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.15)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = hexToRgba(color, 0.15);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.restore();
}

function drawDial(ctx: CanvasRenderingContext2D, p: { cx: number; cy: number; r: number; color: string }): void {
  const { cx, cy, r, color } = p;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2);
  ctx.fillStyle = hexToRgba(color, 0.08);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(color, 0.3);
  ctx.lineWidth = 0.5;
  ctx.stroke();
  ctx.restore();

  for (let i = 0; i < 12; i++) {
    const a = (i * 30 - 90) * Math.PI / 180;
    const outer = r * 0.7, inner = r * 0.62;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
    ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
    ctx.strokeStyle = hexToRgba(color, 0.4);
    ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.8;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 2, 0, Math.PI * 2);
  ctx.fillStyle = hexToRgba(color, 0.7);
  ctx.fill();
}

export function drawWatchBody(ctx: CanvasRenderingContext2D, p: { cx: number; cy: number; r: number; l2lPx: number; color: string }): void {
  const { cx, cy, r, l2lPx, color } = p;
  const lugH = (l2lPx - r * 2) / 2;
  if (lugH > 0) {
    drawLugs(ctx, { cx, cy, l2lPx, lugW: r * 0.6, lugH, color });
  }
  drawWatchCase(ctx, { cx, cy, r, color });
  drawDial(ctx, { cx, cy, r, color });
}

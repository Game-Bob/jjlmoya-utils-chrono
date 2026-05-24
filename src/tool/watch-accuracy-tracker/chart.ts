import type { LogEntry } from './logger';

interface Point {
  x: number;
  y: number;
  log: LogEntry;
}

interface ZeroLineParams {
  ctx: CanvasRenderingContext2D;
  minVal: number;
  valRange: number;
  padding: { top: number; left: number };
  graphWidth: number;
  graphHeight: number;
}

function drawBackgroundAndMessage(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  logs: LogEntry[]
): boolean {
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, w, h);

  if (logs.length < 2) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Add at least 2 logs to visualize trend', w / 2, h / 2);
    return true;
  }
  return false;
}

function drawZeroLine(params: ZeroLineParams) {
  const { ctx, minVal, valRange, padding, graphWidth, graphHeight } = params;
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 1;
  ctx.beginPath();
  const zeroY = padding.top + graphHeight * (1 - (0 - minVal) / valRange);
  if (zeroY >= padding.top && zeroY <= padding.top + graphHeight) {
    ctx.moveTo(padding.left, zeroY);
    ctx.lineTo(padding.left + graphWidth, zeroY);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('0s', padding.left - 8, zeroY + 3);
  }
}

function drawLineTrend(ctx: CanvasRenderingContext2D, points: Point[]) {
  ctx.strokeStyle = '#f43f5e';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  points.forEach((p, i) => {
    if (i === 0) {
      ctx.moveTo(p.x, p.y);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  });
  ctx.stroke();
}

function drawPoints(ctx: CanvasRenderingContext2D, points: Point[]) {
  points.forEach(p => {
    ctx.fillStyle = '#10b981';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const entry = p.log;
    if (entry.position) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(entry.position, p.x, p.y - 8);
    }
  });
}

export function drawTrendChart(canvas: HTMLCanvasElement, logs: LogEntry[]) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = 180 * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  const w = rect.width;
  const h = 180;

  if (drawBackgroundAndMessage(ctx, w, h, logs)) return;

  const offsets = logs.map(l => l.offset);
  const minVal = Math.min(...offsets, -5) - 2;
  const maxVal = Math.max(...offsets, 5) + 2;
  const valRange = maxVal - minVal;

  const times = logs.map(l => new Date(l.date).getTime());
  const timeRange = times[times.length - 1] - times[0] || 1;

  const padding = { top: 20, right: 30, bottom: 25, left: 40 };
  const graphWidth = w - padding.left - padding.right;
  const graphHeight = h - padding.top - padding.bottom;

  drawZeroLine({ ctx, minVal, valRange, padding, graphWidth, graphHeight });

  const points = logs.map((log, i) => {
    const x = padding.left + ((times[i] - times[0]) / timeRange) * graphWidth;
    const y = padding.top + graphHeight * (1 - (log.offset - minVal) / valRange);
    return { x, y, log };
  });

  drawLineTrend(ctx, points);
  drawPoints(ctx, points);
}

export function drawDimensionArrows(ctx: CanvasRenderingContext2D, p: { cx: number; y: number; halfW: number; label: string; color: string }): void {
  const { cx, y, halfW, label, color } = p;
  const x1 = cx - halfW, x2 = cx + halfW;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
  const a = 4;
  ctx.beginPath();
  ctx.moveTo(x1, y - a);
  ctx.lineTo(x1, y + a);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y - a);
  ctx.lineTo(x2, y + a);
  ctx.stroke();
  ctx.fillText(label, cx, y + 5);
  ctx.restore();
}

export function drawVertDimension(ctx: CanvasRenderingContext2D, p: { x: number; y1: number; y2: number; label: string; color: string }): void {
  const { x, y1, y2, label, color } = p;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();
  const a = 4;
  ctx.beginPath();
  ctx.moveTo(x - a, y1);
  ctx.lineTo(x + a, y1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - a, y2);
  ctx.lineTo(x + a, y2);
  ctx.stroke();
  ctx.save();
  ctx.translate(x - 10, (y1 + y2) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(label, 0, 0);
  ctx.restore();
  ctx.restore();
}

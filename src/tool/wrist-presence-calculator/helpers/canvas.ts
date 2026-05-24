interface DrawParams {
  canvas: HTMLCanvasElement;
  wristW: number;
  caseD: number;
  l2l: number;
  unit: 'cm' | 'in';
  ui: Record<string, string>;
}

interface RenderContext {
  ctx: CanvasRenderingContext2D;
  cx: number;
  cy: number;
  scale: number;
  colors: CSSStyleDeclaration;
  wristW: number;
  caseD: number;
  l2l: number;
  unit: 'cm' | 'in';
  ui: Record<string, string>;
}

export function drawFitVisualizer(params: DrawParams) {
  const ctx = params.canvas.getContext('2d');
  if (!ctx) return;
  const rect = params.canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  params.canvas.width = rect.width * dpr;
  params.canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);
  const scale = (w * 0.75) / Math.max(params.wristW, params.l2l, 80);
  const r: RenderContext = {
    ctx,
    cx: w / 2,
    cy: h / 2,
    scale,
    colors: getComputedStyle(params.canvas),
    wristW: params.wristW,
    caseD: params.caseD,
    l2l: params.l2l,
    unit: params.unit,
    ui: params.ui
  };
  drawBackground(r);
  drawWrist(r);
  drawWatch(r);
  drawDimensions(r);
}

function drawBackground(r: RenderContext) {
  const outerCircle = r.colors.getPropertyValue('--visualizer-outer-circle').trim();
  const outerStroke = r.colors.getPropertyValue('--visualizer-outer-stroke').trim();
  const drawWristW = r.wristW * r.scale;
  const drawL2l = r.l2l * r.scale;
  r.ctx.fillStyle = outerCircle;
  r.ctx.strokeStyle = outerStroke;
  r.ctx.lineWidth = 1;
  r.ctx.beginPath();
  r.ctx.arc(r.cx, r.cy, Math.max(drawWristW, drawL2l) / 2 + 20, 0, Math.PI * 2);
  r.ctx.fill();
  r.ctx.stroke();
}

function drawWrist(r: RenderContext) {
  const wristFill = r.colors.getPropertyValue('--visualizer-wrist-fill').trim();
  const wristStroke = r.colors.getPropertyValue('--visualizer-wrist-stroke').trim();
  const drawWristW = r.wristW * r.scale;
  r.ctx.fillStyle = wristFill;
  r.ctx.strokeStyle = wristStroke;
  r.ctx.lineWidth = 2;
  r.ctx.beginPath();
  r.ctx.ellipse(r.cx, r.cy, drawWristW / 2, 35, 0, 0, Math.PI * 2);
  r.ctx.fill();
  r.ctx.stroke();
}

function drawWatch(r: RenderContext) {
  const watchFace = r.colors.getPropertyValue('--visualizer-watch-face').trim();
  const watchInner = r.colors.getPropertyValue('--visualizer-watch-inner').trim();
  const isOverhang = r.l2l > r.wristW;
  const watchColor = isOverhang ? 'rgba(239, 68, 68, 0.8)' : 'rgba(244, 63, 94, 0.8)';
  const lugColor = isOverhang ? 'rgba(239, 68, 68, 0.6)' : 'rgba(244, 63, 94, 0.5)';
  const drawCaseD = r.caseD * r.scale;
  const drawL2l = r.l2l * r.scale;
  drawLugs(r, drawCaseD, drawL2l, lugColor);
  r.ctx.fillStyle = watchFace;
  r.ctx.strokeStyle = watchColor;
  r.ctx.lineWidth = 4;
  r.ctx.beginPath();
  r.ctx.arc(r.cx, r.cy, drawCaseD / 2, 0, Math.PI * 2);
  r.ctx.fill();
  r.ctx.stroke();
  r.ctx.fillStyle = watchInner;
  r.ctx.beginPath();
  r.ctx.arc(r.cx, r.cy, drawCaseD / 2.3, 0, Math.PI * 2);
  r.ctx.fill();
  drawHands(r, drawCaseD, watchColor);
}

function drawLugs(r: RenderContext, drawCaseD: number, drawL2l: number, lugColor: string) {
  r.ctx.strokeStyle = lugColor;
  r.ctx.lineWidth = 6;
  r.ctx.lineCap = 'round';
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawL2l / 2, r.cy - 8);
  r.ctx.lineTo(r.cx - drawCaseD / 3, r.cy - 8);
  r.ctx.moveTo(r.cx + drawCaseD / 3, r.cy - 8);
  r.ctx.lineTo(r.cx + drawL2l / 2, r.cy - 8);
  r.ctx.moveTo(r.cx - drawL2l / 2, r.cy + 8);
  r.ctx.lineTo(r.cx - drawCaseD / 3, r.cy + 8);
  r.ctx.moveTo(r.cx + drawCaseD / 3, r.cy + 8);
  r.ctx.lineTo(r.cx + drawL2l / 2, r.cy + 8);
  r.ctx.stroke();
}

function drawHands(r: RenderContext, drawCaseD: number, watchColor: string) {
  const watchHands = r.colors.getPropertyValue('--visualizer-watch-hands').trim();
  r.ctx.strokeStyle = watchHands;
  r.ctx.lineWidth = 2;
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx, r.cy);
  r.ctx.lineTo(r.cx + drawCaseD / 4, r.cy - drawCaseD / 6);
  r.ctx.moveTo(r.cx, r.cy);
  r.ctx.lineTo(r.cx, r.cy - drawCaseD / 3);
  r.ctx.stroke();
  r.ctx.fillStyle = watchColor;
  r.ctx.beginPath();
  r.ctx.arc(r.cx, r.cy, 3, 0, Math.PI * 2);
  r.ctx.fill();
}

function drawDimensions(r: RenderContext) {
  const drawWristW = r.wristW * r.scale;
  const drawL2l = r.l2l * r.scale;
  drawWristDim(r, drawWristW);
  drawWatchDim(r, drawL2l);
}

function drawWristDim(r: RenderContext, drawWristW: number) {
  const dimensionLine = r.colors.getPropertyValue('--visualizer-dim-line').trim();
  const dimensionText = r.colors.getPropertyValue('--visualizer-dim-text').trim();
  r.ctx.strokeStyle = dimensionLine;
  r.ctx.lineWidth = 1;
  r.ctx.setLineDash([4, 4]);
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawWristW / 2, r.cy - 45);
  r.ctx.lineTo(r.cx - drawWristW / 2, r.cy + 45);
  r.ctx.moveTo(r.cx + drawWristW / 2, r.cy - 45);
  r.ctx.lineTo(r.cx + drawWristW / 2, r.cy + 45);
  r.ctx.stroke();
  r.ctx.setLineDash([]);
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawWristW / 2, r.cy - 50);
  r.ctx.lineTo(r.cx + drawWristW / 2, r.cy - 50);
  r.ctx.stroke();
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawWristW / 2, r.cy - 53);
  r.ctx.lineTo(r.cx - drawWristW / 2, r.cy - 47);
  r.ctx.moveTo(r.cx + drawWristW / 2, r.cy - 53);
  r.ctx.lineTo(r.cx + drawWristW / 2, r.cy - 47);
  r.ctx.stroke();
  r.ctx.fillStyle = dimensionText;
  r.ctx.font = '10px sans-serif';
  r.ctx.textAlign = 'center';
  const valText = r.unit === 'in' ? `${(r.wristW / 25.4).toFixed(2)} in` : `${(r.wristW / 10).toFixed(1)} cm`;
  r.ctx.fillText(`${valText} ${r.ui.customLabel || 'Wrist'}`, r.cx, r.cy - 58);
}

function drawWatchDim(r: RenderContext, drawL2l: number) {
  const isOverhang = r.l2l > r.wristW;
  const watchColor = isOverhang ? 'rgba(239, 68, 68, 0.8)' : 'rgba(244, 63, 94, 0.8)';
  r.ctx.strokeStyle = watchColor;
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawL2l / 2, r.cy + 50);
  r.ctx.lineTo(r.cx + drawL2l / 2, r.cy + 50);
  r.ctx.stroke();
  r.ctx.beginPath();
  r.ctx.moveTo(r.cx - drawL2l / 2, r.cy + 47);
  r.ctx.lineTo(r.cx - drawL2l / 2, r.cy + 53);
  r.ctx.moveTo(r.cx + drawL2l / 2, r.cy + 47);
  r.ctx.lineTo(r.cx + drawL2l / 2, r.cy + 53);
  r.ctx.stroke();
  r.ctx.fillStyle = watchColor;
  const l2lText = r.unit === 'in' ? `${(r.l2l / 25.4).toFixed(2)} in` : `${(r.l2l / 10).toFixed(1)} cm`;
  r.ctx.fillText(`${l2lText} L2L`, r.cx, r.cy + 62);
}

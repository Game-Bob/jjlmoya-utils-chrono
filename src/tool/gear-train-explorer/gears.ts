import { getCtx, c } from './state';

function gearOutline(r: number, teeth: number) {
  const ctx = getCtx();
  const toothH = r * 0.18;
  const baseR = r - toothH * 0.3;
  const aStep = Math.PI * 2 / teeth;
  const gap = aStep * 0.05;
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const aStart = i * aStep - Math.PI / 2;
    const aMid = (i + 0.5) * aStep - Math.PI / 2;
    const aEnd = (i + 1) * aStep - Math.PI / 2;
    ctx.lineTo(Math.cos(aStart + gap) * baseR, Math.sin(aStart + gap) * baseR);
    ctx.lineTo(Math.cos(aMid) * (baseR + toothH), Math.sin(aMid) * (baseR + toothH));
    ctx.lineTo(Math.cos(aEnd - gap) * baseR, Math.sin(aEnd - gap) * baseR);
  }
  ctx.closePath();
}

function gearFill(r: number, color: string, highlight: boolean) {
  const ctx = getCtx();
  const toothH = r * 0.18;
  const grad = ctx.createRadialGradient(-r * 0.2, -r * 0.2, 0, 0, 0, r + toothH);
  if (highlight) {
    grad.addColorStop(0, c('#fff8dc', '#fff3b0'));
    grad.addColorStop(0.15, color);
    grad.addColorStop(0.7, c('#8b6914', '#b8860b'));
    grad.addColorStop(1, c('#5a4510', '#8b6914'));
  } else {
    grad.addColorStop(0, color);
    grad.addColorStop(0.5, c('#b8860b', '#cd9b1d'));
    grad.addColorStop(0.8, c('#8b6914', '#b8860b'));
    grad.addColorStop(1, c('#5a4510', '#8b6914'));
  }
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.shadowColor = highlight ? c('rgba(212,175,55,0.6)', 'rgba(180,140,30,0.4)') : 'transparent';
  ctx.shadowBlur = highlight ? 20 : 0;
  ctx.strokeStyle = highlight ? '#ffd700' : c('rgba(212,175,55,0.3)', 'rgba(180,140,30,0.4)');
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
}

function gearInnerHole(r: number) {
  const ctx = getCtx();
  const innerR = r * 0.2;
  ctx.beginPath();
  ctx.arc(0, 0, innerR, 0, Math.PI * 2);
  const ig = ctx.createRadialGradient(0, 0, 0, 0, 0, innerR);
  ig.addColorStop(0, c('#2a2a42', '#f0ebe0'));
  ig.addColorStop(0.6, c('#1a1a2e', '#e8e0d0'));
  ig.addColorStop(1, c('#5a4510', '#8b6914'));
  ctx.fillStyle = ig;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, innerR * 0.5, 0, Math.PI * 2);
  ctx.strokeStyle = c('rgba(212,175,55,0.2)', 'rgba(139,105,20,0.3)');
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawGearBody(opts: { r: number; teeth: number; color: string; highlight: boolean }) {
  gearOutline(opts.r, opts.teeth);
  gearFill(opts.r, opts.color, opts.highlight);
  gearInnerHole(opts.r);
}

export function drawGear(opts: { x: number; y: number; r: number; teeth: number; angle: number; color: string; highlight: boolean }) {
  const ctx = getCtx();
  ctx.save();
  ctx.translate(opts.x, opts.y);
  ctx.rotate(opts.angle);
  drawGearBody({ r: opts.r, teeth: opts.teeth, color: opts.color, highlight: opts.highlight });
  ctx.restore();
}

export function drawPallet(x: number, y: number, phase: number) {
  const ctx = getCtx();
  ctx.save();
  ctx.translate(x, y);
  const a = Math.sin(phase) * 0.4;
  ctx.strokeStyle = c('#a0b0c0', '#607080');
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  const ax = Math.cos(a) * 18;
  const ay = Math.sin(a) * 18;
  const fx1 = Math.cos(a + 0.5) * 12;
  const fy1 = Math.sin(a + 0.5) * 12;
  const fx2 = Math.cos(a - 0.5) * 12;
  const fy2 = Math.sin(a - 0.5) * 12;
  ctx.beginPath(); ctx.moveTo(-ax, -ay); ctx.lineTo(0, 0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(fx1, fy1); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(fx2, fy2); ctx.stroke();
  ctx.fillStyle = c('#a0b0c0', '#607080');
  ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(-ax, -ay, 3, 0, Math.PI * 2); ctx.fillStyle = c('#c0d0e0', '#8090a0'); ctx.fill();
  ctx.beginPath(); ctx.arc(fx1, fy1, 2.5, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(fx2, fy2, 2.5, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

export function drawBalance(x: number, y: number, r: number, phase: number) {
  const ctx = getCtx();
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.sin(phase) * 0.6);
  ctx.strokeStyle = c('#c0d0e0', '#8090a0');
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2); ctx.strokeStyle = c('rgba(192,208,224,0.3)', 'rgba(100,110,130,0.3)'); ctx.lineWidth = 1; ctx.stroke();
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
  grad.addColorStop(0, c('#e8f0f8', '#d0d8e0'));
  grad.addColorStop(0.3, c('#d0dce8', '#b0b8c0'));
  grad.addColorStop(1, c('#304050', '#809090'));
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(0, 0, r * 0.75, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = c('#c0d0e0', '#8090a0'); ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(-r * 0.7, 0); ctx.lineTo(r * 0.7, 0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, -r * 0.7); ctx.lineTo(0, r * 0.7); ctx.stroke();
  ctx.fillStyle = '#d4af37';
  ctx.beginPath(); ctx.arc(0, 0, 5, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = c('rgba(212,175,55,0.5)', 'rgba(180,140,30,0.5)');
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(0, 0, r + 4, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}

export function drawConnection(opts: { x1: number; y1: number; x2: number; y2: number; active: boolean }) {
  const ctx = getCtx();
  ctx.beginPath();
  ctx.moveTo(opts.x1, opts.y1);
  ctx.lineTo(opts.x2, opts.y2);
  if (opts.active) {
    ctx.strokeStyle = c('rgba(212,175,55,0.35)', 'rgba(180,140,30,0.5)');
    ctx.lineWidth = 3;
    ctx.shadowColor = c('rgba(212,175,55,0.2)', 'rgba(180,140,30,0.3)');
    ctx.shadowBlur = 8;
  } else {
    ctx.strokeStyle = c('rgba(60,60,90,0.5)', 'rgba(100,90,70,0.3)');
    ctx.lineWidth = 2;
  }
  ctx.stroke();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
}

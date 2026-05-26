import type { MovementDef } from './movements';
import { getCtx, getMov, getHovered, getFontFam, setMov, setHovered, detectTheme, c, W, H } from './state';
import { drawGear, drawPallet, drawBalance, drawConnection } from './gears';

export function drawBackground() {
  const ctx = getCtx();
  const bg0 = c('#1e1e3a', '#f5f0e8');
  const bg1 = c('#16162e', '#eae4d8');
  const bg2 = c('#0c0c18', '#ddd6c8');
  const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 400);
  grad.addColorStop(0, bg0);
  grad.addColorStop(0.5, bg1);
  grad.addColorStop(1, bg2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
}

export function drawTitleBar(label: string) {
  const ctx = getCtx();
  ctx.fillStyle = c('rgba(212,175,55,0.7)', 'rgba(120,80,10,0.85)');
  ctx.font = '600 14px ' + getFontFam();
  ctx.textAlign = 'left';
  ctx.fillText(label + ' — Gear Train', 16, 24);
  ctx.fillStyle = c('rgba(160,160,184,0.55)', 'rgba(60,50,30,0.7)');
  ctx.font = '11px ' + getFontFam();
  ctx.fillText('Mainspring to Balance Wheel', 16, 40);
}

export function drawLabels() {
  const ctx = getCtx();
  const mov = getMov();
  const hover = getHovered();
  ctx.font = '10px ' + getFontFam();
  ctx.textAlign = 'center';
  for (let i = 0; i < mov.gears.length; i++) {
    const g = mov.gears[i];
    ctx.fillStyle = hover === i ? c('#ffd700', '#7a5a00') : c('rgba(200,200,220,0.8)', 'rgba(40,30,15,0.85)');
    ctx.fillText(g.label, g.x, g.y + g.r + 14);
    const rpmTxt = g.rpm < 1 ? (g.rpm * 60).toFixed(1) + '/h' : g.rpm.toFixed(1) + ' rpm';
    ctx.fillStyle = hover === i ? c('rgba(255,215,0,0.6)', 'rgba(100,70,10,0.7)') : c('rgba(160,160,184,0.5)', 'rgba(60,50,30,0.65)');
    ctx.font = '9px ' + getFontFam();
    ctx.fillText(rpmTxt, g.x, g.y + g.r + 24);
    ctx.font = '10px ' + getFontFam();
  }
}

export function drawExtraLabels() {
  const ctx = getCtx();
  const mov = getMov();
  const p = mov.pallet;
  const b = mov.balance;
  ctx.font = '10px ' + getFontFam();
  ctx.textAlign = 'center';
  ctx.fillStyle = c('rgba(200,200,220,0.8)', 'rgba(40,30,15,0.85)');
  ctx.fillText('Pallet Fork', p.x, p.y + 22);
  ctx.fillStyle = c('rgba(160,160,184,0.5)', 'rgba(60,50,30,0.65)');
  ctx.font = '9px ' + getFontFam();
  ctx.fillText(p.bph + ' bph', p.x, p.y + 32);
  ctx.font = '10px ' + getFontFam();
  ctx.fillStyle = c('rgba(200,200,220,0.8)', 'rgba(40,30,15,0.85)');
  ctx.fillText('Balance Wheel', b.x, b.y + b.r + 16);
  ctx.fillStyle = c('rgba(160,160,184,0.5)', 'rgba(60,50,30,0.65)');
  ctx.font = '9px ' + getFontFam();
  ctx.fillText(b.hz + ' Hz / ' + b.vph + ' vph', b.x, b.y + b.r + 26);
}

export function drawPowerFlowLine() {
  const ctx = getCtx();
  const mov = getMov();
  const gears = mov.gears;
  ctx.beginPath();
  ctx.moveTo(gears[0].x + gears[0].r + 5, gears[0].y);
  for (let i = 1; i < gears.length; i++) {
    ctx.lineTo(gears[i].x - gears[i].r - 5, gears[i].y);
  }
  const eg = gears[gears.length - 1];
  ctx.lineTo(eg.x + eg.r + 15, eg.y);
  ctx.lineTo(mov.pallet.x - 15, mov.pallet.y);
  ctx.lineTo(mov.pallet.x, mov.pallet.y);
  ctx.strokeStyle = c('rgba(212,175,55,0.08)', 'rgba(139,105,20,0.12)');
  ctx.lineWidth = 60; ctx.stroke();
  ctx.strokeStyle = c('rgba(212,175,55,0.12)', 'rgba(139,105,20,0.15)');
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 6]); ctx.stroke();
  ctx.setLineDash([]);
}

function drawConnections(mov: MovementDef, highlight: number | null) {
  const gears = mov.gears;
  for (let i = 0; i < gears.length; i++) {
    if (i < gears.length - 1) {
      const g1 = gears[i], g2 = gears[i + 1];
      drawConnection({ x1: g1.x + g1.r * 0.7, y1: g1.y, x2: g2.x - g2.r * 0.7, y2: g2.y, active: highlight === i || highlight === i + 1 });
    }
  }
  const lg = gears[gears.length - 1];
  drawConnection({ x1: lg.x + lg.r * 0.7, y1: lg.y, x2: mov.pallet.x - 10, y2: mov.pallet.y, active: highlight === gears.length - 1 });
  drawConnection({ x1: mov.pallet.x, y1: mov.pallet.y, x2: mov.balance.x, y2: mov.balance.y, active: highlight === gears.length - 1 });
}

export function drawScene(mov: MovementDef, opts: { angles: number[]; palletPhase: number; balancePhase: number; highlight: number | null; hover: number | null }) {
  const ctx = getCtx();
  setMov(mov);
  setHovered(opts.hover);
  detectTheme();
  ctx.save();
  ctx.clearRect(0, 0, W, H);
  drawBackground();
  drawTitleBar(mov.label);
  drawConnections(mov, opts.highlight);
  for (let i = 0; i < mov.gears.length; i++) {
    const g = mov.gears[i];
    drawGear({ x: g.x, y: g.y, r: g.r, teeth: g.teeth, angle: opts.angles[i], color: g.color, highlight: opts.hover === i });
  }
  drawPallet(mov.pallet.x, mov.pallet.y, opts.palletPhase);
  drawBalance(mov.balance.x, mov.balance.y, mov.balance.r, opts.balancePhase);
  drawLabels();
  drawExtraLabels();
  ctx.restore();
}

import { getCtx, getFontFam, c, W, H, CX, CY, OUTER_R } from './state';

export function drawBg() {
  const ctx = getCtx();
  const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 400);
  grad.addColorStop(0, c('#1e1e3a', '#f5f0e8'));
  grad.addColorStop(0.5, c('#16162e', '#eae4d8'));
  grad.addColorStop(1, c('#0c0c18', '#ddd6c8'));
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
}

export function drawOuterRing() {
  const ctx = getCtx();
  ctx.beginPath();
  ctx.arc(CX, CY, OUTER_R, 0, Math.PI * 2);
  ctx.strokeStyle = c('rgba(212,175,55,0.3)', 'rgba(139,105,20,0.3)');
  ctx.lineWidth = 2;
  ctx.stroke();
}

export function drawDateNumbers(currentDate: number, smoothDate: number) {
  const ctx = getCtx();
  const r = 245;
  const ff = getFontFam();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 1; i <= 31; i++) {
    const ang = ((i - 1) / 31) * Math.PI * 2 - Math.PI / 2;
    const x = CX + Math.cos(ang) * r;
    const y = CY + Math.sin(ang) * r;
    const isActive = Math.round(smoothDate) === i;
    ctx.font = (isActive ? 'bold 13px ' : '10px ') + ff;
    ctx.fillStyle = isActive ? c('#ffd700', '#8b6914') : c('rgba(180,180,200,0.5)', 'rgba(80,70,50,0.5)');
    ctx.fillText(i.toString(), x, y);
  }
}

export function drawDateHand(smoothDate: number) {
  const ctx = getCtx();
  const ang = ((smoothDate - 1) / 31) * Math.PI * 2 - Math.PI / 2;
  ctx.save();
  ctx.translate(CX, CY);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(-4, 20);
  ctx.lineTo(0, -200);
  ctx.lineTo(4, 20);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, -200, 0, 20);
  grad.addColorStop(0, c('#ffd700', '#b8860b'));
  grad.addColorStop(1, c('#b8860b', '#8b6914'));
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, Math.PI * 2);
  ctx.fillStyle = c('#d4af37', '#8b6914');
  ctx.fill();
  ctx.restore();
}

export function drawMonthWindow(y: number, m: number) {
  const ctx = getCtx();
  const ff = getFontFam();
  const mn = new Intl.DateTimeFormat(window.location.pathname.match(/^\/([a-z]{2})/)?.[1] || 'en', { month: 'long' }).format(new Date(y, m, 1));
  ctx.save();
  const x = CX, yPos = CY - 140;
  ctx.fillStyle = c('rgba(30,30,58,0.9)', 'rgba(245,240,232,0.95)');
  ctx.beginPath();
  ctx.roundRect(x - 75, yPos - 12, 150, 28, 6);
  ctx.fill();
  ctx.strokeStyle = c('rgba(212,175,55,0.4)', 'rgba(139,105,20,0.4)');
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = c('#d4af37', '#8b6914');
  ctx.font = '600 13px ' + ff;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(mn, x, yPos + 2);
  ctx.restore();
}

export function drawDaySubdial(y: number, m: number, d: number) {
  const ctx = getCtx();
  const ff = getFontFam();
  const dow = new Date(y, m, d).getDay();
  const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const sx = CX + 150, sy = CY - 20, sr = 45;
  ctx.beginPath();
  ctx.arc(sx, sy, sr, 0, Math.PI * 2);
  ctx.fillStyle = c('rgba(30,30,58,0.8)', 'rgba(245,240,232,0.9)');
  ctx.fill();
  ctx.strokeStyle = c('rgba(212,175,55,0.3)', 'rgba(139,105,20,0.3)');
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = c('rgba(180,180,200,0.4)', 'rgba(80,70,50,0.4)');
  ctx.font = '7px ' + ff;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    const nx = sx + Math.cos(a) * (sr - 10);
    const ny = sy + Math.sin(a) * (sr - 10);
    ctx.fillStyle = i === dow ? c('#ffd700', '#8b6914') : c('rgba(180,180,200,0.4)', 'rgba(80,70,50,0.4)');
    ctx.font = (i === dow ? 'bold 8px ' : '7px ') + ff;
    ctx.fillText(names[i], nx, ny);
  }
  ctx.fillStyle = c('#d4af37', '#8b6914');
  ctx.font = 'bold 14px ' + ff;
  ctx.fillText(names[dow], sx, sy + sr + 16);
}

export function drawMoonSubdial(y: number, m: number, d: number) {
  const ctx = getCtx();
  const mx = CX - 150, my = CY + 30, mr = 42;
  ctx.beginPath();
  ctx.arc(mx, my, mr, 0, Math.PI * 2);
  ctx.fillStyle = c('rgba(30,30,58,0.8)', 'rgba(245,240,232,0.9)');
  ctx.fill();
  ctx.strokeStyle = c('rgba(212,175,55,0.3)', 'rgba(139,105,20,0.3)');
  ctx.lineWidth = 1;
  ctx.stroke();
  const jd = new Date(y, m, d).getTime() / 86400000 + 2440587.5 - 2451549.5;
  const progress = (((jd % 29.53058867) + 29.53058867) % 29.53058867) / 29.53058867;
  const mr2 = mr - 8;
  ctx.save();
  ctx.beginPath();
  ctx.arc(mx, my, mr2, 0, Math.PI * 2);
  ctx.fillStyle = c('#1a1a2e', '#ddd6c8');
  ctx.fill();
  ctx.clip();
  ctx.beginPath();
  ctx.arc(mx + (progress - 0.5) * mr2 * 2, my, mr2, 0, Math.PI * 2);
  ctx.fillStyle = c('#e8d8a0', '#c8a850');
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.arc(mx, my, mr2, 0, Math.PI * 2);
  ctx.strokeStyle = c('rgba(212,175,55,0.2)', 'rgba(139,105,20,0.2)');
  ctx.lineWidth = 1;
  ctx.stroke();
}

export function drawLeapIndicator(y: number) {
  const ctx = getCtx();
  const ff = getFontFam();
  const leap = new Date(y, 1, 29).getDate() === 29;
  const lx = CX, ly = CY + 130;
  ctx.fillStyle = c('rgba(30,30,58,0.8)', 'rgba(245,240,232,0.9)');
  ctx.beginPath();
  ctx.roundRect(lx - 50, ly - 10, 100, 24, 6);
  ctx.fill();
  ctx.strokeStyle = leap ? c('rgba(212,175,55,0.5)', 'rgba(139,105,20,0.5)') : c('rgba(60,60,90,0.3)', 'rgba(80,70,50,0.2)');
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = leap ? c('#ffd700', '#8b6914') : c('rgba(160,160,184,0.4)', 'rgba(80,70,50,0.4)');
  ctx.font = '600 10px ' + ff;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(leap ? 'LEAP YEAR' : 'COMMON YEAR', lx, ly + 2);
}

export function drawScene(y: number, m: number, d: number, smoothDate: number) {
  const ctx = getCtx();
  ctx.save();
  ctx.clearRect(0, 0, W, H);
  drawBg();
  drawOuterRing();
  drawDateNumbers(d, smoothDate);
  drawDateHand(smoothDate);
  drawMonthWindow(y, m);
  drawDaySubdial(y, m, Math.round(smoothDate));
  drawMoonSubdial(y, m, Math.round(smoothDate));
  drawLeapIndicator(y);
  ctx.restore();
}

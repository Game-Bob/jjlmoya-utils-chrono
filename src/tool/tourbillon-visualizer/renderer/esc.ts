import { getC, cl, CX, CY } from '../state';

function balanceRim(br: number) {
  const c = getC();
  c.beginPath();
  c.arc(0, 0, br, 0, Math.PI * 2);
  c.fillStyle = cl('#2a3040', '#d8d0c0');
  c.fill();
  c.strokeStyle = cl('#d4af37', '#b09050');
  c.lineWidth = 2;
  c.stroke();
  c.beginPath();
  c.arc(0, 0, br * 0.85, 0, Math.PI * 2);
  c.strokeStyle = cl('rgba(212,175,55,0.3)', 'rgba(176,144,80,0.3)');
  c.lineWidth = 1;
  c.stroke();
}

function balanceScrews(br: number) {
  const c = getC();
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const x = Math.cos(a) * br, y = Math.sin(a) * br;
    c.beginPath();
    c.arc(x, y, 3, 0, Math.PI * 2);
    const g = c.createRadialGradient(x - 0.5, y - 0.5, 0, x, y, 3);
    g.addColorStop(0, cl('#e8f0f8', '#d0c8b8'));
    g.addColorStop(0.5, cl('#c0d0e0', '#b0a898'));
    g.addColorStop(1, cl('#8098b0', '#807868'));
    c.fillStyle = g;
    c.fill();
  }
}

export function drawBalance(angle: number, highlight: boolean) {
  const c = getC();
  const br = 55;
  c.save();
  c.translate(CX, CY);
  c.rotate(angle);
  balanceRim(br);
  balanceScrews(br);
  const cl2 = br * 0.6;
  c.strokeStyle = cl('#c0d0e0', '#b0a898');
  c.lineWidth = 2;
  c.beginPath(); c.moveTo(-cl2, 0); c.lineTo(cl2, 0); c.stroke();
  c.beginPath(); c.moveTo(0, -cl2); c.lineTo(0, cl2); c.stroke();
  c.beginPath(); c.arc(0, 0, 4, 0, Math.PI * 2);
  c.fillStyle = cl('#d4af37', '#b89850');
  c.fill();
  if (highlight) {
    c.beginPath();
    c.arc(0, 0, br + 4, 0, Math.PI * 2);
    c.strokeStyle = 'rgba(212,175,55,0.6)';
    c.lineWidth = 2;
    c.setLineDash([3, 3]);
    c.stroke();
    c.setLineDash([]);
  }
  c.restore();
}

export function drawHairspring(phase: number, hz: number, highlight: boolean) {
  const c = getC();
  const expand = Math.sin(phase) * (0.08 + hz * 0.02);
  c.save();
  c.translate(CX, CY);
  c.beginPath();
  for (let i = 0; i < 200; i++) {
    const t = i / 200;
    const r = 8 + t * 32 * (1 + expand);
    const a = t * Math.PI * 8 + Math.sin(phase) * 0.3;
    if (i === 0) c.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else c.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  c.strokeStyle = highlight ? 'rgba(255,215,0,0.8)' : cl('rgba(192,208,224,0.5)', 'rgba(144,136,120,0.4)');
  c.lineWidth = highlight ? 1.2 : 0.7;
  c.stroke();
  c.restore();
}

export function drawPallet(phase: number, highlight: boolean) {
  const c = getC();
  c.save();
  c.translate(CX, CY + 70);
  const a = Math.sin(phase) * 0.35;
  c.rotate(a);
  c.strokeStyle = highlight ? '#ffd700' : cl('#a0b0c0', '#908878');
  c.lineWidth = 2.5;
  c.lineCap = 'round';
  c.beginPath(); c.moveTo(-12, -18); c.lineTo(0, 0); c.stroke();
  c.beginPath(); c.moveTo(0, 0); c.lineTo(10, -14); c.stroke();
  c.beginPath(); c.moveTo(0, 0); c.lineTo(-10, -14); c.stroke();
  c.fillStyle = '#c02030';
  c.beginPath(); c.arc(10, -14, 2.5, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(-10, -14, 2.5, 0, Math.PI * 2); c.fill();
  c.fillStyle = cl('#a0b0c0', '#908878');
  c.beginPath(); c.arc(0, 0, 3.5, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(-12, -18, 2.5, 0, Math.PI * 2); c.fill();
  if (highlight) {
    c.beginPath();
    c.arc(0, 0, 22, 0, Math.PI * 2);
    c.strokeStyle = 'rgba(212,175,55,0.6)';
    c.lineWidth = 1.5;
    c.setLineDash([3, 3]);
    c.stroke();
    c.setLineDash([]);
  }
  c.restore();
}

function drawEscapeTeeth() {
  const c = getC();
  for (let i = 0; i < 15; i++) {
    const a = (i / 15) * Math.PI * 2;
    const nextA = ((i + 1) / 15) * Math.PI * 2;
    const midA = (a + nextA) / 2;
    c.beginPath();
    c.moveTo(Math.cos(a) * 18, Math.sin(a) * 18);
    c.lineTo(Math.cos(midA) * 26, Math.sin(midA) * 26);
    c.lineTo(Math.cos(nextA) * 18, Math.sin(nextA) * 18);
    c.closePath();
    c.fillStyle = cl('#d4af37', '#b89850');
    c.fill();
    c.strokeStyle = cl('rgba(180,150,80,0.3)', 'rgba(120,100,60,0.3)');
    c.lineWidth = 0.5;
    c.stroke();
  }
}

function drawEscapeCenter() {
  const c = getC();
  c.beginPath();
  c.arc(0, 0, 16, 0, Math.PI * 2);
  c.fillStyle = cl('#b89440', '#a08040');
  c.fill();
  c.beginPath();
  c.arc(0, 0, 4, 0, Math.PI * 2);
  c.fillStyle = cl('#2a3040', '#d0c8b8');
  c.fill();
}

export function drawEscapeWheel(angle: number, highlight: boolean) {
  const c = getC();
  c.save();
  c.translate(CX, CY + 130);
  c.rotate(angle);
  drawEscapeTeeth();
  drawEscapeCenter();
  if (highlight) {
    c.beginPath();
    c.arc(0, 0, 30, 0, Math.PI * 2);
    c.strokeStyle = 'rgba(212,175,55,0.6)';
    c.lineWidth = 1.5;
    c.setLineDash([3, 3]);
    c.stroke();
    c.setLineDash([]);
  }
  c.restore();
}

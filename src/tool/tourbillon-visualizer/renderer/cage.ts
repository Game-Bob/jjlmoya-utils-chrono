import { getC, cl, CX, CY } from '../state';

function cageOuter(cr: number) {
  const c = getC();
  c.save();
  c.beginPath();
  c.arc(0, 0, cr, 0, Math.PI * 2);
  const g = c.createLinearGradient(-cr, -cr, cr, cr);
  g.addColorStop(0, cl('#f0d8a0', '#c8b080'));
  g.addColorStop(0.3, cl('#d4bf80', '#b09868'));
  g.addColorStop(0.7, cl('#b89850', '#907848'));
  g.addColorStop(1, cl('#8a7030', '#706030'));
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = cl('rgba(180,150,80,0.6)', 'rgba(120,100,60,0.5)');
  c.lineWidth = 2.5;
  c.stroke();
  c.restore();
}

function cageScrews(cr: number) {
  const c = getC();
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const x = Math.cos(a) * cr, y = Math.sin(a) * cr;
    c.beginPath();
    c.arc(x, y, 2.5, 0, Math.PI * 2);
    const sg = c.createRadialGradient(x - 0.5, y - 0.5, 0, x, y, 2.5);
    sg.addColorStop(0, cl('#e8f0f8', '#d0c8b8'));
    sg.addColorStop(1, cl('#8098b0', '#807868'));
    c.fillStyle = sg;
    c.fill();
  }
  c.beginPath();
  c.arc(0, 0, cr * 0.85, 0, Math.PI * 2);
  c.strokeStyle = cl('rgba(180,150,80,0.15)', 'rgba(120,100,60,0.12)');
  c.lineWidth = 1;
  c.stroke();
}

function bridgeScrews() {
  const c = getC();
  for (let i = 0; i < 3; i++) {
    const bx = -100 + i * 100;
    c.beginPath();
    c.arc(bx, -158, 3, 0, Math.PI * 2);
    c.fillStyle = cl('#a0b0c0', '#908878');
    c.fill();
  }
}

function drawCross(cr: number) {
  const c = getC();
  c.beginPath();
  c.moveTo(-cr * 0.8, 0);
  c.lineTo(cr * 0.8, 0);
  c.moveTo(0, -cr * 0.8);
  c.lineTo(0, cr * 0.8);
  c.strokeStyle = cl('rgba(180,150,80,0.2)', 'rgba(120,100,60,0.15)');
  c.lineWidth = 1;
  c.stroke();
}

function drawCornerScrews(cr: number) {
  const c = getC();
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const x = Math.cos(a) * cr * 0.65, y = Math.sin(a) * cr * 0.65;
    c.beginPath();
    c.arc(x, y, 2.5, 0, Math.PI * 2);
    c.fillStyle = cl('#d4af37', '#c8a850');
    c.fill();
  }
}

function drawBridge() {
  const c = getC();
  c.save();
  const g = c.createLinearGradient(-145, -155, 145, -155);
  g.addColorStop(0, cl('rgba(160,170,190,0.6)', 'rgba(140,130,110,0.5)'));
  g.addColorStop(0.3, cl('rgba(200,210,230,0.7)', 'rgba(180,170,150,0.6)'));
  g.addColorStop(0.7, cl('rgba(200,210,230,0.7)', 'rgba(180,170,150,0.6)'));
  g.addColorStop(1, cl('rgba(160,170,190,0.6)', 'rgba(140,130,110,0.5)'));
  c.beginPath();
  c.roundRect(-150, -162, 300, 8, 3);
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = cl('rgba(120,130,150,0.3)', 'rgba(100,90,70,0.25)');
  c.lineWidth = 0.5;
  c.stroke();
  bridgeScrews();
  c.beginPath();
  c.roundRect(-3, -160, 6, 8, 2);
  c.fillStyle = cl('#d4af37', '#c8a850');
  c.fill();
  c.restore();
}

export function drawCage(angle: number, flying: boolean, gyro: boolean, zoom: boolean) {
  const c = getC();
  const cr = zoom ? 60 : 140;
  const sy = gyro ? 1 + Math.sin(angle * 2) * 0.25 : 1;
  c.save();
  c.translate(CX, CY);
  c.scale(1, sy);
  c.rotate(angle);
  if (!flying && !gyro) drawBridge();
  cageOuter(cr);
  cageScrews(cr);
  if (!flying && !gyro) {
    drawCross(cr);
    drawCornerScrews(cr);
  }
  c.restore();
}

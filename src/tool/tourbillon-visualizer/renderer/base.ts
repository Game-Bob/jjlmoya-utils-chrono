import { getC, cl, W, H, CX, CY } from '../state';

export function drawBg() {
  const c = getC();
  const g = c.createRadialGradient(CX, CY, 0, CX, CY, 450);
  g.addColorStop(0, cl('#1a1a30', '#f0ebe0'));
  g.addColorStop(0.5, cl('#12122a', '#e8e0d0'));
  g.addColorStop(1, cl('#08081a', '#d8d0c0'));
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);
}

export function drawPlate() {
  const c = getC();
  const pr = 310;
  c.beginPath();
  c.arc(CX, CY, pr, 0, Math.PI * 2);
  const g = c.createRadialGradient(CX, CY, 0, CX, CY, pr);
  g.addColorStop(0, cl('#2a2a42', '#e0d8c8'));
  g.addColorStop(0.7, cl('#1e1e36', '#d8d0c0'));
  g.addColorStop(1, cl('#16162e', '#ccc0b0'));
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = cl('rgba(212,175,55,0.2)', 'rgba(139,105,20,0.15)');
  c.lineWidth = 2;
  c.stroke();
}

export function drawSecondScale() {
  const c = getC();
  const r1 = 285, r2 = 275, r3 = 265;
  c.save();
  c.translate(CX, CY);
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
    const tickLen = i % 5 === 0 ? r3 : r2;
    c.beginPath();
    c.moveTo(Math.cos(a) * tickLen, Math.sin(a) * tickLen);
    c.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
    c.strokeStyle = i % 15 === 0 ? cl('rgba(212,175,55,0.3)', 'rgba(139,105,20,0.3)')
      : cl('rgba(180,180,200,0.15)', 'rgba(100,90,70,0.12)');
    c.lineWidth = i % 5 === 0 ? 1.5 : 0.5;
    c.stroke();
  }
  for (let i = 0; i < 4; i++) {
    const a = (i * 15 / 60) * Math.PI * 2 - Math.PI / 2;
    const nr = r1 + 14;
    c.fillStyle = cl('rgba(200,200,220,0.3)', 'rgba(80,70,50,0.3)');
    c.font = '8px ' + getComputedStyle(document.body).fontFamily;
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(String(i * 15), Math.cos(a) * nr, Math.sin(a) * nr);
  }
  c.restore();
}

export function drawScrews() {
  const c = getC();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r = 295;
    const x = CX + Math.cos(a) * r, y = CY + Math.sin(a) * r;
    c.beginPath();
    c.arc(x, y, 3.5, 0, Math.PI * 2);
    const g = c.createRadialGradient(x - 1, y - 1, 0, x, y, 3.5);
    g.addColorStop(0, cl('#c0c8d0', '#a09880'));
    g.addColorStop(0.5, cl('#8090a0', '#706050'));
    g.addColorStop(1, cl('#405060', '#504030'));
    c.fillStyle = g;
    c.fill();
    c.beginPath();
    c.moveTo(x - 2.5, y); c.lineTo(x + 2.5, y);
    c.moveTo(x, y - 2.5); c.lineTo(x, y + 2.5);
    c.strokeStyle = cl('rgba(50,60,80,0.4)', 'rgba(80,70,50,0.4)');
    c.lineWidth = 0.5;
    c.stroke();
  }
}

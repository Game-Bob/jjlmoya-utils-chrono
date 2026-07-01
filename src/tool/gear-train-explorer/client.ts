const canvas = document.getElementById('gear-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const root = canvas.closest('.gear-train-card') || document;

import { MOVEMENTS } from './movements';
import type { MovementDef } from './movements';
import { setCtx, setMov as setMovement, setHovered } from './state';
import { drawScene } from './scene';

setCtx(ctx);

const REF_W = 900;
const REF_H = 520;

let currentMov: MovementDef = MOVEMENTS['2824'];
let speedMult = 1;
let paused = false;
let angles: number[] = currentMov.gears.map(() => 0);
let palletPhase = 0;
let balancePhase = 0;
let highlightedGear: number | null = null;
let hoveredGear: number | null = null;

function resizeCanvas() {
  const parent = canvas.parentElement!;
  const displayW = parent.clientWidth;
  const displayH = displayW * (REF_H / REF_W);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = displayW + 'px';
  canvas.style.height = displayH + 'px';
  canvas.width = displayW * dpr;
  canvas.height = displayH * dpr;
  ctx.setTransform(displayW / REF_W * dpr, 0, 0, displayH / REF_H * dpr, 0, 0);
}

function updateStats() {
  const g = currentMov.gears;
  const setText = (id: string, v: string) => { const el = root.querySelector('#rpm-' + id); if (el) el.textContent = v; };
  setText('barrel', (g[0].rpm * 60).toFixed(2) + '/h');
  setText('center', (g[1].rpm * 60).toFixed(1) + '/h');
  setText('third', (g[2].rpm * 60).toFixed(1) + '/h');
  setText('fourth', g[3].rpm.toFixed(1) + ' rpm');
  setText('escape', g[4].rpm.toFixed(0) + ' rpm');
  const bphEl = root.querySelector('#bph-pallet');
  if (bphEl) bphEl.textContent = currentMov.pallet.bph.toString();
  const hzEl = root.querySelector('#hz-balance');
  if (hzEl) hzEl.textContent = currentMov.balance.hz.toString();
  const vphEl = root.querySelector('#vph-balance');
  if (vphEl) vphEl.textContent = currentMov.balance.vph.toString();
}

function render() {
  setMovement(currentMov);
  setHovered(hoveredGear);
  drawScene(currentMov, { angles, palletPhase, balancePhase, highlight: highlightedGear, hover: hoveredGear });
  const step = highlightedGear !== null ? highlightedGear : -1;
  root.querySelectorAll('.flow-bar .step').forEach((el, idx) => {
    el.classList.toggle('active', idx <= step);
  });
}

function tick() {
  if (paused) return;
  const dt = 1;
  const gears = currentMov.gears;
  for (let i = 0; i < gears.length; i++) {
    angles[i] += gears[i].visualSpeed * speedMult * dt * 0.08;
  }
  const bf = currentMov.pallet.bph / 3600;
  palletPhase += bf * speedMult * dt * 0.06;
  balancePhase += currentMov.balance.hz * speedMult * dt * 0.2;
}

function animate() {
  tick();
  render();
  requestAnimationFrame(animate);
}

function switchMovement(id: string) {
  currentMov = MOVEMENTS[id];
  angles = currentMov.gears.map(() => 0);
  palletPhase = 0;
  balancePhase = 0;
  highlightedGear = null;
  updateStats();
  root.querySelectorAll('[data-mov]').forEach((b) => {
    b.classList.toggle('active', (b as HTMLElement).dataset.mov === id);
  });
}

function setSpeed(mult: number) {
  speedMult = mult;
  paused = mult === 0;
  root.querySelectorAll('[data-spd]').forEach((b) => {
    const spd = parseFloat((b as HTMLElement).dataset.spd || '1');
    b.classList.toggle('active', spd === mult);
  });
}

function hitTest(mx: number, my: number): number | null {
  for (let i = 0; i < currentMov.gears.length; i++) {
    if (Math.sqrt((mx - currentMov.gears[i].x) ** 2 + (my - currentMov.gears[i].y) ** 2) < currentMov.gears[i].r + 10) return i;
  }
  if (Math.sqrt((mx - currentMov.pallet.x) ** 2 + (my - currentMov.pallet.y) ** 2) < 20) return 5;
  if (Math.sqrt((mx - currentMov.balance.x) ** 2 + (my - currentMov.balance.y) ** 2) < currentMov.balance.r + 8) return 6;
  return null;
}

function onCanvasMove(e: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const mx = (e.clientX - rect.left) / rect.width * REF_W;
  const my = (e.clientY - rect.top) / rect.height * REF_H;
  const found = hitTest(mx, my);
  if (found !== hoveredGear) highlightGear(found);
  canvas.style.cursor = found !== null ? 'pointer' : 'default';
}

function highlightGear(idx: number | null) {
  hoveredGear = idx;
  highlightedGear = idx;
  root.querySelectorAll('.data-card').forEach((c) => c.classList.remove('highlighted'));
  if (idx !== null && idx < 7) {
    root.querySelectorAll('.data-card')[idx]?.classList.add('highlighted');
  }
}

function initControls() {
  root.querySelectorAll('[data-mov]').forEach((b) => {
    b.addEventListener('click', () => switchMovement((b as HTMLElement).dataset.mov || '2824'));
  });
  root.querySelectorAll('[data-spd]').forEach((b) => {
    b.addEventListener('click', () => setSpeed(parseFloat((b as HTMLElement).dataset.spd || '1')));
  });
  root.querySelectorAll('.data-card').forEach((card, idx) => {
    card.addEventListener('mouseenter', () => highlightGear(idx));
    card.addEventListener('mouseleave', () => highlightGear(null));
  });
  canvas.addEventListener('mousemove', onCanvasMove);
  canvas.addEventListener('mouseleave', () => highlightGear(null));
}

new ResizeObserver(resizeCanvas).observe(canvas.parentElement!);
resizeCanvas();
updateStats();
initControls();
animate();

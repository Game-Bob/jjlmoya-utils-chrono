const canvas = document.getElementById('tourb-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

import { setCtx, detT, W, H, CX, CY } from './state';
import { drawBg, drawPlate, drawSecondScale, drawScrews } from './renderer/base';
import { drawCage } from './renderer/cage';
import { drawBalance, drawHairspring, drawPallet, drawEscapeWheel } from './renderer/esc';
import { calc } from './tourbillon';

setCtx(ctx);

const REF = 700;

let cageAngle = 0;
let balancePhase = 0;
let palletPhase = 0;
let escAngle = 0;
let flying = false;
let gyro = false;
let zoom = false;
let curBeat = 28800;
let speedM = 1;
let paused = false;
let highlight: string | null = null;

function resize() {
  const p = canvas.parentElement!;
  const dw = p.clientWidth;
  const dh = dw;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.style.width = dw + 'px';
  canvas.style.height = dh + 'px';
  canvas.width = dw * dpr;
  canvas.height = dh * dpr;
  ctx.setTransform(dw / REF * dpr, 0, 0, dh / REF * dpr, 0, 0);
}

function upUI() {
  const b = calc(curBeat);
  const f = (id: string, v: string) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  f('cage-info', Math.round(((cageAngle * 180 / Math.PI) % 360 + 360) % 360) + '\u00B0');
  f('balance-info', b.hz + ' Hz');
  f('escape-info', b.rpm + ' rpm');
  f('pallet-info', b.bph + ' bph');
  f('spring-info', b.hz + ' Hz');
}

function tick() {
  if (paused) return;
  const b = calc(curBeat);
  const dt = 1 * speedM;
  cageAngle += 0.0015 * dt;
  const balanceSpeed = 0.04 + b.hz * 0.03;
  balancePhase += balanceSpeed * dt;
  palletPhase += b.hz * 0.35 * dt;
  escAngle += b.rpm * 0.0005 * dt;
}

function render() {
  detT();
  const b = calc(curBeat);
  const cr = zoom ? 60 : 140;

  ctx.save();
  ctx.clearRect(0, 0, W, H);
  drawBg();
  drawPlate();
  drawSecondScale();
  drawScrews();

  if (zoom) {
    const zf = 2.5;
    ctx.translate(CX, CY);
    ctx.scale(zf, zf);
    ctx.translate(-CX, -CY);
  }

  drawCage(cageAngle, flying, gyro, zoom);
  ctx.save();
  ctx.beginPath();
  ctx.arc(CX, CY, cr - 5, 0, Math.PI * 2);
  ctx.clip();
  drawHairspring(balancePhase, b.hz, highlight === 'hairspring');
  drawBalance(balancePhase, highlight === 'balance');
  drawPallet(palletPhase, highlight === 'pallet');
  drawEscapeWheel(escAngle, highlight === 'escape');
  ctx.restore();
  ctx.restore();
  upUI();
}

function loop() { tick(); render(); requestAnimationFrame(loop); }

function switchOpt(opt: string, val: string) {
  document.querySelectorAll(`[data-opt="${opt}"]`).forEach((b) => {
    b.classList.toggle('active', (b as HTMLElement).dataset.val === val);
  });
  if (opt === 'type') { flying = val === 'flying'; gyro = val === 'gyro'; }
  if (opt === 'speed') { speedM = parseFloat(val); paused = val === '0'; }
  if (opt === 'beat') curBeat = parseInt(val);
  if (opt === 'view') zoom = val === 'zoom';
}

function init() {
  document.querySelectorAll('[data-opt]').forEach((b) => {
    b.addEventListener('click', () => switchOpt(
      (b as HTMLElement).dataset.opt!,
      (b as HTMLElement).dataset.val!
    ));
  });
  document.querySelectorAll('.tourb-cell').forEach((cell) => {
    const target = cell.getAttribute('data-highlight');
    if (!target) return;
    cell.addEventListener('mouseenter', () => { highlight = target; });
    cell.addEventListener('mouseleave', () => { highlight = null; });
  });
}

new ResizeObserver(resize).observe(canvas.parentElement!);
resize();
init();
loop();

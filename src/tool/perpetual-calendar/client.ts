const canvas = document.getElementById('calendar-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

import { setCtx, detectTheme } from './state';
import { drawScene } from './dial';
import { isLeapYear, daysInMonth, moonPhase } from './calendar';

setCtx(ctx);

const REF_W = 600;
const REF_H = 600;

let curY = new Date().getFullYear();
let curM = new Date().getMonth();
let curD = new Date().getDate();
let smoothD = curD;
let autoPlaying = false;

function resizeCanvas() {
  const parent = canvas.parentElement!;
  const dw = parent.clientWidth;
  const dh = dw * (REF_H / REF_W);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = dw + 'px';
  canvas.style.height = dh + 'px';
  canvas.width = dw * dpr;
  canvas.height = dh * dpr;
  ctx.setTransform(dw / REF_W * dpr, 0, 0, dh / REF_H * dpr, 0, 0);
}

function updateUI() {
  const setText = (id: string, v: string) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  const d = Math.round(smoothD);
  const dt = new Date(curY, curM, d);
  const loc = window.location.pathname.match(/^\/([a-z]{2})/)?.[1] || 'en';
  setText('cal-date', d.toString());
  setText('cal-weekday', new Intl.DateTimeFormat(loc, { weekday: 'long' }).format(dt));
  setText('cal-month', new Intl.DateTimeFormat(loc, { month: 'long' }).format(dt));
  setText('cal-year', curY.toString());
  setText('cal-leap', isLeapYear(curY) ? 'Yes' : 'No');
  const mp = moonPhase(curY, curM, d, loc);
  setText('cal-moon', mp.phase);
  setText('cal-weekday-header', new Intl.DateTimeFormat(loc, { weekday: 'long' }).format(dt));
  setText('cal-date-full', new Intl.DateTimeFormat(loc, { month: 'long', day: 'numeric', year: 'numeric' }).format(dt));
}

function render() {
  detectTheme();
  drawScene(curY, curM, curD, smoothD);
  updateUI();
}

function tick() {
  if (autoPlaying) {
    curD++;
    if (curD > daysInMonth(curY, curM)) { curD = 1; curM++; }
    if (curM > 11) { curM = 0; curY++; }
    smoothD = curD;
  }
  render();
  animationId = requestAnimationFrame(tick);
}

function advance(fn: () => void) {
  if (autoPlaying) { autoPlaying = false; document.querySelector('[data-action="play"]')!.textContent = '\u25B6'; }
  fn();
  smoothD = curD;
  render();
}

function initControls() {
  document.querySelector('[data-action="day-next"]')?.addEventListener('click', () => advance(() => {
    curD++; if (curD > daysInMonth(curY, curM)) { curD = 1; curM++; if (curM > 11) { curM = 0; curY++; } }
  }));
  document.querySelector('[data-action="day-prev"]')?.addEventListener('click', () => advance(() => {
    curD--; if (curD < 1) { curM--; if (curM < 0) { curM = 11; curY--; } curD = daysInMonth(curY, curM); }
  }));
  document.querySelector('[data-action="month-next"]')?.addEventListener('click', () => advance(() => {
    curD = 1; curM++; if (curM > 11) { curM = 0; curY++; }
  }));
  document.querySelector('[data-action="year-next"]')?.addEventListener('click', () => advance(() => {
    const d = new Date(curY + 1, curM, curD);
    curY = d.getFullYear(); curM = d.getMonth(); curD = d.getDate();
  }));
  document.querySelector('[data-action="play"]')?.addEventListener('click', (e) => {
    autoPlaying = !autoPlaying;
    (e.currentTarget as HTMLElement).textContent = autoPlaying ? '\u23F8' : '\u25B6';
  });
  document.querySelector('[data-action="reset"]')?.addEventListener('click', () => advance(() => {
    const n = new Date();
    curY = n.getFullYear(); curM = n.getMonth(); curD = n.getDate();
  }));
}

new ResizeObserver(resizeCanvas).observe(canvas.parentElement!);
resizeCanvas();
initControls();
tick();

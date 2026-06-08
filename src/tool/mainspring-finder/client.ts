import { calculateMainspring, fromMm } from './helpers';

const el = document.querySelector('.msf') as HTMLElement;
const UI = JSON.parse(el.dataset.ui || '{}');

const barrelIn = document.getElementById('msf-barrel') as HTMLInputElement;
const arborIn = document.getElementById('msf-arbor') as HTMLInputElement;
const heightIn = document.getElementById('msf-height') as HTMLInputElement;
const turnsIn = document.getElementById('msf-turns') as HTMLInputElement;
const unitBtns = document.querySelectorAll('.msf-u-btn') as NodeListOf<HTMLElement>;
const result = document.getElementById('msf-result') as HTMLElement;
const thickV = document.getElementById('msf-thick') as HTMLElement;
const heightV = document.getElementById('msf-h') as HTMLElement;
const lenV = document.getElementById('msf-len') as HTMLElement;
const strengthB = document.getElementById('msf-strength') as HTMLElement;
const commV = document.getElementById('msf-comm') as HTMLElement;

const sLabels = [UI.strengthWeak || 'Light', UI.strengthMedium || 'Medium', UI.strengthStrong || 'Strong'];
const sColors = ['#10b981', '#f59e0b', '#ef4444'];
const KEY = 'jjlmoya_chrono_msf';
let cur: 'mm' | 'in' = 'mm';

interface S { b: string; a: string; h: string; t: string; u: string }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ b: barrelIn.value, a: arborIn.value, h: heightIn.value, t: turnsIn.value, u: cur } as S)); } catch {}
}

function load() {
  try {
    const r = localStorage.getItem(KEY); if (!r) return;
    const s: S = JSON.parse(r);
    if (s.b) barrelIn.value = s.b; if (s.a) arborIn.value = s.a; if (s.h) heightIn.value = s.h; if (s.t) turnsIn.value = s.t;
    if (s.u === 'in' || s.u === 'mm') cur = s.u;
  } catch {}
}

function convertVal(v: number, from: 'mm' | 'in', to: 'mm' | 'in'): number {
  if (from === to) return v;
  return to === 'in' ? v / 25.4 : v * 25.4;
}

function setUnit(u: 'mm' | 'in') {
  if (u === cur) return;
  const b = parseFloat(barrelIn.value) || 0;
  const a = parseFloat(arborIn.value) || 0;
  const h = parseFloat(heightIn.value) || 0;
  const decimals = u === 'in' ? 3 : 1;
  barrelIn.value = convertVal(b, cur, u).toFixed(u === 'in' ? 2 : 1);
  arborIn.value = convertVal(a, cur, u).toFixed(decimals);
  heightIn.value = convertVal(h, cur, u).toFixed(u === 'in' ? 3 : 2);
  barrelIn.step = u === 'in' ? '0.1' : '0.1';
  arborIn.step = u === 'in' ? '0.01' : '0.1';
  heightIn.step = u === 'in' ? '0.005' : '0.05';
  cur = u;
  unitBtns.forEach(b => b.classList.toggle('msf-u-on', b.dataset.unit === u));
  calc();
}

function calc() {
  const barrelId = parseFloat(barrelIn.value) || 0;
  const arborD = parseFloat(arborIn.value) || 0;
  const height = parseFloat(heightIn.value) || 0;
  const turns = parseInt(turnsIn.value, 10) || 6;
  const r = calculateMainspring({ barrelId, barrelH: height, arborD, turns, unit: cur });
  if (!r) { result.style.display = 'none'; return; }
  const ul = cur === 'mm' ? 'mm' : 'in';
  thickV.textContent = `${fromMm(r.thickness, cur, cur === 'in' ? 4 : 3)} ${ul}`;
  heightV.textContent = `${fromMm(r.height, cur, 1)} ${ul}`;
  lenV.textContent = `${fromMm(r.length, cur, 1)} ${ul}`;
  strengthB.textContent = sLabels[r.strengthIndex];
  strengthB.style.background = sColors[r.strengthIndex];
  commV.textContent = `${fromMm(r.length, cur, 1)} x ${fromMm(r.height, cur, 1)} x ${fromMm(r.thickness, cur, cur === 'in' ? 4 : 3)} ${ul}`;
  result.style.display = 'flex';
  save();
}

unitBtns.forEach(b => b.addEventListener('click', () => setUnit(b.dataset.unit as 'mm' | 'in')));
barrelIn.addEventListener('input', calc);
arborIn.addEventListener('input', calc);
heightIn.addEventListener('input', calc);
turnsIn.addEventListener('input', calc);
load();
setUnit(cur);
calc();

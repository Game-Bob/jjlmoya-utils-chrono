const presetSelect = document.getElementById('preset-select') as HTMLSelectElement;
const timeInput = document.getElementById('time-input') as HTMLInputElement;
const customSection = document.getElementById('custom-section') as HTMLElement;
const speedValue = document.getElementById('speed-value') as HTMLElement;
const bezelValue = document.getElementById('bezel-value') as HTMLElement;
const handGroup = document.getElementById('tach-hand-group') as SVGGElement;
const ticksG = document.getElementById('tach-ticks') as SVGElement;
const highlightG = document.getElementById('tach-highlight') as SVGElement;
const sweepEl = document.getElementById('tach-sweep') as SVGPathElement;
const timeLabel = document.getElementById('tach-time-label') as SVGTextElement;
const speedLabel = document.getElementById('tach-speed-label') as SVGTextElement;
const visualEl = document.getElementById('tach-visual') as HTMLElement;

const CX = 110;
const CY = 110;
const ARC_R = 84;
const TICK_R1 = 79;
const TICK_R2 = 85;
const T_MIN = 7.2;
const T_MAX = 60;
const A_MIN = 12;

interface Preset { label: string; seconds: number; }

const presets: Record<string, Preset> = {
  car: { label: 'Car (1 km)', seconds: 36 },
  bike: { label: 'Cycling (1 km)', seconds: 90 },
  run: { label: 'Running (1 km)', seconds: 240 },
  walk: { label: 'Walking (1 km)', seconds: 480 },
  f1: { label: 'F1 Pit Stop', seconds: 2.5 },
  plane: { label: 'Private Jet (1 km)', seconds: 12 },
  train: { label: 'Bullet Train (1 km)', seconds: 10 },
};

const labelSpeeds = [60, 70, 80, 90, 100, 120, 150, 200, 300, 400, 500];
const majorSpeeds = [65, 75, 85, 95, 130, 140, 160, 170, 220, 240, 260, 280, 350, 450];

function speedToTime(s: number): number {
  return 3600 / s;
}

function timeToAngle(t: number): number {
  const ratio = Math.log(t / T_MIN) / Math.log(T_MAX / T_MIN);
  return 12 + ratio * 228;
}

function pos(r: number, a: number): { x: number; y: number } {
  const rad = a * Math.PI / 180;
  return { x: CX + r * Math.sin(rad), y: CY - r * Math.cos(rad) };
}

function addTick(spd: number, cls: string, label?: string) {
  const t = speedToTime(spd);
  if (t < T_MIN || t > T_MAX) return;
  const a = timeToAngle(t);
  const o = pos(TICK_R2, a);
  const i = pos(TICK_R1, a);
  const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  ln.setAttribute('x1', String(i.x));
  ln.setAttribute('y1', String(i.y));
  ln.setAttribute('x2', String(o.x));
  ln.setAttribute('y2', String(o.y));
  ln.classList.add(cls);
  ticksG.appendChild(ln);
  if (label) {
    const lp = pos(93, a);
    const tx = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tx.setAttribute('x', String(lp.x));
    tx.setAttribute('y', String(lp.y));
    tx.setAttribute('text-anchor', 'middle');
    tx.setAttribute('dominant-baseline', 'central');
    tx.classList.add('tick-label');
    tx.textContent = label;
    ticksG.appendChild(tx);
  }
}

function stepSize(s: number): number {
  if (s < 100) return 2;
  if (s < 200) return 5;
  if (s < 300) return 10;
  return 20;
}

function buildBezel() {
  for (let s = 60; s <= 500; s += stepSize(s)) {
    if (labelSpeeds.includes(s) || majorSpeeds.includes(s)) continue;
    addTick(s, 'tick-minor');
  }
  majorSpeeds.forEach((s) => addTick(s, 'tick-major'));
  labelSpeeds.forEach((s) => addTick(s, 'tick-major', String(s)));
}

function getTime(): number {
  if (presetSelect.value === 'custom') {
    return parseFloat(timeInput.value) || 36;
  }
  return presets[presetSelect.value]?.seconds || 36;
}

function arcPath(r: number, a: number): string {
  const s = pos(r, 12);
  const e = pos(r, a);
  const large = a > 192 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

function updateHighlight(angle: number) {
  highlightG.innerHTML = '';
  const p = pos(ARC_R, angle);
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  g.setAttribute('cx', String(p.x));
  g.setAttribute('cy', String(p.y));
  g.setAttribute('r', '6');
  g.classList.add('tach-glow');
  highlightG.appendChild(g);
  const rg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  rg.setAttribute('cx', String(p.x));
  rg.setAttribute('cy', String(p.y));
  rg.setAttribute('r', '10');
  rg.classList.add('tach-glow-ring');
  highlightG.appendChild(rg);
}

function calc() {
  const time = getTime();
  const speed = 3600 / time;
  const clampedTime = Math.max(T_MIN, Math.min(T_MAX, time));
  const angle = timeToAngle(clampedTime);
  const display = speed >= 100 ? speed.toFixed(0) : speed.toFixed(1);

  speedValue.textContent = display;
  bezelValue.textContent = display;
  timeLabel.textContent = time < 60 ? `${time.toFixed(1)}s` : `${Math.floor(time / 60)}m ${Math.round(time % 60)}s`;
  speedLabel.textContent = display;

  handGroup.style.transform = `rotate(${angle}deg)`;
  sweepEl.setAttribute('d', arcPath(ARC_R, angle));
  updateHighlight(angle);

  visualEl.classList.remove('speed-slow', 'speed-mid', 'speed-fast');
  if (speed >= 200) visualEl.classList.add('speed-fast');
  else if (speed >= 100) visualEl.classList.add('speed-mid');
  else visualEl.classList.add('speed-slow');
}

function toggleCustom() {
  const show = presetSelect.value === 'custom';
  customSection.style.display = show ? 'flex' : 'none';
  if (!show) {
    timeInput.value = String(presets[presetSelect.value]?.seconds || 36);
  }
  calc();
}

presetSelect.addEventListener('change', () => {
  handGroup.style.transition = 'none';
  handGroup.style.transform = `rotate(${A_MIN}deg)`;
  requestAnimationFrame(() => {
    handGroup.style.transition = '';
    toggleCustom();
  });
});

timeInput.addEventListener('input', calc);

document.querySelectorAll('.stepper-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    presetSelect.value = 'custom';
    toggleCustom();
    const step = parseFloat(btn.getAttribute('data-step') || '1');
    const dir = btn.textContent?.includes('+') ? 1 : -1;
    const val = parseFloat(timeInput.value) || 36;
    timeInput.value = String(Math.max(1, Math.min(600, val + dir * step)));
    calc();
  });
});

buildBezel();
toggleCustom();

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

const caseInput = document.getElementById('case-input') as HTMLInputElement;
const lugInput = document.getElementById('lug-input') as HTMLInputElement;
const buckleInput = document.getElementById('buckle-input') as HTMLInputElement;
const taperChips = document.querySelectorAll('.taper-chip') as NodeListOf<HTMLButtonElement>;
const customSection = document.getElementById('custom-section') as HTMLElement;
const strapShape = document.getElementById('strap-shape') as SVGPolygonElement;
const labelLug = document.getElementById('label-lug') as SVGTextElement;
const labelBuckle = document.getElementById('label-buckle') as SVGTextElement;
const resultLug = document.getElementById('result-lug') as HTMLElement;
const resultBuckle = document.getElementById('result-buckle') as HTMLElement;
const resultTaper = document.getElementById('result-taper') as HTMLElement;
const resultRatio = document.getElementById('result-ratio') as HTMLElement;
const scoreBadge = document.getElementById('score-badge') as HTMLElement;

const mm = ui.mmUnit || 'mm';
const arr = ui.arrow || '\u2192';

let currentTaper = 'straight';

function getTaperBuckle(lug: number, taper: string): number {
  switch (taper) {
    case 'straight': return lug;
    case 'classic': return Math.max(lug - 4, 6);
    case 'aggressive': return Math.max(lug - 6, 6);
    case 'custom': return parseInt(buckleInput.value, 10) || lug;
    default: return lug;
  }
}

function isBalanced(r: number, c: number): boolean {
  return r >= 0.78 && r <= 0.85 && c >= 1.8 && c <= 2.2;
}

function unbalanced(r: number): boolean {
  return r > 1 || r < 0.65;
}

function goodRatio(c: number): boolean {
  return c >= 1.5 && c <= 2.5;
}

function getScore(lug: number, buckle: number, caseD: number): { label: string; cls: string } {
  const r = buckle / lug;
  const c = caseD / lug;
  if (unbalanced(r)) return { label: ui.proportionUnbalanced || 'Unbalanced', cls: 'score-unbalanced' };
  if (isBalanced(r, c)) return { label: ui.proportionExcellent || 'Excellent', cls: 'score-excellent' };
  if (goodRatio(c)) return { label: ui.proportionGood || 'Good', cls: 'score-good' };
  return { label: ui.proportionFair || 'Fair', cls: 'score-fair' };
}

function updateChips(lug: number) {
  taperChips.forEach((chip) => {
    const sub = chip.querySelector('.taper-chip-sub') as HTMLElement;
    if (!sub) return;
    const t = chip.dataset.taper;
    const classicBuckle = Math.max(lug - 4, 6);
    const aggressiveBuckle = Math.max(lug - 6, 6);
    if (t === 'straight') sub.textContent = lug + ' ' + arr + ' ' + lug + ' ' + mm;
    else if (t === 'classic') sub.textContent = lug + ' ' + arr + ' ' + classicBuckle + ' ' + mm;
    else if (t === 'aggressive') sub.textContent = lug + ' ' + arr + ' ' + aggressiveBuckle + ' ' + mm;
    else if (t === 'custom') sub.textContent = lug + ' ' + arr + ' ? ' + mm;
  });
}

function updateSvg(lug: number, buckle: number) {
  const topW = lug * 3.5;
  const botW = buckle * 3.5;
  const cx = 100;
  const top = 5;
  const bot = 110;
  const halfTop = topW / 2;
  const halfBot = botW / 2;
  strapShape.setAttribute('points', `${cx - halfTop},${top} ${cx + halfTop},${top} ${cx + halfBot},${bot} ${cx - halfBot},${bot}`);
  labelLug.textContent = lug + ' ' + mm;
  labelBuckle.textContent = buckle + ' ' + mm;
}

function update() {
  const lug = parseInt(lugInput.value, 10) || 20;
  const caseD = parseInt(caseInput.value, 10) || 40;
  const buckle = getTaperBuckle(lug, currentTaper);
  const taper = lug - buckle;
  const ratio = lug > 0 ? (buckle / lug) : 0;
  const score = getScore(lug, buckle, caseD);

  resultLug.textContent = String(lug);
  resultBuckle.textContent = String(buckle);
  resultTaper.textContent = String(taper);
  resultRatio.textContent = ratio.toFixed(2);
  scoreBadge.textContent = score.label;
  scoreBadge.className = 'score-badge ' + score.cls;

  updateChips(lug);
  updateSvg(lug, buckle);
}

function setTaper(taper: string) {
  currentTaper = taper;
  const show = taper === 'custom';
  customSection.style.display = show ? 'flex' : 'none';
  taperChips.forEach((c) => c.classList.toggle('active', c.dataset.taper === taper));
  update();
}

taperChips.forEach((chip) => {
  chip.addEventListener('click', () => setTaper(chip.dataset.taper || 'straight'));
});

document.querySelectorAll('.stepper-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.getAttribute('data-target') || '') as HTMLInputElement;
    const step = parseInt(btn.getAttribute('data-step') || '1', 10);
    const dir = btn.textContent?.includes('+') ? 1 : -1;
    const val = parseInt(target.value, 10) || 0;
    const min = parseInt(target.min, 10) || 0;
    const max = parseInt(target.max, 10) || 100;
    target.value = String(Math.max(min, Math.min(max, val + dir * Math.abs(step))));
    update();
  });
});

[caseInput, lugInput, buckleInput].forEach((el) => {
  el.addEventListener('input', update);
});

setTaper('classic');

import { drawWatch, getFitColor, getFitRatio } from './drawing';

interface WatchProfile {
  id: string;
  name: string;
  diameter: number;
  lugToLug: number;
  thickness: number;
}

const STORAGE_KEY = 'jjlmoya_chrono_watch_sizes';
const UNIT_KEY = 'jjlmoya_chrono_unit';
const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

const canvas = document.getElementById('size-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const watchList = document.getElementById('watch-list') as HTMLElement;
const fitInfo = document.getElementById('fit-info') as HTMLElement;

const inputName = document.getElementById('watch-name-input') as HTMLInputElement;
const inputDiameter = document.getElementById('input-diameter') as HTMLInputElement;
const inputL2L = document.getElementById('input-l2l') as HTMLInputElement;
const inputThickness = document.getElementById('input-thickness') as HTMLInputElement;
const inputWrist = document.getElementById('input-wrist') as HTMLInputElement;
const addBtn = document.getElementById('add-watch-btn') as HTMLElement;
const btnUnitCm = document.getElementById('btn-unit-cm') as HTMLButtonElement;
const btnUnitIn = document.getElementById('btn-unit-in') as HTMLButtonElement;
const unitDiameter = document.getElementById('unit-diameter') as HTMLElement;
const unitL2l = document.getElementById('unit-l2l') as HTMLElement;
const unitThickness = document.getElementById('unit-thickness') as HTMLElement;

let watches: WatchProfile[] = [];
let activeId = '';
let unit: 'cm' | 'in' = 'cm';

function loadUnit(): 'cm' | 'in' {
  const stored = localStorage.getItem(UNIT_KEY);
  return stored === 'in' ? 'in' : 'cm';
}

function saveUnit(): void {
  localStorage.setItem(UNIT_KEY, unit);
}

function mmToDisplay(mm: number): string {
  return unit === 'in' ? (mm / 25.4).toFixed(2) : Math.round(mm * 10) / 10 + '';
}

function mmUnit(): string {
  return unit === 'in' ? 'in' : 'mm';
}

function getWristCm(): number {
  const val = parseFloat(inputWrist.value);
  return unit === 'in' ? val * 2.54 : val;
}

function loadWatches(): void {
  const data = localStorage.getItem(STORAGE_KEY);
  watches = data ? JSON.parse(data) : [];
}

function saveWatches(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(watches));
}

function getFitLabel(l2l: number, wristCm: number): string {
  const ratio = getFitRatio(l2l, wristCm);
  if (ratio < 0.5) return ui.excellentFit || 'Excellent';
  if (ratio < 0.58) return ui.goodFit || 'Good';
  if (ratio < 0.65) return ui.borderlineFit || 'Borderline';
  return ui.largeFit || 'Too Large';
}

function getFitDescription(l2l: number, wristCm: number): string {
  const ratio = getFitRatio(l2l, wristCm);
  if (ratio < 0.5) return ui.excellentDesc || 'Proportional-lug-to-lug stays well within your wrist.';
  if (ratio < 0.58) return ui.goodDesc || 'Good fit-overhangs slightly but still comfortable.';
  if (ratio < 0.65) return ui.borderlineDesc || 'Borderline-lugs approach the edge of your wrist.';
  return ui.largeDesc || 'Too large-lugs likely overhang your wrist.';
}

function getFitBadgeClass(l2l: number, wristCm: number): string {
  const ratio = getFitRatio(l2l, wristCm);
  if (ratio < 0.5) return 'excellent';
  if (ratio < 0.58) return 'good';
  if (ratio < 0.65) return 'borderline';
  return 'large';
}

function updateInputUnits(): void {
  const u = mmUnit();
  unitDiameter.textContent = u;
  unitL2l.textContent = u;
  unitThickness.textContent = u;
}

function updateUnitButtons(): void {
  btnUnitCm.classList.toggle('active', unit === 'cm');
  btnUnitIn.classList.toggle('active', unit === 'in');
}

function parseMm(input: HTMLInputElement, d: number): number {
  const val = parseFloat(input.value);
  return (unit === 'in' ? val * 25.4 : val) || d;
}

function onRemoveClick(w: WatchProfile): void {
  watches = watches.filter((x) => x.id !== w.id);
  saveWatches();
  if (activeId === w.id) {
    activeId = watches.length > 0 ? watches[watches.length - 1].id : '';
  }
  renderWatchList();
  selectWatch(activeId);
}

function createRemoveButton(w: WatchProfile): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'btn-remove';
  btn.title = ui.remove || 'Remove';
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    onRemoveClick(w);
  });
  return btn;
}

function createWatchListItem(w: WatchProfile): HTMLDivElement {
  const wristCm = getWristCm();
  const item = document.createElement('div');
  item.className = `watch-list-item ${w.id === activeId ? 'active' : ''}`;
  item.dataset.id = w.id;

  const dot = document.createElement('span');
  dot.className = 'watch-dot';
  dot.style.background = getFitColor(w.lugToLug, wristCm);

  const nameSpan = document.createElement('span');
  nameSpan.className = 'watch-name-label';
  nameSpan.textContent = w.name;

  const dimsSpan = document.createElement('span');
  dimsSpan.className = 'watch-dims-label';
  dimsSpan.textContent = `${mmToDisplay(w.diameter)}\u00d7${mmToDisplay(w.lugToLug)}${mmUnit()}`;

  const badge = document.createElement('span');
  const badgeClass = getFitBadgeClass(w.lugToLug, wristCm);
  badge.className = `watch-fit-badge fit-${badgeClass}`;
  badge.textContent = getFitLabel(w.lugToLug, wristCm);

  item.append(dot, nameSpan, dimsSpan, badge, createRemoveButton(w));
  item.addEventListener('click', () => { selectWatch(w.id); renderWatchList(); });
  return item;
}

function renderWatchList(): void {
  watchList.innerHTML = '';
  if (watches.length === 0) {
    watchList.innerHTML = `<div class="empty-state">${ui.addWatch || 'Add a watch'} \u2191</div>`;
    return;
  }
  watches.forEach((w) => {
    watchList.appendChild(createWatchListItem(w));
  });
}

function updateFitInfo(w: WatchProfile, wristCm: number): void {
  const color = getFitColor(w.lugToLug, wristCm);
  fitInfo.innerHTML = `<strong>${getFitLabel(w.lugToLug, wristCm)}</strong> \u2014 ${getFitDescription(w.lugToLug, wristCm)}`;
  fitInfo.style.borderLeft = `3px solid ${color}`;
}

function selectWatch(id: string): void {
  activeId = id;
  const w = watches.find((x) => x.id === id);
  if (w) {
    inputDiameter.value = mmToDisplay(w.diameter);
    inputL2L.value = mmToDisplay(w.lugToLug);
    inputThickness.value = mmToDisplay(w.thickness);
    const wristCm = getWristCm();
    drawWatch({ ctx, canvas, ui, diameter: w.diameter, l2l: w.lugToLug, thickness: w.thickness, wristCm, unit });
    updateFitInfo(w, wristCm);
  } else {
    inputDiameter.value = mmToDisplay(40);
    inputL2L.value = mmToDisplay(48);
    inputThickness.value = mmToDisplay(12);
    drawWatch({ ctx, canvas, ui, diameter: 40, l2l: 48, thickness: 12, wristCm: getWristCm(), unit });
    fitInfo.innerHTML = `<strong>${ui.addWatch || 'Add a watch'}</strong> \u2014 ${ui.estimateNote || 'Enter dimensions and add a watch to see how it fits your wrist.'}`;
    fitInfo.style.borderLeft = 'none';
  }
}

function addWatch(): void {
  const name = inputName.value.trim();
  if (!name) {
    inputName.focus();
    return;
  }
  const id = 'ws_' + Date.now();
  watches.push({
    id,
    name,
    diameter: parseMm(inputDiameter, 40),
    lugToLug: parseMm(inputL2L, 48),
    thickness: parseMm(inputThickness, 12),
  });
  saveWatches();
  activeId = id;
  inputName.value = '';
  renderWatchList();
  selectWatch(id);
}

function onInputChange(): void {
  const wristCm = getWristCm();
  const dia = parseMm(inputDiameter, 40), l2l = parseMm(inputL2L, 48), thick = parseMm(inputThickness, 12);
  const w = watches.find((x) => x.id === activeId);
  if (w) {
    w.diameter = dia;
    w.lugToLug = l2l;
    w.thickness = thick;
    saveWatches();
    drawWatch({ ctx, canvas, ui, diameter: dia, l2l, thickness: thick, wristCm, unit });
    updateFitInfo(w, wristCm);
    renderWatchList();
  } else {
    drawWatch({ ctx, canvas, ui, diameter: dia, l2l, thickness: thick, wristCm, unit });
  }
}

function handleUnitChange(newUnit: 'cm' | 'in'): void {
  if (unit === newUnit) return;
  const prevCm = getWristCm();
  const prevDiaMm = parseMm(inputDiameter, 40);
  const prevL2lMm = parseMm(inputL2L, 48);
  const prevThickMm = parseMm(inputThickness, 12);
  unit = newUnit;
  saveUnit();
  updateUnitButtons();
  updateInputUnits();

  inputWrist.value = unit === 'in' ? (prevCm / 2.54).toFixed(1) : prevCm.toFixed(1);
  inputWrist.min = unit === 'in' ? '4.7' : '12';
  inputWrist.max = unit === 'in' ? '9.8' : '25';

  inputDiameter.value = unit === 'in' ? (prevDiaMm / 25.4).toFixed(2) : Math.round(prevDiaMm).toString();
  inputL2L.value = unit === 'in' ? (prevL2lMm / 25.4).toFixed(2) : Math.round(prevL2lMm).toString();
  inputThickness.value = unit === 'in' ? (prevThickMm / 25.4).toFixed(2) : Math.round(prevThickMm).toString();

  onInputChange();
}

btnUnitCm.addEventListener('click', () => handleUnitChange('cm'));
btnUnitIn.addEventListener('click', () => handleUnitChange('in'));
addBtn.addEventListener('click', addWatch);
inputName.addEventListener('keydown', (e) => { if (e.key === 'Enter') addWatch(); });
inputDiameter.addEventListener('input', onInputChange);
inputL2L.addEventListener('input', onInputChange);
inputThickness.addEventListener('input', onInputChange);
inputWrist.addEventListener('input', onInputChange);

unit = loadUnit();
updateUnitButtons();
updateInputUnits();

if (unit === 'in') {
  inputWrist.value = (17 / 2.54).toFixed(1);
  inputWrist.min = '4.7'; inputWrist.max = '9.8';
  inputDiameter.value = (40 / 25.4).toFixed(2);
  inputL2L.value = (48 / 25.4).toFixed(2);
  inputThickness.value = (12 / 25.4).toFixed(2);
} else {
  inputWrist.value = '17'; inputWrist.min = '12'; inputWrist.max = '25';
}
inputWrist.step = '0.5';
loadWatches();
if (watches.length > 0) {
  activeId = watches[watches.length - 1].id;
  renderWatchList();
  selectWatch(activeId);
} else {
  selectWatch('');
  renderWatchList();
}

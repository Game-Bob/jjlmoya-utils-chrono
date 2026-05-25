import { calculateStrap, toMillimeters, formatLength } from './helpers';
import { drawFlatLayout, drawWristProfile } from './drawing';

const container = document.querySelector('.str') as HTMLElement;
const UI = JSON.parse(container.dataset.ui || '{}');

const wristIn = document.getElementById('str-wrist') as HTMLInputElement;
const lugIn = document.getElementById('str-lug') as HTMLInputElement;
const fitIn = document.getElementById('str-fit') as HTMLSelectElement;
const unitIn = document.getElementById('str-unit') as HTMLSelectElement;
const wristUnitLabel = document.getElementById('str-wrist-unit-label') as HTMLElement;

const standardVal = document.getElementById('str-standard-val') as HTMLElement;
const standardDesc = document.getElementById('str-standard-desc') as HTMLElement;
const bespokeLong = document.getElementById('str-bespoke-long') as HTMLElement;
const bespokeShort = document.getElementById('str-bespoke-short') as HTMLElement;
const natoVal = document.getElementById('str-nato-val') as HTMLElement;

const svgFlat = document.getElementById('str-svg-flat') as unknown as SVGSVGElement;
const svgWrist = document.getElementById('str-svg-wrist') as unknown as SVGSVGElement;

const STORAGE_KEY = 'jjlmoya_chrono_strap_calc';

let currentUnit: 'mm' | 'in' = 'mm';

interface StrapState {
  wrist: string;
  lug: string;
  fit: string;
  unit: string;
}

function saveState(): void {
  const state: StrapState = {
    wrist: wristIn.value,
    lug: lugIn.value,
    fit: fitIn.value,
    unit: unitIn.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setUnitDisplay(unit: 'mm' | 'in'): void {
  currentUnit = unit;
  if (unit === 'in') {
    wristIn.min = '4.5';
    wristIn.max = '9.5';
    wristIn.step = '0.05';
    wristUnitLabel.textContent = UI.inches || 'in';
  } else {
    wristIn.min = '110';
    wristIn.max = '240';
    wristIn.step = '1';
    wristUnitLabel.textContent = UI.millimeters || 'mm';
  }
}

function loadState(): void {
  let raw: string | null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return;
  }
  if (!raw) return;
  let state: StrapState;
  try {
    state = JSON.parse(raw);
  } catch {
    return;
  }

  const fits = ['tight', 'regular', 'loose'] as const;
  const units = ['mm', 'in'] as const;
  if (state.wrist) wristIn.value = state.wrist;
  if (state.lug) lugIn.value = state.lug;
  if (fits.includes(state.fit as typeof fits[number])) fitIn.value = state.fit;
  if (units.includes(state.unit as typeof units[number])) {
    unitIn.value = state.unit;
    setUnitDisplay(state.unit);
  }
}

function update() {
  const wrist = parseFloat(wristIn.value) || 170;
  const lug = parseFloat(lugIn.value) || 45;
  const fit = fitIn.value as 'tight' | 'regular' | 'loose';
  const unit = unitIn.value as 'mm' | 'in';

  const res = calculateStrap({ wrist, lug, fit, unit });

  standardVal.textContent = res.standardText;
  standardDesc.textContent = UI[`size${res.sizeKey.toUpperCase()}`] || res.sizeKey;
  bespokeLong.textContent = formatLength(res.bespokeLong, unit);
  bespokeShort.textContent = formatLength(res.bespokeShort, unit);
  natoVal.textContent = res.natoText;

  const wristMm = toMillimeters(wrist, unit);
  let fitAllowance = 37;
  if (fit === 'tight') {
    fitAllowance = 32;
  } else if (fit === 'loose') {
    fitAllowance = 42;
  }
  const totalStrap = wristMm - lug + fitAllowance;

  drawFlatLayout({
    svg: svgFlat,
    wrist: wristMm,
    lug,
    totalStrap,
    bespokeLong: res.bespokeLong,
    bespokeShort: res.bespokeShort,
  });
  drawWristProfile(svgWrist, wristMm, lug);

  saveState();
}

function handleUnitChange() {
  const nextUnit = unitIn.value as 'mm' | 'in';
  if (nextUnit === currentUnit) {
    return;
  }

  const prevVal = parseFloat(wristIn.value) || 170;
  if (nextUnit === 'in') {
    wristIn.min = '4.5';
    wristIn.max = '9.5';
    wristIn.step = '0.05';
    wristIn.value = (prevVal / 25.4).toFixed(2);
    wristUnitLabel.textContent = UI.inches || 'in';
  } else {
    wristIn.min = '110';
    wristIn.max = '240';
    wristIn.step = '1';
    wristIn.value = Math.round(prevVal * 25.4).toString();
    wristUnitLabel.textContent = UI.millimeters || 'mm';
  }

  currentUnit = nextUnit;
  update();
}

wristIn.addEventListener('input', update);
lugIn.addEventListener('input', update);
fitIn.addEventListener('change', update);
unitIn.addEventListener('change', handleUnitChange);

loadState();
update();

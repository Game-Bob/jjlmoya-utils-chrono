interface BatteryData {
  id: string;
  name: string;
  capacity: number;
}

const batteries: BatteryData[] = [
  { id: 'sr621sw', name: 'SR621SW (364)', capacity: 18 },
  { id: 'sr626sw', name: 'SR626SW (377)', capacity: 27 },
  { id: 'sr716sw', name: 'SR716SW (315)', capacity: 25 },
  { id: 'sr721sw', name: 'SR721SW (361)', capacity: 32 },
  { id: 'sr920sw', name: 'SR920SW (371)', capacity: 40 },
  { id: 'sr936sw', name: 'SR936SW (394)', capacity: 55 },
  { id: 'sr1130sw', name: 'SR1130SW (389)', capacity: 80 },
  { id: 'sr44', name: 'SR44 (357)', capacity: 150 },
  { id: 'cr2025', name: 'CR2025', capacity: 165 },
];

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

const batterySelect = document.getElementById('battery-select') as HTMLSelectElement;
const customFields = document.getElementById('custom-fields') as HTMLElement;
const customCapacity = document.getElementById('custom-capacity') as HTMLInputElement;
const consumptionInput = document.getElementById('consumption-input') as HTMLInputElement;
const installMonth = document.getElementById('install-month') as HTMLSelectElement;
const installYear = document.getElementById('install-year') as HTMLInputElement;
const calcBtn = document.getElementById('calc-btn') as HTMLButtonElement;
const resultCard = document.getElementById('result-card') as HTMLElement;
const lifeYears = document.getElementById('life-years') as HTMLElement;
const lifeMonths = document.getElementById('life-months') as HTMLElement;
const lifeDays = document.getElementById('life-days') as HTMLElement;
const gaugeFill = document.getElementById('gauge-fill') as HTMLElement;
const healthBadge = document.getElementById('health-badge') as HTMLElement;
const changeDateRow = document.getElementById('change-date-row') as HTMLElement;
const changeDateValue = document.getElementById('change-date-value') as HTMLElement;
const changeDateHint = document.getElementById('change-date-hint') as HTMLElement;

const STORAGE_KEY = 'quartz-battery-health-state';

interface SavedState {
  battery: string;
  customCapacity: string;
  consumption: string;
  month: string;
  year: string;
}

function saveState() {
  const state: SavedState = {
    battery: batterySelect.value,
    customCapacity: customCapacity.value,
    consumption: consumptionInput.value,
    month: installMonth.value,
    year: installYear.value,
  };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

function setDateDefaults() {
  installMonth.value = String(new Date().getMonth() + 1);
  installYear.value = String(new Date().getFullYear());
}

function restoreState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) { setDateDefaults(); return; }
    const state: SavedState = JSON.parse(raw);
    if (state.battery) batterySelect.value = state.battery;
    if (state.customCapacity) customCapacity.value = state.customCapacity;
    if (state.consumption) consumptionInput.value = state.consumption;
    if (state.month) installMonth.value = state.month;
    if (state.year) installYear.value = state.year;
  } catch { setDateDefaults(); }
}

function parseLocalizedFloat(value: string): number {
  return parseFloat(value.replace(/,/g, '.')) || 0;
}

function getBattery(id: string): BatteryData | null {
  return batteries.find((b) => b.id === id) || null;
}

function getCapacity(): number {
  if (batterySelect.value === 'custom') {
    return parseLocalizedFloat(customCapacity.value) || 40;
  }
  const b = getBattery(batterySelect.value);
  return b ? b.capacity : 40;
}

function calcValue(input: HTMLInputElement, delta: number) {
  const step = parseFloat(input.step) || 1;
  const val = parseLocalizedFloat(input.value);
  const min = parseFloat(input.min) || 0;
  const max = parseFloat(input.max) || 100;
  const next = Math.max(min, Math.min(max, Math.round((val + delta) * (1 / step)) / (1 / step)));
  input.value = String(next);
}

function getHealthStatus(pct: number): { label: string; color: string } {
  if (pct >= 50) return { label: ui.healthGood || 'Good', color: 'var(--color-success, #22c55e)' };
  if (pct >= 20) return { label: ui.healthModerate || 'Moderate', color: 'var(--color-warning, #f59e0b)' };
  return { label: ui.healthCritical || 'Critical', color: 'var(--color-danger, #ef4444)' };
}

function formatDate(d: Date): string {
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function updateHealth(totalDays: number) {
  const month = parseInt(installMonth.value, 10);
  const year = parseInt(installYear.value, 10);
  if (!month || !year) {
    gaugeFill.style.width = '0%';
    healthBadge.textContent = '--';
    changeDateRow.style.display = 'none';
    changeDateHint.style.display = 'block';
    return;
  }
  const installed = new Date(year, month - 1, 1);
  const elapsedDays = (Date.now() - installed.getTime()) / 86400000;
  const remainingPct = Math.max(0, Math.min(100, (1 - elapsedDays / totalDays) * 100));

  gaugeFill.style.width = remainingPct + '%';
  const health = getHealthStatus(remainingPct);
  gaugeFill.style.background = `linear-gradient(90deg, ${health.color}, color-mix(in srgb, ${health.color} 70%, #fff 30%))`;
  healthBadge.textContent = health.label;
  healthBadge.style.background = health.color;

  const replaceBy = new Date(installed.getTime() + totalDays * 86400000);
  changeDateValue.textContent = formatDate(replaceBy);
  changeDateRow.style.display = 'flex';
  changeDateHint.style.display = 'none';
}

function calculate() {
  const capacity = getCapacity();
  const consumption = parseLocalizedFloat(consumptionInput.value) || 1.5;
  if (consumption <= 0) return;

  const totalDays = ((capacity * 1000) / consumption) / 24;
  const totalYears = totalDays / 365.25;

  const years = Math.floor(totalYears);
  const months = Math.floor((totalYears - years) * 12);
  const days = Math.floor(totalDays - (years * 365.25 + months * 30.4375));

  lifeYears.textContent = String(years);
  lifeMonths.textContent = String(months);
  lifeDays.textContent = String(days);

  updateHealth(totalDays);
  resultCard.style.display = 'flex';
}

function toggleCustom() {
  const show = batterySelect.value === 'custom';
  customFields.style.display = show ? 'flex' : 'none';
}

function commit() {
  saveState();
  calculate();
}

batterySelect.addEventListener('change', () => {
  toggleCustom();
  commit();
});
calcBtn.addEventListener('click', commit);

[customCapacity, consumptionInput, installMonth, installYear].forEach((el) => {
  el.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') commit();
  });
  el.addEventListener('input', commit);
});

document.querySelectorAll('.stepper-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.getAttribute('data-target') || '') as HTMLInputElement;
    const dir = parseFloat(btn.getAttribute('data-dir') || '1');
    if (target) {
      calcValue(target, dir);
      commit();
    }
  });
});

restoreState();
toggleCustom();
commit();

export {};


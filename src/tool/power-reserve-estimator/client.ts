interface MovementData {
  id: string;
  name: string;
  reserve: number;
  turnsToFull: number;
}

const movements: MovementData[] = [
  { id: 'eta-2824', name: 'ETA 2824-2 / SW200', reserve: 38, turnsToFull: 40 },
  { id: 'eta-2892', name: 'ETA 2892-A2 / SW300', reserve: 42, turnsToFull: 40 },
  { id: 'valjoux-7750', name: 'Valjoux 7750 / SW500', reserve: 48, turnsToFull: 40 },
  { id: 'miyota-8215', name: 'Miyota 8215', reserve: 40, turnsToFull: 35 },
  { id: 'miyota-9015', name: 'Miyota 9015', reserve: 42, turnsToFull: 35 },
  { id: 'seiko-nh35', name: 'Seiko NH35 / 4R35', reserve: 41, turnsToFull: 40 },
  { id: 'seiko-6r35', name: 'Seiko 6R35', reserve: 70, turnsToFull: 55 },
  { id: 'unitas-6498', name: 'Unitas 6497 / 6498', reserve: 46, turnsToFull: 35 },
  { id: 'rolex-3135', name: 'Rolex 3135', reserve: 48, turnsToFull: 40 },
  { id: 'rolex-3235', name: 'Rolex 3235', reserve: 70, turnsToFull: 40 },
];

const activityFactors: Record<string, number> = {
  low: 0.03,
  medium: 0.06,
  high: 0.10,
};

const movementSelect = document.getElementById('movement-select') as HTMLSelectElement;
const root = movementSelect.closest('.power-reserve-card') || document;
const turnsInput = document.getElementById('turns-input') as HTMLInputElement;
const hoursInput = document.getElementById('hours-input') as HTMLInputElement;
const activityChips = root.querySelectorAll('[data-activity]') as NodeListOf<HTMLButtonElement>;
const customFields = root.querySelector('#custom-fields') as HTMLElement;
const customReserve = root.querySelector('#custom-reserve') as HTMLInputElement;
const customTurns = root.querySelector('#custom-turns') as HTMLInputElement;
const calcBtn = root.querySelector('#calc-btn') as HTMLButtonElement;
const resultCard = root.querySelector('#result-card') as HTMLElement;
const gaugeFill = root.querySelector('#gauge-fill') as HTMLElement;
const chargeValue = root.querySelector('#charge-value') as HTMLElement;
const reserveValue = root.querySelector('#reserve-value') as HTMLElement;
const stopValue = root.querySelector('#stop-value') as HTMLElement;

let currentActivity = 'medium';

function getMovement(id: string): MovementData | null {
  return movements.find((m) => m.id === id) || null;
}

function calcValue(input: HTMLInputElement, delta: number) {
  const val = parseInt(input.value, 10) || 0;
  const min = parseInt(input.min, 10) || 0;
  const max = parseInt(input.max, 10) || 100;
  const step = Math.abs(delta);
  const next = Math.round(val / step) * step + delta;
  input.value = String(Math.max(min, Math.min(max, next)));
}

function getMovementParams(): { reserve: number; turnsToFull: number } {
  if (movementSelect.value === 'custom') {
    return {
      reserve: parseFloat(customReserve.value) || 38,
      turnsToFull: parseFloat(customTurns.value) || 40,
    };
  }
  const m = getMovement(movementSelect.value);
  return m ? { reserve: m.reserve, turnsToFull: m.turnsToFull } : { reserve: 38, turnsToFull: 40 };
}

function formatStopTime(hoursFromNow: number): string {
  const now = new Date();
  const stop = new Date(now.getTime() + hoursFromNow * 3600000);
  const sameDay = stop.getDate() === now.getDate()
    && stop.getMonth() === now.getMonth()
    && stop.getFullYear() === now.getFullYear();
  if (sameDay) {
    return stop.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  }
  return stop.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    + ' ' + stop.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function getGaugeColor(pct: number): string {
  if (pct <= 15) return 'var(--color-danger, #ef4444)';
  if (pct <= 40) return 'var(--color-warning, #f59e0b)';
  return 'var(--color-success, #22c55e)';
}

function calculate() {
  const { reserve, turnsToFull } = getMovementParams();
  const turns = parseInt(turnsInput.value, 10) || 0;
  const hours = parseFloat(hoursInput.value) || 0;
  const activity = activityFactors[currentActivity] || 0.06;

  const totalCharge = Math.min(turns / turnsToFull + hours * activity, 1);
  const hoursRemaining = Math.round(totalCharge * reserve);
  const percent = Math.round(totalCharge * 100);
  const color = getGaugeColor(percent);

  gaugeFill.style.width = percent + '%';
  gaugeFill.style.background = `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 70%, #fff 30%))`;
  chargeValue.textContent = percent + '%';
  reserveValue.textContent = hoursRemaining + 'h';
  stopValue.textContent = formatStopTime(hoursRemaining);
  resultCard.style.display = 'flex';
}

function toggleCustom() {
  const show = movementSelect.value === 'custom';
  customFields.style.display = show ? 'flex' : 'none';
}

activityChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    activityChips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    currentActivity = chip.getAttribute('data-activity') || 'medium';
  });
});

root.querySelectorAll('.stepper-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = root.querySelector('#' + (btn.getAttribute('data-target') || '')) as HTMLInputElement;
    const dir = parseInt(btn.getAttribute('data-dir') || '1', 10);
    if (target) {
      calcValue(target, dir);
    }
  });
});

movementSelect.addEventListener('change', toggleCustom);
calcBtn.addEventListener('click', calculate);

[turnsInput, hoursInput, customReserve, customTurns].forEach((el) => {
  el.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') calculate();
  });
  el.addEventListener('input', calculate);
});

toggleCustom();
calculate();

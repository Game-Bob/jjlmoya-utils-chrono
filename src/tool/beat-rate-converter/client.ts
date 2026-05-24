const movementSelect = document.getElementById('movement-select') as HTMLSelectElement;
const vphInput = document.getElementById('vph-input') as HTMLInputElement;
const customSection = document.getElementById('custom-section') as HTMLElement;
const freqValue = document.getElementById('freq-value') as HTMLElement;
const tpsValue = document.getElementById('tps-value') as HTMLElement;
const impactValue = document.getElementById('impact-value') as HTMLElement;
function getVph(): number {
  if (movementSelect.value === 'custom') {
    return parseInt(vphInput.value, 10) || 28800;
  }
  return parseInt(movementSelect.value, 10) || 28800;
}

function update() {
  const vph = getVph();
  const hz = vph / 7200;
  const tps = vph / 3600;
  const sPerDay = 86400 / vph;

  freqValue.textContent = hz.toFixed(3);
  tpsValue.textContent = String(tps);
  impactValue.textContent = sPerDay < 1 ? sPerDay.toFixed(1) : String(Math.round(sPerDay));
}

function toggleCustom() {
  const show = movementSelect.value === 'custom';
  customSection.style.display = show ? 'flex' : 'none';
  if (!show) update();
}

movementSelect.addEventListener('change', () => { toggleCustom(); update(); });
vphInput.addEventListener('input', update);

document.querySelectorAll('.stepper-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const step = parseInt(btn.getAttribute('data-step') || '1200', 10);
    const dir = btn.textContent?.includes('+') ? 1 : -1;
    const val = parseInt(vphInput.value, 10) || 28800;
    const next = val + dir * step;
    vphInput.value = String(Math.max(3600, Math.min(360000, next)));
    update();
  });
});

toggleCustom();
update();

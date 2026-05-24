const depthInput = document.getElementById('depth-input') as HTMLInputElement;
const unitSelect = document.getElementById('unit-select') as HTMLSelectElement;
const convM = document.getElementById('conv-m') as HTMLElement;
const convFt = document.getElementById('conv-ft') as HTMLElement;
const convAtm = document.getElementById('conv-atm') as HTMLElement;
const convBar = document.getElementById('conv-bar') as HTMLElement;
const ratingName = document.getElementById('rating-name') as HTMLElement;
const usageCards = document.querySelectorAll('.usage-card') as NodeListOf<HTMLElement>;

function toMeters(value: number, unit: string): number {
  switch (unit) {
    case 'ft': return value / 3.28084;
    case 'atm': return value * 10;
    case 'bar': return value * 10;
    default: return value;
  }
}

function round(v: number): number {
  return v < 10 ? Math.round(v * 10) / 10 : Math.round(v);
}

function getRating(m: number): { name: string; active: string } {
  if (m < 20) return { name: 'Splash Resistant', active: 'handwash' };
  if (m < 70) return { name: 'Shower & Light Swim', active: 'shower' };
  if (m < 150) return { name: 'Swimming & Snorkeling', active: 'snorkel' };
  if (m < 250) return { name: 'Recreational Scuba', active: 'scuba' };
  if (m < 500) return { name: 'Deep Diving', active: 'deep' };
  return { name: 'Saturation Diving', active: 'extreme' };
}

function update() {
  const val = parseFloat(depthInput.value) || 0;
  const unit = unitSelect.value;
  const m = toMeters(val, unit);

  const atm = round(m / 10);
  const bar = round(m / 10);
  const ft = round(m * 3.28084);

  convM.textContent = round(m) + ' m';
  convFt.textContent = ft + ' ft';
  convAtm.textContent = atm + ' ATM';
  convBar.textContent = bar + ' bar';

  const rating = getRating(m);
  ratingName.textContent = rating.name;

  usageCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.rating === rating.active);
  });
}

depthInput.addEventListener('input', update);
unitSelect.addEventListener('change', update);
update();

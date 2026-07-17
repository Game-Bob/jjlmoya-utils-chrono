import { getAtmosphericData, DEVIATION_CHART_POINTS } from './logic';

const column = document.getElementById('alti-column')!;
const thumb = document.getElementById('alti-thumb')!;
const currentLabel = document.getElementById('alti-current-label')!;
const particlesContainer = document.getElementById('alti-particles')!;

const deviationValue = document.getElementById('alti-deviation-value')!;
const deviationFill = document.getElementById('alti-deviation-fill')!;
const deviationDesc = document.getElementById('alti-deviation-desc')!;
const rateBadge = document.getElementById('alti-rate-badge')!;
const rateValue = document.getElementById('alti-rate-value')!;

const atmPressure = document.getElementById('atm-pressure')!;
const atmDensity = document.getElementById('atm-density')!;
const atmTemp = document.getElementById('atm-temp')!;

const chartSvg = document.getElementById('deviation-chart')!;

const COL_HEIGHT = 420;
const MAX_ALT = 8000;

let currentAltitude = 0;

function getAltFromY(y: number): number {
  const fraction = Math.max(0, Math.min(1, y / COL_HEIGHT));
  return Math.round((1 - fraction) * MAX_ALT / 10) * 10;
}

function getYFromAlt(alt: number): number {
  return (1 - alt / MAX_ALT) * COL_HEIGHT;
}

function createParticles(count: number) {
  particlesContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'alti-particle';
    p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 3}s;animation-duration:${2 + Math.random() * 3}s;width:${2 + Math.random() * 2}px;height:${2 + Math.random() * 2}px;`;
    particlesContainer.appendChild(p);
  }
}

function updateParticles(altitude: number) {
  createParticles(Math.round((1 - altitude / MAX_ALT) * 30));
}

function drawChart(currentAlt: number) {
  const w = 800;
  const h = 80;
  const last = DEVIATION_CHART_POINTS[DEVIATION_CHART_POINTS.length - 1];
  const maxDev = last ? last.deviation + 1 : 10;
  const pad = 4;
  const plotH = h - pad * 2;

  let pathD = '';
  let areaD = '';
  for (let i = 0; i < DEVIATION_CHART_POINTS.length; i++) {
    const p = DEVIATION_CHART_POINTS[i];
    const x = (p.altitude / MAX_ALT) * w;
    const y = h - pad - (p.deviation / maxDev) * plotH;
    const cmd = i === 0 ? 'M' : 'L';
    pathD += cmd + x.toFixed(1) + ' ' + y.toFixed(1);
    areaD += cmd + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  areaD += ' L' + w.toFixed(1) + ' ' + h.toFixed(1) + ' L0 ' + h.toFixed(1) + ' Z';

  const idx = Math.min(Math.round(currentAlt / 100), DEVIATION_CHART_POINTS.length - 1);
  const currentData = DEVIATION_CHART_POINTS[idx];
  const cx = idx * 10;
  const cy = currentData ? h - pad - (currentData.deviation / maxDev) * plotH : h;

  chartSvg.innerHTML = `
    <rect x="0" y="0" width="${w}" height="${h}" fill="transparent"/>
    <path d="${areaD}" fill="url(#chart-grad)"/>
    <path d="${pathD}" class="alti-chart-line"/>
    <circle cx="${cx}" cy="${cy.toFixed(1)}" r="4" class="alti-chart-dot"/>
  `;
}

function updateDisplay(altitude: number) {
  currentAltitude = altitude;
  const data = getAtmosphericData(altitude);
  const y = getYFromAlt(altitude);

  const bottomPct = (1 - y / COL_HEIGHT) * 100;
  thumb.style.bottom = bottomPct + '%';
  currentLabel.textContent = altitude + ' m';
  currentLabel.style.top = '';
  currentLabel.style.bottom = bottomPct + '%';

  atmPressure.textContent = data.pressure.toFixed(1);
  atmDensity.textContent = data.density.toFixed(3);
  atmTemp.textContent = data.temperature.toFixed(1);

  deviationValue.textContent = (data.deviation > 0 ? '+' : '') + data.deviation.toFixed(1);
  const pct = Math.min(100, (data.deviation / 15) * 100);
  deviationFill.style.width = pct + '%';

  deviationDesc.textContent = data.deviationDesc.charAt(0).toUpperCase() + data.deviationDesc.slice(1);
  deviationDesc.className = 'alti-deviation-desc ' + data.deviationDesc;

  rateValue.textContent = (4 + data.deviation / 8).toFixed(2);
  rateBadge.className = data.deviation < 0.5 ? 'alti-rate-badge neutral' : 'alti-rate-badge';

  updateParticles(altitude);
  drawChart(altitude);
}

function handleMove(clientY: number) {
  const rect = column['getBounding' + 'ClientRect']();
  const y = Math.max(0, Math.min(COL_HEIGHT, ((clientY - rect.top) / rect.height) * COL_HEIGHT));
  updateDisplay(getAltFromY(y));
}

let isDragging = false;

thumb.addEventListener('mousedown', (e: MouseEvent) => {
  isDragging = true;
  thumb.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mousemove', (e: MouseEvent) => {
  if (!isDragging) return;
  handleMove(e.clientY);
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    thumb.style.cursor = 'grab';
  }
});

column.addEventListener('click', (e: MouseEvent) => {
  if (e.target === thumb) return;
  handleMove(e.clientY);
});

thumb.addEventListener('touchstart', (e: TouchEvent) => {
  isDragging = true;
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e: TouchEvent) => {
  if (!isDragging) return;
  handleMove(e.touches[0].clientY);
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
});

let balancePhase = 0;
const balanceRotor = document.getElementById('balance-wheel-rotor')!;

function animateBalance() {
  const data = getAtmosphericData(currentAltitude);
  balancePhase += 0.02 + (data.deviation / 15) * 0.01;
  const angle = Math.sin(balancePhase) * 15;
  balanceRotor.style.transform = 'rotate(' + angle.toFixed(2) + 'deg)';
  requestAnimationFrame(animateBalance);
}

requestAnimationFrame(animateBalance);
updateDisplay(0);

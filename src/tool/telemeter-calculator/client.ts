import { playPusherSound, playThunderSound } from './audio';
import { getSpeedOfSound, formatDistance } from './helpers';

const pusherStart = document.getElementById('pusher-start') as HTMLElement;
const pusherReset = document.getElementById('pusher-reset') as HTMLElement;
const btnFlash = document.getElementById('btn-flash') as HTMLButtonElement;
const btnSound = document.getElementById('btn-sound') as HTMLButtonElement;
const btnReset = document.getElementById('btn-reset') as HTMLButtonElement;

const tempSlider = document.getElementById('temp-slider') as HTMLInputElement;
const tempDisplay = document.getElementById('temp-display') as HTMLElement;
const speedDisplay = document.getElementById('speed-display') as HTMLElement;

const resultPrimary = document.getElementById('result-primary') as HTMLElement;
const resultSecondary = document.getElementById('result-secondary') as HTMLElement;
const resultTime = document.getElementById('result-time') as HTMLElement;

const dialDigitalTime = document.getElementById('dial-digital-time') as SVGTextElement;
const dialAmbientIndicator = document.getElementById('dial-ambient-indicator') as SVGTextElement;
const secondsHandGroup = document.getElementById('seconds-hand-group') as SVGGElement;

const lightningOverlay = document.getElementById('lightning-overlay') as HTMLElement;
const soundRipple = document.getElementById('sound-ripple') as HTMLElement;

const historyListContainer = document.getElementById('history-list') as HTMLElement;
const emptyHistoryEl = document.getElementById('empty-history') as HTMLElement;
const ticksG = document.getElementById('tel-ticks') as SVGElement;

const unitButtons = document.querySelectorAll('.tel-chip-btn');

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let rafId = 0;
let tempCelsius = 20;
let unitSystem = 'metric';

interface HistoryItem {
  timestamp: string;
  distance: string;
  time: string;
}

function buildTicks() {
  if (!ticksG) return;
  ticksG.innerHTML = '';
  const CX = 135;
  const CY = 135;
  const R_IN = 88;

  for (let i = 0; i < 60; i++) {
    const angle = (i * 6) * Math.PI / 180;
    const isMajor = i % 5 === 0;
    const length = isMajor ? 6 : 3;

    const x1 = CX + R_IN * Math.sin(angle);
    const y1 = CY - R_IN * Math.cos(angle);
    const x2 = CX + (R_IN + length) * Math.sin(angle);
    const y2 = CY - (R_IN + length) * Math.cos(angle);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(x1));
    line.setAttribute('y1', String(y1));
    line.setAttribute('x2', String(x2));
    line.setAttribute('y2', String(y2));
    line.classList.add(isMajor ? 'tel-tick-major' : 'tel-tick-minor');
    ticksG.appendChild(line);
  }
}

function updateEnvironmentalReadouts() {
  const speed = getSpeedOfSound(tempCelsius);
  if (unitSystem === 'metric') {
    speedDisplay.textContent = `${speed.toFixed(1)} m/s`;
    dialAmbientIndicator.textContent = `${tempCelsius.toFixed(1)}°C`;
  } else {
    const speedFt = speed * 3.28084;
    speedDisplay.textContent = `${speedFt.toFixed(1)} ft/s`;
    const tempFahr = (tempCelsius * 9/5) + 32;
    dialAmbientIndicator.textContent = `${tempFahr.toFixed(1)}°F`;
  }
}

function updateCalculations() {
  const result = formatDistance(elapsedTime, tempCelsius, unitSystem);
  resultTime.textContent = result.timeText;
  dialDigitalTime.textContent = `${elapsedTime.toFixed(1)}s`;
  resultPrimary.textContent = result.primary;
  resultSecondary.textContent = result.secondary;

  const handAngle = (elapsedTime * 6) % 360;
  secondsHandGroup.style.transform = `rotate(${handAngle}deg)`;
}

function tick(timestamp: number) {
  if (!startTime) startTime = timestamp;
  elapsedTime = (timestamp - startTime) / 1000;
  updateCalculations();
  rafId = requestAnimationFrame(tick);
}

function startTimer() {
  playPusherSound();
  if (isRunning) return;
  isRunning = true;
  startTime = 0;
  elapsedTime = 0;

  btnFlash.disabled = true;
  btnSound.disabled = false;
  btnReset.disabled = true;
  pusherReset.classList.add('disabled');

  lightningOverlay.classList.add('flash-active');
  setTimeout(() => {
    lightningOverlay.classList.remove('flash-active');
  }, 400);

  rafId = requestAnimationFrame(tick);
}

function stopTimer() {
  playPusherSound();
  playThunderSound();
  if (!isRunning) return;
  isRunning = false;
  cancelAnimationFrame(rafId);

  btnFlash.disabled = false;
  btnSound.disabled = true;
  btnReset.disabled = false;
  pusherReset.classList.remove('disabled');

  soundRipple.classList.add('ripple-active');
  setTimeout(() => {
    soundRipple.classList.remove('ripple-active');
  }, 800);

  addHistoryItem();
}

function resetTimer() {
  playPusherSound();
  if (isRunning) {
    isRunning = false;
    cancelAnimationFrame(rafId);
  }
  elapsedTime = 0;
  startTime = 0;
  updateCalculations();

  btnFlash.disabled = false;
  btnSound.disabled = true;
  btnReset.disabled = true;
  pusherReset.classList.add('disabled');
}

function addHistoryItem() {
  const item: HistoryItem = {
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    distance: resultPrimary.textContent || '0.00 km',
    time: `${elapsedTime.toFixed(2)}s`
  };

  const list = getHistory();
  list.unshift(item);
  if (list.length > 5) {
    list.pop();
  }
  localStorage.setItem('telemeter_history', JSON.stringify(list));
  renderHistory();
}

function getHistory(): HistoryItem[] {
  const data = localStorage.getItem('telemeter_history');
  return data ? JSON.parse(data) : [];
}

function renderHistory() {
  const items = getHistory();
  if (items.length === 0) {
    emptyHistoryEl.style.display = 'block';
    const oldItems = historyListContainer.querySelectorAll('.tel-history-item');
    oldItems.forEach(el => el.remove());
    return;
  }

  emptyHistoryEl.style.display = 'none';
  const oldItems = historyListContainer.querySelectorAll('.tel-history-item');
  oldItems.forEach(el => el.remove());

  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'tel-history-item';

    const timeSpan = document.createElement('span');
    timeSpan.className = 'tel-history-item-time';
    timeSpan.textContent = item.timestamp;

    const elapsedSpan = document.createElement('span');
    elapsedSpan.className = 'tel-history-item-elapsed';
    elapsedSpan.textContent = item.time;

    const distSpan = document.createElement('span');
    distSpan.className = 'tel-history-item-dist';
    distSpan.textContent = item.distance;

    row.appendChild(timeSpan);
    row.appendChild(elapsedSpan);
    row.appendChild(distSpan);

    historyListContainer.appendChild(row);
  });
}

pusherStart.addEventListener('click', () => {
  if (pusherStart.classList.contains('disabled')) return;
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
});

pusherReset.addEventListener('click', () => {
  if (pusherReset.classList.contains('disabled')) return;
  resetTimer();
});

btnFlash.addEventListener('click', startTimer);
btnSound.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);

tempSlider.addEventListener('input', (e) => {
  tempCelsius = parseFloat((e.target as HTMLInputElement).value);
  if (unitSystem === 'metric') {
    tempDisplay.textContent = `${tempCelsius}°C`;
  } else {
    const tempFahr = (tempCelsius * 9/5) + 32;
    tempDisplay.textContent = `${tempFahr.toFixed(0)}°F`;
  }
  updateEnvironmentalReadouts();
  updateCalculations();
});

unitButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    unitButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    unitSystem = btn.getAttribute('data-unit') || 'metric';

    const tempVal = parseFloat(tempSlider.value);
    if (unitSystem === 'metric') {
      tempDisplay.textContent = `${tempVal}°C`;
    } else {
      const tempFahr = (tempVal * 9/5) + 32;
      tempDisplay.textContent = `${tempFahr.toFixed(0)}°F`;
    }

    updateEnvironmentalReadouts();
    updateCalculations();
  });
});

buildTicks();
updateEnvironmentalReadouts();
updateCalculations();
renderHistory();
pusherReset.classList.add('disabled');

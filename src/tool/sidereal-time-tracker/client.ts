import { getJulianDate, getLST, formatHours } from './helpers';

let simulatedTime = Date.now();
let lastFrameTime = Date.now();
let speedMultiplier = 1;
let longitude = 0;
let longitudeFormat: 'decimal' | 'dms' = 'decimal';
let hemisphere: 'N' | 'S' = 'N';
let audioEnabled = false;
let audioCtx: AudioContext | null = null;
let lastTickSecond = -1;

try {
  const storedLon = localStorage.getItem('sid-longitude');
  if (storedLon) longitude = parseFloat(storedLon);
  const storedFormat = localStorage.getItem('sid-longitude-format');
  if (storedFormat === 'decimal' || storedFormat === 'dms') {
    longitudeFormat = storedFormat;
  }
  const storedHem = localStorage.getItem('sid-hemisphere');
  if (storedHem === 'N' || storedHem === 'S') {
    hemisphere = storedHem;
  }
} catch {
}

function saveSettings(): void {
  try {
    localStorage.setItem('sid-longitude', longitude.toString());
    localStorage.setItem('sid-longitude-format', longitudeFormat);
    localStorage.setItem('sid-hemisphere', hemisphere);
  } catch {
  }
}

function formatDMS(deg: number): string {
  const direction = deg >= 0 ? 'E' : 'W';
  const absDeg = Math.abs(deg);
  const degrees = Math.floor(absDeg);
  const minutes = Math.round((absDeg - degrees) * 60);
  return `${degrees}° ${minutes.toString().padStart(2, '0')}' ${direction}`;
}

function updateLongitudeLabel(): void {
  const label = document.getElementById('sid-label-longitude-val');
  if (!label) return;
  if (longitudeFormat === 'decimal') {
    label.textContent = `${longitude.toFixed(1)}°`;
  } else {
    label.textContent = formatDMS(longitude);
  }
}

function updateHemisphere(): void {
  const northGroup = document.getElementById('sid-constellations-north');
  const southGroup = document.getElementById('sid-constellations-south');
  if (northGroup && southGroup) {
    if (hemisphere === 'N') {
      northGroup.style.display = 'block';
      southGroup.style.display = 'none';
    } else {
      northGroup.style.display = 'none';
      southGroup.style.display = 'block';
    }
  }
}

function initAudio(): void {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTick(freq: number): void {
  if (!audioCtx || !audioEnabled) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

function updateHands(date: Date, lst: number): void {
  const sec = date.getUTCSeconds() + date.getUTCMilliseconds() / 1000;
  const min = date.getUTCMinutes() + sec / 60;
  const hour = date.getUTCHours() + min / 60;

  const elSec = document.getElementById('sid-hand-sec');
  const elMin = document.getElementById('sid-hand-solar-min');
  const elHour = document.getElementById('sid-hand-solar-hour');
  const elSidHour = document.getElementById('sid-hand-sid-hour');
  const elSphere = document.getElementById('sid-celestial-sphere');

  if (elSec) elSec.style.transform = `rotate(${sec * 6}deg)`;
  if (elMin) elMin.style.transform = `rotate(${min * 6}deg)`;
  if (elHour) elHour.style.transform = `rotate(${(hour % 12) * 30}deg)`;
  if (elSidHour) elSidHour.style.transform = `rotate(${lst * 15}deg)`;
  if (elSphere) elSphere.style.transform = `rotate(${-lst * 15}deg)`;
}

function handleTickSound(date: Date): void {
  const solarSec = date.getUTCSeconds();
  if (solarSec !== lastTickSecond) {
    lastTickSecond = solarSec;
    const isHourCross = date.getUTCMinutes() === 0 && solarSec === 0;
    playTick(isHourCross ? 1400 : 900);
  }
}

function setText(id: string, text: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  }
}

function updateDisplay(): void {
  const date = new Date(simulatedTime);
  const lst = getLST(date, longitude);
  const jd = getJulianDate(date);

  handleTickSound(date);
  updateHands(date, lst);

  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  let diff = Math.abs(utcHours - lst);
  if (diff > 12) {
    diff = 24 - diff;
  }

  setText('sid-val-solar', formatHours(utcHours));
  setText('sid-val-sidereal', formatHours(lst));
  setText('sid-val-drift', `${Math.floor(diff * 60)}m ${Math.floor((diff * 3600) % 60)}s`);
  setText('sid-val-julian', jd.toFixed(5));
}

function tick(): void {
  const now = Date.now();
  const delta = now - lastFrameTime;
  lastFrameTime = now;
  simulatedTime += delta * speedMultiplier;

  updateDisplay();
  requestAnimationFrame(tick);
}

function setupSpeedButtons(): void {
  const btns = ['sid-btn-speed-1', 'sid-btn-speed-100', 'sid-btn-speed-10000'];
  btns.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', () => {
      btns.forEach((b) => document.getElementById(b)?.classList.remove('active'));
      el.classList.add('active');
      speedMultiplier = parseFloat(el.getAttribute('data-speed') || '1');
      initAudio();
    });
  });
}

function setupFormatButtons(): void {
  const decimalBtn = document.getElementById('sid-btn-format-decimal');
  const dmsBtn = document.getElementById('sid-btn-format-dms');
  if (decimalBtn && dmsBtn) {
    decimalBtn.addEventListener('click', () => {
      decimalBtn.classList.add('active');
      dmsBtn.classList.remove('active');
      longitudeFormat = 'decimal';
      updateLongitudeLabel();
      saveSettings();
    });
    dmsBtn.addEventListener('click', () => {
      dmsBtn.classList.add('active');
      decimalBtn.classList.remove('active');
      longitudeFormat = 'dms';
      updateLongitudeLabel();
      saveSettings();
    });
  }
}

function setupHemisphereButtons(): void {
  const northBtn = document.getElementById('sid-btn-hem-north');
  const southBtn = document.getElementById('sid-btn-hem-south');
  if (northBtn && southBtn) {
    northBtn.addEventListener('click', () => {
      northBtn.classList.add('active');
      southBtn.classList.remove('active');
      hemisphere = 'N';
      updateHemisphere();
      saveSettings();
    });
    southBtn.addEventListener('click', () => {
      southBtn.classList.add('active');
      northBtn.classList.remove('active');
      hemisphere = 'S';
      updateHemisphere();
      saveSettings();
    });
  }
}

function setupLocationButton(slider: HTMLInputElement): void {
  const locateBtn = document.getElementById('sid-btn-locate');
  if (!locateBtn) return;
  locateBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lon = pos.coords.longitude;
        slider.value = lon.toFixed(1);
        longitude = lon;
        updateLongitudeLabel();
        saveSettings();
      }, () => {});
    }
  });
}

function setupAudioButton(): void {
  const audioBtn = document.getElementById('sid-btn-audio');
  if (!audioBtn) return;
  audioBtn.addEventListener('click', () => {
    initAudio();
    audioEnabled = !audioEnabled;
    audioBtn.textContent = audioEnabled ? 'ON' : 'OFF';
    audioBtn.classList.toggle('active', audioEnabled);
  });
}

function setupEventListeners(): void {
  const slider = document.getElementById('sid-input-longitude') as HTMLInputElement;
  if (slider) {
    slider.value = longitude.toString();
    slider.addEventListener('input', () => {
      longitude = parseFloat(slider.value);
      updateLongitudeLabel();
      saveSettings();
    });
    setupLocationButton(slider);
  }
  setupAudioButton();
  setupSpeedButtons();
  setupFormatButtons();
  setupHemisphereButtons();
}

let initiated = false;
function init(): void {
  if (initiated) return;
  initiated = true;
  lastFrameTime = Date.now();
  simulatedTime = Date.now();
  setupEventListeners();

  updateLongitudeLabel();
  updateHemisphere();

  document.getElementById('sid-btn-format-decimal')?.classList.toggle('active', longitudeFormat === 'decimal');
  document.getElementById('sid-btn-format-dms')?.classList.toggle('active', longitudeFormat === 'dms');
  document.getElementById('sid-btn-hem-north')?.classList.toggle('active', hemisphere === 'N');
  document.getElementById('sid-btn-hem-south')?.classList.toggle('active', hemisphere === 'S');

  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState !== 'loading') {
  init();
}

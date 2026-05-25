const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

const canvas = document.getElementById('moon-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const dateInput = document.getElementById('moon-date-input') as HTMLInputElement;
const todayBtn = document.getElementById('btn-today') as HTMLElement;
const phaseNameEl = document.getElementById('phase-name') as HTMLElement;
const infoPhase = document.getElementById('info-phase') as HTMLElement;
const infoIllumination = document.getElementById('info-illumination') as HTMLElement;
const infoAge = document.getElementById('info-age') as HTMLElement;
const infoProgress = document.getElementById('info-progress') as HTMLElement;
const nextFullEl = document.getElementById('next-full') as HTMLElement;
const nextNewEl = document.getElementById('next-new') as HTMLElement;

const PHASE_NAMES: Record<string, string> = {
  'New Moon': ui.newMoon || 'New Moon',
  'Waxing Crescent': ui.waxingCrescent || 'Waxing Crescent',
  'First Quarter': ui.firstQuarter || 'First Quarter',
  'Waxing Gibbous': ui.waxingGibbous || 'Waxing Gibbous',
  'Full Moon': ui.fullMoon || 'Full Moon',
  'Waning Gibbous': ui.waningGibbous || 'Waning Gibbous',
  'Last Quarter': ui.lastQuarter || 'Last Quarter',
  'Waning Crescent': ui.waningCrescent || 'Waning Crescent',
};

const LUNAR_CYCLE = 29.53058867;

function julianDay(year: number, month: number, day: number): number {
  const y = month > 2 ? year : year - 1;
  const m = month > 2 ? month : month + 12;
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
}

function getPhaseFromProgress(progress: number): string {
  if (progress > 0.97) return 'New Moon';
  const phases: [number, string][] = [
    [0.03, 'New Moon'],
    [0.22, 'Waxing Crescent'],
    [0.28, 'First Quarter'],
    [0.47, 'Waxing Gibbous'],
    [0.53, 'Full Moon'],
    [0.72, 'Waning Gibbous'],
    [0.78, 'Last Quarter'],
  ];
  for (const [threshold, name] of phases) {
    if (progress < threshold) return name;
  }
  return 'Waning Crescent';
}

function getMoonPhase(date: Date): { phase: string; illumination: number; age: number; progress: number } {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const jd = julianDay(year, month, day);
  const daysSinceNew = jd - 2451549.5;
  const newMoons = daysSinceNew / LUNAR_CYCLE;
  const age = (newMoons - Math.floor(newMoons)) * LUNAR_CYCLE;
  const progress = age / LUNAR_CYCLE;

  let illumination: number;
  if (progress <= 0.5) {
    illumination = 2 * progress;
  } else {
    illumination = 2 * (1 - progress);
  }

  return {
    phase: getPhaseFromProgress(progress),
    illumination: Math.round(illumination * 100),
    age: Math.round(age * 10) / 10,
    progress,
  };
}

function findNextEvent(date: Date, targetPhase: number): Date {
  let offset = 1;
  while (offset < 35) {
    const check = new Date(date);
    check.setDate(check.getDate() + offset);
    const { progress } = getMoonPhase(check);
    if (Math.abs(progress - targetPhase) < 0.015) return check;
    offset += 0.5;
  }
  return date;
}

function drawSkyBackground(w: number, h: number): void {
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#0a0e1a');
  skyGrad.addColorStop(1, '#141b2d');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  const starPositions = [
    [50, 30], [120, 55], [180, 20], [280, 40], [340, 65],
    [70, 140], [330, 150], [150, 170], [290, 170], [50, 190],
    [200, 45], [370, 90], [30, 90], [350, 30], [100, 100],
  ];
  for (const [sx, sy] of starPositions) {
    ctx.beginPath();
    ctx.arc(sx, sy, Math.random() * 1.2 + 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawMoonGlow(cx: number, cy: number, radius: number): void {
  ctx.save();
  const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.5);
  glowGrad.addColorStop(0, 'rgba(200, 200, 220, 0.08)');
  glowGrad.addColorStop(1, 'rgba(200, 200, 220, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(cx - radius * 1.5, cy - radius * 1.5, radius * 3, radius * 3);
  ctx.restore();
}

function drawMoonBase(cx: number, cy: number, radius: number): void {
  ctx.save();
  ctx.shadowColor = 'rgba(200,200,220,0.15)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 0;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#1a1a2e';
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(200,200,220,0.15)';
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawMoonCraters(cx: number, cy: number): void {
  ctx.fillStyle = 'rgba(200,190,170,0.15)';
  ctx.beginPath();
  ctx.arc(cx - 20, cy - 20, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + 25, cy + 10, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx - 5, cy + 25, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx + 40, cy - 15, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawIlluminatedPortion(cx: number, cy: number, radius: number, progress: number): void {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 1, 0, Math.PI * 2);
  ctx.clip();

  const isWaxing = progress < 0.5;
  const localProgress = progress <= 0.5 ? progress * 2 : (1 - progress) * 2;

  if (localProgress > 0.01) {
    const termX = cx + (isWaxing ? -1 : 1) * radius * (1 - localProgress * 2);
    if (Math.abs(termX - cx) < radius) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius, radius, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.beginPath();
      if (isWaxing) {
        ctx.rect(termX, cy - radius, radius * 2, radius * 2);
      } else {
        ctx.rect(cx - radius, cy - radius, radius + (cx - termX), radius * 2);
      }
      ctx.fillStyle = '#f0e6d0';
      ctx.fill();

      drawMoonCraters(cx, cy);
    }
  }
  ctx.restore();
}

function drawMoonLabel(cx: number, h: number, phase: string, progress: number): void {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  const localProgress = progress <= 0.5 ? progress * 2 : (1 - progress) * 2;
  ctx.fillText(
    `${phase} \u00b7 ${Math.round(localProgress * 100)}% ${ui.illumination || 'illuminated'}`,
    cx, h - 12
  );
}

function drawMoon(progress: number, phase: string): void {
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const radius = 72;

  drawSkyBackground(W, H);
  drawMoonGlow(cx, cy, radius);
  drawMoonBase(cx, cy, radius);
  drawIlluminatedPortion(cx, cy, radius, progress);
  drawMoonLabel(cx, H, phase, progress);
}

function updateMoon(): void {
  const dateVal = dateInput.value;
  if (!dateVal) return;
  const date = new Date(dateVal + 'T12:00:00');
  const { phase, illumination, age, progress } = getMoonPhase(date);

  const displayName = PHASE_NAMES[phase] || phase;
  phaseNameEl.textContent = displayName;
  infoPhase.textContent = displayName;
  infoIllumination.textContent = illumination + '%';
  infoAge.textContent = age + ' days';
  infoProgress.textContent = Math.round(progress * 100) + '%';

  drawMoon(progress, displayName);

  const nextFull = findNextEvent(date, 0.5);
  const nextNew = findNextEvent(date, 0.0);
  nextFullEl.textContent = nextFull.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  nextNewEl.textContent = nextNew.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function setToday(): void {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  dateInput.value = `${y}-${m}-${d}`;
  updateMoon();
}

dateInput.addEventListener('change', updateMoon);
todayBtn.addEventListener('click', setToday);

setToday();

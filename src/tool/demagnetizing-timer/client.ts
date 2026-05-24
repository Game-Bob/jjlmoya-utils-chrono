import { MagneticField } from './helpers/field';

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

let duration = 1;
let elapsed = 0;
let running = false;
let animFrameId: number | null = null;
let startTimestamp: number | null = null;

const fieldCanvas = document.getElementById('field-canvas') as HTMLCanvasElement;
const field = new MagneticField(fieldCanvas);

const circle = document.getElementById('timer-circle') as HTMLElement;
const glowRing = document.getElementById('timer-glow-ring') as HTMLElement;
const progressRing = document.getElementById('timer-progress-ring') as SVGElement;
const timerValue = document.getElementById('timer-value') as HTMLElement;
const timerStatus = document.getElementById('timer-status') as HTMLElement;
const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
const stopBtn = document.getElementById('stop-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
const chips = document.querySelectorAll('.chip') as NodeListOf<HTMLButtonElement>;

const circumference = 326.73;
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioCtx;
}

function playBeep(frequency: number, durationMs: number, volume = 0.25, type: OscillatorType = 'sine') {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + durationMs / 1000);
  } catch {
  }
}

function playStartBeep() {
  playBeep(523, 80, 0.2);
  setTimeout(() => playBeep(659, 80, 0.2), 80);
  setTimeout(() => playBeep(784, 120, 0.25), 160);
}

function playEndBeep() {
  playBeep(784, 100, 0.25);
  setTimeout(() => playBeep(659, 100, 0.2), 100);
  setTimeout(() => playBeep(523, 200, 0.25), 200);
}

function playTickBeep() {
  playBeep(880, 30, 0.12);
}

let pulseAnimFrame: number | null = null;

function startPulseAnimation() {
  let phase = 0;
  const step = 0.05;

  function tick() {
    phase += step;
    const s = 1 + Math.sin(phase * Math.PI * 2) * 0.02;
    glowRing.style.transform = `translate(-50%, -50%) scale(${s})`;
    glowRing.style.opacity = String(0.3 + Math.sin(phase * Math.PI * 2) * 0.15);
    pulseAnimFrame = requestAnimationFrame(tick);
  }

  if (pulseAnimFrame) cancelAnimationFrame(pulseAnimFrame);
  pulseAnimFrame = requestAnimationFrame(tick);
}

function stopPulseAnimation() {
  if (pulseAnimFrame) {
    cancelAnimationFrame(pulseAnimFrame);
    pulseAnimFrame = null;
  }
  glowRing.style.transform = 'translate(-50%, -50%) scale(1)';
  glowRing.style.opacity = '0';
}

function setPhase(phase: 'ready' | 'pressing' | 'releasing' | 'complete') {
  circle.className = 'timer-circle';

  if (phase === 'pressing') {
    circle.classList.add('phase-pressing');
    timerStatus.textContent = ui.holdPhase || 'Hold the button...';
    timerStatus.className = 'timer-status-pill status-pressing';
    startPulseAnimation();
  } else if (phase === 'releasing') {
    circle.classList.add('phase-releasing');
    timerStatus.textContent = ui.releasePhase || 'Release now!';
    timerStatus.className = 'timer-status-pill status-releasing';
    stopPulseAnimation();
    glowRing.style.opacity = '0.6';
  } else if (phase === 'complete') {
    circle.classList.add('phase-complete');
    timerStatus.textContent = ui.completePhase || 'Done!';
    timerStatus.className = 'timer-status-pill status-complete';
    glowRing.style.opacity = '0.2';
  } else {
    timerStatus.textContent = ui.ready || 'Ready';
    timerStatus.className = 'timer-status-pill';
    stopPulseAnimation();
    glowRing.style.opacity = '0';
  }
}

function updateDisplay(time: number) {
  timerValue.textContent = time.toFixed(1);
  const progress = Math.min(time / duration, 1);
  const offset = circumference * (1 - progress);
  progressRing.setAttribute('stroke-dashoffset', offset.toString());
}

function stopTimer() {
  running = false;
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

let lastTickSecond = -1;

function tick(timestamp: number) {
  if (!startTimestamp) {
    startTimestamp = timestamp;
  }

  const rawElapsed = (timestamp - startTimestamp) / 1000;
  elapsed = Math.min(rawElapsed, duration);

  updateDisplay(elapsed);

  const currentSecond = Math.floor(elapsed);
  if (currentSecond > lastTickSecond) {
    lastTickSecond = currentSecond;
    if (elapsed < duration) {
      playTickBeep();
    }
  }

  if (elapsed >= duration) {
    setPhase('releasing');
    playEndBeep();
    stopTimer();
    setTimeout(() => {
      setPhase('complete');
    }, 1000);
    return;
  }

  animFrameId = requestAnimationFrame(tick);
}

function startTimer() {
  if (running) return;
  running = true;
  elapsed = 0;
  startTimestamp = null;
  lastTickSecond = -1;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  field.resize();
  field.start();
  setPhase('pressing');
  playStartBeep();
  updateDisplay(0);
  animFrameId = requestAnimationFrame(tick);
}

function resetTimer() {
  stopTimer();
  field.stop();
  elapsed = 0;
  startTimestamp = null;
  lastTickSecond = -1;
  updateDisplay(0);
  setPhase('ready');
  circle.className = 'timer-circle';
}

startBtn.addEventListener('click', startTimer);

stopBtn.addEventListener('click', () => {
  field.stop();
  stopTimer();
  setPhase('ready');
});

resetBtn.addEventListener('click', resetTimer);

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    if (running) return;
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    duration = parseInt(chip.dataset.duration || '1', 10);
    resetTimer();
  });
});

window.addEventListener('resize', () => field.resize());

resetTimer();

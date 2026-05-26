export function isLeapYear(y: number): boolean {
  return new Date(y, 1, 29).getDate() === 29;
}

export function daysInMonth(y: number, m: number): number {
  return new Date(y, m + 1, 0).getDate();
}

const PHASES = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
const PHASE_THRESHOLDS = [0.03, 0.22, 0.28, 0.47, 0.53, 0.72, 0.78, 0.97];

export function moonPhase(y: number, m: number, d: number, locale = 'en'): { phase: string; illumination: number } {
  const jd = new Date(y, m, d).getTime() / 86400000 + 2440587.5 - 2451549.5;
  const cycle = 29.53058867;
  const progress = (((jd % cycle) + cycle) % cycle) / cycle;
  const ill = Math.round((progress <= 0.5 ? progress * 2 : (1 - progress) * 2) * 100);
  const pct = new Intl.NumberFormat(locale, { style: 'percent' }).format(ill / 100);
  let phase = '';
  for (let i = 0; i < PHASE_THRESHOLDS.length; i++) {
    if (progress < PHASE_THRESHOLDS[i]) { phase = PHASES[i]; break; }
  }
  if (!phase) phase = PHASES[PHASES.length - 1];
  return { phase: phase + ' ' + pct, illumination: ill };
}

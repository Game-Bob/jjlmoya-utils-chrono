export interface Watch {
  id: string;
  name: string;
  movement: string;
  lastService: string | null;
  intervalYears: number;
}

const MS_YEAR = 31536000000;
const MS_DAY = 86400000;
const SIX_MO = 180 * MS_DAY;

export function state(w: Watch): string {
  if (!w.lastService) {
    return 'unknown';
  }
  const n = new Date(w.lastService).getTime() + w.intervalYears * MS_YEAR;
  if (n < Date.now()) {
    return 'overdue';
  }
  if (n - Date.now() < SIX_MO) {
    return 'due';
  }
  return 'healthy';
}

export function fmtFull(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function fmtShort(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

export function nextDate(w: Watch): Date | null {
  if (!w.lastService) {
    return null;
  }
  return new Date(new Date(w.lastService).getTime() + w.intervalYears * MS_YEAR);
}

export function nextLabel(w: Watch): { text: string; cls: string } | null {
  const nd = nextDate(w);
  if (!nd) {
    return null;
  }
  const left = Math.round((nd.getTime() - Date.now()) / MS_DAY);
  const s = state(w);
  if (s === 'overdue') {
    return { text: `Overdue by ${Math.abs(left).toLocaleString()}d`, cls: 's-o' };
  }
  if (s === 'due') {
    return { text: `${left.toLocaleString()}d left`, cls: 's-d' };
  }
  return null;
}

export function pct(w: Watch): number {
  if (!w.lastService) {
    return 0;
  }
  return Math.min(100, Math.round((Date.now() - new Date(w.lastService).getTime()) / (w.intervalYears * MS_YEAR) * 100));
}

export function esc(s: string): string {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

export function getMovementIcon(mov: string): string {
  if (mov === 'automatic') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 12L2.5 7.5"/><circle cx="12" cy="12" r="2"/></svg>`;
  }
  if (mov === 'manual') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M10 9v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9"/></svg>`;
  }
  if (mov === 'kinetic') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><path d="M16 2v4M8 2v4"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/></svg>`;
}

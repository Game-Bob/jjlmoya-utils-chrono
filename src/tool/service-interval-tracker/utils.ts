export interface WatchEntry {
  id: string;
  name: string;
  movement: 'automatic' | 'manual' | 'quartz' | 'kinetic';
  lastService: string | null;
  intervalYears: number;
  notes: string;
  createdAt: string;
}

export type WatchStatus = 'healthy' | 'due' | 'overdue' | 'unknown';
export type MovementType = 'automatic' | 'manual' | 'quartz' | 'kinetic';

export function generateId(): string {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getStatus(w: WatchEntry): WatchStatus {
  if (!w.lastService) return 'unknown';
  const last = new Date(w.lastService).getTime();
  const next = last + w.intervalYears * 31536000000;
  const now = Date.now();
  const sixMonths = 180 * 86400000;
  if (next < now) return 'overdue';
  if (next - now < sixMonths) return 'due';
  return 'healthy';
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function daysFrom(iso: string): number {
  return Math.round((Date.now() - new Date(iso).getTime()) / 86400000);
}

export function progressPct(w: WatchEntry): number {
  if (!w.lastService) return 0;
  const elapsed = Date.now() - new Date(w.lastService).getTime();
  const total = w.intervalYears * 31536000000;
  return Math.min(100, Math.round((elapsed / total) * 100));
}

export function nextServiceDate(w: WatchEntry): string | null {
  if (!w.lastService) return null;
  const d = new Date(new Date(w.lastService).getTime() + w.intervalYears * 31536000000);
  return d.toISOString().split('T')[0];
}

export function movementIcon(type: MovementType): string {
  const icons: Record<MovementType, string> = {
    automatic: '\u2699',
    manual: '\u23F0',
    quartz: '\u26A1',
    kinetic: '\u21BB',
  };
  return icons[type] || '\u2699';
}

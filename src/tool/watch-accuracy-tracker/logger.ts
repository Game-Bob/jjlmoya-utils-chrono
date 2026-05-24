import {
  calculateIntervalRate,
  calculateAverageRate,
  getPrecisionStatus
} from './utils';

export interface LogEntry {
  id: string;
  offset: number;
  date: string;
  position?: string;
}

const STORAGE_LOGS = 'jjlmoya_chrono_logs_';

export function getLogs(watchId: string): LogEntry[] {
  const data = localStorage.getItem(STORAGE_LOGS + watchId);
  return data ? JSON.parse(data) : [];
}

export function saveLogs(watchId: string, logs: LogEntry[]) {
  localStorage.setItem(STORAGE_LOGS + watchId, JSON.stringify(logs));
}

function buildLogRow(
  current: LogEntry,
  prev: LogEntry | null,
  deleteCallback: (logId: string) => void
): HTMLTableRowElement {
  const row = document.createElement('tr');
  const dateStr = new Date(current.date).toLocaleString();
  const badge = current.position ? `<span class="pos-badge">${current.position}</span>` : '';
  const offsetStr = `${current.offset >= 0 ? '+' : ''}${current.offset}s ${badge}`;
  let rateText = '--';
  if (prev) {
    const rate = calculateIntervalRate(current.offset, prev.offset, current.date, prev.date);
    if (rate !== null) rateText = `${rate >= 0 ? '+' : ''}${rate.toFixed(1)} s/d`;
  }
  row.innerHTML = `
    <td>${dateStr}</td>
    <td>${offsetStr}</td>
    <td>${rateText}</td>
    <td><button type="button" class="btn btn-danger btn-sm delete-log-btn" data-log-id="${current.id}">Delete</button></td>
  `;
  row.querySelector('.delete-log-btn')?.addEventListener('click', () => deleteCallback(current.id));
  return row;
}

export function renderLogsTable(
  logs: LogEntry[],
  logsTbody: HTMLElement,
  deleteCallback: (logId: string) => void
) {
  logsTbody.innerHTML = '';
  logs.forEach((current, i) => {
    const prev = i > 0 ? logs[i - 1] : null;
    const row = buildLogRow(current, prev, deleteCallback);
    logsTbody.appendChild(row);
  });
}

export function updateOverallStats(
  logs: LogEntry[],
  avgRateVal: HTMLElement | null,
  precisionStatusVal: HTMLElement | null,
  ui: Record<string, string>
) {
  if (!avgRateVal || !precisionStatusVal) return;
  if (logs.length < 2) {
    avgRateVal.textContent = '--';
    precisionStatusVal.textContent = '--';
    precisionStatusVal.className = 'stat-value';
    return;
  }
  const first = logs[0];
  const last = logs[logs.length - 1];
  const avgRate = calculateAverageRate(first.offset, last.offset, first.date, last.date);
  if (avgRate !== null) {
    avgRateVal.textContent = `${avgRate >= 0 ? '+' : ''}${avgRate.toFixed(1)} s/d`;
    const status = getPrecisionStatus(avgRate, ui);
    precisionStatusVal.textContent = status.text;
    precisionStatusVal.className = status.cssClass;
  } else {
    avgRateVal.textContent = '--';
    precisionStatusVal.textContent = '--';
    precisionStatusVal.className = 'stat-value';
  }
}

export function exportToCsv(watchId: string) {
  const logs = getLogs(watchId).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  if (logs.length === 0) return;
  let csv = 'data:text/csv;charset=utf-8,Date,Offset(seconds),Position\n';
  logs.forEach(log => {
    csv += `${new Date(log.date).toISOString()},${log.offset},${log.position || 'None'}\n`;
  });
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', `watch_logs_${watchId}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

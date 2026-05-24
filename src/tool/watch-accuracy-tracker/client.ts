import {
  formatDrift,
  getTernaryDriftClass,
  calculateAverageRate,
  getExplanationForRate
} from './utils';

import {
  getLogs,
  saveLogs,
  renderLogsTable,
  updateOverallStats
} from './logger';
import type { LogEntry } from './logger';

import { drawTrendChart } from './chart';

interface Watch {
  id: string;
  name: string;
}

const STORAGE_WATCHES = 'jjlmoya_chrono_watches';
const STORAGE_LOGS = 'jjlmoya_chrono_logs_';

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};
const statusPass = ui.statusPass || 'Pass';
const statusFail = ui.statusFail || 'Fail';

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const driftRateInput = document.getElementById('drift-rate-input') as HTMLInputElement;
const presetBtns = document.querySelectorAll('.preset-btn');
const projectionTbody = document.getElementById('projection-tbody') as HTMLElement;
const standardCards = document.querySelectorAll('.standard-card');

const watchSelector = document.getElementById('watch-selector') as HTMLSelectElement;
const newWatchNameInput = document.getElementById('new-watch-name') as HTMLInputElement;
const addWatchBtn = document.getElementById('add-watch-btn') as HTMLElement;
const deleteWatchBtn = document.getElementById('delete-watch-btn') as HTMLElement;

const logFormSection = document.getElementById('log-form-section') as HTMLElement;
const offsetInput = document.getElementById('offset-input') as HTMLInputElement;
const positionSelector = document.getElementById('position-selector') as HTMLSelectElement;
const measurementDateInput = document.getElementById('measurement-date') as HTMLInputElement;
const useCurrentTimeBtn = document.getElementById('use-current-time-btn') as HTMLElement;
const saveLogBtn = document.getElementById('save-log-btn') as HTMLElement;

const clearLogsBtn = document.getElementById('clear-logs-btn') as HTMLElement;
const avgRateVal = document.getElementById('avg-rate-val') as HTMLElement;
const precisionStatusVal = document.getElementById('precision-status-val') as HTMLElement;
const totalLogsVal = document.getElementById('total-logs-val') as HTMLElement;
const logsTbody = document.getElementById('logs-tbody') as HTMLElement;
const noLogsMsg = document.getElementById('no-logs-msg') as HTMLElement;

const exportCsvBtn = document.getElementById('export-csv-btn') as HTMLElement;
const avgRateExplanationBox = document.getElementById('avg-rate-explanation-box') as HTMLElement;
const chartWrapper = document.getElementById('chart-wrapper') as HTMLElement;
const driftTrendChart = document.getElementById('drift-trend-chart') as HTMLCanvasElement;

let watches: Watch[] = [];
let currentWatchId = '';

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    if (tabId) {
      const el = document.getElementById(tabId);
      if (el) el.classList.add('active');
    }
  });
});

function updateDriftProjections(rate: number) {
  if (!projectionTbody) return;
  projectionTbody.querySelectorAll('tr').forEach(row => {
    const days = parseFloat(row.getAttribute('data-days') || '0');
    const valCell = row.querySelector('.drift-val');
    if (valCell) {
      valCell.textContent = formatDrift(rate * days);
      valCell.className = getTernaryDriftClass(rate);
    }
  });

  standardCards.forEach(card => {
    const min = parseFloat(card.getAttribute('data-min') || '0');
    const max = parseFloat(card.getAttribute('data-max') || '0');
    const statusSpan = card.querySelector('.std-status');
    const isPassed = rate >= min && rate <= max;
    card.className = `standard-card ${isPassed ? 'passed' : 'failed'}`;
    if (statusSpan) {
      statusSpan.textContent = isPassed ? statusPass : statusFail;
    }
  });
}

driftRateInput.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  updateDriftProjections(parseFloat(target.value) || 0);
});

presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-value');
    if (val) {
      driftRateInput.value = val;
      updateDriftProjections(parseFloat(val));
    }
  });
});

function deleteLog(logId: string) {
  if (!currentWatchId) return;
  const logs = getLogs(currentWatchId).filter(l => l.id !== logId);
  saveLogs(currentWatchId, logs);
  updateLogsDisplay();
}

function updateStatsAndChart(logs: LogEntry[]) {
  if (logs.length >= 2) {
    chartWrapper.style.display = 'block';
    drawTrendChart(driftTrendChart, logs);
    const first = logs[0];
    const last = logs[logs.length - 1];
    const avgRate = calculateAverageRate(first.offset, last.offset, first.date, last.date);
    if (avgRate !== null) {
      avgRateExplanationBox.textContent = getExplanationForRate(avgRate);
      avgRateExplanationBox.style.display = 'block';
    } else {
      avgRateExplanationBox.style.display = 'none';
    }
  } else {
    chartWrapper.style.display = 'none';
    avgRateExplanationBox.style.display = 'none';
  }
}

function updateLogsDisplay() {
  if (!currentWatchId) return;
  const logs = getLogs(currentWatchId).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  totalLogsVal.textContent = logs.length.toString();

  if (logs.length === 0) {
    noLogsMsg.style.display = 'block';
    logsTbody.innerHTML = '';
    updateOverallStats([], avgRateVal, precisionStatusVal, ui);
    updateStatsAndChart([]);
    return;
  }

  noLogsMsg.style.display = 'none';
  renderLogsTable(logs, logsTbody, deleteLog);
  updateOverallStats(logs, avgRateVal, precisionStatusVal, ui);
  updateStatsAndChart(logs);
}

function resetFields() {
  avgRateVal.textContent = '--';
  precisionStatusVal.textContent = '--';
  precisionStatusVal.className = 'stat-value';
  totalLogsVal.textContent = '0';
  logsTbody.innerHTML = '';
}

function clearUIStats() {
  logFormSection.classList.add('disabled-form');
  resetFields();
  noLogsMsg.style.display = 'block';
  avgRateExplanationBox.style.display = 'none';
  chartWrapper.style.display = 'none';
}

function selectWatch(id: string) {
  currentWatchId = id;
  watchSelector.value = id;
  if (id) {
    logFormSection.classList.remove('disabled-form');
    updateLogsDisplay();
  } else {
    clearUIStats();
  }
}

function updateWatchSelector() {
  const prevVal = watchSelector.value;
  watchSelector.innerHTML = `<option value="">-- ${ui.selectWatch || "Select Watch"} --</option>`;
  watches.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w.id;
    opt.textContent = w.name;
    watchSelector.appendChild(opt);
  });
  if (watches.some(w => w.id === prevVal)) {
    watchSelector.value = prevVal;
  } else {
    watchSelector.value = '';
    selectWatch('');
  }
}

function saveWatches() {
  localStorage.setItem(STORAGE_WATCHES, JSON.stringify(watches));
}

function loadWatches() {
  const data = localStorage.getItem(STORAGE_WATCHES);
  watches = data ? JSON.parse(data) : [];
  updateWatchSelector();
}

watchSelector.addEventListener('change', (e) => {
  const target = e.target as HTMLSelectElement;
  selectWatch(target.value);
});

addWatchBtn.addEventListener('click', () => {
  const name = newWatchNameInput.value.trim();
  if (!name) return;
  const id = 'watch_' + Date.now();
  watches.push({ id, name });
  saveWatches();
  updateWatchSelector();
  selectWatch(id);
  newWatchNameInput.value = '';
});

deleteWatchBtn.addEventListener('click', () => {
  if (!currentWatchId) return;
  watches = watches.filter(w => w.id !== currentWatchId);
  saveWatches();
  localStorage.removeItem(STORAGE_LOGS + currentWatchId);
  loadWatches();
});

function setTimeInputToNow() {
  const now = new Date();
  const tzOffset = now.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(now.getTime() - tzOffset)).toISOString().slice(0, 16);
  measurementDateInput.value = localISOTime;
}

useCurrentTimeBtn.addEventListener('click', setTimeInputToNow);

function onSaveLog() {
  if (!currentWatchId) return;
  const offset = parseFloat(offsetInput.value);
  const dateVal = measurementDateInput.value;
  const posVal = positionSelector.value;
  if (isNaN(offset) || !dateVal) return;

  const logs = getLogs(currentWatchId);
  logs.push({
    id: 'log_' + Date.now(),
    offset,
    date: dateVal,
    position: posVal || undefined
  });
  saveLogs(currentWatchId, logs);
  updateLogsDisplay();

  offsetInput.value = '';
  positionSelector.value = '';
  setTimeInputToNow();
}

saveLogBtn.addEventListener('click', onSaveLog);

clearLogsBtn.addEventListener('click', () => {
  if (!currentWatchId) return;
  saveLogs(currentWatchId, []);
  updateLogsDisplay();
});

exportCsvBtn.addEventListener('click', () => {
  if (currentWatchId) exportToCsv(currentWatchId);
});

setTimeInputToNow();
loadWatches();
updateDriftProjections(0);

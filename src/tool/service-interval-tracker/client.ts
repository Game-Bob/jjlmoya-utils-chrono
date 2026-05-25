import {
  type Watch,
  state,
} from './helpers';
import { entryHTML } from './renderer';

const UI = JSON.parse((document.querySelector('.svc') as HTMLElement).dataset.ui || '{}');

const KEY = 'chrono-service-intervals';
const intervals: Record<string, number> = { automatic: 4, manual: 4, quartz: 7, kinetic: 5 };

const roster = document.getElementById('svc-roster') as HTMLElement;
const empty = document.getElementById('svc-empty') as HTMLElement;
const emptyBtn = document.getElementById('svc-empty-btn') as HTMLButtonElement;
const summary = document.getElementById('svc-summary') as HTMLElement;
const overlay = document.getElementById('svc-overlay') as HTMLElement;
const modalTitle = document.getElementById('svc-modal-title') as HTMLElement;
const modalX = document.getElementById('svc-modal-x') as HTMLButtonElement;
const modalCancel = document.getElementById('svc-modal-cancel') as HTMLButtonElement;
const modalSave = document.getElementById('svc-modal-save') as HTMLButtonElement;
const modalErr = document.getElementById('svc-modal-err') as HTMLElement;
const addBtn = document.getElementById('svc-add') as HTMLButtonElement;
const nameIn = document.getElementById('svc-name') as HTMLInputElement;
const movIn = document.getElementById('svc-movement') as HTMLSelectElement;
const dateIn = document.getElementById('svc-date') as HTMLInputElement;
const neverIn = document.getElementById('svc-never') as HTMLInputElement;

let ws: Watch[] = [];
let editingId: string | null = null;

function load() {
  try {
    ws = JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    ws = [];
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(ws));
}

function uid(): string {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function renderSummary() {
  const total = ws.length;
  const h = ws.filter((w) => state(w) === 'healthy').length;
  const d = ws.filter((w) => state(w) === 'due').length;
  const o = ws.filter((w) => state(w) === 'overdue').length;

  summary.innerHTML = `
    <div class="svc-stat-card">
      <span class="svc-stat-val">${total}</span>
      <span class="svc-stat-lbl">Collection</span>
    </div>
    <div class="svc-stat-card svc-stat-healthy">
      <span class="svc-stat-val">${h}</span>
      <span class="svc-stat-lbl">${UI.healthy || 'Healthy'}</span>
    </div>
    <div class="svc-stat-card svc-stat-due">
      <span class="svc-stat-val">${d}</span>
      <span class="svc-stat-lbl">${UI.due || 'Due'}</span>
    </div>
    <div class="svc-stat-card svc-stat-overdue">
      <span class="svc-stat-val">${o}</span>
      <span class="svc-stat-lbl">${UI.overdue || 'Overdue'}</span>
    </div>
  `;
}

function openModal(title: string, w?: Watch) {
  modalTitle.textContent = title;
  editingId = w ? w.id : null;
  if (w) {
    nameIn.value = w.name;
    movIn.value = w.movement;
    dateIn.value = w.lastService || '';
    neverIn.checked = !w.lastService;
  } else {
    nameIn.value = '';
    movIn.value = 'automatic';
    dateIn.value = '';
    neverIn.checked = false;
  }
  dateIn.disabled = neverIn.checked;
  modalErr.textContent = '';
  overlay.classList.add('open');
  setTimeout(() => nameIn.focus(), 150);
}

function closeModal() {
  overlay.classList.remove('open');
  editingId = null;
}

function validate(): string | null {
  if (!nameIn.value.trim()) {
    return (UI.nameLabel || 'Name') + ' is required';
  }
  if (!dateIn.value && !neverIn.checked) {
    return (UI.dateLabel || 'Date') + ' is required';
  }
  return null;
}

neverIn.addEventListener('change', () => {
  dateIn.disabled = neverIn.checked;
  if (neverIn.checked) {
    dateIn.value = '';
  }
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

modalX.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    closeModal();
  }
});

modalSave.addEventListener('click', () => {
  const err = validate();
  if (err) {
    modalErr.textContent = err;
    return;
  }
  modalErr.textContent = '';

  const name = nameIn.value.trim();
  const movement = movIn.value;
  const interval = intervals[movement] || 4;
  let lastService: string | null = null;
  if (!neverIn.checked && dateIn.value) {
    lastService = dateIn.value;
  }

  if (editingId) {
    const idx = ws.findIndex((w) => w.id === editingId);
    if (idx >= 0) {
      ws[idx] = { id: editingId, name, movement, lastService, intervalYears: interval };
    }
  } else {
    ws.push({ id: uid(), name, movement, lastService, intervalYears: interval });
  }

  save();
  renderAll();
  closeModal();
});

addBtn.addEventListener('click', () => openModal(UI.addWatch || 'Add Watch'));
emptyBtn.addEventListener('click', () => openModal(UI.addWatch || 'Add Watch'));

function handleWatchDelete(id: string) {
  if (confirm(UI.confirmDelete || 'Remove this watch?')) {
    ws = ws.filter((x) => x.id !== id);
    save();
    renderAll();
  }
}

function handleWatchEdit(id: string) {
  const w = ws.find((x) => x.id === id);
  if (w) {
    openModal(UI.editWatch || 'Edit Watch', w);
  }
}

function handleCardClick(e: Event) {
  const t = e.target as HTMLElement;
  const del = t.closest('.svc-card-del');
  if (del) {
    e.stopPropagation();
    const id = del.getAttribute('data-id');
    if (id) {
      handleWatchDelete(id);
    }
    return;
  }
  const card = t.closest('.svc-card');
  if (card && !card.classList.contains('svc-card-add-placeholder')) {
    const id = card.getAttribute('data-id');
    if (id) {
      handleWatchEdit(id);
    }
  }
}

document.addEventListener('click', handleCardClick);

function renderAll() {
  renderSummary();
  if (!ws.length) {
    empty.style.display = 'block';
    roster.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  roster.style.display = 'grid';
  const ord: Record<string, number> = { overdue: 0, due: 1, healthy: 2, unknown: 3 };
  const sorted = [...ws].sort((a, b) => (ord[state(a)] ?? 4) - (ord[state(b)] ?? 4));
  
  const cardsHTML = sorted.map((w) => entryHTML(w, UI)).join('');
  const addCardHTML = `
    <div class="svc-card svc-card-add-placeholder" id="svc-card-add-placeholder" tabindex="0" role="button">
      <div class="svc-card-add-inner">
        <div class="svc-card-add-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
        <span class="svc-card-add-text">${UI.addWatch || 'Add Watch'}</span>
      </div>
    </div>
  `;
  
  roster.innerHTML = cardsHTML + addCardHTML;
  
  const addPlaceholder = document.getElementById('svc-card-add-placeholder');
  if (addPlaceholder) {
    addPlaceholder.addEventListener('click', () => openModal(UI.addWatch || 'Add Watch'));
  }
}

load();
renderAll();

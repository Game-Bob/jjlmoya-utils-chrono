import {
  type Watch,
  state,
  fmtFull,
  fmtShort,
  nextDate,
  nextLabel,
  pct,
  esc,
  getMovementIcon,
} from './helpers';

function getStatusBadgeClass(s: string): string {
  return `svc-badge-${s}`;
}

function getCardStatusText(s: string, nl: { text: string } | null, UI: Record<string, string>): string {
  if (s === 'healthy') {
    return UI.healthy || 'Healthy';
  }
  if (s === 'due') {
    return nl ? nl.text : (UI.due || 'Due Soon');
  }
  return nl ? nl.text : (UI.overdue || 'Overdue');
}

function dateStr(w: Watch, UI: Record<string, string>): string {
  return w.lastService ? fmtShort(w.lastService) : (UI.newWatch || 'New');
}

function renderCardHeader(w: Watch, icon: string, UI: Record<string, string>): string {
  return `
    <div class="svc-card-header">
      <div class="svc-card-icon-container">${icon}</div>
      <div class="svc-card-title-group">
        <span class="svc-card-name">${esc(w.name)}</span>
        <span class="svc-card-movement">${w.movement}</span>
      </div>
      <button class="svc-card-del" data-id="${w.id}" title="${UI.deleteWatch || 'Remove'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      </button>
    </div>
  `;
}

function renderCardProgress(w: Watch, s: string, statusText: string): string {
  return `
    <div class="svc-card-progress-section">
      <div class="svc-card-progress-info">
        <span class="svc-card-progress-pct">${pct(w)}%</span>
        <span class="svc-card-status-badge ${getStatusBadgeClass(s)}">${statusText}</span>
      </div>
      <div class="svc-card-progress-track">
        <div class="svc-card-progress-bar" style="width: ${pct(w)}%"></div>
      </div>
    </div>
  `;
}

function renderCardInfo(w: Watch, dateText: string, ndStr: string, UI: Record<string, string>): string {
  return `
    <div class="svc-card-info-grid">
      <div class="svc-card-info-item">
        <span class="svc-card-info-lbl">${UI.lastServiceLabel || 'Last service'}</span>
        <span class="svc-card-info-val">${dateText}</span>
      </div>
      <div class="svc-card-info-item">
        <span class="svc-card-info-lbl">${UI.nextServiceLabel || 'Next service'}</span>
        <span class="svc-card-info-val">${ndStr || '\u2014'}</span>
      </div>
    </div>
  `;
}

export function entryHTML(w: Watch, UI: Record<string, string>): string {
  const s = state(w);
  const nl = nextLabel(w);
  const nd = nextDate(w);
  const ndStr = nd ? fmtFull(nd.toISOString()) : '';
  const dateText = dateStr(w, UI);
  const statusText = getCardStatusText(s, nl, UI);
  const icon = getMovementIcon(w.movement);

  return `
    <div class="svc-card svc-card-${s}" data-id="${w.id}" tabindex="0" role="button" title="${UI.editWatch || 'Edit'}">
      ${renderCardHeader(w, icon, UI)}
      ${renderCardProgress(w, s, statusText)}
      ${renderCardInfo(w, dateText, ndStr, UI)}
    </div>
  `;
}

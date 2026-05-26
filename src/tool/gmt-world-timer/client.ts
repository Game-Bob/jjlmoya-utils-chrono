const STORAGE_KEY = 'gmt-world-timer-zones';

interface ZoneItem {
  id: string;
  label: string;
}

const DEFAULT_ZONES: ZoneItem[] = [
  { id: 'America/New_York', label: 'New York' },
  { id: 'Europe/London', label: 'London' },
  { id: 'Europe/Paris', label: 'Paris' },
  { id: 'Asia/Tokyo', label: 'Tokyo' },
];

const ALL_ZONES: ZoneItem[] = [
  { id: 'Pacific/Midway', label: 'Midway' },
  { id: 'Pacific/Honolulu', label: 'Honolulu' },
  { id: 'America/Anchorage', label: 'Anchorage' },
  { id: 'America/Los_Angeles', label: 'Los Angeles' },
  { id: 'America/Denver', label: 'Denver' },
  { id: 'America/Chicago', label: 'Chicago' },
  { id: 'America/New_York', label: 'New York' },
  { id: 'America/Halifax', label: 'Halifax' },
  { id: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires' },
  { id: 'Atlantic/Azores', label: 'Azores' },
  { id: 'Europe/London', label: 'London' },
  { id: 'Europe/Paris', label: 'Paris' },
  { id: 'Europe/Berlin', label: 'Berlin' },
  { id: 'Europe/Madrid', label: 'Madrid' },
  { id: 'Europe/Rome', label: 'Rome' },
  { id: 'Europe/Athens', label: 'Athens' },
  { id: 'Europe/Moscow', label: 'Moscow' },
  { id: 'Asia/Dubai', label: 'Dubai' },
  { id: 'Asia/Karachi', label: 'Karachi' },
  { id: 'Asia/Kolkata', label: 'Kolkata' },
  { id: 'Asia/Dhaka', label: 'Dhaka' },
  { id: 'Asia/Bangkok', label: 'Bangkok' },
  { id: 'Asia/Shanghai', label: 'Shanghai' },
  { id: 'Asia/Singapore', label: 'Singapore' },
  { id: 'Asia/Tokyo', label: 'Tokyo' },
  { id: 'Asia/Seoul', label: 'Seoul' },
  { id: 'Australia/Sydney', label: 'Sydney' },
  { id: 'Pacific/Noumea', label: 'Noumea' },
  { id: 'Pacific/Auckland', label: 'Auckland' },
];

let zones: ZoneItem[] = [];

function loadZones(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: ZoneItem[] = JSON.parse(raw);
      zones = parsed.filter((z) => ALL_ZONES.some((a) => a.id === z.id));
    }
  } catch {
    zones = [];
  }
  if (zones.length === 0) zones = [...DEFAULT_ZONES];
}

function saveZones(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(zones));
}

function getOffsetLabel(tz: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts();
    const off = parts.find((p) => p.type === 'timeZoneName');
    return off ? off.value : '';
  } catch {
    return '';
  }
}

function getZoneDate(tz: string): Date {
  const now = new Date();
  const localMs = now.getMilliseconds();
  const localOff = now.getTimezoneOffset();
  const parts = new Intl.DateTimeFormat('en', { timeZone: tz, timeZoneName: 'longOffset' }).formatToParts(now);
  const offPart = parts.find((p) => p.type === 'timeZoneName');
  if (!offPart || !offPart.value) return now;
  const m = offPart.value.match(/GMT([+-]\d+)(?::(\d+))?/);
  if (!m) return now;
  const sign = m[1].startsWith('+') ? 1 : -1;
  const h = parseInt(m[1].slice(1));
  const min = m[2] ? parseInt(m[2]) : 0;
  const tzOff = sign * (h * 60 + min);
  const utcMs = now.getTime() + localOff * 60000;
  return new Date(utcMs + tzOff * 60000 + localMs * 0);
}

function makeClockSVG(tz: string): string {
  const d = getZoneDate(tz);
  const h = d.getHours() % 12;
  const m = d.getMinutes();
  const s = d.getSeconds();
  const ms = d.getMilliseconds();
  const hA = (h / 12) * 360 + (m / 60) * 30;
  const mA = (m / 60) * 360 + (s / 60) * 6;
  const sA = (s / 60) * 360 + (ms / 1000) * 6;
  const tick = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => {
    const rad = (a - 90) * (Math.PI / 180);
    const r1 = a % 90 === 0 ? 34 : 37;
    const x1 = 50 + r1 * Math.cos(rad);
    const y1 = 50 + r1 * Math.sin(rad);
    const x2 = 50 + 43 * Math.cos(rad);
    const y2 = 50 + 43 * Math.sin(rad);
    const w = a % 90 === 0 ? '1.8' : '1';
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--clock-marks)" stroke-width="${w}" stroke-linecap="round"/>`;
  }).join('');
  return `<svg class="gmt-card-clock" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill="var(--clock-face)" stroke="var(--clock-bezel)" stroke-width="1.6"/>
    ${tick}
    <line x1="50" y1="50" x2="50" y2="27" stroke="var(--clock-hour)" stroke-width="3" stroke-linecap="round" transform="rotate(${hA.toFixed(1)},50,50)"/>
    <line x1="50" y1="50" x2="50" y2="14" stroke="var(--clock-min)" stroke-width="1.8" stroke-linecap="round" transform="rotate(${mA.toFixed(1)},50,50)"/>
    <line x1="50" y1="55" x2="50" y2="8" stroke="var(--clock-sec)" stroke-width="1" stroke-linecap="round" transform="rotate(${sA.toFixed(1)},50,50)"/>
    <circle cx="50" cy="50" r="3" fill="var(--clock-hour)"/>
  </svg>`;
}

function getTimeStr(tz: string): string {
  try {
    return new Intl.DateTimeFormat('en', {
      timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).format(new Date());
  } catch {
    return '--:--:--';
  }
}

function renderCard(z: ZoneItem): string {
  const id = z.id.replace(/\//g, '-');
  return `<div class="gmt-card" data-zone="${z.id}" id="card-${id}">
    <button class="gmt-card-remove" data-remove="${z.id}" aria-label="Remove">&#x2715;</button>
    <div class="gmt-card-clock-w" id="clock-${id}">${makeClockSVG(z.id)}</div>
    <div class="gmt-card-info">
      <div class="gmt-card-city">${z.label}</div>
      <div class="gmt-card-time" id="time-${id}">${getTimeStr(z.id)}</div>
      <div class="gmt-card-offset" id="off-${id}">${getOffsetLabel(z.id)}</div>
    </div>
  </div>`;
}

function renderGrid(): void {
  const grid = document.getElementById('gmt-grid')!;
  grid.innerHTML = zones.map(renderCard).join('');
  grid.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLElement).dataset.remove!;
      removeZone(id);
    });
  });
}

function updateCards(): void {
  for (const z of zones) {
    const id = z.id.replace(/\//g, '-');
    const clockEl = document.getElementById(`clock-${id}`);
    const timeEl = document.getElementById(`time-${id}`);
    if (clockEl) clockEl.innerHTML = makeClockSVG(z.id);
    if (timeEl) timeEl.textContent = getTimeStr(z.id);
  }
  requestAnimationFrame(updateCards);
}

function addZone(z: ZoneItem): void {
  if (zones.some((existing) => existing.id === z.id)) return;
  zones.push(z);
  saveZones();
  renderGrid();
}

function removeZone(id: string): void {
  zones = zones.filter((z) => z.id !== id);
  saveZones();
  renderGrid();
  if (zones.length === 0) {
    zones = [...DEFAULT_ZONES];
    saveZones();
    renderGrid();
  }
}

function filterZones(q: string): ZoneItem[] {
  return ALL_ZONES.filter((z) => {
    const l = z.label.toLowerCase();
    const i = z.id.toLowerCase();
    return l.includes(q) || i.includes(q);
  }).slice(0, 10);
}

function renderDropdownItems(dd: HTMLElement, matches: ZoneItem[]): void {
  dd.innerHTML = matches
    .map((z) => {
      const taken = zones.some((existing) => existing.id === z.id);
      return `<div class="gmt-dd-item ${taken ? 'taken' : ''}" data-add="${z.id}">
        <span>${z.label}</span>
        <span class="gmt-dd-offset">${getOffsetLabel(z.id)}</span>
      </div>`;
    })
    .join('');
  dd.querySelectorAll('[data-add]').forEach((el) => {
    el.addEventListener('click', () => {
      const zid = (el as HTMLElement).dataset.add!;
      const zone = ALL_ZONES.find((z) => z.id === zid);
      if (zone) addZone(zone);
      (document.getElementById('gmt-search') as HTMLInputElement).value = '';
      dd.classList.remove('open');
    });
  });
  dd.classList.add('open');
}

function renderDropdown(query: string): void {
  const dd = document.getElementById('gmt-dropdown')!;
  const q = query.toLowerCase().trim();
  if (!q) { dd.classList.remove('open'); return; }
  const matches = filterZones(q);
  if (matches.length === 0) {
    dd.innerHTML = '<div class="gmt-dd-empty">No cities found</div>';
    dd.classList.add('open');
    return;
  }
  renderDropdownItems(dd, matches);
}

function init(): void {
  loadZones();
  renderGrid();
  requestAnimationFrame(updateCards);

  const search = document.getElementById('gmt-search') as HTMLInputElement;
  const dd = document.getElementById('gmt-dropdown')!;

  search.addEventListener('input', () => renderDropdown(search.value));
  search.addEventListener('focus', () => {
    if (search.value.trim()) renderDropdown(search.value);
  });
  document.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('.gmt-search-w')) {
      dd.classList.remove('open');
    }
  });
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dd.classList.remove('open');
  });
}

init();

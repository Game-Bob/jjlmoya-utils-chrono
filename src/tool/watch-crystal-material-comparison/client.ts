import { CRYSTAL_TYPES, type CrystalData } from './logic';

const STATS = [
  { key: 'hardness', label: 'HARD' },
  { key: 'clarity', label: 'CLAR' },
  { key: 'impactResistance', label: 'IMP' },
  { key: 'scratchResistance', label: 'SCR' },
  { key: 'durability', label: 'DUR' },
] as const;

type StatKeys = typeof STATS[number]['key'];

const listEl = document.getElementById('crystal-list')!;
const cardWrap = document.getElementById('crystal-card-wrap')!;
const fightEl = document.getElementById('crystal-fight')!;
const dragHint = document.getElementById('crystal-drag-hint')!;

let selectedId: string = 'sapphire';
let fightId: string | null = null;
let draggedId: string | null = null;
let hasDragged = false;

function priceGems(level: number): string {
  let h = '';
  for (let i = 0; i < 3; i++) {
    h += '<span class="price-gem' + (i < level ? ' filled' : ' empty') + '"></span>';
  }
  return h;
}

function createSparkles(): string {
  let h = '';
  for (let i = 0; i < 12; i++) {
    const x = 5 + Math.random() * 90;
    const y = 5 + Math.random() * 90;
    h += '<div class="card-sparkle" style="left:' + x + '%;top:' + y + '%;animation-delay:' + (Math.random() * 3) + 's;animation-duration:' + (2 + Math.random() * 3) + 's"></div>';
  }
  return h;
}

function renderCard(crystal: CrystalData): string {
  let h = '<div class="crystal-card-big" style="background:' + crystal.colorBg + '">';
  h += '<div class="card-orb" style="background:' + crystal.color + '"></div>';
  h += '<div class="card-gold-accent"></div><div class="card-pattern"></div>';
  h += '<div class="card-sparkles">' + createSparkles() + '</div>';
  h += '<div class="card-header">';
  h += '<div class="card-ovr-wrap"><div class="card-ovr-ring"></div><div class="card-ovr" style="background:' + crystal.color + '"><span class="card-ovr-num">' + crystal.overall + '</span><span class="card-ovr-label">OVR</span></div></div>';
  h += '<div class="card-title"><span class="card-name">' + crystal.name + '</span><span class="card-name-sub">Watch Crystal</span></div>';
  h += '<div class="card-price-gems">' + priceGems(crystal.priceLevel) + '</div></div>';
  h += '<div class="card-stats">';
  for (let i = 0; i < STATS.length; i++) {
    const val = crystal[STATS[i].key as StatKeys] as number;
    h += '<div class="card-stat" style="animation-delay:' + (i * 0.07) + 's">';
    h += '<span class="card-stat-label">' + STATS[i].label + '</span>';
    h += '<div class="card-stat-bar"><div class="card-stat-bar-glow"></div><div class="card-stat-fill" style="width:' + val + '%;background:' + crystal.color + '"></div></div>';
    h += '<span class="card-stat-val">' + val + '</span></div>';
  }
  h += '</div></div>';
  return h;
}

function updateCard(crystal: CrystalData) {
  const existing = cardWrap.querySelector('.crystal-card-big');
  if (existing) {
    existing.classList.add('card-leaving');
    setTimeout(() => {
      cardWrap.innerHTML = renderCard(crystal);
      const el = cardWrap.querySelector('.crystal-card-big');
      if (el) el.classList.add('card-entering');
    }, 200);
  } else {
    cardWrap.innerHTML = renderCard(crystal);
    const el = cardWrap.querySelector('.crystal-card-big');
    if (el) el.classList.add('card-entering');
  }
}

function renderList() {
  let h = '';
  for (const c of CRYSTAL_TYPES) {
    const active = c.id === selectedId ? ' active' : '';
    h += '<div class="crystal-list-item' + active + '" data-id="' + c.id + '" draggable="true">';
    h += '<div class="list-grip"><span></span><span></span><span></span></div>';
    h += '<div class="list-ovr" style="background:' + c.color + '">' + c.overall + '</div>';
    h += '<div class="list-info"><span class="list-name">' + c.name + '</span><span class="list-hint">Drag to compare</span></div></div>';
  }
  listEl.innerHTML = h;
}

function renderFight() {
  if (!fightId) { fightEl.innerHTML = ''; return; }
  const f1 = CRYSTAL_TYPES.find(c => c.id === selectedId) || CRYSTAL_TYPES[0];
  const f2 = CRYSTAL_TYPES.find(c => c.id === fightId) || CRYSTAL_TYPES[0];
  let h = '<div class="crystal-fight"><div class="crystal-fight-grid">';
  h += renderCard(f1) + '<div class="crystal-fight-vs">VS</div>' + renderCard(f2);
  h += '</div><button class="crystal-fight-close" id="fight-close">Close Comparison</button></div>';
  fightEl.innerHTML = h;
  document.getElementById('fight-close')?.addEventListener('click', () => {
    fightId = null;
    render();
  });
}

function handleDrop(e: Event, itemId: string) {
  e.preventDefault();
  const target = e.currentTarget as HTMLElement;
  target.classList.remove('drag-over');
  const dropId = (e as DragEvent).dataTransfer?.getData('text/plain');
  if (dropId && dropId !== itemId) {
    selectedId = dropId;
    fightId = itemId;
    render();
  }
}

function bindItem(item: Element) {
  const id = (item as HTMLElement).dataset.id || '';
  item.addEventListener('click', () => {
    if (fightId) fightId = null;
    selectedId = id;
    render();
  });
  item.addEventListener('dragstart', (e: Event) => {
    (e as DragEvent).dataTransfer?.setData('text/plain', id);
    draggedId = id;
    hasDragged = true;
    item.classList.add('dragging');
  });
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
    draggedId = null;
  });
  item.addEventListener('dragover', (e: Event) => {
    e.preventDefault();
    if (id !== draggedId) item.classList.add('drag-over');
  });
  item.addEventListener('dragleave', () => { item.classList.remove('drag-over'); });
  item.addEventListener('drop', (e: Event) => handleDrop(e, id));
}

function render() {
  renderList();
  const mainCrystal = CRYSTAL_TYPES.find(c => c.id === selectedId) || CRYSTAL_TYPES[0];
  updateCard(mainCrystal);
  renderFight();
  dragHint.classList.toggle('dimmed', hasDragged);
  listEl.querySelectorAll('.crystal-list-item').forEach(bindItem);
}

render();

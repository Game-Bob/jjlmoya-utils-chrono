interface Goal {
  id: string;
  name: string;
  price: number;
  saved: number;
  monthly: number;
  _celebrated?: boolean;
}

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

let goals: Goal[] = [];
let editingId: string | null = null;

const totalSavedEl = document.getElementById('total-saved') as HTMLElement;
const totalGoalsEl = document.getElementById('total-goals') as HTMLElement;
const goalsList = document.getElementById('goals-list') as HTMLElement;
const triggerBtn = document.getElementById('add-goal-trigger') as HTMLButtonElement;
const form = document.getElementById('add-goal-form') as HTMLElement;
const formClose = document.getElementById('form-close') as HTMLButtonElement;
const formSubmit = document.getElementById('form-submit') as HTMLButtonElement;
const nameInput = document.getElementById('goal-name') as HTMLInputElement;
const priceInput = document.getElementById('goal-price') as HTMLInputElement;
const savedInput = document.getElementById('goal-saved') as HTMLInputElement;
const monthlySlider = document.getElementById('goal-monthly') as HTMLInputElement;
const monthlyDisplay = document.getElementById('monthly-display') as HTMLElement;
const template = document.getElementById('goal-card-template') as HTMLTemplateElement;

const STORAGE_KEY = 'watch-savings-goals';
const TIMESTAMP_KEY = 'watch-savings-timestamp';
const CURRENCY_CODE = ui.currency || 'USD';
const FMT = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: CURRENCY_CODE, minimumFractionDigits: 0, maximumFractionDigits: 0 });
const confettiColors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899'];

function autoSimulate() {
  const last = parseInt(localStorage.getItem(TIMESTAMP_KEY) || '0', 10);
  const now = Date.now();
  if (!last || goals.length === 0) { localStorage.setItem(TIMESTAMP_KEY, String(now)); return; }
  const msPerMonth = 30.44 * 24 * 60 * 60 * 1000;
  const monthsPassed = Math.floor((now - last) / msPerMonth);
  if (monthsPassed < 1) return;
  for (const g of goals) {
    if (g.saved < g.price) {
      g.saved = Math.min(g.saved + g.monthly * monthsPassed, g.price);
    }
  }
  localStorage.setItem(TIMESTAMP_KEY, String(now));
  saveGoals();
}

function loadGoals() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    goals = raw ? JSON.parse(raw) : [];
  } catch {
    goals = [];
  }
}

function saveGoals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
}

function fmt(amount: number): string {
  if (amount >= 1000) return FMT(amount);
  return FMT(amount);
}

function fmtFull(amount: number): string {
  return FMT(amount);
}

function calcMonths(g: Goal): number {
  const remaining = g.price - g.saved;
  if (remaining <= 0) return 0;
  if (g.monthly <= 0) return Infinity;
  return Math.ceil(remaining / g.monthly);
}

function calcDate(months: number): string {
  if (months === 0) return ui.now || 'Now';
  if (!isFinite(months)) return '\u2014';
  const d = new Date();
  d.setMonth(d.getMonth() + months);
  return d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
}

function updateSummary() {
  const total = goals.reduce((sum, g) => sum + g.saved, 0);
  totalSavedEl.textContent = fmt(total);
  totalGoalsEl.textContent = String(goals.length);
}

function renderEmptyState() {
  goalsList.innerHTML = `
    <div class="goals-empty">
      <svg viewBox="0 0 24 24" width="48" height="48" opacity="0.3">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
      </svg>
      <p class="empty-title">${ui.goalsEmpty || 'No savings goals yet'}</p>
      <p class="empty-sub">${ui.goalsEmptySub || 'Set your first watch goal and start saving!'}</p>
    </div>`;
}

function setCardText(clone: DocumentFragment, sel: string, text: string) {
  (clone.querySelector(sel) as HTMLElement).textContent = text;
}

function renderGoalCard(goal: Goal) {
  const clone = template.content.cloneNode(true) as DocumentFragment;
  const card = clone.querySelector('.goal-card') as HTMLElement;
  card.dataset.id = goal.id;

  const achieved = goal.saved >= goal.price;
  const percent = Math.min(100, Math.round((goal.saved / goal.price) * 100));

  setCardText(clone, '.goal-name', goal.name);
  setCardText(clone, '.goal-price', fmtFull(goal.price));
  setCardText(clone, '.goal-saved', fmtFull(Math.min(goal.saved, goal.price)));
  setCardText(clone, '.goal-monthly', fmtFull(goal.monthly));
  setCardText(clone, '.goal-date', achieved ? (ui.now || 'Now') : calcDate(calcMonths(goal)));

  (clone.querySelector('.goal-ring-fill') as SVGElement).setAttribute('stroke-dashoffset', String(326.73 * (1 - percent / 100)));
  setCardText(clone, '.goal-percent', `${percent}%`);

  if (achieved) {
    card.classList.add('goal-achieved');
    const badge = clone.querySelector('.goal-achieved-badge') as HTMLElement;
    badge.style.display = 'inline-flex';
    setCardText(clone, '.goal-ring-label', ui.goalAchieved || 'Achieved!');
  }

  const slider = clone.querySelector('.goal-slider') as HTMLInputElement;
  slider.value = String(goal.monthly);

  (clone.querySelector('.goal-delete') as HTMLButtonElement).addEventListener('click', () => deleteGoal(goal.id));
  slider.addEventListener('input', () => {
    goal.monthly = parseInt(slider.value, 10);
    saveGoals();
    renderGoals();
  });

  goalsList.appendChild(clone);
}

function renderGoals() {
  goalsList.innerHTML = '';
  if (goals.length === 0) { renderEmptyState(); return; }
  for (const goal of goals) renderGoalCard(goal);
  checkAchievements();
}

function checkAchievements() {
  for (const g of goals) {
    if (g.saved >= g.price && !g._celebrated) {
      celebrate();
      g._celebrated = true;
      saveGoals();
    }
  }
}

function celebrate() {
  const rect = goalsList.getBoundingClientRect();
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
  const parts = [];
  for (let i = 0; i < 60; i++) {
    const a = Math.random() * Math.PI * 2, s = Math.random() * 8 + 4;
    parts.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3, color: confettiColors[Math.floor(Math.random() * confettiColors.length)], life: 0, maxLife: Math.random() * 80 + 60, size: Math.random() * 6 + 3 });
  }
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, { position: 'fixed', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '9999' });
  canvas.width = innerWidth; canvas.height = innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d')!;
  (function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of parts) { p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life++; const a = 1 - p.life / p.maxLife; if (a <= 0) continue; ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = p.color; ctx.translate(p.x, p.y); ctx.rotate(p.life * 0.1); ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6); ctx.restore(); }
    if (parts.some(p => p.life < p.maxLife)) requestAnimationFrame(frame); else canvas.remove();
  })();
}

function deleteGoal(id: string) {
  goals = goals.filter((g) => g.id !== id);
  saveGoals();
  renderGoals();
  updateSummary();
}

function getGoalDefaults(goal?: Goal) {
  const g = goal;
  return {
    name: g ? g.name : '',
    price: g ? g.price : 5000,
    saved: g ? g.saved : 0,
    monthly: g ? g.monthly : 200,
    id: g ? g.id : null,
  };
}

function openForm(goal?: Goal) {
  const d = getGoalDefaults(goal);
  editingId = d.id;
  nameInput.value = d.name;
  priceInput.value = String(d.price);
  savedInput.value = String(d.saved);
  monthlySlider.value = String(d.monthly);
  monthlyDisplay.textContent = FMT(parseInt(monthlySlider.value, 10));
  formSubmit.textContent = editingId ? ui.saveGoal || 'Save' : ui.addButton || 'Add Goal';
  form.style.display = 'block';
  triggerBtn.style.display = 'none';
  nameInput.focus();
}

function closeForm() {
  form.style.display = 'none';
  triggerBtn.style.display = 'flex';
  editingId = null;
}

function getFormValues() {
  return {
    name: nameInput.value.trim() || 'Watch',
    price: Math.max(1, parseInt(priceInput.value, 10) || 5000),
    saved: Math.max(0, parseInt(savedInput.value, 10) || 0),
    monthly: Math.max(10, parseInt(monthlySlider.value, 10) || 200),
  };
}

monthlySlider.addEventListener('input', () => {
  monthlyDisplay.textContent = FMT(parseInt(monthlySlider.value, 10));
});

triggerBtn.addEventListener('click', () => openForm());

formClose.addEventListener('click', closeForm);

formSubmit.addEventListener('click', () => {
  const { name, price, saved, monthly } = getFormValues();

  if (editingId) {
    const goal = goals.find((g) => g.id === editingId);
    if (goal) { goal.name = name; goal.price = price; goal.saved = saved; goal.monthly = monthly; }
  } else {
    goals.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name, price, saved, monthly, _celebrated: false,
    });
  }

  saveGoals();
  closeForm();
  renderGoals();
  updateSummary();
});

const simBtn = document.getElementById('sim-month-btn') as HTMLButtonElement;
if (simBtn) {
  simBtn.addEventListener('click', () => {
    for (const g of goals) {
      if (g.saved < g.price) g.saved = Math.min(g.saved + g.monthly, g.price);
    }
    localStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
    saveGoals();
    renderGoals();
    updateSummary();
  });
}

loadGoals(); autoSimulate(); renderGoals(); updateSummary();

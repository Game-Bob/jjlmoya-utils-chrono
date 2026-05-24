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
const CURRENCY = '$';
const confettiColors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899'];

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
  if (amount >= 1000) return `${CURRENCY}${(amount / 1000).toFixed(1)}k`;
  return `${CURRENCY}${Math.round(amount)}`;
}

function fmtFull(amount: number): string {
  return `${CURRENCY}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function calcMonths(g: Goal): number {
  const remaining = g.price - g.saved;
  if (remaining <= 0) return 0;
  if (g.monthly <= 0) return Infinity;
  return Math.ceil(remaining / g.monthly);
}

function calcDate(months: number): string {
  if (months === 0) return 'Now!';
  if (!isFinite(months)) return '\u2014';
  const d = new Date();
  d.setMonth(d.getMonth() + months);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
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
  setCardText(clone, '.goal-date', achieved ? 'Now!' : calcDate(calcMonths(goal)));

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

const particles: Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number; maxLife: number; size: number }> = [];
let confettiFrame: number | null = null;

function celebrate() {
  const rect = goalsList.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 4;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      life: 0,
      maxLife: Math.random() * 80 + 60,
      size: Math.random() * 6 + 3,
    });
  }

  if (confettiFrame) cancelAnimationFrame(confettiFrame);
  animateConfetti();
}

function drawParticles(ctx: CanvasRenderingContext2D) {
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15;
    p.life++;
    const a = 1 - p.life / p.maxLife;
    if (a <= 0) continue;
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.life * 0.1);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    ctx.restore();
  }
}

function animateConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d')!;

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles(ctx);
    const alive = particles.some((p) => p.life < p.maxLife);
    if (alive) {
      confettiFrame = requestAnimationFrame(frame);
    } else {
      canvas.remove();
      confettiFrame = null;
    }
  }

  frame();
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
  monthlyDisplay.textContent = `${CURRENCY}${monthlySlider.value}`;
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
  monthlyDisplay.textContent = `${CURRENCY}${monthlySlider.value}`;
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

loadGoals(); renderGoals(); updateSummary();

import { MOVEMENTS } from './movements';
import type { GearDef, MovementDef } from './movements';

const root = document.querySelector('[data-gte-root]') as HTMLElement | null;

if (root) {
  const canvas = root.querySelector('[data-gte-canvas]') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const labels = JSON.parse(root.dataset.ui || '{}') as Record<string, string>;

  if (ctx) {
    const refWidth = 900;
    const refHeight = 520;
    let movement: MovementDef = MOVEMENTS['2824'];
    let speed = 1;
    let activePart: number | null = null;
    let lastTime = performance.now();
    const angles = new Map<string, number>();

    function activeMovementButtons(): NodeListOf<HTMLButtonElement> {
      return root.querySelectorAll('[data-gte-movement]');
    }

    function activeSpeedButtons(): NodeListOf<HTMLButtonElement> {
      return root.querySelectorAll('[data-gte-speed]');
    }

    function value(name: string): HTMLElement | null {
      return root.querySelector(`[data-gte-value="${name}"]`);
    }

    function resize(): void {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const cssWidth = Math.max(280, rect?.width || refWidth);
      const cssHeight = cssWidth * refHeight / refWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      ctx.setTransform(cssWidth / refWidth * dpr, 0, 0, cssHeight / refHeight * dpr, 0, 0);
    }

    function formatGearSpeed(gear: GearDef): string {
      if (gear.id === 'barrel' || gear.id === 'center' || gear.id === 'third') {
        return `${(gear.rpm * 60).toFixed(gear.id === 'barrel' ? 2 : 1)}/h`;
      }
      return `${gear.rpm.toFixed(gear.id === 'escape' ? 0 : 1)} rpm`;
    }

    function updateStats(): void {
      movement.gears.forEach((gear) => {
        const target = value(gear.id);
        if (target) target.textContent = `${formatGearSpeed(gear)} · ${gear.teeth}t`;
      });
      const pallet = value('pallet');
      const balance = value('balance');
      if (pallet) pallet.textContent = `${movement.pallet.bph} bph`;
      if (balance) balance.textContent = `${movement.balance.hz} Hz · ${movement.balance.vph} vph`;
    }

    function setActivePart(part: number | null): void {
      activePart = part;
      root.querySelectorAll('[data-gte-part]').forEach((card) => {
        card.classList.toggle('is-active', Number((card as HTMLElement).dataset.gtePart) === part);
      });
      root.querySelectorAll('[data-gte-flow]').forEach((step) => {
        const index = Number((step as HTMLElement).dataset.gteFlow);
        step.classList.toggle('is-active', part !== null && index <= part);
      });
    }

    function switchMovement(id: string): void {
      movement = MOVEMENTS[id] || MOVEMENTS['2824'];
      angles.clear();
      activeMovementButtons().forEach((button) => {
        button.classList.toggle('is-active', button.dataset.gteMovement === id);
      });
      updateStats();
    }

    function setSpeed(nextSpeed: number): void {
      speed = nextSpeed;
      activeSpeedButtons().forEach((button) => {
        button.classList.toggle('is-active', Number(button.dataset.gteSpeed) === speed);
      });
    }

    function drawGearShape(gear: GearDef, highlighted: boolean): void {
      ctx.save();
      ctx.translate(gear.x, gear.y);
      ctx.rotate(angles.get(gear.id) || 0);
      ctx.beginPath();
      ctx.arc(0, 0, gear.r, 0, Math.PI * 2);
      ctx.fillStyle = highlighted ? '#facc15' : gear.color;
      ctx.strokeStyle = highlighted ? '#fff7cc' : 'rgba(255,255,255,0.28)';
      ctx.lineWidth = highlighted ? 4 : 2;
      ctx.fill();
      ctx.stroke();

      const teeth = Math.min(gear.teeth, 48);
      for (let i = 0; i < teeth; i += 1) {
        const a = i / teeth * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * (gear.r - 4), Math.sin(a) * (gear.r - 4));
        ctx.lineTo(Math.cos(a) * (gear.r + 7), Math.sin(a) * (gear.r + 7));
        ctx.strokeStyle = 'rgba(17,24,39,0.55)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(0, 0, Math.max(8, gear.r * 0.18), 0, Math.PI * 2);
      ctx.fillStyle = '#111827';
      ctx.fill();
      ctx.restore();
    }

    function drawGear(gear: GearDef, index: number): void {
      const highlighted = activePart === index;
      drawGearShape(gear, highlighted);
      ctx.fillStyle = highlighted ? '#fff7cc' : 'rgba(255,255,255,0.72)';
      ctx.font = '700 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(gear.label, gear.x, gear.y + gear.r + 24);
    }

    function drawPallet(time: number): void {
      ctx.save();
      ctx.translate(movement.pallet.x, movement.pallet.y);
      ctx.rotate(Math.sin(time / 100) * 0.25);
      ctx.strokeStyle = activePart === 5 ? '#facc15' : '#38bdf8';
      ctx.lineWidth = activePart === 5 ? 8 : 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-28, 0);
      ctx.lineTo(0, -18);
      ctx.lineTo(28, 0);
      ctx.stroke();
      ctx.restore();
    }

    function drawBalance(time: number): void {
      ctx.save();
      ctx.translate(movement.balance.x, movement.balance.y);
      ctx.rotate(Math.sin(time / 120) * 0.75);
      ctx.beginPath();
      ctx.arc(0, 0, movement.balance.r + 18, 0, Math.PI * 2);
      ctx.strokeStyle = activePart === 6 ? '#facc15' : '#38bdf8';
      ctx.lineWidth = activePart === 6 ? 6 : 4;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-(movement.balance.r + 12), 0);
      ctx.lineTo(movement.balance.r + 12, 0);
      ctx.moveTo(0, -(movement.balance.r + 12));
      ctx.lineTo(0, movement.balance.r + 12);
      ctx.strokeStyle = 'rgba(255,255,255,0.58)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    function drawEscapement(time: number): void {
      drawPallet(time);
      drawBalance(time);
    }

    function drawScene(time: number): void {
      ctx.clearRect(0, 0, refWidth, refHeight);
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, refWidth, refHeight);

      ctx.strokeStyle = 'rgba(212,175,55,0.28)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      movement.gears.forEach((gear, index) => {
        if (index === 0) ctx.moveTo(gear.x, gear.y);
        else ctx.lineTo(gear.x, gear.y);
      });
      ctx.lineTo(movement.pallet.x, movement.pallet.y);
      ctx.lineTo(movement.balance.x, movement.balance.y);
      ctx.stroke();

      movement.gears.forEach((gear, index) => drawGear(gear, index));
      drawEscapement(time);

      ctx.fillStyle = 'rgba(255,255,255,0.78)';
      ctx.font = '800 18px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${movement.label} · ${labels.gearRatioLabel || 'Gear train'}`, 24, 34);
    }

    function tick(time: number): void {
      const delta = Math.min(40, time - lastTime);
      lastTime = time;
      if (speed > 0) {
        movement.gears.forEach((gear) => {
          angles.set(gear.id, (angles.get(gear.id) || 0) + gear.visualSpeed * speed * delta * 0.018);
        });
      }
      drawScene(time);
      requestAnimationFrame(tick);
    }

    function partFromPoint(clientX: number, clientY: number): number | null {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width * refWidth;
      const y = (clientY - rect.top) / rect.height * refHeight;
      const gearIndex = movement.gears.findIndex((gear) => Math.hypot(x - gear.x, y - gear.y) <= gear.r + 12);
      if (gearIndex >= 0) return gearIndex;
      if (Math.hypot(x - movement.pallet.x, y - movement.pallet.y) < 42) return 5;
      if (Math.hypot(x - movement.balance.x, y - movement.balance.y) < movement.balance.r + 28) return 6;
      return null;
    }

    activeMovementButtons().forEach((button) => {
      button.addEventListener('click', () => switchMovement(button.dataset.gteMovement || '2824'));
    });

    activeSpeedButtons().forEach((button) => {
      button.addEventListener('click', () => setSpeed(Number(button.dataset.gteSpeed || '1')));
    });

    root.querySelectorAll('[data-gte-part]').forEach((card) => {
      card.addEventListener('mouseenter', () => setActivePart(Number((card as HTMLElement).dataset.gtePart)));
      card.addEventListener('focus', () => setActivePart(Number((card as HTMLElement).dataset.gtePart)));
      card.addEventListener('mouseleave', () => setActivePart(null));
      card.addEventListener('blur', () => setActivePart(null));
    });

    canvas.addEventListener('mousemove', (event) => setActivePart(partFromPoint(event.clientX, event.clientY)));
    canvas.addEventListener('mouseleave', () => setActivePart(null));

    new ResizeObserver(resize).observe(root);
    resize();
    updateStats();
    requestAnimationFrame(tick);
  }
}

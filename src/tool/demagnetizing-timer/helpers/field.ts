export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export class MagneticField {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number | null = null;
  private active = false;
  private cx = 0;
  private cy = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
  }

  resize() {
    const rect = this.canvas.parentElement!.getBoundingClientRect();
    const size = Math.min(rect.width, 260);
    this.canvas.width = size;
    this.canvas.height = size;
    this.cx = size / 2;
    this.cy = size / 2;
  }

  start() {
    this.active = true;
    this.particles = [];
    const count = Math.floor(this.cx * 0.3);
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
    this.animate();
  }

  stop() {
    this.active = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private createParticle(): Particle {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.cx * 0.7 + 10;
    return {
      x: this.cx + Math.cos(angle) * dist,
      y: this.cy + Math.sin(angle) * dist,
      vx: 0,
      vy: 0,
      radius: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      life: 0,
      maxLife: Math.random() * 120 + 60,
    };
  }

  private updateParticles(color: string) {
    const ctx = this.ctx;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      const dx = this.cx - p.x;
      const dy = this.cy - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const force = 200 / (dist + 1);
      p.vx += (dx / dist) * force * 0.008;
      p.vy += (dy / dist) * force * 0.008;

      p.vx *= 0.94;
      p.vy *= 0.94;
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      const radialAlpha = 1 - dist / (this.cx * 0.9);
      const a = p.alpha * Math.min(radialAlpha, 1) * (1 - p.life / p.maxLife);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${Math.max(a, 0)})`;
      ctx.fill();

      if (p.life >= p.maxLife || dist > this.cx * 0.95) {
        this.particles[i] = this.createParticle();
      }
    }
  }

  private animate = () => {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const isDark = document.documentElement.classList.contains('theme-dark');
    const color = isDark ? '129, 140, 248' : '99, 102, 241';

    this.updateParticles(color);
    this.drawFieldLines(color);
    this.animationId = requestAnimationFrame(this.animate);
  };

  private drawFieldLines(color: string) {
    const ctx = this.ctx;
    const time = Date.now() / 1000;

    for (let ring = 0; ring < 3; ring++) {
      const baseR = this.cx * (0.25 + ring * 0.18);
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.04) {
        const wobble = Math.sin(a * 4 + time * (1.5 - ring * 0.4)) * 4;
        const r = baseR + wobble;
        const x = this.cx + Math.cos(a) * r;
        const y = this.cy + Math.sin(a) * r;
        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${color}, ${0.08 - ring * 0.025})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }
}

interface LumePreset {
  id: string;
  dayColor: [number, number, number];
  nightColor: [number, number, number];
  name: string;
  colorName: string;
}

const LUME_PRESETS: Record<string, LumePreset> = {
  c1: { id: 'c1', dayColor: [200, 230, 201], nightColor: [80, 200, 80], name: 'C1', colorName: 'Classic Green' },
  c3: { id: 'c3', dayColor: [165, 214, 167], nightColor: [50, 220, 60], name: 'C3', colorName: 'Super Green' },
  bgw9: { id: 'bgw9', dayColor: [224, 231, 255], nightColor: [90, 160, 255], name: 'BGW9', colorName: 'Ice Blue' },
  luminova: { id: 'luminova', dayColor: [215, 204, 200], nightColor: [180, 200, 180], name: 'LumiNova', colorName: 'Warm White' },
  vintage: { id: 'vintage', dayColor: [188, 170, 164], nightColor: [140, 120, 80], name: 'Vintage', colorName: 'Aged Radium' },
  orange: { id: 'orange', dayColor: [255, 204, 128], nightColor: [255, 130, 30], name: 'Orange', colorName: 'Diver Orange' },
  blue: { id: 'blue', dayColor: [144, 202, 249], nightColor: [40, 100, 220], name: 'Blue', colorName: 'Deep Blue' },
  green: { id: 'green', dayColor: [129, 199, 132], nightColor: [30, 200, 50], name: 'Green', colorName: 'Neon Green' },
};

const canvas = document.getElementById('lume-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const slider = document.getElementById('brightness-slider') as HTMLInputElement;
const presetBtns = document.querySelectorAll('.preset-btn') as NodeListOf<HTMLElement>;
const infoType = document.getElementById('info-type') as HTMLElement;
const infoColor = document.getElementById('info-color') as HTMLElement;
const infoHex = document.getElementById('info-hex') as HTMLElement;
const infoRgb = document.getElementById('info-rgb') as HTMLElement;

let activeLume = 'c1';

function lerpColor(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

function getBrightness(): number {
  return parseInt(slider.value) / 100;
}

function drawBackground(h: number, w: number, brightness: number): void {
  const bgBrightness = Math.round(brightness * 180) + 20;
  ctx.fillStyle = `rgb(${bgBrightness}, ${bgBrightness}, ${Math.round(bgBrightness * 0.95)})`;
  ctx.fillRect(0, 0, w, h);
}

function drawWatchBody(cx: number, cy: number, radius: number, brightness: number): void {
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = brightness < 0.4 ? `rgb(${Math.round(brightness * 180 + 5)}, ${Math.round(brightness * 180 + 5)}, ${Math.round(brightness * 180 + 5)})` : '#333';
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = brightness < 0.4 ? '#444' : '#555';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, radius - 8, 0, Math.PI * 2);
  ctx.fillStyle = brightness < 0.4 ? '#3a3a3a' : '#4a4a4a';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, radius - 14, 0, Math.PI * 2);
  ctx.fillStyle = brightness < 0.3 ? '#2a2a2a' : '#3a3a3a';
  ctx.fill();
}

function drawLumeMarkers(o: { cx: number; cy: number; radius: number; preset: LumePreset; brightness: number }): void {
  const { cx, cy, radius, preset, brightness } = o;
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180;
    const mx = cx + Math.cos(angle) * (radius - 28);
    const my = cy + Math.sin(angle) * (radius - 28);
    const markerSize = i % 3 === 0 ? 5 : 3;
    const markerBrightness = i % 3 === 0 ? 1 : 0.8;
    const markerColor = lerpColor(preset.nightColor, preset.dayColor, brightness * markerBrightness);

    ctx.beginPath();
    ctx.arc(mx, my, markerSize, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${markerColor[0]}, ${markerColor[1]}, ${markerColor[2]})`;

    if (brightness < 0.5) {
      ctx.save();
      ctx.shadowColor = `rgb(${markerColor[0]}, ${markerColor[1]}, ${markerColor[2]})`;
      ctx.shadowBlur = (1 - brightness) * 20;
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fill();
    }
  }
}

function drawLumeHands(cx: number, cy: number, color: [number, number, number], brightness: number): void {
  const hands = [
    { length: 34, width: 2.5, angle: -60 },
    { length: 42, width: 2, angle: 15 },
  ];

  for (const hand of hands) {
    const angle = (hand.angle - 90) * Math.PI / 180;
    const hx = cx + Math.cos(angle) * hand.length;
    const hy = cy + Math.sin(angle) * hand.length;

    ctx.save();
    ctx.shadowColor = brightness < 0.5 ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : 'transparent';
    ctx.shadowBlur = brightness < 0.5 ? (1 - brightness) * 15 : 0;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(hx, hy);
    ctx.strokeStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.lineWidth = hand.width;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  ctx.fill();
}

function drawLabel(cx: number, h: number, preset: LumePreset, brightness: number): void {
  ctx.fillStyle = brightness < 0.5 ? '#aaa' : '#666';
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(
    `${preset.name} \u00b7 ${Math.round((1 - brightness) * 100)}% glow`,
    cx, h - 12
  );
}

function updateInfo(preset: LumePreset, brightness: number): void {
  const color = lerpColor(preset.nightColor, preset.dayColor, brightness);
  infoType.textContent = preset.name;
  infoColor.textContent = preset.colorName;
  infoHex.textContent = rgbToHex(color[0], color[1], color[2]);
  infoRgb.textContent = `${color[0]}, ${color[1]}, ${color[2]}`;
}

function drawLume(): void {
  const preset = LUME_PRESETS[activeLume];
  if (!preset) return;

  const brightness = getBrightness();
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const radius = 62;

  drawBackground(H, W, brightness);
  drawWatchBody(cx, cy, radius, brightness);
  drawLumeMarkers({ cx, cy, radius, preset, brightness });

  const color = lerpColor(preset.nightColor, preset.dayColor, brightness);
  drawLumeHands(cx, cy, color, brightness);
  drawLabel(cx, H, preset, brightness);
  updateInfo(preset, brightness);
}

presetBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    presetBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeLume = btn.dataset.lume || 'c1';
    drawLume();
  });
});

slider.addEventListener('input', drawLume);

drawLume();

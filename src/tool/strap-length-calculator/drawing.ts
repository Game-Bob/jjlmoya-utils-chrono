function createSvgElement(tag: string, attrs: Record<string, string>): SVGElement {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

export interface FlatLayoutParams {
  svg: SVGSVGElement;
  wrist: number;
  lug: number;
  totalStrap: number;
  bespokeLong: number;
  bespokeShort: number;
}

function drawShortStrap(
  svg: SVGSVGElement,
  startX: number,
  centerY: number,
  shortWidth: number,
): void {
  svg.appendChild(createSvgElement('rect', {
    x: startX.toString(),
    y: (centerY - 12).toString(),
    width: shortWidth.toString(),
    height: '24',
    rx: '4',
    fill: 'rgba(160, 110, 80, 0.85)',
    stroke: 'rgba(160, 110, 80, 0.95)',
    'stroke-width': '1.5',
  }));
  svg.appendChild(createSvgElement('rect', {
    x: (startX - 14).toString(),
    y: (centerY - 16).toString(),
    width: '14',
    height: '32',
    rx: '3',
    fill: 'var(--border-color, #ccc)',
    stroke: 'var(--text-base, #888)',
    'stroke-width': '1.5',
  }));
}

function drawWatchCase(
  svg: SVGSVGElement,
  watchX: number,
  centerY: number,
  watchWidth: number,
): void {
  svg.appendChild(createSvgElement('rect', {
    x: watchX.toString(),
    y: (centerY - 22).toString(),
    width: watchWidth.toString(),
    height: '44',
    rx: '22',
    fill: 'rgba(230, 230, 235, 0.15)',
    stroke: 'var(--border-color, #bbb)',
    'stroke-width': '2',
  }));
  svg.appendChild(createSvgElement('circle', {
    cx: (watchX + watchWidth / 2).toString(),
    cy: centerY.toString(),
    r: '16',
    fill: 'rgba(255, 255, 255, 0.05)',
    stroke: 'var(--border-color, #bbb)',
    'stroke-width': '1.5',
  }));
}

function drawLongStrap(
  svg: SVGSVGElement,
  longX: number,
  centerY: number,
  longWidth: number,
): void {
  svg.appendChild(createSvgElement('rect', {
    x: longX.toString(),
    y: (centerY - 12).toString(),
    width: longWidth.toString(),
    height: '24',
    rx: '4',
    fill: 'rgba(160, 110, 80, 0.85)',
    stroke: 'rgba(160, 110, 80, 0.95)',
    'stroke-width': '1.5',
  }));
}

function drawStrapHoles(
  svg: SVGSVGElement,
  longX: number,
  centerY: number,
  holeParams: { scale: number; longWidth: number },
): void {
  const holeCount = 7;
  const holeSpacing = 6.5 * holeParams.scale;
  const firstHoleOffset = 35 * holeParams.scale;
  for (let i = 0; i < holeCount; i++) {
    const hx = longX + firstHoleOffset + (i * holeSpacing);
    if (hx < longX + holeParams.longWidth - 8) {
      svg.appendChild(createSvgElement('circle', {
        cx: hx.toString(),
        cy: centerY.toString(),
        r: '2',
        fill: 'rgba(0, 0, 0, 0.4)',
      }));
    }
  }
}

function drawPinIndicator(
  svg: SVGSVGElement,
  pinX: number,
  label: string,
): void {
  svg.appendChild(createSvgElement('line', {
    x1: pinX.toString(),
    y1: '15',
    x2: pinX.toString(),
    y2: '105',
    stroke: 'var(--accent, #f43f5e)',
    'stroke-width': '2',
    'stroke-dasharray': '4 3',
  }));
  const pinLabel = createSvgElement('text', {
    x: pinX.toString(),
    y: '10',
    fill: 'var(--accent, #f43f5e)',
    'font-size': '10',
    'font-weight': '700',
    'text-anchor': 'middle',
  });
  pinLabel.textContent = label;
  svg.appendChild(pinLabel);
}

export function drawFlatLayout(params: FlatLayoutParams): void {
  const { svg, lug, bespokeLong, bespokeShort, totalStrap } = params;
  svg.innerHTML = '';

  const scale = 2.2;
  const centerY = 60;
  const watchWidth = lug * scale;
  const shortWidth = bespokeShort * scale;
  const longWidth = bespokeLong * scale;

  const startX = 300 - (watchWidth / 2) - shortWidth;
  const watchX = startX + shortWidth;
  const longX = watchX + watchWidth;

  drawShortStrap(svg, startX, centerY, shortWidth);
  drawWatchCase(svg, watchX, centerY, watchWidth);
  drawLongStrap(svg, longX, centerY, longWidth);
  drawStrapHoles(svg, longX, centerY, { scale, longWidth });

  const pinDistance = totalStrap - bespokeShort;
  const pinX = longX + (pinDistance * scale);
  drawPinIndicator(svg, pinX, 'Active Fit');
}

function drawWristBackground(
  svg: SVGSVGElement,
  cx: number,
  cy: number,
  dims: { rx: number; ry: number },
): void {
  svg.appendChild(createSvgElement('ellipse', {
    cx: cx.toString(),
    cy: cy.toString(),
    rx: dims.rx.toString(),
    ry: dims.ry.toString(),
    fill: 'rgba(230, 230, 235, 0.05)',
    stroke: 'var(--border-color, #ccc)',
    'stroke-width': '1.5',
    'stroke-dasharray': '4 4',
  }));
}

function drawWristWatchHead(
  svg: SVGSVGElement,
  cx: number,
  watchParams: { watchX: number; watchY: number; watchWidth: number },
): void {
  const { watchX, watchY, watchWidth } = watchParams;
  svg.appendChild(createSvgElement('rect', {
    x: watchX.toString(),
    y: (watchY - 6).toString(),
    width: watchWidth.toString(),
    height: '12',
    rx: '3',
    fill: 'rgba(230, 230, 235, 0.15)',
    stroke: 'var(--border-color, #bbb)',
    'stroke-width': '2',
  }));
  svg.appendChild(createSvgElement('ellipse', {
    cx: cx.toString(),
    cy: (watchY - 6).toString(),
    rx: (watchWidth * 0.35).toString(),
    ry: '5',
    fill: 'rgba(255, 255, 255, 0.05)',
    stroke: 'var(--border-color, #bbb)',
    'stroke-width': '1.5',
  }));
}

function drawWristStraps(
  svg: SVGSVGElement,
  cx: number,
  cy: number,
  strapParams: { watchX: number; watchY: number; watchWidth: number; rx: number; ry: number },
): void {
  const { watchX, watchY, watchWidth, rx, ry } = strapParams;
  svg.appendChild(createSvgElement('path', {
    d: `M ${watchX} ${watchY} Q ${cx - rx - 10} ${cy - 10} ${cx} ${cy + ry}`,
    fill: 'none',
    stroke: 'rgba(160, 110, 80, 0.85)',
    'stroke-width': '4',
  }));
  svg.appendChild(createSvgElement('path', {
    d: `M ${watchX + watchWidth} ${watchY} Q ${cx + rx + 10} ${cy - 10} ${cx} ${cy + ry}`,
    fill: 'none',
    stroke: 'rgba(160, 110, 80, 0.85)',
    'stroke-width': '4',
  }));
}

function drawWristBuckle(
  svg: SVGSVGElement,
  cx: number,
  cy: number,
  ry: number,
): void {
  svg.appendChild(createSvgElement('rect', {
    x: (cx - 6).toString(),
    y: (cy + ry - 4).toString(),
    width: '12',
    height: '8',
    rx: '1.5',
    fill: 'var(--border-color, #ccc)',
    stroke: 'var(--text-base, #888)',
    'stroke-width': '1',
  }));
}

export function drawWristProfile(
  svg: SVGSVGElement,
  wrist: number,
  lug: number,
): void {
  svg.innerHTML = '';

  const cx = 150;
  const cy = 100;
  const rx = 85;
  const ry = 52;

  drawWristBackground(svg, cx, cy, { rx, ry });

  const watchY = cy - ry;
  const watchWidth = Math.min(80, lug * 1.5);
  const watchX = cx - watchWidth / 2;

  drawWristWatchHead(svg, cx, { watchX, watchY, watchWidth });
  drawWristStraps(svg, cx, cy, { watchX, watchY, watchWidth, rx, ry });
  drawWristBuckle(svg, cx, cy, ry);
}

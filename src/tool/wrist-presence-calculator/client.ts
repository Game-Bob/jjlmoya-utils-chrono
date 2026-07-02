import {
  calculateCaseToWristRatio,
  estimateWristWidth,
  getCoverageClass,
  getIdealCaseRange,
  getRatioClass,
} from './utils';
import { getCoverageText, getRatioText, getVerdictHtml } from './helpers/results';

type Unit = 'cm' | 'in';

const root = document.querySelector('[data-wpc-root]') as HTMLElement | null;

if (root) {
  const ui = JSON.parse(root.dataset.ui || '{}') as Record<string, string>;
  let unit: Unit = 'cm';

  const input = (name: string) => root.querySelector(`[data-wpc-input="${name}"]`) as HTMLInputElement;
  const output = (name: string) => root.querySelector(`[data-wpc-output="${name}"]`) as HTMLElement;

  const wristCircumference = input('wristCircumference');
  const caseDiameter = input('caseDiameter');
  const lugToLug = input('lugToLug');
  const autoWidth = input('autoWidth');
  const wristWidth = input('wristWidth');
  const customWidth = root.querySelector('[data-wpc-custom-width]') as HTMLElement;
  const svgCase = root.querySelector('.wpc-svg-case') as SVGCircleElement;
  const svgDial = root.querySelector('.wpc-svg-dial') as SVGCircleElement;
  const svgLug = root.querySelector('.wpc-svg-lug') as SVGLineElement;
  const svgLabel = root.querySelector('[data-wpc-svg-label]') as SVGTextElement;

  function wristCircumferenceMm(): number {
    const value = Number(wristCircumference.value);
    return unit === 'cm' ? value * 10 : value * 25.4;
  }

  function wristWidthMm(): number {
    return autoWidth.checked ? estimateWristWidth(wristCircumferenceMm()) : Number(wristWidth.value);
  }

  function formatWrist(mm: number): string {
    return unit === 'cm' ? `${(mm / 10).toFixed(1)} cm` : `${(mm / 25.4).toFixed(2)} in`;
  }

  function formatMm(mm: number): string {
    return `${Math.round(mm)} ${ui.unitMm || 'mm'}`;
  }

  function toneForClass(className: string): string {
    if (className.includes('golden') || className.includes('safe')) return 'good';
    if (className.includes('bold')) return 'info';
    if (className.includes('vintage')) return 'warn';
    return 'bad';
  }

  function setUnit(nextUnit: Unit): void {
    if (unit === nextUnit) return;
    const currentMm = wristCircumferenceMm();
    unit = nextUnit;
    wristCircumference.min = unit === 'cm' ? '12' : '4.7';
    wristCircumference.max = unit === 'cm' ? '24' : '9.5';
    wristCircumference.step = '0.1';
    wristCircumference.value = unit === 'cm' ? (currentMm / 10).toFixed(1) : (currentMm / 25.4).toFixed(1);
    root.querySelectorAll('[data-wpc-unit]').forEach((button) => {
      button.classList.toggle('is-active', (button as HTMLButtonElement).dataset.wpcUnit === unit);
    });
    render();
  }

  function renderSvg(caseMm: number, lugMm: number, wristMm: number): void {
    const wristPx = 300;
    const casePx = Math.max(34, Math.min(86, caseMm / wristMm * wristPx));
    const lugPx = Math.max(casePx + 18, Math.min(300, lugMm / wristMm * wristPx));
    const halfLug = lugPx / 2;

    svgCase.setAttribute('r', String(casePx / 2));
    svgDial.setAttribute('r', String(Math.max(20, casePx / 2 - 12)));
    svgLug.setAttribute('x1', String(210 - halfLug));
    svgLug.setAttribute('x2', String(210 + halfLug));
    svgLabel.textContent = `${formatMm(caseMm)} / ${formatMm(lugMm)}`;
  }

  function render(): void {
    const circMm = wristCircumferenceMm();
    const widthMm = wristWidthMm();
    const caseMm = Number(caseDiameter.value);
    const lugMm = Number(lugToLug.value);
    const ratio = calculateCaseToWristRatio(circMm, caseMm);
    const coverage = lugMm / widthMm * 100;
    const ratioClass = getRatioClass(ratio);
    const coverageClass = getCoverageClass(coverage);
    const ideal = getIdealCaseRange(circMm);

    output('wristCircumference').textContent = formatWrist(circMm);
    output('caseDiameter').textContent = formatMm(caseMm);
    output('lugToLug').textContent = formatMm(lugMm);
    output('wristWidth').textContent = `${formatMm(widthMm)} ${autoWidth.checked ? `(${ui.estimatedLabel || 'estimated'})` : ''}`;
    output('ratio').textContent = ratio.toFixed(2);
    output('coverage').textContent = `${Math.round(coverage)}%`;
    output('ratioVerdict').textContent = getRatioText(ratioClass, ui);
    output('coverageVerdict').textContent = getCoverageText(coverageClass, ui);
    output('ratioVerdict').dataset.tone = toneForClass(ratioClass);
    output('coverageVerdict').dataset.tone = toneForClass(coverageClass);
    output('verdict').textContent = getVerdictHtml(coverage, ratio, ui).replace(/<[^>]*>/g, '');
    output('classic').textContent = formatMm(ideal.min);
    output('sweet').textContent = formatMm(ideal.sweetSpot);
    output('bold').textContent = formatMm(ideal.max);
    customWidth.hidden = autoWidth.checked;
    renderSvg(caseMm, lugMm, widthMm);
  }

  root.querySelectorAll('[data-wpc-unit]').forEach((button) => {
    button.addEventListener('click', () => setUnit((button as HTMLButtonElement).dataset.wpcUnit as Unit));
  });

  [wristCircumference, caseDiameter, lugToLug, wristWidth, autoWidth].forEach((element) => {
    element.addEventListener('input', render);
    element.addEventListener('change', render);
  });

  render();
}

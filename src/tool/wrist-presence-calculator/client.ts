import {
  calculateCaseToWristRatio,
  estimateWristWidth,
  getIdealCaseRange,
  getRatioClass,
  getCoverageClass
} from './utils';
import { drawFitVisualizer } from './helpers/canvas';
import { getRatioText, getCoverageText, getVerdictHtml, formatWristValue, formatRecValue } from './helpers/results';

const mainEl = document.querySelector('.tool-main-card') as HTMLElement;
const ui = mainEl ? JSON.parse(mainEl.dataset.ui || '{}') : {};

const wristCircSlider = document.getElementById('wrist-circumference') as HTMLInputElement;
const wristCircDisplay = document.getElementById('wrist-circumference-display') as HTMLElement;
const caseDiamSlider = document.getElementById('case-diameter') as HTMLInputElement;
const caseDiamDisplay = document.getElementById('case-diameter-display') as HTMLElement;
const lugToLugSlider = document.getElementById('lug-to-lug') as HTMLInputElement;
const lugToLugDisplay = document.getElementById('lug-to-lug-display') as HTMLElement;
const autoEstimateCheckbox = document.getElementById('auto-estimate-width') as HTMLInputElement;
const customWidthGroup = document.getElementById('custom-width-group') as HTMLElement;
const wristWidthSlider = document.getElementById('wrist-width') as HTMLInputElement;
const wristWidthDisplay = document.getElementById('wrist-width-display') as HTMLElement;
const btnUnitCm = document.getElementById('btn-unit-cm') as HTMLButtonElement;
const btnUnitIn = document.getElementById('btn-unit-in') as HTMLButtonElement;
const ratioValEl = document.getElementById('ratio-value') as HTMLElement;
const ratioVerdictBadge = document.getElementById('ratio-verdict-badge') as HTMLElement;
const coverageValEl = document.getElementById('coverage-value') as HTMLElement;
const coverageVerdictBadge = document.getElementById('coverage-verdict-badge') as HTMLElement;
const verdictDescEl = document.getElementById('verdict-description') as HTMLElement;
const recClassicCase = document.getElementById('rec-classic-case') as HTMLElement;
const recClassicLug = document.getElementById('rec-classic-lug') as HTMLElement;
const recSweetCase = document.getElementById('rec-sweet-case') as HTMLElement;
const recSweetLug = document.getElementById('rec-sweet-lug') as HTMLElement;
const recBoldCase = document.getElementById('rec-bold-case') as HTMLElement;
const recBoldLug = document.getElementById('rec-bold-lug') as HTMLElement;
const fitCanvas = document.getElementById('fit-canvas') as HTMLCanvasElement;

let unit: 'cm' | 'in' = 'cm';

function getWristCircMm(): number {
  const val = parseFloat(wristCircSlider.value);
  return unit === 'in' ? val * 25.4 : val * 10;
}

function getWristWidthMm(): number {
  if (autoEstimateCheckbox.checked) {
    return estimateWristWidth(getWristCircMm());
  }
  return parseFloat(wristWidthSlider.value);
}

function updateInputs() {
  const circ = parseFloat(wristCircSlider.value);
  wristCircDisplay.textContent = `${circ.toFixed(1)} ${unit}`;

  const caseD = parseFloat(caseDiamSlider.value);
  caseDiamDisplay.textContent = formatRecValue(caseD, unit);

  const l2l = parseFloat(lugToLugSlider.value);
  lugToLugDisplay.textContent = formatRecValue(l2l, unit);

  const wristWMm = getWristWidthMm();
  const displayVal = formatWristValue(wristWMm, unit);

  if (autoEstimateCheckbox.checked) {
    customWidthGroup.style.display = 'none';
    wristWidthDisplay.textContent = `${displayVal} (${ui.estimatedLabel || 'estimated'})`;
  } else {
    customWidthGroup.style.display = 'block';
    wristWidthDisplay.textContent = displayVal;
  }
}

function updateRecommendations(circMm: number) {
  const ideal = getIdealCaseRange(circMm);
  recClassicCase.textContent = formatRecValue(ideal.min, unit);
  recClassicLug.textContent = formatRecValue(ideal.maxLugToLug, unit);
  recSweetCase.textContent = formatRecValue(ideal.sweetSpot, unit);
  recSweetLug.textContent = formatRecValue(ideal.maxLugToLug, unit);
  recBoldCase.textContent = formatRecValue(ideal.max, unit);
  recBoldLug.textContent = formatRecValue(ideal.maxLugToLug, unit);
}

function updateResults() {
  const circMm = getWristCircMm();
  const caseD = parseFloat(caseDiamSlider.value);
  const l2l = parseFloat(lugToLugSlider.value);
  const wristW = getWristWidthMm();

  const ratio = calculateCaseToWristRatio(circMm, caseD);
  ratioValEl.textContent = ratio.toFixed(2);
  const ratioClass = getRatioClass(ratio);
  ratioVerdictBadge.className = `verdict-badge ${ratioClass}`;
  ratioVerdictBadge.textContent = getRatioText(ratioClass, ui);

  const coverage = (l2l / wristW) * 100;
  coverageValEl.textContent = `${Math.round(coverage)}%`;
  const coverageClass = getCoverageClass(coverage);
  coverageVerdictBadge.className = `verdict-badge ${coverageClass}`;
  coverageVerdictBadge.textContent = getCoverageText(coverageClass, ui);

  verdictDescEl.innerHTML = getVerdictHtml(coverage, ratio, ui);
  updateRecommendations(circMm);
}

function triggerDraw() {
  if (!fitCanvas) return;
  drawFitVisualizer({
    canvas: fitCanvas,
    wristW: getWristWidthMm(),
    caseD: parseFloat(caseDiamSlider.value),
    l2l: parseFloat(lugToLugSlider.value),
    unit,
    ui
  });
}

interface SliderConfig {
  slider: HTMLInputElement;
  min: number;
  max: number;
  step: number;
  val: number;
}

function setupSlider(config: SliderConfig) {
  config.slider.min = config.min.toString();
  config.slider.max = config.max.toString();
  config.slider.step = config.step.toString();
  config.slider.value = config.val.toFixed(1);
}

function handleUnitChange(newUnit: 'cm' | 'in') {
  if (unit === newUnit) return;
  const prevCircMm = getWristCircMm();
  unit = newUnit;

  if (unit === 'cm') {
    btnUnitCm.classList.add('active');
    btnUnitIn.classList.remove('active');
    setupSlider({ slider: wristCircSlider, min: 12, max: 24, step: 0.1, val: prevCircMm / 10 });
  } else {
    btnUnitCm.classList.remove('active');
    btnUnitIn.classList.add('active');
    setupSlider({ slider: wristCircSlider, min: 4.7, max: 9.5, step: 0.1, val: prevCircMm / 25.4 });
  }

  updateInputs();
  updateResults();
  triggerDraw();
}

btnUnitCm.addEventListener('click', () => handleUnitChange('cm'));
btnUnitIn.addEventListener('click', () => handleUnitChange('in'));

[wristCircSlider, caseDiamSlider, lugToLugSlider, wristWidthSlider].forEach(input => {
  input.addEventListener('input', () => {
    updateInputs();
    updateResults();
    triggerDraw();
  });
});

autoEstimateCheckbox.addEventListener('change', () => {
  updateInputs();
  updateResults();
  triggerDraw();
});

window.addEventListener('resize', triggerDraw);

updateInputs();
updateResults();
setTimeout(triggerDraw, 100);

const observer = new MutationObserver(() => {
  triggerDraw();
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

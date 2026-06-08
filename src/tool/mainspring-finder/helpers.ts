export interface MainspringInput {
  barrelId: number;
  barrelH: number;
  arborD: number;
  turns: number;
  unit: 'mm' | 'in';
}

export interface MainspringResult {
  thickness: number;
  height: number;
  length: number;
  strengthIndex: number;
  thicknessIn: number;
  heightIn: number;
  lengthIn: number;
}

export function toMm(val: number, unit: 'mm' | 'in'): number {
  return unit === 'in' ? val * 25.4 : val;
}

export function fromMm(val: number, unit: 'mm' | 'in', decimals = 2): string {
  const v = unit === 'in' ? val / 25.4 : val;
  return v.toFixed(decimals);
}

const STRENGTH_THRESHOLDS = [
  { max: 0.10, index: 0 },
  { max: 0.14, index: 1 },
  { max: 100, index: 2 },
];

function getStrengthIndex(thickness: number): number {
  for (const t of STRENGTH_THRESHOLDS) {
    if (thickness <= t.max) return t.index;
  }
  return 2;
}

export function calculateMainspring(input: MainspringInput): MainspringResult | null {
  let { barrelId, barrelH, arborD, turns, unit } = input;
  barrelId = toMm(barrelId, unit);
  barrelH = toMm(barrelH, unit);
  arborD = toMm(arborD, unit);

  if (barrelId <= 0 || arborD <= 0 || barrelH <= 0 || arborD >= barrelId) return null;

  const clearance = 0.1;
  const height = barrelH - clearance;
  const thickness = (barrelId - arborD) / (2 * turns + 1.5);
  const length = (Math.PI * turns * (barrelId + arborD)) / 2;

  return {
    thickness: Math.round(thickness * 1000) / 1000,
    height: Math.round(height * 10) / 10,
    length: Math.round(length * 10) / 10,
    strengthIndex: getStrengthIndex(thickness),
    thicknessIn: Math.round((thickness / 25.4) * 10000) / 10000,
    heightIn: Math.round((height / 25.4) * 1000) / 1000,
    lengthIn: Math.round((length / 25.4) * 100) / 100,
  };
}

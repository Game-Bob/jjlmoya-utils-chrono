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
}

export function toMm(val: number, unit: 'mm' | 'in'): number {
  return unit === 'in' ? val * 25.4 : val;
}

export function fmt(val: number, unit: 'mm' | 'in', dec: number): string {
  const v = unit === 'in' ? val / 25.4 : val;
  return v.toFixed(dec);
}

function getStrengthIndex(thickness: number): number {
  if (thickness <= 0.10) return 0;
  if (thickness <= 0.18) return 1;
  return 2;
}

export function calculateMainspring(input: MainspringInput): MainspringResult | null {
  let { barrelId, barrelH, arborD } = input;
  const { turns, unit } = input;
  barrelId = toMm(barrelId, unit);
  barrelH = toMm(barrelH, unit);
  arborD = toMm(arborD, unit);

  if (barrelId <= 0 || arborD <= 0 || barrelH <= 0 || arborD >= barrelId) return null;

  const clearance = 0.1;
  const height = barrelH - clearance;

  const thickness = (barrelId - arborD) / (4 * Math.PI * turns);
  const length = (Math.PI * turns * (barrelId + arborD)) / 2;

  return {
    thickness: Math.round(thickness * 1000) / 1000,
    height: Math.round(height * 100) / 100,
    length: Math.round(length * 10) / 10,
    strengthIndex: getStrengthIndex(thickness),
  };
}

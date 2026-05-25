export interface StrapCalculationInput {
  wrist: number;
  lug: number;
  fit: 'tight' | 'regular' | 'loose';
  unit: 'mm' | 'in';
}

export interface StrapCalculationResult {
  standardText: string;
  sizeKey: string;
  bespokeLong: number;
  bespokeShort: number;
  natoText: string;
}

export function toMillimeters(val: number, unit: 'mm' | 'in'): number {
  if (unit === 'in') {
    return Math.round(val * 25.4);
  }
  return val;
}

export function formatLength(val: number, unit: 'mm' | 'in'): string {
  if (unit === 'in') {
    const inches = val / 25.4;
    return `${inches.toFixed(2)} in`;
  }
  return `${Math.round(val)} mm`;
}

interface StandardSize {
  long: number;
  short: number;
  sizeKey: string;
}

function getStandardSizing(wristMm: number): StandardSize {
  if (wristMm < 152) {
    return { long: 105, short: 70, sizeKey: 'xs' };
  }
  if (wristMm < 165) {
    return { long: 110, short: 70, sizeKey: 's' };
  }
  if (wristMm < 178) {
    return { long: 115, short: 75, sizeKey: 'm' };
  }
  if (wristMm < 190) {
    return { long: 120, short: 80, sizeKey: 'l' };
  }
  if (wristMm < 203) {
    return { long: 125, short: 85, sizeKey: 'xl' };
  }
  return { long: 130, short: 90, sizeKey: 'xxl' };
}

function getFitAllowance(fit: 'tight' | 'regular' | 'loose'): number {
  if (fit === 'tight') {
    return 32;
  }
  if (fit === 'loose') {
    return 42;
  }
  return 37;
}

function formatStandardText(long: number, short: number, unit: 'mm' | 'in'): string {
  if (unit === 'in') {
    const lIn = long / 25.4;
    const sIn = short / 25.4;
    return `${lIn.toFixed(2)} / ${sIn.toFixed(2)} in`;
  }
  return `${long} / ${short} mm`;
}

function getNatoLength(wristMm: number): number {
  if (wristMm < 160) {
    return 260;
  }
  if (wristMm >= 190) {
    return 300;
  }
  return 280;
}

function formatNatoText(len: number, unit: 'mm' | 'in'): string {
  if (unit === 'in') {
    const lenIn = len / 25.4;
    return `${lenIn.toFixed(2)} in`;
  }
  return `${len} mm`;
}

export function calculateStrap(input: StrapCalculationInput): StrapCalculationResult {
  const wristMm = toMillimeters(input.wrist, input.unit);
  const lugMm = input.lug;
  const fitAllowance = getFitAllowance(input.fit);
  const std = getStandardSizing(wristMm);
  const totalStrap = wristMm - lugMm + fitAllowance;
  const bespokeShort = Math.round(totalStrap * 0.38);
  const bespokeLong = totalStrap - bespokeShort;
  const natoLen = getNatoLength(wristMm);

  return {
    standardText: formatStandardText(std.long, std.short, input.unit),
    sizeKey: std.sizeKey,
    bespokeLong,
    bespokeShort,
    natoText: formatNatoText(natoLen, input.unit),
  };
}

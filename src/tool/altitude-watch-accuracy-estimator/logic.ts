export interface AtmosphericData {
  altitude: number;
  pressure: number;
  density: number;
  temperature: number;
  deviation: number;
  deviationDesc: string;
}

const SEA_LEVEL_PRESSURE = 1013.25;
const SEA_LEVEL_TEMP_K = 288.15;
const SEA_LEVEL_TEMP_C = 15;
const LAPSE_RATE = 0.0065;
const DEVIATION_FACTOR = 4.2;

export function getTemperature(altitude: number): number {
  return SEA_LEVEL_TEMP_C - LAPSE_RATE * altitude;
}

export function getPressure(altitude: number): number {
  const tRatio = 1 - LAPSE_RATE * altitude / SEA_LEVEL_TEMP_K;
  if (tRatio <= 0) return 0;
  return SEA_LEVEL_PRESSURE * Math.pow(tRatio, 5.255);
}

export function getAirDensity(altitude: number): number {
  const T = getTemperature(altitude) + 273.15;
  const P = getPressure(altitude) * 100;
  return P / (287.058 * T);
}

export function getRateDeviation(altitude: number): number {
  const rho0 = getAirDensity(0);
  const rhoH = getAirDensity(altitude);
  return DEVIATION_FACTOR * (rho0 / rhoH - 1);
}

export function getDeviationDescription(deviation: number): string {
  if (deviation < 0.5) return 'negligible';
  if (deviation < 2) return 'minor';
  if (deviation < 5) return 'noticeable';
  if (deviation < 10) return 'significant';
  return 'severe';
}

export function getAtmosphericData(altitude: number): AtmosphericData {
  const deviation = getRateDeviation(altitude);
  return {
    altitude,
    pressure: Math.round(getPressure(altitude) * 10) / 10,
    density: Math.round(getAirDensity(altitude) * 1000) / 1000,
    temperature: Math.round(getTemperature(altitude) * 10) / 10,
    deviation: Math.round(deviation * 10) / 10,
    deviationDesc: getDeviationDescription(deviation),
  };
}

export const DEVIATION_CHART_POINTS = Array.from({ length: 81 }, (_, i) => {
  const alt = i * 100;
  return { altitude: alt, deviation: Math.round(getRateDeviation(alt) * 10) / 10 };
});

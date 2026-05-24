export function calculateCaseToWristRatio(circumference: number, caseDiameter: number): number {
  if (!caseDiameter) return 0;
  return circumference / caseDiameter;
}

export function estimateWristWidth(circumference: number): number {
  return circumference * 0.3;
}

export function getIdealCaseRange(circumference: number) {
  return {
    min: circumference / 5.0,
    sweetSpot: circumference / 4.5,
    max: circumference / 4.0,
    maxLugToLug: estimateWristWidth(circumference)
  };
}

export function getRatioClass(ratio: number): string {
  if (ratio < 4.0) return 'verdict-oversized';
  if (ratio >= 4.0 && ratio < 4.5) return 'verdict-bold';
  if (ratio >= 4.5 && ratio <= 5.0) return 'verdict-golden';
  return 'verdict-vintage';
}

export function getCoverageClass(coverage: number): string {
  if (coverage < 80) return 'coverage-safe';
  if (coverage >= 80 && coverage <= 100) return 'coverage-bold';
  return 'coverage-overhang';
}

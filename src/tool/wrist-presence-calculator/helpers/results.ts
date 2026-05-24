export function getRatioText(ratioClass: string, ui: Record<string, string>): string {
  if (ratioClass === 'verdict-golden') return ui.verdictGolden || 'Golden Fit';
  if (ratioClass === 'verdict-bold') return ui.verdictBold || 'Bold Fit';
  if (ratioClass === 'verdict-oversized') return ui.verdictOversized || 'Oversized';
  return ui.verdictVintage || 'Vintage/Classic';
}

export function getCoverageText(coverageClass: string, ui: Record<string, string>): string {
  if (coverageClass === 'coverage-safe') return ui.coverageSafe || 'Safe Fit';
  if (coverageClass === 'coverage-bold') return ui.coverageBold || 'Bold Fit';
  return ui.coverageOverhang || 'Overhang Warning';
}

function formatVerdict(title: string, desc: string): string {
  return `<strong>${title}:</strong> ${desc}`;
}

function getGoldenVerdict(ui: Record<string, string>): string {
  return formatVerdict(
    ui.verdictGolden || 'Golden Ratio Fit',
    ui.verdictDescGolden || 'Excellent aesthetic balance! The watch diameter is perfectly proportioned to your wrist circumference, following traditional horology guidelines.'
  );
}

function getBoldVerdict(ui: Record<string, string>): string {
  return formatVerdict(
    ui.verdictBold || 'Bold Fit',
    ui.verdictDescBold || 'A modern, sporty presence. The watch occupies a significant portion of the wrist but fits well without looking disproportionately massive.'
  );
}

function getVintageVerdict(ui: Record<string, string>): string {
  return formatVerdict(
    ui.verdictVintage || 'Vintage/Classic Fit',
    ui.verdictDescVintage || 'A understated, elegant look. Ideal for formal dress watches or vintage styles, offering excellent comfort and a discreet wrist profile.'
  );
}

function getRegularVerdictHtml(ratio: number, ui: Record<string, string>): string {
  if (ratio >= 4.5 && ratio <= 5.0) {
    return getGoldenVerdict(ui);
  }
  if (ratio >= 4.0 && ratio < 4.5) {
    return getBoldVerdict(ui);
  }
  return getVintageVerdict(ui);
}

export function getVerdictHtml(
  coverage: number,
  ratio: number,
  ui: Record<string, string>
): string {
  if (coverage > 100) {
    return formatVerdict(
      ui.coverageOverhang || 'Lug Overhang Warning',
      ui.verdictDescOverhang || 'The watch lugs exceed your flat wrist width. This watch will likely feel unstable, slide around, and visually look too large.'
    );
  }
  if (ratio < 4.0) {
    return formatVerdict(
      ui.verdictOversized || 'Oversized Fit',
      ui.verdictDescOversized || 'The case diameter is very large relative to your wrist size. This creates a commanding modern presence but make sure the lugs feel comfortable.'
    );
  }
  return getRegularVerdictHtml(ratio, ui);
}

export function formatWristValue(mm: number, unit: 'cm' | 'in'): string {
  if (unit === 'in') {
    return `${(mm / 25.4).toFixed(2)} in`;
  }
  return `${(mm / 10).toFixed(1)} cm`;
}

export function formatRecValue(mm: number, unit: 'cm' | 'in'): string {
  return formatWristValue(mm, unit);
}

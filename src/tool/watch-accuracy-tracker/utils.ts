export function formatDrift(seconds: number): string {
  const absSec = Math.abs(seconds);
  const sign = seconds >= 0 ? '+' : '-';
  if (absSec < 60) {
    return `${sign}${absSec.toFixed(1)}s`;
  }
  const mins = Math.floor(absSec / 60);
  const secs = Math.round(absSec % 60);
  if (mins < 60) {
    return `${sign}${mins}m ${secs}s`;
  }
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  return `${sign}${hrs}h ${remMins}m`;
}

export function calculateIntervalRate(
  currentOffset: number,
  prevOffset: number,
  currentTime: string,
  prevTime: string
): number | null {
  const timeDiff = new Date(currentTime).getTime() - new Date(prevTime).getTime();
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  if (daysDiff > 0.01) {
    return (currentOffset - prevOffset) / daysDiff;
  }
  return null;
}

export function calculateAverageRate(
  firstOffset: number,
  lastOffset: number,
  firstTime: string,
  lastTime: string
): number | null {
  const overallTimeDiff = new Date(lastTime).getTime() - new Date(firstTime).getTime();
  const overallDays = overallTimeDiff / (1000 * 60 * 60 * 24);
  if (overallDays > 0.01) {
    return (lastOffset - firstOffset) / overallDays;
  }
  return null;
}

export function getPrecisionStatus(
  avgRate: number,
  ui: Record<string, string>
): { text: string; cssClass: string } {
  const absRate = Math.abs(avgRate);
  if (absRate <= 2) {
    return {
      text: ui.coscExcellent || 'Rolex Superlative',
      cssClass: 'stat-value status-superlative'
    };
  }
  if (absRate <= 6) {
    return {
      text: ui.coscExcellent || 'COSC Excellent',
      cssClass: 'stat-value status-excellent'
    };
  }
  if (absRate > 20) {
    return {
      text: ui.needsService || 'Needs Service',
      cssClass: 'stat-value status-service'
    };
  }
  return {
    text: ui.good || 'Good',
    cssClass: 'stat-value status-good'
  };
}

export function getTernaryDriftClass(rate: number): string {
  if (rate > 0) {
    return 'drift-val ahead';
  }
  if (rate < 0) {
    return 'drift-val behind';
  }
  return 'drift-val neutral';
}

export function getExplanationForRate(avgRate: number): string {
  const absRate = Math.abs(avgRate);
  if (absRate <= 2) {
    return 'Rolex Superlative: Your watch is running with exceptional precision, matching Rolex\'s Superlative Chronometer standards (±2 s/d). This is outstanding timekeeping.';
  }
  if (absRate <= 6) {
    return 'COSC Chronometer: Excellent precision, within official Swiss Chronometer standards (-4 to +6 s/d). Your watch performs exceptionally well.';
  }
  if (absRate <= 10) {
    return 'Excellent: Excellent performance. Gaining or losing under 10 seconds a day keeps your timepiece highly accurate for everyday use.';
  }
  if (absRate <= 20) {
    return 'Good: Good everyday timekeeping. Standard mechanical movements are typically regulated within this range.';
  }
  return 'Needs Service: Significant rate deviation detected. Your watch might be magnetized, need regulation, or require a movement service (cleaning and oiling).';
}

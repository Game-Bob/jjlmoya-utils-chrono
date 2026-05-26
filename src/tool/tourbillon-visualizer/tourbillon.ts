export const BEAT_RATES = {
  18000: { hz: 2.5, rpm: 20, bph: 18000 },
  28800: { hz: 4, rpm: 32, bph: 28800 },
  36000: { hz: 5, rpm: 40, bph: 36000 },
};

export function calc(b: number): { hz: number; rpm: number; bph: number } {
  return BEAT_RATES[b as keyof typeof BEAT_RATES] || BEAT_RATES[28800];
}

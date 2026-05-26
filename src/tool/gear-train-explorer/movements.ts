export type GearDef = {
  id: string;
  x: number;
  y: number;
  r: number;
  teeth: number;
  rpm: number;
  visualSpeed: number;
  color: string;
  label: string;
};

export type MovementDef = {
  id: string;
  label: string;
  gears: GearDef[];
  pallet: { bph: number; x: number; y: number };
  balance: { hz: number; vph: number; x: number; y: number; r: number };
};

export const MOVEMENTS: Record<string, MovementDef> = {
  '2824': {
    id: '2824',
    label: 'ETA 2824-2',
    gears: [
      { id: 'barrel', x: 110, y: 300, r: 58, teeth: 72, rpm: 0.002, visualSpeed: 0.002, color: '#b8860b', label: 'Barrel' },
      { id: 'center', x: 240, y: 300, r: 44, teeth: 60, rpm: 0.0167, visualSpeed: 0.016, color: '#cd9b1d', label: 'Center Wheel' },
      { id: 'third', x: 360, y: 300, r: 37, teeth: 50, rpm: 0.125, visualSpeed: 0.12, color: '#d4af37', label: 'Third Wheel' },
      { id: 'fourth', x: 480, y: 300, r: 32, teeth: 60, rpm: 1, visualSpeed: 0.5, color: '#dcb839', label: 'Fourth Wheel' },
      { id: 'escape', x: 600, y: 300, r: 26, teeth: 15, rpm: 32, visualSpeed: 2.0, color: '#e8c84a', label: 'Escape Wheel' },
    ],
    pallet: { bph: 28800, x: 680, y: 330 },
    balance: { hz: 4, vph: 28800, x: 800, y: 200, r: 28 },
  },
  'elprimero': {
    id: 'elprimero',
    label: 'Zenith El Primero',
    gears: [
      { id: 'barrel', x: 110, y: 300, r: 58, teeth: 72, rpm: 0.002, visualSpeed: 0.002, color: '#b8860b', label: 'Barrel' },
      { id: 'center', x: 240, y: 300, r: 44, teeth: 60, rpm: 0.0167, visualSpeed: 0.016, color: '#cd9b1d', label: 'Center Wheel' },
      { id: 'third', x: 360, y: 300, r: 37, teeth: 50, rpm: 0.125, visualSpeed: 0.12, color: '#d4af37', label: 'Third Wheel' },
      { id: 'fourth', x: 480, y: 300, r: 32, teeth: 60, rpm: 1, visualSpeed: 0.5, color: '#dcb839', label: 'Fourth Wheel' },
      { id: 'escape', x: 600, y: 300, r: 26, teeth: 20, rpm: 40, visualSpeed: 3.0, color: '#e8c84a', label: 'Escape Wheel' },
    ],
    pallet: { bph: 36000, x: 680, y: 330 },
    balance: { hz: 5, vph: 36000, x: 800, y: 200, r: 28 },
  },
  'vintage': {
    id: 'vintage',
    label: 'Vintage 18k',
    gears: [
      { id: 'barrel', x: 110, y: 300, r: 58, teeth: 72, rpm: 0.0015, visualSpeed: 0.0015, color: '#b8860b', label: 'Barrel' },
      { id: 'center', x: 240, y: 300, r: 44, teeth: 60, rpm: 0.0167, visualSpeed: 0.016, color: '#cd9b1d', label: 'Center Wheel' },
      { id: 'third', x: 360, y: 300, r: 37, teeth: 50, rpm: 0.125, visualSpeed: 0.12, color: '#d4af37', label: 'Third Wheel' },
      { id: 'fourth', x: 480, y: 300, r: 32, teeth: 60, rpm: 1, visualSpeed: 0.5, color: '#dcb839', label: 'Fourth Wheel' },
      { id: 'escape', x: 600, y: 300, r: 26, teeth: 15, rpm: 20, visualSpeed: 1.5, color: '#e8c84a', label: 'Escape Wheel' },
    ],
    pallet: { bph: 18000, x: 680, y: 330 },
    balance: { hz: 2.5, vph: 18000, x: 800, y: 200, r: 28 },
  },
};

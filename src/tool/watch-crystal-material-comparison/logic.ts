export interface CrystalData {
  id: string;
  name: string;
  overall: number;
  hardness: number;
  clarity: number;
  impactResistance: number;
  scratchResistance: number;
  durability: number;
  priceLevel: number;
  color: string;
  colorBg: string;
}

export const CRYSTAL_TYPES: CrystalData[] = [
  {
    id: 'hesalite',
    name: 'Hesalite',
    overall: 72,
    hardness: 25,
    clarity: 45,
    impactResistance: 92,
    scratchResistance: 15,
    durability: 55,
    priceLevel: 1,
    color: '#fbbf24',
    colorBg: 'linear-gradient(135deg, #92400e, #a16207)',
  },
  {
    id: 'mineral',
    name: 'Mineral Glass',
    overall: 78,
    hardness: 58,
    clarity: 72,
    impactResistance: 55,
    scratchResistance: 58,
    durability: 65,
    priceLevel: 2,
    color: '#60a5fa',
    colorBg: 'linear-gradient(135deg, #1e3a5f, #1e40af)',
  },
  {
    id: 'sapphire',
    name: 'Sapphire',
    overall: 88,
    hardness: 92,
    clarity: 95,
    impactResistance: 35,
    scratchResistance: 98,
    durability: 72,
    priceLevel: 3,
    color: '#a78bfa',
    colorBg: 'linear-gradient(135deg, #4c1d95, #5b21b6)',
  },
];

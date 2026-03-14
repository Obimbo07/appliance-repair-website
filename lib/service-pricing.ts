export interface PricedService {
  id: string
  name: string
  priceKes: number
}

export const pricedServices: PricedService[] = [
  { id: 'refrigerator-repair', name: 'Refrigerator Repair', priceKes: 4500 },
  { id: 'washing-machine-repair', name: 'Washing Machine Repair', priceKes: 4200 },
  { id: 'dryer-repair', name: 'Dryer Repair', priceKes: 3800 },
  { id: 'microwave-repair', name: 'Microwave Repair', priceKes: 3000 },
  { id: 'oven-stove-repair', name: 'Oven & Stove Repair', priceKes: 4000 },
  { id: 'dishwasher-repair', name: 'Dishwasher Repair', priceKes: 4300 },
  { id: 'air-conditioner-repair', name: 'Air Conditioner Repair', priceKes: 5500 },
  { id: 'freezer-repair', name: 'Freezer Repair', priceKes: 4200 },
  { id: 'general-appliance-maintenance', name: 'General Appliance Maintenance', priceKes: 3500 },
  { id: 'solar-system-installation', name: 'Solar System Installation', priceKes: 35000 },
]

export const DEPOSIT_PERCENTAGE = 0.2

export function calculateDepositAmount(totalCostKes: number): number {
  return Math.max(1, Math.round(totalCostKes * DEPOSIT_PERCENTAGE))
}

export function formatKes(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount)
}

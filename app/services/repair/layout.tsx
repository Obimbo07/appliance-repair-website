import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appliance Repair Service in Kenya | Same-Day Technicians',
  description:
    'Book fast appliance repair in Kenya for fridges, washers, ovens, and more. Certified technicians, transparent pricing, and same-day appointments available.',
  alternates: {
    canonical: '/services/repair',
  },
}

export default function RepairLayout({ children }: { children: React.ReactNode }) {
  return children
}

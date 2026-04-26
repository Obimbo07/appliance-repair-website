import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appliance Maintenance in Kenya | Prevent Costly Repairs',
  description:
    'Protect your appliances with preventive maintenance in Kenya. Reduce breakdowns, improve performance, and extend lifespan with planned service visits.',
  alternates: {
    canonical: '/services/maintenance',
  },
}

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return children
}

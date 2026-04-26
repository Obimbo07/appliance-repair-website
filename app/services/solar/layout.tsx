import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Installation in Kenya | Lower Your Power Bills',
  description:
    'Install reliable solar systems in Kenya for homes and businesses. Get expert design, quality components, and professional setup from Applicare.',
  alternates: {
    canonical: '/services/solar',
  },
}

export default function SolarLayout({ children }: { children: React.ReactNode }) {
  return children
}

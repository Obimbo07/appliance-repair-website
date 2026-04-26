import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appliance Consultancy in Kenya | Expert Buying Advice',
  description:
    'Get appliance consultancy in Kenya for smarter buying and maintenance decisions. Speak with certified experts and avoid costly mistakes. Book a consultation.',
  alternates: {
    canonical: '/services/consultancy',
  },
}

export default function ConsultancyLayout({ children }: { children: React.ReactNode }) {
  return children
}

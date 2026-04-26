import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Applicare | Appliance Repair Quote in Kenya',
  description:
    'Contact Applicare for fast appliance repair in Kenya. Call 0704 118 177 or send your request online to get a quick quote and technician support today.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

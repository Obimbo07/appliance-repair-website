import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appliance Repair Blog Kenya | Tips, Guides and Troubleshooting',
  description:
    'Read practical appliance repair guides, maintenance tips, and troubleshooting advice for cookers, refrigerators, washing machines and more in Kenya.',
  keywords: [
    'appliance repair blog kenya',
    'cooker repair tips kenya',
    'washing machine troubleshooting kenya',
    'refrigerator repair guide kenya',
    'appliance maintenance tips',
    'home appliance repair nairobi',
    'home appliance repair nakuru',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Applicare Blog | Appliance Repair Tips in Kenya',
    description:
      'Expert appliance repair and maintenance content to help you prevent breakdowns and choose the right service in Kenya.',
    url: 'https://applicare.co.ke/blog',
    type: 'website',
    images: [
      {
        url: '/image5.jpeg',
        width: 1200,
        height: 630,
        alt: 'Applicare blog and appliance repair tips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applicare Blog | Appliance Repair Tips in Kenya',
    description:
      'Helpful guides and repair tips for cookers, fridges, washing machines and more.',
    images: ['/image5.jpeg'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}

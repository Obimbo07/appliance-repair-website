import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/service-data'

type Props = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found | Applicare Kenya',
      description: 'The service page you requested could not be found. Browse our available appliance services in Kenya.',
    }
  }

  return {
    title: `${service.title} in Kenya | Applicare Technicians`,
    description: `${service.description} Book certified technicians in Nairobi and Nakuru for fast response and transparent pricing.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
  }
}

export default function ServiceSlugLayout({ children }: Props) {
  return children
}

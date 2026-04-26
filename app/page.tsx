import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Offers from '@/components/Offers'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Brands from '@/components/Brands'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Appliance Repair in Kenya | Fast Same-Day Service Nairobi',
  description:
    'Get fast appliance repair in Nairobi and Nakuru. Certified technicians, honest pricing, and same-day support for refrigerators, cookers, washers, and more. Book now.',
  alternates: {
    canonical: '/',
  },
}

export const revalidate = 3600

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Offers />
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <Projects />
      <Footer />
    </main>
  )
}

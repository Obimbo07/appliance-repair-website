import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Offers from '@/components/Offers'
import WhyChooseUs from '@/components/WhyChooseUs'
import AboutSection from '@/components/AboutSection'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Brands from '@/components/Brands'
import ServiceGrid from '@/components/ServiceGrid'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Offers />
      <WhyChooseUs />
      <AboutSection />
      <Stats />
      <Testimonials />
      <Brands />
      <ServiceGrid />
      <Projects />
      <Footer />
    </main>
  )
}

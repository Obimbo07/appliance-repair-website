'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useBooking } from '@/components/BookingProvider'
import { Check, ArrowLeft, Phone, CheckCircle2, Wrench, Zap, AlertCircle, Award } from 'lucide-react'

export default function RepairPage() {
  const { openBooking } = useBooking()

  React.useEffect(() => {
    document.title = 'Appliance Repair Services | Applicare - Fast & Reliable Repairs Kenya'
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image9.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Appliance Repair Services</h1>
              <p className="text-xl text-red-200">Fast, reliable repairs for all major appliance brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About This Service */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Appliance Repair</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  When your appliances break down, you need fast and reliable service. Our expert technicians are trained to diagnose and repair all major appliance brands with precision and care. We understand how important your appliances are to your daily routine, which is why we offer same-day service and emergency repairs.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With years of hands-on experience, advanced diagnostic tools, and access to genuine replacement parts, we can fix almost any appliance issue quickly and effectively. Every repair comes with our satisfaction guarantee and comprehensive warranty coverage.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Same-day & emergency repairs',
                    'All major appliance brands',
                    'Certified & experienced technicians',
                    'Genuine replacement parts',
                    '90-day warranty on repairs',
                    'Upfront pricing, no hidden fees',
                    'Free diagnostic with repair',
                    'Residential & commercial service',
                    'Weekend & evening appointments',
                    'Mobile repair service',
                    'Insurance claim assistance',
                    'Extended warranty options'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Repairs */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Repairs We Handle</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Refrigerator Repairs</h3>
                      <p className="text-gray-600">Not cooling, leaking water, ice maker issues, compressor failure, freezer problems, door seal replacement, thermostat malfunctions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Washing Machine Repairs</h3>
                      <p className="text-gray-600">Won't spin or drain, water leaks, loud noises, door lock problems, electrical issues, drum bearing replacement, pump repairs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Dryer Repairs</h3>
                      <p className="text-gray-600">Not heating, drum not turning, takes too long to dry, overheating, belt replacement, thermal fuse repairs, ventilation issues.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Dishwasher Repairs</h3>
                      <p className="text-gray-600">Won't drain or fill, not cleaning properly, leaking, door latch problems, spray arm issues, heating element replacement.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Oven & Cooker Repairs</h3>
                      <p className="text-gray-600">Not heating, temperature issues, burner problems, ignition failure, door problems, control panel malfunctions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Repair Services?</h2>
                <ul className="space-y-3">
                  {[
                    'Fast response time - same-day service available',
                    'Highly trained and certified technicians',
                    'Transparent pricing with free estimates',
                    'Quality parts with manufacturer warranties',
                    'Fully insured and licensed',
                    'Customer satisfaction guarantee',
                    'Convenient scheduling - 7 days a week',
                    'Clean and professional service'
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Book Repair CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-white mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Book a Repair</h3>
                <p className="mb-6 text-orange-50">
                  Get your appliance fixed fast! Schedule your repair service today.
                </p>
                <button
                  onClick={openBooking}
                  className="w-full bg-white text-orange-600 px-6 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 hover:shadow-xl"
                >
                  Schedule Repair
                </button>
                <div className="mt-6 pt-6 border-t border-orange-400">
                  <p className="text-sm text-orange-100 mb-3">Emergency repair needed?</p>
                  <a href="tel:0716029811" className="flex items-center gap-3 text-white hover:text-orange-100 transition-colors">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-100">Call us now</p>
                      <p className="font-bold text-lg">(0716) 029 811</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Fast Service</h4>
                      <p className="text-sm text-gray-600">Most repairs completed same day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Certified Experts</h4>
                      <p className="text-sm text-gray-600">All technicians are certified & insured</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Warranty Included</h4>
                      <p className="text-sm text-gray-600">90-day warranty on all repairs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brands We Repair */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Brands We Repair</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Samsung',
                    'LG',
                    'Whirlpool',
                    'Bosch',
                    'GE',
                    'Maytag',
                    'Frigidaire',
                    'Electrolux',
                    'KitchenAid',
                    'Hotpoint',
                    'Miele',
                    'Haier',
                    'And more...'
                  ].map((brand, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

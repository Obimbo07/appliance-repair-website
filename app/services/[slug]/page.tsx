'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getServiceBySlug } from '@/lib/service-data'
import { Check, ArrowLeft, Phone } from 'lucide-react'
import { useBooking } from '@/components/BookingProvider'

export default function ServiceDetailPage() {
  const params = useParams()
  const { openBooking } = useBooking()
  const slug = params?.slug as string
  const service = getServiceBySlug(slug)

  // Set document title dynamically
  React.useEffect(() => {
    if (service) {
      document.title = `${service.title} | Applicare - Appliance Repair Kenya`
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name=\"description\"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', service.description)
      }
    }
  }, [service])

  if (!service) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="text-orange-500 font-semibold hover:text-orange-600">
            ← Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const IconComponent = service.icon

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image9.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">{service.title}</h1>
              <p className="text-xl text-blue-200">{service.description}</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Issues */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Issues We Fix</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.commonIssues.map((issue, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-gray-700">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Book?</h3>
                <p className="text-gray-600 mb-6">
                  Get professional repair service from our certified technicians. Same-day service available!
                </p>
                
                <button
                  onClick={openBooking}
                  className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg mb-4"
                >
                  Book Service Now
                </button>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-bold text-gray-800 mb-3">Or Call Us Directly</h4>
                  <a
                    href="tel:0716029811"
                    className="flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    0716 029 811
                  </a>
                  <a
                    href="tel:0723585580"
                    className="flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 font-semibold mt-2"
                  >
                    <Phone className="w-5 h-5" />
                    0723 585 580
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-bold text-gray-800 mb-3">WhatsApp Us</h4>
                  <a
                    href={`https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20need%20${encodeURIComponent(service.title)}%20service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    <span className="text-xl">💬</span>
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">⏰</span>
                    <span className="font-semibold text-gray-800">Same-Day Service</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">Available for emergency repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90 Day</div>
              <div className="text-orange-100">Warranty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

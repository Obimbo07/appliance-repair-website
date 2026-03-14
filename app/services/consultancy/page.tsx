'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useBooking } from '@/components/BookingProvider'
import { Check, ArrowLeft, Phone, CheckCircle2, Lightbulb, Users, Target } from 'lucide-react'

export default function ConsultancyPage() {
  const { openBooking } = useBooking()

  React.useEffect(() => {
    document.title = 'Appliance Consultancy Services | Applicare - Expert Advice Kenya'
  }, [])

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
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Appliance Consultancy Services</h1>
              <p className="text-xl text-blue-200">Expert advice to help you make informed decisions about your appliances</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Appliance Consultancy</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Our expert consultancy services help you navigate the complex world of home and commercial appliances. Whether you're purchasing new equipment, upgrading existing systems, or optimizing appliance performance, our certified consultants provide valuable insights and recommendations tailored to your specific needs.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With years of experience in appliance repair and maintenance, we understand what works and what doesn't. Let us guide you to make smart, cost-effective decisions that will save you time and money in the long run.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Pre-purchase appliance assessments',
                    'Energy efficiency consultations',
                    'Appliance selection guidance',
                    'Installation planning & recommendations',
                    'Brand comparison & reviews',
                    'Warranty & service plan evaluation',
                    'Commercial appliance consulting',
                    'Home kitchen design consultation',
                    'Appliance lifecycle analysis',
                    'Cost-benefit assessments',
                    'Troubleshooting guidance',
                    'Upgrade & replacement recommendations'
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

              {/* Consultation Areas */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Consultation Areas</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Residential Consultancy</h3>
                      <p className="text-gray-600">Expert advice for homeowners on appliance selection, energy efficiency, and maintenance planning. Perfect for new home setups, renovations, or appliance replacements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Consultancy</h3>
                      <p className="text-gray-600">Specialized guidance for businesses, restaurants, hotels, and commercial facilities. We help optimize your appliance investments for maximum ROI and operational efficiency.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Technical Assessment</h3>
                      <p className="text-gray-600">Detailed technical evaluations of existing appliances, identifying potential issues before they become costly repairs. Includes performance testing and recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Our Consultancy */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Consultancy Services?</h2>
                <ul className="space-y-3">
                  {[
                    'Unbiased, brand-neutral recommendations',
                    'Years of hands-on appliance repair experience',
                    'Up-to-date knowledge of market trends',
                    'Cost-saving strategies and insights',
                    'Personalized advice for your specific needs',
                    'Follow-up support included'
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Book Consultation CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-white mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Book a Consultation</h3>
                <p className="mb-6 text-orange-50">
                  Get expert advice from our appliance specialists. Schedule your consultation today!
                </p>
                <button
                  onClick={openBooking}
                  className="w-full bg-white text-orange-600 px-6 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 hover:shadow-xl"
                >
                  Schedule Consultation
                </button>
                <div className="mt-6 pt-6 border-t border-orange-400">
                  <p className="text-sm text-orange-100 mb-3">Need immediate assistance?</p>
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

              {/* Consultation Process */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Book Appointment</h4>
                      <p className="text-sm text-gray-600">Schedule your consultation at a convenient time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Consultation Session</h4>
                      <p className="text-sm text-gray-600">Discuss your needs with our expert consultant</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Get Recommendations</h4>
                      <p className="text-sm text-gray-600">Receive detailed advice and action plan</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Follow-up Support</h4>
                      <p className="text-sm text-gray-600">Ongoing assistance as you implement our advice</p>
                    </div>
                  </div>
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

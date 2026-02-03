'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useBooking } from '@/components/BookingProvider'
import { Check, ArrowLeft, Phone, CheckCircle2, Sun, Zap, Battery, Award, Home, Building2 } from 'lucide-react'

export default function SolarPage() {
  const { openBooking } = useBooking()

  React.useEffect(() => {
    document.title = 'Solar System Installation & Maintenance | Applicare - Kenya Solar Energy Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-yellow-900 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image9.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-yellow-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Solar System Installation</h1>
              <p className="text-xl text-yellow-200">Go green and save on electricity bills with our expert solar solutions</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Solar System Solutions</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Harness the power of the sun and reduce your electricity costs with our professional solar system installation services. We provide complete solar solutions including solar panels, inverters, battery systems, and mounting hardware. Our expert technicians ensure proper installation, optimal performance, and maximum energy savings for your home or business.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  With rising electricity costs in Kenya, solar energy is the smart investment for your future. Our systems are designed to provide reliable power, reduce your carbon footprint, and offer significant long-term savings. We use only high-quality, certified components backed by manufacturer warranties and our expert installation guarantee.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Complete solar system design',
                    'Professional installation',
                    'High-efficiency solar panels',
                    'Quality inverters & batteries',
                    'Grid-tie & off-grid systems',
                    'Hybrid solar solutions',
                    'Battery backup systems',
                    'Solar water heating',
                    'System monitoring & maintenance',
                    'Energy audit & consultation',
                    'Government incentive assistance',
                    '25-year panel warranty'
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

              {/* Solar Solutions */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Solar Solutions</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Residential Solar Systems</h3>
                      <p className="text-gray-600">Custom-designed solar solutions for homes of all sizes. Reduce or eliminate your electricity bills while increasing property value and energy independence.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Solar Installations</h3>
                      <p className="text-gray-600">Large-scale solar systems for businesses, offices, and industrial facilities. Maximize ROI with commercial-grade equipment and professional installation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Battery className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Battery Backup Systems</h3>
                      <p className="text-gray-600">Store excess solar energy for use during power outages or at night. Lithium-ion and deep-cycle battery options for reliable backup power.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Hybrid Solar Systems</h3>
                      <p className="text-gray-600">Combine grid power with solar energy for maximum efficiency and reliability. Smart systems that automatically switch between solar, battery, and grid power.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Solar */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg p-8 mb-8 border border-orange-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Solar Energy?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Reduce Electricity Bills</h4>
                      <p className="text-gray-600">Save up to 90% on your monthly electricity costs with solar power.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Environmental Benefits</h4>
                      <p className="text-gray-600">Reduce your carbon footprint and contribute to a cleaner environment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Energy Independence</h4>
                      <p className="text-gray-600">Generate your own power and reduce dependence on the grid.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Increase Property Value</h4>
                      <p className="text-gray-600">Solar installations can increase your property's market value by up to 20%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Long-Term Investment</h4>
                      <p className="text-gray-600">Solar systems typically pay for themselves in 4-7 years and last 25+ years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Low Maintenance</h4>
                      <p className="text-gray-600">Solar panels require minimal maintenance and come with long warranties.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Installation Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Site Assessment</h3>
                      <p className="text-gray-600">We visit your location to assess roof condition, sun exposure, and energy requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Design</h3>
                      <p className="text-gray-600">Our engineers design a solar system tailored to your specific energy needs and budget.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Installation</h3>
                      <p className="text-gray-600">Certified technicians install your solar system with precision and attention to detail.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">System Activation & Training</h3>
                      <p className="text-gray-600">We activate your system, test all components, and train you on operation and monitoring.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Support</h3>
                      <p className="text-gray-600">We provide maintenance, monitoring, and support to ensure optimal system performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg shadow-lg p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
                <p className="mb-6 text-orange-100">
                  Get a free solar assessment and quote today. Our experts are ready to help you start saving on electricity.
                </p>
                <button 
                  onClick={openBooking}
                  className="w-full bg-white text-orange-600 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 mb-4"
                >
                  Request Free Quote
                </button>
                <a 
                  href="tel:0716029811"
                  className="flex items-center justify-center gap-2 w-full bg-orange-700 text-white py-3 font-bold rounded hover:bg-orange-800 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call: 0716 029 811
                </a>
                <div className="mt-4 pt-4 border-t border-orange-400">
                  <p className="text-sm text-orange-100 mb-2">📍 Available in:</p>
                  <p className="text-white font-semibold">Nairobi, Nakuru & Surrounding Areas</p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Applicare?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Certified Experts</h4>
                      <p className="text-sm text-gray-600">Licensed solar installers with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality Components</h4>
                      <p className="text-sm text-gray-600">Premium solar panels and equipment with warranties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fast Installation</h4>
                      <p className="text-sm text-gray-600">Most systems installed within 1-3 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Ongoing maintenance and technical support</p>
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

'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useBooking } from '@/components/BookingProvider'
import { Check, ArrowLeft, Phone, CheckCircle2, Calendar, Shield, Wrench, Clock } from 'lucide-react'

export default function MaintenancePage() {
  const { openBooking } = useBooking()

  React.useEffect(() => {
    document.title = 'Appliance Maintenance Services | Applicare - Preventive Care Kenya'
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
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-3">Appliance Maintenance Services</h1>
              <p className="text-xl text-blue-200">Preventive maintenance to keep your appliances running efficiently</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Preventive Appliance Maintenance</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Regular maintenance is the key to extending the life of your appliances and avoiding costly repairs. Our comprehensive maintenance services ensure that your home and commercial appliances operate at peak efficiency, consume less energy, and deliver reliable performance year after year.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  From refrigerators and washing machines to dryers and dishwashers, our certified technicians perform thorough inspections, cleaning, and tune-ups to identify and address potential issues before they become major problems.
                </p>
              </div>

              {/* What We Offer */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Comprehensive appliance inspection',
                    'Deep cleaning of internal components',
                    'Filter replacement & cleaning',
                    'Lubrication of moving parts',
                    'Performance testing & calibration',
                    'Electrical connection checks',
                    'Safety inspection & testing',
                    'Drainage system cleaning',
                    'Seal & gasket inspection',
                    'Temperature calibration',
                    'Detailed maintenance report',
                    'Priority service for future repairs'
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

              {/* Maintenance Plans */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Maintenance Plans</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">One-Time Service</h3>
                    <p className="text-gray-600 mb-4">Single maintenance visit for immediate needs</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Full inspection
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Cleaning & tuning
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Maintenance report
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-orange-500 rounded-lg p-6 relative bg-orange-50">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Semi-Annual Plan</h3>
                    <p className="text-gray-600 mb-4">Maintenance every 6 months with priority service</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        All one-time benefits
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Priority scheduling
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        10% off repairs
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Wrench className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Annual Plan</h3>
                    <p className="text-gray-600 mb-4">Complete yearly maintenance coverage</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Quarterly visits
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        VIP priority service
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        15% off all repairs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Regular Maintenance</h2>
                <ul className="space-y-3">
                  {[
                    'Extend appliance lifespan by up to 50%',
                    'Reduce energy consumption and lower utility bills',
                    'Prevent unexpected breakdowns and costly repairs',
                    'Maintain optimal performance and efficiency',
                    'Ensure safe operation of all appliances',
                    'Preserve manufacturer warranty coverage',
                    'Peace of mind with professional oversight'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Book Maintenance CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 text-white mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Schedule Maintenance</h3>
                <p className="mb-6 text-orange-50">
                  Keep your appliances in top condition. Book your maintenance service today!
                </p>
                <button
                  onClick={openBooking}
                  className="w-full bg-white text-orange-600 px-6 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 hover:shadow-xl"
                >
                  Book Maintenance
                </button>
                <div className="mt-6 pt-6 border-t border-orange-400">
                  <p className="text-sm text-orange-100 mb-3">Questions about our plans?</p>
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

              {/* Appliances We Service */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Appliances We Service</h3>
                <div className="space-y-2 text-gray-600">
                  {[
                    'Refrigerators & Freezers',
                    'Washing Machines',
                    'Dryers',
                    'Dishwashers',
                    'Ovens & Cookers',
                    'Microwaves',
                    'Water Heaters',
                    'Air Conditioners',
                    'Commercial Appliances'
                  ].map((appliance, idx) => (
                    <div key={idx} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-orange-500" />
                      <span>{appliance}</span>
                    </div>
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

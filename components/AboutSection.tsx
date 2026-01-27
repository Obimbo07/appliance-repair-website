'use client'

import React from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'
import { useBooking } from './BookingProvider'

export default function AboutSection() {
  const { openBooking } = useBooking()
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We Bring Your Appliances Back to Life
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Applicare was born out of a simple realization: too many people in Nairobi, Nakuru and surrounding regions were struggling with unreliable repair services. We provide professional, honest, and dependable appliance repair solutions with transparent pricing, skilled technicians, and genuine parts. Whether it's a minor fault or complex electrical issue, our team restores your appliances with speed and precision.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Guaranteed Warranties</h3>
                  <p className="text-gray-600 text-sm">We provide warranties on all our repairs, giving you peace of mind with our services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">24/7 Service Availability</h3>
                  <p className="text-gray-600 text-sm">We offer round-the-clock service to ensure your appliances are fixed when you need them the most.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={openBooking}
                className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600"
              >
                Book Service
              </button>
              <a href="tel:0716029811" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2">
                <span>📞 0716 029 811</span>
              </a>
            </div>
          </div>

          {/* Right - Features Cards */}
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Guaranteed Warranties</h3>
                <p className="text-gray-600 text-sm">We provide warranties on all our repairs, giving you peace of mind with our services.</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">24/7 Service Availability</h3>
                <p className="text-gray-600 text-sm">We offer round-the-clock service to ensure your appliances are fixed when you need them the most.</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Quality Parts & Workmanship</h3>
                <p className="text-gray-600 text-sm">We use only genuine parts and back our repairs with a warranty for your peace of mind.</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Convenient Booking</h3>
                <p className="text-gray-600 text-sm">Schedule your service online 24/7 with our easy-to-use booking system, or call us directly.</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
              <button 
                onClick={openBooking}
                className="bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600"
              >
                Book Service
              </button>
              <a href="tel:0716029811" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2">
                📞 0716 029 811
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

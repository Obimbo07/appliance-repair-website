'use client'

import React from 'react'
import { Shield, Users, Wrench, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Guaranteed Warranties',
    description: 'We provide warranties on all our repairs, giving you peace of mind with our services.'
  },
  {
    icon: Clock,
    title: '24/7 Service Availability',
    description: 'We offer round-the-clock service to ensure your appliances are fixed when you need them the most.'
  },
  {
    icon: Users,
    title: 'Quality Parts & Workmanship',
    description: 'We use only genuine parts and back our repairs with a warranty for your peace of mind.'
  },
  {
    icon: Wrench,
    title: 'Convenient Booking',
    description: 'Schedule your service online 24/7 with our easy-to-use booking system, or call us directly.'
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Bring Your Appliances Back to Life
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Don't let a malfunctioning appliance disrupt your life. AppliCare is here to provide comprehensive repair solutions for all major brands and models. We offer transparent pricing, convenient online booking, and a satisfaction guarantee, so you can have peace of mind knowing your appliances are in good hands.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="bg-amber-50 p-8 md:p-10 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <feature.icon className="w-10 h-10 mb-4 text-purple-600 mx-auto md:mx-0" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start mt-10 pt-8 border-t border-amber-200">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition">
                Book Service
              </button>
              <a href="tel:1234567890" className="flex items-center gap-2 text-gray-800 font-semibold hover:text-orange-500 transition">
                <span>📞</span>
                (123) 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

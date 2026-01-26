'use client'

import React from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Certified Technicians',
    description: 'Our certified technicians can diagnose and repair all major brands of household appliances.',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: "We're your neighbors, dedicated to serving our community with top-notch appliance care.",
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Zap,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises. We provide upfront estimates before starting any work.',
    bgColor: 'bg-gray-200'
  },
  {
    icon: Clock,
    title: 'Prompt Service',
    description: 'We understand your time is valuable, so we offer same-day or next-day appointments.',
    bgColor: 'bg-pink-100'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div>
            <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
              Why choose us?
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We Bring Your Appliances Back to Life
            </h2>
            <p className="text-gray-700 mb-8">
              Don't let a malfunctioning appliance disrupt your life. Applicare is here to provide comprehensive repair solutions for all major brands and models. We offer transparent pricing, convenient online booking, and a satisfaction guarantee, so you can have peace of mind knowing your appliances are in good hands.
            </p>
            
            <div className="space-y-4 mb-8">
              {reasons.slice(0, 2).map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <reason.icon className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092162562-40038f56c232?w=600&h=400&fit=crop" 
              alt="Technician"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className={`${reason.bgColor} p-8 rounded-lg text-center`}>
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-3 text-gray-800">{reason.title}</h3>
              <p className="text-gray-700 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

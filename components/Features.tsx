'use client'

import React from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'

const features = [
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

export default function Features() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className={`${feature.bgColor} p-8 rounded-lg text-center`}>
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

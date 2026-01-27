'use client'

import React from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Expert Repairs',
    description: 'Certified technicians with years of hands-on experience in refrigerators, washing machines, cookers, microwaves, dishwashers, and commercial kitchen equipment.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Same-day or next-day service wherever possible. We understand your time matters and appliance downtime disrupts your life.',
  },
  {
    icon: Users,
    title: 'Honest Pricing',
    description: 'No hidden fees, transparent quotes, and honest recommendations. We only recommend repairs that are necessary and cost-effective.',
  },
  {
    icon: Zap,
    title: 'Quality Parts',
    description: 'We source genuine or high-quality compatible parts to ensure durable performance and lasting repairs for all major brands.',
  }
]

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092162562-40038f56c232?w=600&h=400&fit=crop" 
              alt="Technician at work"
              className="rounded-lg w-full"
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <service.icon className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-700 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

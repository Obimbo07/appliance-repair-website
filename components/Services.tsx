'use client'

import React from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Guaranteed Warranties',
    description: 'We provide warranties on all our repairs, giving you peace of mind with our services.',
  },
  {
    icon: Clock,
    title: '24/7 Service Availability',
    description: 'We offer round-the-clock service to ensure your appliances are fixed when you need them the most.',
  },
  {
    icon: Users,
    title: 'Convenient Booking',
    description: 'Schedule your service online 24/7 with our easy-to-use booking system, or call us directly.',
  },
  {
    icon: Zap,
    title: 'Quality Parts & Workmanship',
    description: 'We use only genuine parts and back our repairs with a warranty for your peace of mind.',
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

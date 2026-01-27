'use client'

import React from 'react'
import { Refrigerator, Waves, Coffee, Tv } from 'lucide-react'

const services = [
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description: 'We diagnose and fix cooling issues, leaks, unusual noises, and more to keep your food fresh and safe.',
  },
  {
    icon: Waves,
    title: 'Washing Machine Repair',
    description: 'From leaks and drainage issues to spin cycle malfunctions, we will get your laundry back on track.',
  },
  {
    icon: Coffee,
    title: 'Microwave & Oven Repair',
    description: 'Expert repair for microwaves, ovens, and cooking appliances. We handle electrical issues, heating problems, and more.',
  },
  {
    icon: Tv,
    title: 'Other Appliances',
    description: 'Dishwashers, water heaters, dryers, and more. We repair all major household appliances from top brands.',
  }
]

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-2 mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
            Comprehensive Home Appliances Repair Services
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of repair services for all major home appliances. Whether your refrigerator is leaking, your oven isn't heating, or your washing machine is making strange noises, we have the solution.
          </p>
          <div className="w-32 h-1 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0">
                  <service.icon className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 pt-2">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 ml-22">
                {service.description}
              </p>
              <a href="#" className="text-purple-600 font-bold hover:text-purple-700 transition inline-flex items-center gap-1 ml-22">
                Learn More 
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

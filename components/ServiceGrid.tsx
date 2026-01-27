'use client'

import React from 'react'

const serviceItems = [
  {
    title: 'Refrigerators & Freezers',
    description: 'Fix cooling issues, leaks, unusual noises, and thermostat problems to keep your food fresh and safe.',
  },
  {
    title: 'Washing Machines',
    description: 'Top and front load repairs for leaks, drainage issues, and spin cycle malfunctions.',
  },
  {
    title: 'Cookers & Ovens',
    description: 'We repair heating elements, ignition systems, and temperature control for perfect cooking results.',
  },
  {
    title: 'Microwaves',
    description: 'Restore microwave heating by repairing power, turntable, sensors, and other components.',
  },
  {
    title: 'Dishwashers',
    description: 'We tackle leaks, cleaning cycles, spray arms, and drainage issues for spotless dishes.',
  },
  {
    title: 'Commercial Kitchen Equipment',
    description: 'Professional repairs for commercial-grade appliances used in restaurants and businesses.',
  },
  {
    title: 'Water, Milk & Oil Dispensers',
    description: 'Specialized repair and maintenance for dispensing machines used in commercial settings.',
  },
  {
    title: 'Consultation & Maintenance',
    description: 'Expert consultancy, installation, and preventive maintenance training for all appliances.',
  }
]

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Home Appliances Repair Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of repair services for all major home appliances. Whether your refrigerator is leaking, your oven isn't heating, or your washing machine is making strange noises, we have the solution.
          </p>
        </div>

        {/* Services Grid - 2x4 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, idx) => (
            <div key={idx} className="text-center">
              {/* Simple icon representation */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 bg-white rounded-lg flex items-center justify-center border-2 border-purple-200">
                  {idx === 0 && <span className="text-3xl">🧊</span>}
                  {idx === 1 && <span className="text-3xl">🧺</span>}
                  {idx === 2 && <span className="text-3xl">☕</span>}
                  {idx === 3 && <span className="text-3xl">📺</span>}
                  {idx === 4 && <span className="text-3xl">💨</span>}
                  {idx === 5 && <span className="text-3xl">🔥</span>}
                  {idx === 6 && <span className="text-3xl">🧵</span>}
                  {idx === 7 && <span className="text-3xl">🍽️</span>}
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800">
                Learn More »
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex justify-center gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600">
            Book Service
          </button>
          <a href="tel:+254700000000" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-2">
            📞 +254 700 000 000
          </a>
        </div>
      </div>
    </section>
  )
}

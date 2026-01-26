'use client'

import React from 'react'

const stats = [
  { number: '380+', label: 'Satisfied Customers' },
  { number: '22', label: 'Expert Team Members' },
  { number: '44', label: 'Service Areas Covered' },
  { number: '12+', label: 'Years of Experience' }
]

export default function Stats() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop" 
              alt="Customer testimonial"
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-10 left-10 bg-white px-6 py-4 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-purple-600">380+</h3>
              <p className="text-gray-700 text-sm">Satisfied Customers</p>
            </div>
          </div>

          {/* Right - Testimonial */}
          <div>
            <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
              Clients Review
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Clients' Satisfaction is Important to Us
            </h2>

            {/* Testimonial Card */}
            <div className="bg-purple-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Freya Dean"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">Freya Dean</h3>
                  <p className="text-purple-200">@freyadean</p>
                </div>
              </div>
              <p className="text-gray-100">
                Excellent service! The team arrived right on time and quickly diagnosed the problem with my washing machine. They had all the necessary parts on hand and completed the repair efficiently. The pricing was transparent, and the technician even gave me tips on how to prevent future issues. I'm extremely satisfied and will definitely use their services again.
              </p>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

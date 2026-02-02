'use client'

import React from 'react'
import { useBooking } from './BookingProvider'

const projects = [
  {
    image: '/image0.jpeg',
    title: 'Refrigerator Repair'
  },
  {
    image: '/image1.jpeg',
    title: 'Washing Machine Service'
  },
  {
    image: '/image2.jpeg',
    title: 'AC Installation'
  },
  {
    image: '/image3.jpeg',
    title: 'Oven Repair'
  }
]

export default function Projects() {
  const { openBooking } = useBooking()
  
  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
            Featured Projects
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured Showcase of Successful Projects
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover how Applicare has helped countless households with their appliance repair needs. Browse through our recent projects to see the quality and expertise that define our services.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              {idx === 2 && (
                <div className="absolute inset-0 bg-yellow-400 opacity-40 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={openBooking}
            className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600"
          >
            Book Service
          </button>
          <a href="/projects" className="text-gray-800 font-semibold hover:text-purple-600">
            View All Projects »
          </a>
        </div>
      </div>
    </section>
  )
}

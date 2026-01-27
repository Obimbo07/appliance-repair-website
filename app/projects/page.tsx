import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const projects = [
  {
    title: 'Commercial Refrigerator Repair',
    location: 'Nairobi CBD',
    description: 'Repaired a large commercial refrigerator for a restaurant. The unit had a faulty compressor and thermostat issues.',
    appliance: 'Commercial Refrigerator',
    brand: 'LG',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop',
  },
  {
    title: 'Washing Machine Drum Replacement',
    location: 'Westlands, Nairobi',
    description: 'Complete drum replacement and bearing repair for a front-load washing machine that had severe vibration issues.',
    appliance: 'Washing Machine',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=400&fit=crop',
  },
  {
    title: 'AC System Overhaul',
    location: 'Karen, Nairobi',
    description: 'Complete air conditioning system maintenance including refrigerant recharge, filter replacement, and electrical repairs.',
    appliance: 'Air Conditioner',
    brand: 'Hisense',
    image: 'https://images.unsplash.com/photo-1631545806609-389cfc45bfbc?w=600&h=400&fit=crop',
  },
  {
    title: 'Oven Heating Element Repair',
    location: 'Kilimani, Nairobi',
    description: 'Replaced faulty heating elements and repaired the thermostat in a built-in electric oven.',
    appliance: 'Electric Oven',
    brand: 'Bosch',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    title: 'Industrial Freezer Repair',
    location: 'Nakuru',
    description: 'Emergency repair of a commercial freezer for a supermarket. Fixed compressor and sealed refrigerant leak.',
    appliance: 'Commercial Freezer',
    brand: 'Hotpoint',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop',
  },
  {
    title: 'Dishwasher Motor Replacement',
    location: 'Lavington, Nairobi',
    description: 'Replaced the circulation pump motor and cleaned the drainage system in a built-in dishwasher.',
    appliance: 'Dishwasher',
    brand: 'LG',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Our Projects</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Browse through some of our recent appliance repair projects. Each project represents our commitment to quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                    {project.brand}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{project.appliance}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have an Appliance That Needs Repair?</h2>
          <p className="text-gray-600 mb-8">
            Join our list of satisfied customers. Book a service appointment today and let our experts handle your appliance repair needs.
          </p>
          <a 
            href="https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20need%20appliance%20repair%20service" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-8 py-3 font-bold rounded hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book a Service
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

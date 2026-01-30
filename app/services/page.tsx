import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { services } from '@/lib/service-data'

export const metadata: Metadata = {
  title: 'Appliance Repair Services in Kenya',
  description: 'Professional appliance repair services for washing machines, refrigerators, cookers, microwaves, dishwashers & more. Fast, reliable service in Nairobi, Nakuru & surrounding areas. Call 0716 029 811.',
  openGraph: {
    title: 'Appliance Repair Services in Kenya | Applicare',
    description: 'Professional appliance repair services for all major brands. Fast, reliable, and affordable repairs by certified technicians.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image9.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Professional appliance repair services for all major brands. Fast, reliable, and affordable repairs by certified technicians.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-500 border-t-4 border-orange-500 hover-lift group animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="text-orange-500 font-semibold text-sm group-hover:text-orange-600">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Our certified technicians are ready to help. Book a service appointment today and get your appliance back to working order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20need%20appliance%20repair%20service" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 font-bold rounded hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              WhatsApp Us
            </a>
            <a 
              href="tel:0716029811"
              className="bg-white text-orange-500 px-8 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Call 0716 029 811
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

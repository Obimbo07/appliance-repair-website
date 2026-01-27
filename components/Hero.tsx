'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop)',
        backgroundBlend: 'multiply',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <div className="inline-block bg-white text-gray-800 px-3 py-1 text-sm font-semibold">
            ✓ Your satisfaction is our top priority.
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-yellow-400">Broken Home Appliance?</span>
            <br />
            We've got the fix.
          </h1>
          <p className="text-lg text-gray-200 border-l-4 border-yellow-400 pl-4">
            Our certified technicians are dedicated to providing professional, honest, and dependable appliance repair services in Nairobi, Nakuru and surrounding regions.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600">
              Book Service
            </button>
            <a href="tel:+254700000000" className="flex items-center gap-2 text-white font-semibold hover:text-yellow-400">
              <Phone size={20} />
              +254 700 000 000
            </a>
          </div>
        </div>

        {/* Right - Booking Form */}
        <div className="bg-purple-600 p-8 rounded-lg shadow-xl">
          <h2 className="text-white text-2xl font-bold mb-6">Request Your Services</h2>
          <p className="text-gray-200 text-sm mb-6">Schedule your home appliance repair online – 24/7 availability</p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded text-gray-800" />
            <div className="grid grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone" className="px-4 py-3 rounded text-gray-800" />
              <input type="email" placeholder="Email" className="px-4 py-3 rounded text-gray-800" />
            </div>
            <input type="text" placeholder="Address" className="w-full px-4 py-3 rounded text-gray-800" />
            <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 rounded text-gray-800" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" placeholder="Date of Visit" className="px-4 py-3 rounded text-gray-800" />
              <input type="time" placeholder="Time of Visit" className="px-4 py-3 rounded text-gray-800" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600 rounded">
              Schedule Your Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

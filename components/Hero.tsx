'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen md:h-screen bg-cover bg-center flex items-center pt-20 md:pt-0"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop)',
        backgroundBlend: 'multiply',
        backgroundColor: 'rgba(20,20,40,0.75)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center py-8 md:py-0">
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
        <div className="bg-black p-6 md:p-8 rounded-lg shadow-xl w-full">
          <h2 className="text-white text-2xl font-bold mb-2">Request Your Services</h2>
          <p className="text-gray-300 text-sm mb-6">Schedule your home appliance repair online – 24/7 availability</p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Address" 
              className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
            />
            <input 
              type="text" 
              placeholder="ZIP Code" 
              className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="date" 
                placeholder="Date of Visit" 
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
              />
              <input 
                type="time" 
                placeholder="Time of Visit" 
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600 rounded transition"
            >
              Schedule Your Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

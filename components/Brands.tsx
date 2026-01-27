'use client'

import React from 'react'

const brands = [
  'LG',
  'SAMSUNG',
  'HOTPOINT',
  'BOSCH',
  'HISENSE',
  'BLACK & DECKER',
  'RAMPTON',
  'AND MORE'
]

export default function Brands() {
  return (
    <section 
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)',
        backgroundBlend: 'multiply',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Brands Section */}
        <div className="mb-16">
          <h3 className="text-center text-gray-400 text-lg mb-12">We Repair All Major Brand Appliances</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand, idx) => (
              <div key={idx} className="text-center text-gray-300 font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section with Badge */}
        <div className="relative text-center py-12">
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD700" strokeWidth="8" />
                <text x="50" y="45" textAnchor="middle" fill="#FFD700" fontSize="24" fontWeight="bold">
                  Guaranteed
                </text>
                <text x="50" y="65" textAnchor="middle" fill="#FF5722" fontSize="20" fontWeight="bold">
                  SATISFACTION
                </text>
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Reliable and Experienced Appliance Repair Team
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Since 2023, Applicare has been a trusted appliance repair partner in Nairobi, Nakuru and surrounding regions. We are committed to providing professional, honest, and dependable repair services. Our skilled technicians diagnose, repair, and maintain all major household and commercial appliance brands with transparent pricing and genuine parts.
          </p>
        </div>
      </div>
    </section>
  )
}

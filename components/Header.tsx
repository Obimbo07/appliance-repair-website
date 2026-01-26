'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-24 h-16 bg-white border border-gray-300 flex items-center justify-center">
          <div className="text-center">
            <div className="flex gap-0.5 justify-center mb-0.5">
              <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
              <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
            </div>
            <p className="text-xs font-bold text-gray-800">APPLICARE</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-gray-700">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Services</a>
          <a href="#" className="hover:text-purple-600">About</a>
          <a href="#" className="hover:text-purple-600">Service Areas</a>
          <a href="#" className="hover:text-purple-600">Projects</a>
          <a href="#" className="hover:text-purple-600">Reviews</a>
          <a href="#" className="hover:text-purple-600">Blog</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-orange-500 font-semibold">
            <Phone size={20} />
            <span>(123) 456 7890</span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600">
            Book Service
          </button>
        </div>
      </div>
    </header>
  )
}

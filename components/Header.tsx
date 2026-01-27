'use client'

import React, { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-orange-500 font-semibold">
            <Phone size={20} />
            <span>+254 700 000 000</span>
          </div>
          <a href="https://wa.me/254700000000?text=Hello%20Applicare" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 font-bold hover:bg-green-600">
            WhatsApp
          </a>
          <button className="bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600">
            Book Service
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 p-4 text-gray-700">
            <a href="#" className="hover:text-purple-600 font-semibold">Home</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Services</a>
            <a href="#" className="hover:text-purple-600 font-semibold">About</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Service Areas</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Projects</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Reviews</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Blog</a>
            <a href="#" className="hover:text-purple-600 font-semibold">Contact</a>
            <div className="flex items-center gap-2 text-orange-500 font-semibold pt-2 border-t border-gray-200">
              <Phone size={20} />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <a href="https://wa.me/254700000000?text=Hello%20Applicare" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 font-bold hover:bg-green-600 text-center rounded">
                WhatsApp
              </a>
              <button className="bg-orange-500 text-white px-4 py-2 font-bold hover:bg-orange-600 w-full rounded">
                Book Service
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

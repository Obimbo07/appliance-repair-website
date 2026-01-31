'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import BookServiceModal from './BookServiceModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <header suppressHydrationWarning className={`sticky top-0 z-50 transition-all duration-300 ${
      mounted && isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-24 h-16 bg-white border border-gray-300 flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="flex gap-0.5 justify-center mb-0.5">
              <div className="w-4 h-4 bg-orange-500 rounded-sm animate-pulse"></div>
              <div className="w-4 h-4 bg-purple-600 rounded-sm animate-pulse animation-delay-100"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-sm animate-pulse animation-delay-200"></div>
            </div>
            <p className="text-xs font-bold text-gray-800">APPLICARE</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-gray-700">
          <Link href="/" className="relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
          <Link href="/services" className="relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Services</Link>
          <Link href="/about" className="relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">About</Link>
          <Link href="/projects" className="relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Projects</Link>
          <Link href="/contact" className="relative hover:text-purple-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-orange-500 font-semibold group">
            <Phone size={20} className="group-hover:animate-pulse" />
            <span className="group-hover:text-orange-600 transition-colors duration-300">+254 700 000 000</span>
          </div>
          <a href="https://wa.me/254700000000?text=Hello%20Applicare" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 font-bold hover:bg-green-600 hover:scale-105 transition-all duration-300 hover:shadow-lg">
            WhatsApp
          </a>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-orange-500 text-white px-6 py-2 font-bold hover:bg-orange-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Book Service
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <div className="transition-transform duration-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div suppressHydrationWarning className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
        mounted && isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <Link href="/" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="flex items-center gap-2 text-orange-500 font-semibold pt-2 border-t border-gray-200">
            <Phone size={20} />
            <span>+254 700 000 000</span>
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
            <a href="https://wa.me/254700000000?text=Hello%20Applicare" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 font-bold hover:bg-green-600 text-center rounded transition-all duration-300 hover:scale-[1.02]">
              WhatsApp
            </a>
            <button 
              onClick={() => { setIsBookingOpen(true); setIsOpen(false); }}
              className="bg-orange-500 text-white px-4 py-2 font-bold hover:bg-orange-600 w-full rounded transition-all duration-300 hover:scale-[1.02]"
            >
              Book Service
            </button>
          </div>
        </nav>
      </div>
    </header>
    
    {/* Book Service Modal */}
    <BookServiceModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}

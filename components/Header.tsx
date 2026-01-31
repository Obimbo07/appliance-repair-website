'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { useBooking } from './BookingProvider'
import Image from 'next/image'

// Social media icons as SVG components
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { openBooking } = useBooking()
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
<<<<<<< HEAD
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
=======
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className={`bg-[#1a1a2e] text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-end py-2">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61586070070904" className="hover:text-orange-500 transition-colors duration-300" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="X (Twitter)">
                  <XIcon />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors duration-300" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/applicare.ke?igsh=MTZvZDdyeHVzajZmcQ==" className="hover:text-orange-500 transition-colors duration-300" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@applicare3?_r=1&_t=ZS-93RaDDiolhV" className="hover:text-orange-500 transition-colors duration-300" aria-label="TikTok">
                  <TikTokIcon />
                </a>
              </div>
              {/* Phone Number - Hidden on small screens, visible from md */}
              <div className="h-4 w-px bg-gray-600 mx-2 hidden md:block"></div>
              <a href="tel:0716029811" className="hidden md:flex items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300">
                <div className="bg-orange-500 p-1.5 rounded">
                  <Phone size={14} />
                </div>
                <span className="font-semibold">(0716) 029 811</span>
              </a>
>>>>>>> 65cf41db0a6a7a7d5a3f1569065a53d4a5c5e3bf
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-stretch">
            {/* Logo - Creates L-shape effect */}
            <Link href="/" className="relative flex items-center -mt-8 mr-12 hover:opacity-90 transition-all duration-300">
              <div className="bg-white p-3 shadow-lg">
                <Image 
                  src="/logo2.png" 
                  alt="Applicare Logo" 
                  width={100} 
                  height={100} 
                  className=" object-contain"
                  priority
                />
             </div>
            </Link> 

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <Link href="/" className="flex items-center gap-1 px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                Home
              </Link>
              <div className="relative group">
                <Link href="/services" className="flex items-center gap-1 px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                  Services
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-purple-600 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                {/* Services Dropdown */}
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                  <button 
                    onClick={openBooking}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-colors duration-300"
                  >
                    Consultancy
                  </button>
                  <button 
                    onClick={openBooking}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-colors duration-300"
                  >
                    Maintenance
                  </button>
                  <button 
                    onClick={openBooking}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-colors duration-300"
                  >
                    Repair
                  </button>
                </div>
              </div>
              <Link href="/about" className="flex items-center gap-1 px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                About
              </Link>
              <Link href="/projects" className="px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Projects
              </Link>
              <Link href="/about#testimonials" className="px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Reviews
              </Link>
              <Link href="/blog" className="px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Blog
              </Link>
              <Link href="/careers" className="px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Careers
              </Link>
              <Link href="/training" className="px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300">
                Training
              </Link>
              <Link href="/contact" className="flex items-center gap-1 px-4 py-6 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                Contact
              </Link>
            </nav>

            {/* Book Service Button */}
            <div className="hidden lg:flex items-center">
              <button 
                onClick={openBooking}
                className="bg-orange-500 text-white px-6 py-3 font-bold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
              >
                Book Service
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-auto p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 self-center"
              aria-label="Toggle menu"
            >
              <div className="transition-transform duration-300">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
<<<<<<< HEAD
      <div suppressHydrationWarning className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
        mounted && isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
=======
      <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
>>>>>>> 65cf41db0a6a7a7d5a3f1569065a53d4a5c5e3bf
      }`}>
        <nav className="flex flex-col gap-4 p-4 text-gray-700">
          <Link href="/" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Service Areas</Link>
          <Link href="/projects" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about#testimonials" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link href="/blog" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/careers" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link href="/training" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Training</Link>
          <Link href="/contact" className="hover:text-purple-600 font-semibold transition-colors duration-300 hover:translate-x-2 transform" onClick={() => setIsOpen(false)}>Contact</Link>
          
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300" aria-label="X (Twitter)">
              <XIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-orange-500 font-semibold pt-2 border-t border-gray-200">
            <Phone size={20} />
            <span>0716 029 811 / 0723 585 580</span>
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
            <a href="https://wa.me/254716029811?text=Hello%20Applicare" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 font-bold hover:bg-green-600 text-center rounded transition-all duration-300 hover:scale-[1.02]">
              WhatsApp
            </a>
            <button 
              onClick={() => { openBooking(); setIsOpen(false); }}
              className="bg-orange-500 text-white px-4 py-2 font-bold hover:bg-orange-600 w-full rounded transition-all duration-300 hover:scale-[1.02]"
            >
              Book Service
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

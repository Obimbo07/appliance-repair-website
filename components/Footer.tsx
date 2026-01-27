'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useBooking } from './BookingProvider'

export default function Footer() {
  const { openBooking } = useBooking()
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image 
                src="/applicare-logo.png" 
                alt="Applicare Logo" 
                width={160} 
                height={64} 
                className="h-20 w-auto object-contain bg-white rounded p-2"
              />
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Professional appliance repair services in Nairobi & Nakuru. Fast, reliable, and affordable.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>Nairobi & Nakuru, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                <span>0716 029 811 / 0723 585 580</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0" />
                <span>info@applicare.co.ke</span>
              </div>
            </div>
            <button 
              onClick={openBooking}
              className="bg-orange-500 text-white px-6 py-3 font-bold hover:bg-orange-600 mt-6 w-full"
            >
              Book Service
            </button>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Business Hours</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏰</span>
                <span>Mon - Fri: 8:00am - 7:30pm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏰</span>
                <span>Saturday: 8:00am - 1:30pm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⏰</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <Link href="/about" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> About Us
              </Link>
              <Link href="/services" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Our Services
              </Link>
              <Link href="/projects" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Projects
              </Link>
              <Link href="/blog" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Blog
              </Link>
              <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons and Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Instagram size={24} />
              </a>
            </div>

            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-yellow-400">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2026 Applicare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

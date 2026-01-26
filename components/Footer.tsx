'use client'

import React from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-16 bg-white border border-gray-300 flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex gap-0.5 justify-center mb-0.5">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                  <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                </div>
                <p className="text-xs font-bold text-gray-800">APPLICARE</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>324 King Street, FL, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                <span>(123) 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0" />
                <span>info@example.com</span>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 font-bold hover:bg-orange-600 mt-6 w-full">
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
            <h3 className="font-bold text-lg mb-6 text-white">Information</h3>
            <div className="space-y-3 text-gray-300">
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> About Us
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Appliance Brands
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Reviews
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Service Areas
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400">
                <span>›</span> Contact Us
              </a>
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Instagram</h3>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div key={idx} className="aspect-square bg-gray-700 rounded overflow-hidden hover:opacity-80">
                  <img 
                    src={`https://images.unsplash.com/photo-1${570000000000 + idx}?w=150&h=150&fit=crop`}
                    alt={`Instagram ${idx}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'https://images.unsplash.com/photo-1581092162562-40038f56c232?w=150&h=150&fit=crop'
                    }}
                  />
                </div>
              ))}
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

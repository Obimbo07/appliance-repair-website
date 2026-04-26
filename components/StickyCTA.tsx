'use client'

import React, { useEffect, useState } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'
import { useBooking } from './BookingProvider'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isBelowHero, setIsBelowHero] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down
      setIsVisible(window.scrollY > 300)
      // Only show if below hero section
      setIsBelowHero(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 animate-slideUp">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254704118177?text=Hello%20Applicare%2C%20I%20need%20appliance%20repair%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex-shrink-0 border-2 border-white"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:0704118177"
        className="w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex-shrink-0 border-2 border-white"
        aria-label="Call us now"
        title="Call us: 0704 118 177"
      >
        <Phone size={32} />
      </a>

      {/* Book Service Button - Only show when scrolled down more */}
      {isBelowHero && (
        <button
          onClick={openBooking}
          className="w-16 h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex-shrink-0 border-2 border-white font-bold text-xs text-center animate-pulse"
          aria-label="Book a service"
          title="Get Free Quote"
        >
          Quote
        </button>
      )}

      {/* Floating Label */}
      <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-center text-xs font-bold whitespace-nowrap animate-fadeIn">
        Quick Contact
      </div>
    </div>
  )
}

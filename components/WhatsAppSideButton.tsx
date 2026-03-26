'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppSideButton() {
  return (
    <a
      href="https://wa.me/254704118177?text=Hello%20Applicare"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-3 md:right-4 bottom-24 md:bottom-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg px-3 py-3 md:px-4 md:py-3 inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline font-semibold">WhatsApp 0704 118 177</span>
    </a>
  )
}

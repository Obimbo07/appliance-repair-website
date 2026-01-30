'use client'

import React, { useState, useEffect } from 'react'
import { X, Mail, Percent } from 'lucide-react'

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('discountPopupDismissed')
    if (dismissed) return

    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('discountPopupDismissed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    const subject = '🎉 New Discount Signup - 20% OFF Request'
    const body = `New customer signup for 20% discount!

Email: ${email}
Date: ${new Date().toLocaleString()}

Please send them their discount code.`

    // Open email client
    window.location.href = `mailto:information@applicare.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Close popup after success
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-0 bottom-4 z-50 animate-slideInLeft">
      {/* Main Popup */}
      <div className="relative bg-gradient-to-b from-amber-400 to-orange-500 rounded-r-2xl shadow-2xl w-[320px] overflow-hidden">
        {/* Decorative circles on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-3 flex flex-col justify-around py-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-900 rounded-full -mr-1.5" />
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
          aria-label="Close popup"
        >
          <X size={14} className="text-white" />
        </button>

        {/* Content */}
        <div className="p-6 pl-8">
          {!isSubmitted ? (
            <>
              {/* Icon and Offer */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Percent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">20% OFF</h3>
                  <p className="text-white/90 text-sm">Limited Time Offer</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white font-medium mb-4 mt-4">
                Get 20% off your first repair!
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-amber-600 font-bold py-3 rounded-lg hover:bg-amber-50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Get My Discount
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>
              </form>

              {/* Terms */}
              <p className="text-white/70 text-xs text-center mt-3">
                Valid for new customers only. T&Cs apply.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You&apos;re In!</h3>
              <p className="text-white/90 text-sm">
                Check your email for your discount code.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

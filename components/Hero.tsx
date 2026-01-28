'use client'

import React, { useEffect, useState } from 'react'
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { useBooking } from './BookingProvider'

const heroSlides = [
  {
    image: '/image0.jpeg',
    title: 'Broken Home Appliance?',
    subtitle: "We've got the fix.",
    description: 'Our certified technicians are dedicated to providing professional, honest, and dependable appliance repair services in Nairobi, Nakuru and surrounding regions.',
  },
  {
    image: '/image1.jpeg',
    title: 'Fast & Reliable',
    subtitle: 'Same-Day Service Available',
    description: 'We understand the urgency when your appliances break down. Our team is ready to provide quick, efficient repairs to get your life back to normal.',
  },
  {
    image: '/image2.jpeg',
    title: 'Expert Technicians',
    subtitle: 'Certified & Experienced',
    description: 'Our team of certified professionals has years of experience repairing all major appliance brands with guaranteed satisfaction.',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section 
      className="relative min-h-screen md:h-screen bg-cover bg-center flex items-center pt-20 md:pt-0 overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundBlend: 'multiply',
        backgroundColor: 'rgba(20,20,40,0.75)'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent" />
      
      {/* Slide navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center py-8 md:py-0 relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <div 
            key={`badge-${currentSlide}`}
            className="inline-block bg-white text-gray-800 px-3 py-1 text-sm font-semibold animate-fadeInDown"
          >
            ✓ Your satisfaction is our top priority.
          </div>
          <h1 
            key={`title-${currentSlide}`}
            className="text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp"
          >
            <span className="text-yellow-400">{slide.title}</span>
            <br />
            {slide.subtitle}
          </h1>
          <p 
            key={`desc-${currentSlide}`}
            className="text-lg text-gray-200 border-l-4 border-yellow-400 pl-4 animate-fadeInUp animation-delay-200"
          >
            {slide.description}
          </p>
          <div className="flex gap-4 pt-4 animate-fadeInUp animation-delay-400">
            <button 
              onClick={openBooking}
              className="bg-orange-500 text-white px-8 py-3 font-bold hover:bg-orange-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Book Service
            </button>
            <a href="tel:0716029811" className="flex items-center gap-2 text-white font-semibold hover:text-yellow-400 transition-colors duration-300">
              <Phone size={20} className="animate-pulse" />
              0716 029 811
            </a>
          </div>
        </div>

        {/* Right - Booking Form */}
        <div className="bg-black/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl w-full animate-fadeInRight transform hover:shadow-orange-500/20 transition-shadow duration-500">
          <h2 className="text-white text-2xl font-bold mb-2">Request Your Services</h2>
          <p className="text-gray-300 text-sm mb-6">Schedule your home appliance repair online – 24/7 availability</p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Address" 
              className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
            />
            <input 
              type="text" 
              placeholder="ZIP Code" 
              className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="date" 
                placeholder="Date of Visit" 
                className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
              />
              <input 
                type="time" 
                placeholder="Time of Visit" 
                className="w-full px-4 py-3 rounded bg-white border-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-all duration-300 shadow-sm" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 font-bold hover:bg-orange-600 rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Schedule Your Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

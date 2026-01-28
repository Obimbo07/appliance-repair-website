'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const stats = [
  { number: '380+', label: 'Satisfied Customers' },
  { number: '22', label: 'Expert Team Members' },
  { number: '44', label: 'Service Areas Covered' },
  { number: '12+', label: 'Years of Experience' }
]

const testimonials = [
  {
    name: 'Freya Dean',
    handle: '@freyadean',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'Excellent service! The team arrived right on time and quickly diagnosed the problem with my washing machine. They had all the necessary parts on hand and completed the repair efficiently. The pricing was transparent, and the technician even gave me tips on how to prevent future issues.',
    rating: 5,
  },
  {
    name: 'James Mwangi',
    handle: '@jamesmwangi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'I had an emergency with my refrigerator and Applicare came through within hours. Professional, courteous, and extremely knowledgeable. My fridge is working perfectly now. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Sarah Kimani',
    handle: '@sarahk',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Best appliance repair service in Nairobi! They fixed my oven that two other companies couldn\'t repair. Fair pricing and excellent workmanship. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'David Ochieng',
    handle: '@davidochieng',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    text: 'The technician was very professional and explained everything clearly. He fixed my AC unit quickly and it\'s been running smoothly since. Great customer service from start to finish.',
    rating: 5,
  },
]

export default function Stats() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate counters
  useEffect(() => {
    if (!isVisible) return

    const targets = stats.map(stat => parseInt(stat.number.replace(/\D/g, '')))
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounters(targets.map(target => Math.min(Math.round((step / steps) * target), target)))
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid with animated counters */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-4xl font-bold text-purple-600 mb-2">
                {counters[idx]}{stat.number.includes('+') ? '+' : ''}
              </h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop" 
              alt="Customer testimonial"
              className="rounded-lg w-full shadow-xl hover:shadow-2xl transition-shadow duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-lg shadow-lg animate-float">
              <h3 className="text-3xl font-bold text-blue-600">{counters[0]}+</h3>
              <p className="text-gray-700 text-sm">Satisfied Customers</p>
            </div>
          </div>

          {/* Right - Testimonial Slider */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
              Clients Review
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Clients' Satisfaction is Important to Us
            </h2>

            {/* Testimonial Slider */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <div 
                      key={idx}
                      className="w-full flex-shrink-0"
                    >
                      <div className="bg-blue-600 text-white p-6 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-400"
                          />
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-blue-200">{testimonial.handle}</p>
                          </div>
                          <div className="ml-auto flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-100 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? 'bg-orange-500 w-8' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

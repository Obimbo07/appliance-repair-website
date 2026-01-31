'use client'

import React, { useEffect, useRef, useState } from 'react'
<<<<<<< HEAD
import { Refrigerator, Waves, Coffee, Tv, ChevronLeft, ChevronRight, Sun } from 'lucide-react'
=======
import { Refrigerator, Waves, Coffee, Tv, Sun, ChevronLeft, ChevronRight } from 'lucide-react'
>>>>>>> 65cf41db0a6a7a7d5a3f1569065a53d4a5c5e3bf

const services = [
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description: 'We diagnose and fix cooling issues, leaks, unusual noises, and more to keep your food fresh and safe.',
  },
  {
    icon: Waves,
    title: 'Washing Machine Repair',
    description: 'From leaks and drainage issues to spin cycle malfunctions, we will get your laundry back on track.',
  },
  {
    icon: Coffee,
    title: 'Microwave & Oven Repair',
    description: 'Expert repair for microwaves, ovens, and cooking appliances. We handle electrical issues, heating problems, and more.',
  },
  {
    icon: Tv,
    title: 'Other Appliances',
    description: 'Dishwashers, water heaters, dryers, and more. We repair all major household appliances from top brands.',
  },
  {
    icon: Sun,
    title: 'Solar System Installation',
<<<<<<< HEAD
    description: 'Professional installation and maintenance of residential solar systems to harness clean, renewable energy for your home.',
=======
    description: 'Professional installation of solar panels, inverters, and battery systems. Go green and save on electricity bills with our expert solar solutions.',
>>>>>>> 65cf41db0a6a7a7d5a3f1569065a53d4a5c5e3bf
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

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

  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current
    if (slider) {
      const scrollAmount = 320
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-amber-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-yellow-400 text-gray-900 font-bold px-4 py-2 mb-6 hover:scale-105 transition-transform duration-300">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
            Comprehensive Home Appliances Repair Services
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of repair services for all major home appliances. Whether your refrigerator is leaking, your oven isn't heating, or your washing machine is making strange noises, we have the solution.
          </p>
          <div className="w-32 h-1 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Services Slider for Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 px-8 scrollbar-hide snap-x snap-mandatory"
          >
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex-shrink-0 w-[280px] bg-white rounded-xl p-6 shadow-lg snap-center transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0 mb-4">
                  <service.icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="#" className="text-purple-600 font-bold hover:text-purple-700 transition inline-flex items-center gap-1 group">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Services Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 pt-2 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 ml-22">
                {service.description}
              </p>
              <a href="#" className="text-purple-600 font-bold hover:text-purple-700 transition inline-flex items-center gap-1 ml-22 group/link">
                Learn More 
                <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

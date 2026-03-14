'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const brands = [
  // { name: "Bosch", logo: "https://cdn.worldvectorlogo.com/logos/bosch-logo-1.svg", url: "https://www.bosch.com" },
  { name: "Samsung", logo: "https://cdn.worldvectorlogo.com/logos/samsung-8.svg", url: "https://www.samsung.com" },
  { name: "LG", logo: "https://cdn.worldvectorlogo.com/logos/lg-electronics.svg", url: "https://www.lg.com" },
  { name: "Electrolux", logo: "https://cdn.worldvectorlogo.com/logos/electrolux-2.svg", url: "https://www.electrolux.com" },
  // { name: "Haier", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Haier_logo.svg", url: "https://www.haier.com" },
  { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/320px-Siemens-logo.svg.png", url: "https://www.siemens.com" },
  { name: "Whirlpool", logo: "https://cdn.worldvectorlogo.com/logos/whirlpool-1.svg", url: "https://www.whirlpool.com" },
  { name: "Hotpoint", logo: "https://cdn.worldvectorlogo.com/logos/hotpoint.svg", url: "https://www.hotpoint.com" },
  { name: "Philips", logo: "https://cdn.worldvectorlogo.com/logos/philips-7.svg", url: "https://www.philips.com" },
  { name: "Miele", logo: "https://cdn.worldvectorlogo.com/logos/miele-1.svg", url: "https://www.miele.com" },
  // { name: "GE", logo: "https://cdn.worldvectorlogo.com/logos/ge-monogram.svg", url: "https://www.ge.com" },
  { name: "Hisense", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hisense.svg", url: "https://www.hisense.com" },
]

export default function Brands() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollAmount = 1.2; // px per tick
    const interval = setInterval(() => {
      if (!slider) return;
      // If at end, reset to start for infinite loop
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 2) {
        slider.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'auto' });
      }
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isHovered]);

  // Manual scroll for buttons (optional, keep for accessibility)
  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = 220;
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      className="relative py-20 overflow-hidden"
    >
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/image4.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
          transform: 'scale(1.1)',
        }}
      />
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 z-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Brands Section */}
        <div className="mb-16">
          <h3 className="text-center text-gray-400 text-lg mb-12">We Repair All Major Brand Appliances</h3>
          <div className="relative">
            <button
              aria-label="Scroll brands left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
              onClick={() => scroll('left')}
              style={{ display: 'block' }}
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <div
              ref={sliderRef}
              className="flex gap-8 px-12"
              style={{ 
                overflow: 'hidden',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Duplicate brands for seamless infinite scroll */}
              {[...brands, ...brands].map((brand, idx) => (
                <a
                  key={idx}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[160px] h-20 bg-white/95 border border-white/20 shadow rounded-lg px-6 py-4 flex-shrink-0 flex items-center justify-center backdrop-blur hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                  title={brand.name}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-10 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
            <button
              aria-label="Scroll brands right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
              onClick={() => scroll('right')}
              style={{ display: 'block' }}
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Hero Section with Badge */}
        <div className="relative text-center py-12">
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative w-50 h-32">
              <Image src="/emblem-removebg-preview.png" alt="Guaranteed Satisfaction Badge" fill className="object-contain" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Reliable and Experienced Appliance Repair Team
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Since 2023, Applicare has been a trusted appliance repair partner in Nairobi, Nakuru and surrounding regions. We are committed to providing professional, honest, and dependable repair services. Our skilled technicians diagnose, repair, and maintain all major household and commercial appliance brands with transparent pricing and genuine parts.
          </p>
        </div>
      </div>
    </section>
  )
}

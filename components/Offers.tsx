'use client'

import React from 'react'

const offers = [
  {
    title: 'Seasonal HVAC Maintenance',
    description: 'Prepare your HVAC system for the season with a thorough check-up and cleaning to ensure comfortable temperatures all year.',
    discount: '20% Off',
    bgColor: 'border-purple-400 bg-purple-50',
    borderStyle: 'border-dashed'
  },
  {
    title: 'New Customer Discount',
    description: 'First time using our services? Enjoy a 15% discount on your first appliance repair with us—quality service at a great price.',
    discount: '15% Off',
    bgColor: 'border-yellow-400 bg-yellow-50',
    borderStyle: 'border-dashed'
  }
]

export default function Offers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded">
            Special Offer!
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Exclusive Deals on Appliance Repairs
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't miss out on these incredible savings! Book your appliance repair service today and benefit from our special offers, available for a limited time only. Your home deserves the best care at the best value.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {offers.map((offer, idx) => (
            <div key={idx} className={`border-4 ${offer.borderStyle} ${offer.bgColor} p-8 rounded-lg text-center relative`}>
              {/* Profile Circle */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center overflow-hidden">
                  {idx === 0 ? (
                    <div className="text-4xl">🏠</div>
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{offer.title}</h3>
                <p className="text-gray-700 text-sm mb-6">{offer.description}</p>
                <div className="text-3xl font-bold text-purple-600">{offer.discount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

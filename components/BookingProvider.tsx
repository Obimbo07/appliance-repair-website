'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import BookServiceModal from './BookServiceModal'
import DiscountPopup from './DiscountPopup'

interface BookingContextType {
  openBooking: () => void
  closeBooking: () => void
  isBookingOpen: boolean
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isBookingOpen }}>
      {children}
      <BookServiceModal isOpen={isBookingOpen} onClose={closeBooking} />
      <DiscountPopup />
    </BookingContext.Provider>
  )
}

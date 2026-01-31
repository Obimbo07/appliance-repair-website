import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BookingProvider } from '@/components/BookingProvider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://applicare.co.ke'),
  title: {
    default: 'Applicare - Professional Appliance Repair Services in Kenya | Nairobi, Nakuru',
    template: '%s | Applicare - Appliance Repair Kenya'
  },
  description: 'Leading appliance repair services in Kenya. Expert repair for washing machines, refrigerators, cookers, microwaves & more. Serving Nairobi, Nakuru & surrounding areas. Same-day service available. Call 0716 029 811.',
  keywords: [
    'appliance repair Kenya',
    'appliance repair Nairobi',
    'appliance repair Nakuru',
    'washing machine repair Kenya',
    'refrigerator repair Kenya',
    'cooker repair Kenya',
    'microwave repair Kenya',
    'dishwasher repair Kenya',
    'appliance repair near me',
    'appliance repair training Kenya',
    'appliance consultancy Kenya',
    'commercial appliance repair',
    'home appliance repair',
    'same day appliance repair',
    'certified appliance technicians'
  ],
  authors: [{ name: 'Applicare' }],
  creator: 'Applicare',
  publisher: 'Applicare',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://applicare.co.ke',
    siteName: 'Applicare',
    title: 'Applicare - Professional Appliance Repair Services in Kenya',
    description: 'Leading appliance repair services in Kenya. Expert repair for washing machines, refrigerators, cookers & more. Serving Nairobi, Nakuru & surrounding areas.',
    images: [
      {
        url: '/logo2.png',
        width: 1200,
        height: 630,
        alt: 'Applicare - Professional Appliance Repair Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applicare - Professional Appliance Repair Services in Kenya',
    description: 'Leading appliance repair services in Kenya. Expert repair for washing machines, refrigerators, cookers & more.',
    images: ['/logo2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Applicare',
    description: 'Professional appliance repair services in Kenya',
    url: 'https://applicare.co.ke',
    telephone: '+254716029811',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Nairobi',
      },
      {
        '@type': 'City',
        name: 'Nakuru',
      },
    ],
    serviceType: [
      'Appliance Repair',
      'Washing Machine Repair',
      'Refrigerator Repair',
      'Cooker Repair',
      'Microwave Repair',
      'Dishwasher Repair',
    ],
  }

  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
=======
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <BookingProvider>
          {children}
        </BookingProvider>
>>>>>>> 65cf41db0a6a7a7d5a3f1569065a53d4a5c5e3bf
        <Analytics />
      </body>
    </html>
  )
}

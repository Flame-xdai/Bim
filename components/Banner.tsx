'use client'

import { useState, useEffect } from 'react'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  const bannerText = "Welcome to Additional Store – Authentic Jerseys. Trusted Service. Fast Delivery. Need help? Inbox us on Facebook Or Whatsapp: 01771902725/01829067063"

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center relative overflow-hidden">
      <div className="animate-pulse">
        <p className="text-sm font-medium">
          {bannerText}
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 text-xl font-bold transition-colors"
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  const message = "Welcome to Additional Store – Authentic Jerseys. Trusted Service. Fast Delivery. Need help? Inbox us on Facebook Or Whatsapp: 01771902725/01829067063"

  if (!isVisible) return null

  return (
    <div className="bg-blue-600 text-white py-2 px-4 text-center relative">
      <div className="animate-pulse">
        <p className="text-sm font-medium">
          {message}
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  )
}
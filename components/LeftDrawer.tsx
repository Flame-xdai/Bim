'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface LeftDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const categories = [
  'Travel Shirt',
  '25/26 Season',
  'Barcelona',
  'Real Madrid',
  'Half Sleeve Jersey',
  'Full Sleeve Jersey',
  'Retro Jersey Collection',
  'Club Jersey 24/25 Kit',
  'Coming Soon'
]

export default function LeftDrawer({ isOpen, onClose }: LeftDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleCategoryClick = (category: string) => {
    // Trigger category change event
    window.dispatchEvent(new CustomEvent('categoryChange', { detail: category }))
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategoryClick('Featured Jerseys')}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  >
                    Featured Jerseys
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Globe } from 'lucide-react'

interface LeftDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const categories = [
  { name: 'All products', href: '/products' },
  { name: 'All category', href: '/products' },
  { name: 'Travel Shirt', href: '/products?category=Travel Shirt' },
  { name: '25/26 Season', href: '/products?category=25/26 Season' },
  { name: 'Barcelona', href: '/products?category=Barcelona' },
  { name: 'Real Madrid', href: '/products?category=Real Madrid' },
  { name: 'Half seleve Jersey', href: '/products?category=Half seleve Jersey' },
  { name: 'Full Seleve Jersey', href: '/products?category=Full Seleve Jersey' },
  { name: 'Retro Jersey Collection', href: '/products?category=Retro Jersey Collection' },
  { name: 'Club Jersey 24/25 kit', href: '/products?category=Club Jersey 24/25 kit' },
  { name: 'Coming Soon', href: '/products?category=Coming Soon' },
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

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="drawer-overlay" onClick={onClose} />
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={category.href}
                      onClick={onClose}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t p-4">
            <button className="flex items-center space-x-2 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Globe className="h-5 w-5" />
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
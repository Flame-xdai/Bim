'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import OrderModal from './OrderModal'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  featured: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showOrderModal, setShowOrderModal] = useState(false)

  const handleBuyNow = () => {
    setShowOrderModal(true)
  }

  return (
    <>
      <div className="product-card bg-white rounded-xl shadow-md overflow-hidden group">
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {product.category}
            </span>
          </div>
          
          {product.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold text-blue-600">
              ৳{product.price.toLocaleString()}
            </span>
          </div>

          <div className="space-y-2">
            <button
              onClick={handleBuyNow}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors btn-primary"
            >
              Buy Now
            </button>
            
            <button
              onClick={handleBuyNow}
              className="w-full flex items-center justify-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Quick Order</span>
            </button>
          </div>
        </div>
      </div>

      {showOrderModal && (
        <OrderModal
          product={product}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </>
  )
}
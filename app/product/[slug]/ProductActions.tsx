'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from '@/components/CartContext'
import CheckoutModal from '@/components/CheckoutModal'

interface ProductActionsProps {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [showCheckout, setShowCheckout] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title_en,
      price: product.price_bdt,
      image: product.images[0],
      size: selectedSize,
    })
  }

  const handleBuyNow = () => {
    setShowCheckout(true)
  }

  return (
    <>
      <div className="space-y-6">
        {/* Size Selection */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Select Size</h3>
          <div className="flex space-x-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-3 border rounded-lg font-medium transition-colors ${
                  selectedSize === size
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 px-6 py-4 rounded-lg font-medium transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          
          <button
            onClick={handleBuyNow}
            disabled={!product.available}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-4 rounded-lg font-medium transition-colors"
          >
            Buy Now
          </button>
        </div>

        {!product.available && (
          <p className="text-red-600 text-center">
            This item is currently out of stock
          </p>
        )}
      </div>

      {showCheckout && (
        <CheckoutModal
          items={[{
            id: product.id,
            title: product.title_en,
            price: product.price_bdt,
            image: product.images[0],
            size: selectedSize,
            quantity: 1,
          }]}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  )
}
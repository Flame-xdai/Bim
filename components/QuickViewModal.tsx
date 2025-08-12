'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'
import { useCart } from './CartContext'
import CheckoutModal from './CheckoutModal'

interface QuickViewModalProps {
  product: Product
  onClose: () => void
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
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
    onClose()
  }

  const handleBuyNow = () => {
    setShowCheckout(true)
  }

  if (showCheckout) {
    return (
      <CheckoutModal
        items={[{
          id: product.id,
          title: product.title_en,
          price: product.price_bdt,
          image: product.images[0],
          size: selectedSize,
          quantity: 1,
        }]}
        onClose={() => {
          setShowCheckout(false)
          onClose()
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative">
              <Image
                src={product.images[0]}
                alt={product.title_en}
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title_en}
              </h3>
              
              <p className="text-3xl font-bold text-blue-600 mb-4">
                ৳{product.price_bdt.toLocaleString()}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  {product.description_en}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Size
                </label>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
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
              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.available}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={handleBuyNow}
                  disabled={!product.available}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {!product.available && (
                <p className="text-red-600 text-sm mt-2 text-center">
                  This item is currently out of stock
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
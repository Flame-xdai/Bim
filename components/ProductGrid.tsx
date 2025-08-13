'use client'

import { useEffect } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  featured: boolean
}

interface ProductGridProps {
  products: Product[]
  onCategoryChange: (category: string) => void
}

export default function ProductGrid({ products, onCategoryChange }: ProductGridProps) {
  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      onCategoryChange(event.detail)
    }

    window.addEventListener('categoryChange', handleCategoryChange as EventListener)
    
    return () => {
      window.removeEventListener('categoryChange', handleCategoryChange as EventListener)
    }
  }, [onCategoryChange])

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-500 text-lg">No jerseys found in this category.</div>
        <p className="text-gray-400 mt-2">Try selecting a different category from the menu.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import ProductGrid from '@/components/ProductGrid'
import Banner from '@/components/Banner'
import productsData from '@/data/products.json'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
  featured: boolean
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Featured Jerseys')

  useEffect(() => {
    // Load featured products by default
    const featuredProducts = productsData.filter(product => product.featured)
    setProducts(featuredProducts)
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    
    if (category === 'Featured Jerseys') {
      const featuredProducts = productsData.filter(product => product.featured)
      setProducts(featuredProducts)
    } else {
      const filteredProducts = productsData.filter(product => product.category === category)
      setProducts(filteredProducts)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Football Jerseys
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Authentic jerseys from top clubs worldwide. Fast delivery across Bangladesh with Cash on Delivery.
          </p>
          <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold">
            ⚡ Free Delivery on Orders Above ৳1500
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <ProductGrid 
            products={products} 
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </section>
    </div>
  )
}
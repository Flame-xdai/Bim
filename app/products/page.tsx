import { Suspense } from 'react'
import ProductGrid from '@/components/ProductGrid'
import { getProducts, getProductsByCategory } from '@/lib/products'

interface ProductsPageProps {
  searchParams: { category?: string; search?: string }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  let products

  if (searchParams.category) {
    products = await getProductsByCategory(searchParams.category)
  } else {
    products = await getProducts()
  }

  // Filter by search if provided
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase()
    products = products.filter(product =>
      product.title_en.toLowerCase().includes(searchTerm) ||
      product.title_bn.toLowerCase().includes(searchTerm) ||
      product.description_en.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  const pageTitle = searchParams.category 
    ? `${searchParams.category} Jerseys`
    : searchParams.search
    ? `Search Results for "${searchParams.search}"`
    : 'All Jerseys'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
          <p className="text-gray-600">
            {products.length} jersey{products.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id}>
                {/* Product card content would go here */}
              </div>
            ))}
          </div>
        </Suspense>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No jerseys found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
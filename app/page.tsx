import HeroBanner from '@/components/HeroBanner'
import FeaturedProducts from '@/components/FeaturedProducts'
import ProductGrid from '@/components/ProductGrid'
import { getProducts } from '@/lib/products'

export default async function Home() {
  const products = await getProducts()
  const featuredProducts = products.filter(p => p.available).slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ad Placeholder - Header */}
      <div id="ad-header" className="bg-gray-100 h-16 flex items-center justify-center text-gray-500 text-sm">
        Ad Space - Header
      </div>
      
      <HeroBanner />
      <FeaturedProducts products={featuredProducts} />
      
      {/* Ad Placeholder - Below Featured */}
      <div id="ad-below-featured" className="bg-gray-100 h-20 flex items-center justify-center text-gray-500 text-sm mx-4 my-8 rounded-lg">
        Ad Space - Below Featured Products
      </div>
      
      <ProductGrid products={products} />
    </div>
  )
}
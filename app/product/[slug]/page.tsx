import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProductBySlug, getProducts } from '@/lib/products'
import ProductActions from './ProductActions'

interface ProductPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title_en} - JerseyStore`,
    description: product.description_en,
    openGraph: {
      title: product.title_en,
      description: product.description_en,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title_en,
    description: product.description_en,
    image: product.images,
    offers: {
      '@type': 'Offer',
      price: product.price_bdt,
      priceCurrency: 'BDT',
      availability: product.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={product.images[0]}
                  alt={product.title_en}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${product.title_en} ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.title_en}
                </h1>
                <p className="text-lg text-gray-600">{product.title_bn}</p>
              </div>

              <div className="text-4xl font-bold text-blue-600">
                ৳{product.price_bdt.toLocaleString()}
              </div>

              <div className="prose prose-gray max-w-none">
                <p>{product.description_en}</p>
                <p className="text-gray-600">{product.description_bn}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${product.available ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`font-medium ${product.available ? 'text-green-700' : 'text-red-700'}`}>
                  {product.available ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Product Actions */}
              <ProductActions product={product} />

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Payment & Delivery</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Cash on Delivery available</li>
                    <li>• Free delivery on orders above ৳2000</li>
                    <li>• Delivery within 2-5 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import productsData from '@/data/products.json'

export interface Product {
  id: string
  title_en: string
  title_bn: string
  slug: string
  price_bdt: number
  images: string[]
  sizes: string[]
  description_en: string
  description_bn: string
  tags: string[]
  available: boolean
}

export async function getProducts(): Promise<Product[]> {
  return productsData as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find(product => product.slug === slug) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getProducts()
  
  if (category === 'All products' || category === 'All category') {
    return products
  }
  
  return products.filter(product => 
    product.tags.some(tag => 
      tag.toLowerCase().includes(category.toLowerCase())
    )
  )
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts()
  const searchTerm = query.toLowerCase()
  
  return products.filter(product =>
    product.title_en.toLowerCase().includes(searchTerm) ||
    product.title_bn.toLowerCase().includes(searchTerm) ||
    product.description_en.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}
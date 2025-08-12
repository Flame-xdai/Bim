import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/CartContext'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnnouncementBar from '@/components/AnnouncementBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JerseyStore - Authentic Football Jerseys | Fast Delivery Bangladesh',
  description: 'Shop authentic football jerseys from top clubs. Barcelona, Real Madrid, Manchester United & more. Cash on delivery available. Fast delivery across Bangladesh.',
  keywords: 'football jersey, soccer jersey, Barcelona jersey, Real Madrid jersey, authentic jerseys Bangladesh',
  openGraph: {
    title: 'JerseyStore - Authentic Football Jerseys',
    description: 'Shop authentic football jerseys with fast delivery in Bangladesh',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="mobile-bottom-spacing">
            {children}
          </main>
          <BottomNav />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
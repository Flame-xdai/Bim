import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JerseyStore - Premium Football Jerseys | Fast Delivery Bangladesh',
  description: 'Shop authentic football jerseys from top clubs. Barcelona, Real Madrid, Manchester United & more. Cash on delivery available. Fast delivery across Bangladesh.',
  keywords: 'football jersey, soccer jersey, Barcelona jersey, Real Madrid jersey, authentic jerseys Bangladesh',
  openGraph: {
    title: 'JerseyStore - Premium Football Jerseys',
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
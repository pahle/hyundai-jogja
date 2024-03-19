import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

import { Navbar } from '~/components/layout/navbar'
import { Footer } from '~/components/layout/footer'
import { ENV } from '~/lib/contants'

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'Hyundai Jogja',
    template: '%s | Hyundai Jogja'
  },
  description:
    'Hyundai Jogja adalah dealer resmi mobil Hyundai di Yogyakarta. Kami menyediakan berbagai macam mobil Hyundai terbaru dengan harga terbaik. Kunjungi showroom kami di Jl. Magelang KM 6,5 No. 1, Sinduadi, Mlati, Sleman, Yogyakarta. ',
  openGraph: {
    title: 'Hyundai Jogja',
    description:
      'Hyundai Jogja adalah dealer resmi mobil Hyundai di Yogyakarta. Kami menyediakan berbagai macam mobil Hyundai terbaru dengan harga terbaik. Kunjungi showroom kami di Jl. Magelang KM 6,5 No. 1, Sinduadi, Mlati, Sleman, Yogyakarta. ',
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Hyundai Jogja',
    locale: 'id_ID',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Hyundai Jogja',
    card: 'summary_large_image'
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='id-ID'>
      <body className={GeistSans.className}>
        <Navbar />
        <div className='min-h-[90vh]'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}

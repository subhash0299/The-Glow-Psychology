import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'GlowFinds - Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
  description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
  keywords: 'best sunscreen india, vitamin c serum india, affordable skincare, budget beauty products, sunscreen under 500, vitamin c serum under 1000, best face wash india, skincare blog india',
  openGraph: {
    title: 'GlowFinds - Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
    description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
    url: 'https://glowfinds.vercel.app',
    siteName: 'GlowFinds',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlowFinds - Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
    description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
    images: ['/logo.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GlowFinds',
  url: 'https://glowfinds.vercel.app',
  logo: 'https://glowfinds.vercel.app/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3435745172294207"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="11bb36e1da088d0f6458abf06154be7d"/>
        <meta name="google-site-verification" content="VIVuAD4uv5CJv554NfIs9hAktdqx86lwHXhPoqweF7M" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <p className="text-sm font-semibold text-gray-700">Who Are We</p>
              <nav className="flex flex-wrap gap-4 sm:gap-6">
                <a href="/about" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">About</a>
                <a href="/how-we-review" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">How We Review</a>
                <a href="/contact" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">Contact</a>
                <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-rose-600 transition-colors">Privacy Policy</a>
              </nav>
            </div>
            <p className="text-center text-gray-600 text-sm">
              This website contains affiliate links. We may earn a commission at no additional cost to you. Prices and availability are subject to change.
            </p>
          </div>
        </footer>
      </body>
    </html>
    </>
  )
}


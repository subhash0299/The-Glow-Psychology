import type { Metadata } from 'next'
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
        url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    images: ['https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="11bb36e1da088d0f6458abf06154be7d"/>
        <meta name="google-site-verification" content="VIVuAD4uv5CJv554NfIs9hAktdqx86lwHXhPoqweF7M" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}


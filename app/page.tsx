import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
  description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/',
  },
  openGraph: {
    title: 'Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
    description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
    url: 'https://glowfinds.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Budget Beauty Products in India | Affordable Skincare Under ₹999 (2026)',
    description: 'Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings.',
  },
}

export default function Home() {
  return <HomeClient />
}


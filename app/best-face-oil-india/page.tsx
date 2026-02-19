import type { Metadata } from 'next'
import { Droplets } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { faceOils } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Face Oils in India (2026) | Squalane, Rosehip & More Under ₹1500',
  description: 'Best face oils in India including squalane and rosehip oils. Lightweight and nourishing options for glowing, healthy skin.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-face-oil-india',
  },
  openGraph: {
    title: 'Best Face Oils in India (2026) | Squalane, Rosehip & More Under ₹1500',
    description: 'Best face oils in India including squalane and rosehip oils. Lightweight and nourishing options for glowing, healthy skin.',
    url: 'https://glowfinds.vercel.app/best-face-oil-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Oils in India (2026) | Squalane, Rosehip & More Under ₹1500',
    description: 'Best face oils in India including squalane and rosehip oils. Lightweight and nourishing options for glowing, healthy skin.',
  },
}

export default function FaceOil() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-500 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Droplets className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Face Oils in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best face oils for nourished, glowing skin in India. These
            lightweight oils including squalane and rosehip are perfect for all skin types.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Top Face Oil Picks for Indian Skin
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-2">
            These face oils are specially curated for Indian skin types, offering
            lightweight formulas with squalane, rosehip, and other nourishing ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {faceOils.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}


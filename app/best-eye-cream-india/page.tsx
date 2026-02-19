import type { Metadata } from 'next'
import { Eye } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { eyeCreams } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Under Eye Creams in India (2026) | Dark Circles & Puffiness',
  description: 'Best under eye creams in India for dark circles, puffiness and fine lines. Affordable options with caffeine, peptides and retinol.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-eye-cream-india',
  },
  openGraph: {
    title: 'Best Under Eye Creams in India (2026) | Dark Circles & Puffiness',
    description: 'Best under eye creams in India for dark circles, puffiness and fine lines. Affordable options with caffeine, peptides and retinol.',
    url: 'https://glowfinds.vercel.app/best-eye-cream-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Under Eye Creams in India (2026) | Dark Circles & Puffiness',
    description: 'Best under eye creams in India for dark circles, puffiness and fine lines. Affordable options with caffeine, peptides and retinol.',
  },
}

export default function EyeCream() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-violet-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Eye className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Under Eye Creams in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best under eye creams for dark circles, puffiness, and fine lines.
            These affordable options are perfect for Indian skin types.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Top Eye Cream Picks for Indian Skin
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-2">
            These eye creams are specially curated for Indian skin types, offering
            ingredients like caffeine, peptides, and retinol to target dark circles and puffiness.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {eyeCreams.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from 'next'
import { Eye } from 'lucide-react'
import CategoryFilter from '@/components/CategoryFilter'
import { eyeCreams, lipBalms } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Eyes & Lip Care in India (2026) | Eye Creams & Lip Balms',
  description: 'Best eye creams and lip balms in India. Discover under eye creams for dark circles, puffiness, fine lines, and nourishing lip balms for soft, hydrated lips.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-eye-cream-india',
  },
  openGraph: {
    title: 'Best Eyes & Lip Care in India (2026) | Eye Creams & Lip Balms',
    description: 'Best eye creams and lip balms in India. Discover under eye creams for dark circles, puffiness, fine lines, and nourishing lip balms for soft, hydrated lips.',
    url: 'https://glowfinds.vercel.app/best-eye-cream-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Eyes & Lip Care in India (2026) | Eye Creams & Lip Balms',
    description: 'Best eye creams and lip balms in India. Discover under eye creams for dark circles, puffiness, fine lines, and nourishing lip balms for soft, hydrated lips.',
  },
}

export default function EyeCream() {
  // Combine eye creams and lip balms
  const allProducts = [...eyeCreams, ...lipBalms]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-violet-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Eye className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Eyes & Lip Care
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best eye creams for dark circles, puffiness, and fine lines, plus nourishing lip balms for soft, hydrated lips.
            These affordable options are perfect for Indian skin types.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <CategoryFilter
          products={allProducts}
          eyeCreams={eyeCreams}
          lipBalms={lipBalms}
          title="Top Eyes & Lip Care Picks for Indian Skin"
          description="These eye creams and lip balms are specially curated for Indian skin types, offering ingredients like caffeine, peptides, retinol, and nourishing oils to target dark circles, puffiness, and dry lips."
        />
      </div>
    </div>
  )
}


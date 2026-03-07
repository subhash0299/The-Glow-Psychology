import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Star, Zap, BookOpen } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
import { vitaminCSerums } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Face Serums Under ₹999 in India (2026) | Brightening Serums',
  description: 'Top-rated face serums under ₹999 for glowing skin in India. 10% to 20% concentration, brightening, dark spot reduction, dermatologist approved.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-vitamin-c-serum-india',
  },
  openGraph: {
    title: 'Best Face Serums Under ₹999 in India (2026) | Brightening Serums',
    description: 'Top-rated face serums under ₹999 for glowing skin in India. 10% to 20% concentration, brightening, dark spot reduction, dermatologist approved.',
    url: 'https://glowfinds.vercel.app/best-vitamin-c-serum-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Serums Under ₹999 in India (2026) | Brightening Serums',
    description: 'Top-rated face serums under ₹999 for glowing skin in India. 10% to 20% concentration, brightening, dark spot reduction, dermatologist approved.',
  },
}

export default function VitaminCSerum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-pink-500 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              Dermatologist Approved
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Face Serums Under ₹999 in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best face serums for glowing skin in India. These affordable,
            high-quality serums brighten, reduce dark spots, and boost collagen for radiant,
            youthful skin without the premium price tag.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <SkinTypeFilter
          products={vitaminCSerums}
          title="Top Face Serums for Every Budget"
          description="From 10% to 20% concentration, these face serums are formulated for Indian skin types and climate. Find your perfect match for brighter, healthier skin."
        />

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Benefits of Vitamin C for Indian Skin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Brightening</h3>
                <p className="text-gray-600 text-sm">
                  Fades dark spots, hyperpigmentation, and evens out skin tone for a radiant glow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Anti-Aging</h3>
                <p className="text-gray-600 text-sm">
                  Boosts collagen production, reducing fine lines and wrinkles for younger-looking skin.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Antioxidant Power</h3>
                <p className="text-gray-600 text-sm">
                  Protects skin from environmental damage and pollution, common in Indian cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-rose-500" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Related Skincare Guides</h2>
          </div>
          <p className="text-gray-600 text-sm mb-5">
            Not sure how to use a face serum? These guides will help you build the perfect routine around it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/morning-skincare-routine-for-glowing-skin"
              className="flex-1 bg-white border border-rose-200 rounded-xl p-4 hover:border-rose-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Morning Skincare Routine for Glowing Skin</p>
              <p className="text-rose-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/beginner-skincare-routine-under-1000"
              className="flex-1 bg-white border border-rose-200 rounded-xl p-4 hover:border-rose-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Beginner Skincare Routine Under ₹1000</p>
              <p className="text-rose-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/niacinamide-benefits-acne"
              className="flex-1 bg-white border border-rose-200 rounded-xl p-4 hover:border-rose-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Niacinamide Benefits for Acne-Prone Skin</p>
              <p className="text-rose-600 text-xs font-medium">Read Guide →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


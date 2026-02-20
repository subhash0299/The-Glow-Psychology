import type { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Shield, Sparkles, Heart, ExternalLink, BookOpen } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
import { sunscreens } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Sunscreen Under ₹500 in India (2026) | SPF 50 for Oily Skin',
  description: 'Top-rated sunscreens under ₹500 for oily and acne-prone skin in India. SPF 50, no white cast, dermatologist approved. Compare prices and ratings.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-sunscreen-india',
  },
  openGraph: {
    title: 'Best Sunscreen Under ₹500 in India (2026) | SPF 50 for Oily Skin',
    description: 'Top-rated sunscreens under ₹500 for oily and acne-prone skin in India. SPF 50, no white cast, dermatologist approved. Compare prices and ratings.',
    url: 'https://glowfinds.vercel.app/best-sunscreen-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Sunscreen Under ₹500 in India (2026) | SPF 50 for Oily Skin',
    description: 'Top-rated sunscreens under ₹500 for oily and acne-prone skin in India. SPF 50, no white cast, dermatologist approved. Compare prices and ratings.',
  },
}

export default function Sunscreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sun className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Sunscreens Under ₹500 in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Looking for affordable sunscreen for oily skin in India? Discover top-rated sun
            protection products that won&apos;t break the bank. Perfect for daily use, these
            sunscreens offer SPF 50 protection without white cast or greasiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <SkinTypeFilter
          products={sunscreens}
          title="Top Sunscreen Picks for Indian Skin"
          description="These affordable sunscreens are specially curated for Indian skin types, offering matte finishes, no white cast, and SPF 50 protection perfect for our tropical climate."
        />

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why You Need Sunscreen in India
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">UV Protection</h3>
                <p className="text-gray-600 text-sm">
                  Protects against harmful UVA and UVB rays that cause premature aging and skin damage.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Anti-Aging</h3>
                <p className="text-gray-600 text-sm">
                  Prevents wrinkles, fine lines, and dark spots caused by sun exposure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Daily Essential</h3>
                <p className="text-gray-600 text-sm">
                  Should be part of your daily skincare routine, even on cloudy days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            How to Choose the Right Sunscreen
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SPF 50+ Recommended</h3>
                <p className="text-gray-600 text-sm">
                  For Indian climate, SPF 50 provides adequate protection against strong UV rays.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Non-Comedogenic</h3>
                <p className="text-gray-600 text-sm">
                  Choose sunscreens that won&apos;t clog pores, especially important for oily and acne-prone skin.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Matte Finish</h3>
                <p className="text-gray-600 text-sm">
                  Look for matte or gel-based formulas that don&apos;t leave a greasy residue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Guide Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 border-2 border-amber-100">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Building a Complete Skincare Routine?
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            If you&apos;re building a full skincare routine, check our complete guide on the{' '}
            <Link href="/blog/skincare-routine-oily-skin-india" className="text-amber-600 hover:text-amber-700 font-semibold underline">
              best skincare routine for oily skin in India
            </Link>
            . This comprehensive guide includes step-by-step morning and night routines with product recommendations for face wash, moisturizer, sunscreen, and serums.
          </p>
          <Link
            href="/blog/skincare-routine-oily-skin-india"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            Read Complete Routine Guide
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}


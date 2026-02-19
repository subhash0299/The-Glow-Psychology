import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, BookOpen, ExternalLink } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { moisturizers } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Face Moisturizers in India (2026) | For Oily, Dry & Acne Skin',
  description: 'Top-rated moisturizers for oily, dry & acne-prone skin in India. Lightweight, non-greasy & dermatologist recommended options.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-face-moisturizer-india',
  },
  openGraph: {
    title: 'Best Face Moisturizers in India (2026) | For Oily, Dry & Acne Skin',
    description: 'Top-rated moisturizers for oily, dry & acne-prone skin in India. Lightweight, non-greasy & dermatologist recommended options.',
    url: 'https://glowfinds.vercel.app/best-face-moisturizer-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Moisturizers in India (2026) | For Oily, Dry & Acne Skin',
    description: 'Top-rated moisturizers for oily, dry & acne-prone skin in India. Lightweight, non-greasy & dermatologist recommended options.',
  },
}

export default function Moisturizer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Droplets className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Face Moisturizers in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover top moisturizers for hydration, oil control and skin barrier repair.
            Perfect for all skin types in Indian climate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Top Moisturizer Picks for Indian Skin
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-2">
            These moisturizers are specially curated for Indian skin types, offering
            lightweight formulas, oil control, and hydration perfect for our tropical climate.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {moisturizers.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Related Guide Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border-2 border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Building a Complete Skincare Routine?
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            If you&apos;re building a full skincare routine, check our complete guide on the{' '}
            <Link href="/blog/skincare-routine-oily-skin-india" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              best skincare routine for oily skin in India
            </Link>
            . This comprehensive guide includes step-by-step morning and night routines with product recommendations for face wash, moisturizer, sunscreen, and serums.
          </p>
          <Link
            href="/blog/skincare-routine-oily-skin-india"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read Complete Routine Guide
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}


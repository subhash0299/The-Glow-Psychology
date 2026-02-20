import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, BookOpen, ExternalLink } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
import { faceWashes } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Face Washes Under ₹500 in India (2026) | For Oily & Acne-Prone Skin',
  description: 'Top-rated face washes under ₹500 for oily and acne-prone skin in India. Gentle cleansers, salicylic acid, dermatologist approved. Compare prices and ratings.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-face-cleanser-india',
  },
  openGraph: {
    title: 'Best Face Washes Under ₹500 in India (2026) | For Oily & Acne-Prone Skin',
    description: 'Top-rated face washes under ₹500 for oily and acne-prone skin in India. Gentle cleansers, salicylic acid, dermatologist approved. Compare prices and ratings.',
    url: 'https://glowfinds.vercel.app/best-face-cleanser-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Washes Under ₹500 in India (2026) | For Oily & Acne-Prone Skin',
    description: 'Top-rated face washes under ₹500 for oily and acne-prone skin in India. Gentle cleansers, salicylic acid, dermatologist approved. Compare prices and ratings.',
  },
}

export default function FaceWash() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Droplets className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Face Washes Under ₹500 in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Looking for affordable face washes for oily skin in India? Discover top-rated
            cleansers that won&apos;t break the bank. Perfect for daily use, these face washes
            offer gentle cleansing without stripping your skin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <SkinTypeFilter
          products={faceWashes}
          title="Top Face Wash Picks for Indian Skin"
          description="These affordable face washes are specially curated for Indian skin types, offering gentle cleansing, oil control, and acne-fighting ingredients perfect for our tropical climate."
        />

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


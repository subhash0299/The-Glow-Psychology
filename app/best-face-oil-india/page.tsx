import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, BookOpen } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
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
      <div className="hidden sm:block bg-gradient-to-br from-amber-500 to-rose-500 text-white">
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
        <SkinTypeFilter
          products={faceOils}
          title="Top Face Oil Picks for Indian Skin"
          description="These face oils are specially curated for Indian skin types, offering lightweight formulas with squalane, rosehip, and other nourishing ingredients."
        />

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Related Skincare Guides</h2>
          </div>
          <p className="text-gray-600 text-sm mb-5">
            Find out where face oil fits into your daily routine with these step-by-step guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/skincare-routine-dry-skin-india"
              className="flex-1 bg-white border border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Skincare Routine for Dry Skin in India</p>
              <p className="text-amber-700 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/night-skincare-routine-for-clear-skin"
              className="flex-1 bg-white border border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Night Skincare Routine for Clear Skin</p>
              <p className="text-amber-700 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/how-to-fix-damaged-skin-barrier"
              className="flex-1 bg-white border border-amber-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">How to Fix a Damaged Skin Barrier</p>
              <p className="text-amber-700 text-xs font-medium">Read Guide →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


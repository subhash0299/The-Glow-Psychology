import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, BookOpen } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
import { exfoliators } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Exfoliators & Peeling Solutions in India (2026) | Under ₹999',
  description: 'Top-rated exfoliators and peeling solutions under ₹999 in India. Chemical peels and gentle scrubs for glowing, smooth skin.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-exfoliator-india',
  },
  openGraph: {
    title: 'Best Exfoliators & Peeling Solutions in India (2026) | Under ₹999',
    description: 'Top-rated exfoliators and peeling solutions under ₹999 in India. Chemical peels and gentle scrubs for glowing, smooth skin.',
    url: 'https://glowfinds.vercel.app/best-exfoliator-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Exfoliators & Peeling Solutions in India (2026) | Under ₹999',
    description: 'Top-rated exfoliators and peeling solutions under ₹999 in India. Chemical peels and gentle scrubs for glowing, smooth skin.',
  },
}

export default function Exfoliator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Exfoliators & Peels in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best exfoliators and peeling solutions for smooth, glowing skin.
            These affordable options include chemical peels and gentle scrubs perfect for Indian skin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <SkinTypeFilter
          products={exfoliators}
          title="Top Exfoliator Picks for Indian Skin"
          description="These exfoliators are specially curated for Indian skin types, offering chemical peels and gentle scrubs to reveal smooth, glowing skin."
        />

        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Related Skincare Guides</h2>
          </div>
          <p className="text-gray-600 text-sm mb-5">
            Not sure how often to exfoliate? These routine guides will show you exactly where and how often exfoliation fits in.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/how-to-fix-damaged-skin-barrier"
              className="flex-1 bg-white border border-purple-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">How to Fix a Damaged Skin Barrier</p>
              <p className="text-purple-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/skincare-routine-oily-skin-india"
              className="flex-1 bg-white border border-purple-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Skincare Routine for Oily Skin in India</p>
              <p className="text-purple-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/minimalist-skincare-routine-for-busy-people"
              className="flex-1 bg-white border border-purple-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Minimalist Skincare Routine for Busy People</p>
              <p className="text-purple-600 text-xs font-medium">Read Guide →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, BookOpen } from 'lucide-react'
import SkinTypeFilter from '@/components/SkinTypeFilter'
import { toners } from '@/data/products'

export const metadata: Metadata = {
  title: 'Best Face Toners in India (2026) | Alcohol-Free & Hydrating Toners',
  description: 'Best face toners in India including alcohol-free and hydrating formulas. Great for oily, sensitive and combination skin.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/best-face-toner-india',
  },
  openGraph: {
    title: 'Best Face Toners in India (2026) | Alcohol-Free & Hydrating Toners',
    description: 'Best face toners in India including alcohol-free and hydrating formulas. Great for oily, sensitive and combination skin.',
    url: 'https://glowfinds.vercel.app/best-face-toner-india',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Toners in India (2026) | Alcohol-Free & Hydrating Toners',
    description: 'Best face toners in India including alcohol-free and hydrating formulas. Great for oily, sensitive and combination skin.',
  },
}

export default function Toner() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden sm:block bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Droplets className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <span className="text-xs sm:text-sm font-semibold bg-white/20 px-3 sm:px-4 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">
            Best Face Toners in India
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
            Discover the best face toners for balanced, hydrated skin in India. These
            alcohol-free formulas help control oil, minimize pores, and prep your skin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <SkinTypeFilter
          products={toners}
          title="Top Toner Picks for Indian Skin"
          description="These toners are specially curated for Indian skin types, offering alcohol-free formulas, hydration, and pore control perfect for our tropical climate."
        />

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-teal-500" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Related Skincare Guides</h2>
          </div>
          <p className="text-gray-600 text-sm mb-5">
            Learn where toner fits in your routine and how to layer it correctly with these expert guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/korean-skincare-routine-10-steps"
              className="flex-1 bg-white border border-teal-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Korean 10-Step Skincare Routine</p>
              <p className="text-teal-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/morning-skincare-routine-for-glowing-skin"
              className="flex-1 bg-white border border-teal-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Morning Skincare Routine for Glowing Skin</p>
              <p className="text-teal-600 text-xs font-medium">Read Guide →</p>
            </Link>
            <Link
              href="/blog/skincare-routine-oily-skin-india"
              className="flex-1 bg-white border border-teal-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">Skincare Routine for Oily Skin in India</p>
              <p className="text-teal-600 text-xs font-medium">Read Guide →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


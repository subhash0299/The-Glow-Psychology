import type { Metadata } from 'next'
import { Droplets } from 'lucide-react'
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
      </div>
    </div>
  )
}


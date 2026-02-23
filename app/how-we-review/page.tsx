import { Metadata } from 'next'
import Link from 'next/link'
import {
  Search,
  Star,
  FlaskConical,
  Sun,
  IndianRupee,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'How We Review Skincare Products – GlowFinds Methodology',
  description:
    'Learn how GlowFinds evaluates skincare products using ingredient research, review credibility, and climate suitability for Indian skin.',
  openGraph: {
    title: 'How We Review Skincare Products – GlowFinds Methodology',
    description:
      'Learn how GlowFinds evaluates skincare products using ingredient research, review credibility, and climate suitability for Indian skin.',
    url: 'https://glowfinds.vercel.app/how-we-review',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How We Review Skincare Products – GlowFinds Methodology',
    description:
      'Learn how GlowFinds evaluates skincare products for Indian skin.',
  },
}

export default function HowWeReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Who Are We
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How We Review Skincare Products
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            At GlowFinds, product recommendations follow a structured evaluation
            process. We do not randomly select products or rank them based on
            popularity alone.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Star className="w-6 h-6 text-rose-600" />
            Step 1: Rating & Review Credibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We prioritize products that typically meet:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>⭐ 4.2+ average rating</li>
            <li>📊 Thousands of verified customer reviews</li>
            <li>Consistent long-term performance feedback</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2">
            We analyze review patterns to detect:
          </p>
          <ul className="space-y-1 text-gray-700">
            <li>• Common complaints</li>
            <li>• Irritation issues</li>
            <li>• Breakout triggers</li>
            <li>• Performance consistency</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <FlaskConical className="w-6 h-6 text-rose-600" />
            Step 2: Ingredient Evaluation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each product is reviewed for:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Active ingredient concentration
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Comedogenic risk
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Presence of known irritants
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Suitability for oily, dry, or acne-prone skin
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              SPF and PA rating (for sunscreens)
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2">
            We avoid recommending products with:
          </p>
          <ul className="space-y-1 text-gray-700">
            <li>• High alcohol content (when unnecessary)</li>
            <li>• Fragrance-heavy formulas for sensitive skin</li>
            <li>• Outdated UV filters where better options exist</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Sun className="w-6 h-6 text-rose-600" />
            Step 3: Indian Climate Suitability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            India&apos;s weather significantly impacts skincare performance. We
            evaluate whether products:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Feel heavy in humid climates</li>
            <li>• Leave white cast on medium to deeper skin tones</li>
            <li>• Cause excess oil in high temperatures</li>
            <li>• Perform under sweat exposure</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <IndianRupee className="w-6 h-6 text-rose-600" />
            Step 4: Price-to-Performance Ratio
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe effective skincare should not require luxury pricing.
            Products under ₹1000 are prioritized when they deliver comparable
            ingredient quality to premium alternatives.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <RefreshCw className="w-6 h-6 text-rose-600" />
            Step 5: Continuous Re-Evaluation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Product ratings and formulas change. We periodically:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Update rankings</li>
            <li>• Remove discontinued products</li>
            <li>• Replace underperforming options</li>
            <li>• Add newly proven products</li>
          </ul>
        </section>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-12">
          <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Important Note
          </h3>
          <p className="text-gray-700 leading-relaxed">
            GlowFinds is not a medical authority. For severe skin conditions,
            always consult a certified dermatologist. Our content is
            informational and research-based.
          </p>
        </div>

        <nav className="pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 mb-2">Who Are We</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="text-rose-600 hover:text-rose-700 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-rose-600 hover:text-rose-700 font-medium">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-rose-600 hover:text-rose-700 font-medium">
              Privacy Policy
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

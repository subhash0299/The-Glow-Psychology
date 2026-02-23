import { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles,
  User,
  Target,
  FlaskConical,
  Shield,
  Leaf,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About GlowFinds – Independent Skincare Research Platform for Indian Skin',
  description:
    'Learn how GlowFinds researches and evaluates skincare products for Indian skin types and climate, with transparent selection criteria and independent analysis.',
  openGraph: {
    title: 'About GlowFinds – Independent Skincare Research Platform for Indian Skin',
    description:
      'Learn how GlowFinds researches and evaluates skincare products for Indian skin types and climate, with transparent selection criteria and independent analysis.',
    url: 'https://glowfinds.vercel.app/about',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About GlowFinds – Independent Skincare Research Platform for Indian Skin',
    description:
      'Learn how GlowFinds researches and evaluates skincare products for Indian skin types and climate.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Who Are We
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About GlowFinds
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            An independent skincare research and comparison platform built to
            help Indian consumers make smarter skincare decisions.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Skincare in India is different. Our climate includes:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• High UV exposure</li>
            <li>• Humidity</li>
            <li>• Pollution</li>
            <li>• Acne-prone skin concerns</li>
            <li>• Budget sensitivity</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Yet most skincare content online is either brand-sponsored, overly
            generic, or not tailored to Indian skin types.
          </p>
          <p className="text-gray-900 font-semibold text-lg">
            GlowFinds exists to solve that problem.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <User className="w-6 h-6 text-rose-600" />
            Who Runs GlowFinds?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GlowFinds is founded and managed by <strong>Rohan Bishnoi</strong>,
            an independent skincare researcher focused on ingredient-based
            evaluation, consumer transparency, and climate-specific
            recommendations.
          </p>
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-gray-800 space-y-1">
            <p className="font-semibold">This platform is not a cosmetic brand.</p>
            <p className="font-semibold">We do not manufacture skincare products.</p>
            <p className="font-semibold">We do not sell private-label items.</p>
            <p className="font-semibold">
              We research, compare, and analyze products available in the Indian
              market.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Target className="w-6 h-6 text-rose-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To make skincare:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Simple
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Affordable
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Ingredient-aware
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Climate-suitable
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Transparent
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We focus heavily on budget-friendly skincare under ₹1000 without
            compromising effectiveness.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <FlaskConical className="w-6 h-6 text-rose-600" />
            What Makes GlowFinds Different?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unlike generic &quot;top 10&quot; lists, we evaluate products based on:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Ingredient research
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Dermatology-backed guidelines
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Verified customer review patterns
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Indian climate suitability
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Price-to-performance value
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2">We prioritize:</p>
          <ul className="space-y-1 text-gray-700">
            <li>• Non-comedogenic formulas</li>
            <li>• SPF 50 PA++++ for strong sun protection</li>
            <li>• Gel-based options for oily skin</li>
            <li>• Affordable yet effective formulations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Shield className="w-6 h-6 text-rose-600" />
            Transparency Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GlowFinds participates in affiliate programs including Amazon
            Associates. This means we may earn a small commission when you
            purchase through certain links — at no additional cost to you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">However:</p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Products are not ranked based on commission rates.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              We do not accept paid placements for ranking positions.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              We do not publish sponsored product comparisons disguised as
              reviews.
            </li>
          </ul>
          <p className="text-gray-700 font-medium">
            Our goal is long-term trust — not short-term clicks.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Leaf className="w-6 h-6 text-rose-600" />
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To become India&apos;s most trusted budget skincare research
            platform by prioritizing:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Ingredient clarity
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Transparent comparison methodology
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Climate-based product evaluation
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              Honest, non-exaggerated recommendations
            </li>
          </ul>
        </section>

        <nav className="pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 mb-2">Who Are We</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/how-we-review" className="text-rose-600 hover:text-rose-700 font-medium">
              How We Review
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

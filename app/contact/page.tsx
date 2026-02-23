import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Instagram, MessageCircle, Handshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact GlowFinds – Get in Touch',
  description:
    'Contact GlowFinds for questions, corrections, or feedback about skincare research and product comparisons.',
  openGraph: {
    title: 'Contact GlowFinds – Get in Touch',
    description:
      'Contact GlowFinds for questions, corrections, or feedback about skincare research and product comparisons.',
    url: 'https://glowfinds.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact GlowFinds – Get in Touch',
    description:
      'Contact GlowFinds for questions, corrections, or feedback.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Who Are We
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact GlowFinds
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            We welcome feedback, corrections, and suggestions.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• Questions about a product recommendation</li>
            <li>• Corrections regarding ingredient information</li>
            <li>• Suggestions for new product comparisons</li>
            <li>• Collaboration inquiries</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can reach us at:
          </p>
          <div className="space-y-3">
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-3 text-rose-600 hover:text-rose-700 font-medium"
            >
              <Mail className="w-5 h-5" />
              Email: theglowpsychology@gmail.com
            </a>
            <p className="flex items-center gap-3 text-gray-700">
              <Instagram className="w-5 h-5 text-rose-600" />
              Instagram: @glow.finds_
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Handshake className="w-6 h-6 text-rose-600" />
            Media & Collaboration
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GlowFinds does not accept paid placements that influence product
            rankings. However, we are open to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Ingredient research discussions</li>
            <li>• Dermatology insights</li>
            <li>• Data corrections</li>
            <li>• Consumer safety updates</li>
          </ul>
          <p className="text-gray-700 font-medium">
            Transparency and credibility are our priority.
          </p>
        </section>

        <nav className="pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 mb-2">Who Are We</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="text-rose-600 hover:text-rose-700 font-medium">
              About
            </Link>
            <Link href="/how-we-review" className="text-rose-600 hover:text-rose-700 font-medium">
              How We Review
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

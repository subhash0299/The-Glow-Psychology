import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Cookie, Link2, Server, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy – GlowFinds',
  description: 'Learn how GlowFinds collects, uses, and protects user information.',
  openGraph: {
    title: 'Privacy Policy – GlowFinds',
    description: 'Learn how GlowFinds collects, uses, and protects user information.',
    url: 'https://glowfinds.vercel.app/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy – GlowFinds',
    description: 'Learn how GlowFinds collects, uses, and protects user information.',
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 21, 2026'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Who Are We
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            GlowFinds respects your privacy. This policy explains what
            information we collect and how it is used.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <FileText className="w-6 h-6 text-rose-600" />
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">We do not collect any information from our users.</p>
          
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
            <Link2 className="w-6 h-6 text-rose-600" />
            Affiliate Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Some links on GlowFinds are affiliate links. If you click and
            purchase, we may earn a commission. This does not increase your
            purchase price.
          </p>
        </section>
        <p className="text-gray-700 leading-relaxed mb-4">We do not use any third-party services to track your activity on our website.</p>
        

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Updates to Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy periodically. Changes will be reflected on
            this page.
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
            <Link href="/contact" className="text-rose-600 hover:text-rose-700 font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Face Care Products in India (2026) | Skincare for All Skin Types',
  description: 'Discover the best face care products in India for 2026. From sunscreens to serums, find affordable skincare products for oily, dry, and combination skin under ₹1000.',
  openGraph: {
    title: 'Best Face Care Products in India (2026) | Skincare for All Skin Types',
    description: 'Discover the best face care products in India for 2026. From sunscreens to serums, find affordable skincare products for oily, dry, and combination skin under ₹1000.',
    url: 'https://glowfinds.vercel.app/face-care',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Best Face Care Products in India (2026)',
    description: 'Discover the best face care products in India for 2026. Affordable skincare for all skin types.',
  },
}

// Face care categories with featured info
const faceCategories = [
  {
    title: 'Sunscreen',
    description: 'SPF 50+ protection for Indian weather. Matte finish, no white cast.',
    path: '/best-sunscreen-india',
    image: '/sunscreen/Minimalist/Minimalist-Sunscreen-SPF-50-PA++++-1.png',
    productCount: 12,
    priceRange: '₹265 - ₹763',
    topBrand: 'Minimalist',
  },
  {
    title: 'Face Serum',
    description: 'Vitamin C, Niacinamide & more for glowing, clear skin.',
    path: '/best-vitamin-c-serum-india',
    image: '/serums/Minimalist/Minimalist-10-Vitamin-C-Serum-1.png',
    productCount: 12,
    priceRange: '₹239 - ₹699',
    topBrand: 'Minimalist',
  },
  {
    title: 'Face Wash',
    description: 'Gentle cleansers for oily, dry & sensitive skin types.',
    path: '/best-face-cleanser-india',
    image: '/cleanser/Cetaphil/cetaphil-gentle-skin-hydrating-face-wash-1.png',
    productCount: 12,
    priceRange: '₹199 - ₹799',
    topBrand: 'Cetaphil',
  },
  {
    title: 'Moisturizer',
    description: 'Lightweight hydration for all skin types. Oil-free options available.',
    path: '/best-face-moisturizer-india',
    image: '/mosturiser/Minimalist/minimalist-dehydrated-skin-moisturizer-1.png',
    productCount: 12,
    priceRange: '₹258 - ₹750',
    topBrand: 'Minimalist',
  },
  {
    title: 'Toner',
    description: 'Balance pH, minimize pores & prep skin for serums.',
    path: '/best-face-toner-india',
    image: '/toner/Minimalist/image.png',
    productCount: 8,
    priceRange: '₹210 - ₹379',
    topBrand: 'Minimalist',
  },
  {
    title: 'Eye Cream',
    description: 'Target dark circles, puffiness & fine lines.',
    path: '/best-eye-cream-india',
    image: '/eyecream/Minimalist/image.png',
    productCount: 4,
    priceRange: '₹319 - ₹509',
    topBrand: 'Minimalist',
  },
  {
    title: 'Exfoliator',
    description: 'Chemical & physical exfoliants for smooth, bright skin.',
    path: '/best-exfoliator-india',
    image: '/exfoliator/Minimalist/image.png',
    productCount: 8,
    priceRange: '₹227 - ₹604',
    topBrand: 'Minimalist',
  },
  {
    title: 'Face Oil',
    description: 'Nourishing oils for dry skin & overnight repair.',
    path: '/best-face-oil-india',
    image: '/faceoil/Minimalist/image.png',
    productCount: 5,
    priceRange: '₹299 - ₹599',
    topBrand: 'Minimalist',
  },
]

export default function FaceCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              2026 Updated
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Best Face Care Products in India
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            Complete face care collection curated for Indian skin types. 
            Find the perfect products for your skincare routine — all under ₹1000.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              ✓ 70+ Products Compared
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              ✓ Budget-Friendly
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              ✓ Expert Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {faceCategories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Starting from</span>
                    <p className="font-semibold text-rose-600">{category.priceRange.split(' - ')[0]}</p>
                  </div>
                  <div className="flex items-center text-rose-600 font-medium group-hover:gap-2 transition-all">
                    View All
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Skin Type Guide */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Not Sure Where to Start?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🧴 Oily Skin?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Focus on oil-control products: gel moisturizers, salicylic acid cleansers, and matte sunscreens.
              </p>
              <Link
                href="/blog/skincare-routine-oily-skin-india"
                className="text-rose-600 font-medium text-sm hover:underline"
              >
                Read Oily Skin Guide →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">☀️ Sun Protection?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Every routine needs SPF 50. Find the best sunscreen for your skin type without white cast.
              </p>
              <Link
                href="/blog/best-sunscreen-oily-skin-india"
                className="text-rose-600 font-medium text-sm hover:underline"
              >
                Read Sunscreen Guide →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">✨ Beginner?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Start with the basics: cleanser, moisturizer, and sunscreen. Build your routine gradually.
              </p>
              <Link
                href="/blog/skincare-routine-beginners-india"
                className="text-rose-600 font-medium text-sm hover:underline"
              >
                Read Beginner Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Personalized Recommendations?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Check out our blog for detailed guides, ingredient breakdowns, and skincare routines tailored for Indian skin.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Our Blog
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}


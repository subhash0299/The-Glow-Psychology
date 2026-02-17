import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sun, Sparkles, Droplets, Shield, Eye, Wand2, Zap, CheckCircle2, TrendingUp, Search, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

function Home() {
  return (
    <>
      <Helmet>
        <title>Best Budget Beauty Products in India | Affordable Skincare Under ₹999</title>
        <meta name="description" content="Discover affordable skincare picks for Indian skin. From sunscreens to serums, find the best beauty products under ₹999 with verified reviews and ratings." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">We Compare, You Choose</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Stop Searching Online.{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              We Compared Everything
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            We've done the research, read thousands of reviews, and compared hundreds of products 
            so you don't have to. Find the best skincare products for Indian skin—all under ₹999.
          </p>
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span>Real customer reviews analyzed</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span>Price comparison included</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span>Best picks highlighted</span>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
              Our Product Comparisons
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            <Link
              to="/best-sunscreen-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Sun className="hidden sm:block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Sunscreens
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    SPF 50 protection
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-vitamin-c-serum-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Sparkles className="hidden sm:block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Face Serums
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Brightening serums
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-face-cleanser-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Droplets className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Face Washes
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Gentle face washes
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-face-moisturizer-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Shield className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Moisturizers
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Hydrating creams
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-face-toner-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Droplets className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Toners
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Balancing toners
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-eye-cream-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Eye className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Eye Creams
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Dark circle care
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-exfoliator-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Wand2 className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Exfoliators
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Smooth & brighten
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/best-face-oil-india"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 sm:p-5 md:p-6 sm:h-44 md:h-48 flex flex-col justify-between">
                <Zap className="hidden sm:block w-10 h-10 text-white" />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    Face Oils
                  </h3>
                  <p className="hidden sm:block text-white/90 text-xs sm:text-sm mb-2 sm:mb-3">
                    Nourishing oils
                  </p>
                  <span className="inline-flex items-center text-white text-xs sm:text-sm font-semibold mt-1 sm:mt-0">
                    Explore
                    <ArrowRight className="hidden sm:inline w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Top Picks from Our Comparisons
            </h2>
            <p className="hidden sm:block text-gray-600 max-w-2xl mx-auto">
              These are the highest-rated products from our detailed comparisons. 
              Click any product to see full details and pricing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* How We Compare Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
              How We Compare Products
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Our team analyzes thousands of products, reviews, and ratings to bring you only the best options
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-rose-50">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-rose-600" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2">Research</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                We search through Amazon, analyze product specifications, and filter by ratings & reviews
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compare</h3>
              <p className="text-sm text-gray-600">
                We compare prices, features, ingredients, and customer feedback side-by-side
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Recommend</h3>
              <p className="text-sm text-gray-600">
                We highlight the best products for different skin types and budgets
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mb-12 border-2 border-rose-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Why You Don't Need to Search Online Anymore
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We've already done the hard work. Our team compares products, analyzes reviews, 
              checks prices, and tests ingredients—so you can make confident decisions in minutes, not hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-rose-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Side-by-Side Comparison</h4>
              <p className="text-sm text-gray-600">
                See all products compared in one table. Price, ratings, features, and best-for categories clearly marked.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real Customer Reviews</h4>
              <p className="text-sm text-gray-600">
                We analyze thousands of verified Amazon reviews. Only products with 4+ stars and proven results make our list.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Best Value Highlighted</h4>
              <p className="text-sm text-gray-600">
                We identify the best overall, best budget pick, and best for specific skin types. No guesswork needed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Comparison Process
          </h3>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">32+</div>
              <div className="text-sm text-gray-600">Products Compared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Reviews Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">4.2+</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">₹999</div>
              <div className="text-sm text-gray-600">Max Price</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            This website contains affiliate links. We may earn a commission at no extra cost to you.
            Prices and availability are subject to change.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;

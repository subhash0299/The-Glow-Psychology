import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sun, Sparkles } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Guide to{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Budget Beauty
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover affordable skincare picks for Indian skin. From sunscreens to serums,
            find the best beauty products under ₹999.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/best-sunscreen-india"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              Shop Sunscreens
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/best-vitamin-c-serum-india"
              className="bg-white hover:bg-gray-50 text-rose-600 px-8 py-3 rounded-lg font-semibold border-2 border-rose-200 transition-colors duration-200 flex items-center gap-2"
            >
              Shop Serums
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Link
            to="/best-sunscreen-india"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 h-64 flex flex-col justify-between">
              <Sun className="w-12 h-12 text-white" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Best Sunscreens
                </h2>
                <p className="text-white/90 mb-4">
                  Top-rated sun protection under ₹500
                </p>
                <span className="inline-flex items-center text-white font-semibold">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/best-vitamin-c-serum-india"
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 h-64 flex flex-col justify-between">
              <Sparkles className="w-12 h-12 text-white" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Vitamin C Serums
                </h2>
                <p className="text-white/90 mb-4">
                  Brightening serums for glowing skin
                </p>
                <span className="inline-flex items-center text-white font-semibold">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Picks
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-rose-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Why Trust Our Recommendations?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We carefully curate affordable skincare products that work for Indian skin types and budgets.
            Every product is rated by real users and tested for quality.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-rose-600 mb-2">4.2+</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-rose-600 mb-2">Under ₹999</div>
              <div className="text-sm text-gray-600">Budget Friendly</div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-rose-600 mb-2">Verified</div>
              <div className="text-sm text-gray-600">Real Reviews</div>
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

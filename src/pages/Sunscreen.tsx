import { Helmet } from 'react-helmet-async';
import { Sun, Shield, Sparkles, Heart, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { sunscreens } from '../data/products';

function Sunscreen() {
  return (
    <>
      <Helmet>
        <title>Best Sunscreen Under ₹500 in India (2024) | SPF 50 for Oily Skin</title>
        <meta name="description" content="Top-rated sunscreens under ₹500 for oily and acne-prone skin in India. SPF 50, no white cast, dermatologist approved. Compare prices and ratings." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-10 h-10" />
            <span className="text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
              2024 Updated
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Best Sunscreens Under ₹500 in India
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Looking for affordable sunscreen for oily skin in India? Discover top-rated sun
            protection products that won't break the bank. Perfect for daily use, these
            sunscreens offer SPF 50 protection without white cast or greasiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why You Need Sunscreen in India
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">UV Protection</h3>
                <p className="text-gray-600 text-sm">
                  Protects against harmful UVA and UVB rays that cause premature aging and skin damage.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Anti-Aging</h3>
                <p className="text-gray-600 text-sm">
                  Prevents wrinkles, fine lines, and dark spots caused by sun exposure.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Even Skin Tone</h3>
                <p className="text-gray-600 text-sm">
                  Helps maintain an even complexion by preventing hyperpigmentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Sunscreen Picks for Indian Skin
          </h2>
          <p className="text-gray-600 mb-8">
            These affordable sunscreens are specially curated for Indian skin types, offering
            matte finishes, no white cast, and SPF 50 protection perfect for our tropical climate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sunscreens.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sunscreen Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">SPF</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Skin Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                {sunscreens.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                    <td className="py-3 px-4 text-gray-600">{product.spf || "SPF 50"}</td>
                    <td className="py-3 px-4 text-gray-600">{product.skinType || "All Skin Types"}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">{product.mrp}</span>
                          <span className="text-xs font-semibold text-red-600">-{product.discountPercentage}%</span>
                        </div>
                        <span className="text-gray-900 font-semibold">{product.price}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-gray-600">{product.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How to Choose the Right Sunscreen
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">SPF 50 or Higher</h4>
                <p className="text-gray-600 text-sm">
                  For Indian climate, SPF 50 PA+++ or PA++++ is recommended for adequate protection.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Match Your Skin Type</h4>
                <p className="text-gray-600 text-sm">
                  Oily skin? Go for gel-based or matte finish. Dry skin? Choose hydrating formulas.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">No White Cast</h4>
                <p className="text-gray-600 text-sm">
                  Look for sunscreens that blend seamlessly without leaving a chalky residue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            This website contains affiliate links. We may earn a commission at no extra cost to you.
            All products are independently selected based on ratings and reviews.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sunscreen;

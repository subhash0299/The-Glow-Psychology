import { Helmet } from 'react-helmet-async';
import { Sparkles, Droplets, Star, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { vitaminCSerums } from '../data/products';

function VitaminCSerum() {
  return (
    <>
      <Helmet>
        <title>Best Vitamin C Serum Under ₹999 in India (2024) | Brightening Serums</title>
        <meta name="description" content="Top-rated vitamin C serums under ₹999 for glowing skin in India. 10% to 20% concentration, brightening, dark spot reduction, dermatologist approved." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10" />
            <span className="text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
              Dermatologist Approved
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Best Vitamin C Serums Under ₹999 in India
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover the best vitamin C serum for glowing skin in India. These affordable,
            high-quality serums brighten, reduce dark spots, and boost collagen for radiant,
            youthful skin without the premium price tag.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Vitamin C for Indian Skin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Brightening</h3>
                <p className="text-gray-600 text-sm">
                  Fades dark spots, hyperpigmentation, and evens out skin tone for a radiant glow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Anti-Aging</h3>
                <p className="text-gray-600 text-sm">
                  Boosts collagen production, reducing fine lines and wrinkles for younger-looking skin.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Antioxidant Power</h3>
                <p className="text-gray-600 text-sm">
                  Protects skin from environmental damage and pollution, common in Indian cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Vitamin C Serums for Every Budget
          </h2>
          <p className="text-gray-600 mb-8">
            From 10% to 20% concentration, these vitamin C serums are formulated for Indian
            skin types and climate. Find your perfect match for brighter, healthier skin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {vitaminCSerums.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Vitamin C Serum Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Concentration</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Skin Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                </tr>
              </thead>
              <tbody>
                {vitaminCSerums.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                    <td className="py-3 px-4 text-gray-600">{product.concentration || "10-20%"}</td>
                    <td className="py-3 px-4 text-gray-600">{product.skinType || "All Skin Types"}</td>
                    <td className="py-3 px-4 text-gray-600 font-semibold">{product.price}</td>
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

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use Vitamin C Serum Effectively
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Apply in the Morning</h4>
                <p className="text-gray-600 text-sm">
                  Use after cleansing and before moisturizer. Vitamin C works best during the day for maximum protection.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Start with Lower Concentration</h4>
                <p className="text-gray-600 text-sm">
                  If you're new to vitamin C, start with 10% and gradually increase to avoid irritation.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Always Follow with Sunscreen</h4>
                <p className="text-gray-600 text-sm">
                  Vitamin C can make skin sensitive to sun. Always apply SPF 50 sunscreen after your serum.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Store Properly</h4>
                <p className="text-gray-600 text-sm">
                  Keep in a cool, dark place. Vitamin C oxidizes easily when exposed to light and air.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Concentration Should You Choose?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Concentration</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Results</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">10%</td>
                  <td className="py-3 px-4 text-gray-600">Beginners, sensitive skin</td>
                  <td className="py-3 px-4 text-gray-600">Gentle brightening</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">15%</td>
                  <td className="py-3 px-4 text-gray-600">Most skin types</td>
                  <td className="py-3 px-4 text-gray-600">Balanced results</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">20%</td>
                  <td className="py-3 px-4 text-gray-600">Experienced users</td>
                  <td className="py-3 px-4 text-gray-600">Maximum potency</td>
                </tr>
              </tbody>
            </table>
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

export default VitaminCSerum;

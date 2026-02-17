import { Helmet } from "react-helmet-async";
import { Eye, Star, ExternalLink } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { eyeCreams } from "../data/products";

function EyeCream() {
  return (
    <>
      <Helmet>
        <title>
          Best Under Eye Creams in India (2024) | Dark Circles & Puffiness
        </title>
        <meta
          name="description"
          content="Best under eye creams in India for dark circles, puffiness and fine lines. Affordable options with caffeine, peptides and retinol."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Eye className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              <span className="text-xs sm:text-sm bg-white/20 px-3 sm:px-4 py-1 rounded-full">
                2024 Updated
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Best Under Eye Creams in India
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl px-2">
              Tired eyes, dark circles or puffiness? These under eye creams are
              formulated with caffeine, peptides and brightening actives to help
              you look well rested.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 px-2">
            Top Eye Cream Picks Under ₹999
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {eyeCreams.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Eye Cream Comparison Table
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[600px] sm:min-w-0">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Product</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Best For</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Skin Type</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Price</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Rating</th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-900">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  {eyeCreams.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 max-w-[200px] sm:max-w-none">{product.name}</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        {product.bestFor && (
                          <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                            {product.bestFor}
                          </span>
                        )}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">
                        {product.skinType || "All Skin Types"}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-xs sm:text-sm text-gray-400 line-through">{product.mrp}</span>
                            <span className="text-xs font-semibold text-red-600">-{product.discountPercentage}%</span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-900 font-semibold">{product.price}</span>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs sm:text-sm text-gray-600">{product.rating}</span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-rose-500 hover:bg-rose-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors whitespace-nowrap"
                        >
                          Buy
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              How to Use Under Eye Cream Correctly
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Use Ring Finger
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Gently tap a small amount using your ring finger to avoid
                    tugging the delicate under eye area.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Apply Twice Daily
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    For best results apply morning and night on clean, dry skin.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Be Consistent
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Dark circles and fine lines take time to fade. Use
                    consistently for at least 8–12 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              This website contains affiliate links. We may earn a commission
              at no extra cost to you. All products are independently selected
              based on ratings and reviews.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EyeCream;
import { Helmet } from "react-helmet-async";
import { Droplets, Star, ExternalLink } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { faceOils } from "../data/products";

function FaceOil() {
  return (
    <>
      <Helmet>
        <title>
          Best Face Oils in India (2024) | Squalane, Rosehip & More Under ₹1500
        </title>
        <meta
          name="description"
          content="Best face oils in India including squalane and rosehip oils. Lightweight and nourishing options for glowing, healthy skin."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-amber-500 to-rose-500 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-10 h-10" />
              <span className="text-sm bg-white/20 px-4 py-1 rounded-full">
                2026 Updated
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              Best Face Oils in India
            </h1>

            <p className="text-xl text-white/90 max-w-3xl">
              Face oils can lock in moisture, repair skin barrier and give an
              instant glow. These picks include lightweight squalane and rich
              rosehip blends for different skin types.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 px-2">
            Top Face Oil Picks for Glowing Skin
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {faceOils.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Face Oil Comparison Table
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
                  {faceOils.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 max-w-[200px] sm:max-w-none">{product.name}</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4">
                        {product.bestFor && (
                          <span className="inline-block text-xs font-medium bg-amber-100 text-amber-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
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

          {/* How to layer */}
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              How to Use Face Oils in Your Routine
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Last Step at Night
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Apply face oil as the last step of your PM routine to seal
                    in all previous skincare.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    2–3 Drops Only
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Warm a few drops between your palms and press gently into
                    the skin instead of rubbing.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                    Choose Right for Your Skin
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Lightweight squalane works well for oily skin, while richer
                    rosehip or blends suit dry and mature skin.
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

export default FaceOil;
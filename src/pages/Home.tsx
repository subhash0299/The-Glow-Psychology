import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sun, Sparkles, Droplets, Shield, Eye, Wand2, Zap, CheckCircle2, TrendingUp, Search, Star, X, Filter, ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { 
  sunscreens, 
  vitaminCSerums, 
  moisturizers, 
  faceWashes, 
  toners, 
  eyeCreams, 
  exfoliators, 
  faceOils 
} from '../data/products';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type SortOption = 'default' | 'a-z' | 'price-low-high' | 'price-high-low' | 'rating';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Combine all products and shuffle them randomly
  const allProducts = useMemo(() => {
    const combined = [
      ...sunscreens,
      ...vitaminCSerums,
      ...moisturizers,
      ...faceWashes,
      ...toners,
      ...eyeCreams,
      ...exfoliators,
      ...faceOils
    ];
    return shuffleArray(combined);
  }, []);

  // Helper function to parse price string to number
  const parsePrice = (priceStr: string): number => {
    // Remove currency symbols, commas, and extract number
    const cleaned = priceStr.replace(/[₹,]/g, '').trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  // Helper function to parse rating string to number
  const parseRating = (ratingStr: string): number => {
    // Extract the first number from rating string (e.g., "4.1 (30,019)" -> 4.1)
    const match = ratingStr.match(/^(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Filter and sort products based on search query and sort option
  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Apply search filter
    if (searchQuery.trim()) {
      // Split search query into individual words and normalize
      const searchWords = searchQuery
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);
      
      products = products.filter(product => {
        const productName = product.name.toLowerCase();
        // Check if all search words appear in the product name
        return searchWords.every(word => productName.includes(word));
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'a-z':
        products.sort((a, b) => {
          const brandA = (a.brand || '').toLowerCase();
          const brandB = (b.brand || '').toLowerCase();
          // If both have brands, compare brands
          if (brandA && brandB) {
            return brandA.localeCompare(brandB);
          }
          // If only A has brand, A comes first
          if (brandA && !brandB) return -1;
          // If only B has brand, B comes first
          if (!brandA && brandB) return 1;
          // If neither has brand, compare by name
          return a.name.localeCompare(b.name);
        });
        break;
      case 'price-low-high':
        products.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'price-high-low':
        products.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'rating':
        products.sort((a, b) => parseRating(b.rating) - parseRating(a.rating));
        break;
      case 'default':
      default:
        // Keep original shuffled order
        break;
    }

    return products;
  }, [allProducts, searchQuery, sortBy]);

  // Get display text for current filter
  const getFilterDisplayText = () => {
    switch (sortBy) {
      case 'a-z':
        return 'A-Z';
      case 'price-low-high':
        return 'Price Low-High';
      case 'price-high-low':
        return 'Price High-Low';
      case 'rating':
        return 'Rating';
      case 'default':
      default:
        return 'Filter By';
    }
  };

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
              Product Categories
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
              {searchQuery ? `Search Results` : 'All Products'}
            </h2>
            <p className="hidden sm:block text-gray-600 max-w-2xl mx-auto">
              {searchQuery 
                ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} matching "${searchQuery}"`
                : 'Browse through all our curated beauty products. Click any product to see full details and pricing.'
              }
            </p>
          </div>

          {/* Search Bar with Filter Dropdown */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Input */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products by name..."
                  className="block w-full pl-12 pr-12 py-3 sm:py-4 border border-gray-300 rounded-xl sm:rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm sm:text-base shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 min-w-[140px] sm:min-w-[180px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-rose-600" />
                    <span>{getFilterDisplayText()}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isFilterOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsFilterOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-20 py-2">
                      <button
                        onClick={() => {
                          setSortBy('default');
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === 'default'
                            ? 'bg-rose-100 text-rose-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Default
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('a-z');
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === 'a-z'
                            ? 'bg-rose-100 text-rose-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        A-Z
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('price-low-high');
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === 'price-low-high'
                            ? 'bg-rose-100 text-rose-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Price Low-High
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('price-high-low');
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === 'price-high-low'
                            ? 'bg-rose-100 text-rose-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Price High-Low
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('rating');
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === 'rating'
                            ? 'bg-rose-100 text-rose-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Rating
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={`${product.name}-${index}`} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try searching with different keywords or clear your search to see all products.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
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

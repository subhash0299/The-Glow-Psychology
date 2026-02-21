'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/data/products'

// Category filters for Eyes & Lip care
const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'eye-creams', label: 'Eye Creams' },
  { id: 'lip-balms', label: 'Lip Balms' },
]

interface CategoryFilterProps {
  products: Product[]
  eyeCreams: Product[]
  lipBalms: Product[]
  title: string
  description: string
}

export default function CategoryFilter({ products, eyeCreams, lipBalms, title, description }: CategoryFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') {
      return products
    }

    switch (selectedFilter) {
      case 'eye-creams':
        return eyeCreams
      case 'lip-balms':
        return lipBalms
      default:
        return products
    }
  }, [products, eyeCreams, lipBalms, selectedFilter])

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 px-2">
          {description}
        </p>

        {/* Category Filter */}
        <div className="bg-gray-100 rounded-xl p-3 mx-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Category:</span>
              <div className="flex gap-1.5 flex-wrap">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedFilter === filter.id
                        ? 'bg-rose-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-500">
              {filteredProducts.length} products
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No products found in this category.</p>
            <button
              onClick={() => setSelectedFilter('all')}
              className="mt-3 px-4 py-2 bg-rose-600 text-white text-sm font-medium rounded-lg hover:bg-rose-700 transition-colors"
            >
              Show all products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}


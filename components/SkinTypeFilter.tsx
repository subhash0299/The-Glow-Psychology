'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/data/products'

// Common skin type filters
const skinTypeFilters = [
  { id: 'all', label: 'All' },
  { id: 'oily', label: 'Oily' },
  { id: 'dry', label: 'Dry' },
  { id: 'acne', label: 'Acne-Prone' },
  { id: 'sensitive', label: 'Sensitive' },
]

interface SkinTypeFilterProps {
  products: Product[]
  title: string
  description: string
}

export default function SkinTypeFilter({ products, title, description }: SkinTypeFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Filter products based on selected skin type
  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') {
      return products
    }

    return products.filter((product) => {
      const skinType = product.skinType?.toLowerCase() || ''
      
      // Always include "All Skin Types" products
      if (skinType.includes('all skin types')) {
        return true
      }

      // Match based on selected filter
      switch (selectedFilter) {
        case 'oily':
          return skinType.includes('oily')
        case 'dry':
          return skinType.includes('dry')
        case 'acne':
          return skinType.includes('acne')
        case 'sensitive':
          return skinType.includes('sensitive')
        default:
          return true
      }
    })
  }, [products, selectedFilter])

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 px-2">
          {description}
        </p>

        {/* Skin Type Filter */}
        <div className="bg-gray-100 rounded-xl p-3 mx-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Skin Type:</span>
              <div className="flex gap-1.5 flex-wrap">
                {skinTypeFilters.map((filter) => (
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
            <p className="text-gray-500">No products found for this skin type.</p>
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

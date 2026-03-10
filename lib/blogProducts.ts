import type { Product } from '@/data/products'
import {
  sunscreens,
  vitaminCSerums,
  moisturizers,
  faceWashes,
  toners,
  exfoliators,
  faceOils,
  eyeCreams,
  lipBalms,
} from '@/data/products'

const pathToProducts: Record<string, Product[]> = {
  '/best-face-cleanser-india': faceWashes,
  '/best-sunscreen-india': sunscreens,
  '/best-face-moisturizer-india': moisturizers,
  '/best-vitamin-c-serum-india': vitaminCSerums,
  '/best-face-toner-india': toners,
  '/best-exfoliator-india': exfoliators,
  '/best-face-oil-india': faceOils,
  '/best-eye-cream-india': eyeCreams,
  '/best-lip-balm-india': lipBalms,
}

/**
 * Get a product for embedding in blog posts.
 * Supports two formats:
 *   - "/best-face-moisturizer-india"      → first product (index 0)
 *   - "/best-face-moisturizer-india:2"    → product at index 2
 */
export function getProductForCategoryPath(pathWithOptionalIndex: string): Product | null {
  const [path, indexStr] = pathWithOptionalIndex.split(':')
  const products = pathToProducts[path]
  if (!products || products.length === 0) return null
  const index = indexStr !== undefined ? parseInt(indexStr, 10) : 0
  return products[index] ?? products[0]
}

/** Get category label from path for display (e.g. "Face Cleanser"). */
export function getCategoryLabel(path: string): string {
  const label = path
    .replace('/best-', '')
    .replace('-india', '')
    .replace(/-/g, ' ')
  return label.charAt(0).toUpperCase() + label.slice(1)
}

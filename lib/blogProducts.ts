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

/** Get the first (featured) product for a category page path, for embedding in blog posts. */
export function getProductForCategoryPath(path: string): Product | null {
  const products = pathToProducts[path]
  return products && products.length > 0 ? products[0] : null
}

/** Get category label from path for display (e.g. "Face Cleanser"). */
export function getCategoryLabel(path: string): string {
  const label = path
    .replace('/best-', '')
    .replace('-india', '')
    .replace(/-/g, ' ')
  return label.charAt(0).toUpperCase() + label.slice(1)
}

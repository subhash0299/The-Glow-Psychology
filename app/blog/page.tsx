import type { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import BlogPageClient from '@/components/BlogPageClient'

export const metadata: Metadata = {
  title: 'Beauty & Skincare Blog | Expert Guides & Tips (2026)',
  description: 'Expert skincare guides, ingredient education, and beauty tips for Indian skin. Learn about routines, products, and solutions for common skin concerns.',
  alternates: {
    canonical: 'https://glowfinds.vercel.app/blog',
  },
  openGraph: {
    title: 'Beauty & Skincare Blog | Expert Guides & Tips (2026)',
    description: 'Expert skincare guides, ingredient education, and beauty tips for Indian skin. Learn about routines, products, and solutions for common skin concerns.',
    url: 'https://glowfinds.vercel.app/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Beauty & Skincare Blog | Expert Guides & Tips (2026)',
    description: 'Expert skincare guides, ingredient education, and beauty tips for Indian skin. Learn about routines, products, and solutions for common skin concerns.',
  },
}

export default function Blog() {
  return <BlogPageClient posts={blogPosts} />
}


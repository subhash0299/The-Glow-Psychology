import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glowfinds.vercel.app'

  // Blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Category landing pages
  const categoryPages = [
    {
      url: `${baseUrl}/face-care`,
      lastModified: new Date('2026-02-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Product category pages
  const productPages = [
    {
      url: `${baseUrl}/best-sunscreen-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-vitamin-c-serum-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-face-cleanser-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-face-moisturizer-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-face-toner-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-eye-cream-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-exfoliator-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-face-oil-india`,
      lastModified: new Date('2026-01-20'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...categoryPages,
    ...productPages,
    ...blogUrls,
  ]
}



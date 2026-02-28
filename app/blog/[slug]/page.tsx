import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, BookOpen, BadgeCheck, Share2, Facebook, Twitter } from 'lucide-react'
import PrintButton from '@/components/PrintButton'
import ReactMarkdown, { type Components } from 'react-markdown'
import { blogPosts } from '@/data/blogPosts'
import { getProductForCategoryPath } from '@/lib/blogProducts'
import type { Product } from '@/data/products'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | GlowFinds Blog`,
    description: post.description,
    alternates: {
      canonical: `https://glowfinds.vercel.app/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://glowfinds.vercel.app/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

function getCategoryColor(category: string) {
  switch (category) {
    case 'Skincare Guide':
      return 'bg-blue-100 text-blue-700'
    case 'Ingredient Education':
      return 'bg-purple-100 text-purple-700'
    case 'Problem-Solution':
      return 'bg-rose-100 text-rose-700'
    case 'Routine':
      return 'bg-green-100 text-green-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function prepareContent(content: string, postTitle: string, hasFaqs: boolean) {
  let prepared = content

  const titleWords = postTitle.toLowerCase().split(' ').slice(0, 5).join(' ')

  prepared = prepared.replace(/^#+\s+(.+?)(?:\s*\([^)]+\))?\s*\n\n/gi, (match, headingText) => {
    const headingLower = headingText.toLowerCase()
    if (headingLower.includes(titleWords) || titleWords.includes(headingLower.split(' ').slice(0, 5).join(' '))) {
      return ''
    }
    if (match.startsWith('# ')) {
      return `## ${headingText}\n\n`
    }
    return match
  })

  prepared = prepared.replace(/^#\s+(.+)$/gim, '## $1')

  if (hasFaqs) {
    prepared = prepared.replace(/\n## FAQs[\s\S]*?(?=\n## |\n# |$)/, '\n')
  }

  return prepared.trim()
}

function BlogProductCard({ product }: { product: Product }) {
  const shortName = product.brand
    ? `${product.brand} – ${product.name.split('|')[0].trim()}`
    : product.name.split('|')[0].trim()
  const displayName = shortName.length > 70 ? shortName.slice(0, 67) + '...' : shortName

  return (
    <div className="my-6 bg-white rounded-2xl border-2 border-rose-100 overflow-hidden shadow-sm">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-44 h-44 shrink-0 bg-gray-50">
          <Image
            src={product.images[0] || '/logo.png'}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, 11rem"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-col justify-center flex-grow gap-3">
          <p className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
            {displayName}
          </p>
          {product.bestFor && (
            <span className="text-xs bg-rose-50 text-rose-700 font-semibold px-2 py-1 rounded-full w-fit">
              {product.bestFor}
            </span>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-rose-600">{product.price}</span>
            {product.mrp && product.mrp !== product.price && (
              <span className="text-sm text-gray-400 line-through">{product.mrp}</span>
            )}
            {product.discountPercentage > 0 && (
              <span className="text-xs font-semibold text-green-600">{product.discountPercentage}% OFF</span>
            )}
          </div>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-fit bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  )
}

function BlogContentRenderer({
  content,
  postTitle,
  hasFaqs,
}: {
  content: string
  postTitle: string
  hasFaqs: boolean
}) {
  const prepared = prepareContent(content, postTitle, hasFaqs)
  // Split on [PRODUCT:/some/path] markers
  const parts = prepared.split(/\[PRODUCT:([^\]]+)\]/g)

  const mdComponents: Components = {
    h1: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    a: ({ href, children }) => (
      <a href={href} className="text-rose-600 hover:text-rose-700 underline">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-rose-500 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  }

  return (
    <div className="blog-content text-gray-700 leading-relaxed">
      {parts.map((part, i) => {
        if (i % 2 === 0) {
          // Markdown segment
          if (!part.trim()) return null
          return (
            <ReactMarkdown key={i} components={mdComponents}>
              {part}
            </ReactMarkdown>
          )
        } else {
          // Product path
          const product = getProductForCategoryPath(part.trim())
          if (!product) return null
          return <BlogProductCard key={i} product={product} />
        }
      })}
    </div>
  )
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : []

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'GlowFinds',
      url: 'https://glowfinds.vercel.app/about',
    },
    articleSection: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://glowfinds.vercel.app/blog/${post.slug}`,
    },
  }

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  const shareUrl = `https://glowfinds.vercel.app/blog/${post.slug}`
  const shareTitle = encodeURIComponent(post.title)
  const shareText = encodeURIComponent(post.description)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-white">
        {/* Back */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Hero image - constrained to content width */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="w-full aspect-[16/9] sm:aspect-[2/1] relative bg-gray-100 rounded-xl overflow-hidden">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), 896px"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-rose-300" />
              </div>
            )}
          </div>
        </div>

        {/* Title block below hero */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)} mb-4`}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          <Link
            href="/how-we-review"
            className="mt-4 inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-700 font-medium"
          >
            <BadgeCheck className="w-4 h-4" />
            Reviewed using GlowFinds methodology
          </Link>
        </div>

        {/* Main content - single column */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <article>
            <BlogContentRenderer
              content={post.content}
              postTitle={post.title}
              hasFaqs={!!(post.faqs && post.faqs.length > 0)}
            />
          </article>


          {/* Social share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-gray-600 font-medium">
                <Share2 className="w-4 h-4" />
                Share
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-rose-100 text-gray-600 hover:text-rose-600 transition-colors"
                aria-label="Share on Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.214 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <PrintButton />
            </div>
          </div>

          {/* Love GlowFinds? testimonial-style */}
          <div className="mt-12 bg-rose-50 rounded-2xl p-6 sm:p-8 border border-rose-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Love GlowFinds?</h3>
            <p className="text-gray-700 mb-4">
              We&apos;re here to help you find the best budget skincare for Indian skin. Sign up for honest reviews, routine guides, and deals—no spam.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold"
            >
              Explore more guides
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <details
                    key={`${faq.question}-${idx}`}
                    className="group rounded-xl border border-gray-200 bg-gray-50 px-4 sm:px-5 py-3 sm:py-4"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-start justify-between gap-3">
                      <span className="leading-snug">{faq.question}</span>
                      <span className="text-gray-400 group-open:rotate-180 transition-transform select-none">▾</span>
                    </summary>
                    <div className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 rounded-xl border border-gray-200 hover:border-rose-200 hover:bg-rose-50/50 transition-colors group"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 sm:p-8 text-white text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">Explore More Skincare Guides</h2>
            <p className="mb-6 text-rose-50">
              Discover expert tips, product comparisons, and skincare solutions.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              View All Posts
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { blogPosts } from '@/data/blogPosts'

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
    title: `${post.title} | Beauty Blog`,
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
    day: 'numeric' 
  })
}

function prepareContent(content: string, postTitle: string, hasFaqs: boolean) {
  let prepared = content

  // Extract first few words of title for matching
  const titleWords = postTitle.toLowerCase().split(' ').slice(0, 5).join(' ')
  
  // Remove any H1 or H2 at the start that matches the post title
  // This handles cases like "# Best Skincare Routine..." when title is "Best Skincare Routine..."
  prepared = prepared.replace(/^#+\s+(.+?)(?:\s*\([^)]+\))?\s*\n\n/gi, (match, headingText) => {
    const headingLower = headingText.toLowerCase()
    // Check if heading is similar to post title (contains key words)
    if (headingLower.includes(titleWords) || titleWords.includes(headingLower.split(' ').slice(0, 5).join(' '))) {
      return '' // Remove duplicate title
    }
    // If it's an H1, convert to H2; if H2, keep as is
    if (match.startsWith('# ')) {
      return `## ${headingText}\n\n`
    }
    return match // Keep H2 and H3 as is
  })

  // Convert any remaining H1 in content to H2 (only one H1 per page - the page title)
  prepared = prepared.replace(/^#\s+(.+)$/gim, '## $1')

  // If we have structured FAQs, remove the "## FAQs" section from the main content
  if (hasFaqs) {
    prepared = prepared.replace(/\n## FAQs[\s\S]*?(?=\n## |\n# |$)/, '\n')
  }

  return prepared.trim()
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
      name: 'Glow Finds',
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
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              {post.description}
            </p>

            {/* Meta Information */}
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
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="blog-content text-gray-700 leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
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
                }}
              >
                {prepareContent(post.content, post.title, !!(post.faqs && post.faqs.length > 0))}
              </ReactMarkdown>
            </div>
          </article>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
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

          {/* Related Products */}
          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Product Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedProducts.map((link) => {
                  const linkText = link.replace('/best-', '').replace('-india', '').replace(/-/g, ' ')
                  return (
                    <Link
                      key={link}
                      href={link}
                      className="flex items-center gap-2 p-4 rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 text-rose-600 group-hover:translate-x-1 transition-transform" />
                      <span className="font-medium text-gray-900 capitalize">{linkText}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
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
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 sm:p-8 text-white text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
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


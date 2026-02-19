import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-rose-600 hover:text-rose-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Skincare Guide':
        return 'bg-blue-100 text-blue-700';
      case 'Ingredient Education':
        return 'bg-purple-100 text-purple-700';
      case 'Problem-Solution':
        return 'bg-rose-100 text-rose-700';
      case 'Routine':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    let formatted = content;

    // If we have structured FAQs, remove the "## FAQs" section from the main content
    // so we can render a nicer FAQ section separately.
    if (post.faqs && post.faqs.length > 0) {
      // Remove from "## FAQs" until the next header (## / #) or end of content.
      formatted = formatted.replace(/\n## FAQs[\s\S]*?(?=\n## |\n# |$)/, '\n');
    }

    // Headers
    formatted = formatted.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>');
    formatted = formatted.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">$1</h1>');

    // Bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');

    // Links
    formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-rose-600 hover:text-rose-700 underline">$1</a>');

    // Lists
    formatted = formatted.replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>');
    formatted = formatted.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>');

    // Paragraphs
    const paragraphs = formatted.split('\n\n').filter(p => p.trim());
    formatted = paragraphs.map(p => {
      if (!p.startsWith('<')) {
        return `<p class="mb-4 text-gray-700 leading-relaxed">${p.trim()}</p>`;
      }
      return p;
    }).join('\n');

    return formatted;
  };

  const relatedPosts = post.relatedPosts 
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : [];

  const canonicalUrl = `https://glowfinds.vercel.app${location.pathname}`;

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
      '@id': canonicalUrl,
    },
  };

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
      : null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Beauty Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
        
        {/* Article Meta */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        
        {/* Schema.org JSON-LD */}
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
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          {/* Back Button */}
          <Link
            to="/blog"
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
            <div 
              className="blog-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>

          {/* FAQs (Better UI) */}
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
                  const linkText = link.replace('/best-', '').replace('-india', '').replace(/-/g, ' ');
                  return (
                    <Link
                      key={link}
                      to={link}
                      className="flex items-center gap-2 p-4 rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 text-rose-600 group-hover:translate-x-1 transition-transform" />
                      <span className="font-medium text-gray-900 capitalize">{linkText}</span>
                    </Link>
                  );
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
                    to={`/blog/${relatedPost.slug}`}
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
              to="/blog"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              View All Posts
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;



'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import type { BlogPost } from '@/data/blogPosts'

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white bg-mesh">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Expert Skincare Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Beauty & Skincare Blog
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Expert guides, ingredient education, and practical tips for healthy, glowing skin.
            Everything you need to know about skincare routines, products, and solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden flex flex-col h-full"
              >
                <motion.div
                  className="flex flex-col flex-grow p-4 sm:px-6 pt-4 sm:pt-6"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="px-0 sm:px-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="px-0 sm:px-2 py-4 sm:py-6 flex-grow flex flex-col">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <div className="flex items-center text-rose-600 font-semibold text-sm sm:text-base group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Skincare Guide', 'Ingredient Education', 'Problem-Solution', 'Routine'].map((category) => (
              <div
                key={category}
                className={`p-4 rounded-xl text-center ${getCategoryColor(category)}`}
              >
                <div className="font-semibold text-sm sm:text-base">{category}</div>
                <div className="text-xs sm:text-sm mt-1 opacity-75">
                  {posts.filter((p) => p.category === category).length} posts
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

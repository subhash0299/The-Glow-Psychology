'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

// Face care sub-pages
const faceCareLinks = [
  { path: '/best-sunscreen-india', label: 'Sunscreen' },
  { path: '/best-vitamin-c-serum-india', label: 'Face Serum' },
  { path: '/best-face-cleanser-india', label: 'Face Wash' },
  { path: '/best-face-moisturizer-india', label: 'Moisturizer' },
  { path: '/best-face-toner-india', label: 'Toner' },
  { path: '/best-eye-cream-india', label: 'Eye Cream' },
  { path: '/best-exfoliator-india', label: 'Exfoliator' },
  { path: '/best-face-oil-india', label: 'Face Oil' },
]

// Hair care sub-pages (placeholder for future)
const hairCareLinks = [
  { path: '/hair-care', label: 'Coming Soon', disabled: true },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [faceCareOpen, setFaceCareOpen] = useState(false)
  const [hairCareOpen, setHairCareOpen] = useState(false)
  const faceCareRef = useRef<HTMLDivElement>(null)
  const hairCareRef = useRef<HTMLDivElement>(null)

  // Check if current page is a face care page
  const isFaceCarePage = faceCareLinks.some(link => pathname === link.path) || pathname === '/face-care'

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faceCareRef.current && !faceCareRef.current.contains(event.target as Node)) {
        setFaceCareOpen(false)
      }
      if (hairCareRef.current && !hairCareRef.current.contains(event.target as Node)) {
        setHairCareOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
              <div className="p-0.5 sm:p-1 rounded-lg group-hover:scale-110 transition-transform">
                <Image 
                  src="/logo.png" 
                  alt="The Glow Psychology Logo" 
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full"
                />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                The Glow Psychology
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`font-medium transition-colors relative ${
                  isActive('/') ? 'text-rose-600' : 'text-gray-700 hover:text-rose-500'
                }`}
              >
                Home
                {isActive('/') && (
                  <div className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-rose-600" />
                )}
              </Link>

              {/* Face Care Dropdown */}
              <div ref={faceCareRef} className="relative">
                <button
                  onClick={() => {
                    setFaceCareOpen(!faceCareOpen)
                    setHairCareOpen(false)
                  }}
                  className={`font-medium transition-colors relative flex items-center gap-1 ${
                    isFaceCarePage ? 'text-rose-600' : 'text-gray-700 hover:text-rose-500'
                  }`}
                >
                  Face Care
                  <ChevronDown className={`w-4 h-4 transition-transform ${faceCareOpen ? 'rotate-180' : ''}`} />
                  {isFaceCarePage && (
                    <div className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-rose-600" />
                  )}
                </button>

                {faceCareOpen && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link
                      href="/face-care"
                      onClick={() => setFaceCareOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 border-b border-gray-100"
                    >
                      All Face Care →
                    </Link>
                    {faceCareLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setFaceCareOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(link.path)
                            ? 'bg-rose-50 text-rose-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Hair Care Dropdown */}
              <div ref={hairCareRef} className="relative">
                <button
                  onClick={() => {
                    setHairCareOpen(!hairCareOpen)
                    setFaceCareOpen(false)
                  }}
                  className="font-medium transition-colors relative flex items-center gap-1 text-gray-400 cursor-not-allowed"
                  disabled
                >
                  Hair Care
                  <ChevronDown className={`w-4 h-4 transition-transform ${hairCareOpen ? 'rotate-180' : ''}`} />
                </button>

                {hairCareOpen && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      Coming Soon! 🚀
                    </div>
                  </div>
                )}
              </div>

              {/* Skincare Guides (Blog) */}
              <Link
                href="/blog"
                className={`font-medium transition-colors relative ${
                  pathname.startsWith('/blog') ? 'text-rose-600' : 'text-gray-700 hover:text-rose-500'
                }`}
              >
                Skincare Guides
                {pathname.startsWith('/blog') && (
                  <div className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-rose-600" />
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive('/') ? 'bg-rose-50 text-rose-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              {/* Face Care Section */}
              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/face-care"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 rounded-lg font-semibold text-rose-600"
                >
                  Face Care
                </Link>
                <div className="ml-4 space-y-1">
                  {faceCareLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                        isActive(link.path)
                          ? 'bg-rose-50 text-rose-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hair Care Section */}
              <div className="pt-2 border-t border-gray-100">
                <div className="py-2 px-4 font-semibold text-gray-400">
                  Hair Care (Coming Soon)
                </div>
              </div>

              {/* Skincare Guides (Blog) */}
              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg font-semibold transition-colors ${
                    pathname.startsWith('/blog') ? 'text-rose-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Skincare Guides
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navigation for Face Care Pages */}
      {isFaceCarePage && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            {/* Mobile: Grid layout showing all at once */}
            <div className="grid grid-cols-3 gap-1.5 py-2 sm:hidden">
              <Link
                href="/face-care"
                className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center transition-colors ${
                  pathname === '/face-care'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                }`}
              >
                All
              </Link>
              {faceCareLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center transition-colors ${
                    isActive(link.path)
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Desktop: Horizontal pill layout */}
            <div className="hidden sm:flex items-center gap-2 py-2">
              <Link
                href="/face-care"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === '/face-care'
                    ? 'bg-rose-600 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </Link>
              {faceCareLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive(link.path)
                      ? 'bg-rose-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

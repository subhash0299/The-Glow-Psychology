import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "/logo.png"; // adjust path if needed

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/best-sunscreen-india', label: 'Sunscreen' },
    { path: '/best-vitamin-c-serum-india', label: 'Face Serum' },
    { path: '/best-face-cleanser-india', label: 'Face Wash' },
    { path: '/best-face-moisturizer-india', label: 'Moisturizer' },
    { path: '/best-face-toner-india', label: 'Toner' },
    { path: '/best-eye-cream-india', label: 'Eye Cream' },
    { path: '/best-exfoliator-india', label: 'Exfoliator' },
    { path: '/best-face-oil-india', label: 'Face Oil' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="p-0.5 sm:p-1 rounded-lg group-hover:scale-110 transition-transform">
            <img 
              src={logo} 
              alt="The Glow Psychology Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            The Glow Psychology
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-rose-600'
                    : 'text-gray-700 hover:text-rose-500'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-rose-600" />
                )}
              </Link>
            ))}
          </div>

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

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

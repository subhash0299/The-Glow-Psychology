import { useState, useEffect } from "react";
import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "../data/products";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Close modal on ESC and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (isOpen) {
        if (e.key === "ArrowLeft") {
          setCurrentImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
        } else if (e.key === "ArrowRight") {
          setCurrentImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, product.images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // Swipe left (next image)
    const isRightSwipe = distance < -50; // Swipe right (previous image)

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-3 sm:p-4 md:p-5 flex flex-col justify-between h-full">

        {/* IMAGE SECTION */}
        <div className="relative mb-4 sm:mb-5 md:mb-6 flex justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            onClick={() => setIsOpen(true)}
            className="max-h-48 sm:max-h-60 md:max-h-72 w-auto object-contain cursor-zoom-in hover:scale-105 transition duration-300"
          />

          {/* Rating Badge */}
          <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 bg-white shadow px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm font-semibold">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
            {product.rating}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow">
          {product.brand && (
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">
              {product.brand}
            </p>
          )}
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2">
            {product.name}
          </h3>

          {product.bestFor && (
            <span className="inline-block text-xs font-medium bg-amber-100 text-amber-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2 sm:mb-3 w-fit">
              🏆 {product.bestFor}
            </span>
          )}

          {product.features && (
            <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {product.features.map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-rose-50 text-rose-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex-grow" />

          <div className="mb-2">
            <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1">
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                {product.mrp}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-red-600">
                -{product.discountPercentage}%
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {product.price}
            </p>
            <p className="text-xs text-gray-500">
              Limited time price. Check latest offer.
            </p>
          </div>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-3"
          >
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white text-[10px] sm:text-sm md:text-base font-semibold py-2 sm:py-2.5 md:py-3 px-2.5 sm:px-4 md:px-5 rounded-lg sm:rounded-xl flex items-center justify-center gap-1 transition">
              <span className="whitespace-nowrap">Order now on amazon</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </button>
          </a>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="relative max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 max-h-[95vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-50 bg-white hover:bg-gray-100 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] border-2 border-gray-200 hover:border-gray-300"
        aria-label="Close"
      >
        <X size={24} className="sm:w-7 sm:h-7 md:w-7 md:h-7 text-gray-700 hover:text-gray-900" />
      </button>

      {/* MAIN IMAGE */}
      <div 
        className="relative flex justify-center mb-4 sm:mb-5 md:mb-6 touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all z-10 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all z-10 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </>
        )}
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] w-full object-contain select-none"
          draggable={false}
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
            {currentImage + 1} / {product.images.length}
          </div>
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            onClick={() => setCurrentImage(index)}
            className={`h-14 sm:h-16 md:h-20 cursor-pointer border-2 rounded-lg ${
              currentImage === index
                ? "border-rose-500"
                : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
  )}
  </>
  );
}
export default ProductCard;
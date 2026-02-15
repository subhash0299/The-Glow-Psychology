import { useState, useEffect } from "react";
import { Star, ExternalLink, X } from "lucide-react";
import { Product } from "../data/products";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between h-full">

        {/* IMAGE SECTION */}
        <div className="relative mb-6 flex justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            onClick={() => setIsOpen(true)}
            className="max-h-72 w-auto object-contain cursor-zoom-in hover:scale-105 transition duration-300"
          />

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-white shadow px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {product.rating}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {product.bestFor && (
            <span className="inline-block text-xs font-medium bg-amber-100 text-amber-700 px-3 py-1 rounded-full mb-3 w-fit">
              🏆 {product.bestFor}
            </span>
          )}

          {product.features && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex-grow" />

          <div className="mb-2">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm text-gray-500 line-through">
                {product.mrp}
              </span>
              <span className="text-sm font-semibold text-red-600">
                -{product.discountPercentage}%
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
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
            className="mt-3"
          >
            <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
              Check Price on Amazon
              <ExternalLink className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setIsOpen(false)}
  >
    <div
      className="relative max-w-4xl w-full bg-white rounded-2xl p-6"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
      >
        <X size={24} />
      </button>

      {/* MAIN IMAGE */}
      <div className="flex justify-center mb-6">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="max-h-[70vh] object-contain"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-3 flex-wrap">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            onClick={() => setCurrentImage(index)}
            className={`h-20 cursor-pointer border-2 rounded-lg ${
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
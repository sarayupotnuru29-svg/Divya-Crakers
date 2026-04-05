import { useState, useRef, MouseEvent } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -15;
    const tiltY = ((x - centerX) / centerX) * 15;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
            isHovered ? 'scale(1.05)' : 'scale(1)'
          }`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
        }}
      >
        <div className="relative h-64 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: `translateZ(${isHovered ? '20px' : '0px'})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div
          className="p-5"
          style={{
            transform: `translateZ(${isHovered ? '30px' : '0px'})`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="mb-2">
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            {product.name}
          </h3>
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>

        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${
              cardRef.current
                ? ((tilt.y / 15 + 1) / 2) * 100
                : 50
            }% ${
              cardRef.current
                ? ((tilt.x / -15 + 1) / 2) * 100
                : 50
            }%, rgba(255,255,255,0.3) 0%, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      </div>
    </div>
  );
}

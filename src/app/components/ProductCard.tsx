import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddSuccess: (name: string) => void; // Prop must be defined here
}

export function ProductCard({ product, onAddSuccess }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stops any other clicks
    addToCart(product);
    onAddSuccess(product.name); // This triggers the function in Products.tsx
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-transparent hover:border-red-100 transition-all duration-300">
        
        {/* IMAGE */}
        <div className="relative h-64 bg-gray-50 overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>

        {/* DETAILS */}
        <div className="p-5">
          <p className="text-xs font-bold text-red-500 uppercase mb-1">{product.category}</p>
          <h3 className="font-semibold text-lg text-gray-800 mb-4 h-14 line-clamp-2">
            {product.name}
          </h3>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md hover:brightness-110"
          >
            <ShoppingCart size={18} />
            <span className="font-bold uppercase tracking-wider text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const categories = ['All', 'Rockets', 'Shots', 'Fancy', 'Sound', 'Kids', 'Sparklers', 'Spinners', 'Fountains'];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [toast, setToast] = useState({ show: false, message: '' });

  // Function to trigger the toast
  const handleAddSuccess = (productName: string) => {
    setToast({ show: true, message: `${productName} added to cart!` });
  };

  // Reset toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Our <span className="text-red-500">Products</span>
        </h1>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddSuccess={handleAddSuccess} // CRITICAL: This must be here
          />
        ))}
      </div>

      {/* --- THE POPUP MESSAGE (TOAST) --- */}
      {/* We use fixed and z-[9999] to ensure it is visible over everything */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ${
        toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-gray-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 min-w-[300px] justify-center">
          <CheckCircle2 className="text-green-400" size={24} />
          <p className="font-bold text-lg">{toast.message}</p>
        </div>
      </div>
    </div>
  );
}
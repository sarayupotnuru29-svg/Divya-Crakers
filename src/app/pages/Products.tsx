import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const categories = ['All', 'Rockets', 'Shots', 'Fancy', 'Sound', 'Kids', 'Sparklers', 'Spinners', 'Fountains'];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const productRows = [
    { title: 'Rockets & Entry Level Shots', ids: ['1', '2', '3', '4'] },
    { title: 'Medium Range Shots', ids: ['5', '6', '7', '8'] },
    { title: 'Premium Shots & Fancy Items', ids: ['9', '10', '11', '12'] },
    { title: 'Classic Fireworks', ids: ['13', '14', '15', '16'] },
    { title: 'Special Collections', ids: ['17', '18', '19', '20'] },
    { title: 'Premium & Fancy Range', ids: ['21', '22', '23', '24'] },
    { title: 'Ultimate Experience', ids: ['25', '26', '27', '28'] },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Our <span className="text-red-500">Products</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our wide range of premium fireworks and crackers for every celebration
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory === 'All' ? (
        <div className="space-y-16">
          {productRows.map((row, index) => {
            const rowProducts = products.filter(p => row.ids.includes(p.id));
            return (
              <div key={index}>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-4">
                  {row.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {rowProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

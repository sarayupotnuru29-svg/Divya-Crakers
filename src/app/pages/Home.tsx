import { Link } from 'react-router';
import { Sparkles, Star, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
// Import your hero background image
import heroBg from '../../assets/hero-bg.png'; 

export function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Subtle gradient bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-yellow-400" size={32} />
              <span className="text-yellow-400 font-semibold">Since 2005</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Celebrate Every Moment with <span className="text-yellow-400">Divya Crackers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Trusted Fireworks Dealer Since 2005
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <ShoppingBag size={24} />
                Shop Now
              </Link>
              <a
                href="https://wa.me/919894354432?text=Hi%2C%20I%20want%20to%20order%20crackers%20from%20Divya%20Crackers."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our best-selling fireworks and crackers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Trusted Brands
            </h2>
            <p className="text-gray-600 text-lg">
              Premium quality fireworks from leading manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <Star className="text-red-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Fireworks</h3>
              <p className="text-gray-600">Premium quality crackers since 1942</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300">
              <Star className="text-orange-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ellis Fireworks</h3>
              <p className="text-gray-600">Innovative designs and safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Light Up Your Celebration?
          </h2>
          <p className="text-xl mb-8">
            Browse our complete collection and order now!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Products
            </Link>
            <Link
              to="/gallery"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
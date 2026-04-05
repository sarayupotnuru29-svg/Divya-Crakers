import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const galleryCategories = ['All', 'Night Fireworks', 'Kids Crackers', 'Premium Shots', 'Sparklers'];

const galleryImages = [
  { id: 1, category: 'Night Fireworks', alt: 'Colorful night sky fireworks display', src: '/src/assets/gallery/fireworks-1.jpg' },
  { id: 2, category: 'Night Fireworks', alt: 'Spectacular burst of colors', src: '/src/assets/gallery/fireworks-2.jpg' },
  { id: 3, category: 'Kids Crackers', alt: 'Safe kids crackers collection', src: '/src/assets/gallery/kids-1.jpg' },
  { id: 4, category: 'Premium Shots', alt: '120 shots multicolor display', src: '/src/assets/gallery/shots-1.jpg' },
  { id: 5, category: 'Night Fireworks', alt: 'Golden shower fountain', src: '/src/assets/gallery/fireworks-3.jpg' },
  { id: 6, category: 'Sparklers', alt: 'Electric sparklers collection', src: '/src/assets/gallery/sparklers-1.jpg' },
  { id: 7, category: 'Premium Shots', alt: 'Aerial fancy fireworks', src: '/src/assets/gallery/shots-2.jpg' },
  { id: 8, category: 'Night Fireworks', alt: 'Blue and red burst patterns', src: '/src/assets/gallery/fireworks-4.jpg' },
  { id: 9, category: 'Kids Crackers', alt: 'Safe pencils and sparklers', src: '/src/assets/gallery/kids-2.jpg' },
  { id: 10, category: 'Premium Shots', alt: '240 multicolor shots', src: '/src/assets/gallery/shots-3.jpg' },
  { id: 11, category: 'Night Fireworks', alt: 'Peacock feather pattern', src: '/src/assets/gallery/fireworks-5.jpg' },
  { id: 12, category: 'Sparklers', alt: 'Golden sparklers display', src: '/src/assets/gallery/sparklers-2.jpg' },
  { id: 13, category: 'Premium Shots', alt: 'Premium fancy collection', src: '/src/assets/gallery/shots-4.jpg' },
  { id: 14, category: 'Night Fireworks', alt: 'Rainbow color display', src: '/src/assets/gallery/fireworks-6.jpg' },
  { id: 15, category: 'Kids Crackers', alt: 'Flower pots collection', src: '/src/assets/gallery/kids-3.jpg' },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Our <span className="text-red-500">Gallery</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Experience the magic through our collection of stunning fireworks displays
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {galleryCategories.map((category) => (
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

      <Masonry columnsCount={3} gutter="1rem" className="masonry-grid">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
                  {image.category}
                </p>
                <p className="text-sm">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <p className="text-lg font-semibold text-yellow-400">
                {selectedImage.category}
              </p>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .masonry-grid {
            column-count: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}

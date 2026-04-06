import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../../assets/logo.png'; // Importing the logo for better build-tool compatibility

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Image Replacement */}
              <img 
                src={logo} 
                alt="Divya Crackers Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="font-bold text-xl">Divya Crackers</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Trusted Fireworks Dealer Since 2005
            </p>
            <p className="text-gray-400 text-sm">
              Celebrate every moment with quality fireworks and crackers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Sound Crackers</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Fancy Fireworks</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Flower Pots</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Rockets</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Kids Special</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Shop</Link></li>
              <li><Link to="/gallery" className="hover:text-red-500 transition-colors">Gallery</Link></li>
              <li><Link to="/cart" className="hover:text-red-500 transition-colors">Cart</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>9894354432</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>jkenterprises_hsr@yahoo.co.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>74/A, 27/1, Bagalur Road, Next to GoColors, Hosur - 635109</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>9:00 AM – 9:00 PM (Open all 365 days)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Divya Crackers. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/divyacrackers2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/divyacrackers2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
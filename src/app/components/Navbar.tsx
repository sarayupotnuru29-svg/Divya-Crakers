// import { Link, useLocation } from 'react-router';
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import logo from '../../assets/logo.png';

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const { getCartCount } = useCart();

//   // Updated array: "Gallery" removed, "About" added
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Products', path: '/products' },
//     { name: 'About', path: '/about' },
//     { name: 'Cart', path: '/cart' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Divya Crackers Logo" className="w-10 h-10 object-contain" />
//             <span className="font-bold text-xl text-gray-800">Divya Crackers</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`transition-colors relative flex items-center gap-1 ${
//                   isActive(link.path)
//                     ? 'text-red-500 font-semibold'
//                     : 'text-gray-700 hover:text-red-500'
//                 }`}
//               >
//                 {link.name === 'Cart' && <ShoppingCart size={18} />}
//                 {link.name}
//                 {link.name === 'Cart' && getCartCount() > 0 && (
//                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                     {getCartCount()}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-gray-700"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`flex items-center py-2 transition-colors ${
//                   isActive(link.path)
//                     ? 'text-red-500 font-semibold'
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {link.name === 'Cart' && <ShoppingCart size={18} className="mr-2" />}
//                 {link.name}
//                 {link.name === 'Cart' && getCartCount() > 0 && (
//                   <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                     {getCartCount()}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import logo from '../../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Cart', path: '/cart' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span className="font-bold text-lg md:text-xl text-gray-800">Divya Crackers</span>
          </Link>

          {/* 2. Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative flex items-center gap-1 ${
                  isActive(link.path)
                    ? 'text-red-500 font-semibold'
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                {link.name === 'Cart' && <ShoppingCart size={18} />}
                {link.name}
                {link.name === 'Cart' && getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* 3. Mobile Actions (Cart + Menu Button) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Direct Cart Access on Mobile Navbar */}
            <Link 
              to="/cart" 
              className={`relative p-2 rounded-full ${isActive('/cart') ? 'text-red-500' : 'text-gray-700'}`}
              aria-label="View Cart"
            >
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute left-0 right-0 shadow-lg">
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center p-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-red-500 font-semibold bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name === 'Cart' && <ShoppingCart size={20} className="mr-3" />}
                  <span className="text-base">{link.name}</span>
                  {link.name === 'Cart' && getCartCount() > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
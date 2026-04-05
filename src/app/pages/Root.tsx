import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton, ScrollToTop } from '../components/FloatingButtons';
import { CartProvider } from '../context/CartContext';

export function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </CartProvider>
  );
}

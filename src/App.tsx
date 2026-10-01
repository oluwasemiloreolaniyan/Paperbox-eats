import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MENU_ITEMS } from './data/menu';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('paperbox_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('paperbox_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  // Section observer for updating active nav state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'order', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((ci) =>
        ci.item.id === itemId ? { ...ci, quantity: newQty } : ci
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const cartSubtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const cartItemCounts = cart.reduce<Record<string, number>>((acc, ci) => {
    acc[ci.item.id] = ci.quantity;
    return acc;
  }, {});

  const scrollToMenu = () => {
    const menuEl = document.getElementById('order');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturedItem = (itemId: string) => {
    scrollToMenu();
    // Also if not in cart, add it or highlight
    const found = MENU_ITEMS.find((m) => m.id === itemId);
    if (found) {
      handleAddToCart(found);
      setIsCartOpen(true);
    }
  };

  const handleNavClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F5F5] font-sans flex flex-col selection:bg-[#D90429] selection:text-white">
      {/* Sticky responsive Navbar */}
      <Navbar
        cartCount={totalCartCount}
        cartTotal={cartSubtotal}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with requested headlines, CTAs, and food showcase */}
        <Hero
          onOrderClick={scrollToMenu}
          onSelectFeaturedItem={handleSelectFeaturedItem}
        />

        {/* Menu & Order Section with categorization and cart integration */}
        <MenuSection
          items={MENU_ITEMS}
          cartItemCounts={cartItemCounts}
          onAddToCart={handleAddToCart}
          onUpdateCartQty={handleUpdateQuantity}
          onOpenCart={() => setIsCartOpen(true)}
          cartTotalCount={totalCartCount}
        />

        {/* About Section with brand story and food quality pillars */}
        <AboutSection />

        {/* Customer Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section with prominent WhatsApp action, phone, hours, and location */}
        <ContactSection />
      </main>

      {/* Footer with copyright, navigation, hours, and social media */}
      <Footer onNavClick={handleNavClick} />

      {/* Cart Drawer for reviewing order and triggering WhatsApp checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Persistent floating WhatsApp button for one-touch ordering anywhere on the page */}
      <WhatsAppFloatingButton />
    </div>
  );
}

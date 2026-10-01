import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, MessageCircle, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurant';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Order', href: '#order' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3'
          : 'bg-gradient-to-b from-[#111111]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 
            LOGO PLACEHOLDER AREA:
            Clearly defined placeholder for the actual Paperbox Eats brand logo.
            When an official image file is ready (e.g. /logo.svg or /logo.png),
            simply replace the placeholder container with <img src="/logo.svg" alt="Paperbox Eats" className="h-10 w-auto" />
          */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] rounded-lg transition-transform hover:scale-[1.02]"
            aria-label="Paperbox Eats - Return to Home"
          >
            {/* The Logo Placeholder Box */}
            <div className="relative flex items-center justify-center border-2 border-dashed border-[#D90429]/70 hover:border-[#D90429] bg-[#1a1a1a] hover:bg-[#222222] px-3.5 py-2 rounded-lg transition-colors shadow-inner">
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse"></span>
                [ PAPERBOX EATS LOGO ]
              </span>
            </div>
            
            <div className="hidden lg:block text-left">
              <span className="block text-sm font-bold tracking-tight text-white uppercase group-hover:text-[#D90429] transition-colors">
                Paperbox Eats
              </span>
              <span className="block text-[10px] text-neutral-400 font-medium tracking-wider uppercase">
                Smoky Grills & Kitchen
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#D90429] font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D90429] rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: WhatsApp quick-chat & Cart Drawer trigger */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Chat CTA (Desktop) */}
            <a
              href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to check your menu and place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#1E1E1E] hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp:</span>
              <span className="font-mono text-neutral-300">{RESTAURANT_INFO.displayPhone}</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 py-2 bg-[#D90429] hover:bg-[#b50322] active:scale-95 text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#D90429]/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 ? (
                <span className="bg-white text-[#D90429] text-xs font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center shadow">
                  {cartCount}
                </span>
              ) : (
                <span className="text-white/80 text-xs">(0)</span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#D90429]/15 text-[#D90429] font-bold border-l-4 border-[#D90429]'
                      : 'text-neutral-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  <span className="text-xs text-neutral-500">→</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold rounded-lg text-sm transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              Chat on WhatsApp ({RESTAURANT_INFO.displayPhone})
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-neutral-300 font-medium rounded-lg text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-400" />
              Call To Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

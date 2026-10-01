import React from 'react';
import { MessageCircle, Phone, MapPin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO, WHATSAPP_NUMBER } from '../config/restaurant';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0c0c] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Logo Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* The Logo Placeholder Box */}
            <div className="inline-flex items-center gap-2 border-2 border-dashed border-[#D90429]/60 bg-[#161616] px-3.5 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse"></span>
              <span className="text-xs font-mono tracking-wider text-white font-bold">
                [ PAPERBOX EATS LOGO ]
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Paperbox Eats</h3>
              <p className="text-xs font-medium text-[#D90429] uppercase tracking-wider mt-0.5">
                {RESTAURANT_INFO.subTagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Authentic smoky Nigerian meals, al dente asun pasta, slow-charred prime grills, and decadent milkshakes delivered straight to your door.
            </p>

            {/* Direct WhatsApp Pill CTA */}
            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-extrabold text-xs rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Chat with Kitchen on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => onNavClick('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#order')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Order Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Opening Hours</h4>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <div>
                <span className="block text-neutral-500 text-xs">Monday – Saturday</span>
                <span className="font-semibold text-white">10:00 AM – 9:00 PM</span>
              </div>
              <div>
                <span className="block text-neutral-500 text-xs">Sunday</span>
                <span className="font-semibold text-white">12:00 PM – 8:00 PM</span>
              </div>
              <p className="text-[11px] text-neutral-500 pt-1">
                Kitchen closes 30 minutes before final closing time.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">Contact & Location</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D90429] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-mono text-white font-semibold">+{WHATSAPP_NUMBER}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-white/5 hover:bg-[#D90429] text-white rounded transition-colors"
              >
                Instagram
              </a>
              <a
                href={RESTAURANT_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-white/5 hover:bg-[#D90429] text-white rounded transition-colors"
              >
                TikTok
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-white/5 hover:bg-[#D90429] text-white rounded transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Paperbox Eats. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500 flex items-center gap-1">
              Cooked with <Heart className="w-3.5 h-3.5 text-[#D90429] fill-[#D90429]" /> in Lagos, Nigeria
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

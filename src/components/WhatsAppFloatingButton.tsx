import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurant';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="relative mb-3 bg-[#1e1e1e] text-white border border-white/10 rounded-2xl p-3 shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white p-0.5 rounded"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#25D366] uppercase tracking-wider">
              We're Online!
            </span>
          </div>
          <p className="text-xs text-neutral-200 pr-4">
            Craving something hot & spicy? Order directly on WhatsApp for lightning dispatch!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to place an order.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-extrabold px-4 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat and Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-black text-black shrink-0" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-black">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

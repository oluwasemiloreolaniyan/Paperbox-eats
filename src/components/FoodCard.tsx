import React, { useState } from 'react';
import { Plus, Minus, Check, MessageCircle, Flame, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { formatNaira, generateSingleItemOrderUrl } from '../utils/whatsapp';

interface FoodCardProps {
  item: MenuItem;
  currentCartQty: number;
  onAddToCart: (item: MenuItem) => void;
  onUpdateCartQty: (itemId: string, newQty: number) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  currentCartQty,
  onAddToCart,
  onUpdateCartQty,
}) => {
  const [imageError, setImageError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const triggerAddFeedback = () => {
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  const handleAdd = () => {
    onAddToCart(item);
    triggerAddFeedback();
  };

  const handleIncreaseQty = () => {
    onUpdateCartQty(item.id, currentCartQty + 1);
    triggerAddFeedback();
  };

  return (
    <article className={`group relative bg-[#181818] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between ${
      justAdded ? 'border-[#D90429] ring-2 ring-[#D90429]/40' : 'border-white/5 hover:border-[#D90429]/40'
    }`}>
      <div>
        {/* Image Container with smooth hover zoom & add-to-cart flash/scale effect */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#222222] cursor-pointer">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              className={`w-full h-full object-cover object-center will-change-transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-105 ${
                justAdded ? 'scale-110 brightness-115' : ''
              }`}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            // High-contrast Brand Placeholder for Food item
            <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#222] to-[#151515] text-center border-b border-white/5 transition-transform duration-500 ${
              justAdded ? 'scale-105' : 'group-hover:scale-105'
            }`}>
              <span className="text-[10px] font-mono tracking-wider text-[#D90429] uppercase font-bold border border-[#D90429]/40 px-2 py-1 rounded mb-2">
                [ {item.name.toUpperCase()} IMAGE ]
              </span>
              <span className="text-xs text-neutral-400 font-medium">{item.category}</span>
            </div>
          )}

          {/* Flash overlay when added to cart */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-[#D90429]/30 via-white/25 to-transparent ${
              justAdded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30 pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center pointer-events-none">
            {item.badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D90429] text-white px-2 py-0.5 rounded shadow">
                {item.badge}
              </span>
            )}
            {item.isSpicy && (
              <span className="text-[10px] font-semibold bg-black/80 backdrop-blur-sm text-orange-400 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                <Flame className="w-3 h-3 fill-orange-400" /> Spicy
              </span>
            )}
          </div>

          {/* Added visual badge indicator on image */}
          {justAdded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-in zoom-in-75 duration-200">
              <span className="bg-[#111111]/90 text-white font-extrabold text-xs px-3 py-1.5 rounded-full border border-[#D90429] shadow-xl flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#D90429]" /> Added to Box
              </span>
            </div>
          )}

          {/* Prep time */}
          {item.prepTime && (
            <span className="absolute top-3 right-3 text-[10px] font-medium bg-black/70 backdrop-blur-sm text-neutral-300 px-2 py-0.5 rounded border border-white/10">
              {item.prepTime}
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#D90429] transition-colors leading-snug">
              {item.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-4">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer / Pricing & Actions */}
      <div className="p-4 sm:p-5 pt-0 mt-auto">
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">Price</span>
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {formatNaira(item.price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick 1-click WhatsApp order link */}
            <a
              href={generateSingleItemOrderUrl(item, 1)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#222222] hover:bg-[#25D366]/20 text-neutral-300 hover:text-[#25D366] border border-white/10 hover:border-[#25D366]/40 transition-colors"
              title="Order this meal immediately on WhatsApp"
              aria-label={`Order ${item.name} directly on WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Cart Button or Stepper */}
            {currentCartQty > 0 ? (
              <div className="flex items-center bg-[#242424] border border-white/10 rounded-xl p-1 gap-2">
                <button
                  onClick={() => onUpdateCartQty(item.id, currentCartQty - 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-white min-w-5 text-center">
                  {currentCartQty}
                </span>
                <button
                  onClick={handleIncreaseQty}
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#D90429] hover:bg-[#b50322] text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAdd}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer ${
                  justAdded
                    ? 'bg-[#D90429] text-white shadow-lg shadow-[#D90429]/40 scale-105'
                    : 'bg-[#D90429] hover:bg-[#b50322] text-white shadow-[#D90429]/20'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Now</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

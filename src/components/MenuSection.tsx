import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, ShoppingBag, Utensils } from 'lucide-react';
import { CATEGORIES } from '../data/menu';
import { Category, MenuItem } from '../types';
import { FoodCard } from './FoodCard';

interface MenuSectionProps {
  items: MenuItem[];
  cartItemCounts: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onUpdateCartQty: (itemId: string, newQty: number) => void;
  onOpenCart: () => void;
  cartTotalCount: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  cartItemCounts,
  onAddToCart,
  onUpdateCartQty,
  onOpenCart,
  cartTotalCount,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <section id="order" className="py-16 md:py-24 bg-[#141414] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D90429] flex items-center gap-1.5 mb-2">
              <Utensils className="w-3.5 h-3.5" /> Order Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Crave-Worthy Menu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
              Freshly prepped Nigerian meals, peppered grills, and signature treats. Add to your box and order directly on WhatsApp.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jollof, turkey, suya..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D90429] text-white shadow-lg shadow-[#D90429]/25 scale-[1.02]'
                    : 'bg-[#1e1e1e] text-neutral-300 hover:text-white hover:bg-[#252525] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                currentCartQty={cartItemCounts[item.id] || 0}
                onAddToCart={onAddToCart}
                onUpdateCartQty={onUpdateCartQty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#181818] rounded-2xl border border-white/5">
            <Utensils className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No items found</h3>
            <p className="text-sm text-neutral-400 mb-4">
              We couldn't find any dishes matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Sticky floating bottom cart bar if customer has items in cart */}
        {cartTotalCount > 0 && (
          <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-30 animate-in slide-in-from-bottom-6">
            <button
              onClick={onOpenCart}
              className="w-full bg-[#D90429] hover:bg-[#b50322] text-white p-4 rounded-2xl shadow-2xl shadow-black/80 flex items-center justify-between border border-white/20 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-white/80 block">Your Box</span>
                  <span className="text-sm font-bold text-white">
                    {cartTotalCount} {cartTotalCount === 1 ? 'item' : 'items'} ready
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold bg-white text-[#D90429] px-3.5 py-2 rounded-xl">
                View & Checkout →
              </span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

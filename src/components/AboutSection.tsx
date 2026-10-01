import React from 'react';
import { Sparkles, Heart, CheckCircle2, Flame, UtensilsCrossed, PackageCheck, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurant';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D90429]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D90429] flex items-center justify-center gap-1.5 mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#D90429]" /> Our Story & Mission
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Good Food. Great Moments.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Paperbox Eats is a food brand focused on serving delicious, satisfying meals prepared with quality ingredients and bold flavours. From smoky jollof rice and asun pasta to shawarma, suya, grilled turkey and refreshing milkshakes, we bring a variety of crave-worthy meals to your table.
          </p>
        </div>

        {/* Brand Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Visual Food Story Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 group shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
                  alt="Paperbox Eats smoky firewood cooking"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                  Firewood Smoky Aroma
                </span>
              </div>
              <div className="bg-[#1c1c1c] border border-white/5 p-5 rounded-2xl">
                <div className="text-2xl font-black text-[#D90429] mb-1">100%</div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider">Natural Spices</div>
                <p className="text-[11px] text-neutral-400 mt-1">Zero artificial fillers — only traditional scotch bonnets, yaji, and aromatic herbs.</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#1c1c1c] border border-white/5 p-5 rounded-2xl">
                <div className="text-2xl font-black text-white mb-1">15–25m</div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider">Fast Turnaround</div>
                <p className="text-[11px] text-neutral-400 mt-1">Cooked fresh to order and dispatched in thermal-insulated boxes.</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 group shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
                  alt="Paperbox Eats signature grills and suya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                  Prime Charcoal Grills
                </span>
              </div>
            </div>
          </div>

          {/* Brand Copy & Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D90429]" /> The Paperbox Standard
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              We started with one obsession: Real, uncompromised flavor in every single box.
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              In a world of rushed takeout and soggy food boxes, Paperbox Eats was founded on a simple promise: deliver meals that taste just as smoky, juicy, and soul-satisfying at home or at your desk as they do straight out of a Lagos kitchen.
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Every pot of smoky jollof rice is stirred with passion over woodfire flames. Every portion of tender goat meat for our Asun Pasta is marinated overnight. And our beef suya is char-grilled by pitmasters who respect the Northern yaji craft.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Daily Fresh Ingredients</h4>
                  <p className="text-xs text-neutral-400">Locally sourced farm produce, prime poultry, and premium goat meat delivered daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Food Quality Guaranteed</h4>
                  <p className="text-xs text-neutral-400">Strict hygiene protocols and tamper-evident packaging protect your meal from our kitchen to your doorstep.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Customer Satisfaction First</h4>
                  <p className="text-xs text-neutral-400">Direct WhatsApp support and responsive kitchen team ready to accommodate dietary notes.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars: Food Quality, Packaging, Customer Satisfaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Woodfire & Charcoal Heat</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              We never take shortcuts with liquid smoke. Our grills and rice get their flavor the honest way — over searing charcoal embers and woodfire coals.
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-4">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Tamper-Proof Paperbox</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Custom breathable, grease-proof paper packaging keeps fried plantains crispy, pasta piping hot, and drinks ice-cold during transit.
            </p>
          </div>

          <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Satisfaction</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              If your meal doesn't blow you away, we make it right immediately. Our kitchen line is always open directly to you via WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

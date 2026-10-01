import React from 'react';
import { MessageCircle, ArrowRight, Flame, Sparkles, Clock, ShieldCheck, Truck } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface HeroProps {
  onOrderClick: () => void;
  onSelectFeaturedItem: (itemId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onSelectFeaturedItem }) => {
  // The 6 exact dishes requested for the hero showcase
  const heroDishes = [
    {
      id: 'smoky-jollof-rice',
      name: 'Smoky Jollof Rice',
      caption: 'Firewood smoked with fried sweet plantains',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      price: '₦4,500',
      tag: 'Iconic',
    },
    {
      id: 'asun-pasta',
      name: 'Asun Pasta',
      caption: 'Spicy flame-tossed goat meat & penne',
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281084?auto=format&fit=crop&w=800&q=80',
      price: '₦5,800',
      tag: 'Chef Special',
    },
    {
      id: 'special-shawarma',
      name: 'Shawarma',
      caption: 'Loaded double sausage with spiced meats',
      image: 'https://images.unsplash.com/photo-1644781498668-cb0a9ba4a2ff?auto=format&fit=crop&w=800&q=80',
      price: '₦4,200',
      tag: 'Popular',
    },
    {
      id: 'grilled-turkey',
      name: 'Grilled Turkey',
      caption: 'Succulent jumbo wings in spicy pepper glaze',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
      price: '₦5,500',
      tag: 'Smoky BBQ',
    },
    {
      id: 'beef-suya',
      name: 'Suya Platter',
      caption: 'Charcoal grilled beef in Northern Yaji pepper',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      price: '₦4,000',
      tag: 'Charcoal Grilled',
    },
    {
      id: 'oreo-milkshake',
      name: 'Milkshakes',
      caption: 'Rich artisan Oreo & strawberry thick shakes',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
      price: '₦3,500',
      tag: 'Chilled Sweet',
    },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle red glow background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D90429]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#D90429]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D90429]/15 border border-[#D90429]/30 text-[#D90429] text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-3.5 h-3.5 fill-[#D90429]" />
            <span>Authentic Nigerian Flavors & Takeaway</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Taste the Difference.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D90429] via-[#ff3b5c] to-white">
              Feel the Flavor.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Deliciously prepared meals, smoky grills, refreshing drinks, and everything you need to satisfy your cravings.
          </p>

          {/* Two prominent CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D90429] hover:bg-[#b50322] active:scale-95 text-white font-bold text-base rounded-xl shadow-xl shadow-[#D90429]/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to place an order from your menu.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-black font-bold text-base rounded-xl shadow-xl shadow-[#25D366]/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick trust highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-neutral-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D90429]" /> Ready in 15–25 mins
            </span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D90429]" /> Sealed Tamper-Proof Boxes
            </span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#D90429]" /> Island & Mainland Delivery
            </span>
          </div>
        </div>

        {/* 
          HERO DISH SHOWCASE GRID:
          Clearly showcases the 6 requested items:
          1. Smoky Jollof Rice
          2. Asun Pasta
          3. Shawarma
          4. Grilled Turkey
          5. Suya
          6. Milkshakes
        */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#D90429]">Crave-Worthy Highlights</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Our Signature Specialties</h2>
            </div>
            <button
              onClick={onOrderClick}
              className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              Explore Full Menu <ArrowRight className="w-3.5 h-3.5 text-[#D90429]" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {heroDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => onSelectFeaturedItem(dish.id)}
                className="group relative bg-[#181818] hover:bg-[#202020] border border-white/5 hover:border-[#D90429]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col"
              >
                {/* Food Image with graceful fallback */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Graceful fallback to styled food placeholder card
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Tag */}
                  <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-sm text-neutral-200 px-2 py-0.5 rounded border border-white/10">
                    {dish.tag}
                  </span>

                  <span className="absolute bottom-2 right-2 text-xs font-extrabold text-white bg-[#D90429] px-2 py-0.5 rounded">
                    {dish.price}
                  </span>
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#D90429] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1 leading-normal">
                      {dish.caption}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#D90429]">
                    <span>Order Now</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Short introduction section below hero explaining what makes Paperbox Eats special */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#141414] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#D90429]/5 rounded-r-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D90429] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> What Sets Us Apart
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Crafted for Food Lovers Who Crave Real Flavor.
              </h2>
              <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                At Paperbox Eats, we believe great takeout is an art form. We combine traditional firewood smoke, freshly butchered premium meats, and hand-ground Nigerian peppers in durable, heat-retaining paper packaging designed to keep your feast hot and crispy.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#111111]/80 border border-white/5 p-4 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Authentic Smoky Aroma</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Real firewood pot charring that gives our Jollof and Grills that signature Lagos party taste.
                </p>
              </div>

              <div className="bg-[#111111]/80 border border-white/5 p-4 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Sealed Paperbox</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Eco-friendly, grease-resistant, tamper-evident boxes that preserve food temperature and texture.
                </p>
              </div>

              <div className="bg-[#111111]/80 border border-white/5 p-4 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Direct WhatsApp Order</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  No app download required. Choose your meal, click checkout, and chat directly with our kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Star, Quote, MessageCircle, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarInitials: string;
  favoriteDish: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Babajide O.',
    location: 'Lekki Phase 1, Lagos',
    avatarInitials: 'BO',
    favoriteDish: 'Smoky Jollof Rice & Grilled Turkey',
    quote:
      'The smoky jollof rice actually has that authentic firewood party aroma! The packaging arrived piping hot and completely tamper-proof. Paperbox Eats is officially my weekend go-to.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Amara N.',
    location: 'Victoria Island, Lagos',
    avatarInitials: 'AN',
    favoriteDish: 'Asun Pasta & Oreo Shake',
    quote:
      'Their Asun Pasta is on another level. Perfect balance of scotch bonnet heat, sweet peppers, and tender goat meat. Ordering directly on WhatsApp took less than 30 seconds!',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Tolu K.',
    location: 'Ikoyi, Lagos',
    avatarInitials: 'TK',
    favoriteDish: 'Beef Suya Platter & Shawarma',
    quote:
      'Best suya platter and loaded shawarma in town. The yaji spice blend is authentic and the beef is tender, never chewy. You can taste the quality and flame-grill difference right away.',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0e0e0e] relative border-t border-white/5 overflow-hidden">
      {/* Subtle ambient red spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D90429]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D90429]/15 border border-[#D90429]/30 text-[#D90429] text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#D90429]" />
            <span>Customer Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by Foodies Across Lagos
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Real feedback from hungry customers who tasted the difference and felt the flavor.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative bg-[#161616] hover:bg-[#1a1a1a] border border-white/5 hover:border-[#D90429]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D90429] text-[#D90429]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-600 group-hover:text-[#D90429] transition-colors" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info & Verified Details */}
              <div className="pt-5 border-t border-white/5">
                <div className="flex items-center gap-3">
                  {/* Monogram Avatar with Brand Styling */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#161616] border border-white/10 group-hover:border-[#D90429]/50 flex items-center justify-center text-white font-extrabold text-xs tracking-wider transition-colors shrink-0">
                    {t.avatarInitials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white truncate">
                        {t.name}
                      </h4>
                      <span title="Verified Customer" className="inline-flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Favorite Dish Metadata */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <span className="text-[#D90429] font-semibold">Ordered:</span>
                  <span className="truncate text-neutral-300 font-medium">{t.favoriteDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar below testimonials */}
        <div className="rounded-2xl bg-gradient-to-r from-[#181818] via-[#202020] to-[#181818] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ready to create your own great moment?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Order your custom Paperbox on WhatsApp and have it delivered fast and fresh.
            </p>
          </div>

          <a
            href={buildWhatsAppLink("Hello Paperbox Eats! I read your customer reviews and I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D90429] hover:bg-[#b50322] active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-[#D90429]/30 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Join Our Happy Customers</span>
          </a>
        </div>

      </div>
    </section>
  );
};

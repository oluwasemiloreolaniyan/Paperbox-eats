import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Instagram, Send, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, WHATSAPP_NUMBER } from '../config/restaurant';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryType, setInquiryType] = useState('Order Question');
  const [inquiryMsg, setInquiryMsg] = useState('');

  const handleSendCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Paperbox Eats!\n\n`;
    if (inquiryName.trim()) {
      text += `My Name: ${inquiryName.trim()}\n`;
    }
    text += `Topic: ${inquiryType}\n`;
    if (inquiryMsg.trim()) {
      text += `Message: ${inquiryMsg.trim()}\n`;
    } else {
      text += `I'd like to make an inquiry regarding your menu and delivery services.\n`;
    }
    const url = buildWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#141414] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D90429] flex items-center justify-center gap-1.5 mb-2">
            <MessageCircle className="w-3.5 h-3.5 fill-[#D90429]" /> Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Feast? Chat With Us.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Have questions about an order, catering, or bulk deliveries? Reach out to Paperbox Eats via WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Primary Contact Details & Big WhatsApp Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 
              LARGE "ORDER ON WHATSAPP" BUTTON (High Priority Requirement)
              Immediately opens WhatsApp using the configured Paperbox Eats WhatsApp number.
            */}
            <div className="bg-gradient-to-r from-[#1c1c1c] via-[#222222] to-[#1c1c1c] border-2 border-[#25D366]/40 hover:border-[#25D366] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/60 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-md mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span> Primary Ordering Channel
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Order Directly on WhatsApp</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                    Fastest way to order. Browse our menu or message our kitchen team directly.
                  </p>
                </div>
              </div>

              <a
                href={buildWhatsAppLink("Hello Paperbox Eats! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-extrabold text-base rounded-xl shadow-xl shadow-[#25D366]/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-black text-black" />
                <span>Order on WhatsApp Now</span>
                <ExternalLink className="w-4 h-4 text-black/70" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
                <span>Direct WhatsApp Line:</span>
                <span className="text-white font-bold">+{WHATSAPP_NUMBER}</span>
              </div>
            </div>

            {/* Contact Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-1">Phone Order Line</h4>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-base font-bold text-white hover:text-[#D90429] transition-colors block"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <span className="text-[11px] text-neutral-500 mt-1 block">For calls and immediate inquiries</span>
              </div>

              {/* Location Card */}
              <div className="bg-[#181818] border border-white/5 p-5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-[#D90429]/20 flex items-center justify-center text-[#D90429] mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-1">Kitchen & Takeaway</h4>
                <address className="not-italic text-sm font-semibold text-white leading-snug">
                  {RESTAURANT_INFO.location}
                </address>
                <span className="text-[11px] text-neutral-500 mt-1 block">Dispatching across Lagos</span>
              </div>

            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#181818] border border-white/5 p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Opening Hours</h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-sm">
                  <span className="text-neutral-300 font-medium">Monday – Saturday</span>
                  <span className="text-white font-bold bg-white/5 px-2.5 py-1 rounded font-mono text-xs">
                    10:00 AM – 9:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-300 font-medium">Sunday</span>
                  <span className="text-white font-bold bg-white/5 px-2.5 py-1 rounded font-mono text-xs">
                    12:00 PM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#181818] border border-white/5 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400">Follow Our Kitchen</h4>
                <p className="text-xs text-neutral-300 mt-0.5">Catch daily specials and behind-the-scenes grills</p>
              </div>

              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-[#D90429] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                {/* TikTok */}
                <a
                  href={RESTAURANT_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-[#D90429] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>TikTok</span>
                </a>

                {/* Facebook */}
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-[#D90429] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Custom WhatsApp Inquiry / Catering Form */}
          <div className="lg:col-span-5 bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Send a Quick Message</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Need catering for an event or party packs of jollof rice and grills? Type your details and open directly in WhatsApp.
            </p>

            <form onSubmit={handleSendCustomInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chioma Okafor"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D90429]"
                >
                  <option value="Order Question">Order Question</option>
                  <option value="Catering & Party Jollof Orders">Catering & Party Jollof Orders</option>
                  <option value="Delivery Area Coverage">Delivery Area Coverage</option>
                  <option value="Corporate Meal Packages">Corporate Meal Packages</option>
                  <option value="Dietary & Special Notes">Dietary & Special Notes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you'd like to order or ask about..."
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#D90429] hover:bg-[#b50322] active:scale-95 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#D90429]/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-neutral-500">
                You will be connected instantly to a Paperbox team member.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

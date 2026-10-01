import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, User, Phone, FileText, ArrowRight } from 'lucide-react';
import { CartItem, OrderCustomerDetails, OrderType } from '../types';
import { RESTAURANT_INFO } from '../config/restaurant';
import { formatNaira, generateCartOrderUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customer, setCustomer] = useState<OrderCustomerDetails>({
    name: '',
    phone: '',
    address: '',
    notes: '',
    orderType: 'delivery',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );
  const packagingFee = cartItems.length > 0 ? RESTAURANT_INFO.packagingFee : 0;
  const total = subtotal + packagingFee;

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;
    const whatsappUrl = generateCartOrderUrl(
      cartItems,
      customer,
      subtotal,
      packagingFee,
      total
    );
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside className="w-screen max-w-md bg-[#161616] text-white border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#111111]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D90429]/20 flex items-center justify-center text-[#D90429]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Paperbox</h3>
                <p className="text-xs text-neutral-400">
                  {cartItems.length} {cartItems.length === 1 ? 'dish' : 'dishes'} in order
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-neutral-400 hover:text-red-400 px-2 py-1 rounded transition-colors"
                  title="Clear all items"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Contents Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Your Paperbox is empty</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto mb-6">
                  Add delicious smoky jollof, tender grilled turkey, suya, or drinks to get started.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#D90429] hover:bg-[#b50322] text-white text-xs font-bold rounded-xl transition-all"
                >
                  Browse Menu Now
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Selected Meals
                  </span>

                  {cartItems.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="bg-[#1e1e1e] border border-white/5 rounded-xl p-3 flex gap-3 items-center justify-between"
                    >
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        className="w-14 h-14 rounded-lg object-cover bg-neutral-800 shrink-0"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />

                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="text-sm font-bold text-white truncate">
                          {ci.item.name}
                        </h4>
                        <span className="text-xs font-bold text-[#D90429] block">
                          {formatNaira(ci.item.price * ci.quantity)}
                        </span>
                        <span className="text-[10px] text-neutral-500">
                          {formatNaira(ci.item.price)} each
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-[#141414] border border-white/5 rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, ci.quantity - 1)}
                          className="w-6 h-6 rounded flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 text-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-4 text-center">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, ci.quantity + 1)}
                          className="w-6 h-6 rounded flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white text-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(ci.item.id)}
                        className="p-1.5 text-neutral-500 hover:text-red-400 transition-colors shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery vs Pickup Selector */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Order Type
                  </span>
                  <div className="grid grid-cols-2 gap-2 bg-[#1e1e1e] p-1 rounded-xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, orderType: 'delivery' })}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                        customer.orderType === 'delivery'
                          ? 'bg-[#D90429] text-white shadow'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Delivery</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, orderType: 'pickup' })}
                      className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                        customer.orderType === 'pickup'
                          ? 'bg-[#D90429] text-white shadow'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Pickup</span>
                    </button>
                  </div>
                </div>

                {/* Optional Customer Details for the WhatsApp pre-fill */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Customer Info (For Quick Dispatch)
                  </span>

                  <div>
                    <label className="text-[11px] text-neutral-400 mb-1 flex items-center gap-1">
                      <User className="w-3 h-3 text-[#D90429]" /> Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tunde Adeyemi"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-neutral-400 mb-1 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-[#D90429]" /> Contact Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0801 234 5678"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429]"
                    />
                  </div>

                  {customer.orderType === 'delivery' && (
                    <div>
                      <label className="text-[11px] text-neutral-400 mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D90429]" /> Delivery Address / Landmark
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Admiralty Way, Lekki Phase 1, Apt 4B"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429] resize-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] text-neutral-400 mb-1 flex items-center gap-1">
                      <FileText className="w-3 h-3 text-[#D90429]" /> Notes / Spice Level
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Extra spicy, no onions on the suya"
                      value={customer.notes}
                      onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                      className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D90429]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#111111] space-y-4">
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">{formatNaira(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco-Packaging & Box</span>
                  <span className="font-semibold text-white">{formatNaira(packagingFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="text-[#D90429] text-base">{formatNaira(total)}</span>
                </div>
              </div>

              {/* Primary WhatsApp Checkout CTA */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-black font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black text-black" />
                <span>Complete Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <p className="text-[11px] text-center text-neutral-400">
                Opens directly in WhatsApp with your full order pre-filled.
              </p>
            </div>
          )}

        </aside>
      </div>
    </div>
  );
};

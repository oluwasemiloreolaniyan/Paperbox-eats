import { WHATSAPP_NUMBER, RESTAURANT_INFO } from '../config/restaurant';
import { CartItem, MenuItem, OrderCustomerDetails } from '../types';

export function formatNaira(amount: number): string {
  return `${RESTAURANT_INFO.currencySymbol}${amount.toLocaleString('en-NG')}`;
}

/**
 * Creates a clean wa.me URL encoded for cross-platform compatibility
 */
export function buildWhatsAppLink(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates formatted order text for cart checkout
 */
export function generateCartOrderUrl(
  items: CartItem[],
  customer: OrderCustomerDetails,
  subtotal: number,
  packagingFee: number,
  total: number
): string {
  const itemsText = items
    .map((ci) => {
      const lineTotal = ci.item.price * ci.quantity;
      const note = ci.specialInstructions ? ` (${ci.specialInstructions})` : '';
      return `• ${ci.item.name} x${ci.quantity}${note} - ${formatNaira(lineTotal)}`;
    })
    .join('\n');

  const customerName = customer.name.trim() || 'Valued Customer';
  const orderTypeStr = customer.orderType === 'delivery' ? 'Delivery 🛵' : 'Pickup / Takeaway 🥡';

  let message = `Hello Paperbox Eats! I'd like to place an order:\n\n${itemsText}\n\n`;
  message += `───────────────────\n`;
  message += `Subtotal: ${formatNaira(subtotal)}\n`;
  if (packagingFee > 0) {
    message += `Packaging: ${formatNaira(packagingFee)}\n`;
  }
  message += `Total: ${formatNaira(total)}\n`;
  message += `───────────────────\n`;
  message += `Order Type: ${orderTypeStr}\n`;
  message += `Customer Name: ${customerName}\n`;
  if (customer.phone.trim()) {
    message += `Phone: ${customer.phone.trim()}\n`;
  }
  if (customer.orderType === 'delivery' && customer.address.trim()) {
    message += `Delivery Address: ${customer.address.trim()}\n`;
  }
  if (customer.notes.trim()) {
    message += `Special Instructions: ${customer.notes.trim()}\n`;
  }
  message += `\nPlease confirm my order and estimated preparation/delivery time!`;

  return buildWhatsAppLink(message);
}

/**
 * Direct 1-click single item order
 */
export function generateSingleItemOrderUrl(item: MenuItem, quantity: number = 1): string {
  const total = item.price * quantity;
  const message = `Hello Paperbox Eats! I'd like to order:\n\n• ${item.name} x${quantity} - ${formatNaira(total)}\n\nPlease let me know availability and delivery details!`;
  return buildWhatsAppLink(message);
}

/**
 * General customer enquiry chat
 */
export function generateGeneralChatUrl(inquiryType: string = 'General Inquiry'): string {
  let message = `Hello Paperbox Eats! I have an inquiry regarding: ${inquiryType}.\nCould you please assist me?`;
  return buildWhatsAppLink(message);
}

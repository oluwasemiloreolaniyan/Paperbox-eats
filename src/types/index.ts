export type Category = 'All' | 'Main Meals' | 'Grills' | 'Fast Food' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: 'Main Meals' | 'Grills' | 'Fast Food' | 'Drinks';
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  badge?: string;
  prepTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export type OrderType = 'delivery' | 'pickup';

export interface OrderCustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
  orderType: OrderType;
}

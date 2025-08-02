export interface Jersey {
  id: string;
  name: string;
  nameBangla: string;
  price: number;
  image: string;
  images: string[];
  sizes: string[];
  category: string;
  description: string;
  descriptionBangla: string;
  featured: boolean;
  inStock: boolean;
  createdAt: string;
}

export interface CartItem {
  jersey: Jersey;
  size: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  customerInfo: {
    name: string;
    phone: string;
    address: string;
  };
  createdAt: string;
}

export type Language = 'en' | 'bn';
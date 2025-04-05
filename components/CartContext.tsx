'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, MenuItem } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

const parsePrice = (priceString: string): number => {
  if (!priceString) return 0;
  const firstPrice = priceString.split('-')[0].trim();
  const numericString = firstPrice.replace(/[^0-9.]/g, '');
  const cleanString = numericString.replace(/\.+/g, (m) => m[0] || '');
  const price = parseFloat(cleanString);
  return isNaN(price) ? 0 : Math.max(0, price);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + (parsePrice(String(item.price)) * item.quantity);
  }, 0);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => [
      ...prev,
      { 
        ...item,
        id: uuidv4(), // Generate unique ID for cart entry
        quantity: 1 
      }
    ]);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems, 
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
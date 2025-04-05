'use client';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="container mx-auto px-4 py-8 bg-neutral-900 min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-8 text-white">Loading Cart...</h1>
      </div>
    );
  }

  function parsePrice(price: string | number): number {
    if (typeof price === 'number') {
      return price;
    }
    const parsed = parseFloat(price.replace(/[^\d.-]/g, ''));
    if (isNaN(parsed)) {
      throw new Error(`Invalid price format: ${price}`);
    }
    return parsed;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-neutral-900 min-h-screen min-w-full">
      <h1 className="text-3xl font-bold mb-8 text-white">Your Cart ({totalItems})</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Button 
            onClick={() => router.push('/menu')}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Browse Menu
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const price = parsePrice(item.price);
              const total = price * item.quantity;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg border border-neutral-700"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={`/images/${encodeURIComponent(item.image)}`}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-neutral-300 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-neutral-600 hover:bg-neutral-700"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value > 0) {
                              updateQuantity(item.id, value);
                            }
                          }}
                          className="w-16 text-center bg-neutral-700 text-white border-neutral-600"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-neutral-600 hover:bg-neutral-700"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      <p className="text-lg font-medium text-white">
                        ₹{total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary Section */}
          <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-neutral-300">
                <span>Subtotal ({totalItems} items)</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Delivery Fee</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-neutral-700 pt-4">
                <div className="flex justify-between font-bold text-white">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                size="lg"
                onClick={() => router.push('/checkout')}
              >
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full text-white border-neutral-600 hover:bg-neutral-700"
                onClick={() => {
                  clearCart();
                  toast.success('Cart cleared successfully');
                }}
              >
                Clear Cart
              </Button>
              <Button
                variant="ghost"
                className="w-full text-neutral-300 hover:bg-neutral-700"
                onClick={() => router.push('/menu')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
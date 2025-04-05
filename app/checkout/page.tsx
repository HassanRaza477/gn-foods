'use client';
import { useCart } from '@/components/CartContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, User, Mail, MapPin, Calendar, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

export default function CheckoutPage() {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
    cardNumber: '',
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        // Process the order (in a real app, you would call your API here)
        console.log('Order submitted:', { formData, cartItems });
        clearCart();
        resolve(true);
      }, 1500);
    });

    toast.promise(promise, {
      loading: 'Processing your order...',
      success: () => {
        // Redirect after successful order
        setTimeout(() => router.push('/'), 2000);
        return 'Order placed successfully!';
      },
      error: 'Failed to place order. Please try again.',
    });
  };

  return (
    <div className="min-h-screen w-full bg-neutral-900">
      <Toaster position="top-center" richColors />
      
      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">Checkout</h1>
        
        <div className="grid w-full md:grid-cols-3 gap-8">
          {/* Shipping and Payment Form */}
          <div className="md:col-span-2 w-full space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div className="w-full bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <User size={20} /> Shipping Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-neutral-300 mb-2">Full Name</label>
                    <div className="relative">
                      <Input
                        type="text"
                        required
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <User className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2">Email</label>
                    <div className="relative">
                      <Input
                        type="email"
                        required
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      <Mail className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2">Address</label>
                    <div className="relative">
                      <Input
                        type="text"
                        required
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                      <MapPin className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2">City</label>
                    <div className="relative">
                      <Input
                        type="text"
                        required
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                      <MapPin className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-2">Phone</label>
                    <div className="relative">
                      <Input
                        type="number"
                        required
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <MapPin className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="w-full bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <CreditCard size={20} /> Payment Details
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-neutral-300 mb-2">Card Number</label>
                    <div className="relative">
                      <Input
                        type="number"
                        required
                        pattern="\d{16}"
                        className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      />
                      <CreditCard className="absolute left-3 top-3 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 mb-2">Expiration Date</label>
                      <div className="relative">
                        <Input
                          type="text"
                          required
                          pattern="(0[1-9]|1[0-2])\/\d{2}"
                          className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                          placeholder="MM/YY"
                        />
                        <Calendar className="absolute left-3 top-3 text-neutral-400" size={18} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-300 mb-2">CVC</label>
                      <div className="relative">
                        <Input
                          type="text"
                          required
                          pattern="\d{3}"
                          className="w-full bg-neutral-700 border-neutral-600 text-white pl-10"
                          placeholder="123"
                        />
                        <Lock className="absolute left-3 top-3 text-neutral-400" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              >
                Confirm Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full bg-neutral-800 p-6 rounded-xl border border-neutral-700 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-neutral-300">
                <span>Items ({totalItems})</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-neutral-300">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              
              <div className="border-t border-neutral-700 pt-4">
                <div className="flex justify-between font-bold text-white">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-white">Order Items</h3>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-neutral-300">
                    <div className="flex items-center gap-3">
                      <span className="text-sm">{item.name}</span>
                      <span className="text-neutral-500">x{item.quantity}</span>
                    </div>
                    <span>₹{(parseFloat(String(item.price).split('-')[0].replace(/[^\d.]/g, '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
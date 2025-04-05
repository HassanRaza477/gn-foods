// 'use client'

// import { useState } from 'react';
// import { useCart } from '@/components/CartContext';
// import { client } from '@/sanity/lib/client';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUser,
//   faEnvelope,
//   faMobileAlt,
//   faMapMarkerAlt,
//   faCity,
//   faMailBulk,
//   faReceipt
// } from '@fortawesome/free-solid-svg-icons';
// import { urlFor } from '@/sanity/lib/image';

// const CheckoutPage = () => {
//   const { cartItems, totalPrice, clearCart } = useCart();
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     customerName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     zipCode: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const order = {
//         _type: 'order',
//         ...formData,
//         items: cartItems.map(item => ({
//           _key: item._id,
//           _type: 'reference',
//           _ref: item._id,
//         })),
//         total: totalPrice,
//         createdAt: new Date().toISOString(),
//         status: 'Pending',
//       };

//       await client.create(order);
//       clearCart();
//       router.push('/checkout/success');
//     } catch (err) {
//       setError('Failed to place order. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + (Number(item.price) * item.quantity),
//     0
//   );

//   return (
//     <div className="checkout-container">
//       <h1 className="checkout-title">Complete Your Order</h1>

//       <div className="checkout-layout">
//         {/* Order Summary Section */}
//         <div className="order-summary">
//           <div className="summary-header">
//             <FontAwesomeIcon icon={faReceipt} className="summary-icon" />
//             <h2>Order Summary</h2>
//           </div>

//           <div className="order-items">
//             {cartItems.map(item => (
//               <div key={item._id} className="order-item">
//                 <div className="item-image-container">
//                   {item.image && (
//                     <img
//                       src={urlFor(item.image).url()}
//                       alt={item.name}
//                       className="item-image"
//                     />
//                   )}
//                 </div>
//                 <div className="item-details">
//                   <h3 className="item-name">{item.name}</h3>
//                   <div className="item-meta">
//                     <span className="item-quantity">Qty: {item.quantity}</span>
//                     <span className="item-price">
//                       Rs {(
//                         Number(item.price || 0) *
//                         Number(item.quantity || 1)
//                       ).toLocaleString('en-PK', {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="order-totals">
//             <div className="total-row">
//               <span>Subtotal</span>
//               <span>Rs {subtotal.toFixed(2)}</span>
//             </div>
//             <div className="total-row">
//               <span>Shipping</span>
//               <span className="free-shipping">Free</span>
//             </div>
//             <div className="total-row grand-total">
//               <span>Total</span>
//               <span>Rs {totalPrice.toString(2)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Checkout Form Section */}
//         <form onSubmit={handleSubmit} className="checkout-form">
//           <div className="form-stepper">
//             <div className="stepper-item active">
//               <span>1</span>
//               <p>Shipping Info</p>
//             </div>
//             <div className="stepper-item">
//               <span>2</span>
//               <p>Payment</p>
//             </div>
//           </div>

//           <div className="form-section">
//             <h3 className="section-title">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="section-icon" />
//               Shipping Details
//             </h3>

//             <div className="form-group">
//               <label htmlFor="customerName">
//                 <FontAwesomeIcon icon={faUser} className="input-icon" />
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="customerName"
//                 name="customerName"
//                 value={formData.customerName}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="email">
//                   <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone">
//                   <FontAwesomeIcon icon={faMobileAlt} className="input-icon" />
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+92 300 1234567"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
//                 Street Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="House #123, Street #45"
//                 required
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="city">
//                   <FontAwesomeIcon icon={faCity} className="input-icon" />
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="Lahore"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="zipCode">
//                   <FontAwesomeIcon icon={faMailBulk} className="input-icon" />
//                   ZIP Code
//                 </label>
//                 <input
//                   type="text"
//                   id="zipCode"
//                   name="zipCode"
//                   value={formData.zipCode}
//                   onChange={handleChange}
//                   placeholder="54000"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {error && (
//             <div className="error-message">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
//               </svg>
//               {error}
//             </div>
//           )}

//           <div className="action-buttons">
//             <Link href="/cart" className="back-button">
//               ← Return to Cart
//             </Link>
//             <button
//               type="submit"
//               className="submit-button"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="spinner"></div>
//                   Processing...
//                 </>
//               ) : (
//                 `Place Order - Rs ${totalPrice.toFixed(2)}`
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx global>{`
//         .checkout-container {
//           padding: 2rem 1rem;
//           background: #0a0a0a;
//           color: #ffffff;
//           min-height: 100vh;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .checkout-title {
//           text-align: center;
//           font-size: 2.5rem;
//           margin-bottom: 2rem;
//           color: #ff4757;
//           letter-spacing: -0.05em;
//         }

//         .checkout-layout {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         @media (min-width: 1024px) {
//           .checkout-layout {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         .order-summary {
//           background: #1a1a1a;
//           border-radius: 16px;
//           padding: 2rem;
//           height: fit-content;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//         }

//         .summary-header {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           margin-bottom: 2rem;
//           padding-bottom: 1.5rem;
//           border-bottom: 2px solid #2d2d2d;
//         }

//         .summary-header h2 {
//           font-size: 1.5rem;
//           color: #ff4757;
//           margin: 0;
//         }

//         .order-items {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//         }

//         .order-item {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//           padding: 1rem;
//           background: #252525;
//           border-radius: 12px;
//         }

//         .item-image-container {
//           width: 80px;
//           height: 80px;
//           border-radius: 8px;
//           overflow: hidden;
//           flex-shrink: 0;
//         }

//         .item-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .item-name {
//           font-size: 1rem;
//           margin-bottom: 0.5rem;
//         }

//         .item-meta {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .item-quantity {
//           font-size: 0.9rem;
//           color: #888;
//         }

//         .item-price {
//           font-size: 0.95rem;
//           color: #ff4757;
//           font-weight: 600;
//         }

//         .order-totals {
//           border-top: 2px solid #2d2d2d;
//           padding-top: 1.5rem;
//         }

//         .total-row {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 1rem;
//           font-size: 0.95rem;
//           color: #ccc;
//         }

//         .grand-total {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: #ffffff;
//         }

//         .checkout-form {
//           background: #1a1a1a;
//           border-radius: 16px;
//           padding: 2rem;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//         }

//         .form-stepper {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 3rem;
//           position: relative;
//         }

//         .form-stepper::before {
//           content: '';
//           position: absolute;
//           top: 20px;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: #2d2d2d;
//           z-index: 1;
//         }

//         .stepper-item {
//           text-align: center;
//           z-index: 2;
//           position: relative;
//         }

//         .stepper-item span {
//           display: flex;
//           width: 40px;
//           height: 40px;
//           background: #2d2d2d;
//           border-radius: 50%;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 0.5rem;
//           font-weight: 600;
//           transition: all 0.3s ease;
//         }

//         .stepper-item.active span {
//           background: #ff4757;
//           color: white;
//           box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
//         }

//         .form-group {
//           margin-bottom: 1.75rem;
//         }

//         label {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 0.75rem;
//           color: #ccc;
//           font-weight: 500;
//         }

//         input {
//           width: 100%;
//           padding: 1rem 1rem 1rem 3rem;
//           background: #252525;
//           border: 2px solid #2d2d2d;
//           border-radius: 8px;
//           color: white;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//         }

//         input:focus {
//           border-color: #ff4757;
//           box-shadow: 0 0 0 3px rgba(255, 71, 87, 0.2);
//         }

//         .error-message {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 1rem;
//           background: #4a1a1a;
//           border: 1px solid #ff4444;
//           border-radius: 8px;
//           color: #ff8888;
//           margin: 1.5rem 0;
//         }

//         .submit-button {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           background: #ff4757;
//           color: white;
//           padding: 1.25rem 2.5rem;
//           border: none;
//           border-radius: 8px;
//           font-size: 1.1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .spinner {
//           width: 20px;
//           height: 20px;
//           border: 3px solid rgba(255,255,255,0.3);
//           border-radius: 50%;
//           border-top-color: white;
//           animation: spin 1s linear infinite;
//         }

//         @media (max-width: 768px) {
//           .checkout-container {
//             padding: 1rem;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//           }

//           .item-image-container {
//             width: 60px;
//             height: 60px;
//           }
//         }

//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CheckoutPage;
// pages/checkout.tsx
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
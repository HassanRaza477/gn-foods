// 'use client'

// import { useCart } from '@/components/CartContext';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// const CartPage = () => {
//   const { cartItems, removeFromCart, totalPrice, totalItems } = useCart();

//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Your Cart ({totalItems} items)</h1>

//       {cartItems.length === 0 ? (
//         <div className="empty-cart">
//           <p>Your cart is empty</p>
//           <Link href="/menu" className="cta-button">
//             Browse Menu
//           </Link>
//         </div>
//       ) : (
//         <div className="cart-content">
//           <div className="cart-items">
//             {cartItems.map(item => {
//               const minPrice = parseFloat(item.price.split('-')[0].replace('PKR', '').trim());

//               return (
//                 <div key={item.id} className="cart-item">
//                   <div className="item-image">
//                     <Image
//                       src={`/images/${item.image}`}
//                       alt={item.name}
//                       width={150}
//                       height={150}
//                       style={{ objectFit: 'cover' }}
//                     />
//                   </div>
//                   <div className="item-info">
//                     <h3>{item.name}</h3>
//                     <p className="item-category">{item.category.toUpperCase()}</p>
//                     <p className="item-price">Price: {item.price}</p>
//                     <p className="item-quantity">Quantity: {item.quantity}</p>
//                     <p className="item-total">Total: Rs {(minPrice * item.quantity).toFixed(2)}</p>
//                   </div>
//                   <button 
//                     className="remove-btn"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     <FontAwesomeIcon icon={faTrashAlt} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="cart-summary">
//             <h2>Order Summary</h2>
//             <div className="summary-row">
//               <span>Subtotal:</span>
//               <span>Rs {totalPrice.toFixed(2)}</span>
//             </div>
//             <div className="summary-row">
//               <span>Delivery Fee:</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-row total">
//               <span>Total:</span>
//               <span>Rs {totalPrice.toFixed(2)}</span>
//             </div>

//             <Link href="/checkout" className="checkout-button">
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         .cart-container {
//           padding: 4rem 2rem;
//           background: var(--dark-bg);
//           color: var(--text-white);
//           min-height: 100vh;
//         }

//         .cart-title {
//           text-align: center;
//           font-size: 2.5rem;
//           margin-bottom: 3rem;
//           color: var(--primary-red);
//         }

//         .cart-content {
//           display: grid;
//           grid-template-columns: 2fr 1fr;
//           gap: 3rem;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .cart-items {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//         }

//         .cart-item {
//           display: flex;
//           gap: 2rem;
//           padding: 2rem;
//           background: #1a1a1a;
//           border-radius: 10px;
//           position: relative;
//         }

//         .item-image {
//           flex-shrink: 0;
//           width: 150px;
//           height: 150px;
//           border-radius: 8px;
//           overflow: hidden;
//           position: relative;
//         }

//         .item-info {
//           flex-grow: 1;
//         }

//         .item-category {
//           color: var(--primary-red);
//           font-size: 0.9rem;
//           margin-bottom: 0.5rem;
//         }

//         .item-price {
//           color: #ccc;
//           margin-bottom: 0.5rem;
//         }

//         .item-quantity {
//           color: #aaa;
//         }

//         .item-total {
//           color: var(--primary-red);
//           font-weight: bold;
//           margin-top: 1rem;
//         }

//         .remove-btn {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           background: none;
//           border: none;
//           color: #666;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .remove-btn:hover {
//           color: var(--primary-red);
//         }

//         .cart-summary {
//           background: #1a1a1a;
//           padding: 2rem;
//           border-radius: 10px;
//           height: fit-content;
//         }

//         .summary-row {
//           display: flex;
//           justify-content: space-between;
//           padding: 1rem 0;
//           border-bottom: 1px solid #333;
//         }

//         .summary-row.total {
//           font-size: 1.2rem;
//           font-weight: bold;
//           border-bottom: none;
//         }

//         .checkout-button {
//           display: block;
//           background: var(--primary-red);
//           color: white;
//           text-align: center;
//           padding: 1.2rem;
//           border-radius: 5px;
//           margin-top: 2rem;
//           text-decoration: none;
//           transition: 0.3s;
//         }

//         .checkout-button:hover {
//           opacity: 0.9;
//           transform: translateY(-2px);
//         }

//         .empty-cart {
//           text-align: center;
//           padding: 4rem 0;
//         }

//         .empty-cart p {
//           font-size: 1.5rem;
//           margin-bottom: 2rem;
//         }

//         .cta-button {
//           background: var(--primary-red);
//           color: white;
//           padding: 1rem 2rem;
//           border-radius: 5px;
//           text-decoration: none;
//           transition: 0.3s;
//         }

//         .cta-button:hover {
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .cart-content {
//             grid-template-columns: 1fr;
//           }

//           .cart-item {
//             flex-direction: column;
//             padding: 1.5rem;
//           }

//           .item-image {
//             width: 100%;
//             height: 200px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CartPage;

// app/cart/page.tsx
'use client';

import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { CartItem } from '@/types';

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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { X, Plus, Minus, RefreshCw, ShoppingBag } from 'lucide-react';

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Fresh Organic Apples',
    price: 120,
    discount: 10,
    quantity: 2,
    unit: 'kg',
    image: 'apple-placeholder',
  },
  {
    id: 2,
    name: 'Organic Carrots',
    price: 60,
    discount: 0,
    quantity: 1,
    unit: 'kg',
    image: 'carrot-placeholder',
  },
  {
    id: 3,
    name: 'Farm Fresh Milk',
    price: 55,
    discount: 5,
    quantity: 3,
    unit: 'liter',
    image: 'milk-placeholder',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 ? 
      item.price * (1 - item.discount / 100) : 
      item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  // Shipping cost
  const shipping = subtotal < 499 ? 40 : 0;
  
  // Total
  const total = subtotal + shipping;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageHeader 
        title="Shopping Cart" 
        breadcrumbs={[{ name: 'Cart', url: '/cart' }]} 
      />
      
      <div className="container mx-auto px-4 py-8">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">Cart Items</h2>
                
                {/* Cart headers - hidden on mobile */}
                <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-gray-500 font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                
                {/* Cart items */}
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const price = item.discount > 0 ? 
                      item.price * (1 - item.discount / 100) : 
                      item.price;
                    
                    return (
                      <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b pb-4">
                        {/* Product */}
                        <div className="col-span-1 md:col-span-5 flex">
                          {/* Product image */}
                          <div className="w-20 h-20 bg-gray-100 rounded-md mr-4 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Image</span>
                          </div>
                          
                          {/* Product details */}
                          <div className="flex flex-col">
                            <Link to={`/product/${item.id}`} className="font-medium hover:text-grocery-primary">
                              {item.name}
                            </Link>
                            <div className="text-sm text-gray-500">
                              Price: ₹{price} per {item.unit}
                            </div>
                            
                            {/* Remove button - visible on mobile */}
                            <button 
                              className="md:hidden text-red-500 text-sm flex items-center mt-2"
                              onClick={() => removeItem(item.id)}
                            >
                              <X size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price - hidden on mobile */}
                        <div className="hidden md:flex md:col-span-2 items-center justify-center">
                          <div className="text-center">
                            {item.discount > 0 && (
                              <span className="text-gray-500 line-through text-sm block">
                                ₹{item.price}
                              </span>
                            )}
                            <span className="font-medium">₹{price}</span>
                          </div>
                        </div>
                        
                        {/* Quantity */}
                        <div className="md:col-span-3 flex items-center justify-between md:justify-center">
                          <span className="md:hidden">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </button>
                            <input 
                              type="number" 
                              value={item.quantity} 
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-12 text-center border-none focus:outline-none"
                            />
                            <button 
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                          <span className="md:hidden">Total:</span>
                          <div className="font-bold">₹{(price * item.quantity).toFixed(2)}</div>
                          
                          {/* Remove button - hidden on mobile */}
                          <button 
                            className="hidden md:block text-gray-500 hover:text-red-500 ml-4"
                            onClick={() => removeItem(item.id)}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Continue shopping and update cart buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-between">
                  <Link to="/shop" className="flex items-center justify-center bg-white border border-grocery-primary text-grocery-primary py-2 px-4 rounded-md hover:bg-grocery-secondary">
                    <ShoppingBag size={18} className="mr-2" />
                    Continue Shopping
                  </Link>
                  
                  <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
                    <RefreshCw size={18} className="mr-2" />
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Free'}</span>
                  </div>
                  
                  {/* Coupon code */}
                  <div className="border-t border-b py-4">
                    <div className="mb-2">Apply Coupon</div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter coupon code" 
                        className="flex-grow py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grocery-primary"
                      />
                      <button className="bg-grocery-primary text-white py-2 px-4 rounded-md hover:bg-grocery-primary/90">
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  
                  <Link to="/checkout" className="block w-full py-3 px-4 bg-grocery-primary text-white text-center font-medium rounded-md hover:bg-grocery-primary/90 transition-colors">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-grocery-secondary rounded-full flex items-center justify-center">
              <ShoppingBag size={48} className="text-grocery-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              <ShoppingBag size={18} className="mr-2" />
              Start Shopping
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;

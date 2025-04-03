
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Products from '../components/Products';
import { ShoppingCart, Heart, Minus, Plus, Truck, RefreshCw, Shield, Check } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // This would normally come from an API using the ID
  const product = {
    id: 1,
    name: 'Fresh Organic Apples',
    price: 120,
    discountedPrice: 108,
    discount: 10,
    unit: 'kg',
    rating: 4.5,
    reviews: 24,
    stock: 50,
    category: 'Fruits',
    description: 'Fresh and juicy apples sourced directly from organic farms. Rich in vitamins and minerals, these apples are perfect for healthy snacking.',
    features: [
      'Pesticide-free',
      '100% Organic',
      'Rich in vitamins',
      'Freshly harvested',
    ],
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageHeader 
        title={product.name} 
        breadcrumbs={[
          { name: 'Shop', url: '/shop' },
          { name: product.category, url: `/${product.category.toLowerCase()}` },
          { name: product.name, url: `/product/${id}` },
        ]} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center mb-4">
                <span className="text-gray-500">Product Image</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-100 aspect-square rounded-md flex items-center justify-center cursor-pointer">
                    <span className="text-gray-500 text-xs">Image</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-grocery-primary mr-3">
                  ₹{product.discountedPrice}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-gray-500 line-through text-lg">
                      ₹{product.price}
                    </span>
                    <span className="ml-2 bg-grocery-accent text-white text-sm font-medium py-1 px-2 rounded-full">
                      {product.discount}% Off
                    </span>
                  </>
                )}
              </div>
              
              <div className="h-px bg-gray-200 my-4"></div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-grocery-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-px bg-gray-200 my-4"></div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-3 py-2 border-r border-gray-300 text-gray-600 hover:bg-gray-100"
                    onClick={decrementQuantity}
                  >
                    <Minus size={18} />
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.min(parseInt(e.target.value) || 1, product.stock))}
                    className="w-16 py-2 text-center border-none focus:outline-none"
                  />
                  <button 
                    className="px-3 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-100"
                    onClick={incrementQuantity}
                  >
                    <Plus size={18} />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 flex-1">
                  <button className="flex-1 btn-primary flex items-center justify-center">
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100">
                    <Heart size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              {/* Stock info */}
              <div className="text-sm">
                <span className="font-medium">Availability:</span> 
                <span className={`ml-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}
                </span>
              </div>
              
              <div className="h-px bg-gray-200 my-4"></div>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="rounded-full bg-grocery-secondary p-2 mr-3">
                    <Truck size={18} className="text-grocery-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-gray-500">On orders over ₹499</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="rounded-full bg-grocery-secondary p-2 mr-3">
                    <RefreshCw size={18} className="text-grocery-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Return Policy</p>
                    <p className="text-gray-500">Easy 7 days return</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="rounded-full bg-grocery-secondary p-2 mr-3">
                    <Shield size={18} className="text-grocery-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Secure Payment</p>
                    <p className="text-gray-500">100% secure payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <Products title="Related Products" subTitle="You might also like these products" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

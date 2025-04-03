
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 120,
    unit: 'kg',
    discount: 10,
    category: 'fruits',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Organic Carrots',
    price: 60,
    unit: 'kg',
    discount: 0,
    category: 'vegetables',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Farm Fresh Milk',
    price: 55,
    unit: 'liter',
    discount: 5,
    category: 'dairy',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Whole Wheat Bread',
    price: 40,
    unit: 'pack',
    discount: 0,
    category: 'bakery',
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Free Range Eggs',
    price: 80,
    unit: 'dozen',
    discount: 0,
    category: 'poultry',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Organic Honey',
    price: 220,
    unit: 'bottle',
    discount: 15,
    category: 'organic',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Fresh Spinach',
    price: 30,
    unit: 'bunch',
    discount: 0,
    category: 'vegetables',
    rating: 4.3,
  },
  {
    id: 8,
    name: 'Orange Juice',
    price: 90,
    unit: 'liter',
    discount: 0,
    category: 'beverages',
    rating: 4.1,
  },
];

const Products = ({ title = "Popular Products", subTitle = "Explore our top selling products" }) => {
  return (
    <section className="section-padding bg-grocery-light">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subTitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product badge */}
              {product.discount > 0 && (
                <div className="absolute top-3 left-3 bg-grocery-accent text-white text-sm font-medium py-1 px-2 rounded-full">
                  {product.discount}% Off
                </div>
              )}
              
              {/* Wishlist icon */}
              <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100">
                <Heart size={18} className="text-gray-400 hover:text-grocery-accent" />
              </button>
              
              {/* Product image */}
              <div className="relative aspect-square mb-3 bg-gray-100 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                </div>
              </div>
              
              {/* Product info */}
              <div className="flex-grow">
                <div className="text-sm text-grocery-primary font-medium mb-1 capitalize">
                  {product.category}
                </div>
                <h3 className="font-medium text-lg mb-1">
                  <Link to={`/product/${product.id}`} className="hover:text-grocery-primary">
                    {product.name}
                  </Link>
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center mb-3">
                  {product.discount > 0 ? (
                    <>
                      <span className="font-bold text-grocery-primary mr-2">
                        ₹{(product.price * (1 - product.discount / 100)).toFixed(0)}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ₹{product.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-grocery-primary">
                      ₹{product.price}
                    </span>
                  )}
                  <span className="text-gray-500 text-sm ml-1">/{product.unit}</span>
                </div>
              </div>
              
              {/* Add to cart button */}
              <button className="w-full py-2 px-4 bg-grocery-primary text-white rounded-md hover:bg-grocery-primary/90 transition-colors flex items-center justify-center">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

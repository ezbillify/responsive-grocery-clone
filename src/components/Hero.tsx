
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-grocery-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row py-8 md:py-16 px-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-grocery-dark">
              Fresh & Healthy <span className="text-grocery-primary">Groceries</span>
            </h1>
            <p className="text-lg mb-6 text-gray-600 max-w-lg">
              Get fresh vegetables, fruits and grocery items delivered to your doorstep in minutes.
            </p>
            <div className="flex space-x-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/offers" className="btn-accent">
                View Offers
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature boxes */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-500">Icon</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Free Delivery</h3>
              <p className="text-sm text-gray-500">On order over ₹499</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-500">Icon</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Always Fresh</h3>
              <p className="text-sm text-gray-500">100% organic products</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-500">Icon</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Superior Quality</h3>
              <p className="text-sm text-gray-500">Quality products</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-500">Icon</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium">24/7 Support</h3>
              <p className="text-sm text-gray-500">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

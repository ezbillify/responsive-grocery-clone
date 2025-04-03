
import React from 'react';
import { Link } from 'react-router-dom';

const Promotions = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promotion 1 */}
          <div className="relative rounded-lg overflow-hidden bg-grocery-secondary h-64 flex items-center">
            <div className="relative z-10 px-8">
              <h3 className="text-2xl font-bold mb-2">Fresh Fruits</h3>
              <p className="mb-4 text-gray-700">Get up to 30% off on fresh fruits</p>
              <Link to="/fruits" className="btn-primary">Shop Now</Link>
            </div>
            {/* Placeholder for promotion image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Promotion Image</span>
            </div>
          </div>
          
          {/* Promotion 2 */}
          <div className="relative rounded-lg overflow-hidden bg-grocery-secondary h-64 flex items-center">
            <div className="relative z-10 px-8">
              <h3 className="text-2xl font-bold mb-2">Organic Vegetables</h3>
              <p className="mb-4 text-gray-700">100% organic and farm fresh</p>
              <Link to="/vegetables" className="btn-primary">Shop Now</Link>
            </div>
            {/* Placeholder for promotion image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Promotion Image</span>
            </div>
          </div>
        </div>
        
        {/* Full width banner */}
        <div className="mt-8 relative rounded-lg overflow-hidden bg-grocery-secondary h-64 flex items-center">
          <div className="relative z-10 px-8 max-w-lg">
            <h3 className="text-2xl font-bold mb-2">Special Offers</h3>
            <p className="mb-4 text-gray-700">Save big with our weekly special offers and discounts</p>
            <Link to="/offers" className="btn-accent">View Offers</Link>
          </div>
          {/* Placeholder for banner image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Banner Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;

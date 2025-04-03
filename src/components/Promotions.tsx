
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Promotions = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how our innovative products and services can transform your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solution 1 */}
          <div className="relative rounded-lg overflow-hidden bg-grocery-secondary h-64 flex items-center group hover-scale">
            <div className="relative z-10 px-8">
              <h3 className="text-2xl font-bold mb-2">Digital Transformation</h3>
              <p className="mb-4 text-gray-700">Modernize your business with custom digital solutions</p>
              <Link to="/solutions" className="text-grocery-primary font-medium flex items-center">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Placeholder for solution image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Solution Image</span>
            </div>
          </div>
          
          {/* Solution 2 */}
          <div className="relative rounded-lg overflow-hidden bg-grocery-secondary h-64 flex items-center group hover-scale">
            <div className="relative z-10 px-8">
              <h3 className="text-2xl font-bold mb-2">Brand Strategy</h3>
              <p className="mb-4 text-gray-700">Build a powerful brand identity that resonates with your audience</p>
              <Link to="/solutions" className="text-grocery-primary font-medium flex items-center">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Placeholder for solution image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">Solution Image</span>
            </div>
          </div>
        </div>
        
        {/* Full width banner */}
        <div className="mt-8 relative rounded-lg overflow-hidden bg-gradient-to-r from-grocery-primary to-grocery-accent h-64 flex items-center">
          <div className="relative z-10 px-8 max-w-lg text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to transform your business?</h3>
            <p className="mb-4">Let's work together to create solutions that drive growth and innovation</p>
            <Link to="/contact" className="bg-white text-grocery-primary hover:bg-white/90 font-medium px-6 py-2 rounded-md transition-colors">
              Get Started
            </Link>
          </div>
          {/* Placeholder for banner image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-100/20 flex items-center justify-center">
            <span className="text-white/50">Banner Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;

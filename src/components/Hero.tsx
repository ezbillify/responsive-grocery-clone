
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-grocery-secondary min-h-[80vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row py-8 md:py-16 px-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
            <span className="text-grocery-primary font-medium mb-2">Welcome to our brand</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-grocery-dark">
              We deliver <span className="text-grocery-primary">innovative solutions</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600 max-w-lg">
              Empowering businesses with cutting-edge technology and creative strategies to help you stand out in today's competitive market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn-accent flex items-center">
                Contact Us <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg h-80 md:h-96 bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-gray-500">Brand Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature boxes */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3 w-14 h-14 flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-grocery-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white">Icon</span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-2">Innovation</h3>
            <p className="text-gray-500">We constantly push boundaries to create cutting-edge solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3 w-14 h-14 flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-grocery-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white">Icon</span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-2">Quality</h3>
            <p className="text-gray-500">We're committed to delivering excellence in everything we do</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
            <div className="rounded-full bg-grocery-secondary p-3 mr-3 w-14 h-14 flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-grocery-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white">Icon</span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-2">Support</h3>
            <p className="text-gray-500">Dedicated team providing exceptional customer service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

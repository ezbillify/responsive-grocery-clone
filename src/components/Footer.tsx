
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, YouTube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grocery-dark text-white">
      {/* Newsletter subscription */}
      <div className="bg-grocery-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-white/80">Get the latest updates and offers directly to your inbox</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow py-3 px-4 rounded-l-md focus:outline-none text-gray-900"
                />
                <button 
                  type="submit" 
                  className="bg-grocery-accent hover:bg-grocery-accent/90 text-white py-3 px-6 rounded-r-md font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About GroceryWave</h4>
            <p className="text-gray-400 mb-4">
              We provide fresh, high-quality groceries delivered to your doorstep. Shop from a wide range of fruits, vegetables, dairy products, and more.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <YouTube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/fruits" className="text-gray-400 hover:text-white">Fruits</Link></li>
              <li><Link to="/vegetables" className="text-gray-400 hover:text-white">Vegetables</Link></li>
              <li><Link to="/dairy" className="text-gray-400 hover:text-white">Dairy Products</Link></li>
              <li><Link to="/bakery" className="text-gray-400 hover:text-white">Bakery Items</Link></li>
              <li><Link to="/meat" className="text-gray-400 hover:text-white">Meat & Poultry</Link></li>
              <li><Link to="/organic" className="text-gray-400 hover:text-white">Organic Products</Link></li>
              <li><Link to="/beverages" className="text-gray-400 hover:text-white">Beverages</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">123 Main Street, New Delhi, 110001, India</p>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">+91 1234567890</p>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">support@grocerywave.in</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} GroceryWave. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="https://via.placeholder.com/40x25" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Payment Method" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Payment Method" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

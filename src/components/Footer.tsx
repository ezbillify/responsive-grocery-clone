
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-grocery-dark text-white">
      {/* Newsletter subscription */}
      <div className="bg-grocery-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Subscribe to our newsletter for the latest industry insights</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About YourBrand</h4>
            <p className="text-gray-400 mb-4">
              We're a forward-thinking company dedicated to helping businesses grow through innovative solutions and strategic partnerships.
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
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">123 Business Avenue, Tech Park, Bangalore 560001, India</p>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">+91 1234567890</p>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">info@yourbrand.com</p>
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
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

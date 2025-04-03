
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with contact */}
      <div className="bg-grocery-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span className="hidden sm:inline">+91 1234567890</span>
            </span>
            <span className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span className="hidden sm:inline">info@yourbrand.com</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:underline text-sm flex items-center">
              <span>Client Login</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-grocery-primary">YourBrand</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="font-medium hover:text-grocery-primary">Home</Link></li>
              <li><Link to="/about" className="font-medium hover:text-grocery-primary">About</Link></li>
              <li><Link to="/solutions" className="font-medium hover:text-grocery-primary">Solutions</Link></li>
              <li><Link to="/case-studies" className="font-medium hover:text-grocery-primary">Case Studies</Link></li>
              <li><Link to="/blog" className="font-medium hover:text-grocery-primary">Blog</Link></li>
              <li><Link to="/contact" className="font-medium hover:text-grocery-primary">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Contact Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden md:block btn-primary">
              Get in Touch
            </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-white border-t mt-4">
            <ul className="space-y-4">
              <li><Link to="/" className="block font-medium hover:text-grocery-primary">Home</Link></li>
              <li><Link to="/about" className="block font-medium hover:text-grocery-primary">About</Link></li>
              <li><Link to="/solutions" className="block font-medium hover:text-grocery-primary">Solutions</Link></li>
              <li><Link to="/case-studies" className="block font-medium hover:text-grocery-primary">Case Studies</Link></li>
              <li><Link to="/blog" className="block font-medium hover:text-grocery-primary">Blog</Link></li>
              <li><Link to="/contact" className="block font-medium hover:text-grocery-primary">Contact</Link></li>
              <li className="pt-4">
                <Link to="/contact" className="btn-primary inline-block">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

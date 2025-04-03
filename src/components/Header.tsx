
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Main header with logo and navigation */}
      <div className="bg-grocery-primary text-white">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">GroceryWave</span>
              {/* Logo will go here once provided */}
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 lg:space-x-8">
                <li><Link to="/" className="font-medium text-white hover:text-white/80">Home</Link></li>
                <li><Link to="/about" className="font-medium text-white hover:text-white/80">About</Link></li>
                <li><Link to="/careers" className="font-medium text-white hover:text-white/80">Careers</Link></li>
                <li><Link to="/products" className="font-medium text-white hover:text-white/80">Products</Link></li>
                <li><Link to="/contact" className="font-medium text-white hover:text-white/80">Contact</Link></li>
              </ul>
            </nav>
            
            {/* Shop Now Button and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://veekaart.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden md:block bg-white text-grocery-primary px-4 py-2 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Shop Now
              </a>
              
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-grocery-primary border-t border-white/20 mt-4">
              <ul className="space-y-4">
                <li><Link to="/" className="block font-medium text-white hover:text-white/80 px-2">Home</Link></li>
                <li><Link to="/about" className="block font-medium text-white hover:text-white/80 px-2">About</Link></li>
                <li><Link to="/careers" className="block font-medium text-white hover:text-white/80 px-2">Careers</Link></li>
                <li><Link to="/products" className="block font-medium text-white hover:text-white/80 px-2">Products</Link></li>
                <li><Link to="/contact" className="block font-medium text-white hover:text-white/80 px-2">Contact</Link></li>
                <li className="pt-4 px-2">
                  <a 
                    href="https://veekaart.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-grocery-primary px-4 py-2 rounded-md hover:bg-white/90 transition-colors inline-block font-medium"
                  >
                    Shop Now
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

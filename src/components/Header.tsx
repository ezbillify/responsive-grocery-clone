
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with contact and login */}
      <div className="bg-grocery-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Phone size={16} className="mr-1" />
            <span className="hidden sm:inline">Call us: +91 1234567890</span>
            <span className="sm:hidden">Call</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/login" className="flex items-center hover:underline">
              <User size={16} className="mr-1" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="hidden sm:block hover:underline">Register</Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-grocery-primary">GroceryWave</span>
          </Link>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grocery-primary"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          {/* Cart and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="flex items-center">
              <div className="relative">
                <ShoppingCart className="text-grocery-primary" size={24} />
                <span className="absolute -top-2 -right-2 bg-grocery-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="ml-2 hidden sm:inline">Cart</span>
            </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile search - visible only on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grocery-primary"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-grocery-secondary border-t border-b border-gray-200">
        <div className="container mx-auto">
          {/* Desktop navigation */}
          <ul className="hidden md:flex py-2 px-4 space-x-8">
            <li><Link to="/" className="font-medium hover:text-grocery-primary">Home</Link></li>
            <li><Link to="/shop" className="font-medium hover:text-grocery-primary">Shop</Link></li>
            <li><Link to="/fruits" className="font-medium hover:text-grocery-primary">Fruits</Link></li>
            <li><Link to="/vegetables" className="font-medium hover:text-grocery-primary">Vegetables</Link></li>
            <li><Link to="/dairy" className="font-medium hover:text-grocery-primary">Dairy</Link></li>
            <li><Link to="/bakery" className="font-medium hover:text-grocery-primary">Bakery</Link></li>
            <li><Link to="/meat" className="font-medium hover:text-grocery-primary">Meat</Link></li>
            <li><Link to="/offers" className="font-medium hover:text-grocery-primary">Offers</Link></li>
          </ul>
          
          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 px-4 bg-white border-t">
              <ul className="space-y-4">
                <li><Link to="/" className="block font-medium hover:text-grocery-primary">Home</Link></li>
                <li><Link to="/shop" className="block font-medium hover:text-grocery-primary">Shop</Link></li>
                <li><Link to="/fruits" className="block font-medium hover:text-grocery-primary">Fruits</Link></li>
                <li><Link to="/vegetables" className="block font-medium hover:text-grocery-primary">Vegetables</Link></li>
                <li><Link to="/dairy" className="block font-medium hover:text-grocery-primary">Dairy</Link></li>
                <li><Link to="/bakery" className="block font-medium hover:text-grocery-primary">Bakery</Link></li>
                <li><Link to="/meat" className="block font-medium hover:text-grocery-primary">Meat</Link></li>
                <li><Link to="/offers" className="block font-medium hover:text-grocery-primary">Offers</Link></li>
                <li className="pt-2 border-t">
                  <Link to="/login" className="block font-medium hover:text-grocery-primary">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="block font-medium hover:text-grocery-primary">Register</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

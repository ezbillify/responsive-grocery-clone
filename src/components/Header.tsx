import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-grocery-primary/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-grocery-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              {/* Glow effect behind logo on hover */}
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/bf406abd-dc0b-4bc5-ad0e-2d80f56f007a.png" 
                alt="GroceryWave Logo" 
                className="h-16 md:h-20 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`relative font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 hover:text-white/80 ${
                      location.pathname === link.path ? 'text-white' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                    {/* Active indicator dot */}
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://veekaart.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex items-center gap-2 bg-white text-grocery-primary px-5 py-2.5 rounded-full hover:bg-slate-50 transition-all duration-300 font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm"
            >
              <ShoppingBag size={18} />
              Shop Now
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-2">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === link.path 
                        ? 'bg-white/20 text-white font-bold' 
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && <ChevronRight size={16} />}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-3 mt-3 border-t border-white/10">
              <a 
                href="https://veekaart.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full bg-white text-grocery-primary px-4 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
              >
                <ShoppingBag size={18} />
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
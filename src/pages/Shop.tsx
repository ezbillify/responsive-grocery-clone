
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Products from '../components/Products';
import { ChevronDown, Filter, X } from 'lucide-react';

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  
  // List of categories
  const categories = [
    { id: 'fruits', name: 'Fruits' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'dairy', name: 'Dairy Products' },
    { id: 'bakery', name: 'Bakery Items' },
    { id: 'meat', name: 'Meat & Poultry' },
    { id: 'organic', name: 'Organic Products' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'snacks', name: 'Snacks' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageHeader 
        title="Shop" 
        breadcrumbs={[{ name: 'Shop', url: '/shop' }]} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile filter button */}
          <div className="md:hidden mb-4">
            <button 
              className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-md flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Filters - Sidebar */}
          <div className={`
            md:w-1/4 lg:w-1/5 
            ${isFilterOpen ? 'block' : 'hidden'} 
            md:block
          `}>
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button 
                  className="md:hidden p-1"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categories</h4>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category.id}>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2"
                          checked={selectedCategory === category.id}
                          onChange={() => {
                            setSelectedCategory(
                              selectedCategory === category.id ? null : category.id
                            )
                          }}
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <div className="w-1/2">
                      <label className="text-sm text-gray-600">Min</label>
                      <input 
                        type="number" 
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-sm text-gray-600">Max</label>
                      <input 
                        type="number" 
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Ratings */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rating</h4>
                <ul className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <li key={rating}>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-1 text-sm">{rating === 5 ? '& up' : '& up'}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Apply Filters Button */}
              <button className="w-full py-2 px-4 bg-grocery-primary text-white rounded-md hover:bg-grocery-primary/90 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Sorting and display options */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-600 mr-2">24 Products Found</span>
              </div>
              
              <div className="flex space-x-4">
                <div className="relative">
                  <select className="appearance-none border rounded-md py-2 pl-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-grocery-primary cursor-pointer">
                    <option>Default Sorting</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Popularity</option>
                    <option>Rating</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Products */}
            <Products title="" subTitle="" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;


import React from 'react';
import { Link } from 'react-router-dom';

// Sample category data
const categories = [
  { id: 1, name: 'Fruits', slug: 'fruits' },
  { id: 2, name: 'Vegetables', slug: 'vegetables' },
  { id: 3, name: 'Dairy', slug: 'dairy' },
  { id: 4, name: 'Bakery', slug: 'bakery' },
  { id: 5, name: 'Meat & Poultry', slug: 'meat' },
  { id: 6, name: 'Organic', slug: 'organic' },
  { id: 7, name: 'Beverages', slug: 'beverages' },
  { id: 8, name: 'Snacks', slug: 'snacks' },
];

const Categories = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-gray-600">Explore our wide range of grocery categories</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link to={`/${category.slug}`} key={category.id}>
              <div className="category-card">
                <div className="relative aspect-square mb-3 bg-grocery-secondary rounded-lg overflow-hidden">
                  {/* Placeholder for category image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Category Image</span>
                  </div>
                </div>
                <h3 className="font-medium text-center">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/shop" className="btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;

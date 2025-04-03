
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-grocery-primary py-6 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <img src="/lovable-uploads/f1dac4a1-5a3e-466a-ba92-016e0e543eac.png" alt="GroceryWave Logo" className="h-10" />
            </div>
            <h1 className="text-2xl font-bold">GroceryWave</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/about" className="text-black hover:text-black/80 font-medium">About Us</Link>
            <Link to="/careers" className="text-black hover:text-black/80 font-medium">Careers</Link>
            <Link to="/products" className="text-black hover:text-black/80 font-medium">Our Products</Link>
            <Link to="/shop" className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-white/90">SHOP NOW</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-grocery-primary py-16 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Welcome to <span className="text-white">GroceryWave</span></h1>
            <p className="text-black mb-6">
              At GroceryWave, we're shaping the future of everyday living with our innovative online solutions and a curated selection of physical products, including high-quality groceries and nutritious dry fruits.
            </p>
            <p className="text-black">
              Our mission is to simplify life through technology and provide products that enrich your daily experiences with quality and trust.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="text-center">
              <div className="flex justify-center">
                <ShoppingCart size={80} className="text-black mb-4" />
              </div>
              <h2 className="text-3xl font-bold">VEE-KAART</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-grocery-primary mb-12">Our Expertise</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <img src="/placeholder.svg" alt="Store Illustration" className="w-full" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold mb-3">Online Solutions:</h3>
              <p className="mb-6">
                We build custom platforms designed for efficiency and user-friendliness. From e-commerce solutions to daily needs we got you covered
              </p>
              
              <h3 className="text-xl font-bold mb-3">Physical Products:</h3>
              <p className="mb-3">We offer a carefully curated range of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Groceries:</strong> Fresh, reliable, and sourced with care to meet everyday needs.</li>
                <li><strong>Dry Fruits:</strong> Premium-grade selections packed with nutrition and flavor.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why GroceryWave Section */}
      <section className="py-16 px-4 md:px-8 bg-grocery-secondary">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why <span className="text-grocery-primary">GroceryWave</span>?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Unmatched Quality:</h3>
              <p>Our groceries and dry fruits are sourced from trusted suppliers to guarantee freshness and authenticity.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Innovation & Excellence:</h3>
              <p>Cutting-edge solutions paired with high-quality products for a seamless experience.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Sustainability at Heart:</h3>
              <p>We prioritize eco-friendly practices in our products and processes.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Customer-First Approach:</h3>
              <p>Your satisfaction drives everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Experience the GroceryWave Advantage</h2>
              <p>
                Whether it's a tech-driven solution to elevate your living or premium groceries and dry fruits to enrich your day, GroceryWave is your trusted partner. Together, we can create smarter, healthier, and more fulfilling experiences.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/placeholder.svg" alt="Award Badge" className="w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 md:px-8 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">GroceryWave</h2>
              <p className="mb-2">email</p>
              <p>phone</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center">
            <p>© 2025 GroceryWave Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-grocery-primary py-10 md:py-16 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Welcome to <span className="text-white">GroceryWave</span></h1>
            <p className="text-black mb-6 text-sm md:text-base">
              At GroceryWave, we're shaping the future of everyday living with our innovative online solutions and a curated selection of physical products, including high-quality groceries and nutritious dry fruits.
            </p>
            <p className="text-black text-sm md:text-base">
              Our mission is to simplify life through technology and provide products that enrich your daily experiences with quality and trust.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/9065d4c0-53f8-4197-956e-c237b476cd87.png" 
                alt="VEE-KAART Logo" 
                className="w-48 md:w-64 mx-auto mb-4" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-10 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-grocery-primary mb-8 md:mb-12">Our Expertise</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/placeholder.svg" alt="Store Illustration" className="w-full max-w-xs" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-lg md:text-xl font-bold mb-3">Online Solutions:</h3>
              <p className="mb-6 text-sm md:text-base">
                We build custom platforms designed for efficiency and user-friendliness. From e-commerce solutions to daily needs we got you covered
              </p>
              
              <h3 className="text-lg md:text-xl font-bold mb-3">Physical Products:</h3>
              <p className="mb-3 text-sm md:text-base">We offer a carefully curated range of:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li><strong>Groceries:</strong> Fresh, reliable, and sourced with care to meet everyday needs.</li>
                <li><strong>Dry Fruits:</strong> Premium-grade selections packed with nutrition and flavor.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why GroceryWave Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-grocery-secondary">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why <span className="text-grocery-primary">GroceryWave</span>?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">Unmatched Quality:</h3>
              <p className="text-sm md:text-base">Our groceries and dry fruits are sourced from trusted suppliers to guarantee freshness and authenticity.</p>
            </div>
            
            <div className="text-center p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">Innovation & Excellence:</h3>
              <p className="text-sm md:text-base">Cutting-edge solutions paired with high-quality products for a seamless experience.</p>
            </div>
            
            <div className="text-center p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">Sustainability at Heart:</h3>
              <p className="text-sm md:text-base">We prioritize eco-friendly practices in our products and processes.</p>
            </div>
            
            <div className="text-center p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">Customer-First Approach:</h3>
              <p className="text-sm md:text-base">Your satisfaction drives everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Experience the GroceryWave Advantage</h2>
              <p className="text-sm md:text-base">
                Whether it's a tech-driven solution to elevate your living or premium groceries and dry fruits to enrich your day, GroceryWave is your trusted partner. Together, we can create smarter, healthier, and more fulfilling experiences.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/placeholder.svg" alt="Award Badge" className="w-32 md:w-40" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

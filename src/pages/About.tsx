
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <PageHeader 
        title="About Us" 
        breadcrumbs={[{ name: "About Us", url: "/about" }]} 
      />
      
      <main className="flex-grow">
        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Our Story, Our Passion,<br />
              and <span className="text-grocery-primary">Our Promise</span>
            </h1>
            
            <div className="mt-8 space-y-6">
              <p className="text-lg">
                Welcome to <span className="text-grocery-primary font-semibold">GroceryWave</span>, where innovation meets everyday essentials. We specialize in delivering high-quality groceries and dry fruits while crafting cutting-edge online solutions that redefine convenience.
              </p>
              
              <p className="text-lg">
                Our mission is to simplify life with products and services that are fresh, reliable, and rooted in trust. Whether it's premium goods for your kitchen or tech-driven delivery for you for your daily life, <span className="text-grocery-primary font-semibold">GroceryWave</span> is here to elevate your experience.
              </p>
              
              <p className="text-lg">
                Join us as we create a future where quality, innovation, and sustainability flow seamlessly together.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20">
              <div className="w-64 h-64 bg-gray-200 rounded-md flex items-center justify-center mb-6 md:mb-0">
                <p className="text-gray-600 font-medium">YET TO BE UPLOADED</p>
              </div>
              
              <div className="md:ml-12 text-center md:text-left">
                <h2 className="text-2xl font-bold">VIJAYA S BHAT</h2>
                <p className="text-xl uppercase">DIRECTOR</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="w-64 h-64 bg-gray-200 rounded-md flex items-center justify-center mb-6 md:mb-0">
                <p className="text-gray-600 font-medium">YET TO BE UPLOADED</p>
              </div>
              
              <div className="md:mr-12 text-center md:text-left">
                <h2 className="text-2xl font-bold">SADASHIVA BHAT</h2>
                <p className="text-xl uppercase">DIRECTOR</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 py-10 md:py-16 lg:py-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-8">
            At <span className="text-grocery-primary">GroceryWave</span>, we bring you the finest quality 
            groceries and home essentials through our two 
            exclusive brands—VEEKAART and 
            GRODHAANYA.
          </h1>
        </div>
      </section>
      
      {/* VEE-KAART Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">VEE-KAART</h2>
              <h3 className="text-lg md:text-xl font-medium mb-3">Your Online Shopping Destination for Home Needs</h3>
              <p className="mb-4">
                <span className="text-grocery-primary font-medium">VEEKAART</span> is a convenient online platform available 
                on the App Store and Play Store, offering a wide 
                range of daily essentials, groceries, and household 
                products. With fast delivery and a 
                user-friendly interface, <span className="text-grocery-primary font-medium">VEEKAART</span> makes shopping 
                effortless.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-grocery-primary rounded-lg p-8 max-w-xs">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <ShoppingCart size={64} className="text-white" />
                    <span className="absolute -top-2 -right-2 text-white text-xl">+</span>
                  </div>
                </div>
                <h3 className="text-white text-2xl font-bold text-center">VEE-KAART<sup>®</sup></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* GRODHAANYA Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">GRODHAANYA</h2>
              <p className="mb-6">
                <span className="text-grocery-primary font-medium">GRODHAANYA</span> is our premium brand for high-
                quality staple foods. Inspired by traditional 
                farming, we source grains, pulses, and spices 
                directly from trusted farmers, ensuring purity and 
                nutrition.
              </p>
              
              <h3 className="text-lg md:text-xl font-medium mb-3">Our product range includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">🌾</span> Grains & Pulses
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌿</span> Natural Spices & Masalas
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🍚</span> Rice, Atta, and Millets
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🥜</span> Dry Fruits & Superfoods
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/lovable-uploads/6a3af865-cb37-4668-bc9d-3a377ced839f.png" 
                alt="GRODHAANYA Logo" 
                className="max-w-xs w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;

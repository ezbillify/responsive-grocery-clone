
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <PageHeader 
        title="Shop" 
        breadcrumbs={[{ name: "Shop", url: "/shop" }]} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Shop page content will be displayed here.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;


import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <PageHeader 
        title="Product Details" 
        breadcrumbs={[
          { name: "Products", url: "/products" },
          { name: `Product ${id}`, url: `/product/${id}` }
        ]} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Product ID: {id}</h2>
        <p className="text-gray-600">This is a placeholder for the product details page.</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

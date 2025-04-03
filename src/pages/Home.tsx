
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Promotions from '../components/Promotions';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <Products title="Best Selling Products" subTitle="Explore our top selling products this week" />
        <Promotions />
        <Products title="New Arrivals" subTitle="Check out our freshly added products" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

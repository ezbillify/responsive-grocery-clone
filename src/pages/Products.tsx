import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ShoppingCart, ArrowRight, Star, Leaf, Smartphone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      <Header />
      
      <PageHeader 
        title="Our Products" 
        breadcrumbs={[{ name: "Products", url: "/products" }]} 
      />
      
      <main className="flex-grow">
        {/* Intro Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
           {/* Abstract Background */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-50 to-white -z-10"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              <Star size={16} className="fill-orange-600" /> Premium Quality Essentials
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
              At <span className="text-grocery-primary">GroceryWave</span>, we bring you <br className="hidden md:block"/>
              the finest quality groceries.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Experience excellence through our two exclusive brands—<span className="font-bold text-slate-800">VEEKAART</span> for daily needs and <span className="font-bold text-slate-800">GRODHAANYA</span> for premium staples.
            </p>
          </div>
        </section>
        
        {/* VEE-KAART Section */}
        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row items-center group hover:shadow-2xl transition-all duration-500">
              
              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <Smartphone size={28} />
                  </div>
                  <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">Online Platform</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 group-hover:text-grocery-primary transition-colors">VEE-KAART</h2>
                <h3 className="text-lg font-medium text-slate-500 mb-6">Your Online Shopping Destination for Home Needs</h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  <span className="text-grocery-primary font-bold">VEEKAART</span> is a convenient online platform available 
                  on the App Store and Play Store, offering a wide 
                  range of daily essentials, groceries, and household 
                  products. With fast delivery and a 
                  user-friendly interface, we make shopping effortless.
                </p>
                
                <a 
                  href="https://veekaart.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-grocery-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all"
                >
                  <ShoppingCart size={20} />
                  Shop Now on VEE-KAART
                </a>
              </div>

              {/* Image Side */}
              <div className="md:w-2/5 w-full bg-blue-50/50 p-10 flex justify-center items-center h-full min-h-[400px] order-1 md:order-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent"></div>
                <img 
                  src="/lovable-uploads/7ac85464-da87-40a3-9775-6c90c3b76e81.png" 
                  alt="VEE-KAART Logo" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative z-10" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* GRODHAANYA Section */}
        <section className="px-4 py-12 md:py-20 bg-orange-50/50">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row items-center group hover:shadow-2xl transition-all duration-500">
              
              {/* Image Side */}
              <div className="md:w-2/5 w-full bg-green-50/50 p-10 flex justify-center items-center h-full min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent"></div>
                <img 
                  src="/lovable-uploads/a3330f44-d0ec-4458-a19e-9f98671eec7b.png" 
                  alt="GRODHAANYA Logo" 
                  className="w-full max-w-[280px] h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-50 rounded-xl text-green-600">
                    <Leaf size={28} />
                  </div>
                  <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">Premium Staples</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 group-hover:text-grocery-primary transition-colors">GRODHAANYA</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  <span className="text-grocery-primary font-bold">GRODHAANYA</span> is our premium brand for high-quality staple foods. Inspired by traditional 
                  farming, we source grains, pulses, and spices 
                  directly from trusted farmers, ensuring purity and nutrition.
                </p>
                
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Our Product Range</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🌾", text: "Grains & Pulses" },
                    { icon: "🌿", text: "Natural Spices & Masalas" },
                    { icon: "🍚", text: "Rice, Atta, and Millets" },
                    { icon: "🥜", text: "Dry Fruits & Superfoods" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Experience the Quality Difference</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ready to upgrade your kitchen with the finest ingredients? Download our app or browse our catalog today.
            </p>
            <div className="flex justify-center gap-4">
               <a href="#" className="flex items-center gap-2 text-grocery-primary font-bold hover:text-orange-700 transition-colors group">
                 Explore Catalog <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
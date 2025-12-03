import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 pt-20 pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-300 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-emerald-100 uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Welcome to GroceryWave
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              We deliver <br/>
              <span className="text-emerald-200">innovative solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-emerald-50 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Empowering businesses and daily lives with cutting-edge technology and premium products to help you stand out in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-emerald-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-emerald-400 bg-transparent text-white font-bold rounded-xl hover:bg-emerald-600/50 transition-all flex items-center justify-center gap-2"
              >
                Contact Us <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Image / Placeholder */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-lg h-80 md:h-[400px] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-50"></div>
              
              {/* Content Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  <div className="w-12 h-12 bg-white rounded-full opacity-20 animate-pulse"></div>
                </div>
                <span className="font-medium text-lg tracking-wide">Brand Hero Image</span>
                <span className="text-sm text-emerald-200 mt-2">1200 x 800px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes - Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <FeatureBox 
            icon={<Zap size={24} />} 
            title="Innovation" 
            description="We constantly push boundaries to create cutting-edge solutions for modern needs."
            delay="0"
          />
          <FeatureBox 
            icon={<ShieldCheck size={24} />} 
            title="Quality Assurance" 
            description="We're committed to delivering excellence and authenticity in everything we do."
            delay="100"
          />
          <FeatureBox 
            icon={<Headphones size={24} />} 
            title="24/7 Support" 
            description="Dedicated team providing exceptional customer service whenever you need us."
            delay="200"
          />
        </div>
      </div>
    </section>
  );
};

// Helper Component for the cards
const FeatureBox = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-emerald-500 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-300">
        <ArrowRight size={20} />
      </div>
    </div>
    <h3 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default Hero;
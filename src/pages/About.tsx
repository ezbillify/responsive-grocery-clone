import React from 'react';
import { Quote, Users, Target, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
      <Header />
      
      {/* Page Header / Hero Section */}
      <section className="relative bg-grocery-primary py-24 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Us</h1>
          <nav className="flex justify-center items-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">About Us</span>
          </nav>
        </div>
      </section>
      
      <main className="flex-grow">
        {/* Story Section */}
        <section className="py-20 px-4 bg-white relative">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-grocery-primary/10 text-grocery-primary rounded-full mb-8">
              <Quote size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              Discover Our Story, Our Passion,<br className="hidden sm:block" />
              and <span className="text-grocery-primary">Our Promise</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed px-4 sm:px-0">
              <p>
                Welcome to <span className="font-bold text-slate-800">GroceryWave</span>, where innovation meets everyday essentials. We specialize in delivering high-quality groceries and dry fruits while crafting cutting-edge online solutions that redefine convenience.
              </p>
              
              <p>
                Our mission is to simplify life with products and services that are fresh, reliable, and rooted in trust. Whether it's premium goods for your kitchen or tech-driven delivery for your daily life, <span className="font-bold text-slate-800">GroceryWave</span> is here to elevate your experience.
              </p>
              
              <p>
                Join us as we create a future where quality, innovation, and sustainability flow seamlessly together.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
              <ValueCard 
                icon={<Target size={24} />}
                title="Our Mission"
                desc="To simplify daily living through technology and trust."
              />
              <ValueCard 
                icon={<Heart size={24} />}
                title="Our Passion"
                desc="Delivering freshness and quality in every package."
              />
              <ValueCard 
                icon={<Users size={24} />}
                title="Our Community"
                desc="Building lasting relationships with every customer."
              />
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 px-4 bg-grocery-secondary/30 relative overflow-hidden">
           <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
              <div className="w-20 h-1.5 bg-grocery-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
              {/* Director 1 */}
              <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-slate-100 hover:border-grocery-primary/20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-grocery-primary rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="/lovable-uploads/a0a4da62-2473-4496-9e77-a92d790a8a24.png" 
                    alt="Vijaya S Bhat" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                  />
                  <div className="absolute bottom-2 right-2 z-20 bg-grocery-primary text-white p-2 rounded-full shadow-lg">
                    <Users size={20} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">VIJAYA S BHAT</h3>
                <p className="text-grocery-primary font-bold tracking-wider text-sm uppercase mb-4">Director</p>
                <p className="text-slate-500 text-sm max-w-xs">
                  Leading with vision and dedication to bring quality products to every household.
                </p>
              </div>
              
              {/* Director 2 */}
              <div className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-slate-100 hover:border-grocery-primary/20">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-grocery-primary rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="/lovable-uploads/628344cb-24f4-4f9d-81a4-9b0fe68e0d4a.png" 
                    alt="Sadashiva Bhat" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                  />
                  <div className="absolute bottom-2 right-2 z-20 bg-grocery-primary text-white p-2 rounded-full shadow-lg">
                    <Users size={20} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">SADASHIVA BHAT</h3>
                <p className="text-grocery-primary font-bold tracking-wider text-sm uppercase mb-4">Director</p>
                <p className="text-slate-500 text-sm max-w-xs">
                  Driving innovation and operational excellence to ensure customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-grocery-primary/30 hover:bg-grocery-primary/5 transition-colors duration-300 group">
    <div className="text-grocery-primary mb-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-grocery-primary group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{desc}</p>
  </div>
);

export default About;
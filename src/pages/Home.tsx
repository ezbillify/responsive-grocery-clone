import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Smartphone, ShieldCheck, Heart, Star, ShoppingBag, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="bg-grocery-primary pt-16 pb-20 px-4 md:px-8 relative overflow-hidden">
        {/* Subtle texture overlay for depth without changing color */}
        <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Welcome to <br/>
              <span className="opacity-90">GroceryWave</span>
            </h1>
            <p className="text-white text-opacity-90 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Shaping the future of everyday living. We combine innovative online solutions with a curated selection of premium groceries and dry fruits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* White button contrasts perfectly with primary bg */}
              <button className="px-8 py-3.5 bg-white text-grocery-primary font-bold rounded-lg shadow-lg hover:bg-gray-50 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                Shop Products <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-grocery-primary transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
             {/* Added a soft white glow behind the image for separation */}
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-3xl opacity-20 rounded-full"></div>
              <img 
                src="/lovable-uploads/9065d4c0-53f8-4197-956e-c237b476cd87.png" 
                alt="GroceryWave Logo" 
                className="relative w-56 md:w-80 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-grocery-primary mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-grocery-primary mx-auto opacity-50 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="flex justify-center">
              <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/6ddd8b2d-61e3-44fd-bdaf-96297616c158.png" 
                  alt="Store Illustration" 
                  className="rounded-xl w-full max-w-sm object-cover" 
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="group flex gap-5 p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-grocery-primary/20 transition-all">
                <div className="shrink-0 w-12 h-12 bg-grocery-primary bg-opacity-10 text-grocery-primary rounded-lg flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Online Solutions</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We build custom platforms designed for efficiency and user-friendliness. From e-commerce solutions to daily needs, we have you covered.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group flex gap-5 p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-grocery-primary/20 transition-all">
                <div className="shrink-0 w-12 h-12 bg-grocery-primary bg-opacity-10 text-grocery-primary rounded-lg flex items-center justify-center">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Products</h3>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">We offer a carefully curated range of:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <Leaf size={16} className="text-grocery-primary" />
                      <span><strong>Groceries:</strong> Fresh & reliable.</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <Star size={16} className="text-grocery-primary" />
                      <span><strong>Dry Fruits:</strong> Premium grade.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GroceryWave Section */}
      {/* Background is secondary color, Cards are white */}
      <section className="py-20 px-4 md:px-8 bg-grocery-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why <span className="text-grocery-primary">GroceryWave</span>?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<ShieldCheck size={32} />}
              title="Unmatched Quality"
              desc="Sourced from trusted suppliers to guarantee freshness and authenticity."
            />
            <FeatureCard 
              icon={<Smartphone size={32} />}
              title="Innovation"
              desc="Cutting-edge solutions paired with high-quality products for a seamless experience."
            />
            <FeatureCard 
              icon={<Leaf size={32} />}
              title="Sustainability"
              desc="We prioritize eco-friendly practices in our products and processes."
            />
            <FeatureCard 
              icon={<Heart size={32} />}
              title="Customer First"
              desc="Your satisfaction drives everything we do. We build for you."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm bg-gray-50">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Experience the <span className="text-grocery-primary">Advantage</span></h2>
              <p className="text-gray-600 text-base md:text-lg mb-0 leading-relaxed">
                Whether it's a tech-driven solution to elevate your living or premium groceries and dry fruits to enrich your day, GroceryWave is your trusted partner. Together, we can create smarter, healthier, and more fulfilling experiences.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-md">
                <img 
                  src="/lovable-uploads/7a778212-0f6d-4f71-b92f-8a3bd9143186.png" 
                  alt="Award Badge" 
                  className="w-32 md:w-40" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Reusable card component to keep the main code clean
const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-transparent hover:border-grocery-primary">
      <div className="mb-4 text-grocery-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default Home;
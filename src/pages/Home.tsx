
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Promotions from '../components/Promotions';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Working with YourBrand transformed our business processes and increased our efficiency by 45%. Their team is incredibly professional and knowledgeable.",
      author: "Sarah Johnson",
      title: "CEO, TechSolutions Inc."
    },
    {
      id: 2,
      text: "The digital transformation strategy provided by YourBrand helped us navigate our industry challenges and stay ahead of competitors.",
      author: "Mark Williams",
      title: "Operations Director, InnovateCorp"
    },
    {
      id: 3,
      text: "YourBrand delivered an exceptional brand strategy that perfectly captured our vision and resonated with our target audience. Highly recommended!",
      author: "Priya Patel",
      title: "Marketing Head, FutureWorks"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Promotions />
        
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white rounded-lg shadow-lg p-2 max-w-md mx-auto">
                  {/* About image placeholder */}
                  <div className="bg-gray-100 h-80 rounded flex items-center justify-center">
                    <span className="text-gray-500">About Image</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <span className="text-grocery-primary font-medium">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">We're more than just a company</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, YourBrand has been at the forefront of innovation, helping businesses transform and thrive in an increasingly digital world. Our team of experts combines creativity with technical expertise to deliver solutions that drive real results.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-grocery-secondary p-1 rounded-full mr-3 mt-1">
                      <div className="bg-grocery-primary rounded-full w-4 h-4"></div>
                    </div>
                    <p>Over 12 years of industry experience</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-grocery-secondary p-1 rounded-full mr-3 mt-1">
                      <div className="bg-grocery-primary rounded-full w-4 h-4"></div>
                    </div>
                    <p>200+ successful projects delivered</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-grocery-secondary p-1 rounded-full mr-3 mt-1">
                      <div className="bg-grocery-primary rounded-full w-4 h-4"></div>
                    </div>
                    <p>Team of 50+ specialized professionals</p>
                  </li>
                </ul>
                <Link to="/about" className="btn-primary inline-flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-grocery-primary font-medium">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-grocery-secondary p-8 rounded-lg shadow-md hover-scale">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-grocery-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation and discover how our solutions can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-grocery-primary hover:bg-white/90 font-medium px-8 py-3 rounded-md transition-colors">
                Get Started
              </Link>
              <Link to="/case-studies" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

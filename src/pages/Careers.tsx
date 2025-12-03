import React, { useState, useEffect } from 'react';
import { 
  Users, TrendingUp, Globe, Mail, ArrowRight, Briefcase, Heart, Rocket,
  ShoppingBag, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  ChevronRight, Search, Download, FileText, CheckCircle, AlertCircle, Loader2, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InternshipAuth from '@/components/InternshipAuth';

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-grocery-primary to-orange-600 py-24 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>
          
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center justify-center p-2 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Rocket size={16} className="mr-2" /> We are hiring!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Shape the Future of <br className="hidden md:block" />
              <span className="text-orange-100">Commerce Together</span>
            </h1>
            
            <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              At <span className="font-bold text-white">GroceryWave</span>, we foster an environment where innovation thrives, diversity is embraced, and your professional growth is our priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="px-8 py-4 bg-white text-grocery-primary font-bold rounded-xl shadow-lg hover:bg-orange-50 transition-all transform hover:-translate-y-1">
                View Openings
              </a>
              <a href="#internship" className="px-8 py-4 bg-transparent border-2 border-orange-200 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Internship Program
              </a>
            </div>
          </div>
        </section>
        
        {/* Why Join Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why join GroceryWave?</h2>
              <div className="w-20 h-1.5 bg-grocery-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard 
                icon={<Heart size={32} />}
                title="Culture & Values"
                desc="We pride ourselves on a supportive, inclusive culture where teamwork and passion for excellence are at the core of everything we do."
              />
              <BenefitCard 
                icon={<TrendingUp size={32} />}
                title="Professional Growth"
                desc="We invest in our people. From continuous learning opportunities to skill development, we help you advance your career."
              />
              <BenefitCard 
                icon={<Globe size={32} />}
                title="Impactful Work"
                desc="Join a team dedicated to making a real difference. Work on projects that shape the future of modern commerce."
              />
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section id="openings" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-grocery-primary rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to make an impact?</h2>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  If you're ready to be a part of a team that values innovation, diversity, and professional growth, we'd love to hear from you!
                </p>
                
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 pr-6 rounded-full border border-white/10 backdrop-blur-sm">
                  <div className="bg-grocery-primary p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Send your resume to</span>
                    <span className="block text-white font-bold text-lg">admin@grocerywave.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Internship Authentication Section */}
        <section id="internship" className="py-20 px-4 bg-orange-50/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-grocery-primary font-bold tracking-wider text-sm uppercase mb-2 block">Student Portal</span>
              <h2 className="text-3xl font-bold text-slate-900">Internship Authentication</h2>
              <p className="text-slate-500 mt-4 max-w-lg mx-auto">
                Verify your internship status and download your completion certificate securely.
              </p>
            </div>
            
            <InternshipAuth />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper Component for Benefit Cards
const BenefitCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-grocery-primary transition-all duration-300 group">
    <div className="w-16 h-16 bg-orange-50 text-grocery-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-grocery-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Careers;
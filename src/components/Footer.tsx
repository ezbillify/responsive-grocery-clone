import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    // Simulating API call since Supabase is not connected in this environment
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'Thank you for subscribing!' });
      setEmail('');
      
      // Clear success message after 3 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-slate-900 text-slate-200 font-sans">
      {/* Newsletter subscription */}
      <div className="bg-grocery-primary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Join our Community</h3>
              <p className="text-white/90 text-lg">Subscribe for exclusive updates, industry insights, and special offers on premium products.</p>
            </div>
            
            <div className="w-full lg:w-auto min-w-[300px] md:min-w-[400px]">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                <div className="flex-grow relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-white/95 border-0 text-slate-900 placeholder:text-slate-400 h-12 px-4 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-white/50" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  {/* Status Message */}
                  {status.message && (
                    <div className={`absolute -bottom-8 left-0 text-sm font-medium ${status.type === 'error' ? 'text-red-200' : 'text-emerald-200'}`}>
                      {status.message}
                    </div>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 rounded-md font-semibold transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : <>Subscribe <Send size={16} /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">About GroceryWave</h4>
              <p className="text-slate-400 leading-relaxed">
                Your smart grocery partner. We bridge the gap between technology and daily needs, helping you plan better, shop faster, and live healthier.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/products" label="Products" />
              <FooterLink to="/careers" label="Careers" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-grocery-primary/10 p-2 rounded-lg text-grocery-primary mt-1">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-400 leading-relaxed">
                  454SE, 3rd Floor, Nisarga Layout,<br />
                  Jigani, Bangalore - 560083
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-grocery-primary/10 p-2 rounded-lg text-grocery-primary">
                  <Phone size={20} />
                </div>
                <p className="text-slate-400 hover:text-white transition-colors">+91 7892853796</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-grocery-primary/10 p-2 rounded-lg text-grocery-primary">
                  <Mail size={20} />
                </div>
                <p className="text-slate-400 hover:text-white transition-colors">contactus@grocerywave.in</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} GroceryWave Pvt Ltd. All rights reserved.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-grocery-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-grocery-primary transition-colors">Terms of Service</Link>
              </div>
              
              <span className="hidden md:inline w-1 h-1 bg-slate-700 rounded-full"></span>
              
              <span>
                Powered & Maintained by{" "}
                <a 
                  href="https://www.ezbillify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-grocery-primary font-medium hover:text-white transition-colors"
                >
                  Ezbillify
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="bg-slate-800 text-slate-400 p-3 rounded-full hover:bg-grocery-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="group flex items-center text-slate-400 hover:text-grocery-primary transition-colors"
    >
      <ChevronRight size={16} className="mr-2 text-slate-600 group-hover:text-grocery-primary transition-colors" /> 
      {label}
    </Link>
  </li>
);

export default Footer;
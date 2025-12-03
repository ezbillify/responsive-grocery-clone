import React, { useState } from 'react';
import { 
  Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  ChevronRight, Mail, Send, Loader2, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // Reset success message
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      <Header />
      
      {/* Hero / Page Header */}
      <section className="relative bg-gradient-to-br from-grocery-primary to-orange-600 py-20 px-4 overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <nav className="flex justify-center items-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Contact</span>
          </nav>
        </div>
      </section>
      
      <main className="flex-grow -mt-10 relative z-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="w-full md:w-2/5 bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-grocery-primary rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-slate-400 mb-10 leading-relaxed">
                    We'd love to hear from you. Fill out the form or reach us directly.
                  </p>
                  
                  <div className="space-y-8">
                    <ContactInfoItem 
                      icon={<MapPin className="text-grocery-primary" size={24} />}
                      title="Visit Us"
                      content="454SE, 3rd Floor, Nisarga Layout, Jigani, Bangalore - 560083"
                    />
                    <ContactInfoItem 
                      icon={<Phone className="text-grocery-primary" size={24} />}
                      title="Call Us"
                      content="+91 7892853796"
                    />
                    <ContactInfoItem 
                      icon={<Mail className="text-grocery-primary" size={24} />}
                      title="Email Us"
                      content="contactus@grocerywave.in"
                    />
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-800">
                   <p className="text-sm text-slate-500 mb-4">Connect with us on social media</p>
                   <div className="flex gap-4">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="bg-slate-800 p-2 rounded-full hover:bg-grocery-primary hover:text-white transition-colors">
                          <Icon size={18} />
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Your Name</label>
                    <input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-grocery-primary/30 focus:border-grocery-primary transition-all text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Your Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-grocery-primary/30 focus:border-grocery-primary transition-all text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                  <input 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-grocery-primary/30 focus:border-grocery-primary transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-grocery-primary/30 focus:border-grocery-primary transition-all text-slate-800 placeholder:text-slate-400 min-h-[150px] resize-y" 
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || submitted}
                    className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                      submitted 
                        ? 'bg-green-500 text-white shadow-green-200' 
                        : 'bg-grocery-primary hover:bg-orange-700 text-white shadow-orange-200 hover:shadow-orange-300'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" size={20} /> Sending...</>
                    ) : submitted ? (
                      <><CheckCircle size={20} /> Message Sent!</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper Component for Sidebar Items
const ContactInfoItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-slate-800 rounded-xl shrink-0 border border-slate-700">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Contact;
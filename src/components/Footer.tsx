import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <footer className="bg-grocery-dark text-white">
      {/* Newsletter subscription */}
      <div className="bg-grocery-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">Subscribe to our newsletter for the latest industry insights</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="flex" onSubmit={handleSubscribe}>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow py-3 px-4 rounded-l-md focus:outline-none text-gray-900" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="bg-grocery-accent hover:bg-grocery-accent/90 text-white py-3 px-6 rounded-r-md font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About YourBrand</h4>
            <p className="text-gray-400 mb-4">Your smart grocery partner. Plan better, shop faster, waste less.</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">454SE, 3rd Floor, Nisarga
Layout, Jigani, Bangalore - 560083</p>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">+91 7892853796</p>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-grocery-primary flex-shrink-0" size={20} />
                <p className="text-gray-400">contactus@grocerywave.in</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;

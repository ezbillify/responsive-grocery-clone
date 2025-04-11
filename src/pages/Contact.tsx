
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ name: "Contact", url: "/contact" }]} 
      />
      
      <main className="flex-grow">
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Please fill out the form or contact us using the information below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-grocery-primary mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">
                      454SE, 3rd Floor, Nisarga Layout, Jigani, Bangalore - 560083
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-grocery-primary mr-4 flex-shrink-0" />
                    <p className="text-gray-600">+91 7892853796</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-grocery-primary mr-4 flex-shrink-0" />
                    <p className="text-gray-600">contactus@grocerywave.in</p>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" className="bg-grocery-primary hover:bg-grocery-primary/90 w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import InternshipAuth from '@/components/InternshipAuth';

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <PageHeader 
        title="Careers" 
        breadcrumbs={[{ name: "Careers", url: "/careers" }]} 
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
              Join <span className="text-grocery-primary">GroceryWave</span> and Lets Shape the Future <br className="hidden sm:block" />
              Of Commerce Together.
            </h1>
            
            <p className="text-base md:text-lg mb-8 md:mb-12">
              At <span className="text-grocery-primary font-semibold">GroceryWave</span>, we're committed to fostering an environment where innovation 
              thrives, diversity is embraced, and professional growth is encouraged.
            </p>
          </div>
        </section>
        
        {/* Why Join Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="mx-4 md:mx-12 lg:mx-20 bg-grocery-secondary rounded-3xl p-6 md:p-10">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">
                Why join GroceryWave?
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Culture and Values</h3>
                  <p>
                    We pride ourselves on our supportive and inclusive work culture. Teamwork, innovation, and a passion for excellence are at the core of everything we do.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Professional Growth</h3>
                  <p>
                    We believe in investing in our people. We provide opportunities for continuous learning, skill development, and career advancement.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Impactful Work</h3>
                  <p>
                    Join a team dedicated to making a real impact. At GroceryWave, you'll have the chance to work on projects that shape the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-grocery-secondary rounded-3xl p-6 md:p-10 text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Join Us!</h2>
              <p className="text-base md:text-lg mb-3 md:mb-4">
                If you're ready to be a part of a team that values innovation, diversity, and professional growth, we'd love to hear from you!
              </p>
              <p className="text-base md:text-lg font-semibold">admin@grocerywave.in</p>
            </div>
          </div>
        </section>
        
        {/* Internship Authentication Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center">
              Internship Authentication
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
              <p className="text-center text-gray-600 mb-6">
                Enter your reference ID below to verify your internship details and download your certificate.
              </p>
              <InternshipAuth />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;

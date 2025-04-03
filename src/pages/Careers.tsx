
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Join <span className="text-grocery-primary">GroceryWave</span> and Lets Shape the Future <br />
              Of Commerce Together.
            </h1>
            
            <p className="text-lg mb-12">
              At <span className="text-grocery-primary font-semibold">GroceryWave</span>, we're committed to fostering an environment where innovation 
              thrives, diversity is embraced, and professional growth is encouraged.
            </p>
          </div>
        </section>
        
        {/* Why Join Section */}
        <section className="py-16 px-4 bg-grocery-secondary rounded-3xl mx-4 md:mx-12 lg:mx-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why join GroceryWave?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Culture and Values</h3>
                <p>
                  We pride ourselves on our supportive and inclusive work culture. Teamwork, innovation, and a passion for excellence are at the core of everything we do.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                <p>
                  We believe in investing in our people. We provide opportunities for continuous learning, skill development, and career advancement.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Impactful Work</h3>
                <p>
                  Join a team dedicated to making a real impact. At GroceryWave, you'll have the chance to work on projects that shape the future.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-grocery-secondary rounded-3xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us!</h2>
              <p className="text-lg mb-4">
                If you're ready to be a part of a team that values innovation, diversity, and professional growth, we'd love to hear from you!
              </p>
              <p className="text-lg font-semibold">admin@grocerywave.in</p>
            </div>
          </div>
        </section>
        
        {/* Internship Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Internship Authentication
            </h2>
            {/* This section is just a heading in the mockup */}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;

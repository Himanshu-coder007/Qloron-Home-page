import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to Qloron
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Innovative technology solutions for your business growth
        </p>
        <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          Explore Solutions
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
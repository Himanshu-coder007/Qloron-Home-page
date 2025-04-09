import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://thumbs.dreamstime.com/b/high-rise-corporate-office-d-background-room-panoramic-city-view-floor-to-ceiling-windows-sleek-executive-desk-364275033.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for the entire hero section */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Centered content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to Qloron
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white">
              Innovative technology solutions for your business growth
            </p>
            <button 
              className="bg-[#26D6EB] hover:bg-[#1FB8CA] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              style={{
                boxShadow: '0 4px 14px rgba(38, 214, 235, 0.4)'
              }}
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
      
      {/* Optional animated elements with the theme color */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-10 h-10 text-[#26D6EB]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
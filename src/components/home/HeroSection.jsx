import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
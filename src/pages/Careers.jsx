import React from 'react';
import CurrentOpenings from '../components/careers/CurrentOpenings';

const Careers = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-screen/2 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('career.jpg')`
        }}
      >
        {/* Blur Overlay Behind Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-3xl mx-auto text-center shadow-lg z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-black">
              Grow your career with Qloron - Where innovation meets opportunity
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work at Qloron?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Blue Gradient */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
            <p className="text-gray-700">Work on cutting-edge technology solutions that make a real impact.</p>
          </div>

          {/* Card 2 - Green Gradient */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-green-600 text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p className="text-gray-700">Continuous learning and professional development programs.</p>
          </div>

          {/* Card 3 - Purple Gradient */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-purple-600 text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
            <p className="text-gray-700">Collaborative environment that values diversity and creativity.</p>
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <CurrentOpenings />
    </div>
  );
};

export default Careers;

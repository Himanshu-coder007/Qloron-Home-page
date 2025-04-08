import React from 'react';

const Customer = () => {
  const companyLogos = [
    "https://qloron.com/assets/smartCloud-CHgF_HWA.png",
    "https://qloron.com/assets/american-syeN6OOP.png",
    "https://qloron.com/assets/techMahindra-Cwjmez7j.png",
    "https://qloron.com/assets/htc-DgjayR_U.png",
    "https://qloron.com/assets/TATAIQ-0cS15RmV.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJR2kXDKfDvF375gumKuvo-YI4Nc8XAZ39w&s",
    "https://supersourcing.com/blog/wp-content/uploads/2019/08/supersourcing-poster.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTkKWK3O8JrhEATEmbuC8oYD_KLE88svTAw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPiXs0yQYc6Dyb4BUYNfoqadXuTjFHIVCEA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuDOUChkGJZ_iADO3JEU39qhb98IXvVq_yA&s"
  ];

  // Duplicate the logos array for seamless looping
  const logos = [...companyLogos, ...companyLogos, ...companyLogos]; // Triple the logos for faster speed

  return (
    <section className="relative py-16 px-4 bg-gray-50 overflow-hidden mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
          {/* World Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: 'url(https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg)',
              backgroundSize: '100% 100%'
            }}
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Trusted by companies small and large around the globe
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join thousands of satisfied customers who rely on our services worldwide
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 mb-10">
              Testimonials
            </button>
            
            {/* Logo Marquee with Fast Animation */}
            <div className="w-full max-w-5xl overflow-hidden relative h-24">
              <div className="flex items-center h-full w-[300%]"> {/* Increased width */}
                <div className="flex items-center h-full animate-marquee-fast whitespace-nowrap">
                  {logos.map((logo, index) => (
                    <div key={`logo-${index}`} className="inline-flex items-center mx-8 h-full"> {/* Reduced spacing */}
                      <img 
                        src={logo} 
                        alt="Company logo" 
                        className="h-12 object-contain max-w-[160px] opacity-80 hover:opacity-100 transition-opacity duration-150"
                        style={{ filter: 'grayscale(30%)' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fast animation styles */}
      <style jsx>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
          will-change: transform;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Customer;
import React, { useEffect } from 'react'

const Principles = () => {
  useEffect(() => {
    // Enhanced floating animation for background elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const elementPosition = element.offsetTop;
        const distance = scrollPosition - elementPosition;
        
        element.style.transform = `translateY(${distance * 0.1}px) rotate(${distance * 0.02}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating shapes */}
        <div className="floating-element absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-100 opacity-30 blur-xl animate-float1"></div>
        <div className="floating-element absolute top-1/3 right-20 w-24 h-24 rounded-full bg-purple-100 opacity-30 blur-xl animate-float2"></div>
        <div className="floating-element absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-green-100 opacity-30 blur-xl animate-float3"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full bg-yellow-100 opacity-30 blur-xl animate-float4"></div>
        
        {/* Additional small floating shapes */}
        <div className="floating-element absolute top-1/6 left-1/5 w-12 h-12 rounded-lg bg-pink-100 opacity-20 blur-lg animate-float5"></div>
        <div className="floating-element absolute top-2/5 right-1/6 w-14 h-14 rounded-lg bg-indigo-100 opacity-20 blur-lg animate-float6"></div>
        <div className="floating-element absolute bottom-1/6 right-1/4 w-16 h-16 rounded-lg bg-teal-100 opacity-20 blur-lg animate-float7"></div>
        <div className="floating-element absolute top-3/4 left-3/4 w-10 h-10 rounded-lg bg-orange-100 opacity-20 blur-lg animate-float8"></div>
        
        {/* Floating organic shapes */}
        <div className="floating-element absolute top-1/5 right-1/3 w-32 h-32 opacity-20 blur-lg animate-float9">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#93C5FD" d="M44.7,-76.4C58.2,-69.2,69.8,-58.1,79.2,-44.8C88.6,-31.5,95.9,-16,96.5,0.1C97.2,16.2,91.2,32.4,81.5,46.1C71.9,59.8,58.5,71,43.2,77.2C27.9,83.4,10.7,84.6,-6.5,91.1C-23.7,97.6,-47.4,109.4,-63.2,102.6C-79,95.8,-86.9,70.4,-90.1,46.7C-93.3,23,-91.8,1.1,-86.6,-18.5C-81.4,-38.1,-72.5,-55.4,-59.3,-62.8C-46.1,-70.1,-28.6,-67.4,-12.8,-74.6C3.1,-81.7,17.3,-98.6,31.2,-93.6C45.1,-88.6,58.6,-61.7,65.1,-37.9C71.6,-14.1,71.1,6.6,66.3,24.1C61.5,41.6,52.4,55.9,40.6,67.1C28.8,78.3,14.4,86.4,-0.7,87.5C-15.8,88.6,-31.6,82.7,-41.3,71.4C-51,60.1,-54.6,43.4,-63.2,28.3C-71.8,13.2,-85.4,-0.3,-89.9,-16.4C-94.4,-32.5,-89.8,-51.2,-77.1,-58.8C-64.4,-66.4,-43.6,-62.9,-27.9,-68.9C-12.2,-74.8,-1.6,-90.2,10.9,-101.1C23.4,-112,46.8,-118.4,58.3,-109.1C69.8,-99.8,69.4,-74.8,71.2,-51.4C73,-28,77,-6.2,74.3,14.4C71.7,35,62.4,54.4,49.1,65.2C35.8,76,18.9,78.2,2.3,74.9C-14.3,71.6,-28.6,62.8,-39.1,51.6C-49.6,40.4,-56.2,26.8,-65.5,11.8C-74.9,-3.2,-87,-19.6,-85.1,-33.3C-83.2,-47.1,-67.3,-58.3,-51.4,-63.9C-35.6,-69.6,-19.8,-69.8,-2.5,-66.3C14.8,-62.8,29.6,-55.6,44.7,-48.4C59.8,-41.2,75.2,-34.1,83.1,-22.5C91,-10.9,91.4,5.2,85.8,19.1C80.2,33,68.6,44.6,55.7,56.3C42.8,68,28.6,79.8,13.9,85.5C-0.8,91.2,-15.9,90.8,-27.2,83.5C-38.5,76.2,-45.9,62,-54.2,48.3C-62.6,34.6,-71.9,21.4,-77.9,6.3C-83.9,-8.8,-86.6,-25.8,-79.2,-39.1C-71.8,-52.4,-54.3,-62,-38.4,-70.3C-22.5,-78.6,-8.3,-85.6,5.9,-93.5C20.1,-101.4,40.1,-110.2,53.2,-103.1C66.3,-96,72.4,-73,76.3,-50.8C80.2,-28.6,81.9,-7.2,77.6,12.2C73.3,31.6,63,49.1,49.3,60.9C35.6,72.7,18.8,78.9,2.7,75.1C-13.4,71.3,-26.8,57.6,-36.4,44.9C-46,32.2,-51.8,20.5,-58.9,6.2C-66,-8.1,-74.4,-25,-72.4,-40.1C-70.4,-55.2,-58,-68.5,-43.8,-75.8C-29.6,-83.1,-13.6,-84.4,1.8,-87.2C17.2,-90,34.3,-94.3,44.7,-76.4Z" />
          </svg>
        </div>
        
        <div className="floating-element absolute bottom-1/5 left-1/5 w-40 h-40 opacity-20 blur-lg animate-float10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FDE68A" d="M42.6,-71.1C55.2,-63.9,65.5,-52.8,74.8,-39.7C84.1,-26.6,92.4,-11.3,92.6,0.2C92.9,11.7,85.1,23.4,76.1,35.7C67.1,48,56.9,60.9,43.3,68.9C29.7,76.9,12.8,80.1,-2.6,83.7C-18,87.3,-36,91.4,-49.1,84.8C-62.3,78.2,-70.6,60.9,-77.3,43.4C-84,25.9,-89.2,8.2,-88.3,-9.6C-87.5,-27.4,-80.6,-45.3,-68.1,-52.8C-55.6,-60.3,-37.5,-57.4,-23.1,-63.6C-8.7,-69.8,2.1,-85.1,15.2,-89.9C28.3,-94.7,43.7,-89,55.3,-78.9C66.9,-68.8,74.7,-54.3,79.8,-39.1C84.9,-23.9,87.3,-8,86.3,7.9C85.3,23.8,80.9,39.6,71.7,52.7C62.5,65.8,48.5,76.2,33.8,81.9C19.1,87.6,3.7,88.6,-10.9,85.3C-25.5,82,-50.9,74.4,-63.9,61.3C-76.9,48.2,-77.4,29.6,-80.7,11.4C-84,-6.8,-90,-24.6,-85.5,-39.5C-81,-54.4,-66,-66.4,-49.7,-71.9C-33.4,-77.4,-15.7,-76.4,0.7,-77.5C17.1,-78.6,34.2,-81.8,42.6,-71.1Z" />
          </svg>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The foundation of everything we do
            </p>
          </div>
      
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Objective Card */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-white p-6 h-full flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6 w-24 h-24">
                  <img 
                    src="https://qloron.com/assets/our-objective-hD1G4Syz.svg" 
                    alt="Our Objective" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Objective</h3>
                <p className="text-gray-600">
                  Our objective is to become one of the leading developers in most competitive market.
                </p>
              </div>
            </div>
      
            {/* Vision Card */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-white p-6 h-full flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6 w-24 h-24">
                  <img 
                    src="https://qloron.com/assets/our-vision-CzWvZOyK.svg" 
                    alt="Our Vision" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  Developing individuals and organizations through unlocking potential and transforming lives.
                </p>
              </div>
            </div>
      
            {/* Goal Card */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-white p-6 h-full flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6 w-24 h-24">
                  <img 
                    src="https://qloron.com/assets/our-goal-DA6TBtR3.svg" 
                    alt="Our Goal" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Goal</h3>
                <p className="text-gray-600">
                  Client satisfaction is the ultimate goal of our company.
                </p>
              </div>
            </div>
      
            {/* Mission Card */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-white p-6 h-full flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6 w-24 h-24">
                  <img 
                    src="https://qloron.com/assets/our-mission-C_qXt_f_.svg" 
                    alt="Our Mission" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  Our objective is to become one of the leading developers in most competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(15px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(25px) translateX(-20px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(-15px) rotate(3deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(30px) translateX(20px) rotate(-3deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-15px) translateX(10px) scale(1.1); }
        }
        @keyframes float6 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(20px) translateX(-10px) scale(0.9); }
        }
        @keyframes float7 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-20px) translateX(-5px) scale(1.05); }
        }
        @keyframes float8 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(15px) translateX(5px) scale(0.95); }
        }
        @keyframes float9 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-40px) translateX(10px) rotate(10deg); }
        }
        @keyframes float10 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(40px) translateX(-10px) rotate(-10deg); }
        }
        
        .animate-float1 { animation: float1 12s ease-in-out infinite; }
        .animate-float2 { animation: float2 14s ease-in-out infinite; }
        .animate-float3 { animation: float3 16s ease-in-out infinite; }
        .animate-float4 { animation: float4 13s ease-in-out infinite; }
        .animate-float5 { animation: float5 8s ease-in-out infinite; }
        .animate-float6 { animation: float6 10s ease-in-out infinite; }
        .animate-float7 { animation: float7 9s ease-in-out infinite; }
        .animate-float8 { animation: float8 11s ease-in-out infinite; }
        .animate-float9 { animation: float9 18s ease-in-out infinite; }
        .animate-float10 { animation: float10 20s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default Principles
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, isActive }) => {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${service.bgColor} text-white`}>
      <div className="h-full w-full flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 md:p-12">
            <div className="text-6xl md:text-8xl bg-white/20 p-6 rounded-full backdrop-blur-sm flex-shrink-0">
              {service.icon}
            </div>
            <div className="text-center md:text-left max-w-2xl">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="mb-8 text-lg md:text-xl text-white/90">
                {service.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link 
                  to={service.link}
                  className="inline-block bg-white hover:bg-white/90 text-cyan-600 px-8 py-3 rounded-full transition-colors font-medium text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
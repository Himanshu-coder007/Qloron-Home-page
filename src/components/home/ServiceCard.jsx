import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, isActive }) => {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 flex items-center p-8 md:p-12 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-6xl md:text-8xl">{service.icon}</div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl">
            {service.description}
          </p>
          <Link 
            to={service.link}
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
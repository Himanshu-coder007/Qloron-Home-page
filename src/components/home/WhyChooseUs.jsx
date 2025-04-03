import React from 'react';
import { FaUserTie, FaLaptopCode, FaHeadset } from 'react-icons/fa';

const WhyChooseUsCard = ({ title, description, icon, bgClass }) => {
  return (
    <div className={`p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${bgClass} hover:-translate-y-1`}>
      <div className="text-white text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white text-opacity-90">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our professionals deliver top-notch solutions tailored to your needs.",
      icon: <FaUserTie />,
      bgClass: "bg-gradient-to-br from-amber-500 to-rose-600" // Changed from blue to coral/orange
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies to build future-proof solutions.",
      icon: <FaLaptopCode />,
      bgClass: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your business runs smoothly.",
      icon: <FaHeadset />,
      bgClass: "bg-gradient-to-br from-teal-500 to-teal-700"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide exceptional services that set us apart from the competition
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <WhyChooseUsCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgClass={feature.bgClass}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
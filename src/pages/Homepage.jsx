import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSlider from '../components/home/ServicesSlider';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WhyWeStandOut from '../components/home/Whywestandout';
import GetInTouch from '../components/home/GetInTouch';
import Customer from '../components/home/Customer';

const Homepage = () => {
  const services = [
    {
      title: "Higher Resources",
      description: "Scalable solutions for your growing business needs",
      link: "/services/higher-resources",
      icon: "📈",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      title: "Business Technology Platform",
      description: "Integrated platform for all your business operations",
      link: "/services/business-platform",
      icon: "🖥️",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Enterprise ERP",
      description: "Comprehensive enterprise resource planning solutions",
      link: "/services/erp",
      icon: "🏢",
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-700"
    },
    {
      title: "CRM & CX",
      description: "Customer relationship management and experience solutions",
      link: "/services/crm",
      icon: "🤝",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Web Development",
      description: "Custom web applications tailored to your needs",
      link: "/services/web-development",
      icon: "🌐",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      title: "App Development",
      description: "Mobile applications for iOS and Android platforms",
      link: "/services/app-development",
      icon: "📱",
      bgColor: "bg-gradient-to-r from-yellow-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <ServicesSlider services={services} />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* New Customer Component */}
      <Customer />

      {/* Why We Stand Out Section */}
      <WhyWeStandOut />
      
      {/* Get In Touch Section */}
      <section className="py-16 px-4">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Homepage;
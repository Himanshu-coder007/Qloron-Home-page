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
      icon: "📈"
    },
    {
      title: "Business Technology Platform",
      description: "Integrated platform for all your business operations",
      link: "/services/business-platform",
      icon: "🖥️"
    },
    {
      title: "Enterprise ERP",
      description: "Comprehensive enterprise resource planning solutions",
      link: "/services/erp",
      icon: "🏢"
    },
    {
      title: "CRM & CX",
      description: "Customer relationship management and experience solutions",
      link: "/services/crm",
      icon: "🤝"
    },
    {
      title: "Web Development",
      description: "Custom web applications tailored to your needs",
      link: "/services/web-development",
      icon: "🌐"
    },
    {
      title: "App Development",
      description: "Mobile applications for iOS and Android platforms",
      link: "/services/app-development",
      icon: "📱"
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
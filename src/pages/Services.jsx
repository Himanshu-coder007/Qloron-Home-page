import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Higher Resources",
      description: "If you are looking to Hire Dedicated Resources or a Team, you are at right place. Yes, Stargaze Marketing Solutions is the right choice for your requirements.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    },
    {
      title: "Business Technology Platform",
      description: "Announcing SAP Build Code, generative AI-based code development with Joule copilot, optimized for Java and JavaScript application development.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive business management software to streamline operations across finance, HR, manufacturing and supply chain.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
    },
    {
      title: "CRM & Customer Experience (CX)",
      description: "Intelligent customer experience solutions from SAP help you connect customer data, improve loyalty, and grow your business.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Spend Management",
      description: "In the rapidly evolving landscape of the software industry, effective spend management is crucial for maintaining financial health and driving sustained growth. Qloron Technology introduces a comprehensive Spend Management Software designed to empower your software company with financial intelligence, control, and efficiency.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Human Capital Management",
      description: "In the ever-evolving landscape of the modern workplace, the true strength of any organization lies in its people. At Qloron Technology, we recognize the pivotal role of human capital in driving success. Our Human Capital Management (HCM) solutions are crafted to empower your workforce, streamline HR processes, and foster a culture of excellence.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    },
    {
      title: "Financial Support",
      description: "In the fast-paced world of technology, effective financial management is crucial for the success and sustainability of your software company. Qloron Technology's Financial Management Software is designed to empower your business with tools and insights to navigate the complexities of finance, ensuring not just survival, but prosperity.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80",
    },
    {
      title: "Web Hosting",
      description: "Reliable, secure and scalable hosting solutions for websites of all sizes.",
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
    },
    {
      title: "Web Development",
      description: "Custom website development with modern frameworks and responsive design.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "App Development",
      description: "Being a leading mobile app development company, we have expertise in developing mobile applications for B2B, B2C & B2E environments. The span of our multi-platform mobile apps services fits everyone from large enterprises, small & medium-sized businesses, and government sectors.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Digital Marketing",
      description: "Need the best digital marketing agency to build up your brand's credibility? Then Qloron Technologies can be your solution. We offer a wide range of price-sensitive and quality-oriented digital marketing services to help clients dominate the digital space. If you feel your business and brand need the expertise of a digital marketing service provider in India connect with Qloron Technologies. We are the leading e-commerce marketing agency in India to help brands generate high-quality leads and improve their conversion rates.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Data Export",
      description: "Secure data migration, transformation and export services for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-center text-4xl font-bold mb-12 text-[#035B79] relative">
            Services We Provide
            <span className="block w-20 h-1 bg-[#0A9CAD] mx-auto mt-2"></span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              variants={item}
            >
              <motion.div 
                className="md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </motion.div>
              <div className="md:w-1/2">
                <motion.h3 
                  className="text-2xl font-bold text-[#046682] mb-4"
                  whileHover={{ color: "#0A9CAD" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                <motion.button 
                  className="bg-[#0A9CAD] hover:bg-[#046682] text-white px-6 py-2 rounded-lg transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(10, 156, 173, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
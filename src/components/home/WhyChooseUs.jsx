import React from 'react';
import { FaUserTie, FaLaptopCode, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUsCard = ({ title, description, icon, bgClass, animationVariants, custom }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      custom={custom}
      className={`p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${bgClass} hover:-translate-y-1`}
    >
      <div className="text-white text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white text-opacity-90">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our professionals deliver top-notch solutions tailored to your needs.",
      icon: <FaUserTie />,
      bgClass: "bg-gradient-to-br from-[#26D6EB] to-[#2a7dec]"
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies to build future-proof solutions.",
      icon: <FaLaptopCode />,
      bgClass: "bg-gradient-to-br from-[#26D6EB] to-[#2a7dec]"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your business runs smoothly.",
      icon: <FaHeadset />,
      bgClass: "bg-gradient-to-br from-[#26D6EB] to-[#2a7dec]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      }
    }
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 30 + (i * 20)
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    })
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 max-w-7xl mx-auto bg-gray-50"
    >
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We provide exceptional services that set us apart from the competition
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <WhyChooseUsCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgClass={feature.bgClass}
            animationVariants={cardVariants}
            custom={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
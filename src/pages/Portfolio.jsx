import React, { useState } from 'react';
import projects from './projects.json'; // Import the projects data
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const navigate = useNavigate();
  
  // Determine which projects to display based on state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  // Reviews data (all male reviewers)
  const reviews = [
    {
      id: 1,
      name: "Robert Johnson",
      designation: "CEO, TechSolutions Inc.",
      content: "Qloron Technology delivered exceptional results for our mobile app project. Their team was professional, met all deadlines, and the final product exceeded our expectations. We've seen a 40% increase in user engagement since launch.",
      photo: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "CTO, Global Innovations",
      content: "Working with Qloron was a game-changer for our business. Their custom software solution streamlined our operations and saved us thousands in operational costs. Their technical expertise is unmatched in the industry.",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "David Rodriguez",
      designation: "Director of Digital, Bright Marketing",
      content: "The web platform Qloron developed for us has been instrumental in scaling our business. Their attention to detail and user experience focus resulted in a product our clients love. Highly recommend their services!",
      photo: "https://randomuser.me/api/portraits/men/68.jpg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div>
      <section className="bg-[linear-gradient(to_top,rgba(20,100,160,0.5),rgba(38,214,235,0.2),rgba(38,214,235,0)),url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-sm p-8 rounded-xl text-white text-center max-w-2xl"
        >
          <h1 className="text-4xl font-bold mb-4">Qloron Technology</h1>
          <h2 className="text-2xl font-semibold mb-4">Transforming Ideas into Reality</h2>
          <p className="text-lg">
            Welcome to our software company Projects Page! We are dedicated to providing top-notch solutions for your business needs. With our expertise, innovative services, and talented team, we guarantee exceptional results.
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img 
              src="https://qloron.com/assets/overview-D3qsaCQB.svg" 
              alt="Company Overview" 
              className="w-full max-h-[400px] object-contain"  
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#26D6EB]">Overview of the Company</h2>
            <p className="text-lg mb-4">
              We are a <span className="text-black font-semibold">tech-savvy company</span> specializing in <span className="text-black font-semibold">custom software development</span>. Our goal is to transform complex ideas into <span className="text-black font-semibold">user friendly solutions</span> that drive success for our clients.
            </p>
            <p className="text-lg">
              Through <span className="text-black font-semibold">strategic planning</span> and <span className="text-black font-semibold">cutting-edge technologies</span>, we turn visions into reality.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Our Projects Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#0A9CAD]">Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions that have helped businesses grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#26D6EB]/20 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#26D6EB]">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center">
                    <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-[#26D6EB] hover:bg-[#20b8cc] text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
            </button>
          </div>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img 
              src="https://qloron.com/assets/contact-now-DcQkaopv.svg" 
              alt="Contact Us" 
              className="w-full max-h-[400px] object-contain"  
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#26D6EB]">Request a Quote Now!</h2>
            <p className="text-lg mb-6">
              Contact us now to discuss your project requirements and receive a personalized quote. Let's turn your ideas into reality together!
            </p>
            <button className="bg-[#26D6EB] hover:bg-[#20b8cc] text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300" onClick={() => navigate('/contacts')}>
              Contact Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#0CA4B3]">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                <div className="md:w-1/3 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#26D6EB] shadow-lg"
                    />
                  </motion.div>
                  <div className="mt-4 text-center">
                    <h4 className="text-xl font-bold text-gray-800">{review.name}</h4>
                    <p className="text-gray-600">{review.designation}</p>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="md:w-2/3 bg-white p-8 rounded-xl shadow-lg relative"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-4 left-6 text-5xl text-[#26D6EB]"
                  >
                    "
                  </motion.div>
                  <p className="text-lg text-gray-700 mt-6">{review.content}</p>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute -bottom-4 right-6 text-5xl text-[#26D6EB]"
                  >
                    "
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
import React, { useState } from 'react';
import projects from './projects.json'; // Import the projects data
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const navigate = useNavigate();
  
  // Determine which projects to display based on state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div>
      <section className="bg-[linear-gradient(to_top,rgba(20,100,160,0.5),rgba(38,214,235,0.2),rgba(38,214,235,0)),url('portfolio.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center px-4">
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-xl text-white text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Qloron Technology</h1>
          <h2 className="text-2xl font-semibold mb-4">Transforming Ideas into Reality</h2>
          <p className="text-lg">
            Welcome to our software company portfolio! We are dedicated to providing top-notch solutions for your business needs. With our expertise, innovative services, and talented team, we guarantee exceptional results.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://qloron.com/assets/overview-D3qsaCQB.svg" 
              alt="Company Overview" 
              className="w-full max-h-[400px] object-contain"  
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#26D6EB]">Overview of the Company</h2>
            <p className="text-lg mb-4">
              We are a <span className="text-black font-semibold">tech-savvy company</span> specializing in <span className="text-black font-semibold">custom software development</span>. Our goal is to transform complex ideas into <span className="text-black font-semibold">user friendly solutions</span> that drive success for our clients.
            </p>
            <p className="text-lg">
              Through <span className="text-black font-semibold">strategic planning</span> and <span className="text-black font-semibold">cutting-edge technologies</span>, we turn visions into reality.
            </p>
          </div>
        </div>
      </section>

      

      {/* Our Projects Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
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
          <div className="md:w-1/2">
            <img 
              src="https://qloron.com/assets/contact-now-DcQkaopv.svg" 
              alt="Contact Us" 
              className="w-full max-h-[400px] object-contain"  
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#26D6EB]">Request a Quote Now!</h2>
            <p className="text-lg mb-6">
              Contact us now to discuss your project requirements and receive a personalized quote. Let's turn your ideas into reality together!
            </p>
            <button className="bg-[#26D6EB] hover:bg-[#20b8cc] text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300" onClick={() => navigate('/contacts')}>
              Contact Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
import React from 'react';
import { FiSearch, FiBox, FiFileText, FiAlertCircle, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';

const Support = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-30 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Get Help about our products, basic knowledge and more
          </h1>
          
          <div className="flex max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <input 
              type="text" 
              placeholder="Search docs, reports etc..." 
              className="w-full py-2 px-4 focus:outline-none text-gray-700"
            />
            <button className="px-4 flex items-center justify-center text-gray-500 hover:text-blue-600">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Help Desk Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#12B1BE' }}>
            Help Desk
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Products Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 mr-4">
                    <FiBox className="h-6 w-6" style={{ color: '#12B1BE' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#12B1BE' }}>Products</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Find information about our products features, specifications, and how to get the most out of them.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Learn more →</a>
              </div>
            </div>
            
            {/* Documentation Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 mr-4">
                    <FiFileText className="h-6 w-6" style={{ color: '#12B1BE' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#12B1BE' }}>Documentation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Access comprehensive guides, manuals, and technical documentation for all our solutions.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Explore docs →</a>
              </div>
            </div>
            
            {/* Issue Reporting Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 mr-4">
                    <FiAlertCircle className="h-6 w-6" style={{ color: '#12B1BE' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#12B1BE' }}>Report an Issue</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Submit and track technical issues, bugs, or problems you're experiencing with our products.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Report now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Offerings Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#12B1BE' }}>
            Explore our offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Power your success */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <FiZap className="h-8 w-8" style={{ color: '#12B1BE' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#12B1BE' }}>Power your success</h3>
              <p className="text-gray-600">
                with guidance and self-service content
              </p>
            </div>
            
            {/* Accelerate your path */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <FiTrendingUp className="h-8 w-8" style={{ color: '#12B1BE' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#12B1BE' }}>Accelerate your path</h3>
              <p className="text-gray-600">
                with personalized success plans and services
              </p>
            </div>
            
            {/* Drive transformation */}
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <FiUsers className="h-8 w-8" style={{ color: '#12B1BE' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#12B1BE' }}>Drive company-wide transformation</h3>
              <p className="text-gray-600">
                with a tailored engagement and dedication team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Popular Offerings Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#12B1BE' }}>
            Browse our most popular offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Foundational Support */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#12B1BE' }}>Foundational Support</h3>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Qloron Enterprise Support</h4>
                <p className="text-gray-600 mb-4">
                  Ensure your cloud solutions deliver immediate and long-term results with this foundational offering that is available with every Qloron cloud solution.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Learn more →</a>
              </div>
            </div>
            
            {/* Premium Engagement */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#12B1BE' }}>Premium Engagement</h3>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Qloron Active Attention</h4>
                <p className="text-gray-600 mb-4">
                  Fast-track the value from your cloud investment with clear plans, tailored recommendations, regular check-ins, and more.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Learn more →</a>
              </div>
            </div>
            
            {/* Premium Engagement 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#12B1BE' }}>Premium Engagement</h3>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Qloron Active Attention</h4>
                <p className="text-gray-600 mb-4">
                  Assess your current innovation plan with our global team of experts and use proven industry solutions to make your vision a reality.
                </p>
                <a href="#" className="text-blue-500 hover:underline font-medium">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Success Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#12B1BE' }}>Your success is our priority</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We put your success at the centre of everything we do with services and support that provide a holistic experience across your organisation's unique digital journey – right from the start and for years to come.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image on left */}
            <div className="md:w-1/2">
              <img 
                src="https://qloron.com/assets/services-upscaled-DlR3gD-o.svg" 
                alt="Success illustration"
                className="w-full h-auto"
              />
            </div>
            
            {/* Text on right */}
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg mb-6">
                Your success is our goal, so we place the outcomes you need to deliver at the center of everything we do – designing solutions that unlock the power of your Qloron investment.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're deploying something new, accelerating to the cloud, or transforming how your business works, our portfolio services and support offerings helps create the right results, so you can sustain success. Let's work together to continually drive the successful business outcomes and value that matter most to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
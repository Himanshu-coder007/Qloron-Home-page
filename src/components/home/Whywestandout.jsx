import React from 'react';

const WhyWeStandOut = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why We Stand Out From Others</h2>
        <h3 className="text-2xl text-green-600 font-semibold">HOW WE WORK</h3>
      </div>

      <div className="relative">
        {/* Tree trunk - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>

        {/* Branches - alternating left and right on desktop, stacked on mobile */}
        <div className="space-y-12 md:space-y-24">
          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-500 to-green-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-green-700 font-bold text-xl mr-4 shadow-md">1</div>
                <h4 className="text-xl font-bold text-white">Expertise & Experience</h4>
              </div>
              <p className="text-white">
                We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-500 to-blue-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 font-bold text-xl mr-4 shadow-md">2</div>
                <h4 className="text-xl font-bold text-white">Customized Solutions</h4>
              </div>
              <p className="text-white">
                We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 3 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-500 to-purple-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-purple-700 font-bold text-xl mr-4 shadow-md">3</div>
                <h4 className="text-xl font-bold text-white">Skilled Team</h4>
              </div>
              <p className="text-white">
                Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 4 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-red-500 to-red-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-red-700 font-bold text-xl mr-4 shadow-md">4</div>
                <h4 className="text-xl font-bold text-white">Quality & Precision</h4>
              </div>
              <p className="text-white">
                We have strong focus on delivering high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance, functionality, and security.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 5 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-yellow-500 to-yellow-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-yellow-700 font-bold text-xl mr-4 shadow-md">5</div>
                <h4 className="text-xl font-bold text-white">Timely Delivery</h4>
              </div>
              <p className="text-white">
                We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 6 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-indigo-500 to-indigo-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-indigo-700 font-bold text-xl mr-4 shadow-md">6</div>
                <h4 className="text-xl font-bold text-white">Competitive Pricing</h4>
              </div>
              <p className="text-white">
                We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 7 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-pink-500 to-pink-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-pink-700 font-bold text-xl mr-4 shadow-md">7</div>
                <h4 className="text-xl font-bold text-white">Client-Centric Approach</h4>
              </div>
              <p className="text-white">
                Your satisfaction is our priority. We tailor our services to your specific needs and maintain open communication throughout the project lifecycle.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 8 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-teal-500 to-teal-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-700 font-bold text-xl mr-4 shadow-md">8</div>
                <h4 className="text-xl font-bold text-white">Long-Term Partnership</h4>
              </div>
              <p className="text-white">
                We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 9 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-orange-500 to-orange-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-700 font-bold text-xl mr-4 shadow-md">9</div>
                <h4 className="text-xl font-bold text-white">Positive Track Record</h4>
              </div>
              <p className="text-white">
                Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          {/* Item 10 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-cyan-500 to-cyan-700">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-cyan-700 font-bold text-xl mr-4 shadow-md">10</div>
                <h4 className="text-xl font-bold text-white">Project Completion</h4>
              </div>
              <p className="text-white">
                The project is completed and we give it to our customer. We also ask for customer's feedback to continuously improve our services.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
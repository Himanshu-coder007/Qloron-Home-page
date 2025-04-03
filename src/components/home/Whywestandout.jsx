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
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-amber-800"></div>

        {/* Branches - alternating left and right on desktop, stacked on mobile */}
        <div className="space-y-12 md:space-y-24">
          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">1</div>
                <h4 className="text-xl font-bold text-gray-800">Expertise & Experience</h4>
              </div>
              <p className="text-gray-600">
                We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">2</div>
                <h4 className="text-xl font-bold text-gray-800">Customized Solutions</h4>
              </div>
              <p className="text-gray-600">
                We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 3 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">3</div>
                <h4 className="text-xl font-bold text-gray-800">Skilled Team</h4>
              </div>
              <p className="text-gray-600">
                Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 4 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">4</div>
                <h4 className="text-xl font-bold text-gray-800">Quality & Precision</h4>
              </div>
              <p className="text-gray-600">
                We have strong focus on delivering high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance, functionality, and security.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 5 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">5</div>
                <h4 className="text-xl font-bold text-gray-800">Timely Delivery</h4>
              </div>
              <p className="text-gray-600">
                We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 6 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">6</div>
                <h4 className="text-xl font-bold text-gray-800">Competitive Pricing</h4>
              </div>
              <p className="text-gray-600">
                We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 7 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">7</div>
                <h4 className="text-xl font-bold text-gray-800">Client-Centric Approach</h4>
              </div>
              <p className="text-gray-600">
                Your satisfaction is our priority. We tailor our services to your specific needs and maintain open communication throughout the project lifecycle.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 8 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">8</div>
                <h4 className="text-xl font-bold text-gray-800">Long-Term Partnership</h4>
              </div>
              <p className="text-gray-600">
                We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 9 */}
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <div className="w-full md:w-[45%] md:pr-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">9</div>
                <h4 className="text-xl font-bold text-gray-800">Positive Track Record</h4>
              </div>
              <p className="text-gray-600">
                Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance.
              </p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>

          {/* Item 10 */}
          <div className="relative flex flex-col md:flex-row md:justify-start">
            <div className="w-full md:w-[45%] md:pl-24">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl mr-4">10</div>
                <h4 className="text-xl font-bold text-gray-800">Project Completion</h4>
              </div>
              <p className="text-gray-600">
                The project is completed and we give it to our customer. We also ask for customer's feedback to continuously improve our services.
              </p>
            </div>
            <div className="hidden md:block absolute right-1/2 top-6 h-1 w-24 bg-amber-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
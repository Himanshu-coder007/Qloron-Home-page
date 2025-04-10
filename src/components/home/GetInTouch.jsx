import React, { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Left Side - Image (smaller) */}
        <div className="md:w-2/5 bg-[#068FA3] flex items-center justify-center p-4">
          <img 
            src="https://account.asus.com/img/login_img02.png" 
            alt="Contact illustration"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        {/* Right Side - Form (compact) */}
        <div className="md:w-3/5 p-6 md:p-8 bg-black text-white">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Have questions or want to discuss a project? Fill out the form and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#26D6EB] text-white font-medium py-2 px-4 rounded-md transition duration-300 text-sm cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
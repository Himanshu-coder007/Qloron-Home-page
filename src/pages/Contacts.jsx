import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
    });
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Text content */}
        <div className="md:w-1/2 md:ml-12">
          <h1 className="text-3xl font-bold mb-6">Talk to Our <span className="text-blue-600">Experts</span></h1>
          <p className="text-lg mb-8">
            <span className="font-bold">Qloron Technology</span> development team will contact you within <span className="font-bold text-blue-600">48 hours</span>.
          </p>
          
          {/* Form fields */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="user_name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email"
                name="user_email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                id="company"
                name="company_name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your company name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone_number" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </form>
        </div>
        
        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src='https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--customer-support-service-app-online-help-phone-application-web-pack-business-illustrations-3738445.png' 
            alt="Contact us illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Contacts;
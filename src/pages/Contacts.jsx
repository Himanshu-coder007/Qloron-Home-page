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
      {/* Full-width top image */}
      <div className="w-full mb-8">
        <img 
          src="contact.jpg" 
          alt="Contact us header"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '400px' }}
        />
      </div>

      {/* Form content */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
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

      {/* Other Ways to Connect Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Connect</h2>
        
        {/* Contact Information - Plain Text Version */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="text-lg mb-4">
            Get all your queries answered. Leave a message at the below numbers or drop a mail to 
            <span className="font-bold text-blue-600"> info@qloron.com</span>
          </p>
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700"><span className="font-bold">India:</span> +91 7020038436</span>
            </div>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 font-bold">info@qloron.com</span>
            </div>
          </div>
        </div>

        {/* Location Card - Centered with image on left and text on right */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row">
            {/* Image on left */}
            <div className="md:w-1/2">
              <img 
                src="https://i.pinimg.com/736x/93/32/f8/9332f8a07ae4551efeec53325f0917c6.jpg" 
                alt="Hyderabad city"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text on right */}
            <div className="md:w-1/2 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Our Company Location</h3>
              </div>
              <address className="text-gray-600 not-italic mb-6">
                <span className="font-bold">Qloron Pvt Ltd</span>, 7th floor, <span className="font-bold">Innov8 coworking space</span>,<br />
                <span className="font-bold">Pranava Business park</span>, Kothaguda,<br />
                <span className="font-bold">Hyderabad</span>, Telangana 500084
              </address>
              <a 
                href="https://www.google.co.in/maps/place/Qloron+Technology/@19.2143779,76.0962879,7z/data=!4m7!3m6!1s0x3bcb91612ab4721d:0x5b9ca42836fc8c3f!8m2!3d17.4346327!4d78.3881142!15sCg5xbG9yb24gcHZ0IGx0ZJIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbuABAA!16s%2Fg%2F11l6vbydqc?entry=tts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
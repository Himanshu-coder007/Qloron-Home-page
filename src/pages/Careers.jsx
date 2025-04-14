import React from 'react';
import CurrentOpenings from '../components/careers/CurrentOpenings';

const Careers = () => {
  const handleTrackApplication = () => {
    window.location.href = 'http://localhost:5173/applications';
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-screen/2 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('career.jpg')`
        }}
      >
        {/* Blur Overlay Behind Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-3xl mx-auto text-center shadow-lg z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-[#017289] mb-4">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-[#046481]">
              Grow your career with Qloron - Where innovation meets opportunity
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#017289]">Why Work at Qloron?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#0FADBC] text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-[#017289]">Innovative Projects</h3>
            <p className="text-gray-700">Work on cutting-edge technology solutions that make a real impact.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#0FADBC] text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2 text-[#017289]">Growth Opportunities</h3>
            <p className="text-gray-700">Continuous learning and professional development programs.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-[#0FADBC] text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2 text-[#017289]">Great Culture</h3>
            <p className="text-gray-700">Collaborative environment that values diversity and creativity.</p>
          </div>
        </div>
      </div>

      {/* Current Openings Section */}
      <CurrentOpenings />

      {/* Track Your Application Section */}
      <div className="bg-[#F8FAFC] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#017289]">Track Your Application</h2>
            <p className="text-xl text-gray-700 mb-8">
              Already applied? Check the status of your application and stay updated on the hiring process.
            </p>
            <button
              onClick={handleTrackApplication}
              className="bg-[#0FADBC] hover:bg-[#0D9CAA] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Track Application
            </button>
          </div>
        </div>
      </div>

      {/* Application Steps Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#017289]">How to Apply</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative">
            <div className="w-20 h-20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                <g clipPath="url(#clip0_822_7553)">
                  <path d="M43.75 25H14.5833C14.0308 25 13.5009 24.7805 13.1102 24.3898C12.7195 23.9991 12.5 23.4692 12.5 22.9167V14.5833C12.5 14.0308 12.7195 13.5009 13.1102 13.1102C13.5009 12.7195 14.0308 12.5 14.5833 12.5H43.75C44.3025 12.5 44.8324 12.7195 45.2231 13.1102C45.6138 13.5009 45.8333 14.0308 45.8333 14.5833V22.9167C45.8333 23.4692 45.6138 23.9991 45.2231 24.3898C44.8324 24.7805 44.3025 25 43.75 25ZM16.6667 20.8333H41.6667V16.5417H16.6667V20.8333Z" fill="#0FADBC"/>
                  <path d="M43.75 29.3335H14.5833C14.0308 29.3335 13.5009 29.553 13.1102 29.9437C12.7195 30.3344 12.5 30.8643 12.5 31.4168V39.5835C12.5 40.136 12.7195 40.6659 13.1102 41.0566C13.5009 41.4473 14.0308 41.6668 14.5833 41.6668H38.25L45.8333 33.9585V31.4168C45.8333 30.8643 45.6138 30.3344 45.2231 29.9437C44.8324 29.553 44.3025 29.3335 43.75 29.3335ZM41.6667 37.5002H16.6667V33.3335H41.6667V37.5002Z" fill="#0FADBC"/>
                  <path d="M23.042 65.6457V65.5207L23.7087 62.6248H8.33366V8.33317H50.0003V29.6873L54.167 25.7498V6.24984C54.167 5.6973 53.9475 5.1674 53.5568 4.7767C53.1661 4.386 52.6362 4.1665 52.0837 4.1665H6.25033C5.69779 4.1665 5.16789 4.386 4.77719 4.7767C4.38649 5.1674 4.16699 5.6973 4.16699 6.24984V64.5832C4.16699 65.1357 4.38649 65.6656 4.77719 66.0563C5.16789 66.447 5.69779 66.6665 6.25033 66.6665H22.917C22.9342 66.3237 22.9759 65.9825 23.042 65.6457Z" fill="#0FADBC"/>
                  <path d="M45.833 39.9373L44.208 41.5831C44.6112 41.5 44.9807 41.2993 45.2699 41.0064C45.5591 40.7135 45.755 40.3414 45.833 39.9373Z" fill="#0FADBC"/>
                  <path d="M12.5 56.1249C12.5 56.6775 12.7195 57.2074 13.1102 57.5981C13.5009 57.9888 14.0308 58.2083 14.5833 58.2083H24.6667L25.2917 55.4999L25.5625 54.3541V54.2499H16.6667V49.9999H29.875L34.0417 45.8333H14.5833C14.0308 45.8333 13.5009 46.0527 13.1102 46.4434C12.7195 46.8341 12.5 47.3641 12.5 47.9166V56.1249Z" fill="#0FADBC"/>
                  <path d="M69.7707 34.7292L62.7499 27.7083C62.4383 27.3959 62.0682 27.148 61.6606 26.9789C61.2531 26.8097 60.8162 26.7227 60.3749 26.7227C59.9337 26.7227 59.4967 26.8097 59.0892 26.9789C58.6817 27.148 58.3115 27.3959 57.9999 27.7083L29.4374 56.4375L27.0832 66.4583C26.9951 66.8906 26.9931 67.3361 27.0774 67.7692C27.1617 68.2022 27.3306 68.6144 27.5744 68.9821C27.8183 69.3498 28.1323 69.6658 28.4984 69.912C28.8646 70.1581 29.2757 70.3296 29.7082 70.4166C29.923 70.4382 30.1393 70.4382 30.3541 70.4166C30.6093 70.4583 30.8696 70.4583 31.1249 70.4166L41.2291 68.1875L69.7707 39.5833C70.0825 39.2735 70.33 38.9051 70.4988 38.4993C70.6677 38.0935 70.7546 37.6583 70.7546 37.2187C70.7546 36.7792 70.6677 36.344 70.4988 35.9382C70.33 35.5324 70.0825 35.164 69.7707 34.8542V34.7292ZM39.1041 64.3958L31.4791 66.0833L33.3332 58.5208L54.7499 36.875L60.6249 42.75L39.1041 64.3958ZM62.9791 40.3958L57.1041 34.5208L60.4166 31.25L66.3332 37.1667L62.9791 40.3958Z" fill="#0FADBC"/>
                </g>
                <defs>
                  <clipPath id="clip0_822_7553">
                    <rect width="75" height="75" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#017289]">STEP 1</h3>
            <p className="text-gray-700">Apply Job</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-[#0FADBC] text-4xl">→</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative">
            <div className="w-20 h-20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                <path d="M62.5 12.5H12.5V62.5H62.5V12.5Z" stroke="#0FADBC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 31.25L31.25 25L37.5 31.25L43.75 25L50 31.25" stroke="#0FADBC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 50H50" stroke="#0FADBC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 43.75H50" stroke="#0FADBC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 37.5H50" stroke="#0FADBC" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#017289]">STEP 2</h3>
            <p className="text-gray-700">Upload your CV</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-[#0FADBC] text-4xl">→</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="75" viewBox="0 0 80 75" fill="none">
                <path d="M29.9142 35.25C36.2807 35.25 41.4417 30.3811 41.4417 24.375C41.4417 18.3689 36.2807 13.5 29.9142 13.5C23.5478 13.5 18.3867 18.3689 18.3867 24.375C18.3867 30.3811 23.5478 35.25 29.9142 35.25Z" stroke="#0FADBC" strokeWidth="4.07812"/>
                <path d="M52.9704 55.6409C52.9704 62.397 52.9704 67.8752 29.9154 67.8752C6.86035 67.8752 6.86035 62.397 6.86035 55.6409C6.86035 48.8848 17.1832 43.4065 29.9154 43.4065C42.6475 43.4065 52.9704 48.8848 52.9704 55.6409Z" stroke="#0FADBC" strokeWidth="4.07812"/>
                <path d="M74.8903 6H51.7217C51.2097 6 50.7186 6.1919 50.3565 6.53348C49.9944 6.87507 49.791 7.33836 49.791 7.82143V22.3929C49.791 22.8759 49.9944 23.3392 50.3565 23.6808C50.7186 24.0224 51.2097 24.2143 51.7217 24.2143H74.8903C75.4024 24.2143 75.8934 24.0224 76.2555 23.6808C76.6176 23.3392 76.821 22.8759 76.821 22.3929V7.82143C76.821 7.33836 76.6176 6.87507 76.2555 6.53348C75.8934 6.1919 75.4024 6 74.8903 6ZM72.7665 7.82143L63.306 13.9961L53.8455 7.82143H72.7665ZM51.7217 22.3929V8.65018L62.7558 15.8539C62.9174 15.9597 63.1093 16.0164 63.306 16.0164C63.5027 16.0164 63.6947 15.9597 63.8563 15.8539L74.8903 8.65018V22.3929H51.7217Z" fill="#0FADBC"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-[#017289]">STEP 3</h3>
            <p className="text-gray-700">Get an Email for Technical Round</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
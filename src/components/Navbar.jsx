// components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current && !servicesRef.current.contains(event.target) && 
        servicesButtonRef.current && !servicesButtonRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white text-gray-800 flex items-center justify-between px-8 py-3 border-b border-gray-200 shadow-sm relative">
      {/* Logo - Left aligned */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3Fsb3Jvbi10ZWNobm9sb2d5LmpwZw.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Navigation Links - Centered */}
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-6 text-sm items-center">
          <li className="text-cyan-500 font-medium">
            <Link to="/">HOME</Link>
          </li>
          
          {/* About Us Link */}
          <li className="hover:text-cyan-500 cursor-pointer font-medium">
            <Link to="/about">ABOUT US</Link>
          </li>

          {/* Services & Support Dropdown */}
          <li className="relative">
            <button 
              ref={servicesButtonRef}
              onClick={() => toggleDropdown('services')}
              className="hover:text-cyan-500 cursor-pointer font-medium flex items-center gap-1"
            >
              SERVICES & SUPPORT ▼
            </button>
            
            {openDropdown === 'services' && (
              <div 
                ref={servicesRef}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
              >
                <div className="px-4 py-2 font-medium text-gray-900">Services we provide</div>
                <button onClick={() => handleNavigation('/services/higher-resources')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Higher Resources</button>
                <button onClick={() => handleNavigation('/services/business-platform')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Technology Platform</button>
                <button onClick={() => handleNavigation('/services/erp')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Enterprise Resourcing Planning (ERP)</button>
                <button onClick={() => handleNavigation('/services/crm')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">CRM & Customer Experience (CX)</button>
                <button onClick={() => handleNavigation('/services/spend-management')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Spend Management</button>
                <button onClick={() => handleNavigation('/services/hcm')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Human Capital Management</button>
                <button onClick={() => handleNavigation('/services/financial-support')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Financial Support</button>
                <button onClick={() => handleNavigation('/services/web-hosting')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Hosting</button>
                <button onClick={() => handleNavigation('/services/web-development')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</button>
                <button onClick={() => handleNavigation('/services/app-development')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">App Development</button>
                <button onClick={() => handleNavigation('/services/digital-marketing')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital Marketing</button>
                <button onClick={() => handleNavigation('/services/data-export')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Export</button>
                
                <div className="border-t border-gray-200 my-1"></div>
                <div className="px-4 py-2 font-medium text-gray-900">Support</div>
                <button onClick={() => handleNavigation('/support')} className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">Qloron Services & Support</button>
              </div>
            )}
          </li>

          <li className="hover:text-cyan-500 cursor-pointer font-medium">
            <Link to="/technologies">TECHNOLOGIES</Link>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer font-medium">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer font-medium">
            <Link to="/contacts">CONTACT US</Link>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer font-medium">
            <Link to="/careers">CAREERS</Link>
          </li>
        </ul>
      </div>

      {/* Buttons - Right aligned */}
      <div className="flex-shrink-0 flex gap-3">
        <button 
          onClick={() => handleNavigation('/hire-developers')}
          className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
        >
          HIRE DEVELOPERS
        </button>
        <button 
          onClick={() => handleNavigation('/sortboxs')}
          className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-600 transition"
        >
          SORTBOXS
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
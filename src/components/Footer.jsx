import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Qloron</h3>
            <p className="text-gray-400">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Qloron All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
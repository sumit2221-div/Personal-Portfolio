import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-gray-900 text-white py-5">
      <footer className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-6">
        
        {/* Copyright Section */}
        <div className="text-sm text-gray-400 mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} Sumit Sonar. All rights reserved.
        </div>

      
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://github.com/sumit2221-div" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-transform transform hover:scale-110">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/sumit-sonar-780701270" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-transform transform hover:scale-110">
            <FaLinkedin size={22} />
          </a>
          <a href="https://x.com/sumitsonar519" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-transform transform hover:scale-110">
            <FaTwitter size={22} />
          </a>
        </div>

      </footer>
    </div>
  );
}

export default Footer;

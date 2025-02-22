import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      <h2 className="text-4xl font-bold border-b-4 border-green-400 pb-2 mb-8 tracking-widest">
        Contact Me
      </h2>

      {/* Contact Form */}
      <div className="w-full max-w-[350px] bg-black bg-opacity-30 backdrop-blur-md border border-green-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-transparent text-green-400 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-transparent text-green-400 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-transparent text-green-400 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-green-300"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-black font-bold rounded-md hover:bg-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8">
        <a
          href="https://github.com/sumit2221-div"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:text-green-500 transition-all duration-300 hover:scale-110"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-sonar-780701270"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:text-green-500 transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://x.com/sumitsonar519"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:text-green-500 transition-all duration-300 hover:scale-110"
        >
          <FaTwitter size={35} />
        </a>
        <a
          href="mailto:sumitsonar519@gmail.com"
          className="text-green-300 hover:text-green-500 transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope size={35} />
        </a>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data
const projects = [
  {
    title: "Real Estate Website",
    description: "A property management platform for buying, selling, and renting properties.",
    image: "https://source.unsplash.com/400x300/?realestate",
    github: "https://github.com/SumitSonar/real-estate",
    liveDemo: "https://real-estate-sumit.vercel.app",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using Socket.IO, React, and MongoDB.",
    image: "https://source.unsplash.com/400x300/?chat",
    github: "https://github.com/SumitSonar/chat-app",
    liveDemo: "https://chat-app-sumit.vercel.app",
  },
  {
    title: "Video Sharing Platform",
    description: "Upload, watch, and share videos with social media integrations.",
    image: "https://source.unsplash.com/400x300/?video",
    github: "https://github.com/SumitSonar/video-sharing",
    liveDemo: "https://video-platform-sumit.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my skills, projects, and contact details.",
    image: "https://source.unsplash.com/400x300/?portfolio",
    github: "https://github.com/SumitSonar/portfolio",
    liveDemo: "https://sumitsonar.vercel.app",
  },
];

function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      <h2 className="text-4xl font-bold border-b-4 border-green-400 pb-2 mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-black border border-green-400 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-80 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-300 hover:text-green-500">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-300 hover:text-green-500">
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

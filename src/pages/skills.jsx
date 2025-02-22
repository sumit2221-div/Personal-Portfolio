import React from "react";
import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, 
  FaJsSquare, FaGitAlt, FaCode, FaCloud, FaTools 
} from "react-icons/fa";
import { SiPostman,  SiRedux, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
   
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "React-Bits", icon: <FaReact className="text-blue-500" /> },
    { name: "Cloudinary", icon: <FaCloud className="text-cyan-400" /> },
    { name: "API Testing", icon: <FaTools className="text-yellow-400" /> },
    { name: "Problem Solving", icon: <FaCode className="text-purple-400" /> }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono p-8">
      
      {/* Section Title */}
      <h2 className="text-4xl font-bold border-b-4 border-green-400 pb-2 mb-8">My Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-black border border-green-400 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

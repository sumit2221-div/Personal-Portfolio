import React from 'react';
import Tilt from "react-parallax-tilt";
import SplitText from '../tools/text.animation.jsx';
import myphoto from '../assets/profile-pic.png';

function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-black text-green-400 font-mono relative overflow-hidden">
            
            {/* Glowing Background Animation */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute w-[400px] h-[400px] bg-green-400 rounded-full blur-[180px] opacity-20 top-1/4 left-1/4 animate-pulse"></div>
                <div className="absolute w-[300px] h-[300px] bg-green-500 rounded-full blur-[160px] opacity-20 bottom-1/4 right-1/4 animate-pulse"></div>
            </div>

            {/* Main Container */}
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-12 p-5 md:p-10 z-10">
                
                {/* Profile Photo with Tilt Effect */}
                <Tilt 
                    glareEnable={true} 
                    glareMaxOpacity={0.5} 
                    glareColor="lime" 
                    glarePosition="bottom" 
                    tiltMaxAngleX={20} 
                    tiltMaxAngleY={20} 
                    transitionSpeed={1000} 
                    perspective={1000}
                >
                    <div 
                        className="relative border-4 border-green-400 rounded-full p-1 shadow-lg shadow-green-500 
                        hover:shadow-green-300 hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        <img
                            src={myphoto}
                            alt="Sumit Sonar"
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
                        />
                    </div>
                </Tilt>

                {/* Text Section */}
                <div className="flex flex-col items-center md:items-start">
                    {/* Animated Text */}
                    <SplitText
                        text="Hi, I am Sumit Sonar"
                        className="text-4xl md:text-6xl font-bold text-center md:text-left tracking-wide glitch"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />

                    {/* Subtitle */}
                    <p className="mt-3 text-lg md:text-xl opacity-80 text-center md:text-left">
                        Full-Stack Developer | Problem Solver | Tech Enthusiast
                    </p>

                    {/* Hacker-style Terminal Box */}
                    <div className="mt-6 bg-black border border-green-400 p-6 rounded-md shadow-lg w-80 md:w-96 text-sm text-green-300">
                        <p className="animate-pulse">{">_ Welcome to my portfolio"}</p>
                        <p className="animate-pulse">{">_ Explore my projects & skills"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

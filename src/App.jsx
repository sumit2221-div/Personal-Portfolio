import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/home.jsx'));
const Projects = lazy(() => import('./pages/project.jsx'));
const Contact = lazy(() => import('./pages/contact.jsx'));
const Skills = lazy(() => import('./pages/skills.jsx'));
const SplashCursor = lazy(() => import('./tools/splashcursor.jsx'));

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-r from-black via-black to-gray-900 text-white min-h-screen flex flex-col'>

        <Navbar />

        <div className="flex-grow flex items-center justify-center p-5">
          <div className="text-center relative">
            {/* Lazy loaded cursor */}
            <Suspense fallback={<div className="text-gray-500">Loading Cursor...</div>}>
              <SplashCursor />
            </Suspense>

            <Suspense fallback={<div className="text-gray-400">Loading Page...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<Navigate to="/" />}/>
              </Routes>
            </Suspense>
          </div>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;

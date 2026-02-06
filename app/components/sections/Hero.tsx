'use client';

import { useState, useEffect } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import ParticlesBackground from '../ParticlesBackground';


export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-black pt-20 relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <p className="text-xl md:text-2xl mb-4 tracking-wide animate-fadeIn">
            Hello, I am
          </p>

         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fadeIn gradient-text">
  VINCE MARC JUSTINE
  <br />
  RUBANG
</h1>

         <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-600 animate-fadeIn shimmer-text">
  {typedText}<span className="animate-pulse">|</span>
</h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-700 animate-fadeIn">
            Specializing in modern web applications with expertise in React, Next.js, and AI-powered solutions. Passionate about creating user-centric solutions that solve real-world problems through clean code and innovative technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
            <a href="#projects" className="bg-black text-white px-8 py-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center">
              View My Work
            </a>
            <a href="/resume.pdf" download className="bg-white text-black px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center">
              Download Resume
            </a>
            <a href="#contact" className="bg-white text-black px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-lg font-semibold w-full sm:w-auto text-center">
              Get In Touch
            </a>
          </div>

          <div className="mt-20 animate-fadeIn">
            <a href="#about" className="inline-block animate-bounce">
              <HiArrowDown className="text-4xl text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
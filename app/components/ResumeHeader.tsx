'use client';

import { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';

export default function ResumeHeader() {
  const [showAltPhoto, setShowAltPhoto] = useState(false);

  return (
    <header className="bg-black text-white py-6 md:py-12 px-4 md:px-8 border-b-2 md:border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Photo Section - Works on both Desktop (hover) and Mobile (tap) */}
          <div 
            className="flex-shrink-0 cursor-pointer select-none"
            onMouseEnter={() => setShowAltPhoto(true)}
            onMouseLeave={() => setShowAltPhoto(false)}
            onClick={() => setShowAltPhoto(!showAltPhoto)}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 md:border-4 border-white overflow-hidden bg-gray-800">
              
              {/* Default Photo */}
              <Image
                src="/images/profile-photo.jpg"
                alt="Vince Marc Justine Rubang"
                width={160}
                height={160}
                className={`object-cover w-full h-full transition-opacity duration-500 ${showAltPhoto ? 'opacity-0' : 'opacity-100'}`}
              />
              
              {/* Hover/Tap Photo */}
              <Image
                src="/images/profile-photo-hover.jpg"
                alt="Vince Marc Justine Rubang"
                width={160}
                height={160}
                className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${showAltPhoto ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>

          {/* Rest of header content stays the same */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 gradient-text-white">
              VINCE MARC JUSTINE O. RUBANG
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4">Full-Stack Developer</p>
            
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-6">
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <HiMail className="text-lg" />
                <a href="mailto:vincerubang28@gmail.com" className="hover:text-gray-300 transition-colors">
                  vincerubang28@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <HiPhone className="text-lg" />
                <span>09603468348</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <HiLocationMarker className="text-lg" />
                <span>Ilocos Sur, Philippines</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href="https://github.com/vcramfcknj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <SiGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/rubang-vince-marc-justine-3484963a3/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <SiLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
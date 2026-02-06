'use client';

import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-md shadow-lg' : 'bg-white'} border-b-2 border-black`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="group">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter group-hover:tracking-wider transition-all duration-300">VMJR</span>
              <div className="h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="group relative px-6 py-2 text-lg font-medium transition-colors duration-300">
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-0 group-hover:opacity-5"></span>
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold relative overflow-hidden group">
            <span className="relative z-10">Lets Talk</span>
            <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>

          <button className="md:hidden text-3xl hover:scale-110 transition-transform duration-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 pb-4">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="group relative px-4 py-3 text-lg font-medium border-l-4 border-transparent hover:border-black transition-all duration-300" onClick={() => setIsOpen(false)}>
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-0 group-hover:opacity-5"></span>
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 font-semibold text-center">
              Lets Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
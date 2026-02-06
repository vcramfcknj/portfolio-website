'use client';

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 z-40 shadow-lg"
          aria-label="Back to top"
        >
          <HiArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
}
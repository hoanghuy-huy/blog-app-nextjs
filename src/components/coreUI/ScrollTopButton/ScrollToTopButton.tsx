'use client';
import { ArrowBigUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-md  hover:scale-105 transition-all ease-in-out duration-300"
    >
      <ArrowBigUp />
    </button>
  ) : null;
};

export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 bg-white text-gray-800 rounded-full p-3 shadow-md outline-none focus:outline-none hover:bg-gray-200"
          onClick={scrollToTop}
        >
          ⬆️
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;

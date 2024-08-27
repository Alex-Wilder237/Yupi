import { ArrowUpward } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show button when user is at the bottom of the page
    setShowButton(scrollY + windowHeight >= documentHeight - 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className='shadow-gray-600 shadow-md hover:rounded-full '
      onClick={scrollToTop}
      style={{
        display: showButton ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'black',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '10'
        
      }}
    >
<ArrowUpward  />
    </button>
  );
};

export default ScrollToTopButton;


import React, { useState } from 'react';

import { FaAngleUp } from 'react-icons/fa';

import { Button } from './ScrollToTopButton.styled';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);
console.log(isVisible);
  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <FaAngleUp />
        </Button>
      )}
    </>
  );
};

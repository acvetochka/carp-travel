'use client';

import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

const SmoothScrollComponent = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('[data-easing="easeInQuad"]', {
      speed: 700,
      easing: 'easeInQuad',
    });
  }, []);

  return null;
};

export default SmoothScrollComponent;

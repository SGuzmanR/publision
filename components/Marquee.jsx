import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Marquee = () => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marquee = marqueeRef.current;
    
    // Duplicate the marquee-inner content for seamless looping
    const contentWidth = marquee.scrollWidth;
    const duplicateContent = marquee.innerHTML;
    marquee.innerHTML += duplicateContent; // Append a duplicate of the content

    // GSAP animation for smooth, infinite scrolling
    gsap.to(marquee, {
      x: -contentWidth, // Move the content to the left
      duration: 25, // Duration for one complete scroll (adjust as needed)
      repeat: -1, // Repeat the animation infinitely
      ease: 'linear', // Smooth, constant speed
    });
  }, []);

  return (
    <div className="marquee uppercase relative overflow-hidden">
      <div
        className="marquee-inner w-fit flex flex-row max-sm:gap-6 gap-12 text-7xl max-sm:text-4xl pt-6"
        ref={marqueeRef}
      >
        <span className="marquee-part font-bold text-nowrap">
          PUBLICIDAD SIN LIMITES
        </span>
        <span className="marquee-part font-bold text-nowrap opacity-20">
          PUBLICIDAD SIN LIMITES
        </span>
        <span className="marquee-part font-bold text-nowrap">
          PUBLICIDAD SIN LIMITES
        </span>
        <span className="marquee-part font-bold text-nowrap opacity-20">
          PUBLICIDAD SIN LIMITES
        </span>
      </div>
    </div>
  );
};

export default Marquee;

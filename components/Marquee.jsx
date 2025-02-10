import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Marquee = () => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marquee = marqueeRef.current;
    
    const contentWidth = marquee.scrollWidth;
    const duplicateContent = marquee.innerHTML;
    marquee.innerHTML += duplicateContent;

    gsap.to(marquee, {
      x: -contentWidth,
      duration: 25,
      repeat: -1,
      ease: 'linear',
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

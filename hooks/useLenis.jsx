import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, []);
};

export default useLenis;
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import Marquee from "./Marquee";
import LogoAnimation from "./LogoAnimation";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.to('.hero_wrapper', {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      delay: 1.5,
      duration: 1.5,
      stagger: 0.5,
      ease: 'sine.inOut'
    })
  }, []);

  return (
    <section id="hero" className="h-screen">
      <div className="w-full h-full flex flex-col justify-end max-sm:justify-center items-start pb-20 gap-10">
        <div className="relative w-full flex flex-col justify-between items-end paddingX h-auto">
          <LogoAnimation /> 
        </div>

        <div className="hero_wrapper opacity-0">
          <Marquee /> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
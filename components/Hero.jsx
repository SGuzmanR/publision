import gsap from "gsap";
import { useEffect } from "react";

import Marquee from "./Marquee";
import LogoAnimation from "./LogoAnimation";

const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to('.hero_wrapper', {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      delay: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: 'sine.inOut'
    })
  }, []);

  return (
    <section id="hero" className="h-screen">
      <div className="w-full h-full flex flex-col justify-end max-sm:justify-center items-start pb-12 gap-6">
        <div className="relative w-full flex flex-col justify-between items-end paddingX h-auto">
          <LogoAnimation /> 
          <p className="hero_wrapper opacity-0 translate-y-[100%] absolute md:bottom-[65%] max-md:bottom-[-20%] sm:bottom-[60%] max-sm:bottom-[-25%] max-[380px]:bottom-[-40%] max-sm:text-[35px] max-[380px]:text-[25px] font-caveat text-red text-4xl">
            Damos imagen a tus ideas
          </p>
        </div>

        <div className="hero_wrapper opacity-0 translate-y-[100%]">
          <Marquee /> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
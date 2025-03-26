"use client"

import gsap from "gsap";
import { useEffect } from "react";

const Other = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#other",
        // markers: true, 
        start: "top bottom",
        end: "center center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    })
    
    tl.to('.other_text', {
      opacity: 1,
      duration: .5,
      stagger: 0.6,
      translateY: 0
    })
  }, []);

  return (
    <section id="other" className='bg-black flex flex-col justify-center items-center'>
      <div className='h-screen flex justify-center items-center w-full paddingX'>
        <h2 className='text-center uppercase w-full text-white text-nowrap justify-center text-[9vw] font-extrabold leading-none'>
          <span className='other_text opacity-0 translate-y-40'>O</span>
          <span className='other_text opacity-0 translate-y-40'>t</span>
          <span className='other_text opacity-0 translate-y-40'>h</span>
          <span className='other_text opacity-0 translate-y-40'>e</span>
          <span className='other_text opacity-0 translate-y-40'>r</span>
        </h2>
      </div>

      <div className='h-screen flex justify-center items-center w-full paddingX'>
        <h3 className="text-white font-3xl font-bold">Cotiza con nosotros...</h3>
      </div>
    </section>
  )
}

export default Other
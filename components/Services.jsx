"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        // markers: true, 
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    })
    
    tl.to('.services_text', {
      opacity: 1,
      duration: .5,
      stagger: 0.6,
      translateY: 0
    })

    let sections = gsap.utils.toArray('.sections');

    gsap.to(sections, {
      xPercent: -100 * (sections.length),
      ease: 'none',
      scrollTrigger: {
        trigger: '#services',
        pin: true,
        toggleActions: "play none none reversed",
        scrub: 1,
        snap: 1 / (sections.length),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="flex">
      <div className="flex flex-row">
        <div className="w-screen h-screen flex justify-center items-center flex-col paddingX">
          <div className="relative">
            <h2 className="services_text opacity-0 text-start uppercase w-full text-red text-nowrap justify-center text-[9vw] font-extrabold leading-none">
              <span className="services_text opacity-0 translate-y-40">S</span>
              <span className="services_text opacity-0 translate-y-40">e</span>
              <span className="services_text opacity-0 translate-y-40">r</span>
              <span className="services_text opacity-0 translate-y-40">v</span>
              <span className="services_text opacity-0 translate-y-40">i</span>
              <span className="services_text opacity-0 translate-y-40">c</span>
              <span className="services_text opacity-0 translate-y-40">i</span>
              <span className="services_text opacity-0 translate-y-40">o</span>
              <span className="services_text opacity-0 translate-y-40">s</span>
            </h2>
          </div>
        </div>

        {/* Start Sections */}
        <div id="services1" className="sections relative w-screen h-screen flex flex-row justify-center items-center">
          <div className="absolute">
            <span className="font-bold text-2xl text-white">Section 1 Content</span>
          </div>

          <img src="/test.jpg" alt="test" className="object-cover h-full w-full" />
        </div>

        <div id="services2" className="sections relative w-screen h-screen flex flex-row justify-center items-center bg-red">
          <div className="absolute">
            <span className="font-bold text-2xl text-white">Section 2 Content</span>
          </div>

          {/* <img src="/test.jpg" alt="test" className="object-cover h-full" /> */}
        </div>

        <div id="services3" className="sections relative w-screen h-screen flex flex-row justify-center items-center bg-black">
          <div className="absolute">
            <span className="font-bold text-2xl text-white">Section 3 Content</span>
          </div>

          {/* <img src="/test.jpg" alt="test" className="object-cover h-full" /> */}
        </div>
      </div>
    </section>
  )
};

export default About;
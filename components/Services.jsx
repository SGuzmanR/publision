"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Image from "next/image";

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

    tl.fromTo('.about_img', {
      opacity: 0,
      translateX: -120,
      translateY: 100
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power4.inOut"
    })
    
    tl.to('.about_text', {
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
  }, []);

  return (
    <section id="services" className="flex">
      <div className="flex flex-row">
        <div className="w-screen h-screen flex justify-center items-center flex-col paddingX">
          <div className="about relative">
            <h2 className="about_text opacity-0 text-start uppercase w-full text-red text-nowrap justify-center text-[9vw] font-extrabold leading-none">
              <span className="about_text opacity-0 translate-y-40">S</span>
              <span className="about_text opacity-0 translate-y-40">e</span>
              <span className="about_text opacity-0 translate-y-40">r</span>
              <span className="about_text opacity-0 translate-y-40">v</span>
              <span className="about_text opacity-0 translate-y-40">i</span>
              <span className="about_text opacity-0 translate-y-40">c</span>
              <span className="about_text opacity-0 translate-y-40">i</span>
              <span className="about_text opacity-0 translate-y-40">o</span>
              <span className="about_text opacity-0 translate-y-40">s</span>
            </h2>
          </div>
        </div>

        {/* Start Sections */}
        <div id="services1" className="sections relative w-screen h-screen flex flex-row justify-center items-center">
          <div className="absolute">
            Section 1 Content
          </div>

          <img src="/test.jpg" alt="test" className="object-contain" />
        </div>

        <div id="services2" className="sections w-screen h-screen flex flex-row justify-center items-center">
          <div>
            Section 2 Content
          </div>
        </div>

        <div id="services3" className="sections w-screen h-screen flex flex-row justify-center items-center">
          <div>
            Section 3 Content
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
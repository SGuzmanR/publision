import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const splitTypes = revealRef.current.querySelectorAll('.reveal-description');

    splitTypes.forEach((char, i) => {
      const text = char.innerText.split('').map((letter, index) => {
        if (letter === ' ') {
          return ' ';
        } else {
          return `<span class="char" style="display:inline-block">${letter}</span>`;
        }
      }).join('');
      char.innerHTML = text;

      const chars = char.querySelectorAll('.char');

      gsap.from(chars, {
        scrollTrigger: {
          trigger: "#about",
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          // markers: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    gsap.to(revealRef.current, {
      scrollTrigger: {
        trigger: revealRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        // markers: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        // markers: true, 
        start: "top bottom",
        end: "center center",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    })
    
    tl.to('.about_text', {
      opacity: 1,
      duration: .5,
      stagger: 0.6,
      translateY: 0
    })
  }, []);

  return (
    <section id='about' className='bg-red'>
      <div className='paddingX py-8 h-screen flex flex-col justify-center items-start w-full gap-6' ref={revealRef}>
        <h2 className='text-start uppercase w-full text-white text-nowrap justify-center text-[9vw] font-extrabold leading-none'>
          <span className='about_text opacity-0 translate-y-40'>S</span>
          <span className='about_text opacity-0 translate-y-40'>o</span>
          <span className='about_text opacity-0 translate-y-40'>b</span>
          <span className='about_text opacity-0 translate-y-40'>r</span>
          <span className='about_text opacity-0 translate-y-40'>e</span>
          <span className='about_text opacity-0 translate-y-40'> </span>
          <span className='about_text opacity-0 translate-y-40'>N</span>
          <span className='about_text opacity-0 translate-y-40'>o</span>
          <span className='about_text opacity-0 translate-y-40'>s</span>
          <span className='about_text opacity-0 translate-y-40'>o</span>
          <span className='about_text opacity-0 translate-y-40'>t</span>
          <span className='about_text opacity-0 translate-y-40'>r</span>
          <span className='about_text opacity-0 translate-y-40'>o</span>
          <span className='about_text opacity-0 translate-y-40'>s</span>
        </h2>
        <p className='reveal-description font-normal text-2xl text-white'>
          Somos una empresa que nacio de... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate maxime cumque quibusdam doloribus maiores nam numquam quae nisi quia rerum corrupti aperiam, voluptatibus deserunt voluptas tempore odit id commodi?
        </p>
      </div>
    </section>
  )
};

export default About;

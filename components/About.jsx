import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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
          markers: true,
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
        markers: false,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id='about' className='bg-red'>
      <div className='paddingX py-8 h-screen flex flex-col justify-center items-start w-full gap-6' ref={revealRef}>
        <h2 className='reveal-title text-start uppercase w-full text-white text-nowrap justify-center text-[9vw] font-extrabold leading-none'>
          <span className='title'>S</span>
          <span className='title'>o</span>
          <span className='title'>b</span>
          <span className='title'>r</span>
          <span className='title'>e</span>
          <span className='title'> </span>
          <span className='title'>N</span>
          <span className='title'>o</span>
          <span className='title'>s</span>
          <span className='title'>o</span>
          <span className='title'>t</span>
          <span className='title'>r</span>
          <span className='title'>o</span>
          <span className='title'>s</span>
        </h2>
        <p className='reveal-description font-normal text-2xl'>Somos una empresa que nacio de... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate maxime cumque quibusdam doloribus maiores nam numquam quae nisi quia rerum corrupti aperiam, voluptatibus deserunt voluptas tempore odit id commodi?</p>
      </div>
    </section>
  )
};

export default About;

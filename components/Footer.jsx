"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { FooterSocialLinks } from '@/constants';

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        // markers: true, 
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    })

    tl.to('.contact_text', {
      opacity: 1,
      duration: .5,
      stagger: 0.6,
      translateY: 0
    });
  }, []);

  return (
    <footer id='contact' className='h-screen bg-red flex flex-col justify-between items-center'>
      {/* Contact */}
      <div className='paddingX w-full'>
        <div className='w-full flex flex-row justify-between items-center max-sm:flex-col gap-4 pt-6'>
          <h2 className='max-sm:text-center text-start uppercase w-full text-white text-nowrap justify-center max-sm:text-4xl text-[8vw] font-extrabold leading-none'>
            <span className="contact_text opacity-0 translate-y-40">C</span>
            <span className="contact_text opacity-0 translate-y-40">o</span>
            <span className="contact_text opacity-0 translate-y-40">n</span>
            <span className="contact_text opacity-0 translate-y-40">t</span>
            <span className="contact_text opacity-0 translate-y-40">a</span>
            <span className="contact_text opacity-0 translate-y-40">c</span>
            <span className="contact_text opacity-0 translate-y-40">t</span>
            <span className="contact_text opacity-0 translate-y-40">o</span>
          </h2>

          <div className='w-full flex flex-col text-end items-end justify-end font-mulish text-white text-sm max-sm:justify-center max-sm:items-center max-sm:text-center'>
            <p className='font-bold text-base pb-3'>Carrera 11 No. 7-05, Zipaquirá, Cundinamarca.</p>
            <p>312 410 2154 <b>|</b> 314 478 6497</p>
            <Link href="mailto:publision12@gmail.com" className='hover:underline'>publision12@gmail.com</Link>
          </div>
        </div>
      </div>


      {/* Google Maps */}
      <div className='w-full h-full py-8 max-sm:py-10'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4899026896887!2d-73.99956273121335!3d5.02399123622258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406fdb41414df7%3A0x9fa54805d302fcf5!2sAVISOS%20PUBLICIDAD%20PUBLISION!5e0!3m2!1sen!2sco!4v1739276565368!5m2!1sen!2sco" 
          width="100%" 
          height="100%" 
          className='border-0'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          crossOrigin="anonymous"></iframe>
      </div>
      
      {/* Footer */}
      <div className='paddingX pb-6 w-full flex flex-col gap-4 max-sm:gap-10'>
        <div className='flex flex-col items-center justify-center gap-7'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/logo_W.svg" alt='logo' width={150} height={74} className='max-sm:w-36' />
            <p className="font-caveat text-white text-2xl max-sm:text-xl text-nowrap">Damos imagen a tus ideas</p>
          </div>

          <div className='flex flex-row items-center justify-center gap-3'>
            {FooterSocialLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Image src={link.src} alt={link.name} width={25} height={25} className="hover:scale-105 transition-transform duration-300 will-change-transform" />
              </Link>
            ))}
          </div>
        </div>

        <div className='flex w-full flex-row justify-between items-center text-white text-xs font-mulish max-sm:flex-col max-sm:gap-3 max-sm:text-center'>
            <p>&copy; 2025 Publision. Todos los derechos reservados.</p>

            <p>Diseñador por <Link href="https://www.linkedin.com/in/sguzmanr/" target='_blank' className='hover:underline'>SGuzmanR</Link></p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
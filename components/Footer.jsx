"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { SocialLinks } from '@/constants';

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
    <footer id='contact' className='h-screen bg-red flex flex-col justify-between items-center gap-2'>
      {/* Contact */}
      <div className='paddingX w-full'>
        <div className='w-full flex justify-center items-center pt-6 max-sm:pt-10'>
          <h2 className='text-center uppercase w-full text-white text-nowrap justify-center max-sm:text-[12vw] text-[10vw] font-extrabold leading-none'>
            <span className="contact_text opacity-0 translate-y-40">C</span>
            <span className="contact_text opacity-0 translate-y-40">o</span>
            <span className="contact_text opacity-0 translate-y-40">n</span>
            <span className="contact_text opacity-0 translate-y-40">t</span>
            <span className="contact_text opacity-0 translate-y-40">a</span>
            <span className="contact_text opacity-0 translate-y-40">c</span>
            <span className="contact_text opacity-0 translate-y-40">t</span>
            <span className="contact_text opacity-0 translate-y-40">o</span>
          </h2>
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
      <div className='w-full flex flex-row max-sm:flex-col justify-between text-white max-sm:gap-6 sm:paddingX'>
        <div className='flex flex-col justify-center items-start max-sm:items-center gap-3'>
          <div className='flex flex-col justify-center items-start max-sm:items-center gap-2'>
            <Image src="/logo_W.svg" alt='logo' width={160} height={74} className='max-sm:w-36' />

            <p className="font-caveat text-xl max-sm:text-lg text-nowrap">Damos imagen a tus ideas</p>
          </div>

          <div className='flex flex-row items-center justify-center gap-3'>
            {SocialLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 520 520" className='fill-white'>
                  <path d={link.src}/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className='w-full flex flex-col items-end justify-center font-mulish max-sm:bg-white max-sm:py-4 text-sm'>
          <div className='max-sm:paddingX flex flex-col items-end justify-end gap-1'>
            <p className='font-bold text-lg max-sm:text-red text-end'>Carrera 11 No. 7-05, Zipaquirá, Cundinamarca.</p>

            <Link href="mailto:publision12@gmail.com" className='hover:underline flex flex-row gap-2 max-sm:text-black'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-white max-sm:fill-red' width={20} height={20}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              publision12@gmail.com
            </Link>

            <div className='flex gap-3 max-sm:text-black'>
              <Link href="tel:+573124102154" className='hover:underline flex flex-row gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-white max-sm:fill-red' width={20} height={20}><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                3124102154
              </Link>
              
              <Link href="tel:+573213267827" className='hover:underline flex flex-row gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-white max-sm:fill-red' width={20} height={20}><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                3213267827
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Footer */}
      <div className='paddingX py-6 w-full'>
        <div className='flex w-full flex-row justify-between items-center text-white text-xs font-mulish max-sm:flex-col max-sm:gap-2 max-sm:text-center max-sm:pb-10'>
          <p>&copy; 2025 Publision. Todos los derechos reservados.</p>

          <p>Diseñador por <Link href="https://www.linkedin.com/in/sguzmanr/" target='_blank' className='hover:underline'>SGuzmanR</Link></p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
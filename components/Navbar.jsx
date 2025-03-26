"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Navlinks, SocialLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const container = useRef();
  const tl = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap.from('#navbar', { 
      yPercent: -130,
      paused: true,
      duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }, []);

  useEffect(() => {
    gsap.to('.navlinks', {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      stagger: 0.2,
      delay: 1.6,
      ease: 'sine.inOut',
      duration: .5,
    });
  }, []);

  useEffect(() => {
    gsap.set(".navLinks_mobile", { opacity: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to("#nav-overlay", {
        duration: .50,
        translateY: 0,
        ease: "power4.inOut"
      })
      .to(".navLinks_mobile", {
        duration: .70,
        stagger: 0.2,
        opacity: 1,
        ease: "power4.inOut",
        delay: -0.50,
      })
  }, []);

  useEffect(() => {
    if (open) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-screen mt-3 paddingX z-40" ref={container}>
      {/* Main Nav */}
      <nav id="navbar" className="bg-white w-full flex flex-row justify-between items-center py-3 font-mulish px-6 rounded-lg">
        <div className="flex gap-2 max-[940px]:hidden">
          {Navlinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[14px] navlinks -translate-y-10 opacity-0 will-change-auto w-auto"
            >
              <span className={`
                ${link.isSpecial 
                  ? 'bg-red rounded-lg px-4 py-2 text-white' 
                  : 'bg-white rounded-lg px-4 py-2 text-black border-white hover:border-red hover:text-red border-2 transition-colors duration-500'
                }`}>{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          {SocialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="navlinks translate-y-10 opacity-0 fill-red" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 520 520">
                <path d={link.src}/>
              </svg>
            </Link>
          ))}
        </div>

        <div className="max-[940px]:flex hidden navlinks -translate-x-10 opacity-0 cursor-pointer">
          <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleOpen} className="fill-red hover:bg-red rounded-lg hover:fill-white p-1 transition-colors duration-500">
            <path fillRule="evenodd" clipRule="evenodd" 
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" 
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div id="nav-overlay" className="fixed h-screen w-screen top-0 left-0 bg-red z-50 translate-y-[100%]">
        <div className="flex flex-col w-full h-full items-center justify-between py-20 paddingX">
          <div className="flex flex-col text-white text-center gap-4 font-mulish font-bold text-xl">
            {Navlinks.map((link) => (
              <Link key={link.name} href={link.href} className={`navLinks_mobile opacity-0 ${link.isSpecial 
                ? 'bg-white rounded-lg px-4 py-2 text-red' 
                : 'bg-red rounded-lg px-4 py-2 text-white border-red hover:border-white hover:text-white border-2 transition-colors duration-500'
              }`} onClick={handleOpen} >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-10 items-center justify-center pb-20">
            <div className="flex gap-6">
              {SocialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" onClick={handleOpen} className="navLinks_mobile fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 520 520">
                    <path d={link.src}/>
                  </svg>
                </Link>
              ))}
            </div>

            <svg 
              width="60px" 
              height="60px" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              onClick={handleOpen}
              className="cursor-pointer hover:bg-white rounded-lg stroke-white hover:stroke-red transition-colors duration-500"
            >
              <path d="M16 8L8 16M8 8L16 16" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

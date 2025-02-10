"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Navlinks, SocialLinks } from "@/constants";
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {
  const navLinksRef = useRef([]);
  const [open, setOpen] = useState(false);

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
    let tl = gsap.timeline();
    tl.to('.navlinks', {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      stagger: 0.2,
      delay: 0,
      ease: 'sine.inOut',
      duration: .5,
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen mt-3 paddingX z-40">
      <nav id="navbar" className="bg-white w-full flex flex-row justify-between items-center py-4 font-mulish px-4 rounded-lg">
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

        <div className="flex flex-row justify-center items-center gap-4">
          {SocialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="navlinks translate-y-10 opacity-0">
              <Image src={link.src} alt={link.name} width={22} height={22} className="hover:scale-105 transition-transform duration-300 will-change-transform" />
            </Link>
          ))}
        </div>

        <div className="max-[940px]:flex hidden navlinks -translate-x-10 opacity-0">
          <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleOpen}>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#E41F2E"/>
          </svg>
        </div>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div className="mobile-nav fixed h-screen w-screen top-0 left-0 bg-red z-50">
          <div className="w-full h-full flex items-center justify-center">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleOpen}>
              <path d="M16 8L8 16M8 8L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
